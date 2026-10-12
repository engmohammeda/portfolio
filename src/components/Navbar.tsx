import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { portfolioData, identity } from '../data';
import { cn } from '../lib/utils';
import { waLink } from '../lib/links';
import { SECTIONS } from './ui';
import { AnimatePresence, motion } from 'framer-motion';
import { Compass, Globe, Menu, MessageCircle, Moon, Sun, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const nav = portfolioData[language].nav;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const els = SECTIONS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
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

  const links = SECTIONS.map((id) => ({ id, href: `#${id}`, label: nav[id] }));
  const wa = waLink(`${portfolioData[language].contact.waText}: ${language === 'ar' ? 'فرصة عمل / مشروع' : 'a role / project'}`);
  const name = language === 'ar' ? identity.shortAr : identity.shortEn;

  return (
    <>
      <a href="#services" className="skip-link no-print">
        {language === 'ar' ? 'تخطَّ إلى المحتوى' : 'Skip to content'}
      </a>

      <header className="no-print fixed inset-x-0 top-0 z-50 pt-3 md:pt-4">
        <div className="wrap">
          <div className={cn('nav-bar flex h-[62px] items-center gap-2 px-2.5 md:px-3', scrolled && 'is-scrolled')}>
            {/* brand */}
            <a href="#top" className="flex shrink-0 items-center gap-2.5 ps-1" aria-label={name}>
              <span
                className="grid h-9 w-9 place-items-center rounded-[12px] text-white"
                style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-2))' }}
              >
                <Compass className="h-[18px] w-[18px]" strokeWidth={2} color="var(--accent-ink)" />
              </span>
              <span className="hidden leading-tight sm:block">
                <span className="block text-[13.5px] font-bold t-1">{name}</span>
                <span className="mono-xs block text-[10px]!">{nav.brandSub}</span>
              </span>
            </a>

            {/* desktop nav */}
            <nav className="mx-auto hidden items-center gap-0.5 lg:flex" aria-label={nav.menu}>
              {links.map((l) => (
                <a key={l.id} href={l.href} className="nav-link" aria-current={active === l.id ? 'true' : undefined}>
                  {active === l.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full"
                      style={{ background: 'var(--accent-soft)' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </a>
              ))}
            </nav>

            {/* actions */}
            <div className="ms-auto flex items-center gap-1.5 lg:ms-0">
              <button
                type="button"
                onClick={toggleLanguage}
                className="btn btn-ghost btn-icon"
                aria-label={language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
                title={nav.language}
              >
                <Globe className="h-[17px] w-[17px]" />
              </button>
              <button
                type="button"
                onClick={toggleTheme}
                className="btn btn-ghost btn-icon"
                aria-label={nav.theme}
                title={theme === 'light' ? 'Dark' : 'Light'}
              >
                {theme === 'light' ? <Moon className="h-[17px] w-[17px]" /> : <Sun className="h-[17px] w-[17px]" />}
              </button>
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm ms-1 hidden sm:inline-flex">
                <MessageCircle className="h-4 w-4" />
                {nav.cta}
              </a>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="btn btn-ghost btn-icon lg:hidden"
                aria-label={nav.menu}
                aria-expanded={open}
              >
                <Menu className="h-[18px] w-[18px]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="no-print fixed inset-0 z-[60] lg:hidden"
            style={{ background: 'var(--bg)' }}
            role="dialog"
            aria-modal="true"
            aria-label={nav.menu}
          >
            <div className="wrap flex h-[74px] items-center justify-between">
              <span className="eyebrow">{nav.menu}</span>
              <button type="button" onClick={() => setOpen(false)} className="btn btn-ghost btn-icon" aria-label={nav.close}>
                <X className="h-[18px] w-[18px]" />
              </button>
            </div>

            <nav className="wrap mt-2 flex flex-col">
              {links.map((l, i) => (
                <motion.a
                  key={l.id}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.35 }}
                  className="flex items-center justify-between border-b py-5"
                >
                  <span className="h-card text-[20px]">{l.label}</span>
                  <span className="mono-xs">{String(i + 1).padStart(2, '0')}</span>
                </motion.a>
              ))}

              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wa btn-lg mt-8"
                onClick={() => setOpen(false)}
              >
                <MessageCircle className="h-4 w-4" />
                {identity.phoneDisplay}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
