import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data';
import { AnimatePresence, motion } from 'framer-motion';
import { Blueprint } from './Blueprint';
import { CheckList, SectionHeader, SectionShell, reveal } from './ui';
import { waLink } from '../lib/links';
import { ArrowLeft, ArrowRight, Layers, Wrench } from 'lucide-react';

/* ------------------------------------------------------------------
   SERVICES — one tab per service; each panel shows exactly what is
   handed over, with the matching schematic on the side.
   ------------------------------------------------------------------ */

export const Services: React.FC = () => {
  const { language, dir } = useLanguage();
  const t = portfolioData[language].services;
  const contact = portfolioData[language].contact;
  const [index, setIndex] = useState(0);
  const active = t.items[index];
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const onKeyDown = (e: React.KeyboardEvent) => {
    const next = dir === 'rtl' ? 'ArrowLeft' : 'ArrowRight';
    const prev = dir === 'rtl' ? 'ArrowRight' : 'ArrowLeft';
    if (e.key === next) {
      e.preventDefault();
      setIndex((i) => (i + 1) % t.items.length);
    }
    if (e.key === prev) {
      e.preventDefault();
      setIndex((i) => (i - 1 + t.items.length) % t.items.length);
    }
  };

  return (
    <SectionShell id="services">
      <SectionHeader eyebrow={t.eyebrow} title={t.title} desc={t.desc} />

      {/* tabs */}
      <div
        role="tablist"
        aria-label={t.eyebrow}
        onKeyDown={onKeyDown}
        className="mb-6 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {t.items.map((s, i) => {
          const on = i === index;
          return (
            <button
              key={s.code}
              type="button"
              role="tab"
              id={`svc-tab-${s.code}`}
              aria-selected={on}
              aria-controls={`svc-panel-${s.code}`}
              tabIndex={on ? 0 : -1}
              onClick={() => setIndex(i)}
              className="relative shrink-0 rounded-full border px-4 py-2.5 text-[13.5px] font-semibold transition-colors"
              style={{
                borderColor: on ? 'var(--accent-line)' : 'var(--line)',
                background: on ? 'var(--accent-soft)' : 'transparent',
                color: on ? 'var(--accent)' : 'var(--txt-3)',
              }}
            >
              <span className="mono-xs me-2 text-[10px]!" style={{ color: 'inherit', opacity: 0.7 }}>
                {s.code.split('-')[1]}
              </span>
              {s.title}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.code}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="card overflow-hidden"
          role="tabpanel"
          id={`svc-panel-${active.code}`}
          aria-labelledby={`svc-tab-${active.code}`}
        >
          <div className="grid lg:grid-cols-12">
            {/* details */}
            <div className="order-2 p-6 md:p-9 lg:order-1 lg:col-span-5">
              <span className="pill pill-accent pill-mono">{active.code}</span>

              <h3 className="h-card mt-4 text-[24px] md:text-[27px]">{active.title}</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed t-2">{active.desc}</p>

              <div className="mt-7">
                <div className="mono-xs mb-3 flex items-center gap-2">
                  <Layers className="h-3.5 w-3.5" style={{ color: 'var(--accent)' }} />
                  {t.deliverLabel}
                </div>
                <CheckList items={active.deliverables} />
              </div>

              <div className="mt-7">
                <div className="mono-xs mb-3 flex items-center gap-2">
                  <Wrench className="h-3.5 w-3.5" style={{ color: 'var(--accent)' }} />
                  {t.toolsLabel}
                </div>
                <div className="flex flex-wrap gap-2">
                  {active.tools.map((tool) => (
                    <span key={tool} className="pill pill-mono">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={waLink(`${contact.waText}: ${active.title} (${active.code})`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-8"
              >
                {t.cta}
                <Arrow className="h-4 w-4" />
              </a>
            </div>

            {/* schematic */}
            <div className="visual order-1 grid place-items-center border-b p-5 md:p-8 lg:order-2 lg:col-span-7 lg:border-b-0 lg:border-s">
              <div className="w-full max-w-[620px]">
                <div className="card card-flat grid-fine overflow-hidden p-4 md:p-6">
                  <Blueprint kind={active.blueprint} className="aspect-[16/10] w-full" />
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="mono-xs">FIT TO SHEET · {active.code}</span>
                  <span className="mono-xs">{active.tools[0]}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* dots */}
      <motion.div {...reveal} className="mt-5 flex items-center justify-center gap-2">
        {t.items.map((s, i) => (
          <button
            key={s.code}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={s.title}
            className="h-1.5 rounded-full transition-all"
            style={{
              width: i === index ? 28 : 10,
              background: i === index ? 'var(--accent)' : 'var(--line-2)',
            }}
          />
        ))}
      </motion.div>
    </SectionShell>
  );
};
