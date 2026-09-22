from pathlib import Path
from pypdf import PdfReader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from sentence_transformers import SentenceTransformer
import chromadb
import os


# ============================================================
# 1. FILE PATHS
# ============================================================

BASE_DIR = Path(__file__).resolve().parent

PDF_PATH = BASE_DIR / "data" / "Bhumika_Profile.pdf"
MD_PATH = BASE_DIR / "data" / "Accenture_work.md"

CHROMA_PATH = os.getenv(
    "CHROMA_PATH",
    str(BASE_DIR / "chroma_db")
)

COLLECTION_NAME = "bhumika_profile"

# ============================================================
# 2. TEXT SPLITTER
# ============================================================

text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=800,
    chunk_overlap=150
)


# ============================================================
# 3. LOAD PROFILE PDF
# ============================================================

print("\nLoading Bhumika Profile PDF...")

reader = PdfReader(PDF_PATH)

pdf_text = ""

for page in reader.pages:

    page_text = page.extract_text()

    if page_text:
        pdf_text += page_text + "\n"


# ============================================================
# 4. REMOVE PUBLIC-FACING CHATBOT GUIDANCE
# ============================================================

start_marker = "Public-Facing Chatbot Guidance"

start_index = pdf_text.find(start_marker)

if start_index != -1:

    pdf_text = pdf_text[:start_index]

    print(
        "Removed public-facing chatbot guidance from PDF."
    )

else:

    print(
        "No chatbot guidance found."
    )


profile_chunks = text_splitter.split_text(
    pdf_text
)

print(
    f"Profile PDF pages: {len(reader.pages)}"
)

print(
    f"Profile PDF chunks: {len(profile_chunks)}"
)


# ============================================================
# 5. LOAD CURRENT ACCENTURE MARKDOWN
# ============================================================

print("\nLoading Accenture work document...")

if not MD_PATH.exists():

    raise FileNotFoundError(
        f"Could not find {MD_PATH}"
    )

accenture_text = MD_PATH.read_text(
    encoding="utf-8"
)

print(
    f"Accenture document characters: {len(accenture_text)}"
)


accenture_chunks = text_splitter.split_text(
    accenture_text
)

print(
    f"Accenture document chunks: {len(accenture_chunks)}"
)


# ============================================================
# 6. COMBINE DOCUMENTS
# ============================================================

documents = []
metadatas = []
ids = []


# ------------------------------------------------------------
# Profile chunks
# ------------------------------------------------------------

for i, chunk in enumerate(profile_chunks):

    documents.append(chunk)

    metadatas.append({
        "source": "Bhumika_Profile.pdf",
        "category": "profile"
    })

    ids.append(
        f"profile_{i}"
    )


# ------------------------------------------------------------
# Accenture chunks
# ------------------------------------------------------------

for i, chunk in enumerate(accenture_chunks):

    documents.append(chunk)

    metadatas.append({
        "source": "Accenture_work.md",
        "category": "professional_experience"
    })

    ids.append(
        f"accenture_{i}"
    )


print(
    f"\nTotal chunks to store: {len(documents)}"
)


# ============================================================
# 7. LOAD EMBEDDING MODEL
# ============================================================

print("\nLoading embedding model...")

embedding_model = SentenceTransformer(
    "all-MiniLM-L6-v2"
)

print(
    "Embedding model loaded!"
)


# ============================================================
# 8. CREATE CHROMADB
# ============================================================

print("\nConnecting to ChromaDB...")

client = chromadb.PersistentClient(
    path=CHROMA_PATH
)


# ------------------------------------------------------------
# Delete old collection
# ------------------------------------------------------------

try:

    client.delete_collection(
        name=COLLECTION_NAME
    )

    print(
        "Old collection deleted."
    )

except Exception:

    print(
        "No existing collection found."
    )


# ------------------------------------------------------------
# Create fresh collection
# ------------------------------------------------------------

collection = client.create_collection(
    name=COLLECTION_NAME
)


# ============================================================
# 9. CREATE EMBEDDINGS IN BATCHES
# ============================================================

print("\nCreating embeddings...")

BATCH_SIZE = 8

total_documents = len(documents)

for start in range(
    0,
    total_documents,
    BATCH_SIZE
):

    end = min(
        start + BATCH_SIZE,
        total_documents
    )

    batch_documents = documents[start:end]

    print(
        f"Embedding chunks {start + 1}-{end} "
        f"of {total_documents}..."
    )

    batch_embeddings = embedding_model.encode(
        batch_documents,
        show_progress_bar=False,
        convert_to_numpy=True
    )


    # --------------------------------------------------------
    # Store this batch immediately
    # --------------------------------------------------------

    collection.add(
        ids=ids[start:end],
        documents=batch_documents,
        embeddings=batch_embeddings.tolist(),
        metadatas=metadatas[start:end]
    )


    # --------------------------------------------------------
    # Explicitly delete batch from memory
    # --------------------------------------------------------

    del batch_embeddings
    del batch_documents


print(
    "\nAll embeddings created and stored."
)


# ============================================================
# 10. VERIFY DATABASE
# ============================================================

print("\n===================================")
print("DATA STORED SUCCESSFULLY")
print("===================================")

print(
    f"Profile chunks: {len(profile_chunks)}"
)

print(
    f"Accenture chunks: {len(accenture_chunks)}"
)

print(
    f"Total documents in ChromaDB: "
    f"{collection.count()}"
)

print(
    "\nChromaDB is ready."
)