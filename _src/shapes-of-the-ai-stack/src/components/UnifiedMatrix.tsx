import React, { useState } from 'react';
import { AI_SHAPES, INVARIANTS } from '../data/architectureData';
import { InvariantStance, AIShape, Invariant } from '../types/architecture';
import { Info, CheckCircle2, AlertTriangle, Eye, ShieldAlert, Sparkles, Filter, ChevronRight, HelpCircle, ArrowRightLeft, Activity, Cpu, Layers } from 'lucide-react';

interface UnifiedMatrixProps {
  onSelectShape: (shapeId: string) => void;
}

export const UnifiedMatrix: React.FC<UnifiedMatrixProps> = ({ onSelectShape }) => {
  const [selectedInvariant, setSelectedInvariant] = useState<string | null>(null);
  const [selectedCell, setSelectedCell] = useState<{
    shapeId: string;
    invariantId: 'inf' | 'ctx' | 'act' | 'rec' | 'jud';
  } | null>(null);
  const [compareShapes, setCompareShapes] = useState<string[]>(['shape-1', 'shape-4']);

  const getStanceBadge = (stance: InvariantStance, label: string) => {
    switch (stance) {
      case 'first-class':
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800/80">
            ★ Core Moat
          </span>
        );
      case 'bundled':
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-blue-100 dark:bg-blue-950/70 text-blue-800 dark:text-blue-300 border border-blue-300 dark:border-blue-800/80">
            ⚯ Bundled
          </span>
        );
      case 'commoditized':
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800/80">
            ⇄ Pluggable
          </span>
        );
      case 'outsourced':
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-purple-100 dark:bg-purple-950/70 text-purple-800 dark:text-purple-300 border border-purple-300 dark:border-purple-800/80">
            ↳ Outsourced
          </span>
        );
      case 'absent':
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-rose-100 dark:bg-rose-950/70 text-rose-800 dark:text-rose-300 border border-rose-300 dark:border-rose-800/80">
            ✕ Absent
          </span>
        );
      default:
        return null;
    }
  };

  const activeShape = selectedCell ? AI_SHAPES.find(s => s.id === selectedCell.shapeId) : null;
  const activeInvariant = selectedCell ? INVARIANTS.find(i => i.id === selectedCell.invariantId) : null;
  const activeDetail = activeShape && selectedCell ? activeShape.invariants[selectedCell.invariantId] : null;

  return (
    <div className="space-y-6">
      {/* Top Telemetry Metric Blocks (Professional Polish Pattern) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Semantic Invariant Coverage</p>
          <div className="flex items-baseline gap-2 mt-1.5">
            <span className="text-2xl font-bold text-slate-900 dark:text-white">5 Invariants</span>
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">100% Taxonomized</span>
          </div>
          <div className="mt-3.5 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 dark:bg-blue-500 w-[100%]"></div>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 font-mono">Inference • Context • Action • Record • Judgment</p>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Contested Agent Runtime</p>
          <div className="flex items-baseline gap-2 mt-1.5">
            <span className="text-2xl font-bold text-slate-900 dark:text-white">66.7% Refusal</span>
            <span className="text-xs font-semibold text-amber-600 dark:text-amber-400">4 of 6 Deny Runtime</span>
          </div>
          <div className="mt-3.5 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-amber-500 w-[66.7%]"></div>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 font-mono">Providers, Temporal, Gateways, Harnesses</p>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Competitive Paradigms</p>
          <div className="flex items-baseline gap-2 mt-1.5">
            <span className="text-2xl font-bold text-slate-900 dark:text-white">6 Stack Shapes</span>
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">Active Projection</span>
          </div>
          <div className="mt-3.5 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 w-[85%]"></div>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 font-mono">LangChain, OpenAI, Temporal, dbt, MCP, Cursor</p>
        </div>
      </div>

      {/* Header & Strategic Thesis */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-7 shadow-xs">
        <div className="max-w-4xl space-y-2.5">
          <div className="flex items-center space-x-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded border border-blue-200 dark:border-blue-800">
              Cross-Axis Projection Ledger
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">6 Paradigms × 5 Invariants</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            The AI Stack Semantic Matrix
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            In the Modern Data Stack (MDS), everyone agreed on the zones (ELT → Semantic Layer → BI). In the Agent Stack,
            <strong> products compete to define what the layers even are</strong>. Every paradigm below acknowledges 5 technical invariants must happen, but each declares a different invariant as its core moat while ignoring or denying others.
          </p>
        </div>

        {/* Quick Invariant Filter Bar */}
        <div className="mt-5 pt-5 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center mr-2 uppercase tracking-wide">
              <Filter className="w-3.5 h-3.5 mr-1 text-slate-400" /> Filter Axis:
            </span>
            <button
              id="filter-inv-all"
              onClick={() => setSelectedInvariant(null)}
              className={`text-xs px-3 py-1.5 rounded font-mono transition-all ${
                selectedInvariant === null
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              All Invariants (Full Matrix)
            </button>
            {INVARIANTS.map((inv) => {
              const isSelected = selectedInvariant === inv.id;
              return (
                <button
                  key={inv.id}
                  id={`filter-inv-${inv.id}`}
                  onClick={() => setSelectedInvariant(isSelected ? null : inv.id)}
                  className={`text-xs px-3 py-1.5 rounded font-medium transition-all flex items-center space-x-1.5 ${
                    isSelected
                      ? 'bg-blue-600 text-white font-semibold shadow-xs'
                      : 'bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-400'
                  }`}
                >
                  <span className="font-mono text-[11px] opacity-75">{inv.id.toUpperCase()}:</span>
                  <span>{inv.name.split('. ')[1]}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* The Unified Matrix Table */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xs overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50/70 dark:bg-slate-900">
          <div>
            <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              Architectural Invariant Stance Matrix
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Click any cell to inspect its strategic rationale, or click a shape header for full profile.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono">
            <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Legend:</span>
            <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 font-medium">★ Core Moat</span>
            <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-950/70 dark:text-blue-300 font-medium">⚯ Bundled</span>
            <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300 font-medium">⇄ Pluggable</span>
            <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-rose-100 text-rose-800 dark:bg-rose-950/70 dark:text-rose-300 font-medium">✕ Absent</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead className="bg-slate-50 dark:bg-slate-900 text-[10px] uppercase text-slate-400 font-bold tracking-widest border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="py-3 px-5 w-[190px] font-bold sticky left-0 bg-slate-50 dark:bg-slate-900 z-10">
                  INVARIANT
                </th>
                {AI_SHAPES.map((shape, idx) => (
                  <th key={shape.id} className="py-3 px-3.5 min-w-[170px] align-top font-normal">
                    <div className="flex flex-col space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400">#SHAPE-0{idx + 1}</span>
                        <button
                          onClick={() => onSelectShape(shape.id)}
                          className="text-[10px] text-blue-600 dark:text-blue-400 hover:underline flex items-center font-sans font-semibold"
                        >
                          Deep Dive <ChevronRight className="w-2.5 h-2.5 ml-0.5" />
                        </button>
                      </div>
                      <span className="font-sans font-bold text-slate-900 dark:text-white text-xs line-clamp-1">
                        {shape.name}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono truncate">
                        {shape.exemplars.slice(0, 2).join(', ')}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
              {INVARIANTS.filter(inv => !selectedInvariant || inv.id === selectedInvariant).map((inv) => (
                <tr key={inv.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                  <td className="py-4 px-5 font-medium sticky left-0 bg-white dark:bg-slate-900 z-10 border-r border-slate-200 dark:border-slate-800">
                    <div className="space-y-1">
                      <span className="font-bold text-slate-900 dark:text-white text-xs block">
                        {inv.name}
                      </span>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 font-sans line-clamp-2 leading-relaxed">
                        {inv.shortDefinition}
                      </p>
                    </div>
                  </td>
                  {AI_SHAPES.map((shape) => {
                    const detail = shape.invariants[inv.id];
                    const isSelected = selectedCell?.shapeId === shape.id && selectedCell?.invariantId === inv.id;
                    const isAbsent = detail.stance === 'absent';
                    const isFirstClass = detail.stance === 'first-class';

                    return (
                      <td
                        key={shape.id}
                        id={`matrix-cell-${shape.id}-${inv.id}`}
                        onClick={() => setSelectedCell({ shapeId: shape.id, invariantId: inv.id })}
                        className={`p-3.5 align-top cursor-pointer transition-all border-r border-slate-100 dark:border-slate-800 last:border-r-0 ${
                          isSelected
                            ? 'bg-blue-50 dark:bg-blue-950/60 ring-2 ring-blue-500 ring-inset'
                            : isAbsent
                            ? 'bg-rose-50/30 dark:bg-rose-950/10 hover:bg-rose-50/60 dark:hover:bg-rose-950/30'
                            : isFirstClass
                            ? 'bg-emerald-50/30 dark:bg-emerald-950/10 hover:bg-emerald-50/50'
                            : 'hover:bg-slate-100/70 dark:hover:bg-slate-800/50'
                        }`}
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            {getStanceBadge(detail.stance, detail.stanceLabel)}
                          </div>
                          <p className={`text-[11px] leading-snug ${
                            isAbsent
                              ? 'text-rose-700 dark:text-rose-400 italic font-mono'
                              : 'text-slate-700 dark:text-slate-300'
                          }`}>
                            {detail.detail}
                          </p>
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Active Cell Inspector Drawer / Modal */}
      {selectedCell && activeShape && activeInvariant && activeDetail && (
        <div className="bg-white dark:bg-slate-900 border-2 border-blue-500 dark:border-blue-500 rounded-xl p-6 shadow-sm transition-all">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-slate-800 gap-3">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-700 dark:text-blue-400 font-bold font-mono text-xs">
                {activeInvariant.id.toUpperCase()}
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {activeShape.name} <span className="text-slate-400 font-normal">on</span> {activeInvariant.name}
                  </h3>
                  {getStanceBadge(activeDetail.stance, activeDetail.stanceLabel)}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  Exemplars: {activeShape.exemplars.join(', ')}
                </p>
              </div>
            </div>
            <button
              onClick={() => setSelectedCell(null)}
              className="text-xs font-semibold px-3 py-1 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 self-start sm:self-auto border border-slate-200 dark:border-slate-700"
            >
              Close Inspector ✕
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-sm">
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">Architectural Stance</span>
              <p className="text-slate-800 dark:text-slate-200 font-medium leading-relaxed text-xs">
                {activeDetail.detail}
              </p>
            </div>

            <div className="space-y-1.5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Strategic Implication</span>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-xs">
                {activeDetail.strategicImplication}
              </p>
            </div>

            <div className="space-y-1.5 bg-slate-50 dark:bg-slate-950 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">The Blind Spot / Negative Space</span>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {activeShape.missingHole}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* The Negative Space & Runtime Contestation Insight Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-slate-900 text-slate-100 rounded-xl p-6 sm:p-7 space-y-3.5 border border-slate-800 shadow-sm">
          <div className="flex items-center space-x-2 text-rose-400 text-xs font-mono font-bold uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4" />
            <span>The Negative Space Rule</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold tracking-tight text-white">
            No Paradigm Covers All 5 Invariants
          </h3>
          <p className="text-slate-300 text-xs leading-relaxed">
            The best any shape manages is four. And the two shapes that reach four—the <strong>Agent Engineering Platform</strong> and the <strong>Local Harness</strong>—leave out completely opposite halves:
          </p>
          <ul className="space-y-2 text-xs text-slate-300 font-mono">
            <li className="flex items-start space-x-2">
              <span className="text-blue-400">→</span>
              <span><strong>LangGraph / LangSmith:</strong> Has no context layer (no dbt / semantic understanding) and no human in real-time.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-amber-400">→</span>
              <span><strong>Claude Code / Cursor:</strong> Has direct repo context & human judgment, but zero centralized server trace record.</span>
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-7 space-y-3.5 shadow-sm">
          <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>The Orchestration Paradox</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white">
            Why Runtime is the Most Contested Box
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
            4 of the 6 shapes explicitly <strong>refuse to buy a dedicated agent runtime</strong>:
          </p>
          <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
            <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
              <span className="font-bold text-slate-900 dark:text-white">Providers:</span> Runtime is in the API.
            </div>
            <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
              <span className="font-bold text-slate-900 dark:text-white">Temporal:</span> Workflows solved this in 2015.
            </div>
            <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
              <span className="font-bold text-slate-900 dark:text-white">Gateways:</span> Loop is trivial; auth is hard.
            </div>
            <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
              <span className="font-bold text-slate-900 dark:text-white">Harnesses:</span> Developer is the loop.
            </div>
          </div>
        </div>
      </div>

      {/* Side-by-Side Dual Shape Comparator */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 space-y-5 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            <ArrowRightLeft className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Side-by-Side Head-to-Head Comparison
            </h3>
          </div>
          <div className="flex items-center space-x-2 text-xs">
            <select
              value={compareShapes[0]}
              onChange={(e) => setCompareShapes([e.target.value, compareShapes[1]])}
              className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded px-2.5 py-1.5 font-medium text-slate-800 dark:text-slate-200 text-xs"
            >
              {AI_SHAPES.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
            </select>
            <span className="text-slate-400 font-mono font-bold">VS</span>
            <select
              value={compareShapes[1]}
              onChange={(e) => setCompareShapes([compareShapes[0], e.target.value])}
              className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded px-2.5 py-1.5 font-medium text-slate-800 dark:text-slate-200 text-xs"
            >
              {AI_SHAPES.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
            </select>
          </div>
        </div>

        {(() => {
          const s1 = AI_SHAPES.find(s => s.id === compareShapes[0])!;
          const s2 = AI_SHAPES.find(s => s.id === compareShapes[1])!;
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-50 dark:bg-slate-800/40 p-5 rounded-lg border border-slate-200 dark:border-slate-700/80 space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">{s1.paradigm}</span>
                    <button onClick={() => onSelectShape(s1.id)} className="text-[11px] text-slate-500 hover:underline">View shape →</button>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">{s1.name}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-1 italic">{s1.heroQuote}</p>
                </div>
                <div className="space-y-2 pt-3 border-t border-slate-200 dark:border-slate-700">
                  <span className="font-mono text-[10px] uppercase font-bold text-slate-400 tracking-wider">Invariants Breakdown:</span>
                  {INVARIANTS.map(i => (
                    <div key={i.id} className="flex items-start justify-between py-1 border-b border-slate-200/50 dark:border-slate-700/50 last:border-b-0">
                      <span className="font-mono text-slate-600 dark:text-slate-400">{i.name.split('. ')[1]}:</span>
                      <span className="text-right pl-2 font-medium">{getStanceBadge(s1.invariants[i.id].stance, s1.invariants[i.id].stanceLabel)}</span>
                    </div>
                  ))}
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700 text-xs space-y-1">
                  <span className="font-bold text-slate-700 dark:text-slate-300">Artifact Created:</span>
                  <p className="font-mono text-[11px] text-slate-600 dark:text-slate-400">{s1.artifactProduced}</p>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/40 p-5 rounded-lg border border-slate-200 dark:border-slate-700/80 space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">{s2.paradigm}</span>
                    <button onClick={() => onSelectShape(s2.id)} className="text-[11px] text-slate-500 hover:underline">View shape →</button>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">{s2.name}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-1 italic">{s2.heroQuote}</p>
                </div>
                <div className="space-y-2 pt-3 border-t border-slate-200 dark:border-slate-700">
                  <span className="font-mono text-[10px] uppercase font-bold text-slate-400 tracking-wider">Invariants Breakdown:</span>
                  {INVARIANTS.map(i => (
                    <div key={i.id} className="flex items-start justify-between py-1 border-b border-slate-200/50 dark:border-slate-700/50 last:border-b-0">
                      <span className="font-mono text-slate-600 dark:text-slate-400">{i.name.split('. ')[1]}:</span>
                      <span className="text-right pl-2 font-medium">{getStanceBadge(s2.invariants[i.id].stance, s2.invariants[i.id].stanceLabel)}</span>
                    </div>
                  ))}
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700 text-xs space-y-1">
                  <span className="font-bold text-slate-700 dark:text-slate-300">Artifact Created:</span>
                  <p className="font-mono text-[11px] text-slate-600 dark:text-slate-400">{s2.artifactProduced}</p>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
};
