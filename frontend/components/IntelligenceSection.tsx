"use client";

import { useState } from "react";

const capabilities = [
  {
    number: "01",
    title: "RAG",
    description:
      "Retrieval systems that connect language models with structured knowledge and real-world information.",
    tags: ["ChromaDB", "Embeddings", "Vector Search"],
  },
  {
    number: "02",
    title: "GENERATIVE AI",
    description:
      "LLM-powered applications designed to turn natural language into useful, contextual interactions.",
    tags: ["LLMs", "Prompt Engineering", "GenAI"],
  },
  {
    number: "03",
    title: "AUTOMATION",
    description:
      "AI-driven workflows that reduce repetitive work and make complex processes easier to understand and execute.",
    tags: ["Python", "AI Automation", "Agents"],
  },
  {
    number: "04",
    title: "DATA",
    description:
      "Working with data, machine learning and intelligent systems to transform information into decisions.",
    tags: ["Python", "Machine Learning", "Analytics"],
  },
];

export default function IntelligenceSection() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#f4e9e4] px-5 py-24 text-[#160b13] sm:px-6 sm:py-28 md:px-16 md:py-40"
    >
      {/* Background detail */}

      <div className="pointer-events-none absolute right-[-35%] top-[8%] h-[400px] w-[400px] rounded-full bg-[#d889a5]/20 blur-[120px] sm:right-[-20%] sm:h-[500px] sm:w-[500px] sm:blur-[140px] md:right-[-10%] md:top-[10%]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">

        {/* Section label */}

        <div className="mb-12 flex items-center gap-3 sm:mb-16 sm:gap-4">

          <span className="h-px w-7 shrink-0 bg-[#8e5269] sm:w-10" />

          <p className="text-[9px] tracking-[0.28em] text-[#8e5269] sm:text-[10px] sm:tracking-[0.35em]">
            01 / THE INTELLIGENCE
          </p>

        </div>


        {/* Main statement */}

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">

          <div>

            <h2 className="max-w-5xl text-[clamp(3.2rem,10vw,7.5rem)] font-light leading-[0.88] tracking-[-0.065em]">

              I don&apos;t just
              <br />

              work with{" "}

              <span className="italic text-[#9c4d6d]">
                AI.
              </span>

              <br />

              I build systems
              <br />

              around it.

            </h2>

          </div>


          {/* Intro */}

          <div className="flex items-end lg:pb-2">

            <p className="max-w-md text-[15px] leading-[1.9] text-[#654d57] sm:text-base md:text-lg">

              From retrieval-augmented generation to intelligent
              automation, I work across the layers that turn AI
              from a model into something people can actually use.

            </p>

          </div>

        </div>


        {/* Capability list */}

        <div className="mt-20 border-t border-[#160b13]/20 sm:mt-24 md:mt-28">

          {capabilities.map((item, index) => {

            const isActive = active === index;

            return (
              <div
                key={item.number}
                onMouseEnter={() => setActive(index)}
                onClick={() => setActive(index)}
                className={`group grid cursor-pointer border-b border-[#160b13]/20 py-7 transition-all duration-500 sm:py-8 md:grid-cols-[100px_1fr_1fr] md:items-center md:gap-10 ${
                  isActive ? "py-10 sm:py-12" : ""
                }`}
              >

                {/* Number */}

                <span className="mb-2 text-[9px] tracking-[0.25em] text-[#8e5269] sm:mb-3 sm:text-[10px] md:mb-0">
                  {item.number}
                </span>


                {/* Title */}

                <div>

                  <h3
                    className={`text-[2.5rem] font-light tracking-[-0.04em] transition-all duration-500 sm:text-4xl md:text-6xl ${
                      isActive
                        ? "translate-x-2 text-[#9c4d6d] md:translate-x-3"
                        : "text-[#160b13]"
                    }`}
                  >
                    {item.title}
                  </h3>

                </div>


                {/* Description */}

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isActive
                      ? "mt-5 max-h-40 opacity-100 md:mt-0"
                      : "max-h-0 opacity-0 md:mt-0 md:max-h-40 md:opacity-0"
                  }`}
                >

                  <p className="max-w-md text-sm leading-[1.8] text-[#654d57]">
                    {item.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">

                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#8e5269]/30 px-3 py-1 text-[9px] tracking-[0.12em] text-[#8e5269]"
                      >
                        {tag}
                      </span>
                    ))}

                  </div>

                </div>

              </div>
            );
          })}

        </div>


        {/* Bottom statement */}

        <div className="mt-14 flex items-center justify-between sm:mt-16 md:mt-20">

          <p className="text-[9px] tracking-[0.22em] text-[#8e5269] sm:text-[10px] sm:tracking-[0.25em]">
            INTELLIGENCE → EXPERIENCE
          </p>

          <span className="text-xl text-[#8e5269] sm:text-2xl">
            ↓
          </span>

        </div>

      </div>

    </section>
  );
}