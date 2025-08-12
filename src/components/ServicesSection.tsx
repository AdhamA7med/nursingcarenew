
export const ServicesSection = () => {
  const services = [
    {
      icon: "fas fa-user-nurse",
      title: "تمريض منزلي شامل",
      description: "رعاية تمريضية متكاملة في منزلك مع فريق متخصص ومؤهل",
      features: ["رعاية 24/7", "فريق مؤهل", "أحدث المعدات"]
    },
    {
      icon: "fas fa-heartbeat",
      title: "رعاية طبية مستمرة",
      description: "متابعة حالة المريض وتنفيذ الخطة العلاجية بدقة ومهنية",
      features: ["متابعة دورية", "تقارير طبية", "استشارات مجانية"]
    },
    {
      icon: "fas fa-pills",
      title: "إدارة الأدوية",
      description: "تنظيم وإدارة الأدوية وضمان تناولها في المواعيد المحددة",
      features: ["تذكير بالأدوية", "جدولة دقيقة", "متابعة الاستجابة"]
    },
    {
      icon: "fas fa-wheelchair",
      title: "رعاية كبار السن",
      description: "خدمات متخصصة لرعاية كبار السن وتوفير الراحة والأمان",
      features: ["رعاية شخصية", "أنشطة ترفيهية", "دعم نفسي"]
    },
    {
      icon: "fas fa-baby",
      title: "رعاية الأطفال",
      description: "عناية خاصة بالأطفال والرضع مع اتباع أعلى معايير السلامة",
      features: ["رعاية متخصصة", "برامج تنموية", "مراقبة مستمرة"]
    },
    {
      icon: "fas fa-clock",
      title: "خدمة 24/7",
      description: "متاحون على مدار الساعة لتلبية احتياجاتكم الطارئة",
      features: ["استجابة فورية", "دعم مستمر", "طوارئ 24 ساعة"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-primary-50/30 to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-20 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-accent-500 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">خدماتنا</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent-500 to-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة شاملة من خدمات التمريض المنزلي المتخصصة لتلبية جميع احتياجاتكم الطبية
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group border border-gray-100 hover:border-primary/20 relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="text-center relative z-10">
                <div className="bg-gradient-to-br from-primary-50 to-accent-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <i className={`${service.icon} text-3xl text-primary group-hover:text-accent-500 transition-colors duration-300`}></i>
                </div>
                
                <h3 className="text-xl font-semibold text-primary mb-4 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Service Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center space-x-2 space-x-reverse">
                      <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-600 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button 
                  onClick={() => window.open('https://wa.me/01021750639', '_blank')}
                  className="bg-gradient-to-r from-primary to-accent-500 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0"
                >
                  <i className="fab fa-whatsapp ml-2"></i>
                  احجز الآن
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="800">
          <div className="bg-gradient-to-r from-primary to-accent-500 p-10 rounded-3xl shadow-2xl max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-lg"></div>
            <div className="relative z-10 text-white">
              <h3 className="text-3xl font-bold mb-4">هل تحتاج لاستشارة مجانية؟</h3>
              <p className="text-xl mb-8 opacity-90">
                تواصل معنا الآن للحصول على استشارة طبية مجانية وتقييم احتياجاتك
              </p>
              <button 
                onClick={() => window.open('https://wa.me/01021750639', '_blank')}
                className="bg-white text-primary px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-lg"
              >
                <i className="fab fa-whatsapp ml-2 text-green-500"></i>
                تواصل معنا الآن
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
