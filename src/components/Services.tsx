import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';
import { Map, Route, Calculator, DraftingCompass, HardHat, LandPlot } from 'lucide-react';

const icons = [Map, Route, Calculator, DraftingCompass, HardHat, LandPlot];

export const Services: React.FC = () => {
  const { language } = useLanguage();
  const t = portfolioData[language].services;

  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <div className="section-badge mb-4">{t.badge}</div>
            <h2 className="font-display font-bold tracking-tight text-[2rem] md:text-[2.8rem] leading-[0.95] text-zinc-900 dark:text-white max-w-xl">
              {t.title}
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-[360px] font-light">
            {t.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {t.items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="group relative blueprint-card rounded-[20px] md:rounded-[24px] p-7 md:p-8 overflow-hidden"
              >
                {/* Subtle amber accent circle on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 dark:bg-amber-500/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-amber-500/10 dark:group-hover:bg-amber-500/20 transition-colors duration-500" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-11 h-11 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="font-mono text-[11px] font-bold tracking-widest text-zinc-300 dark:text-zinc-700 group-hover:text-amber-500/70 transition-colors">
                      0{index + 1}
                    </div>
                  </div>

                  <h3 className="font-display font-semibold text-[18px] leading-tight tracking-tight text-zinc-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[13.5px] leading-[1.6] text-zinc-600 dark:text-zinc-400 font-light">
                    {item.desc}
                  </p>

                  <div className="mt-6 flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-zinc-400">
                    <div className="w-4 h-[1px] bg-zinc-300 dark:bg-zinc-700" />
                    <span>Surveying Service</span>
                  </div>
                </div>

                {/* Blueprint corner */}
                <div className="absolute bottom-3 right-3 w-3 h-3 border-r border-b border-zinc-200 dark:border-zinc-700 opacity-60 group-hover:opacity-100 group-hover:border-amber-500/50 transition-all" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
