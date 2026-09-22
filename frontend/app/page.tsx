import HeroOrb from "../components/HeroOrb";
import IntelligenceSection from "../components/IntelligenceSection";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import LabSection from "../components/LabSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import Chatbot from "@/components/chatbot/Chatbot";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#160b13] text-[#f8eee9]">

      {/* ================= NAVIGATION ================= */}

      <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between px-5 py-5 sm:px-6 sm:py-6 md:px-12">

        {/* Logo */}

        <div className="flex items-center gap-3">

          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#f8eee9]/40 text-xs">
            B
          </span>

          <span className="hidden text-xs tracking-[0.25em] sm:block">
            BHUMIKA SACHDEV
          </span>

        </div>


        {/* Desktop navigation */}

        <div className="hidden items-center gap-8 text-[10px] tracking-[0.2em] md:flex">

          <a
            href="#projects"
            className="transition-opacity duration-300 hover:opacity-50"
          >
            WORK
          </a>

          <a
            href="#experience"
            className="transition-opacity duration-300 hover:opacity-50"
          >
            EXPERIENCE
          </a>

          <a
            href="#lab"
            className="transition-opacity duration-300 hover:opacity-50"
          >
            LAB
          </a>

          <a
            href="#skills"
            className="transition-opacity duration-300 hover:opacity-50"
          >
            SKILLS
          </a>

          <a
            href="#about"
            className="transition-opacity duration-300 hover:opacity-50"
          >
            ABOUT
          </a>

          <a
            href="#contact"
            className="transition-opacity duration-300 hover:opacity-50"
          >
            CONTACT
          </a>

        </div>


        {/* AI button */}

        <Chatbot />

      </nav>


      {/* ================= HERO ================= */}

      <section className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-28 sm:px-6 md:px-12 md:pt-28 lg:px-16">

        {/* Large atmospheric glow */}

        <div className="pointer-events-none absolute right-[-35%] top-[8%] h-[450px] w-[450px] rounded-full bg-[#c85c86]/20 blur-[120px] sm:right-[-20%] sm:h-[550px] sm:w-[550px] sm:blur-[140px] md:right-[-12%] md:top-[5%] md:h-[650px] md:w-[650px] md:blur-[150px]" />


        {/* Secondary glow */}

        <div className="pointer-events-none absolute bottom-[-15%] left-[-30%] h-[350px] w-[350px] rounded-full bg-[#7d3554]/20 blur-[110px] sm:h-[400px] sm:w-[400px] md:bottom-[-20%] md:left-[-15%] md:h-[450px] md:w-[450px] md:blur-[130px]" />


        {/* Hero content */}

        <div className="relative z-10 w-full">

          {/* Small identity line */}

          <div className="mb-8 flex max-w-full items-center gap-3 sm:mb-10 sm:gap-4">

            <span className="h-px w-7 shrink-0 bg-[#e7a9bd]/60 sm:w-10" />

            <p className="max-w-[calc(100vw-60px)] text-[8px] leading-relaxed tracking-[0.22em] text-[#e7a9bd] sm:text-[10px] sm:tracking-[0.35em]">
              AI ENGINEER · GENERATIVE AI · DATA · FASHION-TECH
            </p>

          </div>


          {/* Main statement */}

          <h1 className="max-w-6xl text-[clamp(3.8rem,16vw,9.5rem)] font-light leading-[0.84] tracking-[-0.065em]">

            I BUILD

            <br />

            <span className="ml-[5vw] sm:ml-[8vw]">
              INTELLIGENT
            </span>

            <br />

            <span className="ml-[1vw] sm:ml-[2vw]">
              SYSTEMS
            </span>

          </h1>


          {/* Supporting content */}

          <div className="mt-10 flex flex-col gap-8 sm:mt-12 md:ml-[10vw] md:flex-row md:items-end md:justify-between">

            <div>

              <p className="text-2xl font-light leading-tight tracking-[-0.03em] text-[#e7cfd7] sm:text-3xl md:text-4xl">

                that feel{" "}

                <span className="italic text-[#f4b6cb]">
                  human.
                </span>

              </p>


              <div className="mt-6 flex items-center gap-4 sm:mt-7">

                <a
                  href="#projects"
                  className="rounded-full bg-[#f8eee9] px-6 py-3.5 text-[9px] font-medium tracking-[0.18em] text-[#160b13] transition-transform duration-300 hover:scale-105 sm:px-7 sm:text-[10px] sm:tracking-[0.2em]"
                >
                  EXPLORE MY WORK
                </a>

                <span className="text-lg text-[#e7a9bd]">
                  ↓
                </span>

              </div>

            </div>


            {/* Description */}

            <p className="max-w-sm text-sm leading-[1.8] text-[#b99fa9] md:mr-[8vw]">

              I build intelligent experiences at the intersection of
              artificial intelligence, data and human creativity.

            </p>

          </div>

        </div>


        {/* ================= 3D OBJECT ================= */}

        {/*
          Desktop/tablet:
          Keep the existing orb positioning.

          Mobile:
          Move the orb lower and further right so it becomes
          part of the composition rather than sitting over
          the headline.
        */}

        <div className="pointer-events-auto absolute bottom-[-11%] right-[-30%] z-0 scale-[0.65] sm:bottom-[-8%] sm:right-[-20%] sm:scale-[0.78] md:bottom-[-4%] md:right-[-4%] md:scale-100 lg:right-[2%]">

          <HeroOrb />

        </div>


        {/* ================= SCROLL INDICATOR ================= */}

        <div className="absolute bottom-6 left-5 flex items-center gap-3 text-[8px] tracking-[0.25em] text-[#b99fa9] sm:bottom-8 sm:left-6 sm:text-[9px] sm:tracking-[0.3em] md:left-12">

          <span className="h-8 w-px bg-[#b99fa9]/40" />

          <span className="hidden sm:inline">
            SCROLL TO EXPLORE
          </span>

          <span className="sm:hidden">
            SCROLL
          </span>

        </div>

      </section>


      {/* ================= INTELLIGENCE ================= */}

      <IntelligenceSection />


      {/* ================= EXPERIENCE ================= */}

      <ExperienceSection />


      {/* ================= LAB ================= */}

      <LabSection />


      {/* ================= SKILLS ================= */}

      <SkillsSection />


      {/* ================= PROJECTS ================= */}

      <ProjectsSection />


      {/* ================= ABOUT ================= */}

      <AboutSection />


      {/* ================= CONTACT ================= */}
      <ContactSection />

      <section
        id="contact"
        className="flex min-h-[65vh] items-center bg-[#f4e9e4] px-5 py-24 text-[#160b13] sm:px-6 sm:py-28 md:min-h-[70vh] md:px-16 md:py-32"
      >

        <div>

          <p className="text-[9px] tracking-[0.28em] text-[#8e5269] sm:text-[10px] sm:tracking-[0.3em]">
            05 / CONTACT
          </p>

          <h2 className="mt-5 text-[clamp(3.5rem,13vw,6rem)] font-light leading-[0.9] tracking-[-0.06em] md:mt-6 md:text-8xl">

            Let&apos;s build

            <br />

            something{" "}

            <span className="italic">
              intelligent.
            </span>

          </h2>

        </div>

      </section>

    </main>
  );
}