import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, Check, RotateCcw, Home } from 'lucide-react';
import confetti from 'canvas-confetti';
import { LarsOlofAvatar } from '../Logos';

interface ScreenCompleteProps {
  onRestart: () => void;
  onExitToLanding: () => void;
}

export const ScreenComplete: React.FC<ScreenCompleteProps> = ({ onRestart, onExitToLanding }) => {
  useEffect(() => {
    // Launch celebratory confetti
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#0058a3', '#ffdb00', '#22c55e', '#3b82f6']
      });
    } catch {
      // In case canvas-confetti isn't available in some test env
    }
  }, []);

  return (
    <div className="flex-1 flex flex-col bg-[#FAF9F6] text-neutral-900 pb-6 px-4">
      {/* Top Header */}
      <div className="flex items-center justify-between py-2 text-[11px] font-semibold tracking-wider text-neutral-500 uppercase">
        <span>05/05 · COMPLETE</span>
        <span className="text-[10px] bg-neutral-200/80 px-2 py-0.5 rounded text-neutral-700">CONCEPT DEMO</span>
      </div>

      {/* Title & Subtitle */}
      <div className="mt-2 mb-4">
        <h2 className="text-2xl font-black tracking-tight text-neutral-900">Repair complete</h2>
        <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
          Your simple HEMNES repair is complete. A small fix can make a useful difference.
        </p>
      </div>

      {/* Green Success Banner */}
      <div className="mb-5 bg-[#eaf7ed] border border-emerald-200/80 rounded-2xl p-4 flex items-center gap-3.5 shadow-xs">
        <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm">
          <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-emerald-950">Knob secure. Drawer working.</h4>
          <p className="text-[11px] text-emerald-700 mt-0.5">HEMNES bedside table ready to use!</p>
        </div>
      </div>

      {/* The Final Check List */}
      <div className="space-y-3.5 flex-1">
        <div className="bg-white rounded-2xl p-4 border border-neutral-200/80 shadow-xs space-y-3">
          <span className="text-[11px] font-bold tracking-wider text-neutral-500 uppercase block">
            The final check
          </span>

          <div className="space-y-2.5 text-xs text-neutral-800">
            <div className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span className="font-medium">The knob no longer wobbles.</span>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span className="font-medium">The drawer opens and closes normally.</span>
            </div>
          </div>
        </div>

        {/* Coach tip box */}
        <div className="bg-[#e8f4fd] rounded-xl p-3 flex items-start gap-2.5 border border-sky-100">
          <LarsOlofAvatar size="w-7 h-7" />
          <div>
            <span className="text-[11px] font-bold text-neutral-900 block">
              Lars-Olof <span className="text-neutral-500 font-normal">· Your repair coach</span>
            </span>
            <p className="text-[10px] text-neutral-600 mt-0.5 leading-relaxed">
              Check after a few uses. If the problem returns, contact IKEA support.
            </p>
          </div>
        </div>

        {/* Support Link */}
        <div className="text-center pt-1">
          <a 
            href="#support" 
            onClick={(e) => { e.preventDefault(); alert("IKEA Support Hotline: Contact 0775-700 500 or visit ikea.com/parts for free replacement screws & fittings!"); }}
            className="text-[11px] text-[#0058a3] hover:underline font-semibold"
          >
            Still having trouble? Find support
          </a>
        </div>
      </div>

      {/* Bottom CTA Button */}
      <div className="pt-3 space-y-2">
        <button
          onClick={onExitToLanding}
          className="w-full bg-[#0058a3] hover:bg-[#004785] active:scale-[0.98] text-white font-semibold text-xs py-3 rounded-full flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
        >
          <span>Finish the demo</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={onRestart}
          className="w-full bg-white hover:bg-neutral-100 border border-neutral-300 text-neutral-700 font-medium text-xs py-2 rounded-full flex items-center justify-center gap-1.5 transition-colors"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Try demo again from start</span>
        </button>
      </div>
    </div>
  );
};
