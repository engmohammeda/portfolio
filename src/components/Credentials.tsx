import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';
import { Chip, FigureLabel, SectionHeader, SectionShell, reveal } from './ui';
import { assetUrl } from '../lib/utils';
import { printResume } from '../lib/links';
import { downloadCv } from '../lib/cv';
import { Download, ExternalLink, FileText, Printer, Award, GraduationCap, Shield, BadgeCheck } from 'lucide-react';

const TYPE_ICONS: Record<string, React.ElementType> = {
  'دبلوم': GraduationCap,
  'شهادة': Award,
  'وثيقة': Shield,
  Diploma: GraduationCap,
  Certificate: Award,
  Document: Shield,
};

export const Credentials: React.FC = () => {
  const { language } = useLanguage();
  const t = portfolioData[language].credentials;

  return (
    <SectionShell id="credentials" tone="panel">
      <SectionHeader no={`06 / ${language === 'ar' ? 'الشهادات' : 'CREDENTIALS'}`} title={t.title} desc={t.desc} />

      {/* CV panel */}
      <motion.div
        {...reveal}
        className="sheet mb-6 overflow-hidden"
        style={{ borderColor: 'var(--line-strong)' }}
      >
        <div className="grid md:grid-cols-[1fr_auto] md:items-center">
          <div className="p-6 md:p-7">
            <div className="flex items-center gap-3">
              <FileText className="h-4 w-4" style={{ color: 'var(--gold)' }} />
              <FigureLabel>{language === 'ar' ? 'المستند الرئيسي' : 'Primary document'}</FigureLabel>
              <Chip tone="live" className="text-[10.5px]!">
                <BadgeCheck className="h-3 w-3" />
                {language === 'ar' ? 'محدّث' : 'Up to date'}
              </Chip>
            </div>
            <h3 className="mt-3 font-display text-[20px] font-bold" style={{ color: 'var(--txt)' }}>
              {t.cvTitle}
            </h3>
            <p className="lede mt-2.5 max-w-[68ch] text-[14px]!">{t.cvDesc}</p>
          </div>

          <div className="flex flex-wrap gap-3 border-t p-6 md:flex-col md:border-s md:border-t-0 md:p-7" style={{ borderColor: 'var(--line)' }}>
            <button type="button" onClick={() => downloadCv(language)} className="btn btn-primary">
              <Download className="h-4 w-4" />
              {t.cvBtn}
            </button>
            <button type="button" onClick={printResume} className="btn btn-outline">
              <Printer className="h-4 w-4" />
              {t.printBtn}
            </button>
          </div>
        </div>
      </motion.div>

      {/* certificates */}
      <div className="grid gap-4 md:grid-cols-2">
        {t.items.map((cert, i) => {
          const Icon = TYPE_ICONS[cert.type] ?? FileText;
          const file = assetUrl(cert.file);
          return (
            <motion.article
              key={cert.title}
              {...reveal}
              transition={{ duration: 0.45, delay: Math.min(i * 0.05, 0.2) }}
              className="sheet sheet-hover flex gap-4 p-5"
            >
              <span
                className="grid h-11 w-11 shrink-0 place-items-center rounded-[10px] border"
                style={{ background: 'var(--panel-2)', borderColor: 'var(--line)' }}
              >
                <Icon className="h-5 w-5" style={{ color: 'var(--gold)' }} />
              </span>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <Chip tone="gold" mono className="text-[10.5px]!">
                    {cert.type}
                  </Chip>
                  <FigureLabel className="text-[10px]!">{cert.date}</FigureLabel>
                </div>
                <h3 className="mt-2 text-[14.5px] font-bold leading-snug" style={{ color: 'var(--txt)' }}>
                  {cert.title}
                </h3>
                <p className="mt-1 text-[12.5px]" style={{ color: 'var(--txt-3)' }}>
                  {cert.issuer} — {cert.note}
                </p>

                <div className="mt-3.5 flex gap-2">
                  <a href={file} download className="btn btn-outline btn-sm">
                    <Download className="h-3.5 w-3.5" />
                    {t.download}
                  </a>
                  <a href={file} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                    <ExternalLink className="h-3.5 w-3.5" />
                    {t.view}
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      <motion.p {...reveal} className="label mt-6">
        {t.docsNote}
      </motion.p>
    </SectionShell>
  );
};
