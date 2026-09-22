from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel

from chatbot import answer_question

app = FastAPI(
    title="Bhumika Personal AI API"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ChatRequest(BaseModel):
    message: str


@app.get("/")
def root():
    return {
        "status": "online",
        "service": "Bhumika Personal AI"
    }


@app.post("/chat")
def chat(request: ChatRequest):
    try:
        answer = answer_question(request.message)

        return {
            "answer": answer
        }

    except Exception as e:
        error_message = str(e)

        print("\nCHAT ERROR:")
        print(error_message)

        if "quota" in error_message.lower() or "429" in error_message:
            return JSONResponse(
                status_code=429,
                content={
                    "error": (
                        "Bhumika AI has temporarily reached "
                        "its current AI request limit. "
                        "Please try again shortly."
                    )
                }
            )

        return JSONResponse(
            status_code=500,
            content={
                "error": (
                    "Bhumika AI encountered an unexpected "
                    "error while generating the response."
                )
            }
        )