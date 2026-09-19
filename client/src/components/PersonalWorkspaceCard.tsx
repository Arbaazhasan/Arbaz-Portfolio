import React, { useState, useRef } from 'react';
import {
  Trophy,
  Briefcase,
  Code2,
} from 'lucide-react';
import { Project } from '../types';
import { projectsData } from '../data/projectsData';
import { InteractivePipelineSimulator } from './InteractivePipelineSimulator';

interface PersonalWorkspaceCardProps {
  onOpenCaseStudy: (project: Project) => void;
}

export const PersonalWorkspaceCard: React.FC<PersonalWorkspaceCardProps> = ({
  onOpenCaseStudy,
}) => {
  const featuredProject =
    projectsData.find((p) => p.id === 'distributed-media-platform') || projectsData[0];

  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle tilt: max 5 degrees
    const rotateY = ((x - centerX) / centerX) * 5;
    const rotateX = -((y - centerY) / centerY) * 5;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
      }}
      className="relative w-full rounded-3xl glass-panel p-5 sm:p-7 border border-black/10 dark:border-white/10 shadow-2xl overflow-hidden will-change-transform group"
    >
      {/* Specular sheen light following cursor */}
      <div
        className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 via-cyan-500/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />

      {/* Ambient background glows */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Workspace Header Bar */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-black/5 dark:border-white/10 relative z-10">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <span className="text-xs font-mono font-bold tracking-wider text-slate-800 dark:text-slate-200 ml-2">
            ARBAZ HASAN • DIGITAL LAB
          </span>
        </div>

        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 text-[11px] font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Moradabad / Noida, IN</span>
        </div>
      </div>

      {/* Identity Banner */}
      <div className="flex items-center justify-between gap-3 mb-4 p-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 text-white flex items-center justify-center font-bold text-sm shadow-md shadow-indigo-500/25 flex-shrink-0">
            AH
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              Interactive Distributed Lab
              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                LIVE
              </span>
            </h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
              Dispatches simulated telemetry across Arbaz's core technical stack.
            </p>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-emerald-500">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
          <span>Queue Ready</span>
        </div>
      </div>

      {/* The Playable Interactive Pipeline Simulator */}
      <div className="relative z-10 mb-4">
        <InteractivePipelineSimulator
          onOpenCaseStudy={onOpenCaseStudy}
          featuredProject={featuredProject}
        />
      </div>

      {/* Real Track Record Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3 relative z-10">
        <div className="flex items-center gap-2 p-2 rounded-xl glass-panel-subtle text-[11px] text-slate-700 dark:text-slate-300 border border-black/5 dark:border-white/5 truncate">
          <Briefcase className="w-3.5 h-3.5 text-indigo-500 flex-shrink-0" />
          <span className="truncate">Trainee @ <strong>To The New</strong></span>
        </div>

        <div className="flex items-center gap-2 p-2 rounded-xl glass-panel-subtle text-[11px] text-slate-700 dark:text-slate-300 border border-black/5 dark:border-white/5 truncate">
          <Trophy className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
          <span className="truncate">2nd Place Hackathon (Helpify)</span>
        </div>
      </div>

      {/* Card Microcopy Footer */}
      <div className="pt-3 border-t border-black/5 dark:border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400 relative z-10">
        <span className="flex items-center gap-1.5">
          <Code2 className="w-3.5 h-3.5 text-indigo-500" />
          Built with curiosity and real code.
        </span>
        <span className="text-slate-500">Spatial Tilt Active</span>
      </div>
    </div>
  );
};
