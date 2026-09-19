import React, { useState } from 'react';
import {
  Code2,
  Layout,
  Server,
  Database,
  Cpu,
  Shield,
  Terminal,
  Binary,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
  Layers,
  Radio,
  Film,
  Box,
  KeyRound,
  GitBranch,
  Globe,
  Zap,
  FileCode2,
  Palette,
  Workflow,
} from 'lucide-react';
import { skillsCategories } from '../data/skillsData';
import { SkillItem } from '../types';

export const Skills: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('all');

  const categoryIconMap: Record<string, React.ElementType> = {
    Code2,
    Layout,
    Server,
    Database,
    Cpu,
    Shield,
    Terminal,
    Binary,
  };

  // Dedicated icon mapping for individual technologies when spread out
  const getTechIcon = (name: string): React.ElementType => {
    const lower = name.toLowerCase();

    if (lower.includes('react')) return Code2;
    if (lower.includes('next')) return Globe;
    if (lower.includes('redux')) return Layers;
    if (lower.includes('tailwind') || lower.includes('css')) return Palette;
    if (lower.includes('html')) return Layout;
    if (lower.includes('typescript') || lower.includes('javascript')) return FileCode2;
    if (lower.includes('node')) return Server;
    if (lower.includes('express')) return Zap;
    if (lower.includes('rest') || lower.includes('api')) return Globe;
    if (lower.includes('websocket') || lower.includes('socket')) return Radio;
    if (lower.includes('mongo') || lower.includes('sql') || lower.includes('database')) return Database;
    if (lower.includes('redis')) return Zap;
    if (lower.includes('bullmq') || lower.includes('queue')) return Layers;
    if (lower.includes('ffmpeg') || lower.includes('media')) return Film;
    if (lower.includes('microservices') || lower.includes('distributed')) return Cpu;
    if (lower.includes('docker')) return Box;
    if (lower.includes('git')) return GitBranch;
    if (lower.includes('linux') || lower.includes('bash') || lower.includes('shell')) return Terminal;
    if (lower.includes('jwt') || lower.includes('auth') || lower.includes('security')) return KeyRound;
    if (lower.includes('structure') || lower.includes('algorithm') || lower.includes('oop')) return Workflow;

    return Code2;
  };

  const currentCategory = skillsCategories.find((c) => c.id === selectedCategoryId);

  return (
    <section id="skills" className="py-20 md:py-28 relative overflow-hidden w-full max-w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel-subtle text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-3 border border-black/5 dark:border-white/10">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Engineering Toolset & Specializations
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Full-stack engineering capabilities spanning frontend clients, distributed backend
            queues, database systems, and DevOps pipelines.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          <button
            onClick={() => setSelectedCategoryId('all')}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
              selectedCategoryId === 'all'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25'
                : 'glass-panel-subtle text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white border border-black/5 dark:border-white/10'
            }`}
          >
            All Disciplines ({skillsCategories.length})
          </button>
          {skillsCategories.map((category) => {
            const isSelected = selectedCategoryId === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategoryId(category.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25'
                    : 'glass-panel-subtle text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white border border-black/5 dark:border-white/10'
                }`}
              >
                {category.title}
              </button>
            );
          })}
        </div>

        {/* VIEW 1: ALL DISCIPLINES (Retains the full multi-category cards overview) */}
        {selectedCategoryId === 'all' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsCategories.map((cat) => {
              const Icon = categoryIconMap[cat.icon] || Code2;

              return (
                <div
                  key={cat.id}
                  onClick={() => setSelectedCategoryId(cat.id)}
                  className="rounded-2xl glass-panel p-6 border border-black/5 dark:border-white/10 hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                        {cat.title}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                      {cat.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono transition-colors ${
                            skill.highlight
                              ? 'bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-500/30 font-medium'
                              : 'bg-black/5 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-black/5 dark:border-white/5'
                          }`}
                        >
                          {skill.highlight && (
                            <span className="w-1 h-1 rounded-full bg-indigo-500" />
                          )}
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="group-hover:text-indigo-500 transition-colors">
                      Explore category ({cat.skills.length}) →
                    </span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* VIEW 2: SPECIFIC CATEGORY (Items spread across the entire section with Icon on Top & Name on Bottom) */}
        {selectedCategoryId !== 'all' && currentCategory && (
          <div className="space-y-8 animate-fadeIn">
            {/* Category Banner & Back Link */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl glass-panel border border-black/5 dark:border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-cyan-500 text-white flex items-center justify-center shadow-md shadow-indigo-500/25">
                  {React.createElement(categoryIconMap[currentCategory.icon] || Code2, {
                    className: 'w-6 h-6',
                  })}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {currentCategory.title}
                    </h3>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                      {currentCategory.skills.length} Technologies
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                    {currentCategory.description}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedCategoryId('all')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold glass-panel-subtle hover:bg-black/5 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 border border-black/10 dark:border-white/10 transition-all self-start sm:self-center"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>View All Disciplines</span>
              </button>
            </div>

            {/* SPREAD OUT GRID: Each item has prominent ICON on TOP and NAME on the BOTTOM */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-6 w-full max-w-full">
              {currentCategory.skills.map((skill: SkillItem) => {
                const IconComponent = getTechIcon(skill.name);

                return (
                  <div
                    key={skill.name}
                    className={`group relative rounded-3xl glass-panel p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center text-center border transition-all duration-300 hover:-translate-y-1.5 shadow-lg ${
                      skill.highlight
                        ? 'border-indigo-500/30 hover:border-indigo-500 shadow-indigo-500/5 hover:shadow-indigo-500/15'
                        : 'border-black/5 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20'
                    }`}
                  >
                    {/* Inner subtle glow */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                    {/* TOP: Prominent Technology Icon with luminous backdrop */}
                    <div className="relative mb-5">
                      <div
                        className={`w-16 h-16 sm:w-18 sm:h-18 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                          skill.highlight
                            ? 'bg-gradient-to-tr from-indigo-500/20 via-purple-500/15 to-cyan-500/20 text-indigo-600 dark:text-indigo-400 border border-indigo-500/30 group-hover:scale-110 shadow-md shadow-indigo-500/20'
                            : 'bg-black/5 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-black/5 dark:border-white/10 group-hover:scale-110 group-hover:text-indigo-600 dark:group-hover:text-white'
                        }`}
                      >
                        <IconComponent className="w-8 h-8 sm:w-9 sm:h-9" />
                      </div>

                      {skill.highlight && (
                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
                        </span>
                      )}
                    </div>

                    {/* BOTTOM: Technology Name & Details */}
                    <div className="w-full flex flex-col items-center">
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {skill.name}
                      </h4>

                      <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 mt-1">
                        {skill.highlight ? 'Core Competency' : 'Production Tool'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
