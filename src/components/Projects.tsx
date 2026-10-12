import React, { useMemo, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';
import { Blueprint, type BlueprintKind } from './Blueprint';
import { Chip, FigureLabel, SectionHeader, SectionShell, reveal } from './ui';
import { MapPin, Calendar, Layers } from 'lucide-react';

const PREVIEW: Record<string, BlueprintKind> = {
  road: 'roads',
  subdivision: 'cadastral',
  building: 'survey',
  quantities: 'quantities',
  asbuilt: 'cad',
  gis: 'gis',
  supervision: 'site',
};

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
    <SectionShell id="projects" tone="panel">
      <SectionHeader no={`04 / ${language === 'ar' ? 'نماذج الأعمال' : 'PROJECTS'}`} title={t.title} desc={t.desc} />

      {/* filters */}
      <motion.div {...reveal} className="mb-7 flex flex-wrap items-center gap-2">
        {t.filters.map((f) => {
          const active = filter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              aria-pressed={active}
              className="rounded-[8px] border px-3.5 py-2 text-[13px] font-semibold transition-colors"
              style={{
                borderColor: active ? 'var(--navy)' : 'var(--line)',
                background: active ? 'var(--navy)' : 'var(--panel)',
                color: active ? '#fff' : 'var(--txt-2)',
              }}
            >
              {f.label}
              <span className="ms-2 font-mono text-[10.5px] opacity-60">
                {f.id === 'all' ? t.items.length : t.items.filter((p) => p.track === f.id).length}
              </span>
            </button>
          );
        })}
      </motion.div>

      {items.length === 0 && (
        <p className="lede" style={{ color: 'var(--txt-3)' }}>
          {t.empty}
        </p>
      )}

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((p, i) => (
          <motion.article
            key={p.code}
            layout
            {...reveal}
            transition={{ duration: 0.45, delay: Math.min(i * 0.04, 0.2) }}
            className="sheet sheet-hover flex flex-col overflow-hidden"
          >
            {/* drawing preview */}
            <div className="viewport relative border-b" style={{ borderColor: 'var(--line)' }}>
              <div className="flex items-center justify-between border-b px-3.5 py-2" style={{ borderColor: 'var(--line)' }}>
                <FigureLabel className="text-[10px]!">{p.code}</FigureLabel>
                <span className="flex items-center gap-2">
                  <Layers className="h-3 w-3" style={{ color: 'var(--gold)' }} />
                  <FigureLabel className="text-[10px]!">{trackLabel(p.track)}</FigureLabel>
                </span>
              </div>
              <div className="aspect-[16/9] w-full p-3">
                <Blueprint kind={PREVIEW[p.preview] ?? 'survey'} className="h-full w-full" />
              </div>
              <div className="pointer-events-none absolute inset-x-3.5 bottom-2 flex items-center justify-between">
                <FigureLabel className="text-[9px]!">SCALE 1:250</FigureLabel>
                <FigureLabel className="text-[9px]!">{p.year}</FigureLabel>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-display text-[16.5px] font-bold leading-tight" style={{ color: 'var(--txt)' }}>
                {p.title}
              </h3>
              <p className="mt-1.5 font-mono text-[11px]" style={{ color: 'var(--gold)' }}>
                {p.scope}
              </p>
              <p className="mt-3 text-[13px] leading-relaxed" style={{ color: 'var(--txt-2)' }}>
                {p.desc}
              </p>

              <div className="mt-5 grid grid-cols-3 gap-3 border-y py-3" style={{ borderColor: 'var(--line)' }}>
                {p.stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-mono text-[13px] font-semibold" style={{ color: 'var(--txt)' }}>
                      {s.value}
                    </div>
                    <div className="label mt-1 text-[9.5px]!">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <FigureLabel className="mb-2 block">{t.deliverLabel}</FigureLabel>
                <div className="flex flex-wrap gap-1.5">
                  {p.deliverables.map((d) => (
                    <Chip key={d} className="text-[11.5px]!">
                      {d}
                    </Chip>
                  ))}
                </div>
              </div>

              <div className="mt-auto flex items-center gap-4 pt-4 text-[11.5px]" style={{ color: 'var(--txt-3)' }}>
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

      <motion.p {...reveal} className="label mt-8 text-center">
        {t.footnote}
      </motion.p>
    </SectionShell>
  );
};
