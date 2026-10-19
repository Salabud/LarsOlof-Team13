import React, { useState } from 'react';
import { X, Zap, Image, RotateCw, Camera } from 'lucide-react';

interface ScreenCameraProps {
  onCapture: () => void;
  onCancel: () => void;
}

export const ScreenCamera: React.FC<ScreenCameraProps> = ({ onCapture, onCancel }) => {
  const [flashing, setFlashing] = useState(false);
  const [flashEnabled, setFlashEnabled] = useState(false);

  const handleSnap = () => {
    setFlashing(true);
    setTimeout(() => {
      setFlashing(false);
      onCapture();
    }, 350);
  };

  return (
    <div className="relative flex-1 bg-black text-white flex flex-col justify-between overflow-hidden">
      {/* Flash Effect Overlay */}
      {flashing && (
        <div className="absolute inset-0 bg-white z-50 camera-flash pointer-events-none" />
      )}

      {/* Camera Live Viewfinder Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/Home-life_photograph.png"
          alt="Camera viewfinder showing HEMNES bedside table"
          className="w-full h-full object-cover"
        />
        {/* Soft dark vignettes at top and bottom */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/70 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
      </div>

      {/* Top Camera Controls */}
      <div className="relative z-10 p-4 flex items-center justify-between text-white">
        <button 
          onClick={onCancel}
          className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center hover:bg-black/60 transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <span className="text-[11px] font-semibold tracking-wider uppercase bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-white/90">
          Smart Viewfinder
        </span>

        <button 
          onClick={() => setFlashEnabled(!flashEnabled)}
          className={`w-9 h-9 rounded-full backdrop-blur-md flex items-center justify-center transition-colors ${
            flashEnabled ? 'bg-amber-400 text-black' : 'bg-black/40 text-white hover:bg-black/60'
          }`}
        >
          <Zap className="w-4 h-4 fill-current" />
        </button>
      </div>

      {/* Center Target Box: "Place the broken furniture here" */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-6 pointer-events-none">
        <div className="relative w-64 h-72 border-2 border-white/80 rounded-2xl flex flex-col items-center justify-center bg-black/10 backdrop-blur-[1px] shadow-2xl">
          {/* Corner focus brackets */}
          <div className="absolute -top-1 -left-1 w-5 h-5 border-t-4 border-l-4 border-amber-300 rounded-tl" />
          <div className="absolute -top-1 -right-1 w-5 h-5 border-t-4 border-r-4 border-amber-300 rounded-tr" />
          <div className="absolute -bottom-1 -left-1 w-5 h-5 border-b-4 border-l-4 border-amber-300 rounded-bl" />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 border-b-4 border-r-4 border-amber-300 rounded-br" />

          {/* Prompt banner */}
          <div className="bg-black/75 backdrop-blur-md text-white text-xs font-medium px-3.5 py-1.5 rounded-full text-center shadow-lg border border-white/20">
            Place the broken furniture here
          </div>

          {/* Animated focal reticle */}
          <div className="w-16 h-16 border border-amber-400/50 rounded-full mt-4 flex items-center justify-center animate-ping opacity-40" />
        </div>
      </div>

      {/* Bottom Shutter Controls */}
      <div className="relative z-10 px-6 pb-6 pt-3 flex items-center justify-between">
        {/* Photo Library */}
        <button 
          onClick={handleSnap}
          className="w-11 h-11 rounded-xl bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors"
          title="Choose from photo library"
        >
          <Image className="w-5 h-5" />
        </button>

        {/* Circular Shutter Button */}
        <button
          onClick={handleSnap}
          className="w-18 h-18 rounded-full border-4 border-white p-1 flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-xl group"
          title="Take picture"
        >
          <div className="w-14 h-14 rounded-full bg-[#0058a3] group-hover:bg-[#004b8c] border-2 border-white flex items-center justify-center shadow-inner">
            <Camera className="w-6 h-6 text-white" />
          </div>
        </button>

        {/* Flip Camera */}
        <button 
          onClick={handleSnap}
          className="w-11 h-11 rounded-xl bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors"
          title="Flip camera"
        >
          <RotateCw className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
