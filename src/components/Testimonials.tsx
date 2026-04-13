import { Star, Quote } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Maya Kanwal',
    role: 'Owner, Saffron Beauty Salon',
    quote: "Our online presence has completely transformed. Since working with the team, our daily salon bookings have doubled and our social media reach is amazing. Absolutely stellar service!",
    rating: 5,
  },
  {
    name: 'Rehan Zaiddi',
    role: 'Owner, BigBite Restaurant',
    quote: "Professional, highly creative, and incredibly effective. Our restaurant's weekend foot traffic has increased significantly thanks to their exceptional digital marketing strategies.",
    rating: 5,
  },
  {
    name: 'Emma Davis',
    role: 'Marketing Director, GrowthCo',
    quote: "Their data-driven approach completely changed how we do marketing. We have seen a 300% increase in qualified leads within just three months of launching.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-28 bg-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="blur-in">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="inline-block px-5 py-2 rounded-full bg-purple-50 text-purple-600 text-sm font-semibold tracking-wider uppercase mb-6 border border-purple-100">
              Testimonials
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Trusted by forward-thinking <br className="hidden sm:block" /> businesses worldwide.
            </h3>
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
              Don&apos;t just take our word for it. Here is what our amazing clients have to say about working with our team.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 text-left">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} animation="slide-up" delay={index * 150}>
              <div 
                className="bg-white h-full rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-purple-100 transition-all duration-500 group flex flex-col"
              >
                {/* Quote icon */}
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center mb-6 shadow-md">
                  <Quote className="w-5 h-5 text-white" />
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                <p className="text-gray-600 text-base leading-relaxed mb-8 flex-grow">
                  &quot;{testimonial.quote}&quot;
                </p>
                
                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-gray-400">{testimonial.role}</p>
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
