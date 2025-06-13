
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-accent rounded-full animate-float"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-600 rounded-full animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div data-aos="fade-up" data-aos-delay="200">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
            رعاية تمريضية
            <span className="block text-accent-500">جديدة</span>
          </h1>
        </div>
        
        <div data-aos="fade-up" data-aos-delay="400">
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            نقدم خدمات التمريض المنزلي المتخصصة في القاهرة بأعلى معايير الجودة والرعاية الطبية الاحترافية
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="600">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open('https://wa.me/01203888230', '_blank')}
          >
            <i className="fab fa-whatsapp ml-2 text-xl"></i>
            احجز استشارة مجانية
          </Button>
        </div>

        {/* Medical Icons Decoration */}
        <div className="absolute top-10 left-10 opacity-10" data-aos="fade-right" data-aos-delay="800">
          <i className="fas fa-stethoscope text-6xl text-primary"></i>
        </div>
        <div className="absolute bottom-20 right-10 opacity-10" data-aos="fade-left" data-aos-delay="1000">
          <i className="fas fa-heartbeat text-6xl text-accent-500"></i>
        </div>
      </div>
    </section>
  );
};
