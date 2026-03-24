'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <img src="/WhatsApp%20Image%202026-03-24%20at%2011.06.52%20PM.jpeg" alt="Panther X Vision Logo" className="h-[48px] w-auto object-contain" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">Services</Link>
            <Link href="#about" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">About</Link>
            <Link href="#contact" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">Contact Us</Link>
            <Link href="#contact" className="bg-gray-900 text-white px-6 py-2.5 rounded-full hover:bg-gray-800 transition-colors font-medium">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-4 space-y-1 shadow-lg">
          <Link 
            href="#services" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md"
          >
            Services
          </Link>
          <Link 
            href="#about" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md"
          >
            About
          </Link>
          <Link 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md"
          >
            Contact Us
          </Link>
          <div className="pt-2">
            <Link 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800 font-medium"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
