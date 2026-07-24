import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';
import { Download, ArrowRight, MapPinned, Ruler, Layers, TrendingUp } from 'lucide-react';

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = portfolioData[language].hero;

  return (
    <section id="intro" className="relative pt-32 md:pt-40 pb-20 md:pb-32 overflow-hidden">
      {/* Background */}
      <div className="hero-gradient-mesh" />
      <div className="absolute inset-0 grid-overlay opacity-60 dark:opacity-40" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4a853]/10 dark:bg-[#d4a853]/5 rounded-full blur-[100px] float-element" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1e3a5f]/10 dark:bg-[#1e3a5f]/20 rounded-full blur-[120px] float-element-delay-1" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <div className="saas-badge">
            <span className="pulse-dot" />
            <span className="font-mono">{t.badge}</span>
          </div>
        </motion.div>

        {/* Role Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#1e3a5f]/10 to-[#d4a853]/10 dark:from-[#d4a853]/20 dark:to-[#1e3a5f]/20 border border-[#1e3a5f]/10 dark:border-[#d4a853]/20 text-[#1e3a5f] dark:text-[#e8c675] font-mono text-[11px] font-bold tracking-[0.2em] uppercase">
            <MapPinned className="w-3.5 h-3.5" />
            {t.role}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-center font-display font-black tracking-tight leading-[0.95] text-[2.8rem] sm:text-[3.8rem] md:text-[5.5rem] lg:text-[6.5rem] mb-8"
        >
          <span className="block text-gradient-primary">{t.headline1}</span>
          <span className="block text-gradient-primary">{t.headline2}</span>
          <span className="block text-gradient-gold mt-2">{t.headline3}</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center text-[17px] md:text-[19px] leading-relaxed text-[#475569] dark:text-white/60 max-w-[680px] mx-auto mb-12 font-light px-4"
        >
          {t.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a
            href="/portfolio/cv/mohammed-albakhity-cv.pdf"
            download
            className="group btn-primary w-full sm:w-auto"
          >
            <Download className="w-5 h-5" />
            {t.ctaPrimary}
            <ArrowRight className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </a>
          <a
            href="#projects"
            className="btn-secondary w-full sm:w-auto"
          >
            {t.ctaSecondary}
          </a>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {t.stats.map((stat, i) => (
              <div key={i} className="stat-card">
                <div className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-gradient-primary tracking-tight mb-2">
                  {stat.value}
                </div>
                <div className="font-mono text-[10px] md:text-[11px] tracking-[0.15em] uppercase text-[#475569] dark:text-white/50 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="mockup-container shine-effect">
            {/* Mockup Header */}
            <div className="mockup-header">
              <div className="flex gap-2">
                <div className="mockup-dot bg-red-400" />
                <div className="mockup-dot bg-amber-400" />
                <div className="mockup-dot bg-green-500" />
              </div>
              <div className="hidden md:flex items-center gap-2 ml-6 font-mono text-[11px] text-[#475569] dark:text-white/50">
                <Ruler className="w-3.5 h-3.5" />
                TOPOGRAPHIC_SURVEY_2024.dwg • Scale 1:500
              </div>
              <div className="ml-auto flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-[#475569]/60 dark:text-white/40">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="hidden sm:inline">Total Station Active</span>
                <span className="sm:hidden">Active</span>
              </div>
            </div>

            {/* Mockup Content */}
            <div className="p-4 md:p-6">
              <div className="grid grid-cols-12 gap-4">
                {/* Left - Survey Map */}
                <div className="col-span-12 lg:col-span-8">
                  <div className="rounded-2xl bg-gradient-to-br from-[#f8f9fc] to-white dark:from-[#0f172a] dark:to-[#06080f] border border-[#1e3a5f]/5 dark:border-white/5 p-5 md:p-6 relative overflow-hidden min-h-[320px] md:min-h-[440px]">
                    <div className="absolute inset-0 grid-overlay-fine opacity-50" />
                    
                    <div className="relative z-10 h-full flex flex-col">
                      <div className="flex items-center justify-between mb-6">
                        <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#475569] dark:text-white/50 flex items-center gap-2">
                          <Layers className="w-3.5 h-3.5" />
                          Topographic Survey
                        </div>
                        <div className="font-mono text-[10px] px-3 py-1.5 rounded-full bg-gradient-to-r from-[#d4a853] to-[#e8c675] text-white font-bold shadow-lg shadow-[#d4a853]/20">
                          N 15°21' E
                        </div>
                      </div>

                      {/* Survey visualization */}
                      <div className="flex-1 relative border-2 border-dashed border-[#1e3a5f]/10 dark:border-white/10 rounded-xl overflow-hidden bg-white/30 dark:bg-[#0f172a]/30">
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
                          <defs>
                            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-[#1e3a5f]/10 dark:text-white/5" />
                            </pattern>
                            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                              <rect width="100" height="100" fill="url(#smallGrid)" />
                              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#1e3a5f]/15 dark:text-white/8" />
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill="url(#grid)" />
                          
                          {/* Contour lines */}
                          <path d="M 0 150 Q 100 120 200 160 T 400 140" fill="none" stroke="#d4a853" strokeWidth="1.5" strokeDasharray="8 6" opacity="0.6" />
                          <path d="M 0 180 Q 120 160 240 190 T 400 170" fill="none" stroke="#d4a853" strokeWidth="1" strokeDasharray="6 8" opacity="0.4" />
                          
                          {/* Road centerline */}
                          <path d="M 20 200 C 80 180 140 220 200 200 S 320 160 380 180" fill="none" stroke="#1e3a5f" strokeWidth="3" className="dark:stroke-white" />
                          <path d="M 20 205 C 80 185 140 225 200 205 S 320 165 380 185" fill="none" stroke="#1e3a5f" strokeWidth="1" opacity="0.5" className="dark:stroke-white" />
                          <path d="M 20 195 C 80 175 140 215 200 195 S 320 155 380 175" fill="none" stroke="#1e3a5f" strokeWidth="1" opacity="0.5" className="dark:stroke-white" />
                          
                          {/* Survey points */}
                          <circle cx="60" cy="190" r="5" fill="#d4a853" stroke="white" strokeWidth="2" />
                          <circle cx="150" cy="210" r="5" fill="#2d5a8e" stroke="white" strokeWidth="2" />
                          <circle cx="240" cy="180" r="5" fill="#d4a853" stroke="white" strokeWidth="2" />
                          <circle cx="330" cy="170" r="5" fill="#1e3a5f" className="dark:fill-white" stroke="white" strokeWidth="2" />
                        </svg>

                        {/* Labels */}
                        <div className="absolute top-3 left-3 font-mono text-[9px] leading-tight bg-white dark:bg-[#0f172a] px-2.5 py-2 rounded-lg border border-[#1e3a5f]/10 dark:border-white/10 shadow-lg">
                          <div className="text-[#475569] dark:text-white/50">BM-01</div>
                          <div className="font-bold text-[#1e3a5f] dark:text-white">1254.320m</div>
                        </div>
                        <div className="absolute bottom-3 right-3 font-mono text-[9px] leading-tight bg-gradient-to-r from-[#d4a853] to-[#e8c675] text-white px-3 py-2 rounded-lg font-bold shadow-lg">
                          ROAD AXIS • STA 0+320
                        </div>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2 font-mono text-[10px]">
                        <span className="px-3 py-1.5 rounded-full bg-[#1e3a5f] dark:bg-white text-white dark:text-[#0f172a] font-bold">SCALE 1:500</span>
                        <span className="px-3 py-1.5 rounded-full border border-[#1e3a5f]/10 dark:border-white/10 bg-white dark:bg-[#0f172a] text-[#475569] dark:text-white/60">WGS84 • UTM</span>
                        <span className="hidden sm:inline px-3 py-1.5 rounded-full border border-[#1e3a5f]/10 dark:border-white/10 bg-white dark:bg-[#0f172a] text-[#475569] dark:text-white/60">±3mm accuracy</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right - Data Panels */}
                <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
                  {/* Coordinates Card */}
                  <div className="rounded-2xl bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8e] text-white p-6 shadow-xl shadow-[#1e3a5f]/20">
                    <div className="font-mono text-[10px] tracking-[0.15em] uppercase opacity-70 mb-4">Coordinates • BM-01</div>
                    <div className="space-y-3 font-mono text-[13px]">
                      <div className="flex justify-between items-center">
                        <span className="opacity-70">N</span>
                        <span className="font-bold">15°21'34.2"</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="opacity-70">E</span>
                        <span className="font-bold">44°12'11.8"</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="opacity-70">Elev</span>
                        <span className="font-bold text-[#e8c675]">1254.320m</span>
                      </div>
                      <div className="pt-4 mt-4 border-t border-white/10 flex justify-between items-center text-[11px]">
                        <span className="opacity-70">Accuracy</span>
                        <span className="font-bold">±2mm</span>
                      </div>
                    </div>
                  </div>

                  {/* Quantities Card */}
                  <div className="rounded-2xl bg-white dark:bg-[#0f172a] border border-[#1e3a5f]/5 dark:border-white/5 p-6 flex-1 shadow-lg">
                    <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#475569] dark:text-white/50 mb-5 flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <TrendingUp className="w-3.5 h-3.5" />
                        Quantities
                      </span>
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    </div>
                    <div className="space-y-5">
                      {[
                        { label: "Excavation", value: "1,240 m³", pct: 75 },
                        { label: "Backfill", value: "860 m³", pct: 60 },
                        { label: "Asphalt", value: "2,100 m²", pct: 45 },
                      ].map((q, i) => (
                        <div key={i}>
                          <div className="flex justify-between font-mono text-[11px] mb-2">
                            <span className="text-[#475569] dark:text-white/60">{q.label}</span>
                            <span className="font-bold text-[#1e3a5f] dark:text-white">{q.value}</span>
                          </div>
                          <div className="h-2 rounded-full bg-[#f8f9fc] dark:bg-white/5 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${q.pct}%` }}
                              transition={{ duration: 1, delay: 1 + i * 0.2, ease: "easeOut" }}
                              className="h-full bg-gradient-to-r from-[#d4a853] to-[#e8c675] rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-5 border-t border-[#1e3a5f]/5 dark:border-white/5 font-mono text-[10px] text-[#475569] dark:text-white/40 flex items-center gap-2">
                      <div className="w-3.5 h-3.5 rounded-full border border-[#1e3a5f]/20 dark:border-white/20 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#1e3a5f] dark:bg-white" />
                      </div>
                      Auto-calculated • Civil 3D
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom decoration */}
            <div className="px-6 pb-5">
              <div className="flex items-center gap-3">
                <div className="flex-1 measure-decoration" />
                <div className="font-mono text-[10px] tracking-[0.2em] text-[#475569]/50 dark:text-white/30">15.5 KM ROAD • PRECISION SURVEY</div>
                <div className="flex-1 measure-decoration" />
              </div>
            </div>
          </div>

          {/* Glow effect */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-gradient-to-r from-[#1e3a5f]/10 via-[#d4a853]/15 to-[#1e3a5f]/10 dark:from-[#1e3a5f]/20 dark:via-[#d4a853]/10 dark:to-[#1e3a5f]/20 blur-[60px] -z-10 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};
