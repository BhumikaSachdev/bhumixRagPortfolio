from dotenv import load_dotenv
from google import genai
import os

# Load variables from .env
load_dotenv()

# Get Gemini API key
api_key = os.getenv("GEMINI_API_KEY")

# Create Gemini client
client = genai.Client(api_key=api_key)

# Send a simple test request
response = client.interactions.create(
    model="gemini-3.6-flash",
    input="Explain what RAG is in one sentence."
)

print("\nGemini response:")
print(response.output_text)