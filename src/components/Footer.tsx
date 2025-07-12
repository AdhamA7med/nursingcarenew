
export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-32 h-32 bg-primary rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-green-500 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Company Info */}
            <div data-aos="fade-up" data-aos-delay="100" className="text-center md:text-right">
              <div className="flex items-center justify-center md:justify-start space-x-3 space-x-reverse mb-6">
                <div className="bg-gradient-to-br from-primary to-primary-600 w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                  <i className="fas fa-user-nurse text-2xl text-white"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">نيرس كلينيك</h3>
                  <p className="text-gray-300">خدمات التمريض المنزلي</p>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                نفخر بتقديم أفضل خدمات التمريض المنزلي في القاهرة بأعلى معايير الجودة والمهنية
              </p>
            </div>

            {/* Quick Links */}
            <div data-aos="fade-up" data-aos-delay="200" className="text-center">
              <h4 className="text-xl font-semibold text-white mb-6">روابط سريعة</h4>
              <div className="space-y-3">
                <button 
                  onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block w-full text-gray-300 hover:text-green-400 transition-colors py-2 px-4 rounded-lg hover:bg-white/10"
                >
                  الرئيسية
                </button>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block w-full text-gray-300 hover:text-green-400 transition-colors py-2 px-4 rounded-lg hover:bg-white/10"
                >
                  من نحن
                </button>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block w-full text-gray-300 hover:text-green-400 transition-colors py-2 px-4 rounded-lg hover:bg-white/10"
                >
                  خدماتنا
                </button>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block w-full text-gray-300 hover:text-green-400 transition-colors py-2 px-4 rounded-lg hover:bg-white/10"
                >
                  تواصل معنا
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div data-aos="fade-up" data-aos-delay="300" className="text-center md:text-left">
              <h4 className="text-xl font-semibold text-white mb-6">تواصل معنا</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-center md:justify-start space-x-3 space-x-reverse">
                  <div className="bg-gradient-to-br from-primary to-primary-600 w-10 h-10 rounded-full flex items-center justify-center">
                    <i className="fas fa-phone text-white"></i>
                  </div>
                  <span className="text-gray-300" dir="ltr">01009457979</span>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-3 space-x-reverse">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 w-10 h-10 rounded-full flex items-center justify-center">
                    <i className="fab fa-whatsapp text-white"></i>
                  </div>
                  <span className="text-gray-300" dir="ltr">01009457979</span>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-3 space-x-reverse">
                  <div className="bg-gradient-to-br from-primary to-primary-600 w-10 h-10 rounded-full flex items-center justify-center">
                    <i className="fas fa-map-marker-alt text-white"></i>
                  </div>
                  <span className="text-gray-300">القاهرة، مصر</span>
                </div>
              </div>
            </div>
          </div>

          {/* Service Hours */}
          <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="400">
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/20">
              <h4 className="text-2xl font-semibold text-white mb-4">ساعات العمل</h4>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 w-12 h-12 rounded-full flex items-center justify-center">
                    <i className="fas fa-clock text-xl text-white"></i>
                  </div>
                  <span className="text-lg text-gray-300">متاح 24 ساعة / 7 أيام</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="bg-gradient-to-br from-primary to-primary-600 w-12 h-12 rounded-full flex items-center justify-center">
                    <i className="fas fa-phone-alt text-xl text-white"></i>
                  </div>
                  <span className="text-lg text-gray-300">استجابة فورية للطوارئ</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 py-8" data-aos="fade-up" data-aos-delay="500">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-right">
              © 2024 رعاية تمريضية جديدة. جميع الحقوق محفوظة.
            </p>
            <p className="text-gray-400 text-center md:text-left">
              تم تطوير الموقع بواسطة{' '}
              <a 
                href="https://wa.me/201153903786" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors font-semibold hover:underline"
              >
                أدهم أحمد
              </a>
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="pb-8 flex justify-center space-x-6 space-x-reverse" data-aos="fade-up" data-aos-delay="600">
          <a 
            href="https://wa.me/201515329414?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AA%D9%85%D8%B1%D9%8A%D8%B6%20%D8%A7%D9%84%D9%85%D9%86%D8%B2%D9%84%D9%8A" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-green-500 to-green-600 w-14 h-14 rounded-full flex items-center justify-center hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl group"
          >
            <i className="fab fa-whatsapp text-xl text-white group-hover:animate-bounce"></i>
          </a>
          <a 
            href="tel:+201515329414"
            className="bg-gradient-to-br from-primary to-primary-600 w-14 h-14 rounded-full flex items-center justify-center hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl group"
          >
            <i className="fas fa-phone text-xl text-white group-hover:animate-bounce"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
