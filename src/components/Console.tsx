import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';
import { Blueprint, type BlueprintKind } from './Blueprint';
import { Chip, FigureLabel, reveal } from './ui';
import { waLink } from '../lib/links';
import { ArrowLeft, ArrowRight, Check, MousePointerClick, Pause, Play } from 'lucide-react';

/* ------------------------------------------------------------------
   DELIVERABLES CONSOLE
   The interactive centrepiece: six work tracks, each showing what is
   actually handed over. Auto-advances like a shop-floor monitor, and
   stops the moment the visitor touches it.
   ------------------------------------------------------------------ */

export const Console: React.FC = () => {
  const { language, dir } = useLanguage();
  const t = portfolioData[language].hero.console;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const tabsRef = useRef<HTMLDivElement>(null);
  const active = t.tabs[index];

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % t.tabs.length), 7000);
    return () => window.clearInterval(id);
  }, [paused, t.tabs.length]);

  const go = (next: number) => {
    setPaused(true);
    setIndex((next + t.tabs.length) % t.tabs.length);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    const rtlNext = dir === 'rtl' ? 'ArrowLeft' : 'ArrowRight';
    const rtlPrev = dir === 'rtl' ? 'ArrowRight' : 'ArrowLeft';
    if (e.key === rtlNext) { e.preventDefault(); go(index + 1); }
    if (e.key === rtlPrev) { e.preventDefault(); go(index - 1); }
  };

  return (
    <motion.div {...reveal} className="console-shell">
      {/* toolbar */}
      <div className="console-toolbar">
        <span className="flex gap-1.5" aria-hidden>
          <i className="console-dot" style={{ background: '#E2E8F0' }} />
          <i className="console-dot" style={{ background: '#D9B96B' }} />
          <i className="console-dot" style={{ background: '#7FA8C9' }} />
        </span>
        <FigureLabel className="text-[10px]!">{portfolioData[language].hero.fileTag}</FigureLabel>
        <span className="ms-auto hidden items-center gap-2 sm:flex">
          <MousePointerClick className="h-3.5 w-3.5" style={{ color: 'var(--txt-3)' }} />
          <FigureLabel className="text-[10px]!">{t.hint}</FigureLabel>
        </span>
        <button
          type="button"
          onClick={() => setPaused((p) => p)!}
          className="btn btn-outline btn-sm !px-2 !py-1.5 ms-2"
          aria-label={paused ? (language === 'ar' ? 'تشغيل العرض' : 'Play') : language === 'ar' ? 'إيقاف العرض' : 'Pause'}
        >
          {paused ? <Play className="h-3 w-3" /> : <Pause className="h-3 w-3" />}
        </button>
      </div>

      {/* tabs */}
      <div
        ref={tabsRef}
        role="tablist"
        aria-label={t.tabsLabel}
        aria-orientation="horizontal"
        onKeyDown={onKeyDown}
        className="tabs border-b px-2 pt-2"
        style={{ borderColor: 'var(--line)' }}
      >
        {t.tabs.map((tab, i) => (
          <button
            key={tab.id}
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={i === index}
            aria-controls={`panel-${tab.id}`}
            tabIndex={i === index ? 0 : -1}
            onClick={() => go(i)}
            className="tab"
          >
            <span className="tab-idx">{tab.code.split('-')[1]}</span>
            {tab.title}
            {i === index && paused! && (
              <span
                key={`bar-${index}`}
                className="absolute inset-x-2.5 bottom-0 h-[2px] origin-left"
                style={{ background: 'var(--gold)', animation: 'grow 7s linear forwards' }}
              />
            )}
          </button>
        ))}
      </div>

      {/* panel */}
      <div
        role="tabpanel"
        id={`panel-${active.id}`}
        aria-labelledby={`tab-${active.id}`}
        className="grid lg:grid-cols-12"
      >
        {/* info column */}
        <div className="order-2 border-t p-6 md:p-7 lg:order-1 lg:col-span-5 lg:border-e lg:border-t-0" style={{ borderColor: 'var(--line)' }}>
          <div className="flex items-center gap-3">
            <Chip tone="gold" mono>{active.code}</Chip>
            <FigureLabel>{active.metric.label}: <span style={{ color: 'var(--txt)' }}>{active.metric.value}</span></FigureLabel>
          </div>

          <h3 className="mt-5 font-display text-[21px] font-bold leading-tight" style={{ color: 'var(--txt)' }}>
            {active.title}
          </h3>
          <p className="lede mt-3 text-[14.5px]!">{active.desc}</p>

          <div className="mt-6">
            <FigureLabel className="mb-3 block">{portfolioData[language].capabilities.outLabel}</FigureLabel>
            <ul className="space-y-2.5">
              {active.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-2.5 text-[13.5px] leading-snug" style={{ color: 'var(--txt-2)' }}>
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: 'var(--gold)' }} strokeWidth={2.5} />
                  {d}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {active.stack.map((s) => (
              <Chip key={s} mono>{s}</Chip>
            ))}
          </div>

          <div className="mt-7 flex items-center gap-3 border-t pt-5" style={{ borderColor: 'var(--line)' }}>
            <a
              href={waLink(`${portfolioData[language].contact.waText}: ${active.title} (${active.code})`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              {portfolioData[language].capabilities.hireLabel}
              {dir === 'rtl' ? <ArrowLeft className="h-3.5 w-3.5" /> : <ArrowRight className="h-3.5 w-3.5" />}
            </a>
            <div className="ms-auto flex gap-1.5">
              {t.tabs.map((tab, i) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={tab.title}
                  className="h-1.5 rounded-full transition-all"
                  style={{
                    width: i === index ? 22 : 8,
                    background: i === index ? 'var(--gold)' : 'var(--line-strong)',
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* drawing column */}
        <div className="viewport order-1 lg:order-2 lg:col-span-7">
          <div className="flex items-center justify-between border-b px-4 py-2.5" style={{ borderColor: 'var(--line)' }}>
            <FigureLabel>{language === 'ar' ? 'لوحة الرسم' : 'Drawing view'}</FigureLabel>
            <FigureLabel className="text-[10px]!">
              {language === 'ar' ? 'مقياس مناسب' : 'FIT TO SHEET'} · {active.code}
            </FigureLabel>
          </div>
          <div className="relative aspect-[16/10] w-full p-4 md:p-6">
            <Blueprint key={active.id} kind={active.id as BlueprintKind} className="h-full w-full" />
            <div className="pointer-events-none absolute inset-x-4 bottom-3 flex items-center justify-between">
              <FigureLabel className="text-[9.5px]!">SCALE 1:200 · mm</FigureLabel>
              <span className="flex items-center gap-1.5">
                <span className="status-dot" />
                <FigureLabel className="text-[9.5px]!">
                  {language === 'ar' ? 'مباشر من الموقع' : 'LIVE FROM SITE'}
                </FigureLabel>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t px-5 py-3" style={{ borderColor: 'var(--line)', background: 'var(--panel-2)' }}>
        <FigureLabel className="text-[10px]!">{t.footnote}</FigureLabel>
      </div>
    </motion.div>
  );
};
