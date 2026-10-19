import React from 'react';

export const IkeaLogo: React.FC<{ className?: string }> = ({ className = "h-7" }) => (
  <div className={`inline-flex items-center justify-center bg-[#0058a3] px-2.5 py-1 rounded-sm shadow-sm select-none ${className}`}>
    <span className="font-black text-[#ffdb00] tracking-tighter text-sm leading-none font-sans" style={{ letterSpacing: '-0.05em' }}>
      IKEA
    </span>
  </div>
);

export const ChalmersLogo: React.FC<{ className?: string }> = ({ className = "h-9 w-9" }) => (
  <img 
    src="/assets/logo.jpg" 
    alt="Chalmers University of Technology" 
    className={`object-contain select-none ${className}`}
  />
);

export const LarsOlofAvatar: React.FC<{ size?: string }> = ({ size = "w-7 h-7" }) => (
  <div className={`relative rounded-full bg-[#ffdb00] flex items-center justify-center shrink-0 border border-amber-300 shadow-sm ${size}`}>
    <svg viewBox="0 0 40 40" className="w-4/5 h-4/5 text-[#111111]" fill="currentColor">
      {/* Cap / Hair */}
      <path d="M12 16 C12 11 16 7 21 7 C26 7 30 11 30 16 C30 17 28 17 25 17 C22 17 18 17 12 16 Z" />
      {/* Face */}
      <circle cx="21" cy="20" r="9" fill="#fcd34d" />
      {/* Eyes */}
      <circle cx="18" cy="19" r="1.5" />
      <circle cx="24" cy="19" r="1.5" />
      {/* Friendly Smile */}
      <path d="M18 23 Q21 26 24 23" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Glasses / Detail */}
      <rect x="15" y="17" width="5.5" height="4" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <rect x="22.5" y="17" width="5.5" height="4" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <line x1="20.5" y1="19" x2="22.5" y2="19" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  </div>
);
