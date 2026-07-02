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
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <motion.section 
      id="intro"
      variants={container}
      initial="hidden"
      animate="show"
      className="pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      <motion.div variants={item} className="mb-4">
        <span className="inline-block px-3 py-1 bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold uppercase tracking-widest rounded-full">
          {t.title}
        </span>
      </motion.div>

      <motion.h1 
        variants={item} 
        className="text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tighter text-black dark:text-white mb-6 leading-[1.05]"
      >
        {t.name}
      </motion.h1>
      
      <motion.p 
        variants={item} 
        className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-2xl mb-12 leading-relaxed tracking-tight"
      >
        {t.tagline}
      </motion.p>
      
      <motion.div variants={item} className="flex items-center gap-4 no-print">
        <a href="#contact" className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
          {language === 'en' ? 'Get in touch' : 'تواصل معي'}
        </a>
      </motion.div>
    </motion.section>
  );
};
