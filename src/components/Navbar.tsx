import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../data';
import { Globe, Sun, Moon, Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = portfolioData[language].nav;
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: "#about", label: t.about },
    { href: "#services", label: t.services },
    { href: "#experience", label: t.experience },
    { href: "#projects", label: t.projects },
    { href: "#certificates", label: t.certificates },
    { href: "#contact", label: t.contact },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-4 pt-4 md:pt-6 no-print pointer-events-none">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto w-full max-w-5xl flex items-center justify-between px-5 md:px-7 py-3 md:py-3.5 rounded-2xl md:rounded-full border backdrop-blur-2xl transition-all duration-300 ${
            scrolled
              ? "bg-white/90 dark:bg-zinc-900/90 border-zinc-200/80 dark:border-zinc-800 shadow-[0_8px_24px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
              : "bg-white/60 dark:bg-zinc-900/60 border-zinc-200/50 dark:border-zinc-800/50 shadow-sm"
          }`}
        >
          {/* Logo / Name */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center font-mono text-[11px] font-bold tracking-wider">
              M.A
            </div>
            <div className="hidden md:block leading-tight">
              <div className="font-display font-semibold text-[13px] tracking-tight text-zinc-900 dark:text-white">محمد البخيتي</div>
              <div className="font-mono text-[10px] tracking-widest uppercase text-zinc-500 dark:text-zinc-400">Surveying • Roads</div>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1 bg-zinc-100/80 dark:bg-zinc-800/80 rounded-full p-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-1.5 rounded-full text-[13px] font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-white dark:hover:bg-zinc-700 transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-3">
            <div className="flex items-center gap-1 p-1 rounded-full bg-zinc-100 dark:bg-zinc-800">
              <button
                onClick={toggleLanguage}
                className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white dark:hover:bg-zinc-700 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                title="Toggle Language"
              >
                <Globe className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={toggleTheme}
                className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white dark:hover:bg-zinc-700 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                title="Toggle Theme"
              >
                {theme === 'light' ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
              </button>
            </div>

            <a
              href="/portfolio/cv/mohammed-albakhity-cv.pdf"
              download
              className="hidden md:inline-flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-5 py-2.5 rounded-full text-[13px] font-semibold hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-lg shadow-zinc-900/10 dark:shadow-white/10"
            >
              <Download className="w-3.5 h-3.5" />
              {t.downloadCV}
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-[72px] left-4 right-4 z-40 lg:hidden"
          >
            <div className="bg-white/95 dark:bg-zinc-900/95 backdrop-blur-2xl border border-zinc-200 dark:border-zinc-800 rounded-[24px] shadow-2xl p-6">
              <div className="flex flex-col gap-1">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 rounded-xl text-[15px] font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-zinc-100 dark:border-zinc-800 flex gap-3">
                <a
                  href="/portfolio/cv/mohammed-albakhity-cv.pdf"
                  download
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-5 py-3 rounded-full text-[14px] font-semibold"
                  onClick={() => setMobileOpen(false)}
                >
                  <Download className="w-4 h-4" />
                  {t.downloadCV}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
