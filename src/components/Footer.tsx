import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 sm:pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="slide-up">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-16">
            
            {/* Brand Col */}
            <div className="col-span-1 lg:col-span-1">
              <Link href="/" className="flex items-center gap-1 mb-6">
                <span className="text-2xl font-extrabold tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Panther</span>
                  <span className="text-white"> X </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Vision</span>
                </span>
              </Link>
              <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                Growing business through data-driven digital marketing strategies and state-of-the-art web solutions.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 rounded-xl bg-gray-800/80 border border-gray-700/50 flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:to-indigo-600 hover:border-transparent hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-xl bg-gray-800/80 border border-gray-700/50 flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:to-indigo-600 hover:border-transparent hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-xl bg-gray-800/80 border border-gray-700/50 flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:to-indigo-600 hover:border-transparent hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-xl bg-gray-800/80 border border-gray-700/50 flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:to-indigo-600 hover:border-transparent hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Links Col */}
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Services</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Social Media Management</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">SEO Optimization</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Graphics Designing</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Meta & Google Ads</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Web Development</a></li>
              </ul>
            </div>

            {/* Company Col */}
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">About Us</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Our Work</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Careers</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            {/* Contact Col */}
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-purple-400" />
                  </div>
                  <span className="text-sm text-gray-400 leading-relaxed">19-C, khyaban-e- Nishat, Ittehad Commercial, D.H.A Phase 6 Defence Housing Authority, Karachi</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-purple-400" />
                  </div>
                  <span className="text-sm text-gray-400">+92 315 0288320</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-purple-400" />
                  </div>
                  <span className="text-sm text-gray-400">pantherxvision786@gmail.com</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Panther X Vision. All rights reserved.
            </p>
            <div className="text-sm text-gray-500 flex items-center gap-2">
              Designed for Growth <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">✦</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
