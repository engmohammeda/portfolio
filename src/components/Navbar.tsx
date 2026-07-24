import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../data';
import { Globe, Sun, Moon, Menu, X, Download, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = portfolioData[language].nav;
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
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
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-4 pt-4 md:pt-5 no-print pointer-events-none">
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto w-full max-w-6xl flex items-center justify-between px-5 md:px-7 py-3 md:py-3.5 rounded-2xl md:rounded-full border nav-blur transition-all duration-500 ${
            scrolled
              ? "bg-white/85 dark:bg-[#06080f]/85 border-[#1e3a5f]/8 dark:border-white/8 shadow-[0_8px_32px_rgba(30,58,95,0.08),0_1px_3px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              : "bg-white/50 dark:bg-[#06080f]/50 border-white/30 dark:border-white/5 shadow-sm"
          }`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8e] dark:from-[#d4a853] dark:to-[#b8912e] flex items-center justify-center shadow-lg shadow-[#1e3a5f]/20 dark:shadow-[#d4a853]/20 group-hover:scale-105 transition-transform">
              <Compass className="w-5 h-5 text-white dark:text-[#0f172a]" />
            </div>
            <div className="hidden md:block leading-tight">
              <div className="font-display font-bold text-[14px] tracking-tight text-[#0f172a] dark:text-white">محمد البخيتي</div>
              <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#1e3a5f]/50 dark:text-[#d4a853]/70">Surveying • Roads</div>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1 bg-[#f8f9fc]/80 dark:bg-white/5 rounded-full p-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-full text-[13px] font-medium text-[#475569] dark:text-white/60 hover:text-[#1e3a5f] dark:hover:text-white hover:bg-white dark:hover:bg-white/10 transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-3">
            <div className="flex items-center gap-1 p-1 rounded-full bg-[#f8f9fc] dark:bg-white/5 border border-[#1e3a5f]/5 dark:border-white/5">
              <button
                onClick={toggleLanguage}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white dark:hover:bg-white/10 text-[#475569] dark:text-white/60 hover:text-[#1e3a5f] dark:hover:text-white transition-colors"
                title="Toggle Language"
              >
                <Globe className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={toggleTheme}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white dark:hover:bg-white/10 text-[#475569] dark:text-white/60 hover:text-[#1e3a5f] dark:hover:text-white transition-colors"
                title="Toggle Theme"
              >
                {theme === 'light' ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
              </button>
            </div>

            <a
              href="/portfolio/cv/mohammed-albakhity-cv.pdf"
              download
              className="hidden md:inline-flex items-center gap-2 btn-primary !py-2.5 !px-5 !text-[13px]"
            >
              <Download className="w-3.5 h-3.5" />
              {t.downloadCV}
            </a>

            {/* Mobile menu */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8e] dark:from-[#d4a853] dark:to-[#b8912e] text-white dark:text-[#0f172a] shadow-lg"
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
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-[76px] left-4 right-4 z-40 lg:hidden"
          >
            <div className="glass-card rounded-[24px] p-6 border border-[#1e3a5f]/5 dark:border-white/5">
              <div className="flex flex-col gap-1">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-5 py-3.5 rounded-xl text-[15px] font-medium text-[#475569] dark:text-white/70 hover:bg-[#f8f9fc] dark:hover:bg-white/5 hover:text-[#1e3a5f] dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-[#1e3a5f]/5 dark:border-white/5">
                <a
                  href="/portfolio/cv/mohammed-albakhity-cv.pdf"
                  download
                  className="flex items-center justify-center gap-2 btn-primary w-full"
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
