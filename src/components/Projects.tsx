import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Ruler, ExternalLink } from 'lucide-react';

export const Projects: React.FC = () => {
  const { language } = useLanguage();
  const t = portfolioData[language].projects;

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="section-badge mb-4">{t.badge}</div>
            <h2 className="font-display font-bold tracking-tight text-[2rem] md:text-[2.8rem] leading-[0.95] text-zinc-900 dark:text-white">
              {t.title}
            </h2>
          </div>
          <p className="text-[14px] leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-[360px] font-light">
            {t.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {t.items.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative blueprint-card rounded-[24px] overflow-hidden flex flex-col"
            >
              {/* Image header - blueprint */}
              <div className="relative h-[200px] bg-[#f6f5f1] dark:bg-zinc-900 border-b border-zinc-200/60 dark:border-zinc-800 overflow-hidden">
                <div className="absolute inset-0 blueprint-grid opacity-60" />
                <div className="absolute inset-0 p-4">
                  <svg viewBox="0 0 300 160" className="w-full h-full">
                    {index === 0 && (
                      <>
                        <path d="M 10 100 C 60 80 120 120 180 90 S 250 70 290 85" fill="none" stroke="#0f0f0f" strokeWidth="2" className="dark:stroke-white" />
                        <path d="M 10 105 C 60 85 120 125 180 95 S 250 75 290 90" fill="none" stroke="#0f0f0f" strokeWidth="0.6" opacity="0.4" className="dark:stroke-white" />
                        <circle cx="80" cy="95" r="3" fill="#f59e0b" />
                        <circle cx="160" cy="110" r="3" fill="#0ea5e9" />
                        <circle cx="230" cy="75" r="3" fill="#0f0f0f" className="dark:fill-white" />
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <rect x="20" y="20" width="260" height="120" fill="none" stroke="#0f0f0f" strokeWidth="1.2" strokeDasharray="8 4" className="dark:stroke-zinc-600" />
                        <line x1="20" y1="80" x2="280" y2="80" stroke="#0f0f0f" strokeWidth="0.6" opacity="0.5" className="dark:stroke-white" />
                        <line x1="150" y1="20" x2="150" y2="140" stroke="#0f0f0f" strokeWidth="0.6" opacity="0.5" className="dark:stroke-white" />
                        <rect x="30" y="30" width="90" height="40" fill="none" stroke="#f59e0b" strokeWidth="1" />
                        <rect x="160" y="30" width="90" height="40" fill="none" stroke="#0ea5e9" strokeWidth="1" />
                        <rect x="30" y="90" width="90" height="40" fill="none" stroke="#0f0f0f" strokeWidth="1" className="dark:stroke-white" />
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <rect x="70" y="40" width="160" height="80" fill="none" stroke="#0f0f0f" strokeWidth="1.5" className="dark:stroke-white" />
                        <rect x="85" y="55" width="40" height="30" fill="none" stroke="#f59e0b" strokeWidth="1" />
                        <line x1="10" y1="130" x2="290" y2="130" stroke="#f59e0b" strokeWidth="1" strokeDasharray="6 4" />
                        <circle cx="150" cy="130" r="4" fill="#f59e0b" stroke="white" strokeWidth="1" />
                        <text x="150" y="20" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#71717a">N 0°00' E • 12.5m</text>
                      </>
                    )}
                  </svg>
                </div>
                <div className="absolute top-3 left-3 right-3 flex justify-between">
                  <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold">
                    {project.type}
                  </span>
                  <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-white/90 dark:bg-zinc-800/90 backdrop-blur border text-zinc-600 dark:text-zinc-300">
                    {project.year}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 font-mono text-[9px] text-zinc-400 flex items-center gap-1">
                  <Ruler className="w-3 h-3" /> SCALE 1:500 • {project.location}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-7 flex-1 flex flex-col">
                <h3 className="font-display font-semibold text-[16px] leading-tight text-zinc-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-[13px] leading-[1.6] text-zinc-600 dark:text-zinc-400 font-light flex-1">
                  {project.desc}
                </p>

                <div className="mt-5 pt-5 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-3 font-mono text-[11px] text-zinc-500">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {project.location}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {project.year}</span>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-zinc-900 transition-colors">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="font-mono text-[11px] tracking-widest uppercase text-zinc-400">
            {language === 'en' ? "More projects documentation available upon request • DWG • PDF • Reports" : "مزيد من توثيق المشاريع متاح عند الطلب • DWG • PDF • تقارير"}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
