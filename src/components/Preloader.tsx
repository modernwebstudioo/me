'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    // Elegant 1.5 second loading
    const timer = setTimeout(() => {
      setLoading(false);
      // Wait for fade transition to finish before unmounting (800ms fade)
      setTimeout(() => setMounted(false), 800);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex flex-col items-center">
        {/* Minimal Pulse Logo */}
        <div className="flex items-center gap-2 mb-8 mt-[-10vh] animate-pulse">
          <span className="text-4xl sm:text-5xl font-black tracking-tighter">
            <span className="text-gray-900">Panther</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mx-1">X</span>
            <span className="text-gray-900">Vision</span>
          </span>
        </div>

        {/* Delicate Loading Bar */}
        <div className="w-32 h-[3px] bg-purple-50 rounded-full overflow-hidden relative">
          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-purple-600 to-indigo-600 origin-left animate-[preloader-progress_1.5s_cubic-bezier(0.16,1,0.3,1)_forwards]"></div>
        </div>
      </div>
    </div>
  );
}
