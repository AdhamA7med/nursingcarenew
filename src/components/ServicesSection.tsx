
export const ServicesSection = () => {
  const services = [
    {
      icon: "fas fa-user-nurse",
      title: "تمريض منزلي شامل",
      description: "رعاية تمريضية متكاملة في منزلك مع فريق متخصص ومؤهل"
    },
    {
      icon: "fas fa-heartbeat",
      title: "رعاية طبية مستمرة",
      description: "متابعة حالة المريض وتنفيذ الخطة العلاجية بدقة ومهنية"
    },
    {
      icon: "fas fa-pills",
      title: "إدارة الأدوية",
      description: "تنظيم وإدارة الأدوية وضمان تناولها في المواعيد المحددة"
    },
    {
      icon: "fas fa-wheelchair",
      title: "رعاية كبار السن",
      description: "خدمات متخصصة لرعاية كبار السن وتوفير الراحة والأمان"
    },
    {
      icon: "fas fa-baby",
      title: "رعاية الأطفال",
      description: "عناية خاصة بالأطفال والرضع مع اتباع أعلى معايير السلامة"
    },
    {
      icon: "fas fa-clock",
      title: "خدمة 24/7",
      description: "متاحون على مدار الساعة لتلبية احتياجاتكم الطارئة"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">خدماتنا</h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            نقدم مجموعة شاملة من خدمات التمريض المنزلي المتخصصة
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-center">
                <div className="bg-primary-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <i className={`${service.icon} text-3xl text-primary group-hover:text-white`}></i>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
