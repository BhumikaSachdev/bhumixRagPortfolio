# Accenture — UK Department for Work and Pensions (DWP)

## Professional Experience

Started working at Accenture in October 2024 and currently work in Mumbai, India, with openness to relocation.

Worked on the modernization of a large-scale legacy pension system for the UK Department for Work and Pensions (DWP). The work involved enterprise application modernization, Generative AI, Retrieval-Augmented Generation (RAG), Agentic AI, document intelligence, testing automation, and AI-assisted knowledge management.

The overall objective was to use AI and automation to make a complex legacy system easier to understand, analyze, develop, test, maintain, and transition to a modernized platform.

---

## Enterprise Modernization & Legacy-System Intelligence

The project involved working with a large and complex legacy pension system based on Siebel technologies and extensive technical and functional documentation.

The documentation contains information about system components, business logic, workflows, data models, integrations, APIs, and dependencies. A major challenge was making this information accessible and useful to developers, testers, architects, and new team members without requiring them to manually search through large volumes of legacy documentation.

Worked on AI-driven knowledge and analysis capabilities designed to transform this documentation into an intelligent, searchable knowledge base.

Key areas of work included:

- Generative AI and RAG-based enterprise knowledge systems.
- Agentic workflows for multi-step analysis of system change requests.
- Retrieval and analysis of legacy technical and functional documentation.
- Change-impact analysis across interconnected legacy components.
- AI-assisted developer support and knowledge transfer.
- Conversational querying of legacy-system functionality and architecture.
- AI-assisted testing of modernized functionality.
- Evaluation and improvement of retrieval and LLM output quality.

---

# Agentic RAG & Legacy System Knowledge Intelligence

## Agentic RAG Architecture

Worked on an Agentic RAG system designed to help developers, testers, and other project members understand a complex Siebel legacy system.

The system goes beyond simple single-step RAG. Instead of only embedding a question, retrieving documents, and generating an answer, the workflow decomposes a request into multiple processing and retrieval stages.

A typical workflow can be represented as:

User/change request
→ intent and entity extraction
→ exact-term retrieval
→ semantic/vector retrieval
→ metadata and access filtering
→ candidate combination
→ reranking
→ evidence sufficiency check
→ grounded generation
→ confidence and citation information

The multi-step architecture is particularly useful for change requests because a single request may involve several components, APIs, data entities, workflows, and dependencies.

---

## LangGraph-Based Agentic Orchestration

Worked with LangGraph to implement agentic workflows for multi-step retrieval, reasoning, contextual analysis, and grounded response generation.

LangGraph was used to represent the workflow as explicit states and processing nodes rather than relying on a single opaque LLM call.

The workflow can maintain state such as:

- Original change request or one-pager.
- Extracted entities and intent.
- Relevant system components.
- Retrieved documentation.
- Reranked evidence.
- Evidence sufficiency.
- Draft analysis.
- Final impact-analysis response.

This makes the workflow more inspectable because the input and output of individual processing stages can be tracked independently.

The system can process an incoming one-page change request, identify relevant entities and dependencies, retrieve supporting documentation, and use the resulting evidence to generate a structured analysis.

---

# Change-Request Processing & Impact Analysis

Worked on workflows for analyzing incoming one-page change requests.

A change request can be converted into a structured representation containing information such as:

- Change summary.
- Affected system components.
- Business functionality.
- APIs and integrations.
- Data entities or fields.
- Potential dependencies.
- Risks.
- Open questions.
- Testing considerations.

The extracted entities and technical identifiers are then used as inputs to the retrieval pipeline.

The retrieved evidence is used to generate an impact-analysis report describing potentially affected components, dependencies, interfaces, testing requirements, regression considerations, and relevant documentation.

The purpose is to reduce the amount of manual investigation required when determining how a proposed change could affect a complex legacy system.

---

# Multimodal Document Parsing & Semantic Data Ingestion

A significant part of the work involved understanding how to convert complex legacy documentation into usable AI knowledge.

Siebel documentation is not limited to simple paragraphs of text. It can contain:

- Complex tables.
- Business Component schemas.
- Business Services.
- Integration Objects.
- Workflow diagrams.
- Data relationships.
- Architecture diagrams.
- Embedded images.
- Technical identifiers.
- Configuration information.
- Functional specifications.

Worked on document-processing approaches for extracting information from complex enterprise documents, including structured tables and embedded diagrams.

Explored tools and approaches such as Unstructured and LlamaParse for document and layout-aware parsing.

The extracted information then needs to be transformed into semantically meaningful chunks before being embedded and indexed.

---

# Domain-Aware Semantic Chunking

Worked on the problem of semantic chunking for legacy-system documentation.

Generic page-based or fixed-length text splitting can separate related information or place unrelated system components in the same retrieval unit.

For example, a Siebel document may describe an entire Business Component, its fields, relationships, and associated logic across several sections. Splitting this purely by page length can make retrieval less precise.

The approach therefore focuses on grouping information around meaningful domain objects and concepts, such as:

- Business Components.
- Business Services.
- Integration Objects.
- Workflows.
- APIs.
- Data entities.
- System interfaces.
- Configuration objects.

This allows retrieved chunks to preserve more of the context surrounding a particular legacy-system component.

---

# Hybrid Retrieval & Precision Reranking

One of the most technically challenging parts of the system was retrieving the correct information from a large collection of legacy documentation.

Legacy Siebel systems contain many technical identifiers and overlapping terminology. Examples include:

- CSSBCBase.
- Siebel EAI.
- Business Component.
- Business Service.
- Integration Object.
- SRF.
- siebns.dat.
- Error codes.
- Custom eScript identifiers.

A pure semantic/vector search approach can under-rank exact technical identifiers because embeddings primarily capture semantic similarity.

At the same time, pure keyword search can miss conceptually related documentation when the query uses different terminology from the source material.

The retrieval system therefore combines multiple retrieval approaches.

---

## Hybrid Search Pipeline

The retrieval architecture combines:

1. Keyword-based retrieval for exact identifiers, technical terms, names, and error codes.
2. Semantic/vector retrieval for conceptual and natural-language queries.
3. Candidate-set combination to bring together results from both retrieval approaches.
4. Cross-encoder reranking to evaluate candidate passages directly against the query.
5. Selection of the highest-quality evidence before sending context to the LLM.

Conceptually:

Query
→ keyword search
+
query embedding
→ semantic search
→ combined candidate set
→ cross-encoder reranking
→ high-relevance evidence
→ LLM

The hybrid approach helps address both exact-match and semantic retrieval requirements.

---

# Why Hybrid Retrieval Was Necessary

There are two different retrieval problems in legacy documentation.

### Exact technical retrieval

A query may contain an exact identifier such as a component name, field name, error code, API, table, or technical object.

Keyword retrieval is useful because the exact token may be rare and highly significant.

### Semantic retrieval

A user may instead ask a conceptual question such as:

"How does this request flow through the pension system?"

The relevant documentation may describe the same concept using completely different wording.

Vector retrieval can identify those conceptually related passages.

Combining the two approaches provides both exact-match precision and semantic recall.

---

# Cross-Encoder Reranking

Worked with precision reranking to improve the ordering of retrieved evidence.

Instead of relying entirely on the initial vector or keyword ranking, a cross-encoder evaluates the relationship between the original query and each candidate document directly.

The retrieval process therefore becomes:

Initial retrieval
→ larger candidate pool
→ cross-encoder scoring
→ final ranking
→ top relevant chunks

This reduces the amount of irrelevant information passed to the LLM and improves the likelihood that technically important documentation appears near the top of the final context.

The reranking approach is particularly important for "needle in a haystack" cases where a small but highly relevant technical detail may be buried inside a large functional specification.

---

# Multi-Hop Dependency Analysis & Neo4j

Worked with Neo4j to represent relationships between interconnected legacy-system components.

Text retrieval alone is not always sufficient for questions that require following several dependencies.

For example:

UI Applet
→ Business Component
→ Integration Object
→ External Web Service

These relationships can be represented explicitly in a graph.

Relevant relationships can include:

- Service-to-service calls.
- API-to-table relationships.
- API-to-data-entity relationships.
- Event publish/subscribe relationships.
- Deployment-to-service relationships.
- Workflow-to-component relationships.
- Component dependencies.

Graph-based representation enables dependency traversal for change-impact analysis.

For example, if a particular data entity changes, graph traversal can identify services that depend on it and then identify downstream components that may also be affected.

This complements document retrieval rather than replacing it:

Text retrieval provides the detailed documentation and evidence.

Graph retrieval provides explicit relationships and dependency paths.

---

# Knowledge Transfer & Conversational Context

Worked on AI-assisted knowledge-transfer and contextual memory capabilities intended to help developers and new team members understand the legacy system.

The objective was to reduce reliance on repeated manual explanations from subject-matter experts when developers need information about legacy components, workflows, integrations, and system relationships.

Conversational capabilities can support:

- Multi-turn developer questions.
- Follow-up questions about previously discussed components.
- Context from a current bug or task.
- Queries about system architecture.
- Explanations of legacy terminology.
- Knowledge-transfer and onboarding.

The system needs to balance short-term conversational context, such as a specific task or bug, with longer-term system knowledge represented by the enterprise documentation.

---

# Grounded Generation & Hallucination Control

Worked on approaches for keeping generated responses grounded in retrieved enterprise documentation.

The LLM should not be treated as the source of truth for project-specific system behaviour.

Instead:

Retrieved evidence
→ LLM context
→ grounded generation

The generation stage is constrained to the evidence retrieved from the knowledge base.

The system can associate claims with supporting documentation and distinguish between:

- Confirmed information.
- Reasonable inference.
- Unknown or requiring verification.

When the available documentation is insufficient, the preferred behaviour is to identify the information gap rather than confidently invent an answer.

An insufficient-evidence case can result in:

- An "unknown" or "requires verification" classification.
- An additional retrieval attempt using a reformulated query.
- An open question for human verification.
- Identification of the relevant SME or team when appropriate.

This makes grounding a structural part of the workflow rather than relying only on a generic "do not hallucinate" prompt.

---

# Claude as the LLM Layer

Worked with Claude as an LLM layer for reasoning and generation within the enterprise AI workflows.

Claude was used for tasks including:

- Entity and intent extraction from change requests.
- Reasoning over retrieved legacy-system evidence.
- Grounded answer generation.
- Change-impact report generation.
- Conversational developer support.
- Knowledge-transfer and onboarding content.

The LLM receives retrieved evidence as context so that project-specific responses are based on the available enterprise documentation.

---

# GenAI-Based Testing Automation

Built a separate RAG-based testing solution using DeepSeek to automate and assist testing of functionalities in the modernized pension system.

The primary problem was the repetitive effort involved in understanding business requirements and translating them into test scenarios.

Testers may need to repeatedly search through functional requirements, technical documentation, and business rules to understand what existing functionality is expected to do before creating test scenarios for the modernized system.

The GenAI solution was designed to reduce this repetitive requirement-analysis and scenario-drafting effort while maintaining traceability to the underlying requirements.

---

## Testing Knowledge Base

Created a knowledge base from project-specific:

- Functional requirements.
- Technical documentation.
- Business requirements.
- Business rules.
- Expected system behaviour.

The documents were processed, chunked, embedded, and made available for retrieval.

When a functionality or requirement is provided, the system retrieves the most relevant documentation before generating candidate test scenarios.

This ensures the LLM works from project-specific information rather than relying only on its pretrained knowledge.

---

# Test Scenario Generation

The testing workflow follows a RAG-based process:

Requirement or functionality
→ retrieve relevant documentation
→ provide retrieved context to the LLM
→ generate candidate test scenarios
→ validate against requirements
→ human review where required

Generated scenarios can include relevant conditions, expected behaviour, validation points, and other information supported by the retrieved requirements.

The objective is AI-assisted scenario generation rather than replacing functional testing or human validation.

---

# Test Scenario Validation

Generation and validation are treated as separate stages.

Generated scenarios are compared against retrieved requirements and documented business behaviour to identify:

- Unsupported assumptions.
- Missing requirements.
- Inconsistencies.
- Missing validation conditions.
- Scenarios that are not adequately supported by the source documentation.

The original requirements remain available for traceability and human review.

RAG and LLM evaluation approaches such as RAGAS and DeepEval are also used to evaluate the quality of the AI pipeline itself.

These evaluation frameworks assess the AI system's retrieval and generation behaviour; they do not replace functional validation of the actual pension system.

---

# Requirement-to-Test Traceability

The testing workflow maintains a conceptual connection between requirements and generated scenarios:

Requirement
→ retrieval
→ relevant documentation and business rules
→ LLM
→ candidate test scenario
→ validation

This allows generated scenarios to be connected to the underlying requirements rather than being treated as isolated AI-generated text.

A future enhancement could introduce explicit requirement IDs and scenario IDs to maintain a one-to-many mapping between requirements and test coverage.

---

# Handling Ambiguous Requirements

The system should not invent business logic when requirements are ambiguous or incomplete.

When retrieved documentation is insufficient or contradictory, the workflow can:

- Flag the requirement as ambiguous.
- Identify missing information.
- Avoid unsupported assumptions.
- Request clarification.
- Mark the scenario as requiring verification.

This is particularly important in a pension-system environment because incorrect assumptions about business rules can lead to incorrect test scenarios.

---

# Reducing Repetitive Manual Work

The GenAI testing workflow reduces repetitive work involved in:

- Searching through large documentation sets.
- Identifying relevant requirements.
- Understanding related business rules.
- Drafting initial test scenarios.
- Connecting scenarios to supporting documentation.

Instead of manually creating every scenario from scratch, testers can review, validate, and refine AI-generated candidate scenarios.

The goal is therefore AI-assisted testing and automation of repetitive analysis, rather than replacing the tester's functional judgement.

---

# RAG Evaluation & Quality Measurement

Worked with RAGAS and DeepEval to evaluate and improve the quality of RAG and LLM workflows.

## RAGAS

RAGAS provides RAG-specific evaluation capabilities that can help separate retrieval quality from generation quality.

Relevant evaluation areas include:

- Context precision.
- Context recall.
- Faithfulness.
- Answer relevance.
- Generation quality.

This makes it possible to investigate whether an incorrect answer was caused by poor retrieval or by incorrect generation from otherwise relevant context.

## DeepEval

DeepEval complements RAG-focused evaluation with LLM-output testing and custom evaluation metrics.

It can be used for:

- Correctness testing.
- Hallucination evaluation.
- Regression testing.
- Custom LLM evaluation metrics.
- Automated test suites for AI outputs.

---

# AI System Evaluation Metrics

The broader evaluation process considers areas such as:

- Retrieval precision.
- Retrieval recall.
- Citation correctness.
- Answer correctness.
- Faithfulness.
- Hallucination rate.
- Completeness of impact analysis.
- Response latency.
- Access-control correctness.
- User acceptance.

Retrieval quality can be measured against curated examples containing known relevant source documents.

The system can then determine whether the expected documentation was retrieved and whether relevant evidence was ranked highly enough to reach the generation stage.

---

# Continuous Improvement

Evaluation results and user feedback can be used to improve:

- Chunking strategies.
- Retrieval configuration.
- Query formulation.
- Reranking.
- Prompt design.
- Documentation coverage.
- Grounding behaviour.
- Knowledge-base quality.

For example, poor retrieval precision can indicate that the document chunking or candidate retrieval strategy needs refinement, while unsupported generated claims can indicate the need for stronger grounding and validation.

Recurring retrieval gaps can also identify areas where enterprise documentation needs additional cleanup or coverage.

---

# Enterprise Documentation Processing

Worked with approaches for processing large enterprise documentation collections.

A production-oriented ingestion pipeline can involve:

Document ingestion
→ format conversion / OCR where required
→ layout-aware parsing
→ semantic/domain-aware chunking
→ metadata tagging
→ embedding
→ keyword indexing
→ vector indexing
→ retrieval

Relevant metadata can include:

- System.
- Component.
- Version.
- Owner.
- Document type.
- Confidentiality or permission information.
- Source location.

The original documents should remain available so retrieved information can be traced back to its source.

---

# Handling Documentation Changes

Enterprise documentation changes over time, so the knowledge base needs to account for document versions.

A production-oriented ingestion process can be triggered when documents are added or updated.

Version metadata can be used to:

- Prefer current documentation.
- Identify superseded documentation.
- Avoid silently using outdated information.
- Track the source version behind an answer.

Recurring documentation gaps can be surfaced as part of the continuous-improvement process.

---

# FastAPI & AI Service Architecture

Worked with FastAPI to expose AI and retrieval capabilities through backend services.

The backend can provide REST endpoints for capabilities such as:

- Query and retrieval.
- Legacy-system knowledge search.
- One-pager processing.
- Change-impact analysis.
- Impact-report generation.
- Conversational developer support.

A single backend can serve multiple interfaces, such as:

- Web applications.
- Internal developer tools.
- Conversational interfaces.
- Slack or Teams integrations.
- Jira integrations.
- ServiceNow integrations.

FastAPI also provides a natural Python-based service layer for integrating the retrieval and agentic AI components.

---

# Jira & ServiceNow Integration

Worked with enterprise workflow integrations involving Jira and ServiceNow.

A production workflow can use ticket events or webhooks to trigger AI-assisted processing.

Conceptually:

Jira / ServiceNow ticket
→ webhook
→ FastAPI
→ one-pager/change analysis
→ retrieval
→ impact analysis
→ generated report
→ information returned to the ticket

This allows AI assistance to be incorporated into existing enterprise change-management processes instead of requiring users to move to a completely separate application.

---

# Key Technical Challenges

The major technical challenges involved several characteristics of legacy enterprise systems.

## 1. Complex legacy documentation

Legacy documentation contains tables, diagrams, technical identifiers, workflows, architecture information, and business rules that cannot always be represented effectively through simple text extraction.

## 2. Semantic chunking

Arbitrary page or character-based chunking can separate related information or combine unrelated concepts.

Domain-aware chunking around system objects and components improves the usefulness of retrieved context.

## 3. Exact technical identifiers

Legacy systems contain rare and highly specific identifiers, names, error codes, and configuration terms.

These can be difficult for pure vector retrieval to rank correctly.

## 4. Needle-in-a-haystack retrieval

A small piece of relevant eScript, configuration, or workflow logic may be buried inside hundreds of pages of documentation.

The retrieval pipeline therefore needs to find highly specific evidence without flooding the LLM with irrelevant content.

## 5. Multi-hop dependencies

Impact analysis often requires connecting multiple components rather than finding a single relevant paragraph.

For example:

UI
→ Business Component
→ Integration Object
→ API
→ External Service

This motivated the use of graph-based relationships alongside document retrieval.

## 6. Incomplete or outdated documentation

Legacy documentation can contain gaps or outdated information.

The system therefore needs to distinguish documented evidence from assumptions and surface unresolved areas for verification.

## 7. Grounding and hallucination

Enterprise system analysis requires answers to be traceable to documentation.

Retrieval quality, reranking, grounding, citations, confidence classification, and evaluation are therefore important parts of the architecture.

---

# Overall AI Architecture

The overall solution can be viewed as several cooperating layers:

## Data Layer

Enterprise documentation
→ parsing
→ semantic/domain-aware chunking
→ metadata
→ embeddings
→ keyword/vector indexes

## Retrieval Layer

User query or change request
→ exact keyword search
+
semantic/vector search
→ candidate combination
→ reranking
→ relevant evidence

## Graph Layer

Legacy components
→ explicit relationships
→ dependency traversal
→ multi-hop impact analysis

## Agentic Orchestration Layer

LangGraph workflow
→ intent/entity extraction
→ retrieval planning
→ evidence evaluation
→ additional retrieval when required
→ grounded synthesis

## LLM Layer

Claude / DeepSeek
→ extraction
→ reasoning
→ grounded generation
→ test scenario generation
→ impact reports
→ conversational knowledge support

## Evaluation Layer

RAGAS
+
DeepEval
→ retrieval evaluation
→ faithfulness
→ correctness
→ hallucination detection
→ regression testing

## Application Layer

FastAPI
→ web applications
→ developer interfaces
→ conversational assistants
→ Jira / ServiceNow workflows

---

# Technologies & Tools

## Programming

Python

## Generative AI & LLMs

Generative AI  
Agentic AI  
RAG  
Claude  
DeepSeek  
LLMs  
Prompt Engineering

## Agentic AI

LangGraph  
LangChain  
Multi-step agent workflows  
Query planning  
Stateful orchestration

## Retrieval

Hybrid Retrieval  
Semantic Search  
Vector Search  
Keyword Search  
BM25  
Cross-Encoder Reranking  
Embeddings  
OpenSearch  
pgvector

## Knowledge Graph

Neo4j  
Dependency Graphs  
Multi-hop Traversal  
Change-impact Analysis

## Backend

FastAPI  
REST APIs

## Document Processing

Unstructured  
LlamaParse  
OCR  
Document Parsing  
Layout-aware Parsing  
Semantic Chunking  
Enterprise Knowledge Bases

## Evaluation

RAGAS  
DeepEval  
Retrieval Evaluation  
Faithfulness  
Hallucination Detection  
LLM Regression Testing

## Enterprise Integrations

Jira  
ServiceNow

---

# Key Takeaways & Skills Developed

Through the Accenture DWP project, developed practical experience across the full lifecycle of enterprise GenAI and RAG systems, including:

- Understanding and processing complex legacy-system documentation.
- Building domain-aware document ingestion and semantic chunking approaches.
- Designing hybrid retrieval systems combining keyword and vector search.
- Applying reranking to improve retrieval precision.
- Building Agentic RAG workflows with LangGraph.
- Designing multi-step AI workflows and query-planning logic.
- Using Neo4j for dependency and impact analysis.
- Building FastAPI services around AI capabilities.
- Working with Claude and DeepSeek as LLM layers.
- Designing grounded generation workflows.
- Handling incomplete and ambiguous enterprise knowledge.
- Building AI-assisted testing workflows.
- Generating and validating test scenarios using RAG and LLMs.
- Evaluating RAG and LLM systems using RAGAS and DeepEval.
- Integrating AI capabilities with enterprise workflows.
- Understanding the engineering challenges involved in taking RAG and Agentic AI beyond simple demonstrations toward enterprise use cases.

The experience provided exposure to the complete AI application pipeline:

Data ingestion
→ document intelligence
→ semantic chunking
→ embeddings
→ hybrid retrieval
→ reranking
→ graph reasoning
→ agentic orchestration
→ grounded LLM generation
→ evaluation
→ enterprise application integration.