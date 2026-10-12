import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';
import { Chip, DashList, FigureLabel, SectionHeader, SectionShell, reveal } from './ui';
import { waLink } from '../lib/links';
import { ArrowLeft, ArrowRight, Wrench, Package, Briefcase, Target } from 'lucide-react';

const ACCENTS: Record<string, string> = {
  navy: 'var(--navy)',
  gold: 'var(--gold)',
  teal: '#12798A',
  plain: 'var(--line-strong)',
};

export const Capabilities: React.FC = () => {
  const { language, dir } = useLanguage();
  const t = portfolioData[language].capabilities;
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <SectionShell id="capabilities" tone="panel">
      <SectionHeader
        no={`02 / ${language === 'ar' ? 'خريطة القدرات' : 'CAPABILITIES'}`}
        title={t.title}
        desc={t.desc}
        aside={
          <div className="sheet sheet-flat ticks hidden px-5 py-4 lg:block">
            <FigureLabel>{language === 'ar' ? 'الخلاصة' : 'Summary'}</FigureLabel>
            <div className="mt-2 flex items-center gap-3">
              <span className="font-mono text-[24px] font-semibold" style={{ color: 'var(--txt)' }}>
                06
              </span>
              <span className="text-[12.5px] leading-tight" style={{ color: 'var(--txt-3)' }}>
                {language === 'ar' ? 'مسارات عمل مستقلة، كل واحد بمخرجاته' : 'Independent tracks, each with its own output'}
              </span>
            </div>
          </div>
        }
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {t.tracks.map((track, i) => (
          <motion.article
            key={track.code}
            {...reveal}
            transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.25) }}
            className="sheet sheet-hover flex flex-col overflow-hidden"
          >
            {/* accent rail */}
            <div className="h-[3px] w-full" style={{ background: ACCENTS[track.accent] }} />

            <div className="flex items-center gap-3 border-b px-5 py-3" style={{ borderColor: 'var(--line)' }}>
              <span className="font-mono text-[11px] font-semibold" style={{ color: ACCENTS[track.accent] }}>
                {track.code}
              </span>
              <FigureLabel className="text-[10px]!">{track.subtitle}</FigureLabel>
            </div>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-display text-[18px] font-bold leading-tight" style={{ color: 'var(--txt)' }}>
                {track.title}
              </h3>
              <p className="mt-2.5 text-[13px] leading-relaxed" style={{ color: 'var(--txt-3)' }}>
                {track.desc}
              </p>

              <div className="mt-5">
                <FigureLabel className="mb-2.5 flex items-center gap-2">
                  <Target className="h-3.5 w-3.5" />
                  {t.capLabel}
                </FigureLabel>
                <DashList items={track.capabilities} />
              </div>

              <div className="mt-5">
                <FigureLabel className="mb-2.5 flex items-center gap-2">
                  <Wrench className="h-3.5 w-3.5" />
                  {t.toolsLabel}
                </FigureLabel>
                <div className="flex flex-wrap gap-1.5">
                  {track.tools.map((tool) => (
                    <Chip key={tool} mono className="text-[11px]!">
                      {tool}
                    </Chip>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <FigureLabel className="mb-2.5 flex items-center gap-2">
                  <Package className="h-3.5 w-3.5" />
                  {t.outLabel}
                </FigureLabel>
                <ul className="flex flex-wrap gap-1.5">
                  {track.deliverables.map((d) => (
                    <li key={d}>
                      <Chip tone="gold" className="text-[11.5px]!">
                        {d}
                      </Chip>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 border-t pt-4" style={{ borderColor: 'var(--line)' }}>
                <FigureLabel className="mb-2 flex items-center gap-2">
                  <Briefcase className="h-3.5 w-3.5" />
                  {t.rolesLabel}
                </FigureLabel>
                <p className="text-[12.5px] leading-relaxed" style={{ color: 'var(--txt-2)' }}>
                  {track.roles.join(' · ')}
                </p>
              </div>

              <a
                href={waLink(`${portfolioData[language].contact.waText}: ${track.title} (${track.code})`)}
                target="_blank"
                rel="noopener noreferrer"
                className="link-rule mt-5 self-start text-[13px]"
              >
                {t.hireLabel}
                <Arrow className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
};
