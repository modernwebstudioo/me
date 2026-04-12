import { Linkedin, Twitter } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const team = [
  {
    name: 'Alex Morgan',
    role: 'Founder & CEO',
    bio: 'Visionary leader with 15+ years of experience in digital transformation and business scaling.',
    linkedin: '#',
    twitter: '#'
    // 👈 No image field here
  },
  {
    name: 'David Chen',
    role: 'Chief Strategy Officer',
    image: 'https://i.pravatar.cc/300?u=david',
    bio: 'Expert in strategic market positioning and driving data-led growth initiatives for enterprise clients.',
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Sarah Rahman',
    role: 'Head of Operations',
    image: 'https://i.pravatar.cc/300?u=sarah',
    bio: 'Operations mastery ensures our flawless execution and continuous optimization across all projects.',
    linkedin: '#',
    twitter: '#'
  }
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-down">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xl font-bold tracking-wide text-purple-600 uppercase mb-3">
              Meet Our Leadership
            </h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              The minds behind <br className="hidden sm:block" /> your digital success.
            </h3>
            <p className="text-lg text-gray-600">
              Our executive team brings decades of combined experience across strategy, technology, and operations to deliver exceptional results.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {team.map((member, index) => (
            <ScrollReveal
              key={index}
              animation="fade-up"
              delay={index * 150}
            >
              <div className="bg-gray-50 h-full rounded-3xl p-8 group hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center">
                
                {/* Show image if available, otherwise show initials avatar */}
                {member.image ? (
                  <div className="w-40 h-40 rounded-full overflow-hidden relative mb-6 shadow-sm border-4 border-white">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="w-40 h-40 rounded-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-purple-200 text-purple-700 text-4xl font-bold mb-6 shadow-sm border-4 border-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}

                <h4 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h4>
                <p className="text-purple-600 font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>

                <div className="flex gap-4 mt-auto">
                  <a href={member.linkedin} className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-colors duration-300">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.twitter} className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-colors duration-300">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
