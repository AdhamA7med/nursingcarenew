
export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-primary-50/30 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">من نحن</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            رحلتنا في تقديم أفضل خدمات الرعاية الطبية المنزلية
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div data-aos="fade-right">
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="text-center mb-6">
                  <div className="bg-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <i className="fas fa-user-nurse text-3xl text-white"></i>
                  </div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">رسالتنا</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg text-center">
                  نسعى لتقديم أفضل خدمات الرعاية التمريضية المنزلية في القاهرة، مع التركيز على الجودة والمهنية والرحمة في التعامل مع مرضانا الكرام.
                </p>
              </div>
            </div>

            <div data-aos="fade-left">
              <div className="bg-gradient-to-br from-accent-50 to-primary-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="text-center mb-6">
                  <div className="bg-accent-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <i className="fas fa-heart text-3xl text-white"></i>
                  </div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">قيمنا</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg text-center">
                  نؤمن بأن كل مريض يستحق الحصول على رعاية طبية متميزة في بيئة مريحة وآمنة. فريقنا المتخصص يعمل بدقة ومحبة لضمان أفضل النتائج.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-gradient-to-r from-primary-50 via-white to-accent-50 p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 max-w-4xl mx-auto border border-primary/10">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-r from-primary to-accent-500 w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                  <i className="fas fa-award text-2xl text-white"></i>
                </div>
              </div>
              <h3 className="text-3xl font-semibold text-primary mb-6">خبرة وثقة</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                مع سنوات من الخبرة في مجال التمريض المنزلي، نفخر بكوننا الخيار الأول لآلاف العائلات في القاهرة. 
                نقدم خدماتنا على مدار الساعة مع فريق مؤهل ومدرب على أحدث المعايير الطبية.
              </p>
              
              {/* Features Grid */}
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all">
                  <i className="fas fa-certificate text-2xl text-primary mb-3"></i>
                  <h4 className="font-semibold text-primary mb-2">مرخص ومعتمد</h4>
                  <p className="text-gray-600 text-sm">جميع خدماتنا مرخصة من الجهات المختصة</p>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all">
                  <i className="fas fa-users text-2xl text-accent-500 mb-3"></i>
                  <h4 className="font-semibold text-primary mb-2">فريق متخصص</h4>
                  <p className="text-gray-600 text-sm">ممرضين وممرضات مؤهلين ومدربين</p>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all">
                  <i className="fas fa-shield-alt text-2xl text-primary mb-3"></i>
                  <h4 className="font-semibold text-primary mb-2">أمان تام</h4>
                  <p className="text-gray-600 text-sm">نضمن سلامة وأمان جميع المرضى</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
