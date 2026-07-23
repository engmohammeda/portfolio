import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send, CheckCircle2, AlertCircle, MapPin, Phone } from 'lucide-react';

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const Contact: React.FC = () => {
  const { language, dir } = useLanguage();
  const t = portfolioData[language].contact;

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const accessKey = "6285201c-2d82-4f65-b35e-b3fa2de7082a";
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          ...formData,
          subject: `New surveying inquiry from ${formData.name}`,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="section-badge mb-4">{t.badge}</div>
          <h2 className="font-display font-bold tracking-tight text-[2.2rem] md:text-[3.2rem] leading-[0.9] text-zinc-900 dark:text-white max-w-2xl">
            {t.title}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-xl font-light">
            {t.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="blueprint-card rounded-[20px] p-6 md:p-7">
              <div className="font-mono text-[11px] tracking-widest uppercase text-zinc-400 mb-5">Contact Details</div>
              <div className="space-y-4">
                <a href={`mailto:${t.email}`} className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">Email</div>
                    <div className="font-medium text-[14px] text-zinc-900 dark:text-white group-hover:underline">{t.email}</div>
                  </div>
                </a>

                <a href={`tel:${t.phone}`} className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-full bg-amber-500 text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">Phone / WhatsApp</div>
                    <div className="font-medium text-[14px] text-zinc-900 dark:text-white" dir="ltr">{t.phone}</div>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">Location</div>
                    <div className="font-medium text-[14px] text-zinc-900 dark:text-white">{t.location}</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800">
                <div className="font-mono text-[11px] tracking-widest uppercase text-zinc-400 mb-4">Social</div>
                <div className="flex gap-3">
                  <a href={`https://wa.me/${t.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center hover:scale-105 transition-transform">
                    <MessageCircle className="w-4 h-4" />
                  </a>
                  <a href="https://x.com/engalbukhaiti" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 flex items-center justify-center hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                    <XIcon className="w-3.5 h-3.5" />
                  </a>
                  <a href={`mailto:${t.email}`} className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 flex items-center justify-center hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Small note */}
            <div className="rounded-[16px] bg-amber-500/10 border border-amber-500/20 p-4 flex gap-3">
              <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-[11px] font-bold">!</span>
              </div>
              <p className="text-[12px] leading-[1.6] text-amber-900/80 dark:text-amber-100/80 font-light">
                {language === 'en'
                  ? "All surveying tools available: Total Station, Level, GPS. Ready for immediate field deployment."
                  : "جميع أجهزة المساحة متوفرة: توتال ستيشن، ليفل، GPS. جاهز للنزول الميداني الفوري."}
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="blueprint-card rounded-[24px] p-6 md:p-8">
              <h4 className="font-display font-semibold text-[18px] text-zinc-900 dark:text-white mb-6">{t.form.title}</h4>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.form.namePlaceholder}
                    required
                    className="w-full rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-5 py-3.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-zinc-900/10 dark:focus:ring-white/10 focus:border-zinc-900/20 dark:focus:border-white/20 transition-all placeholder:text-zinc-400 dark:text-white"
                    dir={dir}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.form.emailPlaceholder}
                    required
                    className="w-full rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-5 py-3.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900/20 transition-all placeholder:text-zinc-400 dark:text-white"
                    dir="ltr"
                  />
                </div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.form.messagePlaceholder}
                  required
                  rows={5}
                  className="w-full rounded-[20px] bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-5 py-4 text-[14px] focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900/20 transition-all placeholder:text-zinc-400 dark:text-white resize-none"
                  dir={dir}
                />

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-7 py-3.5 rounded-full text-[14px] font-semibold hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed transition-transform"
                  >
                    {status === 'submitting' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 dark:border-zinc-900/30 border-t-white dark:border-t-zinc-900 rounded-full animate-spin" />
                        <span>{t.form.sending}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{t.form.submit}</span>
                      </>
                    )}
                  </button>

                  {status === 'success' && (
                    <span className="inline-flex items-center gap-2 text-[13px] font-medium text-green-600 bg-green-50 dark:bg-green-950/30 px-3 py-1.5 rounded-full border border-green-200 dark:border-green-800">
                      <CheckCircle2 className="w-4 h-4" />
                      {t.form.success}
                    </span>
                  )}
                  {status === 'error' && (
                    <span className="inline-flex items-center gap-2 text-[13px] font-medium text-red-600 bg-red-50 dark:bg-red-950/30 px-3 py-1.5 rounded-full border border-red-200 dark:border-red-800">
                      <AlertCircle className="w-4 h-4" />
                      {t.form.error}
                    </span>
                  )}
                </div>

                <p className="font-mono text-[10px] text-zinc-400 pt-2">
                  {language === 'en'
                    ? "Response within 24h • Surveying consultation free"
                    : "الرد خلال 24 ساعة • استشارة مساحية مجانية"}
                </p>
              </form>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-100 dark:border-zinc-800 flex flex-col md:flex-row justify-between gap-4">
          <p className="font-mono text-[11px] text-zinc-400 tracking-wide">
            © {new Date().getFullYear()} {language === 'en' ? "Mohammed Al-Bakhity Ali — Surveying & Roads Technician" : "محمد البخيتي علي — فني مساحة وطرق"} • {language === 'en' ? "All rights reserved" : "جميع الحقوق محفوظة"}
          </p>
          <div className="font-mono text-[11px] text-zinc-400 flex gap-4">
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Available for Projects</span>
            <span>Yemen • Sana'a</span>
          </div>
        </div>
      </div>
    </section>
  );
};
