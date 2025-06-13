
export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white via-accent-50/30 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-48 h-48 bg-primary rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent-500 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">تواصل معنا</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent-500 to-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نحن هنا لخدمتكم على مدار الساعة. تواصلوا معنا للحصول على أفضل رعاية طبية منزلية
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div 
              className="text-center bg-gradient-to-br from-primary-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group border border-primary/10"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="bg-gradient-to-br from-primary to-primary-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <i className="fas fa-phone text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">اتصل بنا</h3>
              <p className="text-gray-600 mb-4">للحجز والاستفسارات</p>
              <a 
                href="tel:01203888230" 
                className="text-2xl font-bold text-primary hover:text-primary-600 transition-colors block group-hover:scale-105 transform duration-200" 
                dir="ltr"
              >
                01203888230
              </a>
              <button 
                onClick={() => window.open('tel:01203888230', '_self')}
                className="mt-4 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-600 transition-all duration-300 transform hover:scale-105"
              >
                اتصل الآن
              </button>
            </div>

            <div 
              className="text-center bg-gradient-to-br from-green-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group border border-green-200/50"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <i className="fab fa-whatsapp text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">واتساب</h3>
              <p className="text-gray-600 mb-4">تواصل سريع ومباشر</p>
              <a 
                href="https://wa.me/01203888230" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors block group-hover:scale-105 transform duration-200" 
                dir="ltr"
              >
                01203888230
              </a>
              <button 
                onClick={() => window.open('https://wa.me/01203888230', '_blank')}
                className="mt-4 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
              >
                أرسل رسالة
              </button>
            </div>

            <div 
              className="text-center bg-gradient-to-br from-accent-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group border border-accent-200/50"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="bg-gradient-to-br from-accent-500 to-accent-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <i className="fas fa-map-marker-alt text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">موقعنا</h3>
              <p className="text-gray-600 mb-4">نخدم جميع أنحاء</p>
              <div className="text-2xl font-bold text-accent-600 group-hover:scale-105 transform duration-200">
                القاهرة، مصر
              </div>
              <div className="mt-4 bg-accent-500 text-white px-6 py-3 rounded-full inline-block">
                <i className="fas fa-map text-sm ml-2"></i>
                جميع الأحياء
              </div>
            </div>
          </div>

          {/* Enhanced Service Hours */}
          <div className="text-center" data-aos="fade-up" data-aos-delay="800">
            <div className="bg-gradient-to-r from-primary-50 via-white to-accent-50 p-10 rounded-3xl shadow-xl max-w-4xl mx-auto border border-primary/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-semibold text-primary mb-8">ساعات العمل والخدمة</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-primary/10 hover:border-primary/20 transition-all group">
                    <div className="flex items-center justify-center mb-4">
                      <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <i className="fas fa-clock text-2xl text-white"></i>
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold text-primary mb-3">خدمة مستمرة</h4>
                    <p className="text-lg text-gray-700 font-medium">متاح 24 ساعة / 7 أيام في الأسبوع</p>
                    <div className="mt-4 flex items-center justify-center space-x-2 space-x-reverse">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-600 font-medium">متاح الآن</span>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-accent-200/50 hover:border-accent-300 transition-all group">
                    <div className="flex items-center justify-center mb-4">
                      <div className="bg-accent-500 w-16 h-16 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <i className="fas fa-phone-alt text-2xl text-white"></i>
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold text-primary mb-3">استجابة فورية</h4>
                    <p className="text-lg text-gray-700 font-medium">نرد على جميع المكالمات خلال دقائق</p>
                    <div className="mt-4 flex items-center justify-center space-x-2 space-x-reverse">
                      <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                      <span className="text-orange-600 font-medium">استجابة سريعة</span>
                    </div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="mt-8 bg-red-50 p-6 rounded-2xl border-2 border-red-200">
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center animate-pulse">
                      <i className="fas fa-exclamation-triangle text-white"></i>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-red-700 mb-2">حالات الطوارئ</h4>
                  <p className="text-red-600 mb-4">للحالات الطارئة، اتصل بنا فوراً</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="tel:01203888230"
                      className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition-all duration-300 transform hover:scale-105 font-semibold"
                    >
                      <i className="fas fa-phone ml-2"></i>
                      اتصال طوارئ
                    </a>
                    <a 
                      href="https://wa.me/01203888230"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-105 font-semibold"
                    >
                      <i className="fab fa-whatsapp ml-2"></i>
                      واتساب طوارئ
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
