import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data';
import { waLink } from '../lib/links';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

/** Persistent quick-contact action — appears once the hero is out of view. */
export const FloatingWA: React.FC = () => {
  const { language } = useLanguage();
  const t = portfolioData[language].contact;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <motion.a
      initial={{ opacity: 0, y: 16, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      href={waLink(`${t.waText}: ${language === 'ar' ? 'فرصة عمل / مشروع' : 'a role / project'}`)}
      target="_blank"
      rel="noopener noreferrer"
      className="no-print fixed bottom-5 z-40 flex items-center gap-2.5 rounded-full border px-5 py-3.5 shadow-lg"
      style={{
        insetInlineEnd: 20,
        background: '#12A05A',
        borderColor: 'rgba(255,255,255,0.22)',
        color: '#fff',
        boxShadow: '0 18px 40px -18px rgba(18,160,90,0.75)',
      }}
      aria-label={t.channels[0].label}
    >
      <MessageCircle className="h-[18px] w-[18px]" />
      <span className="text-[13.5px] font-bold">{language === 'ar' ? 'واتساب' : 'WhatsApp'}</span>
    </motion.a>
  );
};
