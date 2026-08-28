import React, { useState } from 'react';
import { INVARIANTS, AI_SHAPES } from '../data/architectureData';
import { Cpu, Database, Wrench, Activity, CheckSquare, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';
import { InvariantStance } from '../types/architecture';

export const InvariantsDeepDive: React.FC = () => {
  const [activeInvariantId, setActiveInvariantId] = useState<string>('ctx');

  const activeInvariant = INVARIANTS.find(i => i.id === activeInvariantId) || INVARIANTS[0];

  const getIcon = (id: string) => {
    switch (id) {
      case 'inf': return Cpu;
      case 'ctx': return Database;
      case 'act': return Wrench;
      case 'rec': return Activity;
      case 'jud': return CheckSquare;
      default: return Sparkles;
    }
  };

  const getStanceBadge = (stance: InvariantStance, label: string) => {
    switch (stance) {
      case 'first-class':
        return <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">★ Core Moat</span>;
      case 'bundled':
        return <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-800">⚯ Bundled</span>;
      case 'commoditized':
        return <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-800">⇄ Pluggable</span>;
      case 'outsourced':
        return <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-800">↳ Outsourced</span>;
      case 'absent':
        return <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-rose-50 dark:bg-rose-950 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-800">✕ Absent</span>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Editorial Header */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-7 space-y-3 shadow-xs">
        <div className="flex items-center space-x-2">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded border border-blue-200 dark:border-blue-800">
            Foundational Mechanics
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">5 Universal Capabilities</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          The 5 Invariants of the Agent Stack
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-4xl">
          For an autonomous agent to execute real work in an enterprise, five distinct technical capabilities must occur. Every architecture agrees on their necessity, but violently disagrees on where they should live.
        </p>
      </div>

      {/* Invariant Selectors */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
        {INVARIANTS.map((inv) => {
          const Icon = getIcon(inv.id);
          const isSelected = inv.id === activeInvariantId;
          return (
            <button
              key={inv.id}
              id={`inv-pill-${inv.id}`}
              onClick={() => setActiveInvariantId(inv.id)}
              className={`p-4 rounded-lg text-left border transition-all flex flex-col justify-between space-y-3 ${
                isSelected
                  ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-blue-400'
              }`}
            >
              <div className="flex items-center justify-between">
                <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-blue-100' : 'text-slate-400'}`}>0{inv.name.slice(0, 1)}</span>
              </div>
              <div>
                <span className={`font-semibold text-xs block ${isSelected ? 'text-white' : 'text-slate-900 dark:text-slate-100'}`}>
                  {inv.name.split('. ')[1]}
                </span>
                <p className={`text-[11px] mt-0.5 line-clamp-2 ${isSelected ? 'text-blue-100' : 'text-slate-500'}`}>
                  {inv.shortDefinition}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Detailed Invariant Profile */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              INVARIANT ANALYSIS · {activeInvariant.name}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
              {activeInvariant.name.split('. ')[1]}
            </h2>
          </div>
          <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
            <strong>Real-World Analogy:</strong> {activeInvariant.analogy}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Technical Scope</span>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs sm:text-sm">
              {activeInvariant.deepDescription}
            </p>
          </div>

          <div className="space-y-2 bg-blue-50/50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200 dark:border-blue-900">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">Why It's Contested</span>
            <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
              {activeInvariant.whyContested}
            </p>
          </div>
        </div>

        {/* How All 6 Shapes Map to this Invariant */}
        <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
            Cross-Paradigm Distribution on {activeInvariant.name.split('. ')[1]}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
            {AI_SHAPES.map((shape) => {
              const detail = shape.invariants[activeInvariant.id as 'inf' | 'ctx' | 'act' | 'rec' | 'jud'];
              const isAbsent = detail.stance === 'absent';
              return (
                <div
                  key={shape.id}
                  className={`p-4 rounded-lg border space-y-2 ${
                    isAbsent
                      ? 'bg-rose-50/40 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900'
                      : 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-900 dark:text-slate-100 text-xs">{shape.name}</span>
                    {getStanceBadge(detail.stance, detail.stanceLabel)}
                  </div>
                  <p className={`text-[11px] leading-relaxed ${isAbsent ? 'text-rose-700 dark:text-rose-300 italic font-mono' : 'text-slate-600 dark:text-slate-400'}`}>
                    {detail.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
