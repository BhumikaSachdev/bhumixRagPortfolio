"use client";

export default function ContactSection() {
return ( <section
   id="contact"
   className="relative overflow-hidden bg-[#f4e9e4] px-5 py-24 text-[#160b13] sm:px-6 sm:py-28 md:px-12 lg:px-16 lg:py-40"
 >
{/* Atmospheric background */}


  <div className="pointer-events-none absolute right-[-25%] top-[-10%] h-[420px] w-[420px] rounded-full bg-[#c85c86]/10 blur-[120px] sm:right-[-15%] sm:h-[520px] sm:w-[520px] lg:right-[-10%] lg:top-[-15%] lg:h-[650px] lg:w-[650px] lg:bg-[#c85c86]/12 lg:blur-[160px]" />

  <div className="pointer-events-none absolute bottom-[-20%] left-[-20%] h-[350px] w-[350px] rounded-full bg-[#e7a9bd]/20 blur-[100px] sm:h-[450px] sm:w-[450px] lg:bottom-[-25%] lg:left-[-10%] lg:h-[550px] lg:w-[550px] lg:blur-[140px]" />

  <div className="relative z-10 mx-auto max-w-[1500px]">

    {/* HEADER */}

    <div className="mb-16 flex items-center gap-4 sm:mb-20 lg:mb-24">
      <span className="h-px w-8 bg-[#c85c86] sm:w-10" />

      <p className="text-[9px] tracking-[0.3em] text-[#c85c86] sm:text-[10px] sm:tracking-[0.35em]">
        07 / CONTACT
      </p>
    </div>


    {/* MAIN STATEMENT */}

    <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">

      <div>

        <p className="mb-6 text-[9px] tracking-[0.28em] text-[#8e6474] sm:mb-7 sm:text-[10px] sm:tracking-[0.3em]">
          HAVE AN IDEA?
        </p>

        <h2 className="max-w-6xl text-[clamp(3.5rem,12vw,9rem)] font-light leading-[0.84] tracking-[-0.065em] sm:text-[clamp(4.5rem,8vw,9rem)] sm:leading-[0.82]">

          Let&apos;s build
          <br />

          something{" "}

          <span className="italic text-[#c85c86]">
            meaningful.
          </span>

        </h2>

      </div>


      <div className="flex items-end lg:pb-3">

        <div className="max-w-md">

          <p className="text-[15px] leading-[1.85] text-[#5f4651] sm:text-base sm:leading-[1.9] md:text-lg">

            I&apos;m interested in opportunities across AI engineering,
            machine learning, data and creative technology — especially
            where technology intersects with fashion, culture and
            human experience.

          </p>

        </div>

      </div>

    </div>


    {/* EMAIL CTA */}

    <div className="mt-20 border-y border-[#160b13]/15 sm:mt-24 lg:mt-28">

      <a
        href="mailto:bhumikausachdev@gmail.com"
        className="group flex min-h-[110px] items-center justify-between gap-6 py-7 transition-all duration-500 sm:min-h-[130px] sm:py-8 lg:min-h-[160px] lg:py-10"
      >

        <div className="min-w-0">

          <p className="mb-2 text-[8px] tracking-[0.25em] text-[#8e6474] sm:mb-3 sm:text-[9px] sm:tracking-[0.3em]">
            START A CONVERSATION
          </p>

          <span className="block break-all text-[1.35rem] font-light tracking-[-0.035em] text-[#160b13] transition-transform duration-500 group-hover:translate-x-2 sm:break-normal sm:text-2xl md:text-4xl lg:text-5xl">
            bhumikausachdev@gmail.com
          </span>

        </div>

        <span className="shrink-0 text-2xl text-[#c85c86] transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2 sm:text-3xl lg:text-4xl">
          ↗
        </span>

      </a>

    </div>


    {/* LINKS */}

    <div className="mt-16 grid gap-10 sm:mt-20 md:grid-cols-[0.6fr_1.4fr] md:gap-12 lg:mt-24">

      <div>

        <p className="text-[9px] tracking-[0.28em] text-[#c85c86] sm:text-[10px] sm:tracking-[0.3em]">
          ELSEWHERE
        </p>

        <p className="mt-4 max-w-xs text-[13px] leading-[1.8] text-[#8e747d] sm:text-sm">
          A few places where you can find more of my work and
          professional background.
        </p>

      </div>


      <div className="border-t border-[#160b13]/15">

        {/* LinkedIn */}

        <a
          href="https://www.linkedin.com/in/bhumika-sachdev/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex min-h-[72px] items-center justify-between border-b border-[#160b13]/15 py-5 transition-all duration-500 sm:min-h-[82px] sm:py-6"
        >

          <div className="flex items-center gap-4 sm:gap-6">

            <span className="text-[8px] tracking-[0.2em] text-[#9d7d88] sm:text-[9px]">
              01
            </span>

            <span className="text-[1.15rem] font-light tracking-[-0.02em] sm:text-2xl md:text-3xl">
              LinkedIn
            </span>

          </div>

          <span className="text-lg text-[#c85c86] transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-1 sm:text-xl">
            ↗
          </span>

        </a>


        {/* GitHub */}

        <a
          href="https://github.com/BhumikaSachdev"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex min-h-[72px] items-center justify-between border-b border-[#160b13]/15 py-5 transition-all duration-500 sm:min-h-[82px] sm:py-6"
        >

          <div className="flex items-center gap-4 sm:gap-6">

            <span className="text-[8px] tracking-[0.2em] text-[#9d7d88] sm:text-[9px]">
              02
            </span>

            <span className="text-[1.15rem] font-light tracking-[-0.02em] sm:text-2xl md:text-3xl">
              GitHub
            </span>

          </div>

          <span className="text-lg text-[#c85c86] transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-1 sm:text-xl">
            ↗
          </span>

        </a>


        {/* Resume */}

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex min-h-[72px] items-center justify-between border-b border-[#160b13]/15 py-5 transition-all duration-500 sm:min-h-[82px] sm:py-6"
        >

          <div className="flex items-center gap-4 sm:gap-6">

            <span className="text-[8px] tracking-[0.2em] text-[#9d7d88] sm:text-[9px]">
              03
            </span>

            <span className="text-[1.15rem] font-light tracking-[-0.02em] sm:text-2xl md:text-3xl">
              Resume
            </span>

          </div>

          <span className="text-lg text-[#c85c86] transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-1 sm:text-xl">
            ↗
          </span>

        </a>

      </div>

    </div>


    {/* CLOSING STATEMENT */}

    <div className="relative mt-24 overflow-hidden border-t border-[#160b13]/15 pt-10 sm:mt-28 sm:pt-12 lg:mt-36">

      {/* Decorative orbital system */}

      <div className="pointer-events-none absolute right-[-90px] top-[-120px] hidden h-72 w-72 rounded-full border border-[#c85c86]/15 sm:block sm:h-80 sm:w-80" />

      <div className="pointer-events-none absolute right-[-45px] top-[-75px] hidden h-56 w-56 rounded-full border border-[#c85c86]/15 sm:block sm:h-64 sm:w-64" />

      <div className="pointer-events-none absolute right-[65px] top-[30px] hidden h-2 w-2 rounded-full bg-[#c85c86] shadow-[0_0_20px_rgba(200,92,134,0.5)] sm:block" />

      <p className="max-w-5xl text-[1.75rem] font-light leading-[1.2] tracking-[-0.035em] text-[#38232d] sm:text-3xl md:text-5xl lg:text-6xl">

        Good technology should feel
        <span className="italic text-[#c85c86]">
          {" "}natural.
        </span>

        <br />

        Good ideas should feel
        <span className="italic text-[#c85c86]">
          {" "}possible.
        </span>

      </p>

    </div>


    {/* FOOTER */}

    <div className="mt-20 border-t border-[#160b13]/15 pt-6 sm:mt-24 sm:pt-7">

      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">

        <p className="text-[8px] tracking-[0.25em] text-[#8e747d] sm:text-[9px] sm:tracking-[0.3em]">
          BHUMIKA SACHDEV
        </p>

        <p className="text-[8px] tracking-[0.2em] text-[#8e747d] sm:text-[9px] sm:tracking-[0.25em]">
          AI / DATA / CREATIVE TECHNOLOGY
        </p>

        <p className="text-[8px] tracking-[0.2em] text-[#8e747d] sm:text-[9px] sm:tracking-[0.25em]">
          © 2026
        </p>

      </div>

    </div>

  </div>
</section>


);
}
