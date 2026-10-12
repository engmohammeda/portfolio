import React, { useMemo, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';
import { Blueprint } from './Blueprint';
import { SectionHeader, SectionShell, delayed, reveal } from './ui';
import { Calendar, MapPin } from 'lucide-react';

export const Projects: React.FC = () => {
  const { language } = useLanguage();
  const t = portfolioData[language].projects;
  const [filter, setFilter] = useState('all');

  const items = useMemo(
    () => (filter === 'all' ? t.items : t.items.filter((p) => p.track === filter)),
    [filter, t.items],
  );

  const trackLabel = (id: string) => t.filters.find((f) => f.id === id)?.label ?? id;

  return (
    <SectionShell id="projects" className="border-y bg-(--surface)">
      <SectionHeader eyebrow={t.eyebrow} title={t.title} desc={t.desc} />

      {/* filters */}
      <motion.div {...reveal} className="mb-8 flex flex-wrap items-center gap-2">
        {t.filters.map((f) => {
          const on = filter === f.id;
          const count = f.id === 'all' ? t.items.length : t.items.filter((p) => p.track === f.id).length;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              aria-pressed={on}
              className="rounded-full border px-4 py-2 text-[13px] font-semibold transition-colors"
              style={{
                borderColor: on ? 'var(--accent-line)' : 'var(--line)',
                background: on ? 'var(--accent-soft)' : 'transparent',
                color: on ? 'var(--accent)' : 'var(--txt-3)',
              }}
            >
              {f.label}
              <span className="mono-xs ms-2 text-[10px]!" style={{ color: 'inherit', opacity: 0.65 }}>
                {count}
              </span>
            </button>
          );
        })}
      </motion.div>

      {items.length === 0 && <p className="lede t-3">{t.empty}</p>}

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((p, i) => (
          <motion.article
            key={p.code}
            layout
            {...reveal}
            transition={delayed(i, 0.045)}
            className="card card-hover flex flex-col overflow-hidden"
          >
            {/* schematic */}
            <div className="visual border-b">
              <div className="flex items-center justify-between px-4 py-3">
                <span className="mono-xs">{p.code}</span>
                <span className="pill pill-mono">{trackLabel(p.track)}</span>
              </div>
              <div className="grid-fine px-4 pb-4">
                <Blueprint kind={p.preview} className="aspect-[16/9] w-full" />
              </div>
            </div>

            {/* body */}
            <div className="flex flex-1 flex-col p-5">
              <h3 className="h-card text-[17px]">{p.title}</h3>
              <p className="mono-xs mt-1.5" style={{ color: 'var(--accent)' }}>
                {p.scope}
              </p>
              <p className="mt-3 text-[13.5px] leading-relaxed t-2">{p.desc}</p>

              <div className="mt-5 grid grid-cols-3 gap-3 border-y py-3">
                {p.stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-mono text-[14px] font-semibold t-1">{s.value}</div>
                    <div className="mono-xs mt-1 text-[10px]!">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <div className="mono-xs mb-2">{t.deliverLabel}</div>
                <div className="flex flex-wrap gap-1.5">
                  {p.deliverables.map((d) => (
                    <span key={d} className="pill text-[11.5px]!">
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto flex items-center gap-4 pt-5 text-[11.5px] t-3">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3 w-3" />
                  {p.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3 w-3" />
                  {p.year}
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.p {...reveal} className="mono-xs mt-9 text-center">
        {t.footnote}
      </motion.p>
    </SectionShell>
  );
};
