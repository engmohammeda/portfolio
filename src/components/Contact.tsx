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
    <section id="contact" className="py-24 md:py-36 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="section-label mb-5">{t.badge}</div>
          <h2 className="font-display font-black tracking-tight text-[2.2rem] md:text-[3.5rem] leading-[0.92] text-[#0f172a] dark:text-white max-w-3xl">
            {t.title}
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-[#475569] dark:text-white/50 max-w-xl font-light">
            {t.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="lg:col-span-5 space-y-5"
          >
            <div className="glass-card rounded-[28px] p-7 md:p-8">
              <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#d4a853] mb-6">Contact Details</div>
              
              <div className="space-y-5">
                <a href={`mailto:${t.email}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8e] dark:from-[#d4a853] dark:to-[#b8912e] flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg">
                    <Mail className="w-5 h-5 text-white dark:text-[#0f172a]" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#475569]/60 dark:text-white/40">Email</div>
                    <div className="font-semibold text-[14px] text-[#0f172a] dark:text-white mt-1 group-hover:text-[#d4a853] transition-colors">{t.email}</div>
                  </div>
                </a>

                <a href={`tel:${t.phone}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#d4a853] to-[#e8c675] flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg shadow-[#d4a853]/20">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#475569]/60 dark:text-white/40">Phone / WhatsApp</div>
                    <div className="font-semibold text-[14px] text-[#0f172a] dark:text-white mt-1" dir="ltr">{t.phone}</div>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#f8f9fc] dark:bg-white/5 border border-[#1e3a5f]/5 dark:border-white/5 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#475569] dark:text-white/50" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#475569]/60 dark:text-white/40">Location</div>
                    <div className="font-semibold text-[14px] text-[#0f172a] dark:text-white mt-1">{t.location}</div>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-8 pt-7 border-t border-[#1e3a5f]/5 dark:border-white/5">
                <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#475569]/50 dark:text-white/30 mb-4">Social</div>
                <div className="flex gap-3">
                  <a 
                    href={`https://wa.me/${t.phone.replace(/[^0-9]/g, '')}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-11 h-11 rounded-xl bg-[#1e3a5f] dark:bg-[#d4a853] text-white dark:text-[#0f172a] flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
                  >
                    <MessageCircle className="w-4.5 h-4.5" />
                  </a>
                  <a 
                    href="https://x.com/engalbukhaiti" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-11 h-11 rounded-xl border border-[#1e3a5f]/10 dark:border-white/10 bg-white dark:bg-white/5 text-[#475569] dark:text-white/70 flex items-center justify-center hover:bg-[#f8f9fc] dark:hover:bg-white/10 transition-colors"
                  >
                    <XIcon className="w-4 h-4" />
                  </a>
                  <a 
                    href={`mailto:${t.email}`} 
                    className="w-11 h-11 rounded-xl border border-[#1e3a5f]/10 dark:border-white/10 bg-white dark:bg-white/5 text-[#475569] dark:text-white/70 flex items-center justify-center hover:bg-[#f8f9fc] dark:hover:bg-white/10 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Availability Note */}
            <div className="rounded-[20px] bg-gradient-to-r from-[#d4a853]/10 to-[#d4a853]/5 dark:from-[#d4a853]/15 dark:to-[#d4a853]/5 border border-[#d4a853]/20 p-5 flex gap-4">
              <div className="w-7 h-7 rounded-full bg-[#d4a853] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-lg shadow-[#d4a853]/20">
                <span className="text-[12px] font-bold">!</span>
              </div>
              <p className="text-[13px] leading-[1.7] text-[#b8912e] dark:text-[#e8c675]/90 font-light">
                {t.availability}
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-[28px] p-7 md:p-9">
              <h4 className="font-display font-bold text-[20px] text-[#0f172a] dark:text-white mb-7">{t.form.title}</h4>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.form.namePlaceholder}
                    required
                    className="w-full rounded-2xl bg-[#f8f9fc] dark:bg-white/5 border border-[#1e3a5f]/5 dark:border-white/5 px-6 py-4 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#d4a853]/30 focus:border-[#d4a853]/30 transition-all placeholder:text-[#475569]/50 dark:text-white"
                    dir={dir}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.form.emailPlaceholder}
                    required
                    className="w-full rounded-2xl bg-[#f8f9fc] dark:bg-white/5 border border-[#1e3a5f]/5 dark:border-white/5 px-6 py-4 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#d4a853]/30 focus:border-[#d4a853]/30 transition-all placeholder:text-[#475569]/50 dark:text-white"
                    dir="ltr"
                  />
                </div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.form.messagePlaceholder}
                  required
                  rows={6}
                  className="w-full rounded-2xl bg-[#f8f9fc] dark:bg-white/5 border border-[#1e3a5f]/5 dark:border-white/5 px-6 py-4 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#d4a853]/30 focus:border-[#d4a853]/30 transition-all placeholder:text-[#475569]/50 dark:text-white resize-none"
                  dir={dir}
                />

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
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
                    <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-950/30 px-4 py-2.5 rounded-full border border-green-200 dark:border-green-800">
                      <CheckCircle2 className="w-4 h-4" />
                      {t.form.success}
                    </span>
                  )}
                  {status === 'error' && (
                    <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-950/30 px-4 py-2.5 rounded-full border border-red-200 dark:border-red-800">
                      <AlertCircle className="w-4 h-4" />
                      {t.form.error}
                    </span>
                  )}
                </div>

                <p className="font-mono text-[11px] text-[#475569]/50 dark:text-white/30 pt-2">
                  {t.responseNote}
                </p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-10 border-t border-[#1e3a5f]/5 dark:border-white/5 flex flex-col md:flex-row justify-between gap-5">
          <p className="font-mono text-[11px] text-[#475569]/60 dark:text-white/30 tracking-wide">
            © {new Date().getFullYear()} {language === 'en' ? "Mohammed Al-Bakhity Ali — Surveying & Roads Engineer" : "محمد البخيتي علي — مهندس مساحة وطرق"} • {t.footer?.rights || (language === 'en' ? "All rights reserved" : "جميع الحقوق محفوظة")}
          </p>
          <div className="font-mono text-[11px] text-[#475569]/60 dark:text-white/30 flex gap-5">
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> {language === 'en' ? "Available for Projects" : "متاح للمشاريع"}</span>
            <span>Yemen • Sana'a</span>
          </div>
        </div>
      </div>
    </section>
  );
};
