import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { cn } from '../lib/utils';

export const Technology: React.FC = () => {
  const { language } = useLanguage();
  const t = portfolioData[language].technology;

  return (
    <motion.section 
      id="technology"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="py-24 sm:py-32 relative"
    >
      <div className="flex items-center gap-3 mb-10">
        <Terminal className="w-5 h-5 text-black dark:text-white" />
        <h3 className="text-[13px] font-bold uppercase tracking-widest text-black dark:text-white">{t.title}</h3>
      </div>
      
      <div className="max-w-4xl">
        <p className="text-xl sm:text-3xl text-gray-600 dark:text-gray-300 mb-16 leading-relaxed tracking-tight font-light">
          {t.description}
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {t.items.map((item, index) => (
            <motion.div 
              whileHover={{ y: -5 }}
              key={index} 
              className={cn(
                "p-8 rounded-3xl border border-gray-200/60 dark:border-white/10 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-800 transition-colors duration-300 relative overflow-hidden group",
                index === 1 ? "sm:col-span-2 md:col-span-2" : "",
                index === 4 ? "sm:col-span-2 md:col-span-2" : ""
              )}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-blue-500/10 dark:from-green-500/20 dark:to-blue-500/20 rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="font-mono text-xs text-green-600 dark:text-green-400 mb-4 font-bold tracking-wider">0{index + 1}</div>
              <span className="text-xl font-semibold text-black dark:text-white block relative z-10">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
