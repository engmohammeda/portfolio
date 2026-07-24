import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Ruler, ArrowUpRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const { language } = useLanguage();
  const t = portfolioData[language].projects;

  return (
    <section id="projects" className="py-24 md:py-36 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1e3a5f]/[0.015] to-transparent dark:via-[#d4a853]/[0.015] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div className="max-w-lg">
            <div className="section-label mb-5">{t.badge}</div>
            <h2 className="font-display font-black tracking-tight text-[2rem] md:text-[3rem] leading-[0.95] text-[#0f172a] dark:text-white">
              {t.title}
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-[#475569] dark:text-white/50 max-w-[380px] font-light">
            {t.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="glass-card glass-card-hover rounded-[28px] overflow-hidden flex flex-col h-full">
                {/* Preview Header - Blueprint */}
                <div className="relative h-[220px] bg-gradient-to-br from-[#f8f9fc] to-white dark:from-[#0f172a] dark:to-[#06080f] border-b border-[#1e3a5f]/5 dark:border-white/5 overflow-hidden">
                  <div className="absolute inset-0 grid-overlay-fine opacity-40" />
                  <div className="absolute inset-0 p-5">
                    <svg viewBox="0 0 300 160" className="w-full h-full">
                      {index === 0 && (
                        <>
                          {/* Road project */}
                          <path d="M 10 100 C 60 80 120 120 180 90 S 250 70 290 85" fill="none" stroke="#1e3a5f" strokeWidth="2.5" className="dark:stroke-white" />
                          <path d="M 10 105 C 60 85 120 125 180 95 S 250 75 290 90" fill="none" stroke="#1e3a5f" strokeWidth="0.8" opacity="0.4" className="dark:stroke-white" />
                          <path d="M 10 95 C 60 75 120 115 180 85 S 250 65 290 80" fill="none" stroke="#1e3a5f" strokeWidth="0.8" opacity="0.4" className="dark:stroke-white" />
                          <circle cx="80" cy="95" r="4" fill="#d4a853" />
                          <circle cx="160" cy="110" r="4" fill="#2d5a8e" className="dark:fill-[#e8c675]" />
                          <circle cx="230" cy="75" r="4" fill="#1e3a5f" className="dark:fill-white" />
                          <text x="150" y="20" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#475569" className="dark:fill-white/50">ROAD CENTERLINE • 15KM</text>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          {/* Land subdivision */}
                          <rect x="20" y="20" width="260" height="120" fill="none" stroke="#1e3a5f" strokeWidth="1.5" strokeDasharray="8 4" className="dark:stroke-white/40" />
                          <line x1="20" y1="80" x2="280" y2="80" stroke="#1e3a5f" strokeWidth="0.8" opacity="0.5" className="dark:stroke-white/30" />
                          <line x1="150" y1="20" x2="150" y2="140" stroke="#1e3a5f" strokeWidth="0.8" opacity="0.5" className="dark:stroke-white/30" />
                          <rect x="30" y="30" width="90" height="40" fill="none" stroke="#d4a853" strokeWidth="1.2" />
                          <rect x="160" y="30" width="90" height="40" fill="none" stroke="#2d5a8e" strokeWidth="1.2" className="dark:stroke-[#e8c675]" />
                          <rect x="30" y="90" width="90" height="40" fill="none" stroke="#1e3a5f" strokeWidth="1.2" className="dark:stroke-white/50" />
                          <text x="150" y="155" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#475569" className="dark:fill-white/50">48 PLOTS • 12,000 m²</text>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          {/* Building layout */}
                          <rect x="70" y="40" width="160" height="80" fill="none" stroke="#1e3a5f" strokeWidth="2" className="dark:stroke-white" />
                          <rect x="85" y="55" width="40" height="30" fill="none" stroke="#d4a853" strokeWidth="1.2" />
                          <rect x="140" y="55" width="30" height="25" fill="none" stroke="#2d5a8e" strokeWidth="1" className="dark:stroke-[#e8c675]" />
                          <line x1="10" y1="130" x2="290" y2="130" stroke="#d4a853" strokeWidth="1.2" strokeDasharray="6 4" />
                          <circle cx="150" cy="130" r="5" fill="#d4a853" stroke="white" strokeWidth="1.5" />
                          <text x="150" y="20" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#475569" className="dark:fill-white/50">BM • N 0°00' E • 12.5m</text>
                        </>
                      )}
                    </svg>
                  </div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <span className="font-mono text-[10px] font-bold px-3 py-1.5 rounded-full bg-[#1e3a5f] dark:bg-white text-white dark:text-[#0f172a] shadow-lg">
                      {project.type}
                    </span>
                    <span className="font-mono text-[10px] font-semibold px-3 py-1.5 rounded-full bg-white/90 dark:bg-[#0f172a]/90 backdrop-blur border border-[#1e3a5f]/10 dark:border-white/10 text-[#475569] dark:text-white/70">
                      {project.year}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 font-mono text-[9px] text-[#475569] dark:text-white/40 flex items-center gap-1.5">
                    <Ruler className="w-3 h-3" /> SCALE 1:500 • {project.location}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex-1 flex flex-col">
                  <h3 className="font-display font-bold text-[17px] leading-tight text-[#0f172a] dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-[13.5px] leading-[1.7] text-[#475569] dark:text-white/50 font-light flex-1 mb-6">
                    {project.desc}
                  </p>

                  {/* Stats */}
                  {project.stats && (
                    <div className="grid grid-cols-3 gap-3 mb-5 pt-5 border-t border-[#1e3a5f]/5 dark:border-white/5">
                      {Object.entries(project.stats).slice(0, 3).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="font-mono text-[11px] font-bold text-[#1e3a5f] dark:text-[#e8c675]">{value}</div>
                          <div className="font-mono text-[9px] text-[#475569]/50 dark:text-white/30 uppercase tracking-wider mt-1">{key}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-5 border-t border-[#1e3a5f]/5 dark:border-white/5">
                    <div className="flex items-center gap-3 font-mono text-[11px] text-[#475569]/60 dark:text-white/40">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {project.location}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {project.year}</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#1e3a5f]/5 dark:bg-white/5 flex items-center justify-center group-hover:bg-[#d4a853] group-hover:text-white dark:group-hover:bg-[#d4a853] dark:group-hover:text-[#0f172a] text-[#475569] dark:text-white/50 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
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
          className="mt-12 text-center"
        >
          <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#475569]/50 dark:text-white/30">
            {language === 'en' 
              ? "More project documentation available upon request • DWG • PDF • Reports" 
              : "مزيد من توثيق المشاريع متاح عند الطلب • DWG • PDF • تقارير"}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
