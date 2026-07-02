import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';
import { FolderGit2 } from 'lucide-react';

export const Projects: React.FC = () => {
  const { language } = useLanguage();
  const t = portfolioData[language].projects;

  return (
    <motion.section 
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="py-16 sm:py-24 border-t border-gray-200/60 dark:border-gray-800/60"
    >
      <div className="flex items-center gap-3 mb-10">
        <FolderGit2 className="w-4 h-4 text-gray-400 dark:text-gray-500" />
        <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">{t.title}</h3>
      </div>
      
      <div className="p-16 border border-gray-200/60 dark:border-gray-800/60 rounded-3xl flex flex-col items-center justify-center bg-white dark:bg-slate-900 shadow-sm relative overflow-hidden group">
        {/* Decorative terminal-like background elements */}
        <div className="absolute top-4 left-4 flex gap-1.5 opacity-50 group-hover:opacity-100 transition-opacity">
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-gray-700"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-gray-700"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-gray-700"></div>
        </div>
        
        <p className="font-mono text-sm text-gray-400 dark:text-gray-500 tracking-widest uppercase mt-4">{t.comingSoon}</p>
      </div>
    </motion.section>
  );
};
