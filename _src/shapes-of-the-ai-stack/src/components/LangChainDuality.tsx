import React, { useState } from 'react';
import { LANGCHAIN_DUALITY_COMPARISON } from '../data/architectureData';
import { BookOpen, GitMerge, AlertTriangle, CheckCircle, ArrowRight, Layers, Database, Sparkles, ExternalLink } from 'lucide-react';

export const LangChainDuality: React.FC = () => {
  const [activeHighlight, setActiveHighlight] = useState<'both' | 'product' | 'data'>('both');

  return (
    <div className="space-y-6">
      {/* Editorial Header */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-7 space-y-3 shadow-xs">
        <div className="flex items-center space-x-2">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded border border-blue-200 dark:border-blue-800">
            Negative Space Case Study
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">The Double-Diagram Paradox</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          The LangChain Duality: Two Complementary Voids
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-4xl">
          LangChain has published two famous architectural blueprints: their commercial <strong>Product Platform</strong> (LangGraph → LangSmith → Fleet) and their internal <strong>Agent-First Data Stack</strong> (dbt → Semantic Layer → Hex Guides).
          When you place them side-by-side, <strong>their product stack has an empty hole exactly where their data stack lives, and their data stack has an empty hole where their product stack lives.</strong>
        </p>
      </div>

      {/* Side-by-Side Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Diagram 1: LangChain Product Platform */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 space-y-6 shadow-xs flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                DIAGRAM A · COMMERCIAL PRODUCT
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                Agent Engineering Platform
              </span>
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {LANGCHAIN_DUALITY_COMPARISON.productStack.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                How LangChain sells to developers building custom AI applications.
              </p>
            </div>

            {/* Visual Stack Flow */}
            <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="grid grid-cols-1 gap-2.5 font-mono text-xs">
                {LANGCHAIN_DUALITY_COMPARISON.productStack.components.map((c, i) => (
                  <div key={c.name} className="p-3 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 flex items-start space-x-3">
                    <span className="w-5 h-5 rounded bg-blue-50 dark:bg-blue-950 flex items-center justify-center text-blue-700 dark:text-blue-400 font-bold text-[10px] shrink-0 mt-0.5 border border-blue-200 dark:border-blue-900">
                      0{i + 1}
                    </span>
                    <div className="space-y-0.5">
                      <div className="flex items-center space-x-2">
                        <strong className="text-slate-900 dark:text-slate-100">{c.name}</strong>
                        <span className="text-[10px] text-slate-400">({c.role})</span>
                      </div>
                      <p className="text-[11px] font-sans text-slate-600 dark:text-slate-400">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3.5 bg-blue-50/60 dark:bg-blue-950/40 rounded-lg text-xs space-y-1 border border-blue-200 dark:border-blue-800">
              <span className="font-bold text-blue-900 dark:text-blue-300 block">Core Thesis:</span>
              <p className="text-blue-950 dark:text-blue-200 text-[11px] leading-relaxed">
                {LANGCHAIN_DUALITY_COMPARISON.productStack.thesis}
              </p>
            </div>
          </div>

          <div className="p-4 bg-rose-50/80 dark:bg-rose-950/40 rounded-lg border border-rose-200 dark:border-rose-900 space-y-1.5">
            <span className="text-xs font-mono font-bold uppercase text-rose-700 dark:text-rose-400 flex items-center">
              <AlertTriangle className="w-3.5 h-3.5 mr-1.5" /> What Diagram A Ignores (The Blind Spot)
            </span>
            <p className="text-xs text-rose-900 dark:text-rose-200 font-mono leading-relaxed">
              {LANGCHAIN_DUALITY_COMPARISON.productStack.missingDimension}
            </p>
          </div>
        </div>

        {/* Diagram 2: LangChain Agent-First Data Stack */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 space-y-6 shadow-xs flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                DIAGRAM B · INTERNAL PRACTICE (Emily Hawkins)
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                Agent-First Data Stack
              </span>
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {LANGCHAIN_DUALITY_COMPARISON.dataStack.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                How LangChain’s own data team actually enables 40x self-serve across the company.
              </p>
            </div>

            {/* Visual Stack Flow */}
            <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="grid grid-cols-1 gap-2.5 font-mono text-xs">
                {LANGCHAIN_DUALITY_COMPARISON.dataStack.components.map((c, i) => (
                  <div key={c.name} className="p-3 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 flex items-start space-x-3">
                    <span className="w-5 h-5 rounded bg-purple-50 dark:bg-purple-950 flex items-center justify-center text-purple-700 dark:text-purple-400 font-bold text-[10px] shrink-0 mt-0.5 border border-purple-200 dark:border-purple-900">
                      0{i + 1}
                    </span>
                    <div className="space-y-0.5">
                      <div className="flex items-center space-x-2">
                        <strong className="text-slate-900 dark:text-slate-100">{c.name}</strong>
                        <span className="text-[10px] text-slate-400">({c.role})</span>
                      </div>
                      <p className="text-[11px] font-sans text-slate-600 dark:text-slate-400">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3.5 bg-purple-50/60 dark:bg-purple-950/40 rounded-lg text-xs space-y-1 border border-purple-200 dark:border-purple-800">
              <span className="font-bold text-purple-900 dark:text-purple-300 block">Core Thesis:</span>
              <p className="text-purple-950 dark:text-purple-200 text-[11px] leading-relaxed">
                {LANGCHAIN_DUALITY_COMPARISON.dataStack.thesis}
              </p>
            </div>
          </div>

          <div className="p-4 bg-rose-50/80 dark:bg-rose-950/40 rounded-lg border border-rose-200 dark:border-rose-900 space-y-1.5">
            <span className="text-xs font-mono font-bold uppercase text-rose-700 dark:text-rose-400 flex items-center">
              <AlertTriangle className="w-3.5 h-3.5 mr-1.5" /> What Diagram B Ignores (The Blind Spot)
            </span>
            <p className="text-xs text-rose-900 dark:text-rose-200 font-mono leading-relaxed">
              {LANGCHAIN_DUALITY_COMPARISON.dataStack.missingDimension}
            </p>
          </div>
        </div>
      </div>

      {/* The Synthesis: The Unclaimed Continent */}
      <div className="bg-slate-900 text-slate-100 rounded-xl p-6 sm:p-8 space-y-5 border border-slate-800 shadow-sm">
        <div className="flex items-center space-x-2 text-blue-400 text-xs font-mono font-bold uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>Architectural Synthesis</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
          Context Engineering: The Missing Continent Between Data & AI
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-4xl">
          The reason neither diagram draws both halves is that <strong>Data Teams and AI/ML Teams live in completely different worlds with distinct tooling cultures</strong>:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono pt-2">
          <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
            <span className="text-blue-400 font-bold block">The Data Team’s AI Reality:</span>
            <p className="font-sans text-slate-300 text-xs leading-relaxed">
              They don’t need LangGraph state machines to answer pipeline queries. They need strict column definitions in dbt, semantic metrics in Hex, and markdown guides explaining what "Active Paid Customer" means in Salesforce.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
            <span className="text-purple-400 font-bold block">The AI Platform Team’s Reality:</span>
            <p className="font-sans text-slate-300 text-xs leading-relaxed">
              They don’t care about Snowflake schemas. They care about latency, streaming tokens, prompt regression diffs in LangSmith, and tool calling timeouts.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-slate-800/80 border border-slate-700 text-xs text-blue-200">
          <strong>The Holy Grail Platform:</strong> Whoever bridges these two halves—linking the compiled dbt/semantic data manifest to the LangSmith/Braintrust telemetry trace—will own the enterprise agent manifest.
        </div>
      </div>
    </div>
  );
};
