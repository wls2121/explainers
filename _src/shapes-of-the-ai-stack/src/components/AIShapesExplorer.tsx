import React, { useState } from 'react';
import { AI_SHAPES, INVARIANTS } from '../data/architectureData';
import { AIShape, InvariantStance } from '../types/architecture';
import { Box, Layers, AlertCircle, CheckCircle2, XCircle, Shield, Sparkles, Terminal, Code2, Users, Cpu, FileText, ChevronRight } from 'lucide-react';

interface AISapesExplorerProps {
  initialShapeId?: string;
}

export const AIShapesExplorer: React.FC<AISapesExplorerProps> = ({ initialShapeId = 'shape-1' }) => {
  const [selectedShapeId, setSelectedShapeId] = useState<string>(initialShapeId);

  const currentShape = AI_SHAPES.find(s => s.id === selectedShapeId) || AI_SHAPES[0];

  const getStanceColor = (stance: InvariantStance) => {
    switch (stance) {
      case 'first-class':
        return 'text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-800';
      case 'bundled':
        return 'text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 border-blue-300 dark:border-blue-800';
      case 'commoditized':
        return 'text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 border-amber-300 dark:border-amber-800';
      case 'outsourced':
        return 'text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/60 border-purple-300 dark:border-purple-800';
      case 'absent':
        return 'text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/60 border-rose-300 dark:border-rose-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Editorial Header */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-7 space-y-3 shadow-xs">
        <div className="flex items-center space-x-2">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded border border-blue-200 dark:border-blue-800">
            Deep Architectural Profiles
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">6 Competing Worldviews</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          The 6 Shapes of the AI Stack
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-4xl">
          Each shape represents an entire industry sector making a distinct bet on what constitutes the core moat, the system of record, and the runtime. Select any paradigm below to inspect its invariants, its negative space, and its failure modes.
        </p>
      </div>

      {/* Shape Selector Ribbon */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
        {AI_SHAPES.map((shape, idx) => {
          const isSelected = shape.id === selectedShapeId;
          return (
            <button
              key={shape.id}
              id={`shape-tab-${shape.id}`}
              onClick={() => setSelectedShapeId(shape.id)}
              className={`p-3.5 rounded-lg text-left transition-all border flex flex-col justify-between ${
                isSelected
                  ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-blue-400'
              }`}
            >
              <div>
                <span className={`text-[10px] font-mono font-bold block ${isSelected ? 'text-blue-100' : 'text-slate-400'}`}>SHAPE 0{idx + 1}</span>
                <span className={`font-semibold text-xs line-clamp-1 mt-0.5 ${isSelected ? 'text-white' : 'text-slate-900 dark:text-slate-100'}`}>
                  {shape.name}
                </span>
              </div>
              <span className={`text-[10px] font-mono mt-2 truncate block ${isSelected ? 'text-blue-200' : 'text-slate-500'}`}>
                {shape.exemplars[0]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Shape Detailed Blueprint */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-8 space-y-6 shadow-xs">
        {/* Shape Hero & Thesis */}
        <div className="space-y-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 px-3 py-1 rounded border border-blue-200 dark:border-blue-800">
              {currentShape.paradigm}
            </span>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              Key Vendors / Systems: <strong className="text-slate-800 dark:text-slate-200">{currentShape.exemplars.join(', ')}</strong>
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              {currentShape.name}
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-1">
              {currentShape.tagline}
            </p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800">
            <blockquote className="text-sm font-serif italic text-slate-800 dark:text-slate-200">
              {currentShape.heroQuote}
            </blockquote>
          </div>
        </div>

        {/* The 5 Invariants Breakdown for This Shape */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center">
              <Layers className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
              How This Shape Treats the 5 Invariants
            </h3>
            <span className="text-xs font-mono text-slate-400">First-Class vs Absent</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {INVARIANTS.map((inv) => {
              const detail = currentShape.invariants[inv.id];
              const isAbsent = detail.stance === 'absent';
              return (
                <div
                  key={inv.id}
                  className={`p-4 rounded-lg border flex flex-col justify-between space-y-3 ${
                    isAbsent
                      ? 'bg-rose-50/50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900'
                      : 'bg-slate-50 dark:bg-slate-950/60 border-slate-200 dark:border-slate-800'
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-slate-600 dark:text-slate-400">{inv.name.split('. ')[1]}</span>
                      <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded border font-semibold ${getStanceColor(detail.stance)}`}>
                        {detail.stanceLabel}
                      </span>
                    </div>
                    <p className={`text-xs leading-relaxed ${isAbsent ? 'text-rose-700 dark:text-rose-300 font-mono italic' : 'text-slate-700 dark:text-slate-300'}`}>
                      {detail.detail}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 leading-snug">
                    <strong className="text-slate-700 dark:text-slate-400 block mb-0.5 font-sans">Strategic Angle:</strong>
                    {detail.strategicImplication}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Runtime Stance, Negative Space, and Produced Artifact */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 pt-2">
          <div className="p-4 rounded-lg bg-blue-50/50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-blue-700 dark:text-blue-300 flex items-center">
              <Cpu className="w-3.5 h-3.5 mr-1.5" /> Runtime & Execution Stance
            </span>
            <p className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed font-sans">
              {currentShape.runtimeStance}
            </p>
          </div>

          <div className="p-4 rounded-lg bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900 space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-rose-700 dark:text-rose-300 flex items-center">
              <AlertCircle className="w-3.5 h-3.5 mr-1.5" /> The Critical Negative Space
            </span>
            <p className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed font-sans">
              {currentShape.missingHole}
            </p>
          </div>

          <div className="p-4 rounded-lg bg-amber-50/50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-amber-800 dark:text-amber-300 flex items-center">
              <FileText className="w-3.5 h-3.5 mr-1.5" /> The Compiled Artifact (Manifest)
            </span>
            <p className="text-xs font-mono text-slate-800 dark:text-slate-200 leading-relaxed">
              {currentShape.artifactProduced}
            </p>
          </div>
        </div>

        {/* Win vs Fail Dynamics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-emerald-700 dark:text-emerald-400 flex items-center">
              <CheckCircle2 className="w-4 h-4 mr-1.5" /> Why This Paradigm Wins
            </span>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {currentShape.whyTheyWin}
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-rose-700 dark:text-rose-400 flex items-center">
              <XCircle className="w-4 h-4 mr-1.5" /> Where This Paradigm Fails or Gets Squeezed
            </span>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {currentShape.whyTheyFail}
            </p>
          </div>
        </div>

        {/* Org Chart Ownership Profile */}
        <div className="p-5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-3">
          <span className="text-xs font-mono font-bold uppercase text-slate-500 dark:text-slate-400 flex items-center">
            <Users className="w-4 h-4 mr-1.5 text-slate-600 dark:text-slate-400" />
            Org Chart Ownership Matrix Under This Architecture
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            <div className="p-3 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800">
              <span className="font-bold text-slate-900 dark:text-slate-100 block mb-1">ML / AI Eng:</span>
              <p className="text-slate-600 dark:text-slate-400 text-[11px]">{currentShape.ownershipProfile.mlEng}</p>
            </div>
            <div className="p-3 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800">
              <span className="font-bold text-slate-900 dark:text-slate-100 block mb-1">Platform Infra:</span>
              <p className="text-slate-600 dark:text-slate-400 text-[11px]">{currentShape.ownershipProfile.platform}</p>
            </div>
            <div className="p-3 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800">
              <span className="font-bold text-slate-900 dark:text-slate-100 block mb-1">InfoSec / IAM:</span>
              <p className="text-slate-600 dark:text-slate-400 text-[11px]">{currentShape.ownershipProfile.security}</p>
            </div>
            <div className="p-3 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800">
              <span className="font-bold text-slate-900 dark:text-slate-100 block mb-1">Business / Ops:</span>
              <p className="text-slate-600 dark:text-slate-400 text-[11px]">{currentShape.ownershipProfile.bizDev}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
