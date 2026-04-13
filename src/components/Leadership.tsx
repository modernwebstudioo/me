import { Linkedin, Twitter, Crown, Palette, Lightbulb } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const team = [
  {
    name: 'Tehreem Kanwal',
    role: 'CEO & Founder',
    bio: 'Visionary leader driving Panther X Vision\'s mission to deliver world-class digital experiences and business growth.',
    icon: Crown,
    accent: 'from-purple-500 to-indigo-500',
    accentLight: 'bg-purple-50',
    accentText: 'text-purple-600',
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Malik Naveed',
    role: 'Graphics Designer',
    bio: 'Creative maestro transforming ideas into stunning visual identities that captivate audiences and elevate brands.',
    icon: Palette,
    accent: 'from-pink-500 to-rose-500',
    accentLight: 'bg-pink-50',
    accentText: 'text-pink-600',
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Fatima Jameel',
    role: 'Brand Strategist',
    bio: 'Strategic thinker crafting compelling brand narratives and positioning that drive engagement and market leadership.',
    icon: Lightbulb,
    accent: 'from-amber-500 to-orange-500',
    accentLight: 'bg-amber-50',
    accentText: 'text-amber-600',
    linkedin: '#',
    twitter: '#'
  }
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-16 sm:py-28 bg-white relative overflow-hidden">
      {/* Subtle decorative dots */}
      <div className="absolute top-12 left-12 w-32 h-32 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #6b21a8 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
      <div className="absolute bottom-12 right-12 w-32 h-32 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #6b21a8 1px, transparent 1px)', backgroundSize: '16px 16px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="blur-in">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-20">
            <span className="inline-block px-5 py-2 rounded-full bg-purple-50 text-purple-600 text-sm font-semibold tracking-wider uppercase mb-6 border border-purple-100">
              Our Leadership
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              The People Behind <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                Panther X Vision
              </span>
            </h3>
            <p className="text-lg text-gray-500 leading-relaxed">
              Our team brings passion, creativity, and strategic thinking to deliver exceptional results for every project.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
          {team.map((member, index) => {
            const Icon = member.icon;
            return (
              <ScrollReveal
                key={index}
                animation="flip-up"
                delay={index * 150}
              >
                <div className="relative group h-full">
                  <div className="h-full bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm group-hover:shadow-xl group-hover:border-purple-100 transition-all duration-500 flex flex-col items-center text-center">
                    {/* Gradient icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.accent} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-500`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Name */}
                    <h4 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
                      {member.name}
                    </h4>

                    {/* Role */}
                    <span className={`inline-block px-4 py-1 rounded-full ${member.accentLight} ${member.accentText} text-xs font-semibold tracking-wide uppercase mb-5 border border-current/10`}>
                      {member.role}
                    </span>

                    {/* Divider */}
                    <div className={`w-10 h-0.5 bg-gradient-to-r ${member.accent} rounded-full mb-5 opacity-30`} />

                    {/* Bio */}
                    <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                      {member.bio}
                    </p>

                    {/* Social links */}
                    <div className="flex gap-3 mt-auto">
                      <a
                        href={member.linkedin}
                        className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:border-purple-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a
                        href={member.twitter}
                        className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:border-purple-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    </div>
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
