import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Wrench, FileCheck, CheckCircle2 } from 'lucide-react';

const highlightIcons = [Wrench, MapPin, GraduationCap, FileCheck];

export const About: React.FC = () => {
  const { language } = useLanguage();
  const t = portfolioData[language].about;

  return (
    <section id="about" className="py-24 md:py-36 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1e3a5f]/[0.02] to-transparent dark:via-[#d4a853]/[0.02] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="section-label mb-5">{t.badge}</div>
          <h2 className="font-display font-black tracking-tight leading-[0.95] text-[2rem] md:text-[3rem] lg:text-[3.8rem] text-[#0f172a] dark:text-white max-w-4xl">
            {t.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 space-y-7"
          >
            <p className="text-[17px] md:text-[19px] leading-[1.8] text-[#475569] dark:text-white/70 font-light">
              {t.p1}
            </p>
            <p className="text-[16px] md:text-[17px] leading-[1.8] text-[#475569]/80 dark:text-white/50 font-light">
              {t.p2}
            </p>

            {/* Quote */}
            <div className="pt-8 flex gap-4">
              <div className="shrink-0 mt-1">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4a853]/20 to-[#d4a853]/5 dark:from-[#d4a853]/30 dark:to-[#d4a853]/10 border border-[#d4a853]/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#d4a853]" />
                </div>
              </div>
              <div>
                <div className="w-12 h-[2px] bg-gradient-to-r from-[#d4a853] to-transparent mb-4 rounded-full" />
                <p className="font-mono text-[12px] md:text-[13px] leading-relaxed tracking-wide text-[#1e3a5f] dark:text-[#e8c675]/80 italic">
                  "{t.quote}"
                </p>
              </div>
            </div>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="glass-card rounded-[28px] p-7 md:p-8 glass-card-hover">
              <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#d4a853] mb-6 flex items-center gap-2">
                <FileCheck className="w-3.5 h-3.5" />
                Professional Profile
              </div>

              <div className="space-y-0">
                {t.highlights.map((h, i) => {
                  const Icon = highlightIcons[i];
                  return (
                    <div key={i} className="flex gap-4 py-5 border-b border-[#1e3a5f]/5 dark:border-white/5 last:border-0">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1e3a5f]/10 to-[#1e3a5f]/5 dark:from-[#d4a853]/15 dark:to-[#d4a853]/5 flex items-center justify-center shrink-0">
                        <Icon className="w-4.5 h-4.5 text-[#1e3a5f] dark:text-[#d4a853]" />
                      </div>
                      <div>
                        <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#475569]/60 dark:text-white/40 mb-1.5">{h.label}</div>
                        <div className="font-semibold text-[14px] text-[#0f172a] dark:text-white leading-snug">{h.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Availability */}
              <div className="mt-7 rounded-2xl bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8e] dark:from-[#d4a853] dark:to-[#e8c675] text-white dark:text-[#0f172a] p-5 flex items-center justify-between">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.15em] opacity-70">Status</div>
                  <div className="font-bold text-[14px] mt-1.5">
                    {language === 'en' ? "Available for Projects" : "متاح للمشاريع"}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 opacity-80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white dark:bg-[#0f172a] animate-pulse shadow-[0_0_0_4px_rgba(255,255,255,0.2)] dark:shadow-[0_0_0_4px_rgba(15,23,42,0.2)]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
