import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-purple-200 selection:text-purple-900">
      <Navbar />
      <div className="pt-20"> {/* Add padding top to account for fixed navbar */}
        <Hero />
        <WhatWeDo />
        <Services />
        <Testimonials />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
