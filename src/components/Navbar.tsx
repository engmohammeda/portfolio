import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../data';
import { assetUrl, cn } from '../lib/utils';
import { downloadCv } from '../lib/cv';
import { Menu, X, Sun, Moon, Globe, Download, Compass } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const SECTIONS = ['profile', 'capabilities', 'services', 'projects', 'experience', 'credentials', 'contact'] as const;

export const Navbar: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = portfolioData[language].nav;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const els = SECTIONS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [language]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const links = SECTIONS.map((id) => ({ href: `#${id}`, id, label: t[id] }));

  const text = language === 'ar' ? 'محمد البخيتي' : 'M. Al-Bakhity';
  const sub = language === 'ar' ? 'مساحة · طرق · كميات · GIS' : 'Survey · Roads · Quantities · GIS';

  return (
    <>
      <a href="#profile" className="skip-link no-print">
        {language === 'ar' ? 'تخطَّ إلى المحتوى' : 'Skip to content'}
      </a>

      <header
        className={cn('nav-shell no-print fixed inset-x-0 top-0 z-50 border-b', scrolled && 'is-scrolled')}
      >
        <div className="wrap flex h-[68px] items-center gap-4">
          {/* Brand */}
          <a href="#top" className="flex items-center gap-3 shrink-0" aria-label={text}>
            <span
              className="grid h-9 w-9 place-items-center rounded-[9px] border"
              style={{ background: 'var(--navy)', borderColor: 'var(--navy)' }}
            >
              <Compass className="h-[18px] w-[18px]" strokeWidth={1.75} color="#F7EFDA" />
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block text-[13.5px] font-bold" style={{ color: 'var(--txt)' }}>
                {text}
              </span>
              <span className="label block text-[9.5px]!">{sub}</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="mx-auto hidden items-center gap-0.5 lg:flex" aria-label={t.menu}>
            {links.map((l) => (
              <a
                key={l.id}
                href={l.href}
                aria-current={active === l.id ? 'true' : undefined}
                className={cn(
                  'relative rounded-md px-3 py-2 text-[13.5px] font-medium transition-colors',
                  active === l.id ? '' : 'muted hover:opacity-100',
                )}
                style={{ color: active === l.id ? 'var(--txt)' : undefined }}
              >
                {l.label}
                {active === l.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-2.5 -bottom-0.5 h-[2px] rounded-full"
                    style={{ background: 'var(--gold)' }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="ms-auto flex items-center gap-2 lg:ms-0">
            <button
              type="button"
              onClick={toggleLanguage}
              className="btn btn-outline btn-sm px-2.5!"
              aria-label={language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
              title={language === 'ar' ? 'English' : 'العربية'}
            >
              <Globe className="h-3.5 w-3.5" />
              <span className="hidden font-mono text-[11px] sm:inline">{language === 'ar' ? 'EN' : 'ع'}</span>
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              className="btn btn-outline btn-sm px-2.5!"
              aria-label={theme === 'light' ? (language === 'ar' ? 'الوضع الليلي' : 'Dark mode') : language === 'ar' ? 'الوضع النهاري' : 'Light mode'}
            >
              {theme === 'light' ? <Moon className="h-3.5 w-3.5" /> : <Sun className="h-3.5 w-3.5" />}
            </button>

            <button
              type="button"
              onClick={() => downloadCv(language)}
              className="btn btn-primary btn-sm hidden md:inline-flex"
            >
              <Download className="h-3.5 w-3.5" />
              {t.cv}
            </button>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="btn btn-outline btn-sm lg:hidden px-2.5!"
              aria-label={t.menu}
              aria-expanded={open}
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] lg:hidden"
            style={{ background: 'var(--bg)' }}
            role="dialog"
            aria-modal="true"
          >
            <div className="wrap flex h-[68px] items-center justify-between border-b" style={{ borderColor: 'var(--line)' }}>
              <span className="label">{language === 'ar' ? 'القائمة' : 'Menu'}</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="btn btn-outline btn-sm px-2.5!"
                aria-label={language === 'ar' ? 'إغلاق' : 'Close'}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <nav className="wrap mt-4 flex flex-col">
              {links.map((l, i) => (
                <a
                  key={l.id}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b py-4 text-[16px] font-semibold"
                  style={{ borderColor: 'var(--line)', color: 'var(--txt)' }}
                >
                  {l.label}
                  <span className="label">{String(i + 1).padStart(2, '0')}</span>
                </a>
              ))}
              <button type="button" onClick={() => { setOpen(false); downloadCv(language); }} className="btn btn-primary mt-6">
                <Download className="h-4 w-4" />
                {t.cv}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
