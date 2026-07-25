import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

/**
 * Persistent floating WhatsApp button for quick lead contact.
 * Hidden while printing and on very small viewports it stays
 * clear of other fixed UI (navbar is top-fixed, this is bottom-fixed).
 */
export const WhatsAppButton: React.FC = () => {
  const { language } = useLanguage();
  const t = portfolioData[language].contact;
  const phoneDigits = t.phone.replace(/[^0-9]/g, '');
  const message = encodeURIComponent(
    language === 'en'
      ? "Hello Mohammed, I'd like to discuss a surveying/roads project."
      : "مرحباً محمد، أرغب في مناقشة مشروع مساحة/طرق."
  );

  return (
    <motion.a
      href={`https://wa.me/${phoneDigits}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="no-print fixed bottom-5 right-5 md:bottom-7 md:right-7 z-40 flex items-center gap-2 pl-4 pr-5 py-3.5 md:py-4 rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 hover:shadow-2xl hover:shadow-[#25D366]/40 transition-shadow"
      aria-label={language === 'en' ? "Chat on WhatsApp" : "تواصل عبر واتساب"}
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      <MessageCircle className="w-5 h-5 relative z-10 shrink-0" />
      <span className="hidden sm:inline font-semibold text-[13px] relative z-10 whitespace-nowrap">
        {language === 'en' ? "Chat on WhatsApp" : "تواصل واتساب"}
      </span>
    </motion.a>
  );
};
