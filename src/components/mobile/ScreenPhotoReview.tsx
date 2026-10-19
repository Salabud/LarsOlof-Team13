import React, { useState } from 'react';
import { ArrowRight, Check, Search, AlertCircle, Camera } from 'lucide-react';

interface ScreenPhotoReviewProps {
  onDiagnose: (product: string, problem: string) => void;
  onRetake: () => void;
}

export const ScreenPhotoReview: React.FC<ScreenPhotoReviewProps> = ({ onDiagnose, onRetake }) => {
  const [productName, setProductName] = useState('HEMNES Bedside table, white');
  const [problemDesc, setProblemDesc] = useState('The knob feels loose and spins when opening drawer');

  return (
    <div className="flex-1 flex flex-col bg-[#FAF9F6] text-neutral-900 pb-6 px-4">
      {/* Top Header */}
      <div className="flex items-center justify-between py-2 text-[11px] font-semibold tracking-wider text-neutral-500 uppercase">
        <span>01/05 · PHOTO</span>
        <span className="text-[10px] bg-neutral-200/80 px-2 py-0.5 rounded text-neutral-700">CONCEPT DEMO</span>
      </div>

      {/* Title & Prompt */}
      <div className="mt-2 mb-4">
        <h2 className="text-2xl font-black tracking-tight text-neutral-900">What&apos;s wrong?</h2>
        <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
          Make sure the photo(s) show the product and the broken part.
        </p>
      </div>

      {/* Photo Preview Card */}
      <div className="relative rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm mb-5 group">
        <div className="h-44 w-full bg-neutral-100 overflow-hidden relative">
          <img 
            src="/assets/Home-life_photograph.png" 
            alt="Captured HEMNES bedside table" 
            className="w-full h-full object-cover"
          />
          {/* AI Focus bounding box highlighting the knob */}
          <div className="absolute top-24 left-1/2 -translate-x-1/2 w-14 h-14 border-2 border-amber-400 bg-amber-400/20 rounded-lg flex items-center justify-center animate-pulse">
            <span className="text-[9px] font-bold text-black bg-amber-300 px-1 py-0.2 rounded -mt-14 shadow">
              Loose knob
            </span>
          </div>

          <button 
            onClick={onRetake}
            className="absolute bottom-2 right-2 bg-black/70 hover:bg-black text-white text-[10px] font-medium px-2.5 py-1 rounded-full backdrop-blur-md flex items-center gap-1 transition-colors"
          >
            <Camera className="w-3 h-3" />
            <span>Retake</span>
          </button>
        </div>
        <div className="p-2.5 bg-neutral-50 flex items-center justify-between text-[11px] text-neutral-600">
          <span className="flex items-center gap-1.5 font-medium text-emerald-700">
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            Clear photo captured
          </span>
          <span className="text-neutral-400 text-[10px]">1 photo attached</span>
        </div>
      </div>

      {/* Form Questions */}
      <div className="space-y-4 flex-1">
        {/* Question 1: Product */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-neutral-900 block">
            Do you know what product this is?
          </label>
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Search for products here... (HEMNES)"
              className="w-full bg-white border border-neutral-300/90 rounded-xl pl-8 pr-3 py-2 text-xs font-medium text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0058a3]/20 focus:border-[#0058a3] shadow-xs"
            />
          </div>
          <span className="text-[10px] text-[#0058a3] font-medium block">
            AI detected: HEMNES bedside table (Confidence: 96%)
          </span>
        </div>

        {/* Question 2: Problem Description */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-neutral-900 block">
            Briefly explain the problem:
          </label>
          <textarea
            value={problemDesc}
            onChange={(e) => setProblemDesc(e.target.value)}
            rows={3}
            placeholder="Example: the knob feels loose"
            className="w-full bg-white border border-neutral-300/90 rounded-xl p-3 text-xs text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0058a3]/20 focus:border-[#0058a3] shadow-xs resize-none"
          />
        </div>
      </div>

      {/* Bottom CTA Button */}
      <div className="pt-3">
        <button
          onClick={() => onDiagnose(productName, problemDesc)}
          className="w-full bg-[#0058a3] hover:bg-[#004785] active:scale-[0.98] text-white font-semibold text-xs py-3 rounded-full flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
        >
          <span>Diagnose</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
