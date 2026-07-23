import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Wrench, FileCheck } from 'lucide-react';

export const About: React.FC = () => {
  const { language } = useLanguage();
  const t = portfolioData[language].about;

  return (
    <section id="about" className="py-24 md:py-36 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-16"
        >
          <div className="section-badge mb-6">{t.badge}</div>
          <h2 className="font-display font-bold tracking-tight leading-[0.95] text-[2rem] md:text-[3rem] lg:text-[3.5rem] text-zinc-900 dark:text-white max-w-4xl">
            {t.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-[17px] md:text-[19px] leading-[1.7] text-zinc-700 dark:text-zinc-300 font-light">
              {t.p1}
            </p>
            <p className="text-[16px] md:text-[17px] leading-[1.8] text-zinc-600 dark:text-zinc-400 font-light">
              {t.p2}
            </p>

            <div className="pt-8 flex gap-3">
              <div className="h-[1px] w-12 bg-zinc-900 dark:bg-white mt-3 shrink-0" />
              <p className="font-mono text-[12px] leading-relaxed tracking-wide text-zinc-500 dark:text-zinc-400">
                {language === 'en'
                  ? "Every millimeter matters in surveying. My job is to ensure the field reality matches the blueprint with the highest possible accuracy."
                  : "كل مليمتر مهم في المساحة. وظيفتي هي التأكد من أن الواقع الميداني يطابق المخطط بأعلى دقة ممكنة."}
              </p>
            </div>
          </motion.div>

          {/* Highlights - Blueprint style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="blueprint-card rounded-[24px] p-6 md:p-8">
              <div className="font-mono text-[11px] tracking-widest uppercase text-zinc-400 mb-6 flex items-center gap-2">
                <FileCheck className="w-3.5 h-3.5" />
                Professional Profile
              </div>
              <div className="space-y-5">
                {t.highlights.map((h, i) => (
                  <div key={i} className="flex gap-4 pb-5 border-b border-zinc-100 dark:border-zinc-800 last:border-0 last:pb-0">
                    <div className="w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shrink-0 mt-0.5">
                      {i === 0 && <Wrench className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />}
                      {i === 1 && <MapPin className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />}
                      {i === 2 && <GraduationCap className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />}
                      {i === 3 && <FileCheck className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />}
                    </div>
                    <div>
                      <div className="font-mono text-[10px] tracking-widest uppercase text-zinc-400 mb-1">{h.label}</div>
                      <div className="font-medium text-[14px] text-zinc-900 dark:text-white leading-snug">{h.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl bg-amber-500 text-white p-4 flex items-center justify-between">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest opacity-80">Status</div>
                  <div className="font-semibold text-[13px] mt-1">{language === 'en' ? "Available for projects" : "متاح للمشاريع الميدانية"}</div>
                </div>
                <div className="w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_0_6px_rgba(255,255,255,0.2)]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
