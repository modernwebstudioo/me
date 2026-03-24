import { Lightbulb, Target, Rocket, TrendingUp } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const steps = [
  {
    icon: Lightbulb,
    title: 'Discover & Understand',
    description: 'We dive deep into your business goals, target audience, and market landscape to find unique opportunities.',
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    icon: Target,
    title: 'Strategic Planning',
    description: 'We craft a custom blueprint tailored to your needs, ensuring every move aligns with your vision for success.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Rocket,
    title: 'Flawless Execution',
    description: 'Our expert team brings the strategy to life with precision, using the latest tools and creative brilliance.',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: TrendingUp,
    title: 'Growth & Optimization',
    description: 'We continuously monitor performance, refine our approach, and scale the results to maximize your ROI.',
    color: 'bg-green-100 text-green-600',
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-down">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xl font-bold tracking-wide text-purple-600 uppercase mb-3">
              What We Do
            </h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              We simplify the path to <br className="hidden sm:block" /> your digital success.
            </h3>
            <p className="text-lg text-gray-600">
              Our proven four-step process takes the guesswork out of digital growth, ensuring predictable and scalable results for your brand.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <ScrollReveal 
                key={index} 
                animation="fade-up"
                delay={index * 150}
              >
                <div 
                  className="relative h-full bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group"
                >
                  {/* Connection Line */}
                  {index !== steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-8 h-[2px] bg-gray-200 -translate-y-1/2 z-0" />
                  )}
                  
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${step.color} group-hover:-translate-y-1 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {step.description}
                  </p>
                  
                  <div className="absolute top-6 right-6 text-5xl font-black text-gray-50 opacity-50 group-hover:text-purple-50 transition-colors duration-300 pointer-events-none">
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
