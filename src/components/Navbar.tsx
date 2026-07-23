import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../data';
import { Printer, Globe, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage, dir } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = portfolioData[language].nav;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-4 pt-6 no-print pointer-events-none">
      <motion.nav 
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "pointer-events-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 px-6 py-3 rounded-2xl md:rounded-full transition-all duration-300 backdrop-blur-xl border shadow-lg",
          scrolled 
            ? "bg-white/80 dark:bg-slate-900/80 border-gray-200/50 dark:border-white/10 shadow-black/5" 
            : "bg-white/50 dark:bg-slate-900/50 border-gray-200/30 dark:border-white/5 shadow-none"
        )}
      >
        <div className="flex items-center gap-4 sm:gap-6 text-[12px] md:text-[13px] font-medium text-gray-500 dark:text-gray-400 overflow-x-auto no-scrollbar w-full md:w-auto justify-start">
          <a href="#intro" className="hover:text-black dark:hover:text-white transition-colors whitespace-nowrap">{t.intro}</a>
          <a href="#engineering" className="hover:text-black dark:hover:text-white transition-colors whitespace-nowrap">{t.engineering}</a>
          <a href="#technology" className="hover:text-black dark:hover:text-white transition-colors whitespace-nowrap">{t.technology}</a>
          <a href="#projects" className="hover:text-black dark:hover:text-white transition-colors whitespace-nowrap">{t.projects}</a>
          <a href="#contact" className="hover:text-black dark:hover:text-white transition-colors whitespace-nowrap">{t.contact}</a>
        </div>
        
        <div className="flex items-center gap-5 justify-between w-full md:w-auto border-t md:border-none border-gray-200/50 dark:border-white/10 pt-3 md:pt-0">
          <div className="flex items-center gap-4 border-r md:border-none border-gray-200/50 dark:border-white/10 pr-4 md:pr-0">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              title="Toggle Language"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase tracking-widest text-[10px] font-bold mt-0.5">{language === 'en' ? 'عربي' : 'EN'}</span>
            </button>

            <button
              onClick={toggleTheme}
              className="flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              title="Toggle Theme"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
          </div>
          
          <button 
            onClick={handlePrint}
            className="flex items-center gap-1.5 text-[12px] font-medium bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-full hover:scale-105 transition-all shadow-sm"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>{t.downloadCV}</span>
          </button>
        </div>
      </motion.nav>
    </div>
  );
};
