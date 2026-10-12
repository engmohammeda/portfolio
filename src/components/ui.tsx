import React, { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

/* ------------------------------------------------------------------
   Shared UI primitives for the "engineering sheet" design language.
   Kept deliberately small: layout comes from Tailwind, identity
   (rules, labels, ticks, chips) comes from src/index.css classes.
   ------------------------------------------------------------------ */

const EASE = [0.16, 1, 0.3, 1] as const;

export const reveal = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: EASE },
};

export const SectionShell: React.FC<{
  id: string;
  children: ReactNode;
  className?: string;
  tone?: 'plain' | 'panel';
}> = ({ id, children, className, tone = 'plain' }) => (
  <section
    id={id}
    className={cn('section', tone === 'panel' && 'paper', className)}
  >
    <div className="wrap relative">{children}</div>
  </section>
);

export const SheetNo: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => <span className={cn('sheet-no', className)}>{children}</span>;

export const SectionHeader: React.FC<{
  no: string;
  title: string;
  desc?: string;
  aside?: ReactNode;
  className?: string;
}> = ({ no, title, desc, aside, className }) => (
  <motion.div {...reveal} className={cn('mb-10 md:mb-14', className)}>
    <div className="flex flex-wrap items-end justify-between gap-6">
      <div className="max-w-2xl">
        <SheetNo className="mb-4">{no}</SheetNo>
        <h2 className="h-section">{title}</h2>
      </div>
      {aside}
    </div>
    {desc && <p className="lede mt-5 max-w-3xl">{desc}</p>}
  </motion.div>
);

export const Chip: React.FC<{
  children: ReactNode;
  tone?: 'default' | 'gold' | 'navy' | 'teal' | 'live';
  mono?: boolean;
  className?: string;
}> = ({ children, tone = 'default', mono, className }) => (
  <span
    className={cn(
      'chip',
      mono && 'chip-mono',
      tone === 'gold' && 'chip-gold',
      tone === 'navy' && 'chip-navy',
      tone === 'teal' && 'chip-teal',
      tone === 'live' && 'chip-live',
      className,
    )}
  >
    {children}
  </span>
);

/** Small "figure" label used above diagrams and inside console panels. */
export const FigureLabel: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => <span className={cn('label', className)}>{children}</span>;

/** Bulleted capability list with drafting-style dash markers. */
export const DashList: React.FC<{
  items: string[];
  className?: string;
  columns?: 1 | 2;
}> = ({ items, className, columns = 1 }) => (
  <ul className={cn('space-y-2', columns === 2 && 'sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-2 sm:space-y-0', className)}>
    {items.map((item) => (
      <li key={item} className="flex gap-2.5 text-[13.5px] leading-[1.65] muted">
        <span aria-hidden className="mt-[9px] h-px w-3 shrink-0" style={{ background: 'var(--gold)' }} />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export const StatCell: React.FC<{ value: string; label: string; note?: string }> = ({
  value,
  label,
  note,
}) => (
  <div className="border-t-2 pt-3" style={{ borderColor: 'var(--gold)' }}>
    <div className="font-mono text-[22px] md:text-[26px] font-semibold leading-none" style={{ color: 'var(--txt)' }}>
      {value}
    </div>
    <div className="label mt-2 block">{label}</div>
    {note && <div className="faint mt-1.5 text-[11.5px] leading-snug">{note}</div>}
  </div>
);

/** Key/value row used by the profile fact table. */
export const KV: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="kv">
    <dt className="label">{label}</dt>
    <dd className="ms-auto text-end" style={{ color: 'var(--txt)' }}>
      {value}
    </dd>
  </div>
);

/** Level meter (1..4) used by the skills matrix. */
export const Meter: React.FC<{ level: number; max?: number }> = ({ level, max = 4 }) => (
  <span className="meter" role="img" aria-label={`${level}/${max}`}>
    {Array.from({ length: max }).map((_, i) => (
      <i key={i} className={i < level ? 'on' : ''} />
    ))}
  </span>
);
