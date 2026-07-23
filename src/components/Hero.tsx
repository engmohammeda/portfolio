import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';
import { Download, ArrowUpRight, MapPinned, Ruler, Layers } from 'lucide-react';

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = portfolioData[language].hero;

  return (
    <section id="intro" className="relative pt-32 md:pt-44 pb-16 md:pb-24 overflow-hidden">
      {/* Engineering BG */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 blueprint-grid-fine opacity-[0.6] dark:opacity-[0.25]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#fcfbf7]/0 via-[#fcfbf7]/40 to-[#fcfbf7] dark:from-[#09090b]/0 dark:via-[#09090b]/40 dark:to-[#09090b]" />
        <div className="eng-orb eng-orb-1" />
        <div className="eng-orb eng-orb-2" />
      </div>

      {/* Corner markers */}
      <div className="corner-marker corner-tl hidden md:block" />
      <div className="corner-marker corner-tr hidden md:block" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-8 md:mb-10"
        >
          <div className="saas-badge">
            <span className="saas-badge-dot" />
            <span className="font-mono">{t.badge}</span>
          </div>
        </motion.div>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-4"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 dark:bg-amber-500/20 border border-amber-500/20 text-amber-700 dark:text-amber-300 font-mono text-[11px] font-bold tracking-widest uppercase">
            <MapPinned className="w-3 h-3" />
            {t.role}
          </span>
        </motion.div>

        {/* Headline - SaaS Super Hero */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-center font-display font-bold tracking-tight leading-[0.9] text-[2.6rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[5.8rem] mb-6"
        >
          <span className="block text-zinc-900 dark:text-white">{t.headline1}</span>
          <span className="block text-zinc-900 dark:text-white">{t.headline2}</span>
          <span className="block text-gradient-amber pb-2">{t.headline3}</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-center text-[16px] md:text-[18px] leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-[640px] mx-auto mb-10 font-light px-4"
        >
          {t.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16"
        >
          <a
            href="/portfolio/cv/mohammed-albakhity-cv.pdf"
            download
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-7 py-3.5 rounded-full text-[14px] font-semibold shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.16)] hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Download className="w-4 h-4" />
            {t.ctaPrimary}
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-semibold bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
          >
            {t.ctaSecondary}
          </a>
        </motion.div>

        {/* Stats - SaaS style social proof bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mx-auto max-w-3xl mb-16 md:mb-24"
        >
          <div className="grid grid-cols-3 divide-x divide-zinc-200 dark:divide-zinc-800 border-y border-zinc-200 dark:border-zinc-800 py-6 md:py-8">
            {t.stats.map((stat, i) => (
              <div key={i} className="text-center px-2">
                <div className="font-display font-bold text-2xl md:text-3xl text-zinc-900 dark:text-white tracking-tight">{stat.value}</div>
                <div className="font-mono text-[10px] md:text-[11px] tracking-widest uppercase text-zinc-500 dark:text-zinc-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Hero Preview - Engineering Blueprint Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto"
        >
          <div className="relative blueprint-card rounded-[24px] md:rounded-[32px] overflow-hidden p-3 md:p-4">
            {/* Window header */}
            <div className="flex items-center justify-between px-5 py-4 rounded-[16px] md:rounded-[20px] bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/50 dark:border-zinc-800/50 mb-3 md:mb-4">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="hidden md:flex items-center gap-2 ml-4 font-mono text-[11px] text-zinc-500">
                  <Ruler className="w-3.5 h-3.5" />
                  SITE_SURVEY_2024.dwg • Scale 1:500
                </div>
              </div>
              <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-zinc-400">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="hidden sm:inline">Total Station Connected</span>
                <span className="sm:hidden">TS Connected</span>
              </div>
            </div>

            {/* Blueprint Content */}
            <div className="grid grid-cols-12 gap-3 md:gap-4">
              {/* Left - Map/Grid */}
              <div className="col-span-12 md:col-span-8 rounded-[16px] md:rounded-[20px] bg-[#fafaf8] dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60 p-4 md:p-6 relative overflow-hidden min-h-[300px] md:min-h-[420px]">
                <div className="absolute inset-0 blueprint-grid opacity-70" />
                
                {/* Measurement markers */}
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="font-mono text-[10px] tracking-widest uppercase text-zinc-400 flex items-center gap-2">
                      <Layers className="w-3 h-3" />
                      Topographic Survey
                    </div>
                    <div className="font-mono text-[10px] px-2 py-1 rounded-full bg-amber-500 text-white font-bold">N 15°21' E</div>
                  </div>

                  {/* Simulated survey map */}
                  <div className="flex-1 relative border border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl overflow-hidden bg-white/50 dark:bg-zinc-800/30">
                    {/* Grid lines */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
                      <defs>
                        <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-zinc-200 dark:text-zinc-700" opacity="0.5"/>
                        </pattern>
                        <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                          <rect width="100" height="100" fill="url(#smallGrid)"/>
                          <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-zinc-300 dark:text-zinc-600" opacity="0.6"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                      {/* Contour lines */}
                      <path d="M 0 150 Q 100 120 200 160 T 400 140" fill="none" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="6 6" opacity="0.6" />
                      <path d="M 0 180 Q 120 160 240 190 T 400 170" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4 8" opacity="0.4" />
                      {/* Road centerline */}
                      <path d="M 20 200 C 80 180 140 220 200 200 S 320 160 380 180" fill="none" stroke="#0f0f0f" strokeWidth="2.5" className="dark:stroke-white" />
                      <path d="M 20 205 C 80 185 140 225 200 205 S 320 165 380 185" fill="none" stroke="#0f0f0f" strokeWidth="0.8" opacity="0.5" className="dark:stroke-white" />
                      <path d="M 20 195 C 80 175 140 215 200 195 S 320 155 380 175" fill="none" stroke="#0f0f0f" strokeWidth="0.8" opacity="0.5" className="dark:stroke-white" />
                      {/* Points */}
                      <circle cx="60" cy="190" r="4" fill="#f59e0b" stroke="white" strokeWidth="1.5" />
                      <circle cx="150" cy="210" r="4" fill="#0ea5e9" stroke="white" strokeWidth="1.5" />
                      <circle cx="240" cy="180" r="4" fill="#f59e0b" stroke="white" strokeWidth="1.5" />
                      <circle cx="330" cy="170" r="4" fill="#0f0f0f" className="dark:fill-white" />
                    </svg>

                    {/* Labels */}
                    <div className="absolute top-3 left-3 font-mono text-[9px] leading-tight bg-white dark:bg-zinc-900 px-2 py-1.5 rounded border shadow-sm">
                      <div className="text-zinc-400">BM-01</div>
                      <div className="font-bold text-zinc-900 dark:text-white">1254.320m</div>
                    </div>
                    <div className="absolute bottom-3 right-3 font-mono text-[9px] leading-tight bg-amber-500 text-white px-2 py-1.5 rounded font-bold shadow-sm">
                      ROAD AXIS • STA 0+320
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2 font-mono text-[10px] text-zinc-500">
                    <span className="px-2.5 py-1 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold">SCALE 1:500</span>
                    <span className="px-2.5 py-1 rounded-full border bg-white dark:bg-zinc-800">WGS84 • UTM</span>
                    <span className="hidden sm:inline px-2.5 py-1 rounded-full border bg-white dark:bg-zinc-800">±3mm accuracy</span>
                  </div>
                </div>
              </div>

              {/* Right - Data Panel */}
              <div className="col-span-12 md:col-span-4 flex flex-col gap-3 md:gap-4">
                <div className="rounded-[16px] md:rounded-[20px] bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 p-5">
                  <div className="font-mono text-[10px] tracking-widest uppercase opacity-60 mb-3">Coordinates • BM-01</div>
                  <div className="space-y-3 font-mono text-[12px]">
                    <div className="flex justify-between"><span className="opacity-60">N</span><span className="font-bold">15°21'34.2"</span></div>
                    <div className="flex justify-between"><span className="opacity-60">E</span><span className="font-bold">44°12'11.8"</span></div>
                    <div className="flex justify-between"><span className="opacity-60">Elev</span><span className="font-bold text-amber-400 dark:text-amber-600">1254.320m</span></div>
                    <div className="pt-3 mt-3 border-t border-white/10 dark:border-zinc-900/10 flex justify-between text-[11px]"><span className="opacity-60">Accuracy</span><span className="font-bold">±2mm</span></div>
                  </div>
                </div>

                <div className="rounded-[16px] md:rounded-[20px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-5 flex-1">
                  <div className="font-mono text-[10px] tracking-widest uppercase text-zinc-400 mb-4 flex items-center justify-between">
                    <span>Quantities</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  </div>
                  <div className="space-y-4">
                    {[
                      { label: "Excavation", value: "1,240 m³", pct: 75 },
                      { label: "Backfill", value: "860 m³", pct: 60 },
                      { label: "Asphalt", value: "2,100 m²", pct: 45 },
                    ].map((q, i) => (
                      <div key={i}>
                        <div className="flex justify-between font-mono text-[11px] mb-1.5">
                          <span className="text-zinc-600 dark:text-zinc-400">{q.label}</span>
                          <span className="font-bold text-zinc-900 dark:text-white">{q.value}</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                          <div className="h-full bg-amber-500 rounded-full" style={{ width: `${q.pct}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 pt-4 border-t border-zinc-100 dark:border-zinc-800 font-mono text-[10px] text-zinc-500 flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center"><div className="w-1 h-1 rounded-full bg-zinc-900 dark:bg-white" /></div>
                    Auto-calculated • Civil 3D
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom measurement decoration */}
            <div className="mt-3 flex items-center gap-3 px-2">
              <div className="flex-1 measure-line" />
              <div className="font-mono text-[10px] tracking-widest text-zinc-400">15.5 KM ROAD • PRECISION SURVEY</div>
              <div className="flex-1 measure-line" />
            </div>
          </div>

          {/* Glow below */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[80%] h-24 bg-amber-500/10 blur-[40px] rounded-full -z-10" />
        </motion.div>
      </div>
    </section>
  );
};
