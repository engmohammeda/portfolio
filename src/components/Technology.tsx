import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export const Technology: React.FC = () => {
  const { language } = useLanguage();
  const t = portfolioData[language].technology;

  return (
    <motion.section 
      id="technology"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="py-16 sm:py-24 border-t border-gray-200/60"
    >
      <div className="flex items-center gap-3 mb-10">
        <Terminal className="w-4 h-4 text-gray-400" />
        <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-400">{t.title}</h3>
      </div>
      
      <div className="max-w-3xl">
        <p className="text-xl sm:text-2xl text-gray-600 mb-12 leading-relaxed tracking-tight">
          {t.description}
        </p>
        
        <div className="flex flex-wrap gap-3">
          {t.items.map((item, index) => (
            <div 
              key={index} 
              className="px-5 py-3 bg-white text-black rounded-xl text-sm font-semibold border border-gray-200/60 shadow-sm hover:border-black/20 hover:shadow-md transition-all cursor-default"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
