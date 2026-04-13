'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [phase, setPhase] = useState<'loading' | 'split' | 'done'>('loading');

  useEffect(() => {
    // Show preloader for 1.8 seconds, then trigger split animation
    const timer1 = setTimeout(() => {
      setPhase('split');
    }, 1800);

    // Wait an additional 800ms for split animation before unmounting
    const timer2 = setTimeout(() => {
      setPhase('done');
    }, 2600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (phase === 'done') return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none flex flex-col overflow-hidden">
      {/* Top Half Curtain */}
      <div
        className={`w-full bg-gray-950 transition-all duration-700 ease-[cubic-bezier(0.7,0,0.3,1)] ${
          phase === 'split' ? 'h-0' : 'h-[50vh]'
        }`}
      />
      
      {/* Bottom Half Curtain */}
      <div
        className={`w-full bg-gray-950 transition-all duration-700 ease-[cubic-bezier(0.7,0,0.3,1)] ${
          phase === 'split' ? 'h-0' : 'h-[50vh]'
        }`}
      />

      {/* Center Logo & Loader */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
          phase === 'split' ? 'opacity-0 scale-110 blur-sm' : 'opacity-100 scale-100 blur-0'
        }`}
      >
        <div className="relative overflow-hidden mb-8 h-16 flex items-center px-4">
          <span className="text-4xl md:text-5xl font-black tracking-tight text-white z-10">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 drop-shadow-sm">Panther</span>
            <span className="mx-2">X</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 drop-shadow-sm">Vision</span>
          </span>
          <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer-sweep_2s_infinite]"></div>
        </div>

        {/* Minimal Progress Line */}
        <div className="w-56 h-[2px] bg-gray-800 rounded-full overflow-hidden shadow-sm">
          <div className="w-full h-full bg-gradient-to-r from-purple-500 to-indigo-500 origin-left animate-[preloader-progress_1.8s_cubic-bezier(0.16,1,0.3,1)_forwards]" />
        </div>
      </div>
    </div>
  );
}
