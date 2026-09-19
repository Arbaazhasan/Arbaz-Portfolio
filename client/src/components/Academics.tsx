import React from 'react';
import {
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  Award,
  Cpu,
  Database,
  Layers,
  Code2,
} from 'lucide-react';
import { educationData } from '../data/experienceData';

export const Academics: React.FC = () => {
  const competencies = [
    {
      icon: Code2,
      title: 'Data Structures & Algorithms',
      description:
        'Rigorous problem solving covering Trees, Graphs, Dynamic Programming, Sorting, and Time/Space complexity optimization.',
      skills: ['C++', 'Java', 'Algorithmic Complexity', 'Problem Solving'],
    },
    {
      icon: Cpu,
      title: 'Distributed Systems & Operating Systems',
      description:
        'Concurrencies, process scheduling, memory management, and asynchronous worker queue designs.',
      skills: ['Concurrency', 'Worker Queues', 'Process Lifecycle', 'Networking'],
    },
    {
      icon: Database,
      title: 'Database Systems & Information Architecture',
      description:
        'Relational schema design (SQL), NoSQL collections (MongoDB), query indexing, and caching layers.',
      skills: ['SQL', 'MongoDB', 'Indexing', 'Normalization', 'Redis'],
    },
    {
      icon: Layers,
      title: 'Software Engineering & System Architecture',
      description:
        'Clean Architecture, MVC patterns, SOLID principles, REST API contract design, and modular codebases.',
      skills: ['MVC Architecture', 'RESTful Design', 'SOLID Principles', 'Agile'],
    },
  ];

  return (
    <section id="academics" className="py-20 md:py-28 relative overflow-hidden w-full max-w-full">
      {/* Ambient background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 w-full max-w-full">
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px]" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-subtle text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-3 border border-black/5 dark:border-white/10">
            <GraduationCap className="w-4 h-4 text-indigo-500" />
            <span>ACADEMIC FOUNDATIONS & DEGREES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Academic Journey & Theoretical Rigor
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Five years of comprehensive computer science education at Teerthanker Mahaveer University,
            bridging mathematical and computational foundations with modern distributed engineering.
          </p>
        </div>

        {/* ============================================================= */}
        {/* SPOTLIGHT BANNER: Convocation & University Foundation Card   */}
        {/* ============================================================= */}
        <div className="mb-12 sm:mb-14 rounded-3xl glass-panel p-4 sm:p-8 lg:p-10 border border-black/10 dark:border-white/10 shadow-xl relative overflow-hidden w-full max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Left Photo Showcase: Arbaz with TMU Convocation Folder */}
            <div className="lg:col-span-4 flex justify-center w-full">
              <div className="relative group/photo max-w-[280px] w-full">
                {/* Glow ring */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/30 to-purple-500/30 rounded-3xl blur-xl opacity-75 group-hover/photo:opacity-100 transition-opacity" />

                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-black/10 dark:border-white/20 shadow-2xl bg-slate-900">
                  <img
                    src="/linkedin_profile.jpg"
                    alt="Arbaz Hasan - Teerthanker Mahaveer University Convocation"
                    className="w-full h-full object-cover object-top group-hover/photo:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle hover sheen */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
                {/* Clean caption chip under photo */}
                <div className="mt-3 text-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel-subtle text-[11px] font-mono text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    <span>TMU Convocation Ceremony</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right Narrative & Highlights */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-semibold border border-indigo-500/20">
                    TMU Moradabad, Uttar Pradesh
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-semibold border border-emerald-500/20 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    NAAC 'A' Accredited University
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Dual Computer Science Degrees (MCA & BCA)
                </h3>

                <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  Completing both my Bachelor's and Master's in Computer Applications provided a sustained,
                  unbroken continuum of computer science education. From early algorithmic modeling in C++ and
                  relational SQL schemas to advanced distributed architectures and microservices, this academic
                  path provided the depth required to engineer resilient, production-grade applications.
                </p>

                {/* Key takeaways */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 dark:text-slate-300">
                      <strong>5 Years Continuous Study:</strong> Deep immersion in software engineering principles and computer science fundamentals.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 dark:text-slate-300">
                      <strong>Practical Engineering:</strong> Real-world projects, hackathon leadership, and capstone software architecture.
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
                <span>College of Computing Sciences and Information Technology (CCSIT)</span>
                <span className="text-indigo-600 dark:text-indigo-400 font-semibold">2020 – 2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================= */}
        {/* DEGREE TIMELINE CARDS: MCA & BCA DEEP DIVE                    */}
        {/* ============================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {educationData.map((edu) => {
            const isMca = edu.id === 'mca-tmu';
            return (
              <div
                key={edu.id}
                className="rounded-3xl glass-panel p-6 sm:p-8 border border-black/10 dark:border-white/10 shadow-lg hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Luminous accent */}
                <div
                  className={`absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl pointer-events-none ${
                    isMca ? 'bg-indigo-500/10' : 'bg-cyan-500/10'
                  }`}
                />

                <div>
                  {/* Top degree metadata */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                      {isMca ? 'Postgraduate Degree' : 'Undergraduate Degree'}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                    {edu.degree}
                  </h3>

                  <div className="flex items-center gap-2 mt-1.5 text-sm font-medium text-slate-600 dark:text-slate-300">
                    <span className="text-indigo-600 dark:text-indigo-400">{edu.institution}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                      <MapPin className="w-3 h-3" />
                      {edu.location}
                    </span>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="mt-6 space-y-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block mb-2">
                      Curriculum & Focus Areas:
                    </span>
                    {edu.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Status</span>
                  <span className="text-emerald-500 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Successfully Completed
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ============================================================= */}
        {/* CORE ACADEMIC DISCIPLINES & THEORETICAL FOUNDATIONS          */}
        {/* ============================================================= */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Pillars of Academic Training
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              Theoretical knowledge directly applied in modern distributed engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {competencies.map((comp, idx) => {
              const Icon = comp.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl glass-panel p-5 border border-black/10 dark:border-white/10 shadow-sm hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-500 transition-colors">
                      {comp.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {comp.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/5 flex flex-wrap gap-1.5">
                    {comp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded-md bg-black/5 dark:bg-white/5 text-[10px] font-mono text-slate-600 dark:text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;
