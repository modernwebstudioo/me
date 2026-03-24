import { Share2, Search, Palette, Megaphone, MousePointerClick, Code } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const services = [
  {
    title: 'Social Media Management',
    description: 'Build your brand and engage your audience across platforms with data-driven social strategies.',
    icon: Share2,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'SEO Optimization',
    description: 'Improve visibility and rank higher on search engines to drive organic traffic to your site.',
    icon: Search,
    color: 'bg-green-100 text-green-600',
  },
  {
    title: 'Graphics Designing',
    description: 'Stunning visual assets that capture attention and communicate your brand message effectively.',
    icon: Palette,
    color: 'bg-pink-100 text-pink-600',
  },
  {
    title: 'Meta Ads',
    description: 'Targeted advertising campaigns on Facebook and Instagram to maximize your ROI.',
    icon: Megaphone,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    title: 'Google Ads',
    description: 'Reach customers exactly when they are searching for your products or services.',
    icon: MousePointerClick,
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    title: 'Web Development',
    description: 'Fast, responsive, and modern websites tailored to convert visitors into loyal customers.',
    icon: Code,
    color: 'bg-indigo-100 text-indigo-600',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-15 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Smart digital solutions <br className="hidden sm:block" /> for modern businesses.
            </h2>
            <p className="text-lg text-gray-600">
              From targeted ads to complete web experiences, we provide everything you need to dominate the digital landscape.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={index} animation="scale-up" delay={index * 100}>
                <div
                  className="group h-full relative p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-purple-100 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-6 flex items-center text-sm font-semibold text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <span className="ml-1 text-lg group-hover:translate-x-1 transition-transform">→</span>
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
