import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';

export const EngineeringBackground: React.FC = () => {
  const { language } = useLanguage();
  const t = portfolioData[language].engineering;

  return (
    <motion.section 
      id="engineering"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="py-16 sm:py-24 border-t border-gray-200/60"
    >
      <div className="flex items-center gap-3 mb-10">
        <Compass className="w-4 h-4 text-gray-400" />
        <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-400">{t.title}</h3>
      </div>
      
      <div className="max-w-3xl">
        <p className="text-xl sm:text-2xl text-gray-600 mb-12 leading-relaxed tracking-tight">
          {t.description}
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
          {t.items.map((item, index) => (
            <div key={index} className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="font-mono text-[10px] text-gray-400 mt-1 font-bold">0{index + 1}</div>
              <span className="text-lg font-medium text-black">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
