'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#what-we-do', label: 'About' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#leadership', label: 'Team' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Detect scroll for navbar styles & active section
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);

    const sections = navLinks.map(l => l.href.replace('#', ''));
    let current = '';
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120) {
          current = `#${id}`;
        }
      }
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled || isOpen
          ? 'top-4 w-[95%] max-w-7xl rounded-2xl py-2 px-3 sm:px-6 bg-white/85 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100/80 ring-1 ring-gray-900/5'
          : 'top-0 w-full rounded-none py-6 px-4 sm:px-8 bg-transparent border-transparent ring-0'
      }`}
    >
      <div className="flex justify-between items-center w-full">
        
        {/* Professional Logo */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group z-50">
          <div className={`flex items-center justify-center transition-all duration-500 ${scrolled ? 'w-8 h-8 rounded-lg' : 'w-10 h-10 rounded-xl'} bg-gradient-to-br from-gray-900 to-gray-800 shadow-md shadow-gray-900/20 border border-gray-700/50 relative overflow-hidden group-hover:scale-105`}>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className={`text-white font-black tracking-tighter ${scrolled ? 'text-sm' : 'text-base'}`}>PX</span>
          </div>
          <span className={`font-black tracking-tighter transition-all duration-500 ${scrolled ? 'text-xl' : 'text-2xl'} group-hover:opacity-80`}>
            <span className="text-gray-900">Panther</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">X</span>
            <span className="text-gray-900">Vision</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 mx-auto">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2.5 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 ${
                activeSection === link.href
                  ? 'text-purple-700 bg-purple-50/80'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              {link.label}
              {activeSection === link.href && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-purple-600" />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center z-50">
          <Link
            href="#contact"
            className="relative group bg-gray-900 text-white px-7 py-2.5 rounded-xl font-semibold text-sm shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center gap-2">
              Get Started
            </span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          suppressHydrationWarning
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50/80 border border-gray-100 shadow-sm hover:bg-white transition-all z-[60]"
          aria-label="Toggle menu"
        >
          <span className={`absolute w-5 h-[2px] bg-gray-900 rounded-full transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`} />
          <span className={`absolute w-5 h-[2px] bg-gray-900 rounded-full transition-all duration-300 ${isOpen ? 'opacity-0 scale-x-0' : 'opacity-100'}`} />
          <span className={`absolute w-5 h-[2px] bg-gray-900 rounded-full transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'}`} />
        </button>
      </div>

      {/* Mobile Menu Dropdown Wrapper */}
      <div
        className={`md:hidden absolute top-[calc(100%+8px)] left-0 w-full bg-white/95 backdrop-blur-2xl border border-gray-100/80 shadow-2xl rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top overflow-hidden ${
          isOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-0 pointer-events-none'
        }`}
      >
        <div className="px-4 py-6 pb-6 space-y-1">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-5 py-4 text-base font-semibold rounded-xl transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                activeSection === link.href
                  ? 'text-purple-700 bg-purple-50'
                  : 'text-gray-600 hover:text-purple-600 hover:bg-gray-50'
              }`}
              style={{
                transitionDelay: isOpen ? `${i * 30}ms` : '0ms',
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateY(0)' : 'translateY(-10px)',
              }}
            >
              <div className="flex items-center justify-between">
                <span>{link.label}</span>
                {activeSection === link.href && <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>}
              </div>
            </Link>
          ))}
          
          <div
            className="pt-4 px-2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transitionDelay: isOpen ? `${navLinks.length * 30}ms` : '0ms',
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateY(0)' : 'translateY(-10px)',
            }}
          >
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-gray-900 border border-transparent text-white px-6 py-4 rounded-xl font-bold shadow-lg active:scale-95 transition-all"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
