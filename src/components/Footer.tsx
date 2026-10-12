import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData, identity } from '../data';
import { FigureLabel } from './ui';
import { updatedLabel, vcardUri } from '../lib/links';
import { ArrowUp, Linkedin, Mail, MessageCircle } from 'lucide-react';

const SECTIONS = ['profile', 'capabilities', 'services', 'projects', 'contact'] as const;

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = portfolioData[language].footer;
  const nav = portfolioData[language].nav;

  return (
    <footer className="no-print border-t" style={{ borderColor: 'var(--line)', background: 'var(--panel)' }}>
      {/* engineering title block */}
      <div className="wrap py-10">
        <div className="sheet sheet-flat overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {t.titleBlock.map((cell, i) => (
              <div
                key={cell.label}
                className="border-b border-e p-4 last:border-e-0 lg:border-b-0"
                style={{ borderColor: 'var(--line)' }}
              >
                <FigureLabel className="text-[9.5px]!">{cell.label}</FigureLabel>
                <p className="mt-1.5 text-[12.5px] font-semibold leading-snug" style={{ color: 'var(--txt)' }}>
                  {cell.value}
                </p>
                <span className="mt-2 block font-mono text-[9.5px]" style={{ color: 'var(--txt-3)' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="wrap grid gap-8 border-t py-10 md:grid-cols-3" style={{ borderColor: 'var(--line)' }}>
        <div>
          <h3 className="font-display text-[15px] font-bold" style={{ color: 'var(--txt)' }}>
            {language === 'ar' ? identity.nameAr : identity.nameEn}
          </h3>
          <p className="mt-1.5 text-[13px] leading-relaxed" style={{ color: 'var(--txt-3)' }}>
            {t.role}
          </p>
          <div className="mt-4 flex items-center gap-2">
            <a
              href={`mailto:${identity.email}`}
              className="btn btn-outline btn-sm px-2.5!"
              aria-label={identity.email}
            >
              <Mail className="h-3.5 w-3.5" />
            </a>
            <a
              href={`https://wa.me/${identity.phone.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm px-2.5!"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-3.5 w-3.5" />
            </a>
            <a
              href={identity.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm px-2.5!"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-3.5 w-3.5" />
            </a>
            <a href={vcardUri(language)} download="mohammed-al-bakhity.vcf" className="btn btn-outline btn-sm">
              vCard
            </a>
          </div>
        </div>

        <nav aria-label={t.linksTitle}>
          <FigureLabel className="mb-3 block">{t.linksTitle}</FigureLabel>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
            {SECTIONS.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className="text-[13px] transition-colors hover:opacity-100" style={{ color: 'var(--txt-2)' }}>
                  {nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <FigureLabel className="mb-3 block">{t.contactTitle}</FigureLabel>
          <ul className="space-y-2 text-[13px]" style={{ color: 'var(--txt-2)' }}>
            <li dir="ltr" className="text-start">
              <a href={`mailto:${identity.email}`}>{identity.email}</a>
            </li>
            <li dir="ltr" className="text-start">
              <a href={`tel:${identity.phone}`}>{identity.phone}</a>
            </li>
            <li>
              <a href={identity.x} target="_blank" rel="noopener noreferrer">
                X — @engalbukhaiti
              </a>
            </li>
            <li>
              <a href={identity.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={identity.site}>{language === 'ar' ? 'رابط الموقع' : 'Site URL'}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap flex flex-wrap items-center gap-4 border-t py-5" style={{ borderColor: 'var(--line)' }}>
        <FigureLabel className="text-[10px]!">
          © {new Date().getFullYear()} {language === 'ar' ? identity.nameAr : identity.nameEn} — {t.rights}
        </FigureLabel>
        <FigureLabel className="text-[10px]!">
          {t.updated}: {updatedLabel(language)}
        </FigureLabel>
        <FigureLabel className="ms-auto hidden text-[10px]! md:block">{t.builtNote}</FigureLabel>
        <a href="#top" className="btn btn-outline btn-sm px-2.5!" aria-label={nav.top}>
          <ArrowUp className="h-3.5 w-3.5" />
        </a>
      </div>
    </footer>
  );
};
