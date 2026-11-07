import React, { useState } from 'react';
import {
  ArrowRight,
  Github,
  Linkedin,
  Copy,
  Check,
  ChevronRight,
  Trophy,
  Briefcase,
  GraduationCap,
  Sparkles,
  Cpu,
  FileText,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';
import { Project } from '../types';
import { projectsData } from '../data/projectsData';

interface HeroProps {
  onOpenCaseStudy: (project: Project) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCaseStudy }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [imgError, setImgError] = useState<boolean>(false);

  const featuredProject =
    projectsData.find((p) => p.id === 'distributed-media-platform') || projectsData[0];

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('arbaazhasan.ah@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section
      id="home"
      className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-36 md:pb-24 overflow-hidden w-full max-w-full"
    >
      {/* VisionOS Ambient Multi-hue Backlight Auras - Contained */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 w-full max-w-full">
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[340px] sm:w-[600px] lg:w-[1100px] h-[340px] sm:h-[450px] lg:h-[550px] bg-gradient-to-b from-indigo-500/15 via-purple-500/10 to-transparent rounded-full blur-[100px] sm:blur-[160px]" />
        <div className="absolute top-1/4 -left-20 w-64 sm:w-96 lg:w-[450px] h-64 sm:h-96 lg:h-[450px] bg-cyan-500/10 rounded-full blur-[90px] sm:blur-[140px]" />
        <div className="absolute bottom-10 -right-20 w-64 sm:w-96 lg:w-[450px] h-64 sm:h-96 lg:h-[450px] bg-indigo-600/10 rounded-full blur-[90px] sm:blur-[140px]" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================================================================= */}
        {/* MAIN SPLIT STAGE: Left Narrative & Right LinkedIn Photo Spotlight */}
        {/* ================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center mb-12 sm:mb-16">
          {/* ------------------------------------------------------------- */}
          {/* LEFT COLUMN: Identity, Vision & Interactive Actions (7 Cols)  */}
          {/* ------------------------------------------------------------- */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10 w-full">
            {/* Live Availability & Role Eyebrow Pill */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full glass-panel border border-black/10 dark:border-white/10 shadow-sm mb-4 sm:mb-6 max-w-full">
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] sm:text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                Available for Full-Stack & Backend Roles
              </span>
              <span className="text-slate-400 dark:text-slate-600 hidden xs:inline">•</span>
              <span className="text-[11px] sm:text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400">
                New Delhi / Remote
              </span>
            </div>

            {/* Greeting & Headline */}
            <div className="mb-4 sm:mb-6 w-full">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-sm sm:text-base font-mono font-semibold tracking-wide text-indigo-600 dark:text-indigo-400">
                  Hi, I'm
                </span>
                <span className="text-[11px] sm:text-xs font-mono px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-500/20">
                  Full-Stack Software Engineer
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Arbaz Hasan.
              </h1>

              <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-700 dark:text-slate-200 mt-2 leading-snug">
                Architecting{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  Scalable Microservices
                </span>{' '}
                & Resilient Web Experiences.
              </h2>
            </div>

            {/* Narrative Identity Pitch */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal mb-6 sm:mb-8">
              I specialize in distributed systems, asynchronous worker queues (BullMQ, Redis, FFmpeg),
              and production-grade full-stack web applications. Backed by industry experience as a
              <strong className="text-slate-900 dark:text-white font-semibold"> Software Developer Trainee at TO THE NEW</strong> and an
              <strong className="text-slate-900 dark:text-white font-semibold"> MCA from Teerthanker Mahaveer University</strong>,
              I build reliable, low-latency software architectures designed to scale.
            </p>

            {/* Interactive Call-to-Action Suite - Mobile Optimized */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 mb-6 sm:mb-8 w-full sm:w-auto">
              {/* Primary CTA: Explore Systems */}
              <button
                onClick={() => handleScrollTo('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 gap-2 text-sm"
              >
                <span>Explore Featured Systems</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Case Study Quick Trigger */}
              <button
                onClick={() => onOpenCaseStudy(featuredProject)}
                className="w-full sm:w-auto inline-flex items-center justify-center px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl font-semibold text-slate-700 dark:text-slate-200 glass-panel border border-black/10 dark:border-white/10 hover:border-indigo-500/40 hover:bg-black/5 dark:hover:bg-white/5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 gap-2 text-sm"
              >
                <Sparkles className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                <span>Deep-Dive Case Study</span>
              </button>

              {/* Mobile 2-column action cluster for Resume & Email */}
              <div className="grid grid-cols-2 gap-2.5 w-full sm:w-auto sm:flex sm:items-center sm:gap-3">
                {/* Resume Action */}
                <a
                  href="/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-2xl font-semibold text-slate-700 dark:text-slate-200 glass-panel border border-black/10 dark:border-white/10 hover:border-purple-500/40 hover:bg-black/5 dark:hover:bg-white/5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 gap-1.5 sm:gap-2 text-xs sm:text-sm"
                >
                  <FileText className="w-4 h-4 text-purple-500 flex-shrink-0" />
                  <span>Resume</span>
                </a>

                {/* Quick Email Copy Button */}
                <button
                  onClick={handleCopyEmail}
                  className={`inline-flex items-center justify-center px-3 sm:px-4 py-3 sm:py-3.5 rounded-2xl font-mono text-xs font-semibold border transition-all duration-200 gap-1.5 sm:gap-2 ${copied
                      ? 'bg-emerald-500 text-white border-emerald-500 shadow-lg shadow-emerald-500/25'
                      : 'glass-panel text-slate-600 dark:text-slate-300 border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20'
                    }`}
                  title="Click to copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Quick Connect & Verified Identity Links */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4 border-t border-black/5 dark:border-white/10 w-full text-xs">
              <span className="font-mono text-slate-400">Direct Profiles:</span>
              <a
                href="https://linkedin.com/in/arbazah"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#0077b5]" />
                <span>linkedin.com/in/arbazah</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">•</span>

              <a
                href="https://github.com/Arbaazhasan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>github.com/Arbaazhasan</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* RIGHT COLUMN: LinkedIn Profile Photo Showcase & Dynamic Hub  */}
          {/* ------------------------------------------------------------- */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative z-10 w-full max-w-full">
            {/* Ambient Multi-Layer Backlight Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/15 rounded-3xl blur-2xl pointer-events-none -z-10" />

            {/* The Glass Showcase Frame */}
            <div className="w-full max-w-sm sm:max-w-md mx-auto rounded-3xl glass-panel p-4 sm:p-6 border border-black/10 dark:border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
              {/* Top Bar of the Card */}
              <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4 pb-3 border-b border-black/5 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <div className="p-1 rounded-lg bg-[#0077b5]/10 text-[#0077b5] flex-shrink-0">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-slate-900 dark:text-white">
                        Arbaz Hasan
                      </span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0077b5]" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 block truncate max-w-[180px] sm:max-w-none">
                      Teerthanker Mahaveer University • MCA
                    </span>
                  </div>
                </div>

                {/* Live Online Badge */}
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Verified</span>
                </div>
              </div>

              {/* Center Portrait Box */}
              <div className="relative group/portrait mb-3 sm:mb-4">
                {/* Image Container with Dynamic Framing */}
                <div className="relative w-full aspect-[3/4] max-h-[380px] sm:max-h-[460px] rounded-2xl overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 border border-black/10 dark:border-white/10 shadow-inner flex items-center justify-center">
                  {!imgError ? (
                    <img
                      src="/linkedin_profile.jpg"
                      alt="Arbaz Hasan - Full-Stack Software Engineer"
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover object-top group-hover/portrait:scale-[1.03] transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-500 text-white p-6 text-center">
                      <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center font-extrabold text-3xl mb-3 shadow-inner">
                        AH
                      </div>
                      <span className="font-bold text-lg">Arbaz Hasan</span>
                      <span className="text-xs text-white/80 font-mono mt-1">
                        Full-Stack Software Engineer
                      </span>
                    </div>
                  )}

                  {/* Subtle glass reflection sheen on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover/portrait:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Desktop-only Floating Spatial Badges (Cleanly separated on sm and larger screens) */}
                <div className="hidden sm:flex absolute -top-3 -right-3 px-3 py-1.5 rounded-xl glass-panel border border-black/10 dark:border-white/10 shadow-xl items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-100 backdrop-blur-md transform group-hover/portrait:translate-y-[-2px] transition-transform">
                  <Briefcase className="w-3.5 h-3.5 text-indigo-500 flex-shrink-0" />
                  <span>Ex-Trainee @ TO THE NEW</span>
                </div>

                <div className="hidden sm:flex absolute -top-3 -left-3 px-3 py-1.5 rounded-xl glass-panel border border-black/10 dark:border-white/10 shadow-xl items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-100 backdrop-blur-md transform group-hover/portrait:translate-y-[-2px] transition-transform">
                  <Trophy className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                  <span>2nd Place • Hackathon</span>
                </div>
              </div>

              {/* Mobile-only Badges Row (Prevents overlap and fits smoothly on any small screen) */}
              <div className="grid grid-cols-2 gap-2 mb-3 sm:hidden">
                <div className="p-2 rounded-xl glass-panel border border-black/10 dark:border-white/10 flex items-center gap-1.5 text-[11px] font-semibold text-slate-800 dark:text-slate-100">
                  <Briefcase className="w-3.5 h-3.5 text-indigo-500 flex-shrink-0" />
                  <span className="truncate">TO THE NEW Trainee</span>
                </div>
                <div className="p-2 rounded-xl glass-panel border border-black/10 dark:border-white/10 flex items-center gap-1.5 text-[11px] font-semibold text-slate-800 dark:text-slate-100">
                  <Trophy className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                  <span className="truncate">2nd Place Hackathon</span>
                </div>
              </div>

              {/* Clickable LinkedIn Profile Action */}
              <a
                href="https://linkedin.com/in/arbazah"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3.5 sm:px-4 rounded-xl bg-[#0077b5]/10 hover:bg-[#0077b5]/15 border border-[#0077b5]/20 text-[#0077b5] flex items-center justify-between text-xs font-semibold transition-all group/link"
              >
                <div className="flex items-center gap-2">
                  <Linkedin className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>View Official LinkedIn Profile</span>
                </div>
                <ChevronRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* BOTTOM CREDENTIALS RIBBON (4 Clean Glass Credential Pillars)       */}
        {/* ================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {/* Tile 1: TO THE NEW Experience */}
          <div className="rounded-2xl glass-panel p-4 sm:p-5 border border-black/10 dark:border-white/10 shadow-sm hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <Briefcase className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono text-slate-400">Jan – Apr 2025</span>
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                Software Developer Trainee
              </h3>
              <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400">
                TO THE NEW
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 line-clamp-2">
                Microservices, asynchronous pipelines, and production backend operations.
              </p>
            </div>
            <div className="mt-3 pt-2.5 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Industry Trainee</span>
              <span className="text-emerald-500 font-semibold">Completed</span>
            </div>
          </div>

          {/* Tile 2: Flagship Architecture */}
          <div
            onClick={() => onOpenCaseStudy(featuredProject)}
            className="rounded-2xl glass-panel p-4 sm:p-5 border border-black/10 dark:border-white/10 shadow-sm hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <Cpu className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono text-purple-500 font-semibold flex items-center gap-1">
                  Featured Build <ChevronRight className="w-3 h-3" />
                </span>
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-purple-500 transition-colors">
                Distributed Media Engine
              </h3>
              <p className="text-xs font-medium text-purple-600 dark:text-purple-400">
                BullMQ + Redis + FFmpeg
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 line-clamp-2">
                Multi-worker queue processing raw 4K videos into adaptive HLS streams.
              </p>
            </div>
            <div className="mt-3 pt-2.5 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Case Study Ready</span>
              <span className="text-purple-500 font-semibold">Inspect Engine</span>
            </div>
          </div>

          {/* Tile 3: Hackathon Podium */}
          <div className="rounded-2xl glass-panel p-4 sm:p-5 border border-black/10 dark:border-white/10 shadow-sm hover:border-amber-500/30 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <Trophy className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono text-amber-500 font-semibold">2nd Place</span>
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
                College Hackathon Winner
              </h3>
              <p className="text-xs font-medium text-amber-600 dark:text-amber-400">
                Helpify Platform
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 line-clamp-2">
                Crowdsourced emergency response application with real-time coordinator alerts.
              </p>
            </div>
            <div className="mt-3 pt-2.5 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Runner-up Podium</span>
              <span className="text-amber-500 font-semibold">Awarded</span>
            </div>
          </div>

          {/* Tile 4: Academic Foundation */}
          <div
            onClick={() => handleScrollTo('academics')}
            className="rounded-2xl glass-panel p-4 sm:p-5 border border-black/10 dark:border-white/10 shadow-sm hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono text-cyan-500 font-semibold flex items-center gap-1">
                  View Academics <ChevronRight className="w-3 h-3" />
                </span>
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                MCA & BCA Graduate
              </h3>
              <p className="text-xs font-medium text-cyan-600 dark:text-cyan-400">
                Teerthanker Mahaveer University
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 line-clamp-2">
                Data structures, distributed systems, algorithms, and database design.
              </p>
            </div>
            <div className="mt-3 pt-2.5 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Moradabad, UP</span>
              <span className="text-cyan-500 font-semibold">Explore Section</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
