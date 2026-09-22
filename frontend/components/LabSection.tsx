"use client";

import { useState } from "react";

const concepts = [
  {
    number: "01",
    category: "INTELLIGENCE / STYLE",
    title: "AI Styling",
    subtitle: "Personal style, interpreted by intelligence.",
    description:
      "An AI styling system that understands visual preferences, context and personal aesthetics to create more relevant fashion recommendations.",
    tags: ["Computer Vision", "LLMs", "Personalization"],
  },
  {
    number: "02",
    category: "SIGNALS / CULTURE",
    title: "Trend Intelligence",
    subtitle: "Finding the signal before it becomes the trend.",
    description:
      "A system that combines visual, cultural and conversational signals to identify emerging fashion patterns and translate them into actionable insights.",
    tags: ["Data Intelligence", "Vision AI", "Trend Analysis"],
  },
  {
    number: "03",
    category: "DISCOVERY / LUXURY",
    title: "Visual Luxury Search",
    subtitle: "Search by what you see, not what you know.",
    description:
      "A visual discovery experience for luxury fashion where an image becomes the starting point for finding visually similar products, materials, silhouettes and references.",
    tags: ["Computer Vision", "Embeddings", "Vector Search"],
  },
  {
    number: "04",
    category: "GENERATIVE / CREATIVE",
    title: "Generative Fashion",
    subtitle: "Where imagination becomes an interface.",
    description:
      "Exploring generative AI as a creative layer for fashion — from visual concepts and collections to interactive digital experiences.",
    tags: ["Generative AI", "Diffusion", "Creative AI"],
  },
];

export default function LabSection() {
  const [active, setActive] = useState(0);

  const current = concepts[active];

  return (
    <section
      id="lab"
      className="relative overflow-hidden bg-[#f4e9e4] px-5 py-24 text-[#160b13] sm:px-6 sm:py-28 md:px-12 lg:px-16 lg:py-40"
    >
      {/* Atmospheric background */}

      <div className="pointer-events-none absolute right-[-35%] top-[4%] h-[420px] w-[420px] rounded-full bg-[#d889a5]/15 blur-[120px] sm:right-[-20%] sm:h-[500px] sm:w-[500px] lg:right-[-15%] lg:top-[5%] lg:h-[600px] lg:w-[600px] lg:bg-[#d889a5]/20 lg:blur-[150px]" />

      <div className="pointer-events-none absolute bottom-[-15%] left-[-25%] h-[360px] w-[360px] rounded-full bg-[#c85c86]/10 blur-[110px] sm:h-[420px] sm:w-[420px] lg:bottom-[-20%] lg:left-[-10%] lg:h-[500px] lg:w-[500px] lg:blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">

        {/* Section label */}

        <div className="mb-14 flex items-center gap-4 sm:mb-16 lg:mb-20">
          <span className="h-px w-8 bg-[#8e5269] sm:w-10" />

          <p className="text-[9px] tracking-[0.3em] text-[#8e5269] sm:text-[10px] sm:tracking-[0.35em]">
            03 / THE LAB
          </p>
        </div>


        {/* Header */}

        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">

          <div>
            <p className="mb-5 text-[9px] tracking-[0.25em] text-[#8e5269] sm:mb-6 sm:text-[10px] sm:tracking-[0.3em]">
              AI × FASHION × CREATIVITY
            </p>

            <h2 className="max-w-6xl text-[clamp(3.2rem,12vw,9rem)] font-light leading-[0.86] tracking-[-0.065em] sm:text-[clamp(4rem,8vw,9rem)] sm:leading-[0.83]">
              Where
              <br />
              intelligence
              <br />
              meets{" "}
              <span className="italic text-[#9c4d6d]">
                imagination.
              </span>
            </h2>
          </div>

          <div className="flex items-end lg:pb-2">
            <p className="max-w-md text-[15px] leading-[1.8] text-[#654d57] sm:text-base sm:leading-[1.9] md:text-lg">
              A space for ideas at the intersection of artificial
              intelligence, fashion and human creativity. Some are
              experiments. Some are concepts. All are questions I want
              to explore.
            </p>
          </div>

        </div>


        {/* Interactive concept area */}

        <div className="mt-20 grid gap-10 sm:mt-24 sm:gap-12 lg:mt-28 lg:grid-cols-[0.7fr_1.3fr]">

          {/* Left navigation */}

          <div className="border-t border-[#160b13]/20">

            {concepts.map((concept, index) => {
              const isActive = active === index;

              return (
                <button
                  key={concept.number}
                  onMouseEnter={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className="group flex min-h-[76px] w-full items-center justify-between border-b border-[#160b13]/20 py-5 text-left sm:min-h-[88px] sm:py-7 md:py-9"
                >

                  <div className="flex min-w-0 items-center gap-4 sm:gap-6">

                    <span className="shrink-0 text-[9px] tracking-[0.2em] text-[#8e5269]">
                      {concept.number}
                    </span>

                    <span
                      className={`text-[1.35rem] font-light tracking-[-0.03em] transition-all duration-500 sm:text-2xl md:text-4xl ${
                        isActive
                          ? "translate-x-1 text-[#9c4d6d] sm:translate-x-2"
                          : "text-[#160b13]"
                      }`}
                    >
                      {concept.title}
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


          {/* Right visual / information panel */}

          <div className="relative min-h-[500px] overflow-hidden bg-[#160b13] sm:min-h-[520px]">

            {/* Decorative orbital rings */}

            <div className="absolute left-1/2 top-[35%] h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e7a9bd]/15 sm:top-1/2 sm:h-[360px] sm:w-[360px]" />

            <div className="absolute left-1/2 top-[35%] h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e7a9bd]/20 sm:top-1/2 sm:h-[260px] sm:w-[260px]" />

            <div className="absolute left-1/2 top-[35%] h-[110px] w-[110px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e7a9bd]/25 sm:top-1/2 sm:h-[150px] sm:w-[150px]" />

            {/* Glow */}

            <div className="pointer-events-none absolute left-1/2 top-[35%] h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c85c86]/25 blur-[60px] sm:top-1/2 sm:h-40 sm:w-40 sm:bg-[#c85c86]/30 sm:blur-[70px]" />

            {/* Central object */}

            <div className="absolute left-1/2 top-[35%] flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#e7a9bd]/40 bg-[#24121d]/80 backdrop-blur-sm transition-all duration-700 sm:top-1/2 sm:h-28 sm:w-28">

              <span className="font-serif text-4xl italic text-[#f4b6cb] sm:text-5xl">
                {String(active + 1).padStart(2, "0")}
              </span>

            </div>


            {/* Orbiting points */}

            <span className="absolute left-[15%] top-[22%] h-1.5 w-1.5 rounded-full bg-[#e7a9bd] shadow-[0_0_20px_rgba(231,169,189,0.8)] sm:left-[20%] sm:top-[28%] sm:h-2 sm:w-2" />

            <span className="absolute right-[17%] top-[18%] h-1.5 w-1.5 rounded-full bg-[#f4b6cb] sm:right-[22%] sm:top-[22%]" />

            <span className="absolute bottom-[40%] left-[20%] h-1.5 w-1.5 rounded-full bg-[#f8eee9] sm:bottom-[25%] sm:left-[27%]" />

            <span className="absolute bottom-[34%] right-[20%] h-1.5 w-1.5 rounded-full bg-[#e7a9bd] shadow-[0_0_20px_rgba(231,169,189,0.7)] sm:bottom-[18%] sm:right-[28%] sm:h-2 sm:w-2" />


            {/* Concept information */}

            <div className="absolute inset-x-0 bottom-0 border-t border-[#f8eee9]/15 bg-[#160b13]/85 p-5 backdrop-blur-md sm:p-7 md:p-10">

              <p className="text-[8px] tracking-[0.25em] text-[#e7a9bd] sm:text-[9px] sm:tracking-[0.3em]">
                {current.category}
              </p>

              <h3 className="mt-3 text-[1.45rem] font-light leading-[1.15] tracking-[-0.04em] text-[#f8eee9] sm:mt-4 sm:text-3xl md:text-4xl">
                {current.subtitle}
              </h3>

              <p className="mt-4 max-w-2xl text-[13px] leading-[1.7] text-[#b99fa9] sm:mt-5 sm:text-sm sm:leading-[1.8]">
                {current.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                {current.tags.map((tag) => (
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


        {/* Closing statement */}

        <div className="mt-24 border-t border-[#160b13]/20 pt-10 sm:mt-28 sm:pt-12 lg:mt-32">

          <div className="grid gap-7 md:grid-cols-[0.5fr_1.5fr] md:gap-10">

            <div>
              <p className="text-[9px] tracking-[0.25em] text-[#8e5269] sm:text-[10px] sm:tracking-[0.3em]">
                THE QUESTION
              </p>
            </div>

            <p className="max-w-5xl text-[1.8rem] font-light leading-[1.15] tracking-[-0.035em] sm:text-3xl md:text-5xl">
              What happens when AI stops being just a{" "}
              <span className="italic text-[#9c4d6d]">
                technology layer
              </span>{" "}
              and becomes part of the creative experience?
            </p>

          </div>

        </div>


        {/* Footer label */}

        <div className="mt-16 flex items-center justify-between gap-6 sm:mt-20">

          <p className="max-w-[280px] text-[8px] tracking-[0.2em] text-[#8e5269] sm:max-w-none sm:text-[9px] sm:tracking-[0.25em]">
            EXPERIMENTS / CONCEPTS / FUTURE SYSTEMS
          </p>

          <span className="shrink-0 text-xl text-[#8e5269] sm:text-2xl">
            ↓
          </span>

        </div>

      </div>
    </section>
  );
}