import React from 'react';
import {
  Github,
  ExternalLink,
  ArrowRight,
  Layers,
  Server,
  Film,
  ShoppingBag,
  Cpu,
  CheckCircle2,
} from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { Project } from '../types';

interface ProjectsProps {
  onOpenCaseStudy: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenCaseStudy }) => {
  const handleSelect = (project: Project) => {
    onOpenCaseStudy(project);
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative overflow-hidden w-full max-w-full">
      {/* Background subtle illumination */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel-subtle text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-3 border border-black/5 dark:border-white/10">
            <Layers className="w-3.5 h-3.5" />
            <span>ENGINEERING SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Architected for Resilience. Built for Impact.
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Featured full-stack platforms demonstrating asynchronous worker queues, microservices,
            distributed media pipelines, and complex administrative state machines.
          </p>
        </div>

        {/* Product-Style Project Cards List */}
        <div className="space-y-16 w-full max-w-full">
          {projectsData.map((project, index) => {
            const isDistributedMedia = project.id === 'distributed-media-platform';

            return (
              <div
                key={project.id}
                className="group relative rounded-3xl glass-panel p-4 sm:p-8 lg:p-10 border border-black/10 dark:border-white/10 shadow-xl transition-all duration-300 hover:border-indigo-500/30 w-full max-w-full overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left Column: Project Overview, Features & CTAs */}
                  <div className="lg:col-span-7 flex flex-col items-start w-full min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-600 text-white shadow-sm">
                        {project.featuredBadge}
                      </span>
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                        Project 0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-1">
                      {project.subtitle}
                    </p>

                    <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Metrics Highlights Bar */}
                    {project.metrics && (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 my-6 w-full p-3 sm:p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                        {project.metrics.map((m) => (
                          <div key={m.label} className="text-left min-w-0">
                            <span className="text-[10px] sm:text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block truncate">
                              {m.label}
                            </span>
                            <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-0.5 block break-words">
                              {m.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Key Architecture Highlights */}
                    <div className="mb-6 space-y-2 w-full">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
                        Key Architectural Highlights:
                      </span>
                      {project.architectureHighlights.slice(0, 3).map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span className="break-words">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-8 w-full">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono glass-panel-subtle text-slate-700 dark:text-slate-300 border border-black/5 dark:border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 w-full">
                      <button
                        onClick={() => handleSelect(project)}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-600/30 transition-all active:scale-95"
                      >
                        <span>View Deep-Dive Case Study</span>
                        <ArrowRight className="w-4 h-4 flex-shrink-0" />
                      </button>

                      <div className="flex items-center gap-2 w-full sm:w-auto">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 rounded-full text-xs sm:text-sm font-semibold glass-panel-subtle text-slate-800 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 transition-all active:scale-95"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                        </a>

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full glass-panel-subtle text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 border border-black/10 dark:border-white/10 transition-colors flex-shrink-0"
                          aria-label="View source on GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Abstract Interactive Graphic / Architecture Preview */}
                  <div className="lg:col-span-5 w-full max-w-full overflow-hidden">
                    <div
                      onClick={() => handleSelect(project)}
                      className="relative rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-900 p-4 sm:p-6 text-white border border-white/10 shadow-2xl overflow-hidden cursor-pointer group-hover:border-indigo-500/40 transition-all w-full max-w-full"
                    >
                      {/* Ambient corner flare */}
                      <div className="absolute top-0 right-0 w-36 h-36 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />

                      {/* Header in simulated UI window */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 sm:pb-4 mb-4 sm:mb-5 border-b border-white/10">
                        <div className="flex items-center gap-1.5 min-w-0">
                          <span className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
                          <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
                          <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
                          <span className="text-[11px] font-mono text-slate-400 ml-1 sm:ml-2 truncate">
                            {isDistributedMedia ? 'transcoding_pipeline.ts' : 'ecommerce_architecture.ts'}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-indigo-300 flex-shrink-0">
                          {isDistributedMedia ? 'BullMQ • Redis' : 'MVC • MongoDB'}
                        </span>
                      </div>

                      {/* Visual Architecture Representation */}
                      {isDistributedMedia ? (
                        <div className="space-y-2.5 sm:space-y-3 font-mono text-xs">
                          <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col xs:flex-row xs:items-center justify-between gap-1 min-w-0">
                            <div className="flex items-center gap-2 min-w-0">
                              <Film className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                              <span className="truncate">Video Upload Ingestion</span>
                            </div>
                            <span className="text-emerald-400 text-[11px] flex-shrink-0 font-medium">1080p, 720p, 360p</span>
                          </div>

                          <div className="flex justify-center my-0.5 text-slate-500">
                            <span className="animate-bounce">↓</span>
                          </div>

                          <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col xs:flex-row xs:items-center justify-between gap-1 min-w-0">
                            <div className="flex items-center gap-2 min-w-0">
                              <Layers className="w-4 h-4 text-purple-400 flex-shrink-0" />
                              <span className="truncate">BullMQ Job Queue</span>
                            </div>
                            <span className="text-amber-400 text-[11px] flex-shrink-0 font-medium">Redis Backpressure</span>
                          </div>

                          <div className="flex justify-center my-0.5 text-slate-500">
                            <span className="animate-bounce">↓</span>
                          </div>

                          <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col xs:flex-row xs:items-center justify-between gap-1 min-w-0">
                            <div className="flex items-center gap-2 min-w-0">
                              <Cpu className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                              <span className="truncate">FFmpeg Worker Cluster</span>
                            </div>
                            <span className="text-cyan-400 text-[11px] flex-shrink-0 font-medium">Socket.IO Telemetry</span>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-2.5 sm:space-y-3 font-mono text-xs">
                          <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col xs:flex-row xs:items-center justify-between gap-1 min-w-0">
                            <div className="flex items-center gap-2 min-w-0">
                              <ShoppingBag className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                              <span className="truncate">Redux Toolkit Store</span>
                            </div>
                            <span className="text-emerald-400 text-[11px] flex-shrink-0 font-medium">+40% Faster Load</span>
                          </div>

                          <div className="flex justify-center my-0.5 text-slate-500">
                            <span className="animate-bounce">↓</span>
                          </div>

                          <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col xs:flex-row xs:items-center justify-between gap-1 min-w-0">
                            <div className="flex items-center gap-2 min-w-0">
                              <Server className="w-4 h-4 text-purple-400 flex-shrink-0" />
                              <span className="truncate">Express MVC + RBAC</span>
                            </div>
                            <span className="text-indigo-300 text-[11px] flex-shrink-0 font-medium">Razorpay Verified</span>
                          </div>

                          <div className="flex justify-center my-0.5 text-slate-500">
                            <span className="animate-bounce">↓</span>
                          </div>

                          <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col xs:flex-row xs:items-center justify-between gap-1 min-w-0">
                            <div className="flex items-center gap-2 min-w-0">
                              <Server className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                              <span className="truncate">MongoDB Transactions</span>
                            </div>
                            <span className="text-cyan-400 text-[11px] flex-shrink-0 font-medium">Atomic Decrement</span>
                          </div>
                        </div>
                      )}

                      {/* Click overlay hint */}
                      <div className="mt-4 sm:mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-slate-400 text-xs font-sans">
                        <span>Click to explore system case study</span>
                        <ArrowRight className="w-3.5 h-3.5 text-indigo-400 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
