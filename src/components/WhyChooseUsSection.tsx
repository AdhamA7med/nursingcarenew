
export const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: "fas fa-medal",
      title: "خبرة واحترافية",
      description: "فريق متخصص بخبرة سنوات في مجال التمريض المنزلي"
    },
    {
      icon: "fas fa-shield-alt",
      title: "أمان وثقة",
      description: "جميع ممرضينا مؤهلون ومرخصون من الجهات المختصة"
    },
    {
      icon: "fas fa-home",
      title: "راحة المنزل",
      description: "نوفر الرعاية الطبية في بيئة مألوفة ومريحة للمريض"
    },
    {
      icon: "fas fa-money-bill-wave",
      title: "أسعار منافسة",
      description: "خدمات عالية الجودة بأسعار مناسبة لجميع الفئات"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">لماذا تختارنا؟</h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto mb-8"></div>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            نتميز بمجموعة من المزايا التي تجعلنا الخيار الأفضل لرعايتكم الصحية
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center group"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="bg-white bg-opacity-10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-opacity-20 transition-all duration-300 group-hover:scale-110">
                <i className={`${reason.icon} text-4xl text-accent-100`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-accent-100 transition-colors">
                {reason.title}
              </h3>
              <p className="opacity-90 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="600">
          <div className="bg-white bg-opacity-10 p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">ضمان الجودة</h3>
            <p className="text-lg opacity-90 leading-relaxed">
              نلتزم بتقديم أعلى مستويات الرعاية الطبية وفقاً للمعايير الدولية، مع ضمان رضا العملاء والحفاظ على سرية المعلومات الطبية.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
