import React from 'react';
import {
  Briefcase,
  Trophy,
  CheckCircle2,
  Calendar,
  MapPin,
} from 'lucide-react';
import { experienceData, achievementsData } from '../data/experienceData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative overflow-hidden w-full max-w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel-subtle text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-3 border border-black/5 dark:border-white/10">
            <Briefcase className="w-3.5 h-3.5" />
            <span>TRACK RECORD & RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Industry Experience & Achievements
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Professional software development in agile enterprise environments and competitive engineering hackathons.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
          {/* Left: Experience Timeline */}
          <div className="lg:col-span-7 space-y-6 w-full min-w-0">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-lg mb-2">
              <Briefcase className="w-5 h-5 text-indigo-500" />
              <span>Professional Trajectory</span>
            </div>

            {experienceData.map((exp) => (
              <div
                key={exp.id}
                className="relative rounded-3xl glass-panel p-4 sm:p-8 border border-black/10 dark:border-white/10 shadow-xl hover:border-indigo-500/30 transition-all duration-300 w-full max-w-full overflow-hidden"
              >
                {/* Header info */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                  <div>
                    <span className="text-xs font-mono font-medium text-indigo-600 dark:text-indigo-400">
                      {exp.type}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-0.5">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">
                      {exp.company}
                    </p>
                  </div>

                  <div className="text-right">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono glass-panel-subtle text-slate-700 dark:text-slate-300 border border-black/5 dark:border-white/10">
                      <Calendar className="w-3 h-3 text-indigo-500" />
                      {exp.period}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 justify-end mt-1.5">
                      <MapPin className="w-3 h-3" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Key Impact Points */}
                <div className="my-5 p-4 rounded-2xl bg-indigo-500/5 dark:bg-indigo-500/10 border border-indigo-500/20">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block mb-2">
                    Key Performance Highlights
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {exp.impactHighlights.map((imp, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>{imp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Responsibilities list */}
                <div className="space-y-2.5 mb-6">
                  {exp.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="pt-4 border-t border-black/5 dark:border-white/10 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-black/5 dark:bg-white/5 text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Hackathon Achievement Spotlight */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-lg mb-2">
              <Trophy className="w-5 h-5 text-amber-500" />
              <span>Competitive Recognition</span>
            </div>

            {achievementsData.map((ach) => (
              <div
                key={ach.id}
                className="rounded-3xl glass-panel p-6 sm:p-8 border border-amber-500/20 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent shadow-xl relative overflow-hidden"
              >
                {/* Ambient glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-400 text-white flex items-center justify-center shadow-lg shadow-amber-500/30">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                      HACKATHON PODIUM
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {ach.title}
                    </h3>
                  </div>
                </div>

                {/* Project Badge */}
                <div className="p-3.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 mb-4">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-mono text-slate-500 dark:text-slate-400">Platform Built:</span>
                    <span className="font-bold text-slate-900 dark:text-white">{ach.project}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-slate-500 dark:text-slate-400">Field Competition:</span>
                    <span className="font-mono text-amber-600 dark:text-amber-400 font-semibold">{ach.stats}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {ach.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-black/5 dark:border-white/10">
                  {ach.badges.map((badge) => (
                    <span
                      key={badge}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono glass-panel-subtle text-slate-700 dark:text-slate-300 border border-black/5 dark:border-white/5"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Engineering Values Quote Card */}
            <div className="p-6 rounded-3xl glass-panel border border-black/5 dark:border-white/10">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Engineering Principle
              </h4>
              <blockquote className="text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
                "Robust architectures are measured not by how fast they handle simple requests, but by how gracefully they queue, process, and recover when load surges."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
