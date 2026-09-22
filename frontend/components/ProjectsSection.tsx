"use client";

import { useState } from "react";

const projects = [
  {
    number: "01",
    type: "PERSONAL / AI ENGINEERING",
    title: "Bhumika AI",
    subtitle: "A portfolio that can talk back.",
    description:
      "A personal RAG-powered AI assistant that understands my professional experience, projects, technical background and interests, allowing visitors to explore my profile conversationally.",
    tags: ["RAG", "ChromaDB", "Gemini", "Python", "FastAPI"],
    year: "2026",
  },
  {
    number: "02",
    type: "ACADEMIC / COMPUTER VISION",
    title: "TP-GAN",
    subtitle: "Generating a frontal view from a face.",
    description:
      "A facial frontal generation project exploring generative adversarial networks to transform non-frontal facial images into frontal representations.",
    tags: ["GANs", "Computer Vision", "Deep Learning", "Python"],
    year: "2024",
  },
  {
    number: "03",
    type: "EXPERIMENT / GENERATIVE AI",
    title: "AI Agents",
    subtitle: "From prompts to autonomous workflows.",
    description:
      "An evolving collection of experiments exploring agentic systems, tool use, memory, retrieval and multi-step reasoning to move beyond simple LLM interactions.",
    tags: ["Agents", "LangGraph", "LLMs", "RAG"],
    year: "2026",
  },
];

export default function ProjectsSection() {
  const [active, setActive] = useState(0);

  const project = projects[active];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#160b13] px-5 py-24 text-[#f8eee9] sm:px-6 sm:py-28 md:px-12 lg:px-16 lg:py-40"
    >
      {/* Background atmosphere */}

      <div className="pointer-events-none absolute right-[-35%] top-[8%] h-[450px] w-[450px] rounded-full bg-[#c85c86]/8 blur-[120px] sm:right-[-20%] sm:h-[550px] sm:w-[550px] lg:right-[-15%] lg:top-[10%] lg:h-[650px] lg:w-[650px] lg:bg-[#c85c86]/10 lg:blur-[160px]" />

      <div className="pointer-events-none absolute bottom-[-12%] left-[-25%] h-[360px] w-[360px] rounded-full bg-[#7d3554]/10 blur-[110px] sm:h-[420px] sm:w-[420px] lg:bottom-[-15%] lg:left-[-15%] lg:h-[500px] lg:w-[500px] lg:blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">

        {/* Section label */}

        <div className="mb-14 flex items-center gap-4 sm:mb-16 lg:mb-20">
          <span className="h-px w-8 bg-[#e7a9bd] sm:w-10" />

          <p className="text-[9px] tracking-[0.3em] text-[#e7a9bd] sm:text-[10px] sm:tracking-[0.35em]">
            05 / PROJECTS
          </p>
        </div>


        {/* Header */}

        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">

          <div>

            <p className="mb-5 text-[9px] tracking-[0.25em] text-[#e7a9bd] sm:mb-6 sm:text-[10px] sm:tracking-[0.3em]">
              SELECTED WORK / EXPERIMENTS
            </p>

            <h2 className="max-w-6xl text-[clamp(3.2rem,12vw,9rem)] font-light leading-[0.86] tracking-[-0.065em] sm:text-[clamp(4rem,8vw,9rem)] sm:leading-[0.83]">
              Things I&apos;ve
              <br />
              <span className="italic text-[#e7a9bd]">
                built.
              </span>
            </h2>

          </div>

          <div className="flex items-end lg:pb-2">

            <p className="max-w-md text-[15px] leading-[1.8] text-[#b99fa9] sm:text-base sm:leading-[1.9] md:text-lg">
              A selection of technical projects and experiments across
              artificial intelligence, computer vision, generative systems
              and creative technology.
            </p>

          </div>

        </div>


        {/* Project selector */}

        <div className="mt-20 grid gap-10 sm:mt-24 sm:gap-12 lg:mt-28 lg:grid-cols-[0.75fr_1.25fr]">

          {/* Project list */}

          <div className="border-t border-[#f8eee9]/15">

            {projects.map((item, index) => {
              const isActive = active === index;

              return (
                <button
                  key={item.number}
                  onMouseEnter={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className="group flex min-h-[88px] w-full items-center justify-between border-b border-[#f8eee9]/15 py-5 text-left transition-all duration-500 sm:min-h-[100px] sm:py-7 md:py-10"
                >

                  <div className="flex min-w-0 items-center gap-4 sm:gap-6">

                    <span className="shrink-0 text-[8px] tracking-[0.2em] text-[#765c67] sm:text-[9px] sm:tracking-[0.25em]">
                      {item.number}
                    </span>

                    <div className="min-w-0">

                      <p className="mb-1.5 text-[7px] tracking-[0.16em] text-[#765c67] sm:mb-2 sm:text-[8px] sm:tracking-[0.2em]">
                        {item.type}
                      </p>

                      <h3
                        className={`text-[1.3rem] font-light tracking-[-0.03em] transition-all duration-500 sm:text-2xl md:text-4xl ${
                          isActive
                            ? "translate-x-1 text-[#f4b6cb] sm:translate-x-2"
                            : "text-[#f8eee9]"
                        }`}
                      >
                        {item.title}
                      </h3>

                    </div>

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


          {/* Featured project panel */}

          <div className="relative min-h-[520px] overflow-hidden border border-[#f8eee9]/15 bg-[#24121d] sm:min-h-[560px]">

            {/* Technical grid */}

            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(248,238,233,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(248,238,233,0.5) 1px, transparent 1px)",
                backgroundSize: "70px 70px",
              }}
            />

            {/* Large project number */}

            <div className="absolute right-4 top-4 font-serif text-[7rem] font-light leading-none text-[#f8eee9]/[0.035] sm:right-8 sm:top-5 sm:text-[11rem] md:right-12 md:text-[14rem]">
              {project.number}
            </div>


            {/* Central visual */}

            <div className="absolute left-1/2 top-[35%] h-52 w-52 -translate-x-1/2 -translate-y-1/2 sm:top-[42%] sm:h-64 sm:w-64">

              <div className="absolute inset-0 rounded-full border border-[#e7a9bd]/20" />

              <div className="absolute inset-7 rounded-full border border-[#e7a9bd]/20 sm:inset-8" />

              <div className="absolute inset-14 rounded-full border border-[#e7a9bd]/30 sm:inset-16" />

              <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e7a9bd]/40 bg-[#160b13] shadow-[0_0_70px_rgba(200,92,134,0.25)] sm:h-20 sm:w-20 sm:shadow-[0_0_80px_rgba(200,92,134,0.25)]">

                <div className="flex h-full items-center justify-center">

                  <span className="font-serif text-2xl italic text-[#f4b6cb] sm:text-3xl">
                    {project.number}
                  </span>

                </div>

              </div>


              {/* Orbit points */}

              <span className="absolute left-[5%] top-[30%] h-1.5 w-1.5 rounded-full bg-[#e7a9bd] shadow-[0_0_20px_rgba(231,169,189,0.8)] sm:h-2 sm:w-2" />

              <span className="absolute right-[8%] top-[18%] h-1.5 w-1.5 rounded-full bg-[#f4b6cb]" />

              <span className="absolute bottom-[15%] left-[25%] h-1.5 w-1.5 rounded-full bg-[#f8eee9]" />

              <span className="absolute bottom-[8%] right-[20%] h-1.5 w-1.5 rounded-full bg-[#e7a9bd] sm:h-2 sm:w-2" />

            </div>


            {/* Information */}

            <div className="absolute inset-x-0 bottom-0 border-t border-[#f8eee9]/15 bg-[#160b13]/90 p-5 backdrop-blur-md sm:p-7 md:p-10">

              <div className="flex items-start justify-between gap-4 sm:gap-6">

                <div className="min-w-0">

                  <p className="text-[8px] tracking-[0.25em] text-[#e7a9bd] sm:text-[9px] sm:tracking-[0.3em]">
                    {project.type}
                  </p>

                  <h3 className="mt-2 text-[1.4rem] font-light leading-[1.15] tracking-[-0.04em] sm:mt-3 sm:text-3xl md:text-4xl">
                    {project.subtitle}
                  </h3>

                </div>

                <span className="shrink-0 text-[8px] tracking-[0.18em] text-[#765c67] sm:text-[9px] sm:tracking-[0.2em]">
                  {project.year}
                </span>

              </div>

              <p className="mt-4 max-w-2xl text-[13px] leading-[1.7] text-[#b99fa9] sm:mt-5 sm:text-sm sm:leading-[1.8]">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">

                {project.tags.map((tag) => (

                  <span
                    key={tag}
                    className="rounded-full border border-[#e7a9bd]/25 px-2.5 py-1.5 text-[8px] tracking-[0.1em] text-[#dcb7c5] sm:px-3 sm:text-[9px] sm:tracking-[0.12em]"
                  >
                    {tag}
                  </span>

                ))}

              </div>

            </div>

          </div>

        </div>


        {/* Project philosophy */}

        <div className="mt-24 border-t border-[#f8eee9]/15 pt-10 sm:mt-28 sm:pt-12 lg:mt-32">

          <div className="grid gap-7 md:grid-cols-[0.5fr_1.5fr] md:gap-10">

            <div>

              <p className="text-[9px] tracking-[0.25em] text-[#e7a9bd] sm:text-[10px] sm:tracking-[0.3em]">
                PROJECT PHILOSOPHY
              </p>

            </div>

            <p className="max-w-5xl text-[1.8rem] font-light leading-[1.2] tracking-[-0.03em] text-[#d9c4cc] sm:text-3xl md:text-5xl">

              I learn by{" "}

              <span className="italic text-[#f4b6cb]">
                building.
              </span>

              <br />

              Every project is a way to turn an idea into something
              tangible.

            </p>

          </div>

        </div>


        {/* Footer */}

        <div className="mt-16 flex items-center justify-between gap-6 sm:mt-20">

          <p className="max-w-[280px] text-[8px] tracking-[0.2em] text-[#765c67] sm:max-w-none sm:text-[9px] sm:tracking-[0.25em]">
            CODE / EXPERIMENTS / SYSTEMS / IDEAS
          </p>

          <span className="shrink-0 text-xl text-[#e7a9bd] sm:text-2xl">
            ↓
          </span>

        </div>

      </div>
    </section>
  );
}