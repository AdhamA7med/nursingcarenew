
import { useEffect } from 'react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { ServicesSection } from '../components/ServicesSection';
import { WhyChooseUsSection } from '../components/WhyChooseUsSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { WhatsAppFloat } from '../components/WhatsAppFloat';

// Type declaration for AOS
declare global {
  interface Window {
    AOS: {
      init: (options?: any) => void;
      refresh: () => void;
    };
  }
}

const Index = () => {
  useEffect(() => {
    // Initialize AOS
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-out-cubic',
      });
    }
  }, []);

  return (
    <div className="min-h-screen font-cairo" dir="rtl">
      <Header />
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
