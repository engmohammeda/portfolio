import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  const { language } = useLanguage();
  const t = portfolioData[language].about;

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="py-16 sm:py-24 border-t border-gray-200/60"
    >
      <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-10">{t.title}</h3>
      <div className="text-2xl sm:text-3xl lg:text-4xl text-black leading-snug tracking-tight font-medium space-y-8 max-w-3xl">
        <p>{t.p1}</p>
        <p className="text-gray-400">{t.p2}</p>
      </div>
    </motion.section>
  );
};
