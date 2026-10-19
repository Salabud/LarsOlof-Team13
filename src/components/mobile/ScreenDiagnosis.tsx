import React from 'react';
import { ArrowRight, Clock, Wrench, Package, Tag } from 'lucide-react';
import { LarsOlofAvatar } from '../Logos';

interface ScreenDiagnosisProps {
  onStartRepair: () => void;
}

export const ScreenDiagnosis: React.FC<ScreenDiagnosisProps> = ({ onStartRepair }) => {
  return (
    <div className="flex-1 flex flex-col bg-[#FAF9F6] text-neutral-900 pb-6 px-4">
      {/* Top Header */}
      <div className="flex items-center justify-between py-2 text-[11px] font-semibold tracking-wider text-neutral-500 uppercase">
        <span>03/05 · DIAGNOSIS</span>
        <span className="text-[10px] bg-neutral-200/80 px-2 py-0.5 rounded text-neutral-700">CONCEPT DEMO</span>
      </div>

      {/* Title & Subtitle */}
      <div className="mt-2 mb-4">
        <h2 className="text-xl font-black tracking-tight text-neutral-900">
          Diagnosis: <span className="text-[#0058a3]">Loose screw</span>
        </h2>
        <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
          Tighten the loose knob on your HEMNES bedside table. Here&apos;s what to expect.
        </p>
      </div>

      {/* Yellow Time Estimate Banner */}
      <div className="mb-5 bg-[#ffdb00] rounded-2xl p-4 flex items-center gap-3.5 shadow-sm border border-amber-300">
        <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center shrink-0">
          <Clock className="w-5 h-5 text-neutral-950" />
        </div>
        <div>
          <span className="text-2xl font-black text-neutral-950 tracking-tight block">
            5–10 minutes
          </span>
          <span className="text-[11px] font-medium text-neutral-800">
            A quick, beginner-friendly repair
          </span>
        </div>
      </div>

      {/* Tool & Cost Checklist */}
      <div className="space-y-3.5 flex-1">
        {/* Tool item */}
        <div className="flex items-start gap-3.5 p-3 bg-white rounded-xl border border-neutral-200/80 shadow-xs">
          <div className="w-8 h-8 rounded-full bg-[#e8f4fd] text-[#0058a3] flex items-center justify-center shrink-0 mt-0.5">
            <Wrench className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-neutral-900">One cross-head screwdriver</h4>
            <p className="text-[11px] text-neutral-500 mt-0.5 leading-normal">
              Choose a driver that fits the screw snugly.
            </p>
          </div>
        </div>

        {/* Parts item */}
        <div className="flex items-start gap-3.5 p-3 bg-white rounded-xl border border-neutral-200/80 shadow-xs">
          <div className="w-8 h-8 rounded-full bg-[#e8f4fd] text-[#0058a3] flex items-center justify-center shrink-0 mt-0.5">
            <Package className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-neutral-900">No new parts expected</h4>
            <p className="text-[11px] text-neutral-500 mt-0.5 leading-normal">
              Reuse the screw only if it&apos;s undamaged.
            </p>
          </div>
        </div>

        {/* Cost item */}
        <div className="flex items-start gap-3.5 p-3 bg-white rounded-xl border border-neutral-200/80 shadow-xs">
          <div className="w-8 h-8 rounded-full bg-[#e8f4fd] text-[#0058a3] flex items-center justify-center shrink-0 mt-0.5">
            <Tag className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-neutral-900">£0 estimated cost</h4>
            <p className="text-[11px] text-neutral-500 mt-0.5 leading-normal">
              If you have the tool and existing parts are intact.
            </p>
          </div>
        </div>

        {/* Lars-Olof Coach Message */}
        <div className="bg-[#e8f4fd] rounded-xl p-3 flex items-start gap-2.5 border border-sky-100">
          <LarsOlofAvatar size="w-7 h-7" />
          <div>
            <span className="text-[11px] font-bold text-neutral-900 block">
              Lars-Olof <span className="text-neutral-500 font-normal">· Your repair coach</span>
            </span>
            <p className="text-[10px] text-neutral-600 mt-0.5 leading-relaxed">
              Contact IKEA support if any spare part is damaged (screw, hinge bolt etc.)
            </p>
          </div>
        </div>
      </div>

      {/* Bottom CTA Button */}
      <div className="pt-3">
        <button
          onClick={onStartRepair}
          className="w-full bg-[#0058a3] hover:bg-[#004785] active:scale-[0.98] text-white font-semibold text-xs py-3 rounded-full flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
        >
          <span>Start the guided repair</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
