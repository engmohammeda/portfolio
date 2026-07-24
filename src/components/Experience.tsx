import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';

export const Experience: React.FC = () => {
  const { language } = useLanguage();
  const t = portfolioData[language].experience;

  return (
    <section id="experience" className="py-24 md:py-36 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="section-label mb-5">{t.badge}</div>
          <h2 className="font-display font-black tracking-tight text-[2rem] md:text-[3rem] leading-[0.95] text-[#0f172a] dark:text-white">
            {t.title}
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="timeline-line hidden md:block" />
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#d4a853] via-[#1e3a5f]/20 to-transparent md:hidden" />

          <div className="space-y-12 md:space-y-16">
            {t.jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.6 }}
                className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-10 group"
              >
                {/* Left meta (desktop) */}
                <div className={`hidden md:block ${index % 2 === 0 ? 'text-right pr-10' : 'order-last pl-10'}`}>
                  <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase px-4 py-2 rounded-full bg-gradient-to-r from-[#d4a853]/10 to-[#d4a853]/5 border border-[#d4a853]/20 text-[#b8912e] dark:text-[#e8c675] mb-3">
                    <Calendar className="w-3 h-3" />
                    {job.period}
                  </div>
                  <div className="font-mono text-[12px] text-[#475569] dark:text-white/50 flex items-center gap-2 justify-end">
                    <MapPin className="w-3.5 h-3.5" />
                    {job.location}
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex items-start justify-center pt-3">
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-white dark:bg-[#06080f] border-[3px] border-[#d4a853] shadow-[0_0_0_6px_rgba(212,168,83,0.1)] group-hover:scale-125 group-hover:border-[#1e3a5f] dark:group-hover:border-[#d4a853] transition-all duration-300 z-10" />
                  </div>
                </div>

                {/* Content card */}
                <div className={`${index % 2 === 0 ? 'md:order-last md:pl-10' : 'md:pr-10'} pl-12 md:pl-0`}>
                  {/* Mobile meta */}
                  <div className="md:hidden mb-4">
                    <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase px-3 py-1.5 rounded-full bg-[#d4a853]/10 border border-[#d4a853]/20 text-[#b8912e] dark:text-[#e8c675] mb-2">
                      <Calendar className="w-3 h-3" />
                      {job.period}
                    </div>
                    <div className="font-mono text-[11px] text-[#475569] dark:text-white/50 flex items-center gap-1.5">
                      <MapPin className="w-3 h-3" />
                      {job.location}
                    </div>
                  </div>

                  {/* Mobile dot */}
                  <div className="absolute left-6 top-6 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-white dark:bg-[#06080f] border-[3px] border-[#d4a853] shadow-[0_0_0_4px_rgba(212,168,83,0.15)] md:hidden z-10" />

                  <div className="glass-card rounded-[24px] p-7 md:p-8 group-hover:shadow-[0_8px_32px_rgba(30,58,95,0.08)] dark:group-hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-500">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8e] dark:from-[#d4a853] dark:to-[#b8912e] flex items-center justify-center shrink-0 shadow-lg">
                        {job.type === 'work' 
                          ? <Briefcase className="w-5 h-5 text-white dark:text-[#0f172a]" />
                          : <GraduationCap className="w-5 h-5 text-white dark:text-[#0f172a]" />
                        }
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-[17px] leading-tight text-[#0f172a] dark:text-white">
                          {job.role}
                        </h3>
                        <div className="font-medium text-[13px] text-[#475569] dark:text-white/50 mt-1.5">
                          {job.company}
                        </div>
                      </div>
                    </div>
                    <p className="text-[14px] leading-[1.8] text-[#475569] dark:text-white/50 font-light">
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
