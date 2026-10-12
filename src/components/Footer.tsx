import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData, identity } from '../data';
import { SECTIONS, Eyebrow } from './ui';
import { updatedLabel, vcardUri } from '../lib/links';
import { ArrowUp, Mail, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = portfolioData[language].footer;
  const nav = portfolioData[language].nav;
  const name = language === 'ar' ? identity.shortAr : identity.shortEn;

  return (
    <footer className="no-print border-t" style={{ background: 'var(--surface)' }}>
      <div className="wrap grid gap-10 py-12 md:grid-cols-3">
        {/* brand */}
        <div>
          <Eyebrow className="mb-4">{name}</Eyebrow>
          <p className="text-[13.5px] leading-relaxed t-2">{t.role}</p>
          <div className="mt-5 flex items-center gap-2">
            <a href={`mailto:${identity.email}`} className="btn btn-outline btn-icon" aria-label={identity.email}>
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={`https://wa.me/${identity.phone.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-icon"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <a href={vcardUri(language)} download="mohammed-al-bakhity.vcf" className="btn btn-ghost btn-sm">
              vCard
            </a>
          </div>
        </div>

        {/* links */}
        <nav aria-label={t.linksTitle}>
          <div className="mono-xs mb-4">{t.linksTitle}</div>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
            {SECTIONS.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className="text-[13.5px] font-medium text-(--txt-2) transition-colors hover:text-(--accent)">
                  {nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* contact */}
        <div>
          <div className="mono-xs mb-4">{t.contactTitle}</div>
          <ul className="space-y-2.5 text-[13.5px] t-2">
            <li dir="ltr" className="text-start">
              <a href={`mailto:${identity.email}`}>{identity.email}</a>
            </li>
            <li dir="ltr" className="text-start">
              <a href={`tel:${identity.phone}`}>{identity.phoneDisplay}</a>
            </li>
            <li>
              <a href={identity.x} target="_blank" rel="noopener noreferrer">
                X — @engalbukhaiti
              </a>
            </li>
            <li>
              <a href={identity.github} target="_blank" rel="noopener noreferrer">
                GitHub — engmohammeda
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap flex flex-wrap items-center gap-x-5 gap-y-2 border-t py-5">
        <span className="mono-xs">
          © {new Date().getFullYear()} {name} — {t.rights}
        </span>
        <span className="mono-xs">
          {t.updated}: {updatedLabel(language)}
        </span>
        <span className="mono-xs ms-auto hidden md:block">{t.builtNote}</span>
        <a href="#top" className="btn btn-ghost btn-icon" aria-label={nav.top}>
          <ArrowUp className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
};
