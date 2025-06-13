
export const ContactSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">تواصل معنا</h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            نحن هنا لخدمتكم على مدار الساعة
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div 
              className="text-center bg-primary-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-phone text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">الهاتف</h3>
              <p className="text-gray-700 text-lg" dir="ltr">01203888230</p>
            </div>

            <div 
              className="text-center bg-accent-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="bg-accent-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fab fa-whatsapp text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">واتساب</h3>
              <p className="text-gray-700 text-lg" dir="ltr">01203888230</p>
            </div>

            <div 
              className="text-center bg-primary-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-map-marker-alt text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">الموقع</h3>
              <p className="text-gray-700 text-lg">القاهرة، مصر</p>
            </div>
          </div>

          <div className="text-center" data-aos="fade-up" data-aos-delay="800">
            <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-primary mb-6">ساعات العمل</h3>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="flex items-center">
                  <i className="fas fa-clock text-2xl text-primary ml-3"></i>
                  <span className="text-lg text-gray-700">متاح 24 ساعة / 7 أيام</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-phone-alt text-2xl text-accent-500 ml-3"></i>
                  <span className="text-lg text-gray-700">استجابة فورية للطوارئ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
