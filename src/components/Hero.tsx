import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData, identity } from '../data';
import { motion } from 'framer-motion';
import { Chip, FigureLabel, StatCell, reveal } from './ui';
import { Console } from './Console';
import { waLink, updatedLabel } from '../lib/links';
import { Download, FileText, MapPin, ArrowLeft, ArrowRight, Ruler } from 'lucide-react';
import { downloadCv } from '../lib/cv';

export const Hero: React.FC = () => {
  const { language, dir } = useLanguage();
  const t = portfolioData[language].hero;
  const contact = portfolioData[language].contact;
  const cv = portfolioData[language].credentials;
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <section id="top" className="paper relative pt-[92px] md:pt-[104px]">
      <div className="wrap pb-14 md:pb-20">
        {/* meta strip */}
        <motion.div {...reveal} className="flex flex-wrap items-center gap-3 border-b pb-4" style={{ borderColor: 'var(--line)' }}>
          <Chip tone="live">
            <span className="status-dot" />
            {t.status}
          </Chip>
          <FigureLabel className="ms-auto flex items-center gap-2">
            <Ruler className="h-3.5 w-3.5" />
            {t.sheetNo}
          </FigureLabel>
          <FigureLabel className="hidden md:inline">
            {portfolioData[language].footer.updated}: {updatedLabel(language)}
          </FigureLabel>
        </motion.div>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* ---------- left: statement ---------- */}
          <div className="lg:col-span-7">
            <motion.p {...reveal} className="label mb-5">
              {t.role}
            </motion.p>

            <motion.h1
              {...reveal}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="display text-[clamp(2rem,5.6vw,3.9rem)]"
            >
              {t.headlineA}
              <br />
              <span style={{ color: 'var(--gold)' }}>{t.headlineB}</span>
            </motion.h1>

            <motion.p {...reveal} className="lede mt-6 max-w-[62ch]">
              {t.subhead}
            </motion.p>

            {/* work chain */}
            <motion.div {...reveal} className="mt-8">
              <FigureLabel className="mb-3 block">
                {language === 'ar' ? 'سلسلة العمل' : 'Work chain'}
              </FigureLabel>
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-2">
                {t.chain.map((step, i) => (
                  <li key={step} className="flex items-center gap-2">
                    <span className="flex items-center gap-2">
                      <span className="font-mono text-[10px]" style={{ color: 'var(--gold)' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[13.5px] font-semibold" style={{ color: 'var(--txt)' }}>
                        {step}
                      </span>
                    </span>
                    {i < t.chain.length - 1 && (
                      <Arrow className="h-3.5 w-3.5" style={{ color: 'var(--line-strong)' }} aria-hidden />
                    )}
                  </li>
                ))}
              </ol>
            </motion.div>

            {/* CTAs */}
            <motion.div {...reveal} className="mt-9 flex flex-wrap items-center gap-3">
              <button type="button" onClick={() => downloadCv(language)} className="btn btn-primary btn-lg">
                <Download className="h-4 w-4" />
                {t.ctaPrimary}
              </button>
              <a
                href={waLink(`${contact.waText}: ${language === 'ar' ? 'أرغب بالتواصل بخصوص عمل' : 'I would like to discuss work'}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wa btn-lg"
              >
                {t.ctaSecondary}
              </a>
              <a href="#capabilities" className="link-rule ms-1 text-[14px]">
                {t.ctaTertiary}
                <Arrow className="h-3.5 w-3.5" />
              </a>
            </motion.div>
          </div>

          {/* ---------- right: hire card ---------- */}
          <motion.aside {...reveal} transition={{ duration: 0.6, delay: 0.1 }} className="lg:col-span-5">
            <div className="sheet ticks overflow-hidden">
              <div className="sheet-head">
                <FileText className="h-3.5 w-3.5" style={{ color: 'var(--gold)' }} />
                <FigureLabel>{portfolioData[language].profile.searchTitle}</FigureLabel>
              </div>

              <div className="sheet-body">
                <ul className="space-y-2.5">
                  {portfolioData[language].profile.searchRoles.map((role) => (
                    <li key={role} className="flex items-center gap-2.5 text-[14px] font-medium" style={{ color: 'var(--txt)' }}>
                      <span className="h-1.5 w-1.5 rounded-full" style={{ background: 'var(--gold)' }} />
                      {role}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {portfolioData[language].profile.workTypes.map((w) => (
                    <Chip key={w}>{w}</Chip>
                  ))}
                </div>

                <div className="rule my-5" />

                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <MapPin className="h-4 w-4" style={{ color: 'var(--gold)' }} />
                  <span className="text-[13.5px] font-semibold" style={{ color: 'var(--txt)' }}>
                    {identity[language === 'ar' ? 'locationAr' : 'locationEn']}
                  </span>
                  <span className="label ms-auto">{contact.responseNote}</span>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <a href={`mailto:${identity.email}`} className="btn btn-outline btn-sm w-full">
                    {language === 'ar' ? 'البريد' : 'Email'}
                  </a>
                  <a
                    href={waLink(`${contact.waText}: ${language === 'ar' ? 'فرصة عمل' : 'job opportunity'}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm w-full"
                  >
                    WhatsApp
                  </a>
                </div>

                <button type="button" onClick={() => downloadCv(language)} className="link-rule mt-5 text-[13px]">
                  <Download className="h-3.5 w-3.5" />
                  {cv.cvBtn} · {language === 'ar' ? 'محدّث' : 'current'}
                </button>
              </div>
            </div>
          </motion.aside>
        </div>

        {/* ---------- stats ---------- */}
        <motion.div {...reveal} className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {t.stats.map((s) => (
            <StatCell key={s.label} value={s.value} label={s.label} note={s.note} />
          ))}
        </motion.div>

        {/* ---------- console ---------- */}
        <div className="mt-14 md:mt-20">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <FigureLabel className="mb-2 block">{language === 'ar' ? 'عرض تفاعلي' : 'Interactive'}</FigureLabel>
              <h2 className="font-display text-[22px] font-bold md:text-[26px]" style={{ color: 'var(--txt)' }}>
                {t.console.title}
              </h2>
            </div>
            <FigureLabel className="max-w-[42ch] text-end">{t.console.footnote}</FigureLabel>
          </div>
          <Console />
        </div>
      </div>
    </section>
  );
};
