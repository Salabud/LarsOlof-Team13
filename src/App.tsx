import React, { useState, useEffect } from 'react';
import { LandingPage } from './components/LandingPage';
import { MobileDemo } from './components/MobileDemo';
import { PageMode } from './types';

export function App() {
  const [page, setPage] = useState<PageMode>('landing');

  // Sync with window.location.hash for easy sharing & browser navigation
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#demo') {
        setPage('demo');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setPage('landing');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const openDemo = () => {
    window.location.hash = '#demo';
    setPage('demo');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const backToLanding = () => {
    window.location.hash = '';
    setPage('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full min-h-screen">
      {page === 'landing' ? (
        <LandingPage onOpenDemo={openDemo} />
      ) : (
        <MobileDemo onBackToLanding={backToLanding} />
      )}
    </div>
  );
}

export default App;
