import React, { useState } from 'react';
import {
  Play,
  RotateCcw,
  Sliders,
  Terminal as TerminalIcon,
  CheckCircle2,
  Cpu,
  Layers,
  Server,
  Cloud,
  Film,
  ShoppingBag,
  Radio,
  Zap,
} from 'lucide-react';
import { Project } from '../types';

interface InteractivePipelineSimulatorProps {
  onOpenCaseStudy: (project: Project) => void;
  featuredProject: Project;
}

type ScenarioType = 'transcode' | 'ecommerce' | 'websocket';

interface LogEntry {
  time: string;
  stage: string;
  message: string;
  type: 'info' | 'success' | 'warn' | 'accent';
}

export const InteractivePipelineSimulator: React.FC<InteractivePipelineSimulatorProps> = ({
  onOpenCaseStudy,
  featuredProject,
}) => {
  const [scenario, setScenario] = useState<ScenarioType>('transcode');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [activeStage, setActiveStage] = useState<number>(0);
  const [workerCount, setWorkerCount] = useState<number>(2);
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      time: '00:00.00',
      stage: 'INIT',
      message: 'System idle. Select a pipeline scenario and click Dispatch Job.',
      type: 'info',
    },
  ]);

  const stagesMap = {
    transcode: [
      { name: 'Client Ingest', sub: 'MP4 1080p', icon: Film },
      { name: 'API Gateway', sub: 'Rate Limit 200/m', icon: Server },
      { name: 'BullMQ Queue', sub: 'Redis Backpressure', icon: Layers },
      { name: 'FFmpeg Workers', sub: `${workerCount} Nodes Active`, icon: Cpu },
      { name: 'Cloudinary CDN', sub: 'Multi-Bitrate Edge', icon: Cloud },
    ],
    ecommerce: [
      { name: 'Storefront Cart', sub: 'Redux State', icon: ShoppingBag },
      { name: 'Auth Gateway', sub: 'JWT Verified', icon: Server },
      { name: 'Razorpay Flow', sub: 'HMAC Signature', icon: Zap },
      { name: 'MongoDB Engine', sub: 'Atomic Stock Dec', icon: Layers },
      { name: 'Order Confirmed', sub: 'Invoice Dispatched', icon: CheckCircle2 },
    ],
    websocket: [
      { name: 'Browser Client', sub: 'Socket.IO Room', icon: Radio },
      { name: 'Signaling Proxy', sub: 'Reverse WebSocket', icon: Server },
      { name: 'Redis Pub/Sub', sub: 'Channel Broadcast', icon: Layers },
      { name: 'Worker Cluster', sub: 'Telemetry Tick', icon: Cpu },
      { name: 'Real-Time Sync', sub: '<2ms Sub-Second', icon: Zap },
    ],
  };

  const currentStages = stagesMap[scenario];

  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setProgress(0);
    setActiveStage(0);

    const baseLogs: Record<ScenarioType, Omit<LogEntry, 'time'>[]> = {
      transcode: [
        { stage: 'INGRESS', message: 'Client initiated chunked video upload (142MB MP4)', type: 'info' },
        { stage: 'GATEWAY', message: 'API Gateway validated JWT & payload signature (<8ms)', type: 'info' },
        { stage: 'BULLMQ', message: `Job #8491 enqueued to Redis BullMQ with concurrency=${workerCount}`, type: 'accent' },
        { stage: 'WORKER', message: `Worker pool spawned FFmpeg child process. Transcoding into 1080p, 720p, 360p`, type: 'info' },
        { stage: 'TELEMETRY', message: 'Socket.IO emitted 100% transcoding telemetry tick to client room', type: 'accent' },
        { stage: 'EGRESS', message: 'Cloudinary CDN finalized multi-bitrate delivery URL. Job SUCCESS', type: 'success' },
      ],
      ecommerce: [
        { stage: 'CHECKOUT', message: 'Customer initiated checkout with 3 line items', type: 'info' },
        { stage: 'AUTH', message: 'JWT claims decoded: role=Customer, session verified', type: 'info' },
        { stage: 'PAYMENT', message: 'Razorpay webhook signature verified with HMAC SHA256', type: 'accent' },
        { stage: 'DATABASE', message: 'MongoDB atomic findOneAndUpdate executed: stock decremented', type: 'info' },
        { stage: 'FULFILL', message: 'Order #ORD-9821 transitioned to Confirmed. Status broadcast live', type: 'success' },
      ],
      websocket: [
        { stage: 'CONNECT', message: 'Client socket handshake upgraded to WebSocket (HTTP 101)', type: 'info' },
        { stage: 'ROUTER', message: 'Socket room subscribed: room:job:transcode:8491', type: 'info' },
        { stage: 'REDIS', message: 'Redis Pub/Sub channel received live progress payload', type: 'accent' },
        { stage: 'DISPATCH', message: 'Sub-second event routed to active browser socket connection (<3ms latency)', type: 'success' },
      ],
    };

    const scenarioLogs = baseLogs[scenario];
    setLogs([]);

    const duration = Math.max(2400 / workerCount, 1200); // More workers = faster
    const intervalTime = 40;
    const totalSteps = duration / intervalTime;
    let step = 0;

    const interval = setInterval(() => {
      step++;
      const currentProgress = Math.min(Math.round((step / totalSteps) * 100), 100);
      setProgress(currentProgress);

      const stageIndex = Math.min(
        Math.floor((currentProgress / 100) * currentStages.length),
        currentStages.length - 1
      );
      setActiveStage(stageIndex);

      // Add log entries periodically
      const logThreshold = Math.floor(totalSteps / scenarioLogs.length);
      const logIdx = Math.floor(step / logThreshold);
      if (logIdx < scenarioLogs.length) {
        const item = scenarioLogs[logIdx];
        const now = new Date();
        const timeStr = `${String(now.getMinutes()).padStart(2, '0')}:${String(
          now.getSeconds()
        ).padStart(2, '0')}.${String(now.getMilliseconds()).padStart(3, '0').slice(0, 2)}`;

        setLogs((prev) => {
          if (!prev.some((p) => p.message === item.message)) {
            return [...prev.slice(-3), { ...item, time: timeStr }];
          }
          return prev;
        });
      }

      if (step >= totalSteps) {
        clearInterval(interval);
        setIsRunning(false);
        setProgress(100);
      }
    }, intervalTime);
  };

  return (
    <div className="space-y-4">
      {/* Simulation Scenario Switcher & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
          <button
            onClick={() => {
              if (!isRunning) {
                setScenario('transcode');
                setProgress(0);
                setActiveStage(0);
              }
            }}
            className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
              scenario === 'transcode'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Video Transcoder
          </button>
          <button
            onClick={() => {
              if (!isRunning) {
                setScenario('ecommerce');
                setProgress(0);
                setActiveStage(0);
              }
            }}
            className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
              scenario === 'ecommerce'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            E-Commerce
          </button>
          <button
            onClick={() => {
              if (!isRunning) {
                setScenario('websocket');
                setProgress(0);
                setActiveStage(0);
              }
            }}
            className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
              scenario === 'websocket'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            WebSocket
          </button>
        </div>

        {/* Dispatch Trigger Button */}
        <button
          onClick={runSimulation}
          disabled={isRunning}
          className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-bold text-white shadow-md transition-all active:scale-95 ${
            isRunning
              ? 'bg-indigo-500/50 cursor-wait'
              : 'bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-indigo-500/25'
          }`}
        >
          {isRunning ? (
            <>
              <RotateCcw className="w-3.5 h-3.5 animate-spin" />
              <span>Processing {progress}%</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Dispatch Job</span>
            </>
          )}
        </button>
      </div>

      {/* Interactive Visual Pipeline Diagram */}
      <div className="p-4 rounded-2xl bg-slate-900/90 text-white border border-white/10 shadow-inner relative overflow-hidden">
        {/* Animated ambient light sweep while running */}
        {isRunning && (
          <div
            className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent pointer-events-none transition-all duration-75"
            style={{ left: `${progress - 10}%` }}
          />
        )}

        {/* Stages Strip */}
        <div className="grid grid-cols-5 gap-1.5 relative z-10">
          {currentStages.map((stage, idx) => {
            const Icon = stage.icon;
            const isPassed = activeStage > idx || progress === 100;
            const isCurrent = activeStage === idx && isRunning;

            return (
              <div
                key={stage.name}
                className={`p-2 rounded-xl border flex flex-col items-center text-center transition-all duration-200 ${
                  isCurrent
                    ? 'bg-indigo-600/40 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)] scale-105'
                    : isPassed
                    ? 'bg-white/10 border-emerald-500/40 text-emerald-400'
                    : 'bg-white/5 border-white/5 opacity-60'
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-lg flex items-center justify-center mb-1 ${
                    isCurrent
                      ? 'bg-cyan-400 text-slate-900 animate-pulse'
                      : isPassed
                      ? 'bg-emerald-500/20 text-emerald-400'
                      : 'bg-white/10 text-slate-400'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] font-bold text-white truncate max-w-full block">
                  {stage.name}
                </span>
                <span className="text-[8px] font-mono text-slate-400 truncate max-w-full block mt-0.5">
                  {stage.sub}
                </span>
              </div>
            );
          })}
        </div>

        {/* Progress Track Bar */}
        <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mt-3">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Controls & Live Console Ticker */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
        {/* Left: Worker Concurrency Stepper */}
        <div className="sm:col-span-4 p-2.5 rounded-xl glass-panel-subtle border border-black/5 dark:border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300">
            <Sliders className="w-3.5 h-3.5 text-indigo-500" />
            <span className="text-[11px] font-mono">Workers:</span>
          </div>
          <div className="flex items-center gap-1">
            {[1, 2, 4].map((count) => (
              <button
                key={count}
                disabled={isRunning}
                onClick={() => setWorkerCount(count)}
                className={`w-6 h-6 rounded-md text-[10px] font-mono font-bold transition-all ${
                  workerCount === count
                    ? 'bg-indigo-600 text-white'
                    : 'bg-black/5 dark:bg-white/10 text-slate-600 dark:text-slate-400 hover:bg-black/10'
                }`}
              >
                {count}x
              </button>
            ))}
          </div>
        </div>

        {/* Right: Live Telemetry Terminal Box */}
        <div className="sm:col-span-8 p-2.5 rounded-xl bg-slate-950 text-slate-300 border border-white/10 font-mono text-[10px] overflow-hidden">
          <div className="flex items-center gap-1 text-[9px] text-slate-500 uppercase tracking-wider mb-1">
            <TerminalIcon className="w-3 h-3 text-emerald-400" />
            <span>Live Telemetry Stream</span>
            {isRunning && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping ml-auto" />}
          </div>
          <div className="space-y-1 h-12 overflow-hidden flex flex-col justify-end">
            {logs.slice(-2).map((log, idx) => (
              <div key={idx} className="flex items-start gap-1.5 truncate">
                <span className="text-slate-500 flex-shrink-0">[{log.time}]</span>
                <span
                  className={`font-semibold flex-shrink-0 ${
                    log.type === 'success'
                      ? 'text-emerald-400'
                      : log.type === 'accent'
                      ? 'text-cyan-400'
                      : 'text-indigo-400'
                  }`}
                >
                  {log.stage}:
                </span>
                <span className="truncate text-slate-300">{log.message}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Action to Full Case Study */}
      <div className="flex items-center justify-between pt-1">
        <span className="text-[11px] text-slate-500 dark:text-slate-400">
          Want to see the real production architecture?
        </span>
        <button
          onClick={() => onOpenCaseStudy(featuredProject)}
          className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
        >
          <span>View Deep-Dive Breakdown</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
};
