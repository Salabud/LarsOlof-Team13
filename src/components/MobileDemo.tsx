import React, { useState } from 'react';
import { 
  ArrowLeft, 
  RotateCcw, 
  Smartphone, 
  LayoutGrid, 
  ChevronRight, 
  CheckCircle2
} from 'lucide-react';
import { PhoneFrame } from './PhoneFrame';
import { ScreenHome } from './mobile/ScreenHome';
import { ScreenCamera } from './mobile/ScreenCamera';
import { ScreenPhotoReview } from './mobile/ScreenPhotoReview';
import { ScreenAnalysis } from './mobile/ScreenAnalysis';
import { ScreenDiagnosis } from './mobile/ScreenDiagnosis';
import { ScreenInstructions } from './mobile/ScreenInstructions';
import { ScreenComplete } from './mobile/ScreenComplete';
import { MobileScreenId } from '../types';
import { IkeaLogo, LarsOlofAvatar } from './Logos';

interface MobileDemoProps {
  onBackToLanding: () => void;
}

const SCREENS: { id: MobileScreenId; step: string; label: string; desc: string }[] = [
  { id: 'home', step: '00', label: 'Home & Tips', desc: 'Browse repair guides or start photo diagnosis' },
  { id: 'camera', step: '01', label: 'Camera Viewfinder', desc: 'Scan the broken furniture part' },
  { id: 'photo', step: '02', label: 'Photo & Details', desc: 'Confirm IKEA model and describe symptom' },
  { id: 'analysis', step: '03', label: 'AI Analysis', desc: 'Computer vision identifies part and solution' },
  { id: 'diagnosis', step: '04', label: 'Diagnosis & Prep', desc: 'Overview of time, tools, parts, and cost' },
  { id: 'instructions', step: '05', label: 'Instructions', desc: 'Step-by-step guidance with interactive torque' },
  { id: 'complete', step: '06', label: 'Repair Complete', desc: 'Confirmation, final check and IKEA support' },
];

export const MobileDemo: React.FC<MobileDemoProps> = ({ onBackToLanding }) => {
  const [currentScreen, setCurrentScreen] = useState<MobileScreenId>('home');
  const [viewMode, setViewMode] = useState<'interactive' | 'overview'>('interactive');

  // Screen rendering helper for any screen ID
  const renderScreenContent = (screenId: MobileScreenId) => {
    switch (screenId) {
      case 'home':
        return (
          <ScreenHome
            onStartCamera={() => setCurrentScreen('camera')}
            onSelectGuide={() => setCurrentScreen('diagnosis')}
          />
        );
      case 'camera':
        return (
          <ScreenCamera
            onCapture={() => setCurrentScreen('photo')}
            onCancel={() => setCurrentScreen('home')}
          />
        );
      case 'photo':
        return (
          <ScreenPhotoReview
            onDiagnose={() => setCurrentScreen('analysis')}
            onRetake={() => setCurrentScreen('camera')}
          />
        );
      case 'analysis':
        return (
          <ScreenAnalysis
            onComplete={() => setCurrentScreen('diagnosis')}
          />
        );
      case 'diagnosis':
        return (
          <ScreenDiagnosis
            onStartRepair={() => setCurrentScreen('instructions')}
          />
        );
      case 'instructions':
        return (
          <ScreenInstructions
            onComplete={() => setCurrentScreen('complete')}
          />
        );
      case 'complete':
        return (
          <ScreenComplete
            onRestart={() => setCurrentScreen('home')}
            onExitToLanding={onBackToLanding}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#14181d] text-white flex flex-col font-sans selection:bg-[#ffdb00] selection:text-black">
      {/* Top Demo Bar */}
      <header className="sticky top-0 z-50 bg-[#14181d]/90 backdrop-blur-md border-b border-white/10 px-4 lg:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          {/* Back button & Brand */}
          <div className="flex items-center gap-4">
            <button
              onClick={onBackToLanding}
              className="inline-flex items-center gap-2 text-xs font-semibold bg-white/10 hover:bg-white/20 active:scale-95 text-white px-3.5 py-2 rounded-full transition-all border border-white/10"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Landing Page</span>
            </button>

            <div className="hidden sm:flex items-center gap-2.5 pl-2 border-l border-white/10">
              <IkeaLogo className="h-5" />
              <span className="text-sm font-semibold tracking-tight text-white/90">
                Lars-Olof <span className="text-white/50 font-normal">· Concept Mobile App</span>
              </span>
            </div>
          </div>

          {/* View Mode Toggle: Interactive Phone vs All Screens Overview */}
          <div className="flex items-center bg-black/40 p-1 rounded-full border border-white/10">
            <button
              onClick={() => setViewMode('interactive')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                viewMode === 'interactive'
                  ? 'bg-[#0058a3] text-white shadow-sm font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Interactive Phone</span>
            </button>

            <button
              onClick={() => setViewMode('overview')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                viewMode === 'overview'
                  ? 'bg-[#0058a3] text-white shadow-sm font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>All Screens Side-by-Side</span>
            </button>
          </div>

          {/* Reset Demo button */}
          <button
            onClick={() => setCurrentScreen('home')}
            className="hidden md:inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
            title="Reset to Screen 00"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Demo</span>
          </button>
        </div>
      </header>

      {/* Screen Steps Jump Bar */}
      <div className="bg-[#1a2129] border-b border-white/5 px-4 py-2.5 overflow-x-auto scrollbar-thin">
        <div className="max-w-7xl mx-auto flex items-center justify-start lg:justify-center gap-2 min-w-max">
          {SCREENS.map((s, idx) => {
            const isActive = currentScreen === s.id;
            return (
              <button
                key={s.id}
                onClick={() => {
                  setCurrentScreen(s.id);
                  if (viewMode === 'overview') setViewMode('interactive');
                }}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-all ${
                  isActive
                    ? 'bg-[#ffdb00] text-black font-bold shadow-md'
                    : 'bg-white/5 hover:bg-white/10 text-neutral-300'
                }`}
              >
                <span className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-bold ${
                  isActive ? 'bg-black text-[#ffdb00]' : 'bg-neutral-700 text-neutral-300'
                }`}>
                  {idx}
                </span>
                <span>{s.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8">
        {viewMode === 'interactive' ? (
          /* Centered Interactive Phone */
          <div className="w-full flex items-center justify-center py-4">
            <PhoneFrame>
              {renderScreenContent(currentScreen)}
            </PhoneFrame>
          </div>
        ) : (
          /* All Screens Side-by-Side Overview Mode (matching the Figma picture) */
          <div className="w-full max-w-[100vw] py-6 px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-black text-white">Full Design Artboard Overview</h2>
              <p className="text-sm text-neutral-400 mt-1">
                All 7 mobile screens as presented in the design file. Click any screen to interact with it.
              </p>
            </div>

            {/* Horizontal scroll container with all 7 screens */}
            <div className="flex items-start gap-6 overflow-x-auto pb-8 pt-2 px-4 scrollbar-thin">
              {SCREENS.map((screen, idx) => (
                <div key={screen.id} className="flex flex-col items-center shrink-0">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#ffdb00] text-black font-bold text-xs flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-semibold text-neutral-300">
                      {screen.label}
                    </span>
                  </div>

                  <div 
                    onClick={() => {
                      setCurrentScreen(screen.id);
                      setViewMode('interactive');
                    }}
                    className="cursor-pointer group transform hover:-translate-y-2 transition-all duration-300"
                    title="Click to interact with this screen"
                  >
                    <div className="relative pointer-events-none">
                      <PhoneFrame>
                        {renderScreenContent(screen.id)}
                      </PhoneFrame>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setCurrentScreen(screen.id);
                      setViewMode('interactive');
                    }}
                    className="mt-4 text-xs font-semibold text-[#ffdb00] hover:underline"
                  >
                    Open in Interactive Mode →
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
