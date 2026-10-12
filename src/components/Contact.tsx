import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';
import { Chip, FigureLabel, SectionHeader, SectionShell, reveal } from './ui';
import { assetUrl } from '../lib/utils';
import { mailLink, telLink, vcardUri, waLink } from '../lib/links';
import {
  MessageCircle, Mail, MapPin, Send, CheckCircle2, AlertCircle, QrCode, Contact as ContactIcon, Clock,
  Linkedin,
} from 'lucide-react';

const XIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const Contact: React.FC = () => {
  const { language } = useLanguage();
  const t = portfolioData[language].contact;
  const [form, setForm] = useState({ name: '', email: '', subject: t.form.subjects[0], message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const channelHref = (id: string, fallback: string) => {
    if (id === 'wa') return waLink(`${t.waText}: ${language === 'ar' ? 'فرصة عمل / مشروع' : 'a role / project'}`);
    if (id === 'mail') return mailLink(t.mailSubject);
    return fallback || '#';
  };

  const channelIcon = (id: string) => {
    if (id === 'wa') return MessageCircle;
    if (id === 'mail') return Mail;
    if (id === 'x') return XIcon;
    if (id === 'li') return Linkedin;
    return ContactIcon;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '6285201c-2d82-4f65-b35e-b3fa2de7082a';
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name,
          email: form.email,
          subject: `[${form.subject}] ${t.form.title} — ${form.name}`,
          message: `النوع / Type: ${form.subject}\n\n${form.message}\n\n— أُرسلت من الملف المهني (${location.host})`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('sent');
        setForm({ name: '', email: '', subject: t.form.subjects[0], message: '' });
        window.setTimeout(() => setStatus('idle'), 6000);
      } else throw new Error('failed');
    } catch {
      setStatus('error');
      window.setTimeout(() => setStatus('idle'), 6000);
    }
  };

  const field = 'w-full rounded-[9px] border px-3.5 py-2.5 text-[14px] outline-none transition-colors focus:border-(--gold)';
  const fieldStyle: React.CSSProperties = { borderColor: 'var(--line)', background: 'var(--panel)', color: 'var(--txt)' };

  return (
    <SectionShell id="contact">
      <SectionHeader
        no={`05 / ${language === 'ar' ? 'التواصل' : 'CONTACT'}`}
        title={t.title}
        desc={t.desc}
      />

      <div className="grid gap-6 lg:grid-cols-12">
        {/* channels */}
        <motion.div {...reveal} className="lg:col-span-6">
          <div className="sheet overflow-hidden">
            <div className="sheet-head">
              <MessageCircle className="h-3.5 w-3.5" style={{ color: 'var(--gold)' }} />
              <FigureLabel>{language === 'ar' ? 'قنوات مباشرة' : 'Direct channels'}</FigureLabel>
              <span className="ms-auto flex items-center gap-1.5">
                <Clock className="h-3 w-3" style={{ color: 'var(--txt-3)' }} />
                <FigureLabel className="text-[10px]!">{t.responseNote}</FigureLabel>
              </span>
            </div>

            <div className="divide-y" style={{ borderColor: 'var(--line)' }}>
              {t.channels.map((c) => {
                const Icon = channelIcon(c.id);
                return (
                  <a
                    key={c.id}
                    href={channelHref(c.id, c.href)}
                    target={c.id === 'wa' || c.id === 'x' || c.id === 'li' || c.id === 'gh' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 px-5 py-4 transition-colors hover:bg-(--panel-2)"
                    style={{ borderColor: 'var(--line)' }}
                  >
                    <span
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-[10px] border"
                      style={{ borderColor: 'var(--line)', background: 'var(--panel-2)' }}
                    >
                      <Icon className="h-[18px] w-[18px]" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[13.5px] font-bold" style={{ color: 'var(--txt)' }}>
                        {c.label}
                        <span className="ms-2 font-mono text-[12px] font-normal" style={{ color: 'var(--gold)' }}>
                          {c.value}
                        </span>
                      </span>
                      <span className="mt-0.5 block text-[12px]" style={{ color: 'var(--txt-3)' }}>
                        {c.note}
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>

            {/* QR + vCard */}
            <div className="grid grid-cols-2 gap-4 border-t p-5" style={{ borderColor: 'var(--line)', background: 'var(--panel-2)' }}>
              <div>
                <FigureLabel className="mb-2.5 flex items-center gap-2">
                  <QrCode className="h-3.5 w-3.5" />
                  {t.qrTitle}
                </FigureLabel>
                <div className="flex gap-3">
                  <img
                    src={assetUrl('qr/whatsapp.png')}
                    alt="WhatsApp QR"
                    width={104}
                    height={104}
                    loading="lazy"
                    className="h-[104px] w-[104px] rounded-[8px] border bg-white p-1.5"
                    style={{ borderColor: 'var(--line)' }}
                  />
                  <img
                    src={assetUrl('qr/site.png')}
                    alt="Site QR"
                    width={104}
                    height={104}
                    loading="lazy"
                    className="h-[104px] w-[104px] rounded-[8px] border bg-white p-1.5"
                    style={{ borderColor: 'var(--line)' }}
                  />
                </div>
                <p className="mt-2.5 text-[11.5px] leading-snug" style={{ color: 'var(--txt-3)' }}>
                  {t.qrNote}
                </p>
              </div>

              <div className="flex flex-col justify-center gap-3">
                <a href={vcardUri(language)} download="mohammed-al-bakhity.vcf" className="btn btn-outline btn-sm w-full">
                  <ContactIcon className="h-3.5 w-3.5" />
                  {t.vcard}
                </a>
                <a href={telLink()} className="btn btn-outline btn-sm w-full">
                  {t.phoneDisplay}
                </a>
                <div className="flex items-center gap-2 text-[12px]" style={{ color: 'var(--txt-3)' }}>
                  <MapPin className="h-3.5 w-3.5" />
                  {t.location}
                </div>
              </div>
            </div>
          </div>

          {/* availability */}
          <div className="sheet sheet-flat ticks mt-5 p-5">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: '#128C4A' }} />
              <p className="text-[13.5px] font-medium leading-relaxed" style={{ color: 'var(--txt)' }}>
                {t.availability}
              </p>
            </div>
          </div>
        </motion.div>

        {/* form */}
        <motion.div {...reveal} transition={{ duration: 0.6, delay: 0.1 }} className="lg:col-span-6">
          <form onSubmit={onSubmit} className="sheet overflow-hidden">
            <div className="sheet-head">
              <Send className="h-3.5 w-3.5" style={{ color: 'var(--gold)' }} />
              <FigureLabel>{t.form.title}</FigureLabel>
            </div>

            <div className="space-y-4 p-5 md:p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="label mb-1.5 block">{t.form.name}</span>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={field}
                    style={fieldStyle}
                    autoComplete="name"
                  />
                </label>
                <label className="block">
                  <span className="label mb-1.5 block">{t.form.email}</span>
                  <input
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={field}
                    style={fieldStyle}
                    autoComplete="email"
                    dir="ltr"
                  />
                </label>
              </div>

              <label className="block">
                <span className="label mb-1.5 block">{t.form.subject}</span>
                <select
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className={field}
                  style={fieldStyle}
                >
                  {t.form.subjects.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="label mb-1.5 block">{t.form.message}</span>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={field}
                  style={fieldStyle}
                  placeholder={language === 'ar' ? 'الموقع، النطاق، المخرجات المطلوبة، والمدة المتوقعة…' : 'Location, scope, expected deliverables, timeframe…'}
                />
              </label>

              {/* honeypot for bots */}
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} aria-hidden />

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn btn-primary btn-lg w-full disabled:opacity-60"
              >
                {status === 'sending' ? t.form.sending : t.form.submit}
                <Send className="h-4 w-4" />
              </button>

              {(status === 'sent' || status === 'error') && (
                <div
                  className="flex items-center gap-2.5 rounded-[9px] border px-4 py-3 text-[13px] font-medium"
                  style={{
                    borderColor: status === 'sent' ? 'rgba(18,140,74,0.35)' : 'rgba(200,60,60,0.35)',
                    background: status === 'sent' ? 'rgba(18,140,74,0.07)' : 'rgba(200,60,60,0.07)',
                    color: 'var(--txt)',
                  }}
                  role="status"
                >
                  {status === 'sent' ? (
                    <CheckCircle2 className="h-4 w-4" style={{ color: '#128C4A' }} />
                  ) : (
                    <AlertCircle className="h-4 w-4" style={{ color: '#C83C3C' }} />
                  )}
                  {status === 'sent' ? t.form.success : t.form.error}
                </div>
              )}

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <FigureLabel className="text-[10px]!">{t.form.privacy}</FigureLabel>
                <Chip className="ms-auto text-[11px]!">
                  {language === 'ar' ? 'أو راسلني على واتساب' : 'Or reach me on WhatsApp'}
                </Chip>
              </div>
            </div>
          </form>

          {/* after-contact steps */}
          <div className="sheet sheet-flat mt-5 overflow-hidden">
            <div className="sheet-head">
              <FigureLabel>{t.stepsTitle}</FigureLabel>
            </div>
            <ol className="grid gap-0 divide-y" style={{ borderColor: 'var(--line)' }}>
              {t.steps.map((s, i) => (
                <li key={s.title} className="flex gap-4 px-5 py-4">
                  <span className="font-mono text-[11px] font-bold" style={{ color: 'var(--gold)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>
                    <span className="block text-[13.5px] font-bold" style={{ color: 'var(--txt)' }}>
                      {s.title}
                    </span>
                    <span className="mt-1 block text-[12.5px] leading-relaxed" style={{ color: 'var(--txt-3)' }}>
                      {s.desc}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
};
