"use client";

import { useState } from "react";

const knowledgeStack = [
  "LangGraph",
  "RAG",
  "OpenSearch",
  "pgvector",
  "Neo4j",
  "Claude",
  "FastAPI",
];

const testingStack = [
  "DeepSeek",
  "RAG",
  "Embeddings",
  "Vector Search",
  "Python",
  "Prompt Engineering",
];

const workflow = [
  "CHANGE REQUEST",
  "RETRIEVAL",
  "REASONING",
  "IMPACT ANALYSIS",
  "GROUNDED RESPONSE",
];

const capabilities = [
  {
    number: "01",
    title: "Understand",
    description:
      "Convert large volumes of legacy architecture and design documentation into an intelligent, searchable knowledge layer.",
  },
  {
    number: "02",
    title: "Retrieve",
    description:
      "Combine semantic and keyword-based retrieval to identify the most relevant system knowledge for a given change or question.",
  },
  {
    number: "03",
    title: "Reason",
    description:
      "Use agentic workflows and relationship-aware context to analyse system dependencies and potential change impact.",
  },
  {
    number: "04",
    title: "Validate",
    description:
      "Use retrieved requirements and documented behaviour to generate and validate test scenarios for the modernized system.",
  },
];

export default function ExperienceSection() {
  const [activeCapability, setActiveCapability] = useState(0);

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#24121d] px-5 py-24 text-[#f8eee9] sm:px-6 sm:py-28 md:px-12 lg:px-16 lg:py-40"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute right-[-35%] top-[5%] h-[450px] w-[450px] rounded-full bg-[#c85c86]/10 blur-[120px] sm:right-[-20%] sm:h-[550px] sm:w-[550px] sm:blur-[140px] md:right-[-15%] md:h-[650px] md:w-[650px] md:blur-[160px]" />

      <div className="pointer-events-none absolute bottom-[8%] left-[-30%] h-[350px] w-[350px] rounded-full bg-[#7d3554]/10 blur-[110px] sm:h-[450px] sm:w-[450px] sm:blur-[140px] md:bottom-[10%] md:left-[-20%] md:h-[500px] md:w-[500px] md:blur-[150px]" />


      <div className="relative z-10 mx-auto max-w-[1500px]">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mb-14 flex items-center gap-3 sm:mb-20 sm:gap-4">

          <span className="h-px w-7 shrink-0 bg-[#e7a9bd] sm:w-10" />

          <p className="text-[9px] tracking-[0.28em] text-[#e7a9bd] sm:text-[10px] sm:tracking-[0.35em]">
            02 / EXPERIENCE
          </p>

        </div>


        {/* =====================================================
            COMPANY INTRO
        ===================================================== */}

        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">

          <div>

            <p className="mb-4 text-[9px] leading-[1.6] tracking-[0.22em] text-[#9f858f] sm:mb-5 sm:text-[11px] sm:tracking-[0.25em]">
              ACCENTURE × UK DEPARTMENT FOR WORK AND PENSIONS
            </p>

            <h2 className="max-w-6xl text-[clamp(3.5rem,10vw,8.5rem)] font-light leading-[0.84] tracking-[-0.065em]">

              Engineering
              <br />

              <span className="italic text-[#e7a9bd]">
                intelligence
              </span>

              <br />

              into legacy systems.

            </h2>

          </div>


          <div className="lg:pb-2">

            <p className="text-left text-[9px] tracking-[0.22em] text-[#765c67] sm:text-[10px] sm:tracking-[0.25em] lg:text-right">
              GENAI / AI ENGINEERING
            </p>

            <p className="mt-2 text-left text-sm text-[#c5adb6] lg:text-right">
              Enterprise Modernization
            </p>

          </div>

        </div>


        {/* =====================================================
            CONTEXT
        ===================================================== */}

        <div className="mt-16 grid gap-8 border-y border-[#f8eee9]/15 py-9 sm:mt-20 sm:py-12 md:mt-24 md:grid-cols-[0.35fr_0.65fr] md:gap-20">

          <div>

            <p className="text-[9px] tracking-[0.28em] text-[#e7a9bd] sm:text-[10px] sm:tracking-[0.3em]">
              THE CONTEXT
            </p>

          </div>

          <div>

            <p className="max-w-4xl text-lg font-light leading-[1.55] tracking-[-0.02em] text-[#ddd0d5] sm:text-xl md:text-2xl">

              Worked on the modernization of a large-scale legacy
              pension system for the UK Department for Work and
              Pensions, applying Generative AI, Agentic RAG and
              automation across development and testing workflows.

            </p>

          </div>

        </div>


        {/* =====================================================
            WORKSTREAM 01
        ===================================================== */}

        <div className="mt-24 sm:mt-28 md:mt-32">

          <div className="mb-9 flex flex-col justify-between gap-4 sm:mb-12 md:flex-row md:items-end">

            <div>

              <p className="text-[9px] tracking-[0.28em] text-[#e7a9bd] sm:text-[10px] sm:tracking-[0.3em]">
                WORKSTREAM 01
              </p>

              <h3 className="mt-3 max-w-5xl text-[2.1rem] font-light leading-[0.95] tracking-[-0.04em] sm:text-4xl md:mt-4 md:text-6xl">

                Agentic RAG & Legacy System
                <br />

                <span className="italic text-[#e7a9bd]">
                  Knowledge Intelligence
                </span>

              </h3>

            </div>

            <span className="text-[9px] tracking-[0.18em] text-[#765c67] sm:text-[10px] sm:tracking-[0.2em]">
              KNOWLEDGE → REASONING
            </span>

          </div>


          {/* Architecture visual */}

          <div className="relative overflow-hidden border border-[#f8eee9]/15 bg-[#160b13]">

            <div className="grid md:grid-cols-5">

              {workflow.map((step, index) => (

                <div
                  key={step}
                  className="relative border-b border-[#f8eee9]/15 px-5 py-6 last:border-b-0 sm:px-6 sm:py-7 md:border-b-0 md:border-r md:px-7 md:py-8 md:last:border-r-0"
                >

                  <span className="text-[9px] tracking-[0.25em] text-[#765c67]">
                    0{index + 1}
                  </span>

                  <p className="mt-5 max-w-[180px] text-[9px] leading-[1.5] tracking-[0.15em] text-[#e7a9bd] sm:mt-8 sm:text-[10px]">
                    {step}
                  </p>

                  {index < workflow.length - 1 && (
                    <>
                      {/* Desktop arrow */}

                      <span className="absolute right-4 top-1/2 hidden text-[#765c67] md:block">
                        →
                      </span>

                      {/* Mobile arrow */}

                      <span className="absolute bottom-[-9px] left-1/2 z-10 block -translate-x-1/2 bg-[#160b13] px-2 text-[#765c67] md:hidden">
                        ↓
                      </span>
                    </>
                  )}

                </div>

              ))}

            </div>

          </div>


          {/* Description + stack */}

          <div className="mt-9 grid gap-9 sm:mt-12 lg:grid-cols-[1fr_0.7fr] lg:gap-12">

            <div className="space-y-5 text-sm leading-[1.9] text-[#b99fa9] sm:space-y-6 md:text-base">

              <p>
                Built and worked on an Agentic RAG system that turns
                extensive Siebel legacy-system design and architecture
                documentation into an intelligent knowledge base for
                developers, testers and new team members.
              </p>

              <p>
                The workflow processes incoming one-page change
                requests, identifies relevant changes and system
                components, retrieves supporting documentation and
                uses agentic reasoning to analyse the potential impact.
              </p>

              <p>
                The system supports conversational exploration of
                legacy functionality, architecture, integrations and
                potential causes of issues, while also supporting
                knowledge transfer and onboarding.
              </p>

            </div>


            <div>

              <p className="mb-4 text-[9px] tracking-[0.28em] text-[#765c67] sm:mb-5 sm:tracking-[0.3em]">
                TECHNOLOGY
              </p>

              <div className="flex flex-wrap gap-2">

                {knowledgeStack.map((tech) => (

                  <span
                    key={tech}
                    className="rounded-full border border-[#e7a9bd]/25 px-3.5 py-2 text-[9px] tracking-[0.12em] text-[#dcb7c5] sm:px-4"
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            CAPABILITY INTERACTION
        ===================================================== */}

        <div className="mt-24 border-t border-[#f8eee9]/15 sm:mt-28">

          <div className="grid lg:grid-cols-[0.45fr_0.55fr]">

            <div className="border-b border-[#f8eee9]/15 py-8 sm:py-10 lg:border-b-0 lg:border-r lg:pr-16">

              <p className="text-[9px] tracking-[0.28em] text-[#e7a9bd] sm:text-[10px] sm:tracking-[0.3em]">
                WHAT THE SYSTEM ENABLES
              </p>

              <p className="mt-5 max-w-sm text-sm leading-[1.8] text-[#9f858f] sm:mt-6">
                The AI layer connects documentation, retrieval,
                reasoning and system relationships into a workflow
                designed around real enterprise change.
              </p>

            </div>


            <div className="lg:pl-16">

              {capabilities.map((item, index) => {

                const active = activeCapability === index;

                return (

                  <div
                    key={item.number}
                    onMouseEnter={() => setActiveCapability(index)}
                    onClick={() => setActiveCapability(index)}
                    className="group cursor-pointer border-b border-[#f8eee9]/15 py-6 sm:py-7"
                  >

                    <div className="flex items-center justify-between gap-4">

                      <div className="flex min-w-0 items-center gap-4 sm:gap-6">

                        <span className="shrink-0 text-[9px] tracking-[0.2em] text-[#765c67]">
                          {item.number}
                        </span>

                        <h4
                          className={`text-[1.65rem] font-light tracking-[-0.03em] transition-all duration-500 sm:text-2xl md:text-4xl ${
                            active
                              ? "translate-x-2 text-[#f4b6cb]"
                              : "text-[#f8eee9]"
                          }`}
                        >
                          {item.title}
                        </h4>

                      </div>

                      <span
                        className={`shrink-0 transition-all duration-500 ${
                          active
                            ? "translate-x-0 opacity-100"
                            : "translate-x-3 opacity-0"
                        }`}
                      >
                        ↗
                      </span>

                    </div>


                    <div
                      className={`grid transition-all duration-500 ${
                        active
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >

                      <div className="overflow-hidden">

                        <p className="mt-5 max-w-xl pl-[34px] text-sm leading-[1.8] text-[#9f858f] sm:pl-[42px]">
                          {item.description}
                        </p>

                      </div>

                    </div>

                  </div>

                );
              })}

            </div>

          </div>

        </div>


        {/* =====================================================
            WORKSTREAM 02
        ===================================================== */}

        <div className="mt-28 sm:mt-32 md:mt-36">

          <div className="mb-9 flex flex-col justify-between gap-4 sm:mb-12 md:flex-row md:items-end">

            <div>

              <p className="text-[9px] tracking-[0.28em] text-[#e7a9bd] sm:text-[10px] sm:tracking-[0.3em]">
                WORKSTREAM 02
              </p>

              <h3 className="mt-3 max-w-5xl text-[2.1rem] font-light leading-[0.95] tracking-[-0.04em] sm:text-4xl md:mt-4 md:text-6xl">

                GenAI-Based
                <br />

                <span className="italic text-[#e7a9bd]">
                  Testing Automation
                </span>

              </h3>

            </div>

            <span className="text-[9px] tracking-[0.18em] text-[#765c67] sm:text-[10px] sm:tracking-[0.2em]">
              REQUIREMENTS → VALIDATION
            </span>

          </div>


          <div className="grid gap-px border border-[#f8eee9]/15 bg-[#f8eee9]/15 md:grid-cols-3">

            <div className="bg-[#24121d] p-6 sm:p-8 md:p-10">

              <span className="text-[9px] tracking-[0.25em] text-[#765c67]">
                01
              </span>

              <h4 className="mt-6 text-2xl font-light tracking-[-0.03em] sm:mt-8">
                Retrieve
              </h4>

              <p className="mt-4 text-sm leading-[1.8] text-[#9f858f] sm:mt-5">
                Functional requirements, technical documentation and
                business requirements become the knowledge layer.
              </p>

            </div>


            <div className="bg-[#24121d] p-6 sm:p-8 md:p-10">

              <span className="text-[9px] tracking-[0.25em] text-[#765c67]">
                02
              </span>

              <h4 className="mt-6 text-2xl font-light tracking-[-0.03em] sm:mt-8">
                Generate
              </h4>

              <p className="mt-4 text-sm leading-[1.8] text-[#9f858f] sm:mt-5">
                Retrieved requirements and expected behaviour are used
                to generate relevant test scenarios.
              </p>

            </div>


            <div className="bg-[#24121d] p-6 sm:p-8 md:p-10">

              <span className="text-[9px] tracking-[0.25em] text-[#765c67]">
                03
              </span>

              <h4 className="mt-6 text-2xl font-light tracking-[-0.03em] sm:mt-8">
                Validate
              </h4>

              <p className="mt-4 text-sm leading-[1.8] text-[#9f858f] sm:mt-5">
                Generated scenarios help validate whether modernized
                functionality aligns with the original system
                requirements.
              </p>

            </div>

          </div>


          <div className="mt-9 grid gap-9 sm:mt-12 lg:grid-cols-[1fr_0.7fr] lg:gap-12">

            <div className="space-y-5 text-sm leading-[1.9] text-[#b99fa9] sm:space-y-6 md:text-base">

              <p>
                Built a separate RAG-based testing solution using
                DeepSeek to assist with testing functionalities in the
                modernized pension system.
              </p>

              <p>
                The system retrieves relevant project documentation
                before generating and validating test scenarios,
                reducing repetitive manual effort involved in
                understanding requirements and creating test cases.
              </p>

              <p>
                The approach also helps compare modernized functionality
                against documented business and functional requirements
                from the legacy system.
              </p>

            </div>


            <div>

              <p className="mb-4 text-[9px] tracking-[0.28em] text-[#765c67] sm:mb-5 sm:tracking-[0.3em]">
                TECHNOLOGY
              </p>

              <div className="flex flex-wrap gap-2">

                {testingStack.map((tech) => (

                  <span
                    key={tech}
                    className="rounded-full border border-[#e7a9bd]/25 px-3.5 py-2 text-[9px] tracking-[0.12em] text-[#dcb7c5] sm:px-4"
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            ENGINEERING LAYER
        ===================================================== */}

        <div className="mt-28 border-t border-[#f8eee9]/15 pt-12 sm:mt-32 sm:pt-16 md:mt-36">

          <div className="grid gap-8 md:grid-cols-[0.5fr_1.5fr] md:gap-12">

            <div>

              <p className="text-[9px] tracking-[0.28em] text-[#e7a9bd] sm:text-[10px] sm:tracking-[0.3em]">
                ENGINEERING LAYER
              </p>

            </div>


            <div>

              <p className="max-w-5xl text-[1.8rem] font-light leading-[1.2] tracking-[-0.03em] text-[#ddd0d5] sm:text-3xl md:text-5xl">

                From document retrieval to
                <span className="italic text-[#e7a9bd]">
                  {" "}agentic reasoning,
                </span>

                the work sits across the full AI application layer.

              </p>

            </div>

          </div>


          <div className="mt-10 flex flex-wrap gap-2.5 sm:mt-16 sm:gap-3">

            {[
              "Python",
              "Generative AI",
              "Agentic AI",
              "RAG",
              "LangGraph",
              "LangChain",
              "Claude",
              "DeepSeek",
              "OpenSearch",
              "pgvector",
              "Neo4j",
              "FastAPI",
              "Embeddings",
              "Hybrid Retrieval",
              "Prompt Engineering",
              "RAGAS",
              "DeepEval",
              "Jira",
              "ServiceNow",
            ].map((tech) => (

              <span
                key={tech}
                className="rounded-full border border-[#f8eee9]/15 px-3.5 py-2 text-[9px] tracking-[0.12em] text-[#b99fa9] transition-all duration-300 hover:border-[#e7a9bd]/50 hover:text-[#f4b6cb] sm:px-4 sm:py-2.5"
              >
                {tech}
              </span>

            ))}

          </div>

        </div>


        {/* =====================================================
            CLOSING STATEMENT
        ===================================================== */}

        <div className="mt-28 border-t border-[#f8eee9]/15 pt-9 sm:mt-32 sm:pt-12 md:mt-36">

          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end md:gap-8">

            <p className="max-w-4xl text-xl font-light leading-[1.3] tracking-[-0.02em] text-[#c5adb6] sm:text-2xl md:text-4xl">

              The goal isn&apos;t simply to add AI to an existing
              workflow.

              <br />

              It&apos;s to make the workflow
              <span className="italic text-[#f4b6cb]">
                {" "}more intelligent.
              </span>

            </p>

            <span className="text-[9px] tracking-[0.25em] text-[#765c67]">
              ACCENTURE / DWP
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}