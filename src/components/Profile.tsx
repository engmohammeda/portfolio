import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData, identity } from '../data';
import { motion } from 'framer-motion';
import { Chip, DashList, FigureLabel, KV, SectionHeader, SectionShell, reveal } from './ui';
import engineerAvatar from '../assets/engineer-avatar.webp';
import { CheckCircle2, Quote } from 'lucide-react';

export const Profile: React.FC = () => {
  const { language } = useLanguage();
  const t = portfolioData[language].profile;

  return (
    <SectionShell id="profile">
      <SectionHeader
        no={`01 / ${language === 'ar' ? 'الملف المهني' : 'PROFILE'}`}
        title={t.title}
      />

      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        {/* narrative */}
        <motion.div {...reveal} className="lg:col-span-7">
          <p className="text-[16.5px] leading-[1.95]" style={{ color: 'var(--txt-2)' }}>
            {t.p1}
          </p>
          <p className="mt-5 text-[15px] leading-[1.95]" style={{ color: 'var(--txt-2)' }}>
            {t.p2}
          </p>

          <div className="mt-8 border-s-2 ps-5" style={{ borderColor: 'var(--gold)' }}>
            <Quote className="h-4 w-4" style={{ color: 'var(--gold)' }} />
            <p className="mt-2 font-display text-[17px] font-bold leading-relaxed md:text-[19px]" style={{ color: 'var(--txt)' }}>
              {t.quote}
            </p>
          </div>

          {/* principles */}
          <div className="mt-10">
            <FigureLabel className="mb-4 block">{t.principlesTitle}</FigureLabel>
            <div className="grid gap-4 sm:grid-cols-3">
              {t.principles.map((p, i) => (
                <div key={p.title} className="sheet sheet-flat ticks p-5">
                  <span className="font-mono text-[10px]" style={{ color: 'var(--gold)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-2 text-[14.5px] font-bold leading-snug" style={{ color: 'var(--txt)' }}>
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[12.5px] leading-relaxed" style={{ color: 'var(--txt-3)' }}>
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* fact sheet */}
        <motion.div {...reveal} transition={{ duration: 0.6, delay: 0.1 }} className="lg:col-span-5">
          <div className="sheet overflow-hidden">
            <div className="sheet-head">
              <FigureLabel>{t.idTitle}</FigureLabel>
              <span className="ms-auto flex items-center gap-1.5">
                <span className="status-dot" />
                <FigureLabel className="text-[10px]!">
                  {language === 'ar' ? 'متاح' : 'AVAILABLE'}
                </FigureLabel>
              </span>
            </div>

            <figure className="border-b p-4" style={{ borderColor: 'var(--line)' }}>
              <div className="viewport overflow-hidden rounded-[8px] border p-2" style={{ borderColor: 'var(--line)' }}>
                <img
                  src={engineerAvatar}
                  alt={t.photoAlt}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full rounded-[6px] object-cover"
                  style={{ maxHeight: 210 }}
                />
              </div>
              <figcaption className="label mt-2.5 flex items-center justify-between text-[9.5px]!">
                <span>FIG. 01 — {language === 'ar' ? 'التهيئة الميدانية' : 'FIELD SETUP'}</span>
                <span>TOTAL STATION · mm</span>
              </figcaption>
            </figure>

            <dl className="px-5 py-2">
              {t.facts.map((f) => (
                <KV key={f.label} label={f.label} value={f.value} />
              ))}
            </dl>

            <div className="border-t p-5" style={{ borderColor: 'var(--line)', background: 'var(--panel-2)' }}>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: '#128C4A' }} />
                <p className="text-[13px] font-medium leading-relaxed" style={{ color: 'var(--txt)' }}>
                  {portfolioData[language].contact.availability}
                </p>
              </div>
              <p className="mt-2 text-[12.5px] leading-relaxed" style={{ color: 'var(--txt-3)' }}>
                {t.locationLine}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Chip tone="gold" mono>
                  {identity.phone}
                </Chip>
                <Chip mono>{language === 'ar' ? 'رد خلال 24 ساعة' : 'Replies in 24h'}</Chip>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
};
