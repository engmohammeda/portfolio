import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data';
import { Printer, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage, dir } = useLanguage();
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
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 no-print backdrop-blur-md",
        scrolled ? "bg-white/80 border-b border-gray-200/50 shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        <div className="flex items-center gap-4 sm:gap-6 text-[12px] md:text-[13px] font-medium text-gray-500 overflow-x-auto no-scrollbar w-full md:w-auto pb-1 md:pb-0 justify-start">
          <a href="#intro" className="hover:text-black transition-colors whitespace-nowrap">{t.intro}</a>
          <a href="#engineering" className="hover:text-black transition-colors whitespace-nowrap">{t.engineering}</a>
          <a href="#technology" className="hover:text-black transition-colors whitespace-nowrap">{t.technology}</a>
          <a href="#projects" className="hover:text-black transition-colors whitespace-nowrap">{t.projects}</a>
          <a href="#contact" className="hover:text-black transition-colors whitespace-nowrap">{t.contact}</a>
        </div>
        
        <div className="flex items-center gap-4 justify-between w-full md:w-auto border-t md:border-none border-gray-200/50 pt-3 md:pt-0">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 text-[13px] font-medium text-gray-600 hover:text-black transition-colors"
            title="Toggle Language"
          >
            <Globe className="w-3.5 h-3.5" />
            <span className="uppercase tracking-widest text-[10px] font-bold mt-0.5">{language === 'en' ? 'عربي' : 'EN'}</span>
          </button>
          
          <button 
            onClick={handlePrint}
            className="flex items-center gap-1.5 text-[12px] font-medium bg-black text-white px-3 py-1.5 rounded-full hover:bg-gray-800 transition-colors shadow-sm"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>{t.downloadCV}</span>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};
