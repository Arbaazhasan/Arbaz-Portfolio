import React, { useState, useEffect } from 'react';
import {
  X,
  Github,
  ExternalLink,
  Radio,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Lightbulb,
} from 'lucide-react';
import { Project } from '../types';

interface ProjectCaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({
  project,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'workflow' | 'decisions' | 'challenges'>('architecture');

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/75 dark:bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl rounded-3xl glass-panel bg-white/95 dark:bg-slate-950/95 border border-black/10 dark:border-white/15 shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-black/5 dark:border-white/10 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border border-indigo-500/30">
                ENGINEERING CASE STUDY
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                {project.id === 'distributed-media-platform' ? 'Microservices & Queues' : 'MERN & E-Commerce'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              {project.title}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2.5 rounded-full text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 sm:px-8 border-b border-black/5 dark:border-white/10 flex items-center gap-2 overflow-x-auto py-3 bg-slate-50/50 dark:bg-slate-900/30">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'architecture'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25'
                : 'text-slate-600 dark:text-slate-400 hover:bg-black/5 dark:hover:bg-white/5'
            }`}
          >
            System Architecture
          </button>
          <button
            onClick={() => setActiveTab('workflow')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'workflow'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25'
                : 'text-slate-600 dark:text-slate-400 hover:bg-black/5 dark:hover:bg-white/5'
            }`}
          >
            Execution Workflow
          </button>
          <button
            onClick={() => setActiveTab('decisions')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'decisions'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25'
                : 'text-slate-600 dark:text-slate-400 hover:bg-black/5 dark:hover:bg-white/5'
            }`}
          >
            Technology Decisions
          </button>
          <button
            onClick={() => setActiveTab('challenges')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'challenges'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25'
                : 'text-slate-600 dark:text-slate-400 hover:bg-black/5 dark:hover:bg-white/5'
            }`}
          >
            Challenges & Solutions
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-8">
          {/* Overview Callout Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" />
                Problem Statement
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {caseStudy.problemStatement}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-indigo-500/5 dark:bg-indigo-500/10 border border-indigo-500/20">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2 flex items-center gap-1.5">
                <Lightbulb className="w-3.5 h-3.5" />
                Solution Overview
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {caseStudy.solutionOverview}
              </p>
            </div>
          </div>

          {/* TAB 1: SYSTEM ARCHITECTURE */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Interactive Architectural Flow
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {caseStudy.architectureDescription}
                </p>
              </div>

              {/* Visual Node Pipeline */}
              <div className="p-6 rounded-2xl bg-slate-100/70 dark:bg-slate-900/60 border border-black/5 dark:border-white/10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {caseStudy.architectureNodes.map((node, index) => (
                    <div
                      key={node.id}
                      className="p-4 rounded-xl bg-white dark:bg-slate-950 border border-black/5 dark:border-white/10 shadow-sm relative group hover:border-indigo-500/40 transition-all"
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="w-6 h-6 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs font-mono font-bold">
                          {index + 1}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-slate-600 dark:text-slate-400">
                          {node.role}
                        </span>
                      </div>
                      <h5 className="font-bold text-sm text-slate-900 dark:text-white">
                        {node.name}
                      </h5>
                      <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 block mt-0.5">
                        {node.tech}
                      </span>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                        {node.details}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Real-time Signaling Feed Detail */}
                {caseStudy.realTimeCommunication && (
                  <div className="mt-6 p-4 rounded-xl bg-cyan-500/5 dark:bg-cyan-500/10 border border-cyan-500/20">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 mb-2">
                      <Radio className="w-4 h-4 animate-pulse" />
                      <span>{caseStudy.realTimeCommunication.protocol}</span>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 mb-3">
                      {caseStudy.realTimeCommunication.overview}
                    </p>
                    <div className="space-y-1.5">
                      {caseStudy.realTimeCommunication.flow.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 font-mono">
                          <ArrowRight className="w-3.5 h-3.5 text-cyan-500 mt-0.5 flex-shrink-0" />
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: PROCESSING WORKFLOW */}
          {activeTab === 'workflow' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  Sequential Processing Lifecycle
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Step-by-step breakdown of how data and background jobs traverse the platform.
                </p>
              </div>

              <div className="space-y-4">
                {caseStudy.processingWorkflow.map((step) => (
                  <div
                    key={step.step}
                    className="p-4 sm:p-5 rounded-2xl glass-panel-subtle border border-black/5 dark:border-white/10 flex items-start gap-4"
                  >
                    <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-md shadow-indigo-600/20">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                          {step.title}
                        </h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                          {step.badge}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: TECHNOLOGY DECISIONS */}
          {activeTab === 'decisions' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  Engineering Rationale & Trade-Offs
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Why specific tools were chosen over alternatives.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseStudy.technologyDecisions.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl glass-panel-subtle border border-black/5 dark:border-white/10 flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="font-bold text-base text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-indigo-500" />
                        {item.technology}
                      </h4>
                      <div className="space-y-3 text-xs sm:text-sm">
                        <div>
                          <span className="text-[11px] font-mono font-semibold uppercase text-emerald-600 dark:text-emerald-400 block mb-1">
                            Decision Rationale
                          </span>
                          <p className="text-slate-600 dark:text-slate-300">
                            {item.reason}
                          </p>
                        </div>
                        <div>
                          <span className="text-[11px] font-mono font-semibold uppercase text-slate-500 dark:text-slate-400 block mb-1">
                            Trade-off & Mitigation
                          </span>
                          <p className="text-slate-500 dark:text-slate-400">
                            {item.tradeoff}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: CHALLENGES */}
          {activeTab === 'challenges' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  Obstacles Overcome & Resolutions
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Real engineering hurdles resolved during implementation.
                </p>
              </div>

              <div className="space-y-4">
                {caseStudy.challenges.map((c, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl glass-panel-subtle border border-black/5 dark:border-white/10 space-y-2"
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="p-1 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 mt-0.5">
                        <AlertTriangle className="w-4 h-4" />
                      </span>
                      <div>
                        <h4 className="font-semibold text-sm text-slate-900 dark:text-white">
                          Challenge:
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                          {c.challenge}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 pt-2 border-t border-black/5 dark:border-white/10">
                      <span className="p-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </span>
                      <div>
                        <h4 className="font-semibold text-sm text-slate-900 dark:text-white">
                          Engineered Resolution:
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                          {c.resolution}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Links */}
        <div className="p-4 sm:p-6 border-t border-black/5 dark:border-white/10 flex flex-wrap items-center justify-between gap-3 bg-slate-50/50 dark:bg-slate-900/40">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
            {project.tags.join(' • ')}
          </span>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold glass-panel-subtle hover:bg-black/5 dark:hover:bg-white/10 text-slate-800 dark:text-slate-200 border border-black/10 dark:border-white/10 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source Code</span>
            </a>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-600/25 transition-all active:scale-95"
            >
              <span>Live Application</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
