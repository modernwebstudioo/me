import { ArrowRight, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] py-14 overflow-hidden flex flex-col items-center justify-center">
      {/* Background Gradients - White to light purple with blur */}
      <div className="absolute inset-0 -z-10 bg-white">
        {/* Soft, large purple radial gradient at the top center */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[100vw] max-w-[1200px] h-[700px] bg-purple-200/50 rounded-full blur-[120px] pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto relative">
          
          {/* Floating UI Element 1 */}
          <div className="hidden lg:flex absolute -left-12 top-10 flex-col gap-2 p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/40 rotate-[-4deg] animate-[bounce_4s_infinite]">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold mb-1">95%</div>
            <div className="h-2 w-20 bg-gray-200 rounded-full"></div>
            <div className="h-2 w-12 bg-gray-200 rounded-full"></div>
          </div>
          
          {/* Floating UI Element 2 */}
          <div className="hidden lg:flex absolute -right-4 top-24 flex-row items-center gap-3 p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/40 rotate-[6deg] animate-[bounce_5s_infinite]">
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">📈</div>
            <div>
              <div className="h-2 w-16 bg-gray-200 rounded-full mb-2"></div>
              <div className="h-2 w-10 bg-gray-200 rounded-full"></div>
            </div>
          </div>

          <ScrollReveal animation="fade-up" delay={100}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-purple-100 text-purple-700 font-medium text-sm mb-8 shadow-sm">
              <Sparkles className="w-4 h-4" />
              <span>Digital Marketing Excellence</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={200}>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight leading-[1.1]">
              Elevate your brand with <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                Panther X Vision.
              </span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={300}>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Unlock instant growth and seamless reach with our data-driven digital marketing strategies. Designed to respond intelligently to your business needs.
            </p>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-all w-full sm:w-auto hover:shadow-lg hover:-translate-y-0.5">
                Start Your Journey <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#services" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-gray-900 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-all w-full sm:w-auto shadow-sm hover:shadow-md hover:-translate-y-0.5">
                Explore Services
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
