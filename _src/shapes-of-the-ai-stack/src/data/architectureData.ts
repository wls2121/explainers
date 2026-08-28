import { DataStackComponent, StackView, Invariant, AIShape } from '../types/architecture';

export const DATA_STACK_COMPONENTS: DataStackComponent[] = [
  {
    id: 'src',
    name: 'Source Systems',
    category: 'Ingress',
    description: 'Operational databases, CRM, third-party SaaS APIs, event streams.',
    typicalVendors: ['PostgreSQL', 'Salesforce', 'Stripe', 'Kafka']
  },
  {
    id: 'ing',
    name: 'Ingestion & Replication',
    category: 'Pipelines',
    description: 'Extract and load connectors moving raw data into object storage/lakehouse.',
    typicalVendors: ['Fivetran', 'Airbyte', 'Stitch', 'Meltano']
  },
  {
    id: 'sto',
    name: 'Object Storage & Lakehouse',
    category: 'Storage',
    description: 'Scalable immutable object store acting as the raw and processed data lake.',
    typicalVendors: ['AWS S3', 'Google Cloud Storage', 'Azure ADLS', 'MinIO']
  },
  {
    id: 'cat',
    name: 'Table Format & Catalog',
    category: 'Storage & Metadata',
    description: 'ACID transactional table layers and unified metadata catalog.',
    typicalVendors: ['Apache Iceberg', 'Delta Lake', 'Unity Catalog', 'Polaris', 'Glue']
  },
  {
    id: 'xfm',
    name: 'Transformation Engine',
    category: 'Modeling',
    description: 'SQL/Python transformation logic turning raw silver data into structured gold models.',
    typicalVendors: ['dbt Core/Cloud', 'Dataform', 'SQLMesh', 'Coalesce']
  },
  {
    id: 'sem',
    name: 'Semantics & Metric Layer',
    category: 'Modeling',
    description: 'Single source of truth for business metrics, dimensions, joins, and caching.',
    typicalVendors: ['dbt Semantic Layer / MetricFlow', 'Cube.js', 'LookML', 'Hex Semantic']
  },
  {
    id: 'qua',
    name: 'Quality, Tests & Contracts',
    category: 'Governance',
    description: 'Data unit tests, schema contracts, freshness assertions, and anomaly monitors.',
    typicalVendors: ['dbt tests', 'Great Expectations', 'Monte Carlo', 'Soda', 'Elementary']
  },
  {
    id: 'orc',
    name: 'Orchestration & DAG Scheduler',
    category: 'Workflow',
    description: 'Dependency graph execution, cron triggers, retry backoffs, and sensor alerts.',
    typicalVendors: ['Dagster', 'Apache Airflow', 'Prefect', 'dbt Cloud Scheduler']
  },
  {
    id: 'srv',
    name: 'Serving & Query Engines',
    category: 'Query Compute',
    description: 'Distributed analytical SQL engines serving low-latency interactive queries.',
    typicalVendors: ['Snowflake', 'BigQuery', 'Databricks SQL', 'DuckDB', 'ClickHouse']
  },
  {
    id: 'acl',
    name: 'Access Control & IAM',
    category: 'Security',
    description: 'Column-level masking, RBAC policies, row-level filtering, and credential tokens.',
    typicalVendors: ['Immuta', 'Privacera', 'AWS IAM', 'Okta', 'OpenFGA']
  },
  {
    id: 'obs',
    name: 'Observability & Lineage Graph',
    category: 'Governance',
    description: 'End-to-end DAG lineage, SLA tracking, incident root-cause analysis, and audit trails.',
    typicalVendors: ['Monte Carlo', 'Synq', 'Metaplane', 'OpenLineage', 'CastorDoc']
  },
  {
    id: 'bi',
    name: 'BI, Notebooks & Visual Apps',
    category: 'Consumption',
    description: 'Visual canvases, interactive dashboards, notebooks, and operational reverse-ETL.',
    typicalVendors: ['Hex', 'Looker', 'Tableau', 'Metabase', 'Evidence', 'Preset']
  }
];

export const STACK_VIEWS: StackView[] = [
  {
    id: 'functional',
    title: '1 · The Functional Zone View',
    subtitle: 'The Vendor-Agnostic Map of Data Stages',
    axis: 'Stages data passes through (Land → Integrate → Model → Distribute → Consume)',
    coreQuestion: 'What technical processes must occur to turn raw state into insight?',
    thesis: 'Every stage is neutral and cleanly decoupled. Agreement is the deliverable.',
    strategicTakeaway: 'This view is a political truce. Handing this to a customer concedes the frame to whoever fills the most boxes (the hyperscaler or consolidated lakehouse). It hides gravity, seams, and org pain.',
    vendorStance: 'Used by consultancies (Accenture, Slalom) and enterprise architects to achieve committee sign-off.'
  },
  {
    id: 'control-plane',
    title: '2 · The Control Plane & Artifact View',
    subtitle: 'Own the Manifest, Rent the Compute Substrate',
    axis: 'What everything else in the ecosystem is forced to read & conform to',
    coreQuestion: 'Who holds the versioned definitions of the business logic in Git?',
    thesis: 'Compute engines are commodities that rotate; the compiled manifest is the durable gravity.',
    strategicTakeaway: 'dbt won the Modern Data Stack not by having the most compute features, but by owning the compiled manifest artifact. Downstream orchestrators, CI, catalogs, and BI tools all read dbt manifest.json.',
    vendorStance: 'Championed by dbt Labs, SQLMesh, and semantic layer vendors who isolate business logic from warehouse lock-in.'
  },
  {
    id: 'substrate',
    title: '3 · The Consolidated Substrate View',
    subtitle: 'Don\'t Compose Pluggable Parts. Subscribe to One Perimeter.',
    axis: 'Inside vs Outside the Unified Platform Boundary',
    coreQuestion: 'How many vendors, contracts, and integration seams do you want to operate?',
    thesis: 'Pluggability is an invoice in disguise. Every seam between 12 point solutions is an outage waiting to happen.',
    strategicTakeaway: 'Databricks and hyperscalers (AWS Bedrock, GCP Vertex, Snowflake Cortex) argue that custom point-solution assembly is unpaid customer labor. They bundle ingestion, lakehouse, catalog, notebook, and compute into one invoice.',
    vendorStance: 'Databricks (Lakehouse + Unity Catalog), Snowflake, AWS/GCP/Azure enterprise platforms.'
  },
  {
    id: 'ownership',
    title: '4 · The Ownership & Pager View',
    subtitle: 'Who Gets Paged When the Numbers Disagree?',
    axis: 'Org reporting lines, team boundaries, and escalation paths',
    coreQuestion: 'Which team answers the 2 AM alert when an executive dashboard displays corrupt data?',
    thesis: 'Tooling consolidation cannot collapse org reporting boundaries. Seams between teams remain fractures.',
    strategicTakeaway: 'Survives competitive bundling claims because even if Bedrock or Databricks bundles everything, Security still manages IAM, Platform manages endpoints, Analytics Eng manages SQL, and Business owns the SLA.',
    vendorStance: 'Used by challenger platforms highlighting the hidden labor cost of coordinating across siloed departments.'
  }
];

export const INVARIANTS: Invariant[] = [
  {
    id: 'inf',
    name: '1. Inference',
    shortDefinition: 'A model calculates probability distributions to propose the next token or tool invocation.',
    deepDescription: 'The compute raw-material. Can be a proprietary frontier model (Claude 3.7 Sonnet, GPT-4.5, Gemini 2.5 Pro) or fine-tuned open weights (Llama 3, DeepSeek R1). Treated either as a differentiated cognitive center or an interchangeable utility like electricity.',
    whyContested: 'Model providers want inference to be the center of gravity; agent frameworks treat it as swappable commodity; workflow engines treat it as an untrusted, flakey network call.',
    analogy: 'The engine cylinders firing (pure mechanical output).'
  },
  {
    id: 'ctx',
    name: '2. Context',
    shortDefinition: 'The grounding truth: schemas, metric semantics, past state, domain rules, workspace guides.',
    deepDescription: 'What the agent actually knows prior to reasoning. Includes table schemas, dbt descriptions, metric grain rules, workspace guidelines, episodic memory, and trusted endorsements.',
    whyContested: 'Data teams argue quality is 90% context engineering; model providers bundle context into proprietary context windows; agent engineering platforms outsource it entirely to external databases.',
    analogy: 'The navigation charts, road signs, and physics laws.'
  },
  {
    id: 'act',
    name: '3. Action & Authority',
    shortDefinition: 'The tools the agent may invoke, and the cryptographic identity / permissions under which it acts.',
    deepDescription: 'The boundary where reasoning meets mutation. Includes MCP servers, REST tool definitions, sandbox runtimes, OAuth token delegation, role-based tool gating, and step-level approval gates.',
    whyContested: 'Tool-plane platforms (MCP, Runlayer, Arcade) say the loop is trivial but authority is the only security-auditable perimeter. Agent frameworks treat tools as mere JSON function schemas.',
    analogy: 'The steering wheel, pedals, and driver’s license credential.'
  },
  {
    id: 'rec',
    name: '4. Record & Telemetry',
    shortDefinition: 'The immutable trace of prompts, tool calls, token usage, latency, intermediate outputs, and state diffs.',
    deepDescription: 'The system of record. Every step taken by the agent is logged with deterministic timestamps, parent-child spans, token economics, and error payloads.',
    whyContested: 'Observability platforms (LangSmith, Braintrust, Arize) bet that a multi-year archive of traces is the single most sticky asset a company creates, making it the true manifest of the agent stack.',
    analogy: 'The flight data recorder (black box) documenting every micro-maneuver.'
  },
  {
    id: 'jud',
    name: '5. Judgment & Evals',
    shortDefinition: 'The scoring function determining if the agent’s response or execution was accurate, safe, and aligned.',
    deepDescription: 'Quality gates, LLM-as-a-judge scorers, golden regression datasets, unit tests on output schemas, and human-in-the-loop review queues.',
    whyContested: 'Without evals, teams cannot ship model updates without regressions; yet workflow engines and local harnesses have zero concept of subjective semantic quality.',
    analogy: 'The driving test examiner and safety inspection certificate.'
  }
];

export const AI_SHAPES: AIShape[] = [
  {
    id: 'shape-1',
    name: 'Agent Engineering Platform',
    tagline: 'Build → Prove → Run with the Trace as System of Record',
    paradigm: 'Lifecycle-centric observability & graph execution',
    heroQuote: '"You cannot improve or safely ship what you cannot trace, evaluate, and regression-test across prompt iterations."',
    exemplars: ['LangChain / LangGraph', 'LangSmith', 'Braintrust', 'Arize Phoenix', 'Helicone'],
    runtimeStance: 'LangGraph / LangSmith Deployment provides graph state machines, state checkpointing, and time-travel debugging.',
    missingHole: 'Context & Domain Semantics are completely absent — outsourced to whatever data stack or vector database you bring.',
    whyTheyWin: 'The accumulated trace history and golden eval dataset becomes an irreplaceable moat. Migrating 2 years of traces is practically impossible.',
    whyTheyFail: 'If frontier model APIs become autonomous enough that multi-step prompt engineering graphs are obsolete, the runtime layer evaporates into simple API calls.',
    artifactProduced: 'The Trace & Eval Benchmark (run_id → prompt diff → span graph → score).',
    ownershipProfile: {
      mlEng: 'Owns prompts, graph flow, and eval test suites in LangSmith',
      platform: 'Hosts deployment clusters & container runtimes',
      security: 'Audits LangSmith data retention and sanitization',
      bizDev: 'Uses Fleet/Playground to prototype without writing code'
    },
    invariants: {
      inf: {
        invariantId: 'inf',
        stance: 'commoditized',
        stanceLabel: 'Bring-Your-Own Provider',
        detail: 'Provider-agnostic by design. Wraps OpenAI, Anthropic, Gemini, or vLLM identically behind unified client interfaces.',
        strategicImplication: 'Prevents vendor lock-in to any single model vendor, allowing instant routing to cheaper/faster models.'
      },
      ctx: {
        invariantId: 'ctx',
        stance: 'absent',
        stanceLabel: 'Outsourced to Data Layer',
        detail: 'Contains no native understanding of business tables, metrics, or semantic modeling. Relies entirely on external RAG or vector indexes.',
        strategicImplication: 'Leaves a massive blind spot: an agent can have flawless trace telemetry while hallucinating on bad table definitions.'
      },
      act: {
        invariantId: 'act',
        stance: 'first-class',
        stanceLabel: 'In-Code Graph Tools',
        detail: 'Tools are defined as code functions inside the agent graph with optional human-in-the-loop approval interrupts.',
        strategicImplication: 'Flexible for developers, but lacks enterprise-wide RBAC and cryptographic agent identity delegation out of the box.'
      },
      rec: {
        invariantId: 'rec',
        stance: 'first-class',
        stanceLabel: 'The Core Gravitational Anchor',
        detail: 'The trace span hierarchy is the primary system of record. Every prompt, token, latency spike, and intermediate state is captured.',
        strategicImplication: 'High lock-in. Once your team builds CI regression gates against historical traces, moving platforms is agonizing.'
      },
      jud: {
        invariantId: 'jud',
        stance: 'first-class',
        stanceLabel: 'Continuous Evals against Traces',
        detail: 'Online and offline evaluations, LLM-as-a-judge scoring, pairwise comparisons, and dataset annotation workflows.',
        strategicImplication: 'Directly addresses the enterprise deployment barrier: "How do we prove this update doesn\'t break edge cases?"'
      }
    }
  },
  {
    id: 'shape-2',
    name: 'Model Provider as Monolith',
    tagline: 'The Agent Runtime Collapses Directly into the Model API',
    paradigm: 'Full-stack vertical integration inside the frontier frontier',
    heroQuote: '"Why assemble 8 external services when OpenAI/Anthropic/Bedrock provides built-in tools, memory, retrieval, reasoning tokens, and execution?"',
    exemplars: ['OpenAI Assistants & Responses API', 'Anthropic Computer Use & Messages', 'AWS Bedrock Agent Runtime', 'Google Vertex AI Agent Space'],
    runtimeStance: 'The runtime is inside the inference request. The model loops internally across thoughts, tools, and outputs.',
    missingHole: 'Cross-vendor portability is zero. Your system of record is trapped inside one provider\'s proprietary perimeter.',
    whyTheyWin: 'Lowest friction, zero infrastructure to deploy, and prompt-caching / latency benefits from co-locating compute and state.',
    whyTheyFail: 'Enterprises refuse to hand their entire governance, eval history, and multi-model leverage to a single closed provider.',
    artifactProduced: 'Provider Thread / Session ID (thread_xxx inside closed cloud infrastructure).',
    ownershipProfile: {
      mlEng: 'Configures provider system prompts and file attachments',
      platform: 'Manages cloud billing and API quotas',
      security: 'Reviews provider SOC2/HIPAA compliance agreements',
      bizDev: 'Directly uses provider web interfaces and assistants'
    },
    invariants: {
      inf: {
        invariantId: 'inf',
        stance: 'first-class',
        stanceLabel: 'The Core Proprietary Engine',
        detail: 'Proprietary reasoning tokens, native tool-use token heads, and internal multi-token prediction optimizations.',
        strategicImplication: 'Best-in-class reasoning performance, but you cannot mix-and-match models without rewriting integrations.'
      },
      ctx: {
        invariantId: 'ctx',
        stance: 'bundled',
        stanceLabel: 'In-Platform Vector & Files Store',
        detail: 'Native file uploads, assistants vector stores, and provider-managed memory threads (e.g. OpenAI Vector Store).',
        strategicImplication: 'Convenient to initialize, but disconnected from your corporate dbt semantic models and Git version control.'
      },
      act: {
        invariantId: 'act',
        stance: 'bundled',
        stanceLabel: 'Hosted Provider Tooling',
        detail: 'Hosted code interpreters, file search, web search, and webhook triggers executed within the provider sandbox.',
        strategicImplication: 'Sandboxed execution is maintained for you, but enterprise on-prem tool integration requires custom bridges.'
      },
      rec: {
        invariantId: 'rec',
        stance: 'commoditized',
        stanceLabel: 'Provider Console Logs',
        detail: 'Logs exist within the cloud dashboard (Bedrock CloudWatch / OpenAI dashboard) with standard retention policies.',
        strategicImplication: 'Telemetry is fragmented if you ever call a second provider or run local models.'
      },
      jud: {
        invariantId: 'jud',
        stance: 'bundled',
        stanceLabel: 'Single-Vendor Evaluators',
        detail: 'Built-in evaluation dashboards and prompt playgrounds tied to that specific provider’s model generations.',
        strategicImplication: 'Conflict of interest: the provider evaluates their own model’s quality without independent cross-validation.'
      }
    }
  },
  {
    id: 'shape-3',
    name: 'Durable Execution & Workflow Engine',
    tagline: 'There is No Agent Runtime — Agents are Just Fault-Tolerant Distributed Workflows',
    paradigm: 'Replayable DAGs, event-driven state machines, durable queues',
    heroQuote: '"Long-running stateful workflows with retries, timeouts, and human approvals were solved a decade ago. Don\'t reinvent a worse version in Python."',
    exemplars: ['Temporal.io', 'Restate.dev', 'DBOS', 'Inngest', 'Cadence'],
    runtimeStance: 'Temporal / Restate event histories. The agent loop is a deterministic workflow; LLM calls are flaky activities with exponential backoffs.',
    missingHole: 'Semantic Judgment & Context Evals are completely foreign concepts — the engine only cares about distributed systems resilience.',
    whyTheyWin: 'Rock-solid reliability for multi-day, multi-step asynchronous processes (e.g., loan approvals, compliance audits, background research).',
    whyTheyFail: 'Building prompt evaluation pipelines, semantic similarity assertions, or conversational playgrounds on Temporal requires hand-rolling everything.',
    artifactProduced: 'The Replayable Workflow Event History (deterministic event stream).',
    ownershipProfile: {
      mlEng: 'Writes activity worker handlers calling model APIs',
      platform: 'Deploys Temporal clusters, Kafka streams, and Postgres event storage',
      security: 'Enforces VPC boundaries and mTLS between workers',
      bizDev: 'Has no direct access; works through business workflow dashboards'
    },
    invariants: {
      inf: {
        invariantId: 'inf',
        stance: 'commoditized',
        stanceLabel: 'Flaky Network Activity',
        detail: 'Inference is simply an untrusted remote I/O call wrapped in retry policies, rate limiters, and circuit breakers.',
        strategicImplication: 'Total resilience against provider downtime or 503 rate limits, with deterministic replay on crash.'
      },
      ctx: {
        invariantId: 'ctx',
        stance: 'absent',
        stanceLabel: 'Externalized Data Payload',
        detail: 'No opinion on context, RAG, or embeddings; context is just a serializable payload passed to the workflow input.',
        strategicImplication: 'Must be integrated with a separate data platform or vector database for grounding.'
      },
      act: {
        invariantId: 'act',
        stance: 'first-class',
        stanceLabel: 'Durable Activities with Human Signals',
        detail: 'Tools are durable activities with idempotency keys, automatic compensation logic (sagas), and external pause/resume signals.',
        strategicImplication: 'Unmatched guarantees for real-world financial or enterprise actions where duplicate execution causes disaster.'
      },
      rec: {
        invariantId: 'rec',
        stance: 'first-class',
        stanceLabel: 'Deterministic Event Sourcing',
        detail: 'Every single event, activity completion, timer, and retry is permanently recorded in the durable workflow history.',
        strategicImplication: 'Zero state loss even if the host server dies mid-execution; workflows resume on another node seamlessly.'
      },
      jud: {
        invariantId: 'jud',
        stance: 'absent',
        stanceLabel: 'No Notion of Semantic Quality',
        detail: 'The engine verifies if an activity succeeded with HTTP 200, not whether the generated text was truthful, coherent, or biased.',
        strategicImplication: 'Requires a secondary eval layer (like Braintrust or custom pytest fixtures) to test output validity.'
      }
    }
  },
  {
    id: 'shape-4',
    name: 'Context & Data Intelligence Plane',
    tagline: 'Agent Quality is 90% Data Modeling, Metric Definitions & Trust Signals',
    paradigm: 'Semantic layers, metadata endorsements, workspace guides',
    heroQuote: '"An agent without business context will generate SQL that executes with 0 syntax errors and answers the exact wrong question."',
    exemplars: ['dbt Labs (Semantic Layer)', 'Hex (Context Studio & Guides)', 'LlamaIndex', 'Cube.js', 'Atlan'],
    runtimeStance: 'Hex agent threads, notebook environments, or embedded BI bots querying the semantic model.',
    missingHole: 'Complex autonomous multi-step tool loops (e.g. browsing the web, operating terminal shells, running background code) are out of scope.',
    whyTheyWin: 'Solves the #1 cause of enterprise AI failure: hallucinating metrics, joining uncurated tables, and misinterpreting ARR vs MRR.',
    whyTheyFail: 'Cannot serve as a general-purpose agent runtime for non-data tasks (e.g., customer support bots, code editing, browser automation).',
    artifactProduced: 'The Semantic Model & Endorsement Manifest (semantic_manifest.json + dbt models).',
    ownershipProfile: {
      mlEng: 'Consumes curated data models via semantic layer APIs',
      platform: 'Maintains Snowflake/BigQuery warehouse compute',
      security: 'Enforces row/column level data masking in the warehouse',
      bizDev: 'Directly asks questions in Hex or Slack and gets validated charts'
    },
    invariants: {
      inf: {
        invariantId: 'inf',
        stance: 'commoditized',
        stanceLabel: 'Swappable SQL/Text Generator',
        detail: 'The model is an interchangeable translation engine. Any good reasoning model can generate SQL if the context is pristine.',
        strategicImplication: 'Protects the enterprise from model churn; your competitive moat is your proprietary business logic, not OpenAI weights.'
      },
      ctx: {
        invariantId: 'ctx',
        stance: 'first-class',
        stanceLabel: 'The Entire Value Proposition',
        detail: 'dbt column definitions with business filtering rules, metric dimensions, table grains, Hex workspace guides, and verified endorsements.',
        strategicImplication: 'Transforms raw table chaos into deterministic answers. If context is clear, even smaller cheap models succeed.'
      },
      act: {
        invariantId: 'act',
        stance: 'commoditized',
        stanceLabel: 'Read-Only Analytical Queries',
        detail: 'Actions are primarily analytical queries executed against warehouse query engines, with strict read-only safety.',
        strategicImplication: 'Safe for enterprise rollout because agents cannot accidentally mutate production operational databases.'
      },
      rec: {
        invariantId: 'rec',
        stance: 'first-class',
        stanceLabel: 'Conversation Lineage & Query Logs',
        detail: 'Captures conversation queries, generated SQL diffs, query execution costs, and context coverage gap reports.',
        strategicImplication: 'Enables data teams to see exactly what questions the business is asking and where documentation is missing.'
      },
      jud: {
        invariantId: 'jud',
        stance: 'outsourced',
        stanceLabel: 'Metric Truth vs Evals in CI',
        detail: 'Validation occurs via data quality tests (dbt test), semantic checks, and domain expert review of endorsed assets.',
        strategicImplication: 'Relies on relational correctness rather than probabilistic LLM-as-a-judge scorers.'
      }
    }
  },
  {
    id: 'shape-5',
    name: 'Tool, Gateway & Governance Plane',
    tagline: 'The Loop is Trivial — Authority, Identity & Auditable Policy are the Frontier',
    paradigm: 'MCP gateways, cryptographic agent identity, least-privilege tool execution',
    heroQuote: '"Reasoning in a loop is a 50-line Python script. Granting an autonomous agent permission to touch Salesforce and Stripe without getting fired is the real company."',
    exemplars: ['Model Context Protocol (MCP)', 'Runlayer', 'Arcade.dev', 'Composio', 'Portkey'],
    runtimeStance: 'Gateway proxies intercepting tool calls, resolving user OAuth tokens, and verifying policy before dispatching.',
    missingHole: 'Has zero opinion on model reasoning quality, prompt engineering, or semantic data modeling.',
    whyTheyWin: 'Security and Compliance officers will veto any agent deployment that lacks centralized IAM, token delegation, and tamper-proof audit trails.',
    whyTheyFail: 'If model providers or hyperscalers bake universal OAuth token brokering into IAM (e.g. AWS IAM Identity Center for Agents), standalone gateways get squeezed.',
    artifactProduced: 'The Cryptographic Agent Audit Log & Policy Spec (policy.rego / token_audit_trail).',
    ownershipProfile: {
      mlEng: 'Discovers and binds tools from the central catalog',
      platform: 'Deploys MCP gateway proxies in Kubernetes',
      security: 'Defines authorization policies, token scopes, and human-gate thresholds',
      bizDev: 'Grants OAuth delegation for their specific third-party accounts'
    },
    invariants: {
      inf: {
        invariantId: 'inf',
        stance: 'absent',
        stanceLabel: 'Model Agnostic & Indifferent',
        detail: 'Does not touch or inspect inference logic. Any model on any platform can connect to the tool gateway via standard protocols (MCP).',
        strategicImplication: 'Works uniformly whether your agent is running Claude 3.7, DeepSeek, or an internal fine-tuned model.'
      },
      ctx: {
        invariantId: 'ctx',
        stance: 'absent',
        stanceLabel: 'No Semantic Opinion',
        detail: 'Context is treated as external inputs; the gateway only inspects tool schemas and payload arguments for safety.',
        strategicImplication: 'Requires other layers to supply business definitions and prompt framing.'
      },
      act: {
        invariantId: 'act',
        stance: 'first-class',
        stanceLabel: 'The Core Gravitational Anchor',
        detail: 'Tool registration, real-time policy evaluation, step-level user approvals, OAuth token minting, and rate-limiting per tool.',
        strategicImplication: 'The critical security perimeter. Solves the dangerous problem of giving LLMs raw unrestricted API keys.'
      },
      rec: {
        invariantId: 'rec',
        stance: 'first-class',
        stanceLabel: 'Tamper-Proof Audit Trails',
        detail: 'Cryptographically verifiable logs of every tool call, input arguments, acting user identity, and destination response.',
        strategicImplication: 'Mandatory for SOC2, HIPAA, and financial compliance audits.'
      },
      jud: {
        invariantId: 'jud',
        stance: 'absent',
        stanceLabel: 'Policy Enforcement ≠ Semantic Quality',
        detail: 'Verifies whether an action was authorized by policy, not whether the agent’s advice was insightful or helpful.',
        strategicImplication: 'Complementary to evaluation platforms: Runlayer checks authorization, LangSmith checks reasoning quality.'
      }
    }
  },
  {
    id: 'shape-6',
    name: 'Local Harness & Ephemeral Loop',
    tagline: 'There is No Server Stack to Buy — The Developer is the Orchestrator',
    paradigm: 'CLI runtimes, local shell execution, human-in-the-loop pair programming',
    heroQuote: '"Enterprise multi-agent platforms are over-engineered. The best agent architecture is a fast local process with direct access to my terminal, Git repo, and editor."',
    exemplars: ['Claude Code', 'Cursor', 'OpenAI Codex / Canvas', 'Aider', 'Windsurf'],
    runtimeStance: 'Local process on the developer\'s machine executing shell commands and editing local files directly.',
    missingHole: 'Zero durable multi-user cloud state, centralized regression testing, or enterprise team observability.',
    whyTheyWin: 'Maximum developer leverage, zero latency, no complex cloud orchestration, and immediate human verification in the editor.',
    whyTheyFail: 'Cannot run autonomous background business processes (e.g. 24/7 customer support triage, automated data reconciliations).',
    artifactProduced: 'The Git Commit & Local Session Diff (git diff & pull request).',
    ownershipProfile: {
      mlEng: 'Uses the CLI/editor harness to build software 5x faster',
      platform: 'Manages developer workstation access and SSH keys',
      security: 'Sets DLP policies on local code repositories',
      bizDev: 'Does not use; this is purely developer tooling'
    },
    invariants: {
      inf: {
        invariantId: 'inf',
        stance: 'bundled',
        stanceLabel: 'Tightly Paired Model Choice',
        detail: 'Optimized specifically for top-tier coding models (e.g. Claude 3.7 Sonnet or GPT-4.5) with fine-tuned tool formats.',
        strategicImplication: 'Unbeatable performance on code generation, but dependent on frontier model reasoning capabilities.'
      },
      ctx: {
        invariantId: 'ctx',
        stance: 'first-class',
        stanceLabel: 'Local Workspace, Repo & Git Diff',
        detail: 'Direct access to the local codebase, git history, compiler errors, linter output, and project documentation.',
        strategicImplication: 'Context is grounded in real code files without needing expensive RAG infrastructure.'
      },
      act: {
        invariantId: 'act',
        stance: 'first-class',
        stanceLabel: 'Local Shell, FS & Process Execution',
        detail: 'Direct execution of bash commands, package managers, test runners, and file writes under the developer\'s OS credentials.',
        strategicImplication: 'Tremendous agency, gated by real-time CLI terminal confirmation prompts before dangerous commands.'
      },
      rec: {
        invariantId: 'rec',
        stance: 'commoditized',
        stanceLabel: 'Ephemeral Local Sessions',
        detail: 'Logs live in local session files or git commit logs. There is no central server telemetry aggregating fleet activity.',
        strategicImplication: 'Low operational overhead, but engineering leadership cannot easily track global fleet quality metrics.'
      },
      jud: {
        invariantId: 'jud',
        stance: 'first-class',
        stanceLabel: 'The Human Developer in the Loop',
        detail: 'The human tests the code, reviews the diff, runs unit tests, and rejects faulty generations in real-time.',
        strategicImplication: 'The gold standard for eval accuracy (a human engineer), but cannot scale to hands-off autonomous tasks.'
      }
    }
  }
];

export const LANGCHAIN_DUALITY_COMPARISON = {
  title: 'The LangChain Duality: Two Stacks with Mutually Inverted Blind Spots',
  summary: 'LangChain has published two architectural blueprints that illustrate the fractured state of the AI stack. When placed side-by-side, the product platform has an empty hole where the data stack lives, and the data stack has an empty hole where the product platform lives.',
  productStack: {
    title: 'LangChain Product Stack (Build → Prove → Run)',
    components: [
      { name: 'LangGraph', role: 'Build Agent Logic', desc: 'Stateful cyclic graphs, branching logic, tool invocation.' },
      { name: 'LangSmith Platform', role: 'Prove & Validate', desc: 'Tracing system of record, eval benchmarks, prompt diffing.' },
      { name: 'LangSmith Deployment', role: 'Production Ops', desc: 'Stateful container hosting, auto-scaling, rollouts.' },
      { name: 'LangSmith Fleet', role: 'No-Code Workspace', desc: 'Agent discovery, natural language builder for business teams.' }
    ],
    thesis: 'The Trace is the Manifest. Own the evaluation telemetry and graph state; treat data and models as external inputs.',
    missingDimension: 'NO SEMANTIC LAYER / ZERO CONTEXT ENGINEERING. It assumes you already know which database table, column grain, and business filter to apply.'
  },
  dataStack: {
    title: 'LangChain Internal Agent-First Data Stack (Emily Hawkins Post)',
    components: [
      { name: 'dbt Models & SQL', role: 'Foundational Models', desc: 'Documented column grains, business filtering logic, SQL transformations.' },
      { name: 'Semantic Layer', role: 'Metric Consistency', desc: 'Standardized definitions for ARR, churn, pipeline, customer health.' },
      { name: 'Hex Workspace Guides', role: 'Business Skills', desc: 'Markdown playbooks in GitHub detailing company-specific rules.' },
      { name: 'Endorsements', role: 'Trust Signals', desc: 'Data-team certified queries and canonical dashboards.' },
      { name: 'Hex Context Studio', role: 'Context Observability', desc: 'Conversation topic analysis to discover missing documentation.' }
    ],
    thesis: 'Quality is a Data Modeling Problem. Context engineering turns an ungrounded LLM into a reliable 40x business analyst.',
    missingDimension: 'NO DEDICATED AGENT RUNTIME OR ORCHESTRATION. It uses standard SQL queries inside Hex/Slack without complex graph state machines.'
  },
  synthesisTakeaway: 'This duality proves that no single player currently owns the end-to-end stack. The intersection of Context Engineering (dbt/Hex) and Telemetry Engineering (LangSmith/Braintrust) is the holy grail of enterprise agent platforms.'
};

export const ARCHETYPES_PRESETS = [
  {
    id: 'regulated-fintech',
    name: 'Regulated Enterprise / FinTech',
    description: 'High auditability, strict SOC2/HIPAA rules, multiple teams with rigid compliance boundaries.',
    recommendedShape: 'shape-5',
    shapeName: 'Tool & Action Governance Plane (MCP / Runlayer)',
    stackComposition: {
      inference: 'Multi-Cloud Gateway (Bedrock + Azure OpenAI)',
      context: 'dbt Semantic Layer + Snowflake Enterprise Catalog',
      action: 'Runlayer / MCP Enterprise Gateway with Step Approval',
      orchestration: 'Temporal.io Replayable Workflows',
      telemetry: 'Braintrust Private Tenant + Splunk Audit Logs'
    },
    pagers: 4,
    criticalRisk: 'Coordination deadlock between InfoSec, Platform, and ML engineering teams.'
  },
  {
    id: 'ai-startup',
    name: 'AI-Native Product Startup',
    description: 'Rapid product iteration, prompt engineering, complex multi-step reasoning workflows.',
    recommendedShape: 'shape-1',
    shapeName: 'Agent Engineering Platform (LangGraph + LangSmith)',
    stackComposition: {
      inference: 'Direct OpenAI / Anthropic API Keys',
      context: 'Pinecone Vector DB + Supabase Postgres',
      action: 'LangGraph In-Code Tools with Human Interrupts',
      orchestration: 'LangSmith Deployment Hybrid Cloud',
      telemetry: 'LangSmith Traces + Automated Evals'
    },
    pagers: 2,
    criticalRisk: 'Context drift and hallucinated SQL queries due to lack of a centralized semantic layer.'
  },
  {
    id: 'data-driven-enterprise',
    name: 'Data-Driven Self-Service Corp',
    description: 'Empowering 500+ business operators to query metrics in Slack and Hex without ticketing the data team.',
    recommendedShape: 'shape-4',
    shapeName: 'Context & Data Intelligence Plane (dbt + Hex)',
    stackComposition: {
      inference: 'Standard Frontier Models (GPT-4.5 / Claude 3.7)',
      context: 'dbt Semantic Layer + GitHub Workspace Guides + Endorsed Models',
      action: 'Hex Read-Only Analytical Queries + Slack Bot',
      orchestration: 'dbt Cloud Orchestrator + Dagster',
      telemetry: 'Hex Context Studio + Conversation Observability'
    },
    pagers: 2,
    criticalRisk: 'Cannot extend to non-data tasks like browser automation or third-party write mutations.'
  },
  {
    id: 'dev-team',
    name: 'Elite Software Engineering Squad',
    description: 'Software engineers writing production backend code and debugging distributed services.',
    recommendedShape: 'shape-6',
    shapeName: 'Local Harness & Ephemeral Loop (Claude Code / Cursor)',
    stackComposition: {
      inference: 'Claude 3.7 Sonnet (Hybrid Thinking)',
      context: 'Local Git Repository + Compilers + Linters',
      action: 'Local Terminal Shell + File System Tools',
      orchestration: 'Developer Terminal Session (CLI)',
      telemetry: 'Git Commits & PR Code Reviews'
    },
    pagers: 1,
    criticalRisk: 'Zero centralized organization telemetry or fleet-level regression testing.'
  }
];
