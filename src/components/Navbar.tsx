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
      className={`fixed w-full z-[100] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled || isOpen
          ? 'py-2 bg-white/90 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.04)] border-b border-gray-100/60'
          : 'py-4 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 group z-50">
            <span className="text-xl sm:text-2xl font-black tracking-tight transition-transform duration-300 group-hover:scale-[1.02]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600">Panther</span>
              <span className="text-gray-900 mx-1">X</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Vision</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className={`hidden md:flex items-center gap-1 mx-auto transition-all duration-500 rounded-full ${
            scrolled ? 'px-4 py-2 bg-gray-50/60 ring-1 ring-gray-200/60 backdrop-blur-md' : 'px-0 py-0 bg-transparent ring-0'
          }`}>
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                  activeSection === link.href
                    ? 'text-purple-700 bg-white shadow-sm ring-1 ring-gray-100'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center z-50">
            <Link
              href="#contact"
              className="relative group bg-gray-900 text-white px-7 py-2.5 rounded-full font-semibold text-sm shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 overflow-hidden"
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
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50/80 border border-gray-100/80 shadow-sm hover:bg-white transition-all z-[60]"
            aria-label="Toggle menu"
          >
            <span className={`absolute w-5 h-[2px] bg-gray-900 rounded-full transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`} />
            <span className={`absolute w-5 h-[2px] bg-gray-900 rounded-full transition-all duration-300 ${isOpen ? 'opacity-0 scale-x-0' : 'opacity-100'}`} />
            <span className={`absolute w-5 h-[2px] bg-gray-900 rounded-full transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Standard Sleek Size) */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl border-b border-gray-100/80 shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top ${
          isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
        }`}
      >
        <div className="px-6 py-6 pb-8 space-y-2">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3.5 text-base font-semibold rounded-xl transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                activeSection === link.href
                  ? 'text-purple-700 bg-purple-50'
                  : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50/50'
              }`}
              style={{
                transitionDelay: isOpen ? `${i * 40}ms` : '0ms',
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateY(0)' : 'translateY(-10px)',
              }}
            >
              {link.label}
            </Link>
          ))}
          
          <div
            className="pt-4 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transitionDelay: isOpen ? `${navLinks.length * 40}ms` : '0ms',
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateY(0)' : 'translateY(-10px)',
            }}
          >
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-4 rounded-xl font-bold shadow-lg shadow-purple-500/20 active:scale-95 transition-transform"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
