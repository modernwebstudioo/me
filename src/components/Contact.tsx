'use client';

import { useState, useEffect } from 'react';
import { CheckCircle, AlertCircle, X } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Auto-hide toast after 5 seconds
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !message?.trim()) {
      setToast({ message: 'Please fill out all the fields.', type: 'error' });
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch('https://formsubmit.co/ajax/pantherxvision786@gmail.com', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      if (res.ok) {
        setToast({ message: 'Your message has been sent successfully!', type: 'success' });
        form.reset();
      } else {
        setToast({ message: 'Oops! Something went wrong. Please try again.', type: 'error' });
      }
    } catch (error) {
      setToast({ message: 'Network error. Please try again later.', type: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-28 bg-white relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="slide-up">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-5 py-2 rounded-full bg-purple-50 text-purple-600 text-sm font-semibold tracking-wider uppercase mb-6 border border-purple-100">
              Get In Touch
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Let&apos;s craft your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">digital future</span>.
            </h3>
          </div>
        </ScrollReveal>

        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid md:grid-cols-2">
            
            {/* Left Info Side */}
            <ScrollReveal animation="slide-up" className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 p-6 sm:p-10 text-white flex flex-col justify-between relative overflow-hidden">
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4">Let&apos;s work together.</h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Get in touch with our team to see how Panther X Vision can accelerate your business growth.
                </p>
              </div>
              
              <div className="space-y-6 relative z-10">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Email Us</h4>
                  <p className="text-base font-medium">pantherxvision786@gmail.com</p>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Call Us</h4>
                  <p className="text-base font-medium">+92 315 0288320</p>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-base font-medium leading-relaxed">19-C, khyaban-e- Nishat, Ittehad Commercial, D.H.A Phase 6 Defence Housing Authority, Karachi</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Form Side */}
            <ScrollReveal animation="fade-up" className="p-6 sm:p-10">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Disable Captcha for smoother UX */}
                <input type="hidden" name="_subject" value="New Contact Form Submission!" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="box" />
                
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input suppressHydrationWarning type="text" name="firstName" id="firstName" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:bg-white outline-none transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input suppressHydrationWarning type="text" name="lastName" id="lastName" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:bg-white outline-none transition-all" placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Work Email</label>
                  <input suppressHydrationWarning type="email" name="email" id="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:bg-white outline-none transition-all" placeholder="john@company.com" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">How can we help?</label>
                  <textarea suppressHydrationWarning name="message" id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:bg-white outline-none transition-all resize-none" placeholder="Tell us about your project..."></textarea>
                </div>

                <button 
                  suppressHydrationWarning
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-4 rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30 focus:ring-4 focus:ring-purple-200 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </ScrollReveal>
            
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {toast && (
        <div className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl transform transition-all duration-300 translate-y-0 opacity-100 border backdrop-blur-sm ${toast.type === 'success' ? 'bg-white/95 border-green-100 text-gray-800' : 'bg-white/95 border-red-100 text-gray-800'}`}>
          {toast.type === 'success' ? (
            <CheckCircle className="w-6 h-6 text-green-500" />
          ) : (
            <AlertCircle className="w-6 h-6 text-red-500" />
          )}
          <p className="font-medium">{toast.message}</p>
          <button 
            onClick={() => setToast(null)}
            className="ml-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}
    </section>
  );
}
