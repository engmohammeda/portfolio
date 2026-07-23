import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';
import { Download, Eye, FileText, GraduationCap, Award, Shield } from 'lucide-react';

const typeIcons: Record<string, React.ElementType> = {
  Diploma: GraduationCap,
  شهادة: GraduationCap,
  Course: Award,
  دورة: Award,
  Document: Shield,
  وثيقة: Shield,
};

export const Certificates: React.FC = () => {
  const { language } = useLanguage();
  const t = portfolioData[language].certificates;

  return (
    <section id="certificates" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 -z-10 bg-zinc-50/50 dark:bg-zinc-900/20" />

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
          <div className="max-w-[360px]">
            <p className="text-[14px] leading-relaxed text-zinc-600 dark:text-zinc-400 font-light mb-3">
              {t.description}
            </p>
            <p className="font-mono text-[11px] text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 border border-amber-200/50 dark:border-amber-900/50 rounded-full px-3 py-1.5 inline-flex">
              {t.note}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {t.items.map((cert, index) => {
            const Icon = typeIcons[cert.type] || FileText;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -3 }}
                className="group relative blueprint-card rounded-[20px] p-6 flex gap-4"
              >
                <div className="w-14 h-14 rounded-[14px] bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h3 className="font-display font-semibold text-[15px] leading-tight text-zinc-900 dark:text-white truncate">
                      {cert.title}
                    </h3>
                    <span className="font-mono text-[10px] px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 shrink-0">
                      {cert.type}
                    </span>
                  </div>
                  <div className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400 flex items-center gap-3 mb-4">
                    <span>{cert.issuer}</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                    <span>{cert.date}</span>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={cert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-[12px] font-semibold hover:scale-[1.02] transition-transform"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      {t.view}
                    </a>
                    <a
                      href={cert.file}
                      download
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-[12px] font-medium hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      {t.download}
                    </a>
                  </div>
                </div>

                {/* watermark */}
                <div className="absolute bottom-0 right-6 font-mono text-[40px] font-bold leading-none text-zinc-100 dark:text-zinc-800 opacity-60 group-hover:opacity-80 transition-opacity select-none pointer-events-none">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CV Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 rounded-[24px] bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 p-7 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/20 rounded-full blur-[60px] -mr-32 -mt-32 pointer-events-none" />
          <div className="relative z-10">
            <div className="font-mono text-[11px] tracking-widest uppercase opacity-60 mb-2">Curriculum Vitae</div>
            <h3 className="font-display font-bold text-[20px] md:text-[24px] leading-tight mb-2">
              {language === 'en' ? "Complete CV & Portfolio PDF" : "السيرة الذاتية الكاملة PDF"}
            </h3>
            <p className="text-[13px] opacity-70 font-light max-w-md">
              {language === 'en'
                ? "Download the full CV with all experience, education, skills and project list in one professional PDF document ready for printing."
                : "حمّل السيرة الذاتية الكاملة مع كل الخبرات والتعليم والمهارات وقائمة المشاريع في ملف PDF احترافي جاهز للطباعة."}
            </p>
          </div>
          <div className="relative z-10 flex gap-3 shrink-0">
            <a
              href="/portfolio/cv/mohammed-albakhity-cv.pdf"
              download
              className="inline-flex items-center gap-2 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white px-6 py-3 rounded-full text-[14px] font-semibold shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-transform"
            >
              <Download className="w-4 h-4" />
              {language === 'en' ? "Download CV" : "تحميل السيرة"}
            </a>
            <a
              href="/portfolio/cv/mohammed-albakhity-cv.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 bg-white/10 dark:bg-zinc-900/10 backdrop-blur border border-white/20 dark:border-zinc-900/20 text-white dark:text-zinc-900 px-6 py-3 rounded-full text-[14px] font-medium hover:bg-white/20 transition-colors"
            >
              <Eye className="w-4 h-4" />
              {t.view}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
