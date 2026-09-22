import re
import numpy as np
import chromadb

from sentence_transformers import SentenceTransformer, CrossEncoder
from google import genai
from dotenv import load_dotenv
import os


# ============================================================
# CONFIG
# ============================================================

load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

if not GEMINI_API_KEY:
    raise ValueError("GEMINI_API_KEY not found in .env")

client = genai.Client(api_key=GEMINI_API_KEY)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

CHROMA_PATH = os.getenv(
    "CHROMA_PATH",
    os.path.join(BASE_DIR, "chroma_db")
)

COLLECTION_NAME = "bhumika_profile"

EMBEDDING_MODEL = "sentence-transformers/all-MiniLM-L6-v2"
RERANKER_MODEL = "cross-encoder/ms-marco-MiniLM-L-6-v2"

TOP_K_VECTOR = 12
TOP_K_FINAL = 5

PRIMARY_MODEL = os.getenv(
    "GEMINI_MODEL",
    "gemini-3.6-flash"
)

BACKUP_MODEL = os.getenv(
    "GEMINI_BACKUP_MODEL",
    ""
)


# ============================================================
# LOAD MODELS
# ============================================================

print("Loading embedding model...")

embedding_model = SentenceTransformer(EMBEDDING_MODEL)

print("Loading reranker...")

reranker = CrossEncoder(RERANKER_MODEL)

print("Loading ChromaDB...")

chroma_client = chromadb.PersistentClient(path=CHROMA_PATH)

collection = chroma_client.get_collection(
    name=COLLECTION_NAME
)

print(f"Loaded collection: {COLLECTION_NAME}")
print(f"Total chunks: {collection.count()}")


# ============================================================
# INTENT DETECTION
# ============================================================

def detect_intent(query):
    """
    Detect whether the user is asking about:

    - professional experience
    - current learning
    - personal projects
    - general profile information
    """

    q = query.lower().strip()

    # --------------------------------------------------------
    # CURRENT LEARNING
    # --------------------------------------------------------

    learning_phrases = [
        "currently learning",
        "learning now",
        "currently studying",
        "studying",
        "what is she learning",
        "what is bhumika learning",
        "what is she currently learning",
        "current focus",
        "currently focusing",
        "what is she exploring",
        "currently exploring",
    ]

    if any(phrase in q for phrase in learning_phrases):
        return "learning"

    # --------------------------------------------------------
    # PERSONAL PROJECTS
    # --------------------------------------------------------

    personal_project_phrases = [
        "personal project",
        "personal projects",
        "side project",
        "side projects",
        "built herself",
        "own project",
        "own projects",
    ]

    if any(phrase in q for phrase in personal_project_phrases):
        return "personal_project"

    # --------------------------------------------------------
    # PROFESSIONAL EXPERIENCE
    # --------------------------------------------------------

    professional_phrases = [
        "professional experience",
        "work experience",
        "worked with",
        "worked on",
        "experience with",
        "experience in",

        "used",
        "use",
        "implemented",
        "implement",
        "built",
        "build",
        "developed",
        "develop",
        "created",
        "create",
        "designed",
        "design",
        "integrated",
        "integrate",
        "deployed",
        "deploy",
        "configured",
        "applied",

        "how did she",
        "how did bhumika",

        "what did she use",
        "what did she build",
        "what did she implement",
        "what did she develop",
        "what did she work on",
        "what did she do with",

        "how did she implement",
        "how did she build",
        "how did she develop",
        "how did she evaluate",

        "how was it implemented",
        "how was it built",

        "at accenture",
        "in her work",
        "in her role",
        "career experience",
    ]

    if any(phrase in q for phrase in professional_phrases):
        return "professional"

    # --------------------------------------------------------
    # GENERAL
    # --------------------------------------------------------

    return "general"


# ============================================================
# ENTITY EXTRACTION
# ============================================================

KNOWN_ENTITIES = [
    "langgraph",
    "langchain",
    "rag",
    "ragas",
    "deepeval",
    "deepseek",
    "claude",
    "neo4j",
    "opensearch",
    "pgvector",
    "fastapi",
    "python",
    "tensorflow",
    "pytorch",
    "scikit-learn",
    "machine learning",
    "generative ai",
    "agentic ai",
    "hybrid retrieval",
    "vector search",
    "embeddings",
    "prompt engineering",
    "jira",
    "servicenow",
    "dwp",
    "siebel",
]


def extract_entities(query):
    q = query.lower()

    found = []

    for entity in KNOWN_ENTITIES:
        if entity in q:
            found.append(entity)

    return found


# ============================================================
# KEYWORD SEARCH
# ============================================================

def keyword_search(query, documents, metadatas):
    """
    Simple keyword overlap scoring.
    """

    query_words = set(
        re.findall(r"\b[a-zA-Z0-9]+\b", query.lower())
    )

    results = []

    for i, doc in enumerate(documents):

        doc_words = set(
            re.findall(r"\b[a-zA-Z0-9]+\b", doc.lower())
        )

        if not query_words:
            overlap = 0
        else:
            overlap = len(query_words & doc_words) / len(query_words)

        results.append({
            "index": i,
            "keyword_score": overlap,
        })

    results.sort(
        key=lambda x: x["keyword_score"],
        reverse=True
    )

    return results


# ============================================================
# NORMALIZE RERANKER SCORES
# ============================================================

def normalize_reranker_scores(scores):

    if scores is None:
        return []

    scores = np.asarray(scores).reshape(-1).tolist()

    if len(scores) == 0:
        return []

    min_score = min(scores)
    max_score = max(scores)

    if max_score == min_score:
        return [0.5 for _ in scores]

    return [
        (score - min_score) / (max_score - min_score)
        for score in scores
    ]


# ============================================================
# SENTENCE SPLITTING
# ============================================================

def split_sentences(text):

    return re.split(
        r"(?<=[.!?])\s+|\n+",
        text
    )


# ============================================================
# EVIDENCE SIGNALS
# ============================================================

IMPLEMENTATION_WORDS = [
    "worked with",
    "worked on",
    "built",
    "implemented",
    "developed",
    "created",
    "designed",
    "integrated",
    "configured",
    "used",
    "applied",
    "deployed",
    "develop",
    "implementation",
    "workflow",
    "pipeline",
    "architecture",
    "retrieval",
    "orchestration",
]


LEARNING_WORDS = [
    "currently learning",
    "learning",
    "studying",
    "exploring",
    "currently focusing",
    "expanding her understanding",
]


PROFESSIONAL_WORDS = [
    "accenture",
    "professional experience",
    "project",
    "client",
    "dwp",
    "department for work and pensions",
    "enterprise",
    "production",
    "legacy system",
    "modernized",
    "modernized pension system",
]


PERSONAL_PROJECT_WORDS = [
    "personal project",
    "personal projects",
    "side project",
    "side projects",
    "built herself",
    "own project",
]


GENERIC_TECH_LIST_MARKERS = [
    "technologies used",
    "technology stack",
    "technologies:",
    "tech stack",
    "skills:",
]


def implementation_score(text):

    lower = text.lower()

    matches = sum(
        1 for word in IMPLEMENTATION_WORDS
        if word in lower
    )

    return min(matches * 0.06, 0.45)


def learning_score(text):

    lower = text.lower()

    matches = sum(
        1 for word in LEARNING_WORDS
        if word in lower
    )

    return min(matches * 0.08, 0.25)


def professional_score(text):

    lower = text.lower()

    matches = sum(
        1 for word in PROFESSIONAL_WORDS
        if word in lower
    )

    return min(matches * 0.06, 0.30)


def personal_project_score(text):

    lower = text.lower()

    matches = sum(
        1 for word in PERSONAL_PROJECT_WORDS
        if word in lower
    )

    return min(matches * 0.08, 0.25)


def entity_score(text, entities):

    if not entities:
        return 0

    lower = text.lower()

    matched = sum(
        1 for entity in entities
        if entity in lower
    )

    if matched == 0:
        return -0.20

    return min(matched * 0.15, 0.30)


def entity_proximity_score(text, entities):

    if not entities:
        return 0

    sentences = split_sentences(text)

    best_score = 0

    for sentence in sentences:

        sentence_lower = sentence.lower()

        has_entity = any(
            entity in sentence_lower
            for entity in entities
        )

        has_implementation = any(
            word in sentence_lower
            for word in IMPLEMENTATION_WORDS
        )

        if has_entity and has_implementation:
            best_score = max(best_score, 0.30)

        elif has_entity:
            best_score = max(best_score, 0.10)

    return best_score


# ============================================================
# QUESTION ACTION / EVIDENCE TYPE
# ============================================================

def question_action_score(query, text):

    q = query.lower()
    t = text.lower()

    score = 0

    # --------------------------------------------------------
    # EVALUATION QUESTIONS
    # --------------------------------------------------------

    evaluation_terms = [
        "evaluate",
        "evaluated",
        "evaluation",
        "measure",
        "measured",
        "quality",
        "assess",
        "assessed",
        "validate",
        "validated",
        "hallucination",
        "faithfulness",
        "regression",
    ]

    if any(term in q for term in evaluation_terms):

        evaluation_evidence = [
            "ragas",
            "deepeval",
            "evaluation",
            "context precision",
            "context recall",
            "faithfulness",
            "answer relevance",
            "hallucination",
            "regression",
            "quality measurement",
        ]

        matches = sum(
            1 for term in evaluation_evidence
            if term in t
        )

        score += min(matches * 0.12, 0.45)

    # --------------------------------------------------------
    # PURPOSE / USE QUESTIONS
    # --------------------------------------------------------

    purpose_terms = [
        "what did she use",
        "what was it used for",
        "used for",
        "purpose",
        "why did she use",
        "what did she use it for",
    ]

    if any(term in q for term in purpose_terms):

        purpose_terms_text = [
            "to automate",
            "to assist",
            "to improve",
            "to reduce",
            "purpose",
            "used to",
            "designed to",
            "helped",
            "enabled",
        ]

        matches = sum(
            1 for term in purpose_terms_text
            if term in t
        )

        score += min(matches * 0.08, 0.30)

    # --------------------------------------------------------
    # IMPLEMENTATION / HOW QUESTIONS
    # --------------------------------------------------------

    implementation_terms = [
        "how did",
        "how was",
        "implement",
        "implemented",
        "build",
        "built",
        "develop",
        "developed",
        "work",
        "worked",
    ]

    if any(term in q for term in implementation_terms):

        implementation_evidence = [
            "workflow",
            "pipeline",
            "architecture",
            "retrieval",
            "orchestration",
            "state",
            "node",
            "query",
            "embedding",
            "vector search",
            "keyword search",
            "reranking",
            "cross-encoder",
            "dependency",
            "integration",
        ]

        matches = sum(
            1 for term in implementation_evidence
            if term in t
        )

        score += min(matches * 0.06, 0.30)

    return score


# ============================================================
# LEARNING PENALTY
# ============================================================

def learning_penalty(query, text, intent):

    if intent != "professional":
        return 0

    lower = text.lower()

    learning_matches = sum(
        1
        for word in LEARNING_WORDS
        if word in lower
    )

    implementation_matches = sum(
        1
        for word in IMPLEMENTATION_WORDS
        if word in lower
    )

    # Penalize chunks that look primarily like learning material
    # when the user is clearly asking about professional work.

    if learning_matches > 0 and implementation_matches == 0:
        return -0.30

    return 0


# ============================================================
# TECHNOLOGY LIST PENALTY
# ============================================================

def technology_list_penalty(text):

    lower = text.lower()

    has_tech_list_marker = any(
        marker in lower
        for marker in GENERIC_TECH_LIST_MARKERS
    )

    if not has_tech_list_marker:
        return 0

    implementation_matches = sum(
        1
        for word in IMPLEMENTATION_WORDS
        if word in lower
    )

    if implementation_matches == 0:
        return -0.15

    return -0.05


# ============================================================
# VECTOR SEARCH
# ============================================================

def vector_search(query):

    query_embedding = embedding_model.encode(
        query
    ).tolist()

    results = collection.query(
        query_embeddings=[query_embedding],
        n_results=TOP_K_VECTOR,
        include=[
            "documents",
            "metadatas",
            "distances",
        ],
    )

    documents = results["documents"][0]
    metadatas = results["metadatas"][0]
    distances = results["distances"][0]

    return documents, metadatas, distances


# ============================================================
# HYBRID RETRIEVAL
# ============================================================

def retrieve_candidates(query):

    documents, metadatas, distances = vector_search(query)

    keyword_results = keyword_search(
        query,
        documents,
        metadatas
    )

    keyword_map = {
        item["index"]: item["keyword_score"]
        for item in keyword_results
    }

    candidates = []

    for i, document in enumerate(documents):

        distance = distances[i]

        vector_score = 1 / (1 + distance)

        keyword_score = keyword_map.get(
            i,
            0
        )

        candidates.append({
            "index": i,
            "document": document,
            "metadata": metadatas[i],
            "vector_score": vector_score,
            "keyword_score": keyword_score,
        })

    return candidates


# ============================================================
# RERANK
# ============================================================

def rerank_candidates(query, candidates):

    if not candidates:
        return []

    pairs = [
        [query, candidate["document"]]
        for candidate in candidates
    ]

    raw_scores = reranker.predict(pairs)

    reranker_scores = normalize_reranker_scores(
        raw_scores
    )

    for candidate, reranker_score in zip(
        candidates,
        reranker_scores
    ):
        candidate["reranker_score"] = reranker_score

    return candidates


# ============================================================
# FINAL SCORING
# ============================================================

def score_candidates(query, candidates):

    intent = detect_intent(query)

    entities = extract_entities(query)

    print(f"Detected intent: {intent}")

    if entities:
        print(
            "Technical entities:",
            ", ".join(entities)
        )

    for candidate in candidates:

        text = candidate["document"]

        # ----------------------------------------------------
        # BASE SCORES
        # ----------------------------------------------------

        reranker_component = candidate.get(
            "reranker_score",
            0
        )

        vector_rank_score = candidate.get(
            "vector_score",
            0
        )

        keyword_component = candidate.get(
            "keyword_score",
            0
        )

        # ----------------------------------------------------
        # EVIDENCE SCORES
        # ----------------------------------------------------

        entity_component = entity_score(
            text,
            entities
        )

        implementation_component = implementation_score(
            text
        )

        proximity_component = entity_proximity_score(
            text,
            entities
        )

        professional_component = 0

        if intent == "professional":
            professional_component = professional_score(
                text
            )

        learning_component = 0

        if intent == "learning":
            learning_component = learning_score(
                text
            )

        personal_project_component = 0

        if intent == "personal_project":
            personal_project_component = personal_project_score(
                text
            )

        # ----------------------------------------------------
        # PENALTIES
        # ----------------------------------------------------

        learning_penalty_component = learning_penalty(
            query,
            text,
            intent
        )

        technology_penalty_component = (
            technology_list_penalty(text)
        )

        # ----------------------------------------------------
        # QUESTION ACTION
        # ----------------------------------------------------

        action_component = question_action_score(
            query,
            text
        )

        # ----------------------------------------------------
        # FINAL SCORE
        # ----------------------------------------------------

        score = (
            0.20 * reranker_component
            + 0.05 * vector_rank_score
            + 0.10 * keyword_component

            + entity_component
            + implementation_component
            + proximity_component

            + professional_component
            + learning_component
            + personal_project_component

            + learning_penalty_component
            + technology_penalty_component

            + action_component
        )

        candidate["final_score"] = score

    candidates.sort(
        key=lambda x: x["final_score"],
        reverse=True
    )

    return candidates


# ============================================================
# RETRIEVE
# ============================================================

def retrieve(query):

    candidates = retrieve_candidates(query)

    candidates = rerank_candidates(
        query,
        candidates
    )

    candidates = score_candidates(
        query,
        candidates
    )

    return candidates[:TOP_K_FINAL]


# ============================================================
# CONTEXT BUILDER
# ============================================================

def build_context(results):

    context_parts = []

    for i, result in enumerate(results):

        metadata = result["metadata"]

        source = metadata.get(
            "source",
            "Unknown"
        )

        category = metadata.get(
            "category",
            "Unknown"
        )

        text = result["document"]

        context_parts.append(
            f"""
SOURCE {i + 1}
File: {source}
Category: {category}

{text}
"""
        )

    return "\n".join(context_parts)
# ============================================================
# CLEAN GEMINI RESPONSE
# ============================================================

def clean_answer(answer):
    """
    Remove Markdown formatting from Gemini's response
    so the portfolio chatbot displays clean text.
    """

    if not answer:
        return ""

    # Remove bold / italic Markdown
    answer = re.sub(r"\*\*(.*?)\*\*", r"\1", answer)
    answer = re.sub(r"__(.*?)__", r"\1", answer)
    answer = re.sub(r"\*(.*?)\*", r"\1", answer)
    answer = re.sub(r"_(.*?)_", r"\1", answer)

    # Remove Markdown headings
    answer = re.sub(
        r"^\s*#{1,6}\s*",
        "",
        answer,
        flags=re.MULTILINE
    )

    # Remove bullet points
    answer = re.sub(
        r"^\s*[-*+]\s+",
        "",
        answer,
        flags=re.MULTILINE
    )

    # Remove numbered list formatting
    answer = re.sub(
        r"^\s*\d+\.\s+",
        "",
        answer,
        flags=re.MULTILINE
    )

    # Convert Markdown links to their visible text
    answer = re.sub(
        r"\[([^\]]+)\]\([^)]+\)",
        r"\1",
        answer
    )

    # Remove excessive blank lines
    answer = re.sub(
        r"\n{3,}",
        "\n\n",
        answer
    )

    return answer.strip()

# ============================================================
# GEMINI ANSWER
# ============================================================

def generate_answer(query, results):
    context = build_context(results)

    prompt = f"""
You are the personal portfolio assistant for Bhumika Sachdev.

Answer the user's question using ONLY the provided context.

Important rules:

1. Do not invent experience, technologies, projects, responsibilities,
   employers, or achievements.

2. Clearly distinguish:
   - professional experience
   - personal projects
   - current learning

3. If the question asks what Bhumika DID, prioritize documented
   professional or project experience.

4. If the context says Bhumika is currently learning or exploring
   something, do not present that as professional experience.

5. If multiple pieces of context are relevant, combine them into one
   concise answer.

6. Mention specific technologies when they are directly supported
   by the context.

7. For technical questions, explain the actual workflow or approach
   rather than simply listing technologies.

8. Do not claim that Bhumika personally implemented something unless
   the context explicitly supports it.

9. If the information is not available in the context, say that
   it is not currently documented.

10. Answer in a professional, recruiter-friendly manner.

11. FORMAT THE RESPONSE AS CLEAN PLAIN TEXT.

12. Do NOT use Markdown formatting.

13. Do NOT use asterisks.

14. Do NOT use bullet points.

15. Do NOT use numbered lists.

16. Do NOT use Markdown headings.

17. Use short paragraphs and simple section labels when helpful.

18. Do not start every sentence on a new line unnecessarily.

19. Keep the response natural and conversational while remaining
    professional.

User question:

{query}

Context:

{context}
"""

    try:
        print(f"Using primary LLM: {PRIMARY_MODEL}")

        response = client.models.generate_content(
            model=PRIMARY_MODEL,
            contents=prompt,
        )

        print(f"Primary LLM succeeded: {PRIMARY_MODEL}")

        return clean_answer(response.text)

    except Exception as primary_error:
        print("\nPrimary LLM failed.")
        print(f"Model: {PRIMARY_MODEL}")
        print(f"Error: {primary_error}")

        if not BACKUP_MODEL:
            return (
                "I'm temporarily unable to generate a response. "
                "Please try again in a moment."
            )

        print(f"\nFalling back to backup LLM: {BACKUP_MODEL}")

        try:
            response = client.models.generate_content(
                model=BACKUP_MODEL,
                contents=prompt,
            )

            print(f"Backup LLM succeeded: {BACKUP_MODEL}")

            return clean_answer(response.text)

        except Exception as backup_error:
            print("\nBackup LLM also failed.")
            print(f"Model: {BACKUP_MODEL}")
            print(f"Error: {backup_error}")

            return (
                "I'm temporarily unable to generate a response. "
                "Please try again in a moment."
            )


# ============================================================
# DISPLAY RESULTS
# ============================================================

def display_results(results):

    print("\n" + "=" * 80)
    print("TOP RETRIEVED CHUNKS")
    print("=" * 80)

    for i, result in enumerate(results):

        print(
            f"\n[{i + 1}] "
            f"Score: {result['final_score']:.4f}"
        )

        print(
            "Source:",
            result["metadata"].get(
                "source",
                "Unknown"
            )
        )

        print(
            "Category:",
            result["metadata"].get(
                "category",
                "Unknown"
            )
        )

        print(
            "\n",
            result["document"][:1000]
        )

        print("-" * 80)


# ============================================================
# MAIN
# ============================================================

def main():

    print("\nBhumika RAG Assistant")
    print("Type 'exit' to quit.\n")

    while True:

        query = input("Ask a question: ").strip()

        if query.lower() in [
            "exit",
            "quit",
        ]:
            break

        if not query:
            continue

        try:

            results = retrieve(query)

            display_results(results)

            answer = generate_answer(
                query,
                results
            )

            print("\n" + "=" * 80)
            print("ANSWER")
            print("=" * 80)

            print(answer)

            print()

        except Exception as e:

            print(
                f"\nERROR: {e}"
            )


if __name__ == "__main__":
    main()