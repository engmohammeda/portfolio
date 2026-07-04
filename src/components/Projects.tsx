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
      className="py-24 sm:py-32 relative"
    >
      <div className="flex items-center gap-3 mb-10">
        <FolderGit2 className="w-5 h-5 text-black dark:text-white" />
        <h3 className="text-[13px] font-bold uppercase tracking-widest text-black dark:text-white">{t.title}</h3>
      </div>
      
      <div className="p-24 border border-gray-200/60 dark:border-white/10 rounded-[3rem] flex flex-col items-center justify-center bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        {/* Decorative terminal-like background elements */}
        <div className="absolute top-8 left-8 flex gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-amber-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        
        <p className="font-mono text-base text-gray-500 dark:text-gray-400 tracking-[0.2em] uppercase mt-4 relative z-10">{t.comingSoon}</p>
      </div>
    </motion.section>
  );
};
