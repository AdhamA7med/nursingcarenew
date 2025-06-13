
export const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: "fas fa-medal",
      title: "خبرة واحترافية",
      description: "فريق متخصص بخبرة سنوات في مجال التمريض المنزلي",
      details: "+5 سنوات خبرة"
    },
    {
      icon: "fas fa-shield-alt",
      title: "أمان وثقة",
      description: "جميع ممرضينا مؤهلون ومرخصون من الجهات المختصة",
      details: "مرخص ومعتمد"
    },
    {
      icon: "fas fa-home",
      title: "راحة المنزل",
      description: "نوفر الرعاية الطبية في بيئة مألوفة ومريحة للمريض",
      details: "في منزلك"
    },
    {
      icon: "fas fa-money-bill-wave",
      title: "أسعار منافسة",
      description: "خدمات عالية الجودة بأسعار مناسبة لجميع الفئات",
      details: "أسعار عادلة"
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-40 h-40 bg-accent-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-accent-400/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Floating Medical Icons */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-32 left-16 animate-float">
          <i className="fas fa-stethoscope text-4xl"></i>
        </div>
        <div className="absolute bottom-32 right-16 animate-float" style={{ animationDelay: '1s' }}>
          <i className="fas fa-heart text-4xl"></i>
        </div>
        <div className="absolute top-1/2 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
          <i className="fas fa-user-md text-4xl"></i>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">لماذا تختارنا؟</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-accent-400 via-white to-accent-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            نتميز بمجموعة من المزايا التي تجعلنا الخيار الأفضل لرعايتكم الصحية في القاهرة
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center group"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="bg-white/10 backdrop-blur-lg w-28 h-28 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110 shadow-lg group-hover:shadow-xl border border-white/20">
                <i className={`${reason.icon} text-4xl text-accent-100 group-hover:text-white transition-colors`}></i>
              </div>
              <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent-100 transition-colors">
                  {reason.title}
                </h3>
                <p className="opacity-90 leading-relaxed mb-4 text-sm">
                  {reason.description}
                </p>
                <div className="inline-block bg-accent-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {reason.details}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Quality Guarantee Section */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="600">
          <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl max-w-5xl mx-auto border border-white/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-r from-accent-400 to-accent-600 w-20 h-20 rounded-full flex items-center justify-center shadow-lg">
                  <i className="fas fa-award text-3xl text-white"></i>
                </div>
              </div>
              <h3 className="text-3xl font-semibold mb-6">ضمان الجودة والتميز</h3>
              <p className="text-lg opacity-90 leading-relaxed mb-8 max-w-3xl mx-auto">
                نلتزم بتقديم أعلى مستويات الرعاية الطبية وفقاً للمعايير الدولية، مع ضمان رضا العملاء والحفاظ على سرية المعلومات الطبية.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/10 p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all group">
                  <i className="fas fa-certificate text-2xl text-accent-300 mb-3 group-hover:scale-110 transition-transform"></i>
                  <h4 className="font-semibold mb-2">شهادات معتمدة</h4>
                  <p className="text-sm opacity-80">جميع أعضاء الفريق حاصلون على شهادات طبية معتمدة</p>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all group">
                  <i className="fas fa-clock text-2xl text-accent-300 mb-3 group-hover:scale-110 transition-transform"></i>
                  <h4 className="font-semibold mb-2">استجابة سريعة</h4>
                  <p className="text-sm opacity-80">نصل إليكم في أسرع وقت ممكن لتلبية احتياجاتكم</p>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all group">
                  <i className="fas fa-heart text-2xl text-accent-300 mb-3 group-hover:scale-110 transition-transform"></i>
                  <h4 className="font-semibold mb-2">رعاية شخصية</h4>
                  <p className="text-sm opacity-80">نهتم بكل تفاصيل راحة وسلامة المرضى</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="800">
          <div className="text-center bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20">
            <div className="text-3xl font-bold text-accent-300 mb-2">100%</div>
            <div className="text-sm opacity-80">رضا العملاء</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20">
            <div className="text-3xl font-bold text-accent-300 mb-2">24/7</div>
            <div className="text-sm opacity-80">خدمة مستمرة</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20">
            <div className="text-3xl font-bold text-accent-300 mb-2">+500</div>
            <div className="text-sm opacity-80">عائلة سعيدة</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20">
            <div className="text-3xl font-bold text-accent-300 mb-2">+5</div>
            <div className="text-sm opacity-80">سنوات خبرة</div>
          </div>
        </div>
      </div>
    </section>
  );
};
