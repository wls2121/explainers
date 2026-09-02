import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { UnifiedMatrix } from './components/UnifiedMatrix';
import { MDSFourViews } from './components/MDSFourViews';
import { AIShapesExplorer } from './components/AIShapesExplorer';
import { InvariantsDeepDive } from './components/InvariantsDeepDive';
import { LangChainDuality } from './components/LangChainDuality';
import { StackArchitectSandbox } from './components/StackArchitectSandbox';
import { Layers, Sparkles, BookOpen, GitBranch, Terminal, Shield, ArrowUpRight } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('matrix');
  const [selectedShapeForDeepDive, setSelectedShapeForDeepDive] = useState<string>('shape-1');
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleSelectShape = (shapeId: string) => {
    setSelectedShapeForDeepDive(shapeId);
    setActiveTab('shapes');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'} transition-colors font-sans selection:bg-blue-500/20 selection:text-blue-900 dark:selection:text-blue-200`}>
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {activeTab === 'matrix' && (
          <UnifiedMatrix onSelectShape={handleSelectShape} />
        )}

        {activeTab === 'shapes' && (
          <AIShapesExplorer initialShapeId={selectedShapeForDeepDive} />
        )}

        {activeTab === 'invariants' && (
          <InvariantsDeepDive />
        )}

        {activeTab === 'mds-views' && (
          <MDSFourViews />
        )}

        {activeTab === 'langchain-duality' && (
          <LangChainDuality />
        )}

        {activeTab === 'sandbox' && (
          <StackArchitectSandbox />
        )}
      </main>

      {/* Persistent Architectural Summary Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm mt-20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
            <div className="flex items-center space-x-3">
              <div className="w-7 h-7 rounded bg-blue-600 flex items-center justify-center text-white font-mono text-xs font-bold shadow-xs">
                ∑
              </div>
              <span className="font-semibold text-sm text-slate-900 dark:text-slate-100">
                Shapes of the AI Stack
              </span>
            </div>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span>MDS (ELT + Semantics + BI)</span>
              <span>•</span>
              <span>5 Universal Invariants</span>
              <span>•</span>
              <span>The Negative Space Hypothesis</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600 dark:text-slate-400">
            <div>
              <strong className="text-slate-800 dark:text-slate-200 block mb-1">1. The Manifest Artifact:</strong>
              Just as dbt won by owning <code className="font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-blue-600 dark:text-blue-400">manifest.json</code>, the winner of the AI stack must own an artifact (traces, identity policy, or semantic models) that downstream tools cannot cheaply recreate.
            </div>
            <div>
              <strong className="text-slate-800 dark:text-slate-200 block mb-1">2. Runtime is Contested:</strong>
              4 of 6 paradigms decline to buy a dedicated agent orchestrator. The genuinely settled layer is inference, which is priced like electricity rather than owned as a durable moat.
            </div>
            <div>
              <strong className="text-slate-800 dark:text-slate-200 block mb-1">3. The Context Void:</strong>
              Modern AI frameworks have deeply instrumented telemetry but remain blind to business metrics. Bridging data semantics with execution telemetry remains the highest-value frontier.
            </div>
          </div>

          <p className="text-xs italic text-slate-500 dark:text-slate-400 pt-2">
            Living draft. The six shapes are a snapshot of a fast-moving space — vendors reposition, categories merge, and the scoring here will change with them.
          </p>
        </div>
      </footer>
    </div>
  );
}
