
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 flex items-center justify-center overflow-hidden pt-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-accent rounded-full animate-float"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-600 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-accent-400 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 right-1/5 w-12 h-12 bg-primary-300 rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Medical Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-20 opacity-10 animate-float" style={{ animationDelay: '0.5s' }}>
          <i className="fas fa-stethoscope text-6xl text-primary"></i>
        </div>
        <div className="absolute bottom-40 right-20 opacity-10 animate-float" style={{ animationDelay: '1.5s' }}>
          <i className="fas fa-heartbeat text-6xl text-accent-500"></i>
        </div>
        <div className="absolute top-1/2 left-10 opacity-10 animate-float" style={{ animationDelay: '2.5s' }}>
          <i className="fas fa-user-md text-5xl text-primary-600"></i>
        </div>
        <div className="absolute top-1/4 right-32 opacity-10 animate-float" style={{ animationDelay: '3s' }}>
          <i className="fas fa-hospital text-5xl text-accent-400"></i>
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div data-aos="fade-up" data-aos-delay="200">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-primary mb-6 leading-tight">
يور
            <span className="block text-accent-500 animate-pulse-slow">نيرس</span>
          </h1>
        </div>
        
        <div data-aos="fade-up" data-aos-delay="400">
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed font-medium">
            نقدم خدمات التمريض المنزلي المتخصصة في القاهرة بأعلى معايير الجودة والرعاية الطبية الاحترافية
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="600" className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
            onClick={() => window.open('https://wa.me/01099785311', '_blank')}
          >
            <i className="fab fa-whatsapp ml-2 text-xl group-hover:animate-bounce"></i>
            احجز استشارة مجانية
          </Button>
          
          <Button 
            variant="outline"
            size="lg" 
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <i className="fas fa-info-circle ml-2 text-xl"></i>
            تعرف على خدماتنا
          </Button>
        </div>

        {/* Statistics */}
        <div data-aos="fade-up" data-aos-delay="800" className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center group">
            <div className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">24/7</div>
              <div className="text-gray-600 font-medium">خدمة مستمرة</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-3xl font-bold text-accent-500 mb-2 group-hover:scale-110 transition-transform">100%</div>
              <div className="text-gray-600 font-medium">رضا العملاء</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">+500</div>
              <div className="text-gray-600 font-medium">عائلة سعيدة</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-3xl font-bold text-accent-500 mb-2 group-hover:scale-110 transition-transform">+5</div>
              <div className="text-gray-600 font-medium">سنوات خبرة</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div data-aos="fade-up" data-aos-delay="1000" className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <i className="fas fa-chevron-down text-2xl text-primary opacity-60"></i>
          </div>
        </div>
      </div>
    </section>
  );
};
