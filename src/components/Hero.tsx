import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';

// Using a simple X icon as lucide doesn't have the official X logo yet
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export const Hero: React.FC = () => {
  const { language, dir } = useLanguage();
  const t = portfolioData[language].hero;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <motion.section 
      id="intro"
      variants={container}
      initial="hidden"
      animate="show"
      className="pt-32 pb-24 sm:pt-48 sm:pb-32 flex flex-col items-start justify-center min-h-[90vh]"
    >
      <motion.div variants={item} className="mb-6 flex items-center gap-3">
        <div className="h-[1px] w-8 bg-black dark:bg-white/30" />
        <span className="inline-block text-gray-500 dark:text-gray-400 text-[11px] font-mono uppercase tracking-[0.2em]">
          {t.title}
        </span>
      </motion.div>

      <motion.h1 
        variants={item} 
        className="text-[3.5rem] sm:text-[5rem] lg:text-[6.5rem] font-bold tracking-tight text-black dark:text-white mb-6 leading-[1.05] font-display max-w-5xl"
      >
        <span className="block text-2xl sm:text-3xl lg:text-4xl text-gray-400 dark:text-gray-500 font-sans tracking-normal mb-4 font-normal">
          {language === 'en' ? "I'm" : "أنا"} {t.name},
        </span>
        <span className="block">{language === 'en' ? 'Crafting' : 'بناء'}</span>
        <span className="block bg-gradient-to-r from-blue-600 via-purple-500 to-sky-400 text-gradient pb-2">
          {language === 'en' ? 'Digital Solutions' : 'حلول رقمية'}
        </span>
      </motion.h1>
      
      <motion.p 
        variants={item} 
        className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-12 leading-relaxed font-light"
      >
        {t.tagline}
      </motion.p>
      
      <motion.div variants={item} className="flex flex-wrap items-center gap-4 no-print">
        <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full text-[15px] font-medium hover:scale-105 transition-transform duration-300 shadow-xl shadow-black/10 dark:shadow-white/10">
          {language === 'en' ? 'Start a project' : 'ابدأ مشروعاً'}
          <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
        <a href="#engineering" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-[15px] font-medium text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300">
          {language === 'en' ? 'View my work' : 'شاهد أعمالي'}
        </a>
      </motion.div>
    </motion.section>
  );
};
