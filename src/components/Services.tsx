import { Share2, Search, Palette, Megaphone, MousePointerClick, Code } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const services = [
  {
    title: 'Social Media Management',
    description: 'Build your brand and engage your audience across platforms with data-driven social strategies.',
    icon: Share2,
    gradient: 'from-blue-400 to-sky-500',
  },
  {
    title: 'SEO Optimization',
    description: 'Improve visibility and rank higher on search engines to drive organic traffic to your site.',
    icon: Search,
    gradient: 'from-green-400 to-emerald-500',
  },
  {
    title: 'Graphics Designing',
    description: 'Stunning visual assets that capture attention and communicate your brand message effectively.',
    icon: Palette,
    gradient: 'from-pink-400 to-rose-500',
  },
  {
    title: 'Meta Ads',
    description: 'Targeted advertising campaigns on Facebook and Instagram to maximize your ROI.',
    icon: Megaphone,
    gradient: 'from-purple-400 to-violet-500',
  },
  {
    title: 'Google Ads',
    description: 'Reach customers exactly when they are searching for your products or services.',
    icon: MousePointerClick,
    gradient: 'from-amber-400 to-orange-500',
  },
  {
    title: 'Web Development',
    description: 'Fast, responsive, and modern websites tailored to convert visitors into loyal customers.',
    icon: Code,
    gradient: 'from-indigo-400 to-blue-500',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="blur-in">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="inline-block px-5 py-2 rounded-full bg-purple-50 text-purple-600 text-sm font-semibold tracking-wider uppercase mb-6 border border-purple-100">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Smart digital solutions <br className="hidden sm:block" /> for modern businesses.
            </h2>
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
              From targeted ads to complete web experiences, we provide everything you need to dominate the digital landscape.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={index} animation="rotate-in" delay={index * 100}>
                <div
                  className="group h-full relative p-6 sm:p-8 bg-white rounded-2xl sm:rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-purple-100 transition-all duration-500 hover:-translate-y-1"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-6 flex items-center text-sm font-semibold text-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                    Learn more <span className="ml-1 text-lg">→</span>
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
