import { useState, useEffect } from 'react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-primary/10' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
              <i className="fas fa-user-nurse text-xl text-white"></i>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">رعاية تمريضية جديدة</h1>
              <p className="text-sm text-gray-600">خدمات التمريض المنزلي</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 space-x-reverse">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-primary transition-colors font-medium hover:scale-105 transform duration-200"
            >
              الرئيسية
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-primary transition-colors font-medium hover:scale-105 transform duration-200"
            >
              من نحن
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-primary transition-colors font-medium hover:scale-105 transform duration-200"
            >
              خدماتنا
            </button>
            <button 
              onClick={() => scrollToSection('why-choose-us')}
              className="text-gray-700 hover:text-primary transition-colors font-medium hover:scale-105 transform duration-200"
            >
              لماذا نحن
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-primary transition-colors font-medium hover:scale-105 transform duration-200"
            >
              تواصل معنا
            </button>
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <a
              href="https://wa.me/201203888230"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex bg-accent-500 hover:bg-accent-600 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 items-center"
            >
              <i className="fab fa-whatsapp ml-2"></i>
              احجز الآن
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-primary`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg border-t border-primary/10 animate-fade-in">
            <div className="container mx-auto px-6 py-6">
              <div className="flex flex-col space-y-4">
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-right py-3 text-gray-700 hover:text-primary transition-colors font-medium border-b border-gray-100 hover:bg-primary/5 rounded px-4"
                >
                  الرئيسية
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-right py-3 text-gray-700 hover:text-primary transition-colors font-medium border-b border-gray-100 hover:bg-primary/5 rounded px-4"
                >
                  من نحن
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-right py-3 text-gray-700 hover:text-primary transition-colors font-medium border-b border-gray-100 hover:bg-primary/5 rounded px-4"
                >
                  خدماتنا
                </button>
                <button 
                  onClick={() => scrollToSection('why-choose-us')}
                  className="text-right py-3 text-gray-700 hover:text-primary transition-colors font-medium border-b border-gray-100 hover:bg-primary/5 rounded px-4"
                >
                  لماذا نحن
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-right py-3 text-gray-700 hover:text-primary transition-colors font-medium border-b border-gray-100 hover:bg-primary/5 rounded px-4"
                >
                  تواصل معنا
                </button>
                <a
                  href="https://wa.me/201203888230"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-full shadow-lg mt-4 flex items-center justify-center"
                >
                  <i className="fab fa-whatsapp ml-2"></i>
                  احجز الآن
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
















// import { useState, useEffect } from 'react';
// import { Button } from "@/components/ui/button";

// export const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       setIsMobileMenuOpen(false);
//     }
//   };

//   return (
//     <header 
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled 
//           ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-primary/10' 
//           : 'bg-transparent'
//       }`}
//     >
//       <nav className="container mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center space-x-3 space-x-reverse">
//             <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
//               <i className="fas fa-user-nurse text-xl text-white"></i>
//             </div>
//             <div>
//               <h1 className="text-xl font-bold text-primary">رعاية تمريضية جديدة</h1>
//               <p className="text-sm text-gray-600">خدمات التمريض المنزلي</p>
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center space-x-8 space-x-reverse">
//             <button 
//               onClick={() => scrollToSection('hero')}
//               className="text-gray-700 hover:text-primary transition-colors font-medium hover:scale-105 transform duration-200"
//             >
//               الرئيسية
//             </button>
//             <button 
//               onClick={() => scrollToSection('about')}
//               className="text-gray-700 hover:text-primary transition-colors font-medium hover:scale-105 transform duration-200"
//             >
//               من نحن
//             </button>
//             <button 
//               onClick={() => scrollToSection('services')}
//               className="text-gray-700 hover:text-primary transition-colors font-medium hover:scale-105 transform duration-200"
//             >
//               خدماتنا
//             </button>
//             <button 
//               onClick={() => scrollToSection('why-choose-us')}
//               className="text-gray-700 hover:text-primary transition-colors font-medium hover:scale-105 transform duration-200"
//             >
//               لماذا نحن
//             </button>
//             <button 
//               onClick={() => scrollToSection('contact')}
//               className="text-gray-700 hover:text-primary transition-colors font-medium hover:scale-105 transform duration-200"
//             >
//               تواصل معنا
//             </button>
//           </div>

//           {/* CTA Button & Mobile Menu */}
//           <div className="flex items-center space-x-4 space-x-reverse">
//             <Button 
//               className="hidden md:flex bg-accent-500 hover:bg-accent-600 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
//               onClick={() => window.open('https://wa.me/01203888230', '_blank')}
//             >
//               <i className="fab fa-whatsapp ml-2"></i>
//               احجز الآن
//             </Button>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="lg:hidden w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
//             >
//               <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-primary`}></i>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg border-t border-primary/10 animate-fade-in">
//             <div className="container mx-auto px-6 py-6">
//               <div className="flex flex-col space-y-4">
//                 <button 
//                   onClick={() => scrollToSection('hero')}
//                   className="text-right py-3 text-gray-700 hover:text-primary transition-colors font-medium border-b border-gray-100 hover:bg-primary/5 rounded px-4"
//                 >
//                   الرئيسية
//                 </button>
//                 <button 
//                   onClick={() => scrollToSection('about')}
//                   className="text-right py-3 text-gray-700 hover:text-primary transition-colors font-medium border-b border-gray-100 hover:bg-primary/5 rounded px-4"
//                 >
//                   من نحن
//                 </button>
//                 <button 
//                   onClick={() => scrollToSection('services')}
//                   className="text-right py-3 text-gray-700 hover:text-primary transition-colors font-medium border-b border-gray-100 hover:bg-primary/5 rounded px-4"
//                 >
//                   خدماتنا
//                 </button>
//                 <button 
//                   onClick={() => scrollToSection('why-choose-us')}
//                   className="text-right py-3 text-gray-700 hover:text-primary transition-colors font-medium border-b border-gray-100 hover:bg-primary/5 rounded px-4"
//                 >
//                   لماذا نحن
//                 </button>
//                 <button 
//                   onClick={() => scrollToSection('contact')}
//                   className="text-right py-3 text-gray-700 hover:text-primary transition-colors font-medium border-b border-gray-100 hover:bg-primary/5 rounded px-4"
//                 >
//                   تواصل معنا
//                 </button>
//                 <Button 
//                   className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-full shadow-lg mt-4"
//                   onClick={() => window.open('https://wa.me/201203888230', '_blank')}
//                 >
//                   <i className="fab fa-whatsapp ml-2"></i>
//                   احجز الآن
//                 </Button>
//               </div>
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// };
