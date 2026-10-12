import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data';
import { waLink } from '../lib/links';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

/** Persistent quick-contact action — the fastest path to a conversation. */
export const FloatingWA: React.FC = () => {
  const { language } = useLanguage();
  const t = portfolioData[language].contact;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <motion.a
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      href={waLink(`${t.waText}: ${language === 'ar' ? 'فرصة عمل / مشروع' : 'a role / project'}`)}
      target="_blank"
      rel="noopener noreferrer"
      className="no-print fixed bottom-5 z-40 flex items-center gap-2.5 rounded-[10px] border px-4 py-3 shadow-lg"
      style={{
        insetInlineEnd: 20,
        background: '#128C4A',
        borderColor: '#0F7A40',
        color: '#fff',
      }}
      aria-label={t.channels[0].label}
    >
      <MessageCircle className="h-[18px] w-[18px]" />
      <span className="text-[13.5px] font-bold">
        {language === 'ar' ? 'تواصل واتساب' : 'WhatsApp'}
      </span>
    </motion.a>
  );
};
