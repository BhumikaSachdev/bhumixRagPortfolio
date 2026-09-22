"use client";

import { FormEvent, useEffect, useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const suggestions = [
  "What has Bhumika built?",
  "Tell me about her AI engineering experience",
  "What technologies does she work with?",
  "Tell me about her work at Accenture",
  "What is she currently exploring?",
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi. I’m Bhumika’s AI layer. Ask me about her work, projects, technical background, or what she’s exploring.",
    },
  ]);

  // Close with Escape + prevent background scrolling
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const sendMessage = async (text: string) => {
  const trimmed = text.trim();

  if (!trimmed || isTyping) return;

  setMessages((prev) => [
    ...prev,
    {
      role: "user",
      content: trimmed,
    },
  ]);

  setInput("");
  setIsTyping(true);

  try {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: trimmed,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.error || `Chat API returned ${response.status}`
    );
  }

  setMessages((prev) => [
    ...prev,
    {
      role: "assistant",
      content:
        data.answer ||
        "I couldn't generate a response.",
    },
  ]);

} catch (error) {
  console.error("Chat error:", error);

  setMessages((prev) => [
    ...prev,
    {
      role: "assistant",
      content:
        error instanceof Error
          ? error.message
          : "I’m unable to reach my knowledge system right now.",
    },
  ]);
} finally {
  setIsTyping(false);
 }
};

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* NAVBAR TRIGGER */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="
          rounded-full
          border border-[#f8eee9]/30
          px-5 py-2.5
          text-[10px]
          tracking-[0.18em]
          text-[#f8eee9]
          transition-all duration-300
          hover:bg-[#f8eee9]
          hover:text-[#160b13]
        "
        aria-label="Open Ask Bhumika AI"
      >
        ASK BHUMIKA <span className="ml-1">✦</span>
      </button>

      {/* CHAT OVERLAY */}
      {isOpen && (
        <div className="fixed inset-0 z-[100]">
          {/* BACKDROP */}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="
              absolute inset-0
              h-full w-full
              cursor-default
              bg-[#160b13]/65
            "
            aria-label="Close chatbot"
          />

          {/* PANEL */}
          <aside
            role="dialog"
            aria-modal="true"
            aria-label="Bhumika AI"
            className="
              absolute right-0 top-0
              flex h-full
              w-full flex-col
              bg-[#160b13]
              text-[#f8eee9]
              shadow-2xl
              sm:w-[460px]
              lg:w-[500px]
            "
          >
            {/* TOP BORDER */}
            <div className="absolute left-0 top-0 h-px w-full bg-[#c85c86]" />

            {/* HEADER */}
            <header className="flex items-center justify-between border-b border-[#f8eee9]/10 px-6 py-5">
              <div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#c85c86] shadow-[0_0_10px_#c85c86]" />

                  <span className="text-[10px] tracking-[0.2em] text-[#f8eee9]">
                    BHUMIKA AI
                  </span>
                </div>

                <p className="mt-2 text-[8px] tracking-[0.2em] text-[#765c67]">
                  PERSONAL KNOWLEDGE SYSTEM
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="
                  flex h-9 w-9
                  items-center justify-center
                  rounded-full
                  border border-[#f8eee9]/15
                  text-[#b99fa9]
                  transition-colors
                  hover:border-[#f8eee9]/40
                  hover:text-[#f8eee9]
                "
                aria-label="Close chatbot"
              >
                ×
              </button>
            </header>

            {/* STATUS */}
            <div className="border-b border-[#f8eee9]/10 px-6 py-3">
              <div className="flex items-center justify-between">
                <span className="text-[8px] tracking-[0.18em] text-[#9f858f]">
                  KNOWLEDGE BASE
                </span>

                <span className="flex items-center gap-2 text-[8px] tracking-[0.15em] text-[#b99fa9]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c85c86]" />
                  ONLINE
                </span>
              </div>
            </div>

            {/* CHAT CONTENT */}
            <div className="flex-1 overflow-y-auto px-6 py-8">
              {/* INTRO */}
              <div className="mb-10">
                <p className="mb-4 text-[9px] tracking-[0.2em] text-[#c85c86]">
                  ASK BHUMIKA
                </p>

                <h2 className="max-w-[390px] text-3xl leading-[1.05] tracking-[-0.04em] text-[#f8eee9] sm:text-4xl">
                  Explore the
                  <span className="font-serif italic text-[#e7a9bd]">
                    {" "}
                    intelligence
                  </span>
                  <br />
                  behind the work.
                </h2>
              </div>

              {/* MESSAGES */}
              <div className="space-y-6">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={
                      message.role === "user"
                        ? "ml-auto max-w-[85%]"
                        : "max-w-[90%]"
                    }
                  >
                    {message.role === "assistant" && (
                      <div className="mb-2 text-[8px] tracking-[0.18em] text-[#c85c86]">
                        BHUMIKA AI
                      </div>
                    )}

                    <div
                      className={
                        message.role === "user"
                          ? `
                            border
                            border-[#c85c86]/30
                            bg-[#24121d]
                            px-4 py-3
                            text-sm
                            leading-relaxed
                            text-[#f8eee9]
                          `
                          : `
                            border-l
                            border-[#c85c86]/50
                            pl-4
                            text-sm
                            leading-[1.7]
                            text-[#b99fa9]
                          `
                      }
                    >
                      {message.content}
                    </div>
                  </div>
                ))}

                {/* TYPING INDICATOR */}
                {isTyping && (
                  <div className="max-w-[90%]">
                    <div className="mb-2 text-[8px] tracking-[0.18em] text-[#c85c86]">
                      BHUMIKA AI
                    </div>

                    <div className="flex items-center gap-1 border-l border-[#c85c86]/50 pl-4">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#b99fa9]" />
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#b99fa9] [animation-delay:150ms]" />
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#b99fa9] [animation-delay:300ms]" />
                    </div>
                  </div>
                )}
              </div>

              {/* SUGGESTIONS */}
              {messages.length === 1 && (
                <div className="mt-10">
                  <p className="mb-4 text-[8px] tracking-[0.2em] text-[#765c67]">
                    START WITH
                  </p>

                  <div className="space-y-2">
                    {suggestions.map((question) => (
                      <button
                        key={question}
                        type="button"
                        onClick={() => sendMessage(question)}
                        className="
                          group
                          flex w-full
                          items-center justify-between
                          border-b border-[#f8eee9]/10
                          py-3
                          text-left
                          text-xs
                          text-[#b99fa9]
                          transition-colors
                          hover:text-[#f8eee9]
                        "
                      >
                        <span>{question}</span>

                        <span className="ml-4 text-[#765c67] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#c85c86]">
                          ↗
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* INPUT */}
            <div className="border-t border-[#f8eee9]/10 px-6 pb-5 pt-4">
              <form onSubmit={handleSubmit}>
                <div className="flex items-center border-b border-[#f8eee9]/20 pb-3">
                  <input
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    placeholder="Ask about the work..."
                    disabled={isTyping}
                    className="
                      min-w-0 flex-1
                      bg-transparent
                      text-sm
                      text-[#f8eee9]
                      outline-none
                      placeholder:text-[#765c67]
                    "
                  />

                  <button
                    type="submit"
                    disabled={!input.trim() || isTyping}
                    className="
                      ml-3
                      flex h-8 w-8
                      items-center justify-center
                      rounded-full
                      border border-[#c85c86]/40
                      text-[#c85c86]
                      transition-all duration-300
                      hover:bg-[#c85c86]
                      hover:text-[#160b13]
                      disabled:cursor-not-allowed
                      disabled:opacity-30
                    "
                    aria-label="Send message"
                  >
                    ↑
                  </button>
                </div>
              </form>

              <div className="mt-3 flex items-center justify-between">
                <span className="text-[7px] tracking-[0.18em] text-[#765c67]">
                  GROUNDED RESPONSES
                </span>

                <span className="text-[7px] tracking-[0.18em] text-[#765c67]">
                  ESC TO CLOSE
                </span>
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}