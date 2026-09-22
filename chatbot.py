from search import retrieve, generate_answer
import re


def clean_answer(answer):
    """
    Clean Gemini's Markdown formatting so the chatbot
    displays professional plain text.
    """

    # Remove bold / italic Markdown markers
    answer = re.sub(r"\*\*(.*?)\*\*", r"\1", answer)
    answer = re.sub(r"__(.*?)__", r"\1", answer)
    answer = re.sub(r"\*(.*?)\*", r"\1", answer)
    answer = re.sub(r"_(.*?)_", r"\1", answer)

    # Remove Markdown heading markers
    answer = re.sub(r"^\s*#{1,6}\s*", "", answer, flags=re.MULTILINE)

    # Remove bullet characters at the beginning of lines
    answer = re.sub(r"^\s*[-*+]\s+", "", answer, flags=re.MULTILINE)

    # Remove numbered-list formatting such as "1. "
    answer = re.sub(r"^\s*\d+\.\s+", "", answer, flags=re.MULTILINE)

    # Remove Markdown links but keep the visible text
    answer = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", answer)

    # Clean excessive blank lines
    answer = re.sub(r"\n{3,}", "\n\n", answer)

    # Remove accidental spaces before punctuation
    answer = re.sub(r"\s+([,.;:])", r"\1", answer)

    return answer.strip()


def answer_question(question):
    """
    Retrieve relevant knowledge and generate an answer.
    """

    results = retrieve(question)

    answer = generate_answer(
        question,
        results
    )

    return clean_answer(answer)


if __name__ == "__main__":

    print("\n===================================")
    print(" Bhumika Personal AI Assistant")
    print("===================================")
    print("Type 'exit' to quit.\n")

    while True:

        question = input("You: ").strip()

        if question.lower() == "exit":
            print("\nGoodbye!")
            break

        if not question:
            continue

        try:

            answer = answer_question(question)

            print("\nAssistant:")
            print(answer)
            print()

        except Exception as e:

            print("\nError:")
            print(e)
            print()