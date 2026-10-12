import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';
import { Eyebrow, KV, SectionShell, reveal } from './ui';
import engineerAvatar from '../assets/engineer-avatar.webp';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

/* ------------------------------------------------------------------
   ABOUT — two short paragraphs, the work chain, quick facts and the
   portrait. No biography detours.
   ------------------------------------------------------------------ */

export const About: React.FC = () => {
  const { language, dir } = useLanguage();
  const t = portfolioData[language].about;
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <SectionShell id="about">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        {/* words */}
        <motion.div {...reveal} className="lg:col-span-7">
          <Eyebrow className="mb-4">{t.eyebrow}</Eyebrow>
          <h2 className="h-section max-w-xl">{t.title}</h2>

          <p className="mt-6 text-[16px] leading-[1.9] t-2">{t.p1}</p>
          <p className="mt-4 text-[15px] leading-[1.9] t-3">{t.p2}</p>

          {/* work chain */}
          <div className="mt-10">
            <div className="mono-xs mb-3">{t.chainLabel}</div>
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-2.5">
              {t.chain.map((step, i) => (
                <li key={step} className="flex items-center gap-2">
                  <span className="pill">{step}</span>
                  {i < t.chain.length - 1 && (
                    <Arrow className="h-3.5 w-3.5" style={{ color: 'var(--line-2)' }} aria-hidden />
                  )}
                </li>
              ))}
            </ol>
          </div>

          {/* quick facts */}
          <div className="mt-10">
            <div className="mono-xs mb-3">{t.factsLabel}</div>
            <dl className="card card-flat px-5 py-1.5">
              {t.facts.map((f) => (
                <KV key={f.label} label={f.label} value={f.value} />
              ))}
            </dl>
          </div>
        </motion.div>

        {/* portrait */}
        <motion.div {...reveal} transition={{ duration: 0.6, delay: 0.1 }} className="lg:col-span-5">
          <div className="card overflow-hidden">
            <div className="visual p-5">
              <img
                src={engineerAvatar}
                alt={t.photoAlt}
                loading="lazy"
                decoding="async"
                className="w-full rounded-[14px] object-cover"
                style={{ maxHeight: 330 }}
              />
            </div>
            <div className="flex items-start gap-3 border-t p-5">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: 'var(--good)' }} />
              <p className="text-[13.5px] font-medium leading-relaxed t-1">{t.availability}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
};
