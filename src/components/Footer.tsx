
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-8" data-aos="fade-up">
            <h3 className="text-3xl font-bold text-primary mb-4">رعاية تمريضية جديدة</h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              نفخر بتقديم أفضل خدمات التمريض المنزلي في القاهرة بأعلى معايير الجودة والمهنية
            </p>
          </div>

          <div className="border-t border-gray-700 pt-8 mt-8" data-aos="fade-up" data-aos-delay="200">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-gray-400 mb-4 md:mb-0">
                © 2024 رعاية تمريضية جديدة. جميع الحقوق محفوظة.
              </p>
              <p className="text-gray-400">
                تم تطوير الموقع بواسطة{' '}
                <a 
                  href="https://wa.me/01153903786" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent-500 hover:text-accent-400 transition-colors font-semibold"
                >
                  أدهم أحمد
                </a>
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-center space-x-6 space-x-reverse" data-aos="fade-up" data-aos-delay="400">
            <a 
              href="https://wa.me/01203888230" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-accent-500 w-12 h-12 rounded-full flex items-center justify-center hover:bg-accent-600 transition-all duration-300 transform hover:scale-110"
            >
              <i className="fab fa-whatsapp text-xl"></i>
            </a>
            <a 
              href="tel:01203888230"
              className="bg-primary w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary-600 transition-all duration-300 transform hover:scale-110"
            >
              <i className="fas fa-phone text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
