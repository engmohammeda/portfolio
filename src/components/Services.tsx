import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';
import { Map, Route, Calculator, DraftingCompass, HardHat, LandPlot } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  map: Map,
  route: Route,
  calculator: Calculator,
  drafting: DraftingCompass,
  helmet: HardHat,
  land: LandPlot,
};

export const Services: React.FC = () => {
  const { language } = useLanguage();
  const t = portfolioData[language].services;

  return (
    <section id="services" className="py-24 md:py-36 relative">
      {/* Divider line */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1e3a5f]/8 dark:via-white/5 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div className="max-w-lg">
            <div className="section-label mb-5">{t.badge}</div>
            <h2 className="font-display font-black tracking-tight text-[2rem] md:text-[3rem] leading-[0.95] text-[#0f172a] dark:text-white">
              {t.title}
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-[#475569] dark:text-white/50 max-w-[380px] font-light">
            {t.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {t.items.map((item, index) => {
            const Icon = iconMap[item.icon] || Map;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group glass-card glass-card-hover rounded-[24px] p-7 md:p-8 relative overflow-hidden"
              >
                {/* Hover accent */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#d4a853]/5 dark:bg-[#d4a853]/10 rounded-full blur-3xl -mr-12 -mt-12 group-hover:bg-[#d4a853]/15 dark:group-hover:bg-[#d4a853]/20 transition-all duration-700" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-7">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8e] dark:from-[#d4a853] dark:to-[#b8912e] flex items-center justify-center shadow-lg shadow-[#1e3a5f]/15 dark:shadow-[#d4a853]/15 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-5.5 h-5.5 text-white dark:text-[#0f172a]" />
                    </div>
                    <div className="font-mono text-[11px] font-bold tracking-[0.15em] text-[#1e3a5f]/20 dark:text-white/10 group-hover:text-[#d4a853]/50 transition-colors duration-500">
                      0{index + 1}
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-[18px] leading-tight tracking-tight text-[#0f172a] dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[13.5px] leading-[1.7] text-[#475569] dark:text-white/50 font-light">
                    {item.desc}
                  </p>

                  <div className="mt-7 flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] uppercase text-[#475569]/50 dark:text-white/30">
                    <div className="w-5 h-[1.5px] bg-[#d4a853]/50 rounded-full" />
                    <span>Surveying Service</span>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-[#1e3a5f]/10 dark:border-white/5 rounded-br-md opacity-0 group-hover:opacity-100 group-hover:border-[#d4a853]/50 transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
