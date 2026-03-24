import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand Col */}
            <div className="col-span-1 lg:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-6">
                <img src="/WhatsApp%20Image%202026-03-24%20at%2011.06.52%20PM.jpeg" alt="Panther X Vision Logo" className="h-[48px] w-auto object-contain" />
              </Link>
              <p className="text-gray-400 mb-6 leading-relaxed">
                - Growing
              business growth through data-driven digital marketing strategies and state-of-the-art web solutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Links Col */}
            <div>
              <h4 className="text-white font-bold mb-6">Services</h4>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Social Media Management</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">SEO Optimization</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Graphics Designing</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Meta & Google Ads</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Web Development</a></li>
              </ul>
            </div>

            {/* Company Col */}
            <div>
              <h4 className="text-white font-bold mb-6">Company</h4>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-purple-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Our Work</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            {/* Contact Col */}
            <div>
              <h4 className="text-white font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                  <span>123 Market St, Suite 400<br/>San Francisco, CA 94105</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-purple-500 shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-500 shrink-0" />
                  <span>hello@pantherxvision.com</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Panther X Vision. All rights reserved.
            </p>
            <div className="text-sm text-gray-500 flex items-center gap-2">
              Designed for Growth <span className="text-purple-500">✦</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
