"use client";

import { useState } from "react";

const skillGroups = [
  {
    number: "01",
    title: "AI / GENAI",
    description:
      "Building intelligent applications around modern language models, retrieval and agentic workflows.",
    skills: [
      "Generative AI",
      "Agentic AI",
      "RAG",
      "LLMs",
      "Prompt Engineering",
      "Claude",
      "DeepSeek",
    ],
  },
  {
    number: "02",
    title: "AI ENGINEERING",
    description:
      "Turning AI concepts into usable systems through retrieval infrastructure, APIs and application architecture.",
    skills: [
      "LangGraph",
      "LangChain",
      "FastAPI",
      "OpenSearch",
      "pgvector",
      "Neo4j",
      "Vector Search",
      "Embeddings",
    ],
  },
  {
    number: "03",
    title: "DATA / ML",
    description:
      "Working with data and machine learning foundations to build analytical and intelligent systems.",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Machine Learning",
      "TensorFlow",
      "PyTorch",
    ],
  },
  {
    number: "04",
    title: "EVALUATION / INTEGRATION",
    description:
      "Evaluating AI systems and connecting intelligent workflows with enterprise development environments.",
    skills: [
      "RAGAS",
      "DeepEval",
      "Jira",
      "ServiceNow",
      "Git",
      "Document Processing",
      "AI Automation",
    ],
  },
];

export default function SkillsSection() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#24121d] px-5 py-24 text-[#f8eee9] sm:px-6 sm:py-28 md:px-12 lg:px-16 lg:py-40"
    >
      {/* Background atmosphere */}

      <div className="pointer-events-none absolute right-[-35%] top-[8%] h-[420px] w-[420px] rounded-full bg-[#c85c86]/8 blur-[120px] sm:right-[-20%] sm:h-[500px] sm:w-[500px] lg:right-[-15%] lg:top-[10%] lg:h-[600px] lg:w-[600px] lg:bg-[#c85c86]/10 lg:blur-[150px]" />

      <div className="pointer-events-none absolute bottom-[-12%] left-[-25%] h-[360px] w-[360px] rounded-full bg-[#7d3554]/10 blur-[110px] sm:h-[420px] sm:w-[420px] lg:bottom-[-15%] lg:left-[-10%] lg:h-[500px] lg:w-[500px] lg:blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">

        {/* Section label */}

        <div className="mb-14 flex items-center gap-4 sm:mb-16 lg:mb-20">
          <span className="h-px w-8 bg-[#e7a9bd] sm:w-10" />

          <p className="text-[9px] tracking-[0.3em] text-[#e7a9bd] sm:text-[10px] sm:tracking-[0.35em]">
            04 / SKILLS
          </p>
        </div>


        {/* Header */}

        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">

          <div>

            <p className="mb-5 text-[9px] tracking-[0.25em] text-[#e7a9bd] sm:mb-6 sm:text-[10px] sm:tracking-[0.3em]">
              THE TECHNICAL LAYER
            </p>

            <h2 className="max-w-6xl text-[clamp(3.2rem,12vw,9rem)] font-light leading-[0.86] tracking-[-0.065em] sm:text-[clamp(4rem,8vw,9rem)] sm:leading-[0.83]">
              Tools are
              <br />
              only the{" "}
              <span className="italic text-[#e7a9bd]">
                beginning.
              </span>
            </h2>

          </div>

          <div className="flex items-end lg:pb-2">

            <p className="max-w-md text-[15px] leading-[1.8] text-[#b99fa9] sm:text-base sm:leading-[1.9] md:text-lg">
              I work across the AI application stack — from data and
              retrieval to reasoning, evaluation and the APIs that
              connect intelligent systems to real workflows.
            </p>

          </div>

        </div>


        {/* Skill system */}

        <div className="mt-20 grid gap-10 sm:mt-24 sm:gap-12 lg:mt-28 lg:grid-cols-[0.7fr_1.3fr]">

          {/* Categories */}

          <div className="border-t border-[#f8eee9]/15">

            {skillGroups.map((group, index) => {
              const isActive = active === index;

              return (
                <button
                  key={group.number}
                  onMouseEnter={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className="group flex min-h-[76px] w-full items-center justify-between border-b border-[#f8eee9]/15 py-5 text-left transition-all duration-500 sm:min-h-[88px] sm:py-7 md:py-10"
                >

                  <div className="flex min-w-0 items-center gap-4 sm:gap-6">

                    <span className="shrink-0 text-[8px] tracking-[0.2em] text-[#765c67] sm:text-[9px] sm:tracking-[0.25em]">
                      {group.number}
                    </span>

                    <span
                      className={`text-[1.3rem] font-light tracking-[-0.03em] transition-all duration-500 sm:text-2xl md:text-4xl ${
                        isActive
                          ? "translate-x-1 text-[#f4b6cb] sm:translate-x-2"
                          : "text-[#f8eee9]"
                      }`}
                    >
                      {group.title}
                    </span>

                  </div>

                  <span
                    className={`ml-4 shrink-0 text-lg transition-all duration-500 sm:text-xl ${
                      isActive
                        ? "translate-x-0 opacity-100"
                        : "translate-x-3 opacity-0"
                    }`}
                  >
                    ↗
                  </span>

                </button>
              );
            })}

          </div>


          {/* Active skill display */}

          <div className="relative min-h-[500px] overflow-hidden border border-[#f8eee9]/15 bg-[#160b13] sm:min-h-[520px]">

            {/* Decorative grid */}

            <div
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(248,238,233,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(248,238,233,0.5) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />

            {/* Glow */}

            <div className="pointer-events-none absolute left-1/2 top-[38%] h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c85c86]/15 blur-[80px] sm:top-1/2 sm:h-64 sm:w-64 sm:bg-[#c85c86]/20 sm:blur-[100px]" />


            {/* Content */}

            <div className="relative z-10 flex h-full min-h-[500px] flex-col justify-between p-5 sm:min-h-[520px] sm:p-8 md:p-12">

              <div className="flex items-start justify-between gap-4">

                <div>

                  <p className="text-[8px] tracking-[0.25em] text-[#e7a9bd] sm:text-[9px] sm:tracking-[0.3em]">
                    ACTIVE LAYER
                  </p>

                  <h3 className="mt-3 text-3xl font-light tracking-[-0.04em] sm:mt-4 sm:text-4xl md:text-5xl">
                    {skillGroups[active].title}
                  </h3>

                </div>

                <span className="shrink-0 font-serif text-4xl italic text-[#f4b6cb]/30 sm:text-5xl">
                  {skillGroups[active].number}
                </span>

              </div>


              {/* Skill constellation */}

              <div className="relative flex min-h-[220px] flex-wrap content-center items-center justify-center gap-2.5 py-10 sm:min-h-[250px] sm:gap-3 sm:py-12">

                {skillGroups[active].skills.map((skill, index) => (

                  <span
                    key={skill}
                    className={`rounded-full border px-3 py-2 text-[8px] tracking-[0.1em] transition-all duration-500 sm:px-4 sm:py-2.5 sm:text-[9px] sm:tracking-[0.14em] ${
                      index % 3 === 0
                        ? "border-[#e7a9bd]/50 text-[#f4b6cb]"
                        : "border-[#f8eee9]/15 text-[#b99fa9]"
                    }`}
                    style={{
                      transform: `translateY(${
                        index % 2 === 0 ? "-4px" : "4px"
                      })`,
                    }}
                  >
                    {skill}
                  </span>

                ))}

              </div>


              {/* Description */}

              <div className="border-t border-[#f8eee9]/15 pt-5 sm:pt-6">

                <p className="max-w-2xl text-[13px] leading-[1.7] text-[#9f858f] sm:text-sm sm:leading-[1.8] md:text-base">
                  {skillGroups[active].description}
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* Stack strip */}

        <div className="mt-20 border-y border-[#f8eee9]/15 py-6 sm:mt-24 sm:py-7 lg:mt-28 lg:py-8">

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 sm:gap-x-7 sm:gap-y-4">

            <span className="text-[8px] tracking-[0.25em] text-[#e7a9bd] sm:text-[9px] sm:tracking-[0.3em]">
              STACK
            </span>

            <span className="text-[#765c67]">/</span>

            {[
              "PYTHON",
              "LANGGRAPH",
              "RAG",
              "OPENSEARCH",
              "PGVECTOR",
              "NEO4J",
              "FASTAPI",
              "CLAUDE",
              "DEEPSEEK",
              "RAGAS",
              "DEEPEVAL",
            ].map((tech) => (

              <span
                key={tech}
                className="text-[8px] tracking-[0.15em] text-[#b99fa9] transition-colors duration-300 hover:text-[#f4b6cb] sm:text-[9px] sm:tracking-[0.18em]"
              >
                {tech}
              </span>

            ))}

          </div>

        </div>


        {/* Closing statement */}

        <div className="mt-24 border-t border-[#f8eee9]/15 pt-10 sm:mt-28 sm:pt-12 lg:mt-32">

          <div className="grid gap-7 md:grid-cols-[0.5fr_1.5fr] md:gap-10">

            <div>

              <p className="text-[9px] tracking-[0.25em] text-[#e7a9bd] sm:text-[10px] sm:tracking-[0.3em]">
                HOW I THINK ABOUT TECHNOLOGY
              </p>

            </div>

            <p className="max-w-5xl text-[1.8rem] font-light leading-[1.2] tracking-[-0.03em] text-[#d9c4cc] sm:text-3xl md:text-5xl">

              I&apos;m less interested in collecting{" "}

              <span className="italic text-[#f4b6cb]">
                tools
              </span>{" "}

              and more interested in understanding how they work together.

            </p>

          </div>

        </div>


        {/* Footer */}

        <div className="mt-16 flex items-center justify-between gap-6 sm:mt-20">

          <p className="max-w-[280px] text-[8px] tracking-[0.2em] text-[#765c67] sm:max-w-none sm:text-[9px] sm:tracking-[0.25em]">
            AI / DATA / ENGINEERING / EXPERIMENTATION
          </p>

          <span className="shrink-0 text-xl text-[#e7a9bd] sm:text-2xl">
            ↓
          </span>

        </div>

      </div>
    </section>
  );
}