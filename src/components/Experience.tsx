import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';
import { Chip, FigureLabel, Meter, SectionHeader, SectionShell, reveal } from './ui';
import { Briefcase, GraduationCap, MapPin, Sparkles } from 'lucide-react';

const TYPE_META: Record<string, { icon: React.ElementType; color: string }> = {
  work: { icon: Briefcase, color: 'var(--gold)' },
  education: { icon: GraduationCap, color: '#12798A' },
  training: { icon: Sparkles, color: 'var(--line-strong)' },
};

export const Experience: React.FC = () => {
  const { language } = useLanguage();
  const t = portfolioData[language].experience;

  return (
    <SectionShell id="experience">
      <SectionHeader
        no={`05 / ${language === 'ar' ? 'الخبرة' : 'EXPERIENCE'}`}
        title={t.title}
        desc={t.desc}
      />

      {/* timeline */}
      <div className="relative">
        <div
          className="absolute bottom-0 top-2 w-px"
          style={{ insetInlineStart: 11, background: 'linear-gradient(to bottom, var(--gold), var(--line-strong), transparent)' }}
          aria-hidden
        />
        <ol className="space-y-5">
          {t.jobs.map((job, i) => {
            const meta = TYPE_META[job.type] ?? TYPE_META.work;
            const Icon = meta.icon;
            return (
              <motion.li key={`${job.role}-${job.period}`} {...reveal} transition={{ duration: 0.5, delay: Math.min(i * 0.06, 0.24) }} className="relative ps-10">
                <span
                  className="absolute top-6 grid h-[23px] w-[23px] place-items-center rounded-full border-2"
                  style={{ insetInlineStart: 0, background: 'var(--bg)', borderColor: meta.color }}
                >
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: meta.color }} />
                </span>

                <div className="sheet p-5 md:p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <Chip tone={job.type === 'work' ? 'gold' : job.type === 'education' ? 'teal' : 'default'} mono>
                      {job.period}
                    </Chip>
                    <span className="flex items-center gap-1.5">
                      <Icon className="h-3.5 w-3.5" style={{ color: meta.color }} />
                      <FigureLabel className="text-[10px]!">
                        {job.type === 'work'
                          ? language === 'ar' ? 'عمل' : 'WORK'
                          : job.type === 'education'
                            ? language === 'ar' ? 'تعليم' : 'EDUCATION'
                            : language === 'ar' ? 'تدريب' : 'TRAINING'}
                      </FigureLabel>
                    </span>
                    <span className="ms-auto flex items-center gap-1.5 text-[11.5px]" style={{ color: 'var(--txt-3)' }}>
                      <MapPin className="h-3 w-3" />
                      {job.location}
                    </span>
                  </div>

                  <h3 className="mt-3.5 font-display text-[17px] font-bold leading-snug" style={{ color: 'var(--txt)' }}>
                    {job.role}
                  </h3>
                  <p className="mt-1 text-[13px] font-medium" style={{ color: 'var(--gold)' }}>
                    {job.org}
                  </p>

                  <ul className="mt-4 grid gap-2 md:grid-cols-2">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex gap-2.5 text-[13px] leading-relaxed" style={{ color: 'var(--txt-2)' }}>
                        <span aria-hidden className="mt-[9px] h-px w-3 shrink-0" style={{ background: 'var(--gold)' }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>

      {/* skills matrix */}
      <motion.div {...reveal} className="mt-14">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h3 className="font-display text-[19px] font-bold" style={{ color: 'var(--txt)' }}>
              {t.skillsTitle}
            </h3>
            <p className="mt-1.5 text-[13px]" style={{ color: 'var(--txt-3)' }}>
              {t.skillsDesc}
            </p>
          </div>
          <FigureLabel className="max-w-[46ch] text-end">{t.skillsNote}</FigureLabel>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {t.groups.map((group) => (
            <div key={group.id} className="sheet overflow-hidden">
              <div className="sheet-head">
                <FigureLabel>{group.title}</FigureLabel>
              </div>
              <table className="spec-table">
                <tbody>
                  {group.items.map((s) => (
                    <tr key={s.name}>
                      <td style={{ color: 'var(--txt)' }}>{s.name}</td>
                      <td className="w-[86px]">
                        <Meter level={s.level} />
                      </td>
                      <td className="w-[74px] text-end">
                        <span className="label text-[10px]!">{s.label}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </motion.div>
    </SectionShell>
  );
};
