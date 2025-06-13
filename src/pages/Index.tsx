
import { useEffect } from 'react';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { ServicesSection } from '../components/ServicesSection';
import { WhyChooseUsSection } from '../components/WhyChooseUsSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { WhatsAppFloat } from '../components/WhatsAppFloat';

const Index = () => {
  useEffect(() => {
    // Initialize AOS
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
      });
    }
  }, []);

  return (
    <div className="min-h-screen font-cairo" dir="rtl">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
