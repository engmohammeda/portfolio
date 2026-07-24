import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';
import { Download, Eye, FileText, GraduationCap, Award, Shield } from 'lucide-react';

const typeIcons: Record<string, React.ElementType> = {
  Diploma: GraduationCap,
  دبلوم: GraduationCap,
  Certificate: Award,
  شهادة: Award,
  Document: Shield,
  وثيقة: Shield,
};

export const Certificates: React.FC = () => {
  const { language } = useLanguage();
  const t = portfolioData[language].certificates;

  return (
    <section id="certificates" className="py-24 md:py-36 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8f9fc]/50 to-transparent dark:from-[#0f172a]/30 dark:to-transparent pointer-events-none" />

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

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {t.items.map((cert, index) => {
            const Icon = typeIcons[cert.type] || FileText;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                className="group glass-card glass-card-hover rounded-[24px] p-6 md:p-7 flex gap-5 relative overflow-hidden"
              >
                {/* Number watermark */}
                <div className="absolute -bottom-4 -right-2 font-mono text-[80px] font-black leading-none text-[#1e3a5f]/[0.03] dark:text-white/[0.03] select-none pointer-events-none group-hover:text-[#d4a853]/10 dark:group-hover:text-[#d4a853]/10 transition-colors duration-700">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8e] dark:from-[#d4a853] dark:to-[#b8912e] flex items-center justify-center shrink-0 shadow-lg shadow-[#1e3a5f]/15 dark:shadow-[#d4a853]/15 group-hover:scale-105 transition-transform duration-500">
                  <Icon className="w-6 h-6 text-white dark:text-[#0f172a]" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 relative z-10">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-display font-bold text-[15px] leading-tight text-[#0f172a] dark:text-white truncate">
                      {cert.title}
                    </h3>
                    <span className="font-mono text-[9px] px-2.5 py-1 rounded-full bg-[#d4a853]/10 text-[#b8912e] dark:text-[#e8c675] border border-[#d4a853]/20 shrink-0 font-semibold tracking-wider uppercase">
                      {cert.type}
                    </span>
                  </div>
                  <div className="font-mono text-[11px] text-[#475569]/60 dark:text-white/40 flex items-center gap-3 mb-5">
                    <span>{cert.issuer}</span>
                    <span className="w-1 h-1 rounded-full bg-[#d4a853]/50" />
                    <span>{cert.date}</span>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={cert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1e3a5f] dark:bg-[#d4a853] text-white dark:text-[#0f172a] text-[12px] font-bold hover:scale-[1.03] active:scale-[0.97] transition-transform shadow-md shadow-[#1e3a5f]/15 dark:shadow-[#d4a853]/15"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      {t.view}
                    </a>
                    <a
                      href={cert.file}
                      download
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-white/5 border border-[#1e3a5f]/10 dark:border-white/10 text-[#475569] dark:text-white/70 text-[12px] font-semibold hover:bg-[#f8f9fc] dark:hover:bg-white/10 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      {t.download}
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CV Download Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-[28px] bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8e] dark:from-[#0f172a] dark:to-[#1e3a5f] text-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative shine-effect"
        >
          {/* Background accents */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#d4a853]/15 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[60px] -ml-20 -mb-20 pointer-events-none" />

          <div className="relative z-10">
            <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#d4a853] mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Curriculum Vitae
            </div>
            <h3 className="font-display font-black text-[22px] md:text-[28px] leading-tight mb-3">
              {t.cvTitle}
            </h3>
            <p className="text-[14px] opacity-70 font-light max-w-md leading-relaxed">
              {t.cvDesc}
            </p>
          </div>

          <div className="relative z-10 flex gap-3 shrink-0">
            <a
              href="/portfolio/cv/mohammed-albakhity-cv.pdf"
              download
              className="inline-flex items-center gap-2 bg-[#d4a853] hover:bg-[#e8c675] text-[#0f172a] px-7 py-3.5 rounded-full text-[14px] font-bold shadow-xl shadow-[#d4a853]/25 hover:scale-[1.03] active:scale-[0.97] transition-all"
            >
              <Download className="w-4.5 h-4.5" />
              {language === 'en' ? "Download CV" : "تحميل السيرة"}
            </a>
            <a
              href="/portfolio/cv/mohammed-albakhity-cv.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/15 text-white px-6 py-3.5 rounded-full text-[14px] font-medium transition-colors"
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
