import React, { useEffect, useState } from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

interface ScreenAnalysisProps {
  onComplete: () => void;
}

export const ScreenAnalysis: React.FC<ScreenAnalysisProps> = ({ onComplete }) => {
  const [stage, setStage] = useState(0);

  const stages = [
    "Analyzing photo...",
    "Recognizing HEMNES series...",
    "Scanning drawer knob fitting...",
    "Calculating repair route...",
    "Diagnosis ready!"
  ];

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 500);
    const timer2 = setTimeout(() => setStage(2), 1100);
    const timer3 = setTimeout(() => setStage(3), 1700);
    const timer4 = setTimeout(() => setStage(4), 2200);
    const timer5 = setTimeout(() => onComplete(), 2800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onComplete]);

  return (
    <div 
      onClick={onComplete}
      className="flex-1 flex flex-col bg-[#FAF9F6] text-neutral-900 pb-6 px-4 cursor-pointer select-none"
      title="Click to skip to diagnosis"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between py-2 text-[11px] font-semibold tracking-wider text-neutral-500 uppercase">
        <span>02/05 · ANALYSIS</span>
        <span className="text-[10px] bg-neutral-200/80 px-2 py-0.5 rounded text-neutral-700">CONCEPT DEMO</span>
      </div>

      {/* Center AI Pulse Waveform */}
      <div className="flex-1 flex flex-col items-center justify-center -mt-6">
        {/* Animated Pulse Waveform exactly matching the design */}
        <div className="relative w-48 h-24 flex items-center justify-center">
          <svg viewBox="0 0 160 50" className="w-full h-full stroke-neutral-900 fill-none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M 10 25 L 45 25 L 55 10 L 68 40 L 78 18 L 88 32 L 98 25 L 150 25" className="opacity-90">
              <animate 
                attributeName="stroke-dasharray" 
                values="0,200; 200,0; 0,200" 
                dur="1.8s" 
                repeatCount="indefinite" 
              />
            </path>
          </svg>
        </div>

        {/* Status text */}
        <div className="text-center mt-3 space-y-2">
          <h3 className="text-sm font-bold text-neutral-900 tracking-tight flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#0058a3] animate-spin" />
            <span>{stages[stage]}</span>
          </h3>
          <p className="text-[11px] text-neutral-400">
            Tap anywhere to proceed
          </p>
        </div>

        {/* Small step indicators */}
        <div className="flex items-center gap-1.5 mt-8">
          {[0, 1, 2, 3, 4].map((i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i <= stage ? 'w-6 bg-[#0058a3]' : 'w-2 bg-neutral-300'
              }`} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};
