import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <a
        href="https://wa.me/201111245487?text=مرحباً، أريد الاستفسار عن خدماتك"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse-glow group"
        aria-label="Contact on WhatsApp"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
        
        {/* Tooltip */}
        {isOpen && (
          <div className="absolute bottom-full right-0 mb-2 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap animate-fade-in">
            {t('Chat with me on WhatsApp', 'تواصل معي على واتساب')}
            <div className="absolute bottom-[-4px] right-4 w-2 h-2 bg-gray-900 transform rotate-45"></div>
          </div>
        )}
      </a>
    </>
  );
};

export default WhatsAppFloat;
