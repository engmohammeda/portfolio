import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';
import { Chip, FigureLabel, SectionHeader, SectionShell, reveal } from './ui';
import { waLink } from '../lib/links';
import { Check, ArrowLeft, ArrowRight, ClipboardList } from 'lucide-react';

export const Services: React.FC = () => {
  const { language, dir } = useLanguage();
  const t = portfolioData[language].services;
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <SectionShell id="services">
      <SectionHeader
        no={`03 / ${language === 'ar' ? 'الخدمات' : 'SERVICES'}`}
        title={t.title}
        desc={t.desc}
      />

      <div className="grid gap-5 md:grid-cols-2">
        {t.items.map((s, i) => (
          <motion.article
            key={s.code}
            {...reveal}
            transition={{ duration: 0.5, delay: Math.min(i * 0.04, 0.2) }}
            className="sheet sheet-hover flex flex-col p-5 md:p-6"
          >
            <div className="flex items-start gap-3">
              <span className="font-mono text-[11px] font-semibold" style={{ color: 'var(--gold)' }}>
                {s.code}
              </span>
              <div className="rule mt-2.5 flex-1" />
              <Chip mono className="text-[10.5px]!">
                {language === 'ar' ? 'تسليم بملفات مصدرية' : 'Source files'}
              </Chip>
            </div>

            <h3 className="mt-4 font-display text-[17.5px] font-bold leading-tight" style={{ color: 'var(--txt)' }}>
              {s.title}
            </h3>
            <p className="mt-2.5 text-[13.5px] leading-relaxed" style={{ color: 'var(--txt-2)' }}>
              {s.desc}
            </p>

            <div className="mt-5">
              <FigureLabel className="mb-2.5 block">{t.outLabel}</FigureLabel>
              <ul className="grid gap-2 sm:grid-cols-3">
                {s.deliverables.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-2 rounded-[8px] border px-3 py-2 text-[12px] leading-snug"
                    style={{ borderColor: 'var(--line)', background: 'var(--panel-2)', color: 'var(--txt-2)' }}
                  >
                    <Check className="mt-0.5 h-3 w-3 shrink-0" style={{ color: 'var(--gold)' }} strokeWidth={3} />
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto flex flex-wrap items-center gap-3 border-t pt-4" style={{ borderColor: 'var(--line)' }}>
              <span className="text-[12px] leading-snug" style={{ color: 'var(--txt-3)' }}>
                {s.note}
              </span>
              <a
                href={waLink(`${portfolioData[language].contact.waText}: ${s.title} (${s.code})`)}
                target="_blank"
                rel="noopener noreferrer"
                className="link-rule ms-auto text-[13px]"
              >
                {t.cta}
                <Arrow className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      {/* engagement steps */}
      <motion.div {...reveal} className="mt-12 sheet overflow-hidden">
        <div className="sheet-head">
          <ClipboardList className="h-3.5 w-3.5" style={{ color: 'var(--gold)' }} />
          <FigureLabel>{t.stepsTitle}</FigureLabel>
        </div>
        <div className="grid divide-y md:grid-cols-3 md:divide-y-0" style={{ borderColor: 'var(--line)' }}>
          {t.steps.map((step, i) => (
            <div
              key={step.title}
              className="p-6 md:border-e md:last:border-e-0"
              style={{ borderColor: 'var(--line)' }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="grid h-7 w-7 place-items-center rounded-[7px] font-mono text-[11px] font-bold"
                  style={{ background: 'var(--gold-soft)', color: '#8A6A1F' }}
                >
                  {i + 1}
                </span>
                <h4 className="text-[14.5px] font-bold" style={{ color: 'var(--txt)' }}>
                  {step.title}
                </h4>
              </div>
              <p className="mt-3 text-[13px] leading-relaxed" style={{ color: 'var(--txt-3)' }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="border-t px-6 py-4" style={{ borderColor: 'var(--line)', background: 'var(--panel-2)' }}>
          <FigureLabel className="text-[10.5px]!">{t.note}</FigureLabel>
        </div>
      </motion.div>
    </SectionShell>
  );
};
