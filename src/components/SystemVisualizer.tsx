import React, { useState, useEffect } from 'react';
import {
  Server,
  Layers,
  Cpu,
  Database,
  Radio,
  Layout,
  Activity,
  CheckCircle2,
  Play,
  Pause,
} from 'lucide-react';

interface SystemNode {
  id: string;
  name: string;
  category: string;
  status: 'active' | 'synced' | 'processing';
  metrics: string;
  description: string;
  icon: React.ElementType;
  x: number; // percentage coordinates
  y: number;
}

export const SystemVisualizer: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>('gateway');
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [packetTick, setPacketTick] = useState<number>(0);

  // Animated packet ticker
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setPacketTick((prev) => (prev + 1) % 100);
    }, 40);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nodes: SystemNode[] = [
    {
      id: 'client',
      name: 'Client Applications',
      category: 'Frontend & Consumer',
      status: 'active',
      metrics: 'React • WebSockets',
      description: 'Single-page applications & mobile clients maintaining persistent bidirectional Socket.IO channels.',
      icon: Layout,
      x: 10,
      y: 35,
    },
    {
      id: 'gateway',
      name: 'API Gateway',
      category: 'Routing & Security',
      status: 'active',
      metrics: 'Express • Rate Limited',
      description: 'Reverse proxy validating JWT tokens, throttling requests, and dispatching tasks without blocking.',
      icon: Server,
      x: 35,
      y: 35,
    },
    {
      id: 'queue',
      name: 'BullMQ & Redis',
      category: 'Distributed Queue',
      status: 'synced',
      metrics: 'Pub/Sub • In-Memory',
      description: 'Asynchronous message broker orchestrating task persistence, concurrency bounds, and retry schedules.',
      icon: Layers,
      x: 65,
      y: 20,
    },
    {
      id: 'workers',
      name: 'Worker Node Pool',
      category: 'Processing Cluster',
      status: 'processing',
      metrics: 'FFmpeg • Child Process',
      description: 'Isolated background worker processes executing CPU-heavy video encoding and asynchronous jobs.',
      icon: Cpu,
      x: 90,
      y: 35,
    },
    {
      id: 'database',
      name: 'Storage & DB Layer',
      category: 'Persistence & CDN',
      status: 'synced',
      metrics: 'MongoDB • Cloudinary',
      description: 'Indexed transactional collections and global CDN media object stores.',
      icon: Database,
      x: 65,
      y: 55,
    },
    {
      id: 'signaling',
      name: 'Socket Signaling',
      category: 'Real-Time Bridge',
      status: 'active',
      metrics: 'Sub-second Updates',
      description: 'Listens to Redis Pub/Sub events and broadcasts live progress ticks to connected client sockets.',
      icon: Radio,
      x: 35,
      y: 75,
    },
  ];

  const activeNode = nodes.find((n) => n.id === activeNodeId) || nodes[1];

  return (
    <div className="relative w-full rounded-2xl glass-panel p-5 sm:p-6 overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl transition-all duration-300">
      {/* Background ambient gradient glow */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Console Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-black/5 dark:border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-2">
            System Topology Visualizer
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-[11px] font-mono">
            <Activity className="w-3 h-3 animate-pulse" />
            <span>Event Loop: Healthy (&lt;3ms)</span>
          </div>

          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-1.5 rounded-lg text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            title={isPaused ? 'Resume live simulation' : 'Pause simulation'}
            aria-label={isPaused ? 'Resume simulation' : 'Pause simulation'}
          >
            {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Interactive System Canvas */}
      <div className="relative w-full h-64 sm:h-72 rounded-xl bg-slate-900/5 dark:bg-slate-950/50 border border-black/5 dark:border-white/5 overflow-hidden flex items-center justify-center">
        {/* SVG Connection Lines & Data Flow Packets */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <linearGradient id="streamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Lines: Client -> Gateway */}
          <line x1="16%" y1="42%" x2="35%" y2="42%" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.3" />

          {/* Lines: Gateway -> Queue */}
          <path d="M 42% 42% Q 53% 25% 65% 25%" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.3" />

          {/* Lines: Queue -> Workers */}
          <path d="M 75% 25% Q 82% 25% 90% 42%" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.3" />

          {/* Lines: Gateway -> DB */}
          <path d="M 42% 45% Q 53% 60% 65% 60%" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.3" />

          {/* Lines: Signaling -> Client loop */}
          <path d="M 35% 75% Q 20% 70% 16% 50%" fill="none" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
          <path d="M 70% 30% Q 50% 60% 42% 75%" fill="none" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.3" />

          {/* Animated Glowing Packets along paths */}
          {!isPaused && (
            <>
              {/* Packet 1: Client -> Gateway */}
              <circle
                cx={`${16 + ((packetTick % 50) / 50) * 19}%`}
                cy="42%"
                r="3.5"
                fill="#6366f1"
                className="filter drop-shadow-[0_0_6px_#6366f1]"
              />

              {/* Packet 2: Gateway -> Queue */}
              <circle
                cx={`${42 + ((packetTick % 60) / 60) * 23}%`}
                cy={`${42 - ((packetTick % 60) / 60) * 17}%`}
                r="3.5"
                fill="#8b5cf6"
                className="filter drop-shadow-[0_0_6px_#8b5cf6]"
              />

              {/* Packet 3: Queue -> Workers */}
              <circle
                cx={`${72 + (((packetTick + 20) % 50) / 50) * 18}%`}
                cy={`${25 + (((packetTick + 20) % 50) / 50) * 17}%`}
                r="3.5"
                fill="#06b6d4"
                className="filter drop-shadow-[0_0_6px_#06b6d4]"
              />

              {/* Packet 4: Real-time loop back to Client */}
              <circle
                cx={`${35 - ((packetTick % 40) / 40) * 19}%`}
                cy={`${75 - ((packetTick % 40) / 40) * 25}%`}
                r="3.5"
                fill="#10b981"
                className="filter drop-shadow-[0_0_6px_#10b981]"
              />
            </>
          )}
        </svg>

        {/* Render Node Badges */}
        <div className="absolute inset-0 p-4">
          {nodes.map((node) => {
            const Icon = node.icon;
            const isSelected = activeNodeId === node.id;
            return (
              <button
                key={node.id}
                onClick={() => setActiveNodeId(node.id)}
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                className={`absolute group flex flex-col items-center gap-1 p-2 rounded-xl transition-all duration-300 focus:outline-none ${
                  isSelected
                    ? 'scale-110 z-20 ring-2 ring-indigo-500 bg-white/90 dark:bg-slate-900/90 shadow-lg shadow-indigo-500/20'
                    : 'scale-95 hover:scale-105 z-10 bg-white/60 dark:bg-slate-900/60 hover:bg-white dark:hover:bg-slate-800 backdrop-blur-md'
                } border border-black/10 dark:border-white/10`}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-semibold text-slate-800 dark:text-slate-200 whitespace-nowrap">
                  {node.name}
                </span>
                <span className="text-[9px] font-mono text-slate-400 dark:text-slate-500 hidden sm:inline-block">
                  {node.metrics.split('•')[0]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Node Details Box */}
      <div className="mt-4 pt-4 border-t border-black/5 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-900/50">
            <activeNode.icon className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-900 dark:text-white">
                {activeNode.name}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full font-mono bg-black/5 dark:bg-white/10 text-slate-600 dark:text-slate-300">
                {activeNode.category}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
              {activeNode.description}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-center font-mono text-[11px] text-indigo-600 dark:text-indigo-400">
          <span>{activeNode.metrics}</span>
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
        </div>
      </div>
    </div>
  );
};
