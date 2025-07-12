import { useState } from 'react';

export const WhatsAppFloat = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative w-16 h-16">
        {/* Ripple Effect */}
        <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20 pointer-events-none"></div>

        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-16 right-1/2 transform translate-x-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg whitespace-nowrap text-sm shadow-lg z-10">
            تواصل معنا عبر واتساب
            <div className="absolute -bottom-1 right-1/2 transform translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
          </div>
        )}

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/201009457979?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AA%D9%85%D8%B1%D9%8A%D8%B6%20%D8%A7%D9%84%D9%85%D9%86%D8%B2%D9%84%D9%8A"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse-slow z-20"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          aria-label="تواصل معنا عبر واتساب"
        >
          <i className="fab fa-whatsapp text-2xl text-white"></i>
        </a>
      </div>
    </div>
  );
};






// import { useState } from 'react';

// export const WhatsAppFloat = () => {
//   const [showTooltip, setShowTooltip] = useState(false);

//   return (
//     <div className="fixed bottom-6 right-6 z-50">
//       <div className="relative">
//         {/* Tooltip */}
//         {showTooltip && (
//           <div className="absolute bottom-16 right-1/2 transform translate-x-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg whitespace-nowrap text-sm shadow-lg">
//             تواصل معنا عبر واتساب
//             <div className="absolute -bottom-1 right-1/2 transform translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
//           </div>
//         )}
        
//         {/* WhatsApp Button */}
//         <a
//           href="https://wa.me/201099785311?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AA%D9%85%D8%B1%D9%8A%D8%B6%20%D8%A7%D9%84%D9%85%D9%86%D8%B2%D9%84%D9%8A"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-green-500 hover:bg-green-600 w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse-slow"
//           onMouseEnter={() => setShowTooltip(true)}
//           onMouseLeave={() => setShowTooltip(false)}
//           aria-label="تواصل معنا عبر واتساب"
//         >
//           <i className="fab fa-whatsapp text-2xl text-white"></i>
//         </a>
        
//         {/* Ripple Effect */}
//         <div className="absolute inset-0 w-16 h-16 rounded-full bg-green-400 animate-ping opacity-20"></div>
//       </div>
//     </div>
//   );
// };
