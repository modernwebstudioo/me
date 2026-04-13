'use client';

import { ArrowRight, Sparkles, BarChart3, Users, Zap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const stats = [
  { label: 'Client Satisfaction', value: '98%', icon: Users },
  { label: 'Projects Delivered', value: '150+', icon: BarChart3 },
  { label: 'Growth Rate', value: '3x', icon: Zap },
];

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] py-10 sm:py-14 overflow-hidden flex flex-col items-center justify-center">
      {/* Background — layered radial glows */}
      <div className="absolute inset-0 -z-10 bg-white">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[120vw] max-w-[1400px] h-[600px] sm:h-[700px] bg-purple-100/50 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute right-0 bottom-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-indigo-100/40 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute left-0 bottom-1/4 w-[300px] h-[300px] bg-fuchsia-100/30 rounded-full blur-[100px] pointer-events-none"></div>
        
        {/* Central glowing orb for text backdrop */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-r from-purple-200/40 via-indigo-200/40 to-purple-200/40 rounded-full blur-[100px] pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto relative">
          
          {/* Floating Card 1 — Stats card */}
          <div className="hidden lg:flex absolute -left-20 xl:-left-28 top-4 flex-col gap-3 p-5 bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl shadow-purple-500/5 border border-purple-100/60 animate-float" style={{ '--float-rotate': '-4deg' } as React.CSSProperties}>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-white" />
              </div>
              <span className="text-xs font-semibold text-gray-700">ROI Growth</span>
            </div>
            <div className="h-2 w-24 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full w-[95%] bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full animate-grow-bar" style={{ '--bar-width': '95%' } as React.CSSProperties}></div>
            </div>
            <div className="h-2 w-20 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full w-[75%] bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full animate-grow-bar" style={{ '--bar-width': '75%', animationDelay: '0.3s' } as React.CSSProperties}></div>
            </div>
            <span className="text-[10px] text-gray-400 font-medium">+95% this quarter</span>
          </div>
          
          {/* Floating Card 2 — Social proof */}
          <div className="hidden lg:flex absolute -right-12 xl:-right-20 top-16 flex-row items-center gap-3 p-4 bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl shadow-purple-500/5 border border-purple-100/60 animate-float-delayed" style={{ '--float-rotate': '5deg' } as React.CSSProperties}>
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-md">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-sm font-bold text-gray-800">150+</div>
              <div className="text-[10px] text-gray-400 font-medium">Happy Clients</div>
            </div>
          </div>

          {/* Floating Card 3 — bottom left */}
          <div className="hidden xl:flex absolute -left-8 bottom-8 flex-row items-center gap-2 px-4 py-3 bg-white/90 backdrop-blur-lg rounded-full shadow-lg shadow-purple-500/5 border border-purple-100/60 animate-float-slow">
            <div className="flex -space-x-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-400 to-violet-500 border-2 border-white flex items-center justify-center text-[8px] text-white font-bold">TK</div>
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 border-2 border-white flex items-center justify-center text-[8px] text-white font-bold">MN</div>
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 border-2 border-white flex items-center justify-center text-[8px] text-white font-bold">FJ</div>
            </div>
            <span className="text-[11px] text-gray-500 font-medium">Our expert team</span>
          </div>

          {/* Badge */}
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-50/80 backdrop-blur-sm border border-purple-100 text-purple-700 font-medium text-sm mb-6 sm:mb-8 shadow-sm animate-pulse-glow">
              <Sparkles className="w-4 h-4" />
              <span>Digital Marketing Excellence</span>
            </div>
          </ScrollReveal>
          
          {/* Main heading */}
          <ScrollReveal animation="fade-up" delay={200}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6 sm:mb-8 tracking-tighter leading-[1.1]">
              Elevate your brand <br className="hidden sm:block"/>
              with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-600 animate-gradient-text drop-shadow-sm">
                Panther X Vision.
              </span>
            </h1>
          </ScrollReveal>
          
          {/* Subheading */}
          <ScrollReveal animation="fade-up" delay={300}>
            <p className="text-base sm:text-lg md:text-xl text-gray-500 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
              Unlock instant growth and seamless reach with our data-driven digital marketing strategies. Designed to respond intelligently to your business needs.
            </p>
          </ScrollReveal>
          
          {/* CTA buttons */}
          <ScrollReveal animation="fade-up" delay={400}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full hover:from-purple-700 hover:to-indigo-700 transition-all w-full sm:w-auto shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-0.5 active:translate-y-0">
                Start Your Journey <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#services" className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-gray-700 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:border-purple-200 transition-all w-full sm:w-auto shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0">
                Explore Services
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats strip */}
        <ScrollReveal animation="fade-up" delay={550}>
          <div className="mt-16 sm:mt-20 max-w-2xl mx-auto">
            <div className="grid grid-cols-3 divide-x divide-gray-100">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="text-center px-2 sm:px-6 py-3">
                    <div className="flex justify-center mb-2">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-purple-50 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-purple-600" />
                      </div>
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-[10px] sm:text-xs text-gray-400 font-medium mt-0.5">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
