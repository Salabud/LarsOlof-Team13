import React from 'react';
import { Wifi, Battery } from 'lucide-react';

interface PhoneFrameProps {
  children: React.ReactNode;
  activeScreenTitle?: string;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({ children }) => {
  return (
    <div className="relative mx-auto w-[360px] sm:w-[380px] h-[780px] bg-black rounded-[52px] p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] border-[5px] border-neutral-800 ring-1 ring-white/20 select-none flex flex-col shrink-0">
      {/* Side physical buttons (simulated on phone rim) */}
      <div className="absolute -left-[9px] top-28 w-[4px] h-10 bg-neutral-700 rounded-l-md" />
      <div className="absolute -left-[9px] top-42 w-[4px] h-12 bg-neutral-700 rounded-l-md" />
      <div className="absolute -left-[9px] top-58 w-[4px] h-12 bg-neutral-700 rounded-l-md" />
      <div className="absolute -right-[9px] top-36 w-[4px] h-16 bg-neutral-700 rounded-r-md" />

      {/* Screen container */}
      <div className="relative w-full h-full bg-[#FAF9F6] rounded-[42px] overflow-hidden flex flex-col">
        {/* iOS Status Bar */}
        <div className="h-10 pt-2 px-6 flex items-center justify-between text-neutral-900 z-30 shrink-0 text-xs font-semibold">
          <span>9:41</span>
          
          {/* Dynamic Island / Notch */}
          <div className="w-24 h-5 bg-black rounded-full mx-auto" />

          <div className="flex items-center gap-1.5 text-neutral-800">
            <span className="text-[10px] font-bold">5G</span>
            <Wifi className="w-3.5 h-3.5 stroke-[2.5]" />
            <Battery className="w-4 h-4 stroke-[2.5]" />
          </div>
        </div>

        {/* Screen Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden relative flex flex-col">
          {children}
        </div>

        {/* iOS Home Indicator Bar */}
        <div className="h-5 shrink-0 flex items-center justify-center bg-transparent pointer-events-none">
          <div className="w-32 h-1 bg-neutral-400 rounded-full" />
        </div>
      </div>
    </div>
  );
};
