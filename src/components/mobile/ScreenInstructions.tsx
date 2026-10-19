import React, { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp, Check, RotateCw, ExternalLink } from 'lucide-react';
import { LarsOlofAvatar } from '../Logos';

interface ScreenInstructionsProps {
  onComplete: () => void;
}

export const ScreenInstructions: React.FC<ScreenInstructionsProps> = ({ onComplete }) => {
  const [activeStep, setActiveStep] = useState(2);
  const [tightenPercent, setTightenPercent] = useState(40);
  const [showManual, setShowManual] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleTighten = () => {
    setTightenPercent(prev => {
      const next = Math.min(100, prev + 25);
      if (next === 100) setActiveStep(3);
      return next;
    });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#FAF9F6] text-neutral-900 pb-6 px-4">
      {/* Top Header */}
      <div className="flex items-center justify-between py-2 text-[11px] font-semibold tracking-wider text-neutral-500 uppercase">
        <span>04/05 · INSTRUCTIONS</span>
        <span className="text-[10px] bg-neutral-200/80 px-2 py-0.5 rounded text-neutral-700">CONCEPT DEMO</span>
      </div>

      {/* Title & Progress Bar */}
      <div className="mt-2 mb-3">
        <h2 className="text-2xl font-black tracking-tight text-neutral-900">Instructions</h2>
        {/* Progress track */}
        <div className="flex gap-1.5 mt-2">
          <div className="h-1 flex-1 rounded-full bg-[#0058a3]" />
          <div className="h-1 flex-1 rounded-full bg-[#0058a3]" />
          <div className="h-1 flex-1 rounded-full bg-[#0058a3]" />
          <div className="h-1 flex-1 rounded-full bg-neutral-200" />
        </div>
      </div>

      {/* Steps List */}
      <div className="space-y-3.5 flex-1 overflow-y-auto pr-0.5">
        {/* Step 1 */}
        <div 
          onClick={() => setActiveStep(1)}
          className={`p-3 rounded-2xl border transition-all cursor-pointer ${
            activeStep === 1 ? 'bg-white border-[#0058a3]/40 shadow-sm' : 'bg-white/60 border-neutral-200/70'
          }`}
        >
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#ffdb00] text-black font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              1
            </div>
            <div className="flex-1">
              <h4 className="text-xs font-bold text-neutral-900">Empty and inspect</h4>
              <p className="text-[11px] text-neutral-500 mt-0.5 leading-relaxed">
                Open the empty drawer. Check for damaged parts.
              </p>
            </div>
            {tightenPercent > 0 && (
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
            )}
          </div>
        </div>

        {/* Step 2: Interactive Hold, then turn */}
        <div 
          onClick={() => setActiveStep(2)}
          className={`p-3 rounded-2xl border transition-all cursor-pointer ${
            activeStep === 2 ? 'bg-white border-[#0058a3] shadow-md ring-2 ring-[#0058a3]/10' : 'bg-white/60 border-neutral-200/70'
          }`}
        >
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#ffdb00] text-black font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              2
            </div>
            <div className="flex-1">
              <h4 className="text-xs font-bold text-neutral-900">Hold, then turn</h4>
              <p className="text-[11px] text-neutral-500 mt-0.5 leading-relaxed">
                Hold the knob. Use the screwdriver to turn the inside screw clockwise until snug.
              </p>

              {/* Interactive screwdriver tightening control */}
              <div className="mt-3 bg-neutral-50 p-2.5 rounded-xl border border-neutral-200/80 space-y-2">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="font-semibold text-neutral-700">Screw tightness:</span>
                  <span className={`font-bold ${tightenPercent === 100 ? 'text-emerald-600' : 'text-[#0058a3]'}`}>
                    {tightenPercent}% {tightenPercent === 100 && '(Snug)'}
                  </span>
                </div>
                {/* Tightness Bar */}
                <div className="w-full bg-neutral-200 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-emerald-500 h-full transition-all duration-300" 
                    style={{ width: `${tightenPercent}%` }} 
                  />
                </div>
                {tightenPercent < 100 ? (
                  <button
                    onClick={(e) => { e.stopPropagation(); handleTighten(); }}
                    className="w-full mt-1 bg-[#0058a3] hover:bg-[#004785] text-white text-[11px] font-semibold py-1.5 px-3 rounded-lg flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-xs"
                  >
                    <RotateCw className="w-3.5 h-3.5 animate-spin-slow" />
                    <span>Turn screwdriver clockwise ↻</span>
                  </button>
                ) : (
                  <div className="flex items-center justify-center gap-1 text-[11px] text-emerald-700 font-bold py-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>Screw is securely tightened!</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: Gently test */}
        <div 
          onClick={() => setActiveStep(3)}
          className={`p-3 rounded-2xl border transition-all cursor-pointer ${
            activeStep === 3 ? 'bg-white border-[#0058a3] shadow-md ring-2 ring-[#0058a3]/10' : 'bg-white/60 border-neutral-200/70'
          }`}
        >
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#ffdb00] text-black font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              3
            </div>
            <div className="flex-1">
              <h4 className="text-xs font-bold text-neutral-900">Gently test</h4>
              <p className="text-[11px] text-neutral-500 mt-0.5 leading-relaxed">
                Pull the knob gently. Open and close the drawer.
              </p>

              {/* Drawer test simulation */}
              {activeStep === 3 && (
                <div className="mt-2.5 pt-2 border-t border-neutral-100 flex items-center justify-between">
                  <button
                    onClick={(e) => { e.stopPropagation(); setDrawerOpen(!drawerOpen); }}
                    className="text-[10px] bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-semibold px-2.5 py-1 rounded-md border border-neutral-200 transition-colors"
                  >
                    {drawerOpen ? 'Close drawer ◀' : 'Test pull drawer ▶'}
                  </button>
                  <span className="text-[10px] text-neutral-500">
                    {drawerOpen ? '✓ Slides smooth & firm' : 'Ready to test'}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Expandable HEMNES instructions */}
        <div className="border border-neutral-200/80 bg-white rounded-xl overflow-hidden">
          <button
            onClick={() => setShowManual(!showManual)}
            className="w-full p-2.5 px-3 flex items-center justify-between text-[11px] font-semibold text-neutral-700 hover:bg-neutral-50 transition-colors"
          >
            <span>Complete HEMNES instructions</span>
            {showManual ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
          {showManual && (
            <div className="p-3 pt-0 text-[10px] text-neutral-500 space-y-1.5 border-t border-neutral-100">
              <p>• Screw type: M4 flat head furniture bolt (22mm).</p>
              <p>• Knob model: HEMNES Black matte / Brushed steel knob.</p>
              <p>• Torque specification: Hand-tight only (approx. 1.2 Nm).</p>
            </div>
          )}
        </div>

        {/* Lars-Olof Coach Tip Box */}
        <div className="bg-[#e8f4fd] rounded-xl p-3 flex items-start gap-2.5 border border-sky-100">
          <LarsOlofAvatar size="w-7 h-7" />
          <div>
            <span className="text-[11px] font-bold text-neutral-900 block">
              Lars-Olof <span className="text-neutral-500 font-normal">· Your repair coach</span>
            </span>
            <p className="text-[10px] text-neutral-700 mt-0.5 leading-relaxed">
              Don&apos;t force the screw. Turning too much can risk breaking the wood.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom CTA Button */}
      <div className="pt-3">
        <button
          onClick={onComplete}
          className="w-full bg-[#0058a3] hover:bg-[#004785] active:scale-[0.98] text-white font-semibold text-xs py-3 rounded-full flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
        >
          <span>The knob feels secure</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
