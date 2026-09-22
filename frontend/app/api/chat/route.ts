import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch(
      "http://127.0.0.1:8000/chat",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: body.message,
        }),
      }
    );

    const data = await response.json();

    // Pass FastAPI's response through unchanged.
    if (!response.ok) {
      return NextResponse.json(
        data,
        {
          status: response.status,
        }
      );
    }

    return NextResponse.json(data);

  } catch (error) {
    console.error("Chat API error:", error);

    return NextResponse.json(
      {
        error:
          "Unable to connect to Bhumika's AI system.",
      },
      {
        status: 500,
      }
    );
  }
}