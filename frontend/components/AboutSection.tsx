"use client";

import { useState } from "react";

const interests = [
"ARTIFICIAL INTELLIGENCE",
"FASHION",
"PHOTOGRAPHY",
"TRAVEL",
"MUSIC",
"CREATIVE TECHNOLOGY",
];

const currentlyExploring = [
"GENERATIVE AI",
"RAG SYSTEMS",
"AI AGENTS",
"AI × FASHION",
];

export default function AboutSection() {
const [activeInterest, setActiveInterest] = useState(0);

return ( <section
   id="about"
   className="relative overflow-hidden bg-[#160b13] px-5 py-24 text-[#f8eee9] sm:px-6 sm:py-28 md:px-12 lg:px-16 lg:py-40"
 >
{/* Atmospheric background */}

```
  <div className="pointer-events-none absolute right-[-35%] top-[12%] h-[420px] w-[420px] rounded-full bg-[#c85c86]/8 blur-[110px] sm:right-[-20%] sm:h-[520px] sm:w-[520px] lg:right-[-15%] lg:top-[15%] lg:h-[600px] lg:w-[600px] lg:bg-[#c85c86]/10 lg:blur-[150px]" />

  <div className="pointer-events-none absolute bottom-[-12%] left-[-25%] h-[350px] w-[350px] rounded-full bg-[#7d3554]/10 blur-[110px] sm:h-[420px] sm:w-[420px] lg:bottom-[-20%] lg:left-[-10%] lg:h-[500px] lg:w-[500px] lg:blur-[140px]" />

  <div className="relative z-10 mx-auto max-w-[1500px]">

    {/* ================= HEADER ================= */}

    <div className="mb-14 flex items-center gap-4 sm:mb-16 lg:mb-20">
      <span className="h-px w-8 bg-[#e7a9bd] sm:w-10" />

      <p className="text-[9px] tracking-[0.3em] text-[#e7a9bd] sm:text-[10px] sm:tracking-[0.35em]">
        06 / ABOUT
      </p>
    </div>


    {/* ================= MAIN INTRO ================= */}

    <div className="grid gap-10 sm:gap-12 md:gap-14 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">

      {/* Large statement */}

      <div>
        <h2 className="max-w-6xl text-[clamp(3.3rem,12vw,9rem)] font-light leading-[0.86] tracking-[-0.065em] sm:text-[clamp(4rem,8vw,9rem)] sm:leading-[0.84]">
          The human
          <br />
          behind the{" "}
          <span className="italic text-[#e7a9bd]">
            systems.
          </span>
        </h2>
      </div>


      {/* Small identity block */}

      <div className="flex items-end">
        <div className="max-w-md">

          <p className="text-[15px] leading-[1.8] text-[#c5adb6] sm:text-base sm:leading-[1.9] md:text-base">
            I&apos;m Bhumika — an engineer working at the intersection
            of artificial intelligence, data and creative technology.
          </p>

          <p className="mt-5 text-[15px] leading-[1.8] text-[#9f858f] sm:mt-6 sm:text-base sm:leading-[1.9]">
            I like understanding how things work, building with new
            technology and finding ways to make complex systems feel
            simpler and more human.
          </p>

        </div>
      </div>

    </div>


    {/* ================= DIVIDER ================= */}

    <div className="my-20 h-px w-full bg-[#f8eee9]/15 sm:my-24" />


    {/* ================= PROFILE ================= */}

    <div className="grid gap-12 sm:gap-14 md:gap-16 lg:grid-cols-[0.75fr_1.25fr]">

      {/* Visual panel */}

      <div className="group relative aspect-[4/5] min-h-[430px] overflow-hidden border border-[#f8eee9]/15 bg-[#24121d] sm:min-h-[500px]">

        {/* Decorative orbital elements */}
        
        <div className="absolute left-[15%] top-[12%] h-1.5 w-1.5 rounded-full bg-[#e7a9bd]" />

        <div className="absolute right-[18%] top-[30%] h-1 w-1 rounded-full bg-[#f8eee9]" />

        <div className="absolute bottom-[20%] left-[25%] h-1 w-1 rounded-full bg-[#e7a9bd]" />


        {/* Portrait */}

        <div className="absolute inset-0">
          <img
            src="/bhumikapfp.jpeg"
            alt="Bhumika"
            className="h-full w-full object-cover object-center opacity-90 transition-all duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
          />

          {/* Atmospheric overlay */}
          <div className="absolute inset-0 bg-[#160b13]/20" />

          {/* Soft pink glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#160b13]/70 via-transparent to-[#c85c86]/10" />
        </div>


        {/* Image placeholder label */}

        <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6">

          <p className="text-[8px] tracking-[0.28em] text-[#e7a9bd] sm:text-[9px] sm:tracking-[0.3em]">
            BHUMIKA / 01
          </p>

          <p className="mt-1.5 text-[8px] tracking-[0.12em] text-[#9f858f] sm:mt-2 sm:text-[10px] sm:tracking-[0.15em]">
            PERSONAL / CREATIVE / TECHNICAL
          </p>

        </div>

      </div>


      {/* Profile copy */}

      <div className="flex flex-col justify-between">

        <div>

          <p className="text-[9px] tracking-[0.28em] text-[#e7a9bd] sm:text-[10px] sm:tracking-[0.3em]">
            A LITTLE MORE HUMAN
          </p>

          <h3 className="mt-5 max-w-3xl text-[2.2rem] font-light leading-[1.05] tracking-[-0.04em] sm:mt-6 sm:text-4xl md:text-5xl">

            Curious by nature.
            <br />

            Technical by training.
            <br />

            <span className="italic text-[#e7a9bd]">
              Creative by instinct.
            </span>

          </h3>


          <div className="mt-8 max-w-2xl space-y-5 text-[14px] leading-[1.85] text-[#b99fa9] sm:mt-10 sm:text-sm sm:leading-[1.9] md:text-base">

            <p>
              My background is in Computer Science and Engineering,
              with a specialization in Data Science. I started
              programming early and gradually found myself drawn
              towards the possibilities of machine learning and AI.
            </p>

            <p>
              Today, I&apos;m particularly interested in Generative AI,
              retrieval systems, intelligent automation and the
              emerging space where technology meets fashion and
              creativity.
            </p>

            <p>
              Outside of code, I&apos;m usually somewhere between
              discovering a new place, taking photographs, listening
              to music or obsessing over an interesting idea.
            </p>

          </div>

        </div>


        {/* Education marker */}

        <div className="mt-12 border-t border-[#f8eee9]/15 pt-5 sm:mt-16 sm:pt-6">

          <div className="flex flex-col gap-2.5 md:flex-row md:items-center md:justify-between">

            <span className="text-[8px] tracking-[0.23em] text-[#e7a9bd] sm:text-[9px] sm:tracking-[0.25em]">
              FOUNDATION
            </span>

            <span className="text-[13px] leading-[1.5] text-[#c5adb6] sm:text-sm">
              Computer Science & Engineering · Data Science
            </span>

          </div>

        </div>

      </div>

    </div>


    {/* ================= INTERESTS ================= */}

    <div className="mt-24 sm:mt-28 lg:mt-32">

      <div className="mb-8 flex items-center justify-between sm:mb-10">

        <p className="text-[9px] tracking-[0.28em] text-[#e7a9bd] sm:text-[10px] sm:tracking-[0.3em]">
          THINGS THAT INSPIRE ME
        </p>

        <span className="text-[8px] tracking-[0.18em] text-[#765c67] sm:text-[9px] sm:tracking-[0.2em]">
          {String(activeInterest + 1).padStart(2, "0")} /{" "}
          {String(interests.length).padStart(2, "0")}
        </span>

      </div>


      <div className="border-t border-[#f8eee9]/15">

        {interests.map((interest, index) => (

          <div
            key={interest}
            onMouseEnter={() => setActiveInterest(index)}
            onClick={() => setActiveInterest(index)}
            className="group flex min-h-[70px] w-full cursor-pointer items-center justify-between gap-4 border-b border-[#f8eee9]/15 py-4 transition-all duration-500 sm:min-h-[82px] sm:py-6 md:py-8"
          >

            <div className="flex min-w-0 items-center gap-4 sm:gap-6">

              <span className="shrink-0 text-[8px] tracking-[0.18em] text-[#765c67] sm:text-[9px] sm:tracking-[0.2em]">
                0{index + 1}
              </span>

              <h4
                className={`min-w-0 text-[1.25rem] font-light leading-[1.1] tracking-[-0.03em] transition-all duration-500 sm:text-3xl md:text-5xl ${
                  activeInterest === index
                    ? "translate-x-1 text-[#f4b6cb] sm:translate-x-2 md:translate-x-3"
                    : "text-[#f8eee9]"
                }`}
              >
                {interest}
              </h4>

            </div>


            <span
              className={`shrink-0 text-lg transition-all duration-500 sm:text-xl ${
                activeInterest === index
                  ? "translate-x-0 opacity-100"
                  : "translate-x-3 opacity-0"
              }`}
            >
              ↗
            </span>

          </div>

        ))}

      </div>

    </div>


    {/* ================= CURRENTLY EXPLORING ================= */}

    <div className="mt-24 grid gap-8 sm:mt-28 sm:gap-10 lg:mt-32 lg:grid-cols-[0.7fr_1.3fr]">

      <div>

        <p className="text-[9px] tracking-[0.28em] text-[#e7a9bd] sm:text-[10px] sm:tracking-[0.3em]">
          CURRENTLY EXPLORING
        </p>

        <p className="mt-4 max-w-sm text-[14px] leading-[1.8] text-[#9f858f] sm:mt-5 sm:text-sm">
          The areas I&apos;m actively learning, building and thinking
          about right now.
        </p>

      </div>


      <div className="flex flex-wrap content-start gap-2.5 sm:gap-3">

        {currentlyExploring.map((item) => (

          <span
            key={item}
            className="rounded-full border border-[#e7a9bd]/30 px-3.5 py-2.5 text-[8px] tracking-[0.14em] text-[#e7a9bd] transition-all duration-300 hover:bg-[#e7a9bd] hover:text-[#160b13] sm:px-5 sm:py-3 sm:text-[10px] sm:tracking-[0.18em]"
          >
            {item}
          </span>

        ))}

      </div>

    </div>


    {/* ================= END STATEMENT ================= */}

    <div className="mt-24 border-t border-[#f8eee9]/15 pt-10 sm:mt-28 sm:pt-12 lg:mt-32">

      <p className="max-w-5xl text-[1.8rem] font-light leading-[1.2] tracking-[-0.03em] text-[#d9c4cc] sm:text-3xl md:text-5xl">

        I&apos;m interested in technology that doesn&apos;t just
        <span className="italic text-[#f4b6cb]">
          {" "}work.
        </span>

        <br />

        I&apos;m interested in technology that makes people
        <span className="italic text-[#f4b6cb]">
          {" "}feel something.
        </span>

      </p>

    </div>

  </div>
</section>


);
}
