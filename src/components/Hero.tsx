import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData, identity } from '../data';
import { motion } from 'framer-motion';
import { ChipRow, StatBlock, reveal, delayed } from './ui';
import { waLink } from '../lib/links';
import { ArrowDown, MessageCircle, MoveRight } from 'lucide-react';

/* ------------------------------------------------------------------
   HERO — deliberately short: who, what, one line, two actions.
   Everything else lives in the sections below.
   ------------------------------------------------------------------ */

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = portfolioData[language].hero;
  const name = language === 'ar' ? identity.shortAr : identity.shortEn;

  return (
    <section id="top" className="mesh relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="wrap">
        {/* status */}
        <motion.p {...reveal} className="flex flex-wrap items-center gap-3">
          <span className="pill pill-good">
            <span className="status-dot" />
            {t.status}
          </span>
          <span className="mono-xs hidden sm:inline">{language === 'ar' ? 'الرد خلال 24 ساعة' : 'Replies within 24h'}</span>
        </motion.p>

        {/* headline */}
        <motion.h1
          {...reveal}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="display display-hero mt-7 max-w-4xl"
        >
          {name}
          <span className="mt-2 block grad-text">{t.role}</span>
        </motion.h1>

        {/* one-line lead */}
        <motion.p {...reveal} transition={delayed(1)} className="lede mt-6 max-w-2xl">
          {t.lead}
        </motion.p>

        {/* actions */}
        <motion.div {...reveal} transition={delayed(2)} className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href={waLink(`${portfolioData[language].contact.waText}: ${language === 'ar' ? 'فرصة عمل / مشروع' : 'a role / project'}`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            <MessageCircle className="h-[18px] w-[18px]" />
            {t.primary}
          </a>
          <a href="#projects" className="btn btn-outline btn-lg">
            <ArrowDown className="h-4 w-4" />
            {t.secondary}
          </a>
        </motion.div>

        {/* toolkit */}
        <motion.div {...reveal} transition={delayed(3)} className="mt-11">
          <div className="mono-xs mb-3">{t.chipsLabel}</div>
          <ChipRow items={t.chips} />
        </motion.div>

        {/* compact numbers */}
        <motion.div
          {...reveal}
          transition={delayed(4)}
          className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t pt-8"
        >
          {t.stats.map((s) => (
            <StatBlock key={s.label} value={s.value} label={s.label} />
          ))}
        </motion.div>
      </div>

      {/* scroll hint */}
      <motion.a
        href="#services"
        aria-label={language === 'ar' ? 'انتقل للأسفل' : 'Scroll down'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="no-print absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 md:flex"
        style={{ color: 'var(--txt-3)' }}
      >
        <span className="mono-xs">{language === 'ar' ? 'الأسفل' : 'Scroll'}</span>
        <MoveRight className="h-4 w-4 rotate-90" />
      </motion.a>
    </section>
  );
};
