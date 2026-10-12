import React, { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '../lib/utils';

/* ------------------------------------------------------------------
   Shared primitives for the v4 design language.
   Layout comes from Tailwind, identity (cards, pills, eyebrows)
   comes from the classes defined in src/index.css.
   ------------------------------------------------------------------ */

export const EASE = [0.16, 1, 0.3, 1] as const;

/** Scroll-reveal preset — used on nearly every block. */
export const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-70px' },
  transition: { duration: 0.6, ease: EASE },
};

/** Small stagger for grids. */
export const delayed = (i: number, step = 0.05) => ({
  duration: 0.55,
  delay: Math.min(i * step, 0.3),
  ease: EASE,
});

export const SectionShell: React.FC<{
  id: string;
  children: ReactNode;
  className?: string;
}> = ({ id, children, className }) => (
  <section id={id} className={cn('section relative', className)}>
    <div className="wrap relative">{children}</div>
  </section>
);

export const Eyebrow: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => <span className={cn('eyebrow', className)}>{children}</span>;

export const SectionHeader: React.FC<{
  eyebrow: string;
  title: string;
  desc?: string;
  aside?: ReactNode;
  className?: string;
}> = ({ eyebrow, title, desc, aside, className }) => (
  <motion.div {...reveal} className={cn('mb-10 md:mb-14', className)}>
    <div className="flex flex-wrap items-end justify-between gap-6">
      <div className="max-w-3xl">
        <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
        <h2 className="h-section">{title}</h2>
        {desc && <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed t-2">{desc}</p>}
      </div>
      {aside}
    </div>
  </motion.div>
);

export const Pill: React.FC<{
  children: ReactNode;
  tone?: 'default' | 'accent' | 'warm' | 'good';
  mono?: boolean;
  className?: string;
}> = ({ children, tone = 'default', mono, className }) => (
  <span
    className={cn(
      'pill',
      mono && 'pill-mono',
      tone === 'accent' && 'pill-accent',
      tone === 'warm' && 'pill-warm',
      tone === 'good' && 'pill-good',
      className,
    )}
  >
    {children}
  </span>
);

/** Deliverable list with accent check marks. */
export const CheckList: React.FC<{ items: string[]; className?: string }> = ({
  items,
  className,
}) => (
  <ul className={cn('space-y-2.5', className)}>
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3 text-[14px] leading-snug t-2">
        <span
          className="mt-0.5 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full"
          style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
        >
          <Check className="h-3 w-3" strokeWidth={3} />
        </span>
        {item}
      </li>
    ))}
  </ul>
);

export const ChipRow: React.FC<{ items: string[]; className?: string; mono?: boolean }> = ({
  items,
  className,
  mono = true,
}) => (
  <div className={cn('flex flex-wrap gap-2', className)}>
    {items.map((item) => (
      <span key={item} className={cn('pill', mono && 'pill-mono')}>
        {item}
      </span>
    ))}
  </div>
);

export const StatBlock: React.FC<{ value: string; label: string; className?: string }> = ({
  value,
  label,
  className,
}) => (
  <div className={className}>
    <div className="font-mono text-[26px] font-semibold leading-none t-1 md:text-[30px]">
      {value}
    </div>
    <div className="mt-2 text-[12.5px] t-3">{label}</div>
  </div>
);

/** Key/value row used by the quick-facts block. */
export const KV: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex items-baseline justify-between gap-4 border-b py-3 last:border-b-0">
    <dt className="mono-xs shrink-0">{label}</dt>
    <dd className="text-end text-[13.5px] font-semibold t-1">{value}</dd>
  </div>
);

/** Page section anchors, in order. */
export const SECTIONS = ['services', 'projects', 'about', 'contact'] as const;
export type SectionId = (typeof SECTIONS)[number];
