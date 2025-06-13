
import { useState } from 'react';

export const WhatsAppFloat = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <div className="relative">
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg whitespace-nowrap text-sm shadow-lg">
            تواصل معنا عبر واتساب
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
          </div>
        )}
        
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/201203888230"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse-slow"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          aria-label="تواصل معنا عبر واتساب"
        >
          <i className="fab fa-whatsapp text-2xl text-white"></i>
        </a>
        
        {/* Ripple Effect */}
        <div className="absolute inset-0 w-16 h-16 rounded-full bg-green-400 animate-ping opacity-20"></div>
      </div>
    </div>
  );
};
