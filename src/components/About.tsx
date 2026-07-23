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
      className="py-24 sm:py-32 relative"
    >
      <h3 className="text-[13px] font-bold uppercase tracking-widest text-black dark:text-white mb-10">{t.title}</h3>
      <div className="text-2xl sm:text-3xl lg:text-4xl text-black dark:text-white leading-snug tracking-tight font-medium space-y-8 max-w-4xl">
        <p className="font-light">{t.p1}</p>
        <p className="text-gray-500 dark:text-gray-400 font-light">{t.p2}</p>
      </div>
    </motion.section>
  );
};
