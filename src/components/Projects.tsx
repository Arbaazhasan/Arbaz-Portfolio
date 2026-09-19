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
    <section id="projects" className="py-20 md:py-28 relative">
      {/* Background subtle illumination */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="space-y-16">
          {projectsData.map((project, index) => {
            const isDistributedMedia = project.id === 'distributed-media-platform';

            return (
              <div
                key={project.id}
                className="group relative rounded-3xl glass-panel p-6 sm:p-8 lg:p-10 border border-black/10 dark:border-white/10 shadow-xl transition-all duration-300 hover:border-indigo-500/30"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left Column: Project Overview, Features & CTAs */}
                  <div className="lg:col-span-7 flex flex-col items-start">
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
                      <div className="grid grid-cols-3 gap-3 my-6 w-full p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                        {project.metrics.map((m) => (
                          <div key={m.label} className="text-left">
                            <span className="text-[10px] sm:text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                              {m.label}
                            </span>
                            <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-0.5 block">
                              {m.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Key Architecture Highlights */}
                    <div className="mb-6 space-y-2">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
                        Key Architectural Highlights:
                      </span>
                      {project.architectureHighlights.slice(0, 3).map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-8">
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
                    <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                      <button
                        onClick={() => handleSelect(project)}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-600/30 transition-all active:scale-95"
                      >
                        <span>View Deep-Dive Case Study</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold glass-panel-subtle text-slate-800 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 transition-all active:scale-95"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full glass-panel-subtle text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 border border-black/10 dark:border-white/10 transition-colors"
                        aria-label="View source on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Abstract Interactive Graphic / Architecture Preview */}
                  <div className="lg:col-span-5 w-full">
                    <div
                      onClick={() => handleSelect(project)}
                      className="relative rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-900 p-6 text-white border border-white/10 shadow-2xl overflow-hidden cursor-pointer group-hover:border-indigo-500/40 transition-all"
                    >
                      {/* Ambient corner flare */}
                      <div className="absolute top-0 right-0 w-36 h-36 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />

                      {/* Header in simulated UI window */}
                      <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-red-400" />
                          <span className="w-2 h-2 rounded-full bg-amber-400" />
                          <span className="w-2 h-2 rounded-full bg-emerald-400" />
                          <span className="text-[11px] font-mono text-slate-400 ml-2">
                            {isDistributedMedia ? 'transcoding_pipeline.ts' : 'ecommerce_architecture.ts'}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-indigo-300">
                          {isDistributedMedia ? 'BullMQ • Redis' : 'MVC • MongoDB'}
                        </span>
                      </div>

                      {/* Visual Architecture Representation */}
                      {isDistributedMedia ? (
                        <div className="space-y-3 font-mono text-xs">
                          <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Film className="w-4 h-4 text-indigo-400" />
                              <span>Video Upload Ingestion</span>
                            </div>
                            <span className="text-emerald-400 text-[11px]">1080p, 720p, 360p</span>
                          </div>

                          <div className="flex justify-center my-1 text-slate-500">
                            <span className="animate-bounce">↓</span>
                          </div>

                          <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Layers className="w-4 h-4 text-purple-400" />
                              <span>BullMQ Job Queue</span>
                            </div>
                            <span className="text-amber-400 text-[11px]">Redis Backpressure</span>
                          </div>

                          <div className="flex justify-center my-1 text-slate-500">
                            <span className="animate-bounce">↓</span>
                          </div>

                          <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Cpu className="w-4 h-4 text-cyan-400" />
                              <span>FFmpeg Worker Cluster</span>
                            </div>
                            <span className="text-cyan-400 text-[11px]">Socket.IO Telemetry</span>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-3 font-mono text-xs">
                          <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <ShoppingBag className="w-4 h-4 text-indigo-400" />
                              <span>Redux Toolkit Storefront</span>
                            </div>
                            <span className="text-emerald-400 text-[11px]">+40% Faster Load</span>
                          </div>

                          <div className="flex justify-center my-1 text-slate-500">
                            <span className="animate-bounce">↓</span>
                          </div>

                          <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Server className="w-4 h-4 text-purple-400" />
                              <span>Express MVC + JWT RBAC</span>
                            </div>
                            <span className="text-indigo-300 text-[11px]">Razorpay Verified</span>
                          </div>

                          <div className="flex justify-center my-1 text-slate-500">
                            <span className="animate-bounce">↓</span>
                          </div>

                          <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Server className="w-4 h-4 text-cyan-400" />
                              <span>MongoDB Transactions</span>
                            </div>
                            <span className="text-cyan-400 text-[11px]">Atomic Stock decrement</span>
                          </div>
                        </div>
                      )}

                      {/* Click overlay hint */}
                      <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-slate-400 text-xs font-sans">
                        <span>Click to explore system case study</span>
                        <ArrowRight className="w-3.5 h-3.5 text-indigo-400 group-hover:translate-x-1 transition-transform" />
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
