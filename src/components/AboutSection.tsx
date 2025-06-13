
export const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">من نحن</h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl shadow-lg">
                <div className="text-center mb-6">
                  <i className="fas fa-user-nurse text-6xl text-primary mb-4"></i>
                  <h3 className="text-2xl font-semibold text-primary">رسالتنا</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  نسعى لتقديم أفضل خدمات الرعاية التمريضية المنزلية في القاهرة، مع التركيز على الجودة والمهنية والرحمة في التعامل مع مرضانا الكرام.
                </p>
              </div>
            </div>

            <div data-aos="fade-left">
              <div className="bg-gradient-to-br from-accent-50 to-primary-50 p-8 rounded-2xl shadow-lg">
                <div className="text-center mb-6">
                  <i className="fas fa-heart text-6xl text-accent-500 mb-4"></i>
                  <h3 className="text-2xl font-semibold text-primary">قيمنا</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  نؤمن بأن كل مريض يستحق الحصول على رعاية طبية متميزة في بيئة مريحة وآمنة. فريقنا المتخصص يعمل بدقة ومحبة لضمان أفضل النتائج.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-primary-50 p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
              <h3 className="text-3xl font-semibold text-primary mb-6">خبرة وثقة</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                مع سنوات من الخبرة في مجال التمريض المنزلي، نفخر بكوننا الخيار الأول لآلاف العائلات في القاهرة. 
                نقدم خدماتنا على مدار الساعة مع فريق مؤهل ومدرب على أحدث المعايير الطبية.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
