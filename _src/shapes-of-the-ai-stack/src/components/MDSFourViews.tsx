import React, { useState } from 'react';
import { DATA_STACK_COMPONENTS, STACK_VIEWS } from '../data/architectureData';
import { Layers, Shield, Cpu, Users, Eye, Sparkles, Check, HelpCircle, AlertCircle } from 'lucide-react';

export const MDSFourViews: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<string | null>('xfm');
  const [activeViewTab, setActiveViewTab] = useState<'all' | 'functional' | 'control-plane' | 'substrate' | 'ownership'>('all');
  const [showInternalRead, setShowInternalRead] = useState(false);

  const selectedCompObj = DATA_STACK_COMPONENTS.find(c => c.id === activeComponent);

  return (
    <div className="space-y-6">
      {/* Editorial Header */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-7 space-y-3 shadow-xs">
        <div className="flex items-center space-x-2">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded border border-blue-200 dark:border-blue-800">
            Architectural Theory
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">Choosing the Axis is a Competitive Act</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          Four Views of the Same Stack
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-4xl">
          Architecture diagrams rarely disagree about what is in the boxes. They disagree about <strong>what the axes are</strong>. Below is an identical 12-component data stack projected through four competing lenses.
          Notice how transformation, metrics, and compute shift from neutral functional zones into gravitational control planes, unified vendor boundaries, and contentious org reporting silos.
        </p>
      </div>

      {/* Interactive Component Tracer Bar */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center">
            <Sparkles className="w-3.5 h-3.5 mr-1.5 text-blue-600 dark:text-blue-400" />
            Click a Component to Trace It Across All 4 Views:
          </span>
          {selectedCompObj && (
            <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold">
              Tracing: <strong>{selectedCompObj.name}</strong> ({selectedCompObj.typicalVendors.join(', ')})
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          {DATA_STACK_COMPONENTS.map((comp) => {
            const isSelected = activeComponent === comp.id;
            return (
              <button
                key={comp.id}
                id={`mds-comp-${comp.id}`}
                onClick={() => setActiveComponent(isSelected ? null : comp.id)}
                className={`text-xs px-3 py-1.5 rounded font-mono transition-all border ${
                  isSelected
                    ? 'bg-blue-600 border-blue-600 text-white font-bold shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-400'
                }`}
              >
                {comp.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* The 4 Views Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* VIEW 1: Functional Zone */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 space-y-4 shadow-xs flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">View 01</span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                Axis: Pipeline Stages
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              The Functional Zone Map
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              <strong>Question:</strong> What stages does data move through from raw ingestion to reporting?
            </p>

            {/* Diagram */}
            <div className="p-3.5 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 space-y-3 text-xs">
              <div className="border border-dashed border-slate-300 dark:border-slate-700 rounded p-2 bg-white/70 dark:bg-slate-900/60">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">Cross-Cutting Governance</span>
                <div className="flex gap-2">
                  <span className={`px-2 py-1 rounded border font-mono text-[11px] ${activeComponent === 'acl' ? 'bg-blue-600 text-white border-blue-600 font-bold' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'}`}>Access Control</span>
                  <span className={`px-2 py-1 rounded border font-mono text-[11px] ${activeComponent === 'obs' ? 'bg-blue-600 text-white border-blue-600 font-bold' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'}`}>Observability</span>
                </div>
              </div>

              <div className="grid grid-cols-5 gap-1.5 text-[10px] font-mono text-center">
                <div className="p-2 rounded bg-slate-200/60 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                  <span className="font-bold text-slate-500 block uppercase text-[9px]">LAND</span>
                  <div className={`p-1 rounded ${activeComponent === 'src' ? 'bg-blue-600 text-white font-bold' : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'}`}>Sources</div>
                  <div className={`p-1 rounded ${activeComponent === 'ing' ? 'bg-blue-600 text-white font-bold' : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'}`}>Ingest</div>
                </div>
                <div className="p-2 rounded bg-slate-200/60 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                  <span className="font-bold text-slate-500 block uppercase text-[9px]">STORE</span>
                  <div className={`p-1 rounded ${activeComponent === 'sto' ? 'bg-blue-600 text-white font-bold' : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'}`}>S3/GCS</div>
                  <div className={`p-1 rounded ${activeComponent === 'cat' ? 'bg-blue-600 text-white font-bold' : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'}`}>Catalog</div>
                </div>
                <div className="p-2 rounded bg-slate-200/60 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                  <span className="font-bold text-slate-500 block uppercase text-[9px]">MODEL</span>
                  <div className={`p-1 rounded ${activeComponent === 'xfm' ? 'bg-blue-600 text-white font-bold' : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'}`}>dbt SQL</div>
                  <div className={`p-1 rounded ${activeComponent === 'sem' ? 'bg-blue-600 text-white font-bold' : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'}`}>Metrics</div>
                  <div className={`p-1 rounded ${activeComponent === 'qua' ? 'bg-blue-600 text-white font-bold' : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'}`}>Tests</div>
                </div>
                <div className="p-2 rounded bg-slate-200/60 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                  <span className="font-bold text-slate-500 block uppercase text-[9px]">SERVE</span>
                  <div className={`p-1 rounded ${activeComponent === 'orc' ? 'bg-blue-600 text-white font-bold' : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'}`}>Airflow</div>
                  <div className={`p-1 rounded ${activeComponent === 'srv' ? 'bg-blue-600 text-white font-bold' : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'}`}>Engine</div>
                </div>
                <div className="p-2 rounded bg-slate-200/60 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                  <span className="font-bold text-slate-500 block uppercase text-[9px]">CONSUME</span>
                  <div className={`p-1 rounded ${activeComponent === 'bi' ? 'bg-blue-600 text-white font-bold' : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'}`}>Hex/BI</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg text-xs text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
            <strong>The Strategic Trap:</strong> A functional map contains <em>zero argument</em>. It is a political truce. Handing this to an enterprise buyer concedes the frame to whoever has the most checkmarks (the consolidated lakehouse).
          </div>
        </div>

        {/* VIEW 2: Control Plane & Artifact */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 space-y-4 shadow-xs flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">View 02</span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                Axis: Artifact Gravity
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              The Control Plane & Artifact View
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              <strong>Question:</strong> Who holds the compiled definition that all other tools must read?
            </p>

            {/* Diagram */}
            <div className="p-3.5 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 space-y-2.5 text-xs">
              <div className="p-3 bg-blue-50 dark:bg-blue-950/50 border-2 border-blue-500 rounded-lg text-center space-y-1">
                <span className="font-mono font-bold text-blue-700 dark:text-blue-300 text-xs">
                  ★ THE CONTROL PLANE (Git-Versioned Manifest)
                </span>
                <div className="flex flex-wrap justify-center gap-1.5 pt-1 text-[11px] font-mono">
                  <span className={`px-2 py-0.5 rounded border ${activeComponent === 'xfm' ? 'bg-blue-600 text-white font-bold' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'}`}>Transformation</span>
                  <span className={`px-2 py-0.5 rounded border ${activeComponent === 'sem' ? 'bg-blue-600 text-white font-bold' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'}`}>Semantic Metrics</span>
                  <span className={`px-2 py-0.5 rounded border ${activeComponent === 'qua' ? 'bg-blue-600 text-white font-bold' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'}`}>Quality Tests</span>
                  <span className={`px-2 py-0.5 rounded border ${activeComponent === 'obs' ? 'bg-blue-600 text-white font-bold' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'}`}>Lineage Graph</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                <div className="p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-400 block mb-1 font-bold uppercase">Rented Substrate:</span>
                  <div className="flex flex-wrap gap-1">
                    <span className={`px-1.5 py-0.5 rounded ${activeComponent === 'ing' ? 'bg-blue-600 text-white font-bold' : 'bg-slate-100 dark:bg-slate-800'}`}>Fivetran</span>
                    <span className={`px-1.5 py-0.5 rounded ${activeComponent === 'sto' ? 'bg-blue-600 text-white font-bold' : 'bg-slate-100 dark:bg-slate-800'}`}>S3</span>
                    <span className={`px-1.5 py-0.5 rounded ${activeComponent === 'srv' ? 'bg-blue-600 text-white font-bold' : 'bg-slate-100 dark:bg-slate-800'}`}>Snowflake</span>
                  </div>
                </div>
                <div className="p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-400 block mb-1 font-bold uppercase">Conforming Downstream:</span>
                  <div className="flex flex-wrap gap-1">
                    <span className={`px-1.5 py-0.5 rounded ${activeComponent === 'orc' ? 'bg-blue-600 text-white font-bold' : 'bg-slate-100 dark:bg-slate-800'}`}>Airflow</span>
                    <span className={`px-1.5 py-0.5 rounded ${activeComponent === 'bi' ? 'bg-blue-600 text-white font-bold' : 'bg-slate-100 dark:bg-slate-800'}`}>Hex</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 bg-blue-50/80 dark:bg-blue-950/40 rounded-lg text-xs text-blue-950 dark:text-blue-200 border border-blue-200 dark:border-blue-800">
            <strong>The dbt Thesis:</strong> dbt won the MDS because it owned the compiled <code className="font-mono bg-white dark:bg-slate-800 px-1 rounded text-blue-600 dark:text-blue-400">manifest.json</code>. Orchestrators, catalogs, and BI tools all conformed to dbt's artifact. Compute engines rotate; the artifact endures.
          </div>
        </div>

        {/* VIEW 3: Substrate / Consolidated */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 space-y-4 shadow-xs flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">View 03</span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                Axis: Platform Boundary
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              The Substrate / Consolidated View
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              <strong>Question:</strong> How many separate systems, bills, and security perimeters do you want to manage?
            </p>

            {/* Diagram */}
            <div className="p-3.5 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 space-y-2.5 text-xs">
              <div className="p-3 bg-emerald-50 dark:bg-emerald-950/50 border-2 border-emerald-500 rounded-lg space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-emerald-800 dark:text-emerald-300 text-xs">
                    ONE MANAGED PERIMETER (Databricks / Fabric / Snowflake)
                  </span>
                  <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400">1 Invoice</span>
                </div>
                <div className="grid grid-cols-4 gap-1 text-[10px] font-mono text-center">
                  {DATA_STACK_COMPONENTS.filter(c => c.id !== 'src').map(c => (
                    <div key={c.id} className={`p-1 rounded truncate ${activeComponent === c.id ? 'bg-emerald-600 text-white font-bold' : 'bg-white dark:bg-slate-800 border border-emerald-200 dark:border-emerald-800'}`}>
                      {c.name.split(' ')[0]}
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-1.5 rounded bg-slate-100 dark:bg-slate-900 text-[10px] font-mono text-slate-400 text-center border border-slate-200 dark:border-slate-800">
                Outside Boundary: Raw Third-Party Sources (Salesforce, Stripe)
              </div>
            </div>
          </div>

          <div className="p-3 bg-emerald-50/80 dark:bg-emerald-950/40 rounded-lg text-xs text-emerald-950 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800">
            <strong>The Substrate Pitch:</strong> Pluggability is an unpaid customer integration tax. Every seam is a place for an outage. One catalog, one governance engine, one vendor to call when things break.
          </div>
        </div>

        {/* VIEW 4: Ownership & Pagers */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 space-y-4 shadow-xs flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider">View 04</span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-rose-50 dark:bg-rose-950 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800">
                Axis: Reporting Lines
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              The Ownership & Pager View
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              <strong>Question:</strong> When an executive dashboard breaks at 2 AM, who gets paged?
            </p>

            {/* Diagram */}
            <div className="p-3.5 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 space-y-2.5 text-xs">
              <div className="grid grid-cols-3 gap-2 text-[10px] font-mono">
                <div className="p-2 rounded bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 space-y-1">
                  <span className="font-bold text-blue-800 dark:text-blue-300 block">Analytics Eng</span>
                  <div className={`p-1 rounded ${activeComponent === 'xfm' ? 'bg-blue-600 text-white font-bold' : 'bg-white dark:bg-slate-800'}`}>Transformation</div>
                  <div className={`p-1 rounded ${activeComponent === 'sem' ? 'bg-blue-600 text-white font-bold' : 'bg-white dark:bg-slate-800'}`}>Semantic Layer</div>
                  <div className={`p-1 rounded ${activeComponent === 'qua' ? 'bg-blue-600 text-white font-bold' : 'bg-white dark:bg-slate-800'}`}>Quality Tests</div>
                </div>

                <div className="p-2 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
                  <span className="font-bold text-slate-800 dark:text-slate-200 block">Platform Infra</span>
                  <div className={`p-1 rounded ${activeComponent === 'ing' ? 'bg-blue-600 text-white font-bold' : 'bg-white dark:bg-slate-800'}`}>Ingestion</div>
                  <div className={`p-1 rounded ${activeComponent === 'sto' ? 'bg-blue-600 text-white font-bold' : 'bg-white dark:bg-slate-800'}`}>Object Storage</div>
                  <div className={`p-1 rounded ${activeComponent === 'orc' ? 'bg-blue-600 text-white font-bold' : 'bg-white dark:bg-slate-800'}`}>Orchestration</div>
                  <div className={`p-1 rounded ${activeComponent === 'srv' ? 'bg-blue-600 text-white font-bold' : 'bg-white dark:bg-slate-800'}`}>Warehouse Eng</div>
                </div>

                <div className="p-2 rounded bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 space-y-1">
                  <span className="font-bold text-amber-800 dark:text-amber-300 block">InfoSec & IAM</span>
                  <div className={`p-1 rounded ${activeComponent === 'acl' ? 'bg-blue-600 text-white font-bold' : 'bg-white dark:bg-slate-800'}`}>Access Control</div>
                  <div className={`p-1 rounded ${activeComponent === 'obs' ? 'bg-blue-600 text-white font-bold' : 'bg-white dark:bg-slate-800'}`}>Audit Logs</div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-1 text-[11px] font-mono text-center pt-1 border-t border-slate-200 dark:border-slate-800">
                <div className="p-1 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800"><strong>3</strong> Teams</div>
                <div className="p-1 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800"><strong>3</strong> Pagers</div>
                <div className="p-1 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800"><strong>N</strong> Reviews</div>
                <div className="p-1 bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300 rounded font-bold border border-rose-200 dark:border-rose-900"><strong>0</strong> Seam Owners</div>
              </div>
            </div>
          </div>

          <div className="p-3 bg-rose-50/80 dark:bg-rose-950/40 rounded-lg text-xs text-rose-950 dark:text-rose-200 border border-rose-200 dark:border-rose-800">
            <strong>The Durable Moat:</strong> Vendors can consolidate products, but they cannot consolidate enterprise org charts. This view exposes the coordination friction that product bundling fails to solve.
          </div>
        </div>
      </div>

      {/* Deep Strategic Takeaway Card */}
      <div className="bg-slate-900 text-slate-100 rounded-xl p-6 sm:p-7 space-y-4 border border-slate-800 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold tracking-tight text-white flex items-center">
            <span className="text-blue-400 mr-2">✦</span> The Core Lesson for the Agent Stack
          </h2>
          <button
            onClick={() => setShowInternalRead(!showInternalRead)}
            className="text-xs font-mono font-semibold px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
          >
            {showInternalRead ? 'Hide Strategic Positioning' : 'Show Strategic Positioning'}
          </button>
        </div>

        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-4xl">
          The Modern Data Stack could be cleanly drawn because <strong>the functional zones were settled first</strong> (ELT + Semantic Layer + BI). The vendor battle was merely about who occupied which slot.
          <br /><br />
          In the AI stack, <strong>there are no agreed zones</strong>. Point solutions survive only where they own an artifact that a single cloud or model provider structurally cannot hold.
        </p>

        {showInternalRead && (
          <div className="pt-4 mt-4 border-t border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono text-slate-300">
            <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
              <span className="text-blue-400 font-bold block">The Trace Bet (LangSmith / Braintrust):</span>
              <p className="font-sans text-slate-400">
                Betting that a year of accumulated traces and eval regression test suites is non-portable gravity.
              </p>
            </div>
            <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
              <span className="text-emerald-400 font-bold block">The Tool & Policy Bet (Runlayer / Arcade):</span>
              <p className="font-sans text-slate-400">
                Betting that cryptographic agent identity, IAM delegation, and tool registries are cross-cloud governance artifacts.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
