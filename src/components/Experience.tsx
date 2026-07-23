import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';

export const Experience: React.FC = () => {
  const { language } = useLanguage();
  const t = portfolioData[language].experience;

  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="section-badge mb-4">{t.badge}</div>
          <h2 className="font-display font-bold tracking-tight text-[2rem] md:text-[2.8rem] leading-[0.95] text-zinc-900 dark:text-white">
            {t.title}
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-[35%] top-0 bottom-0 w-[1px] bg-zinc-200 dark:bg-zinc-800 hidden md:block" />
          <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-zinc-200 dark:bg-zinc-800 md:hidden" />

          <div className="space-y-8 md:space-y-12">
            {t.jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative grid grid-cols-1 md:grid-cols-[35%_1fr] gap-4 md:gap-10 group"
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-[35%] top-2 md:top-3 -translate-x-1/2 w-3 h-3 rounded-full bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-white shadow-[0_0_0_4px_white] dark:shadow-[0_0_0_4px_#09090b] group-hover:scale-125 group-hover:border-amber-500 dark:group-hover:border-amber-500 transition-all z-10 hidden md:block" />
                <div className="absolute left-6 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-white shadow-[0_0_0_4px_#fcfbf7] dark:shadow-[0_0_0_4px_#09090b] md:hidden z-10" />

                {/* Left meta */}
                <div className="pl-12 md:pl-0 md:text-right md:pr-12">
                  <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20 mb-3">
                    <Calendar className="w-3 h-3" />
                    {job.period}
                  </div>
                  <div className="font-mono text-[12px] text-zinc-500 dark:text-zinc-400 flex md:justify-end items-center gap-1.5">
                    <MapPin className="w-3 h-3" />
                    {job.location}
                  </div>
                </div>

                {/* Right content */}
                <div className="pl-12 md:pl-0">
                  <div className="blueprint-card rounded-[20px] p-6 md:p-7 group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-shadow">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-9 h-9 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center shrink-0">
                        {index === 0 ? <Briefcase className="w-4 h-4" /> : <GraduationCap className="w-4 h-4" />}
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-[17px] leading-tight text-zinc-900 dark:text-white">
                          {job.role}
                        </h3>
                        <div className="font-medium text-[13px] text-zinc-600 dark:text-zinc-400 mt-1">
                          {job.company}
                        </div>
                      </div>
                    </div>
                    <p className="text-[13.5px] leading-[1.7] text-zinc-600 dark:text-zinc-400 font-light">
                      {job.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
