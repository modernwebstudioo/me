import { Lightbulb, Target, Rocket, TrendingUp } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const steps = [
  {
    icon: Lightbulb,
    title: 'Discover & Understand',
    description: 'We dive deep into your business goals, target audience, and market landscape to find unique opportunities.',
    gradient: 'from-amber-400 to-yellow-500',
  },
  {
    icon: Target,
    title: 'Strategic Planning',
    description: 'We craft a custom blueprint tailored to your needs, ensuring every move aligns with your vision for success.',
    gradient: 'from-blue-400 to-indigo-500',
  },
  {
    icon: Rocket,
    title: 'Flawless Execution',
    description: 'Our expert team brings the strategy to life with precision, using the latest tools and creative brilliance.',
    gradient: 'from-purple-400 to-violet-500',
  },
  {
    icon: TrendingUp,
    title: 'Growth & Optimization',
    description: 'We continuously monitor performance, refine our approach, and scale the results to maximize your ROI.',
    gradient: 'from-green-400 to-emerald-500',
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-16 sm:py-28 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="blur-in">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="inline-block px-5 py-2 rounded-full bg-purple-50 text-purple-600 text-sm font-semibold tracking-wider uppercase mb-6 border border-purple-100">
              What We Do
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              We simplify the path to <br className="hidden sm:block" /> your digital success.
            </h3>
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
              Our proven four-step process takes the guesswork out of digital growth, ensuring predictable and scalable results for your brand.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <ScrollReveal 
                key={index} 
                animation="flip-up"
                delay={index * 150}
              >
                <div 
                  className="relative h-full bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 group hover:border-purple-100 hover:-translate-y-1"
                >
                  {/* Connection Line */}
                  {index !== steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-8 h-[2px] bg-gray-200 -translate-y-1/2 z-0" />
                  )}
                  
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h4>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {step.description}
                  </p>
                  
                  <div className="absolute top-6 right-6 text-5xl font-black text-gray-900/[0.03] group-hover:text-purple-600/[0.06] transition-colors duration-500 pointer-events-none">
                    0{index + 1}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
