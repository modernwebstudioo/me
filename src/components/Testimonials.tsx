import { Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Jenkins',
    role: 'CEO, TechStart',
    image: 'https://i.pravatar.cc/150?u=sarah',
    quote: "The team transformed our online presence entirely. Our engagement rates have doubled, and the new design perfectly captures our brand identity. Truly exceptional work.",
    rating: 5,
  },
  {
    name: 'Marcus Chen',
    role: 'Founder, StyleBrand',
    image: 'https://i.pravatar.cc/150?u=marcus',
    quote: "Professional, highly creative, and incredibly effective. They understood our vision from day one and delivered a product that went far beyond our expectations.",
    rating: 5,
  },
  {
    name: 'Emma Davis',
    role: 'Marketing Director, GrowthCo',
    image: 'https://i.pravatar.cc/150?u=emma',
    quote: "Their data-driven approach completely changed how we do marketing. We have seen a 300% increase in qualified leads within just three months of launching.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-15 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xl font-bold tracking-wide text-purple-600 uppercase mb-3">
              Testimonials
            </h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Trusted by forward-thinking <br className="hidden sm:block" /> businesses worldwide.
            </h3>
            <p className="text-lg text-gray-600">
              Don&apos;t just take our word for it. Here is what our amazing clients have to say about working with our team.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} animation="scale-up" delay={index * 150}>
              <div 
                className="bg-gray-50 h-full rounded-3xl p-8 border border-gray-100 hover:shadow-xl hover:border-purple-200 transition-all duration-300 group"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm group-hover:border-purple-200 transition-colors"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

