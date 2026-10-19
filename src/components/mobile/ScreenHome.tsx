import React, { useState } from 'react';
import { Search, Camera, ArrowRight, Wrench, Sparkles } from 'lucide-react';
import { LarsOlofAvatar } from '../Logos';

interface ScreenHomeProps {
  onStartCamera: () => void;
  onSelectGuide: () => void;
}

export const ScreenHome: React.FC<ScreenHomeProps> = ({ onStartCamera, onSelectGuide }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="flex-1 flex flex-col bg-[#FAF9F6] text-neutral-900 pb-6 px-4">
      {/* Top Header */}
      <div className="flex items-center justify-between py-2 text-[11px] font-semibold tracking-wider text-neutral-500 uppercase">
        <span>00/05 · HOME</span>
        <span className="text-[10px] bg-neutral-200/80 px-2 py-0.5 rounded text-neutral-700">CONCEPT DEMO</span>
      </div>

      {/* Main Title */}
      <div className="mt-2 mb-4">
        <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 flex items-center justify-between">
          <span>Lars-Olof</span>
          <LarsOlofAvatar size="w-8 h-8" />
        </h1>
        <p className="text-xs text-neutral-500 mt-0.5">Your IKEA Smart Repair Coach</p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-5">
        <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a product (e.g. HEMNES)"
          className="w-full bg-white border border-neutral-200/90 rounded-xl pl-9 pr-4 py-2.5 text-xs text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0058a3]/20 focus:border-[#0058a3] shadow-sm transition-all"
        />
      </div>

      {/* Camera Quick Action Card */}
      <div 
        onClick={onStartCamera}
        className="mb-5 bg-gradient-to-br from-[#0058a3] to-[#003d73] rounded-2xl p-4 text-white shadow-md cursor-pointer hover:shadow-lg transition-all group"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-bold tracking-wider uppercase text-amber-300 flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> Quick AI Diagnosis
          </span>
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Camera className="w-4 h-4 text-white" />
          </div>
        </div>
        <h3 className="text-sm font-bold leading-tight">Got broken furniture?</h3>
        <p className="text-[11px] text-white/80 mt-1 leading-normal">
          Snap a photo and Lars-Olof will identify the parts and guide your repair.
        </p>
        <button className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold bg-[#ffdb00] text-black px-3.5 py-1.5 rounded-full shadow-sm hover:bg-amber-300 transition-colors">
          <span>Open camera</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* IKEA REPAIR TIPS Section */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] font-bold tracking-wider text-neutral-500 uppercase">
          IKEA REPAIR TIPS
        </span>
        <span className="text-[11px] text-[#0058a3] font-medium cursor-pointer">View all</span>
      </div>

      <div className="space-y-3 flex-1">
        {/* Card 1: Replace the screws */}
        <div 
          onClick={onSelectGuide}
          className="bg-white rounded-2xl overflow-hidden border border-neutral-200/90 shadow-sm hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="h-28 overflow-hidden bg-neutral-100 relative">
            <img 
              src="/assets/Tip_image.png" 
              alt="Replace screws" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <span className="absolute top-2 right-2 bg-black/60 backdrop-blur-md text-white text-[9px] font-semibold px-2 py-0.5 rounded-full">
              5 min fix
            </span>
          </div>
          <div className="p-3.5 space-y-1">
            <h4 className="text-xs font-bold text-neutral-900 group-hover:text-[#0058a3] transition-colors">
              Replace the screws
            </h4>
            <p className="text-[11px] text-neutral-500 line-clamp-2 leading-relaxed">
              A simple swap can keep a cabinet stable and extend its life.
            </p>
            <div className="pt-1.5 flex items-center gap-1 text-[11px] font-semibold text-[#0058a3]">
              <span>Read tip</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </div>

        {/* Card 2: Tighten loose joints */}
        <div 
          onClick={onSelectGuide}
          className="bg-white rounded-2xl overflow-hidden border border-neutral-200/90 shadow-sm hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="h-20 overflow-hidden bg-neutral-100 relative">
            <img 
              src="/assets/Tip_image_1.png" 
              alt="Fix loose furniture" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-3 space-y-0.5">
            <h4 className="text-xs font-bold text-neutral-900 group-hover:text-[#0058a3] transition-colors">
              Tighten wobbly joints
            </h4>
            <p className="text-[10px] text-neutral-500">
              Prevent wood splits by tightening joints at the first wobble.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Bottom Navigation Bar */}
      <div className="mt-4 pt-2 border-t border-neutral-200/60 flex items-center justify-around text-neutral-400">
        <button className="flex flex-col items-center gap-1 text-[#0058a3]">
          <span className="text-[10px] font-bold">Home</span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#0058a3]" />
        </button>

        {/* Center Camera Shutter / Trigger */}
        <button 
          onClick={onStartCamera}
          className="w-12 h-12 -mt-4 rounded-full bg-[#0058a3] hover:bg-[#004785] text-white flex items-center justify-center shadow-lg hover:shadow-xl active:scale-95 transition-all border-2 border-white"
          title="Take photo of furniture"
        >
          <Camera className="w-6 h-6" />
        </button>

        <button 
          onClick={onSelectGuide}
          className="flex flex-col items-center gap-1 hover:text-neutral-700 transition-colors"
        >
          <Wrench className="w-4 h-4" />
          <span className="text-[10px] font-medium">Guides</span>
        </button>
      </div>
    </div>
  );
};
