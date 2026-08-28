import React, { useState } from 'react';
import { ARCHETYPES_PRESETS } from '../data/architectureData';
import { ShieldAlert, Cpu, Database, Wrench, Activity, AlertTriangle, CheckCircle, RefreshCw, Zap, Server, Users, FileCode2 } from 'lucide-react';

export const StackArchitectSandbox: React.FC = () => {
  const [selectedPresetId, setSelectedPresetId] = useState<string>('regulated-fintech');

  const [customStack, setCustomStack] = useState({
    inference: 'OpenAI Direct API',
    context: 'dbt Semantic Layer + Hex Guides',
    action: 'Runlayer / MCP Gateway (OAuth Delegation)',
    orchestrator: 'Temporal.io Durable Workflows',
    telemetry: 'LangSmith Observability & Evals'
  });

  const activePreset = ARCHETYPES_PRESETS.find(p => p.id === selectedPresetId);

  const applyPreset = (presetId: string) => {
    setSelectedPresetId(presetId);
    const p = ARCHETYPES_PRESETS.find(pr => pr.id === presetId);
    if (p) {
      setCustomStack({
        inference: p.stackComposition.inference,
        context: p.stackComposition.context,
        action: p.stackComposition.action,
        orchestrator: p.stackComposition.orchestration,
        telemetry: p.stackComposition.telemetry
      });
    }
  };

  // Evaluate architectural characteristics dynamically
  const isTemporal = customStack.orchestrator.toLowerCase().includes('temporal');
  const isLangSmith = customStack.telemetry.toLowerCase().includes('langsmith') || customStack.orchestrator.toLowerCase().includes('langsmith');
  const isMCP = customStack.action.toLowerCase().includes('mcp') || customStack.action.toLowerCase().includes('runlayer');
  const isDbt = customStack.context.toLowerCase().includes('dbt');
  const isLocalHarness = customStack.orchestrator.toLowerCase().includes('cli') || customStack.action.toLowerCase().includes('shell');

  let calculatedPagers = 2;
  if (isTemporal) calculatedPagers += 1;
  if (isMCP) calculatedPagers += 1;
  if (isLocalHarness) calculatedPagers = 1;

  let manifestArtifact = 'The Trace Hierarchy (trace_id → span_tree)';
  if (isDbt && !isLangSmith) manifestArtifact = 'The dbt Semantic Manifest (semantic_manifest.json)';
  if (isTemporal) manifestArtifact = 'Durable Workflow Event Log (event_history.bin)';
  if (isMCP && !isLangSmith) manifestArtifact = 'Cryptographic Audit Trail (policy.rego + token_ledger)';
  if (isLocalHarness) manifestArtifact = 'Git Commit Diff (git commit / PR)';

  let criticalBlindspot = 'Balancing reasoning quality with enterprise IAM permissions.';
  if (isLangSmith && !isDbt) criticalBlindspot = 'Negative Space: Agent has deep telemetry but zero knowledge of business metrics or table grains (Context Void).';
  if (isDbt && !isLangSmith && !isTemporal) criticalBlindspot = 'Negative Space: Confined to SQL analytics queries; cannot execute autonomous multi-day background loops.';
  if (isTemporal && !isLangSmith) criticalBlindspot = 'Negative Space: Highly resilient workflow, but zero semantic eval scoring to detect hallucinated responses.';
  if (isLocalHarness) criticalBlindspot = 'Negative Space: Zero central server telemetry; engineering leaders cannot measure fleet-wide quality.';

  return (
    <div className="space-y-6">
      {/* Editorial Header */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-7 space-y-3 shadow-xs">
        <div className="flex items-center space-x-2">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded border border-blue-200 dark:border-blue-800">
            Interactive Simulator
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">Build Your Stack Dilemma</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          Stack Projection & Pager Simulator
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-4xl">
          Assemble a custom agent stack across the 5 Invariants, or test real-world organizational archetypes. See in real-time what <strong>artifact becomes the single source of truth</strong>, how many <strong>teams get paged</strong>, and where the <strong>architectural blind spot</strong> lies.
        </p>
      </div>

      {/* Preset Archetypes */}
      <div className="space-y-3">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
          Select an Enterprise Archetype Preset:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {ARCHETYPES_PRESETS.map((p) => {
            const isSelected = selectedPresetId === p.id;
            return (
              <button
                key={p.id}
                id={`preset-btn-${p.id}`}
                onClick={() => applyPreset(p.id)}
                className={`p-4 rounded-lg text-left border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-blue-400'
                }`}
              >
                <div className="space-y-1">
                  <span className={`font-semibold text-xs block ${isSelected ? 'text-white' : 'text-slate-900 dark:text-slate-100'}`}>
                    {p.name}
                  </span>
                  <p className={`text-[11px] line-clamp-2 ${isSelected ? 'text-blue-100' : 'text-slate-500'}`}>
                    {p.description}
                  </p>
                </div>
                <div className={`mt-3 pt-2 border-t flex items-center justify-between text-[10px] font-mono font-medium ${
                  isSelected ? 'border-blue-500/50 text-blue-100' : 'border-slate-100 dark:border-slate-800 text-blue-600 dark:text-blue-400'
                }`}>
                  <span>{p.pagers} Pagers</span>
                  <span>Preset →</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Stack Builder Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 space-y-5 shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center">
              <Wrench className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
              Configure Custom Layer Selections
            </h3>
            <span className="text-xs font-mono text-slate-400">5-Layer Composition</span>
          </div>

          <div className="space-y-4 text-xs">
            {/* 1. Inference */}
            <div className="space-y-1.5">
              <label className="font-mono font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between">
                <span>1. INFERENCE ENGINE (Model Provider)</span>
                <span className="text-[10px] text-slate-400 font-normal">Electricity vs Cognitive Core</span>
              </label>
              <select
                value={customStack.inference}
                onChange={(e) => setCustomStack({ ...customStack, inference: e.target.value })}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 font-mono text-slate-900 dark:text-slate-100 focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              >
                <option value="OpenAI Direct API">OpenAI Direct API (GPT-4.5 / o3-mini)</option>
                <option value="Anthropic Claude API">Anthropic API (Claude 3.7 Sonnet)</option>
                <option value="AWS Bedrock Gateway">AWS Bedrock Managed Model Gateway</option>
                <option value="Google Vertex AI">Google Cloud Vertex AI (Gemini 2.5 Pro)</option>
                <option value="Self-Hosted vLLM / DeepSeek">Self-Hosted vLLM (DeepSeek R1 / Llama 3.3)</option>
              </select>
            </div>

            {/* 2. Context */}
            <div className="space-y-1.5">
              <label className="font-mono font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between">
                <span>2. CONTEXT & GROUNDING ENGINE</span>
                <span className="text-[10px] text-slate-400 font-normal">Semantic Truth & Rules</span>
              </label>
              <select
                value={customStack.context}
                onChange={(e) => setCustomStack({ ...customStack, context: e.target.value })}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 font-mono text-slate-900 dark:text-slate-100 focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              >
                <option value="dbt Semantic Layer + Hex Guides">dbt Semantic Layer + Hex Workspace Guides (MDS Context)</option>
                <option value="Pinecone / Weaviate Vector RAG">Pinecone / Weaviate Vector Embeddings RAG</option>
                <option value="Raw SQL Schemas & Prompt Engineering">Raw Information Schema in Prompt (No Semantic Layer)</option>
                <option value="Local Git Repo & Workspace Files">Local Git Repository & File Tree (Developer Harness)</option>
              </select>
            </div>

            {/* 3. Action */}
            <div className="space-y-1.5">
              <label className="font-mono font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between">
                <span>3. ACTION & TOOL GOVERNANCE</span>
                <span className="text-[10px] text-slate-400 font-normal">Authority & Tool Gating</span>
              </label>
              <select
                value={customStack.action}
                onChange={(e) => setCustomStack({ ...customStack, action: e.target.value })}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 font-mono text-slate-900 dark:text-slate-100 focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              >
                <option value="Runlayer / MCP Gateway (OAuth Delegation)">Runlayer / MCP Enterprise Gateway (OAuth + Policy)</option>
                <option value="LangGraph In-Code Python Functions">LangGraph In-Code Functions (Dev Authority)</option>
                <option value="Temporal Durable Activities">Temporal Durable Activities (Idempotency + Sagas)</option>
                <option value="Local Shell Terminal & FS Tools">Local Developer Shell & CLI Execution</option>
              </select>
            </div>

            {/* 4. Orchestration */}
            <div className="space-y-1.5">
              <label className="font-mono font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between">
                <span>4. ORCHESTRATION & RUNTIME</span>
                <span className="text-[10px] text-slate-400 font-normal">State Machine & Lifecycle</span>
              </label>
              <select
                value={customStack.orchestrator}
                onChange={(e) => setCustomStack({ ...customStack, orchestrator: e.target.value })}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 font-mono text-slate-900 dark:text-slate-100 focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              >
                <option value="LangSmith Deployment / LangGraph Server">LangSmith Deployment / LangGraph Cloud</option>
                <option value="Temporal.io Durable Workflows">Temporal.io Distributed Replayable DAGs</option>
                <option value="Provider Native Loop (OpenAI Assistants)">Provider-Managed Native Loop (OpenAI / Bedrock)</option>
                <option value="Developer Terminal Session (CLI Process)">Local CLI Harness (Claude Code / Cursor Process)</option>
              </select>
            </div>

            {/* 5. Telemetry */}
            <div className="space-y-1.5">
              <label className="font-mono font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between">
                <span>5. RECORD & EVALUATION PLATFORM</span>
                <span className="text-[10px] text-slate-400 font-normal">System of Record & Quality</span>
              </label>
              <select
                value={customStack.telemetry}
                onChange={(e) => setCustomStack({ ...customStack, telemetry: e.target.value })}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 font-mono text-slate-900 dark:text-slate-100 focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              >
                <option value="LangSmith Observability & Evals">LangSmith Traces + Online/Offline Evals</option>
                <option value="Braintrust Evals & Regression CI">Braintrust Trace Warehouse + CI Regression Benchmarks</option>
                <option value="Standard CloudWatch Logs (No Semantic Evals)">Standard CloudWatch / Datadog Logs (No Evals)</option>
                <option value="Human Code Review & Git PRs">Human Developer In-The-Loop Reviews (PRs)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Real-time Impact Assessment Card */}
        <div className="bg-slate-900 text-slate-100 border border-slate-800 rounded-xl p-6 space-y-6 flex flex-col justify-between shadow-sm">
          <div className="space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-mono font-bold uppercase text-emerald-400 flex items-center">
                <Activity className="w-3.5 h-3.5 mr-1.5" /> Stack Projection Impact
              </span>
              <span className="text-[11px] font-mono text-slate-400">Live Synthesis</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-center space-y-1">
                <span className="text-2xl font-bold font-mono text-white">{calculatedPagers}</span>
                <span className="text-[10px] font-mono text-slate-400 block uppercase tracking-wider">Teams on Pager</span>
              </div>
              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-center space-y-1">
                <span className="text-2xl font-bold font-mono text-amber-400">
                  {isLocalHarness ? '1' : isTemporal ? '4+' : '3'}
                </span>
                <span className="text-[10px] font-mono text-slate-400 block uppercase tracking-wider">Vendor Contracts</span>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 block">
                The Compiled Artifact (System of Record):
              </span>
              <div className="p-3 bg-slate-950 rounded-lg border border-blue-900/60 text-xs font-mono text-blue-200">
                {manifestArtifact}
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400 block">
                Critical Architectural Negative Space:
              </span>
              <div className="p-3 bg-rose-950/40 rounded-lg border border-rose-900/60 text-xs text-rose-200 leading-relaxed font-sans">
                {criticalBlindspot}
              </div>
            </div>
          </div>

          <div className="p-3 bg-slate-950/80 rounded-lg text-[11px] text-slate-400 border border-slate-800 space-y-1">
            <span className="font-bold text-slate-300 block">The Hyperscaler Risk:</span>
            <p className="leading-relaxed">
              If AWS Bedrock or Azure AI Foundry bundles these layers into a single SKU with native IAM, point solutions survive only where their artifact is cross-cloud by definition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
