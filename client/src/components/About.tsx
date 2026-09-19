import React from 'react';
import {
  Code2,
  Server,
  Cpu,
  GraduationCap,
  Briefcase,
  User,
} from 'lucide-react';
import { experienceData, educationData } from '../data/experienceData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden w-full max-w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel-subtle text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-3 border border-black/5 dark:border-white/10">
            <User className="w-3.5 h-3.5" />
            <span>MY JOURNEY & PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Driven by Scalability. Anchored in Craft.
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            I specialize in engineering high-throughput full-stack architectures, resilient microservices,
            and real-time systems that bridge complex backend logic with elegant user interfaces.
          </p>
        </div>

        {/* Narrative Storytelling Card: "A little about the person behind the code" */}
        <div className="mb-16 rounded-3xl glass-panel p-4 sm:p-8 lg:p-10 border border-black/10 dark:border-white/10 shadow-xl relative overflow-hidden w-full max-w-full">
          {/* Subtle luminous background ambient glow */}
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6 mb-6">
            <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg shadow-indigo-500/25 flex-shrink-0 border border-indigo-500/30 bg-slate-200 dark:bg-slate-800">
              <img
                src="/linkedin_profile.jpg"
                alt="Arbaz Hasan"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                Personal Story
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-0.5">
                A little about the person behind the code.
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                How an obsession with behind-the-scenes logic evolved into distributed systems engineering.
              </p>
            </div>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            <p>
              My journey into software engineering was sparked by curiosity for what happens beneath the
              surface—how distributed services talk, how background queues prevent server crashes, and how
              modern web applications stay fast when traffic surges. That motivation drove me through both
              my <strong>Bachelor of Computer Applications (BCA)</strong> and <strong>Master of Computer
              Applications (MCA)</strong> at Teerthanker Mahaveer University, giving me a solid foundation in
              algorithms, database management systems, and core computer science.
            </p>

            <p>
              During my time as a <strong>Software Developer Trainee at To The New</strong> in Noida, I worked
              hands-on with production MERN stack codebases. Following MVC architectural standards, I designed
              RESTful APIs and profiled MongoDB queries to eliminate unindexed collection scans, measurably reducing
              API response latency and payload footprints.
            </p>

            <p>
              I brought that same collaborative energy to technical hackathons, leading a team to engineer
              <strong> Helpify</strong>—a QR-code campus assistance utility platform—and securing
              <strong> 2nd place among 30+ competing teams</strong>. Today, I invest my energy into designing
              resilient asynchronous architectures—most notably my <strong>Distributed Media Processing
              Platform</strong> leveraging BullMQ, Redis, FFmpeg, and Docker—because I believe the best user
              experiences are powered by rock-solid backend foundations.
            </p>
          </div>

          {/* Quick Identity Trait Chips */}
          <div className="mt-8 pt-6 border-t border-black/5 dark:border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="p-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
              <span className="text-[11px] font-mono text-slate-400 block">Academics</span>
              <span className="text-xs font-bold text-slate-900 dark:text-white mt-0.5 block">MCA & BCA Graduate</span>
            </div>
            <div className="p-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
              <span className="text-[11px] font-mono text-slate-400 block">Industry Trainee</span>
              <span className="text-xs font-bold text-slate-900 dark:text-white mt-0.5 block">To The New (Noida)</span>
            </div>
            <div className="p-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
              <span className="text-[11px] font-mono text-slate-400 block">Hackathon Podium</span>
              <span className="text-xs font-bold text-slate-900 dark:text-white mt-0.5 block">2nd / 30+ Teams</span>
            </div>
            <div className="p-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
              <span className="text-[11px] font-mono text-slate-400 block">Core Discipline</span>
              <span className="text-xs font-bold text-slate-900 dark:text-white mt-0.5 block">Distributed Systems</span>
            </div>
          </div>
        </div>

        {/* 3 Core Engineering Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="glass-panel rounded-2xl p-6 border border-black/5 dark:border-white/10 hover:border-indigo-500/30 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
              Distributed & Asynchronous Systems
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Designing decoupled worker queues with BullMQ and Redis to handle compute-heavy jobs, video transcoding,
              and background processing without degrading HTTP responsiveness.
            </p>
          </div>

          <div className="glass-panel rounded-2xl p-6 border border-black/5 dark:border-white/10 hover:border-cyan-500/30 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-4">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
              RESTful APIs & Database Optimization
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Architecting secure MVC patterns, relational and document data models in MongoDB/PostgreSQL, reducing
              query latency and minifying payload footprints for fast response times.
            </p>
          </div>

          <div className="glass-panel rounded-2xl p-6 border border-black/5 dark:border-white/10 hover:border-purple-500/30 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
              Modern Full-Stack React & Next.js
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Building dynamic, accessible user interfaces using React, Redux Toolkit, and Tailwind CSS with smooth
              micro-interactions and responsive state synchronizations.
            </p>
          </div>
        </div>

        {/* Experience & Education Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Professional Experience Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-semibold text-lg">
              <Briefcase className="w-5 h-5 text-indigo-500" />
              <span>Professional Experience</span>
            </div>

            {experienceData.map((exp) => (
              <div
                key={exp.id}
                className="glass-panel rounded-2xl p-6 border border-black/5 dark:border-white/10 hover:border-indigo-500/30 transition-all"
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h4>
                    <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                      {exp.company} • <span className="text-slate-500 dark:text-slate-400">{exp.location}</span>
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono glass-panel-subtle text-slate-600 dark:text-slate-300">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2 mt-4 text-sm text-slate-600 dark:text-slate-300">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 pt-4 border-t border-black/5 dark:border-white/10 flex flex-wrap gap-2">
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

          {/* Education Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-semibold text-lg">
              <GraduationCap className="w-5 h-5 text-indigo-500" />
              <span>Academic Education</span>
            </div>

            <div className="flex flex-col gap-4">
              {educationData.map((edu) => (
                <div
                  key={edu.id}
                  className="glass-panel rounded-2xl p-5 border border-black/5 dark:border-white/10 hover:border-indigo-500/20 transition-all"
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400">
                      {edu.period}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {edu.institution}, {edu.location}
                  </p>
                  <div className="mt-3 space-y-1">
                    {edu.highlights.map((item, idx) => (
                      <p key={idx} className="text-xs text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-500" />
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
