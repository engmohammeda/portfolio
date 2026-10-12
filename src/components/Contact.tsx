import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData, identity } from '../data';
import { motion } from 'framer-motion';
import { Pill, SectionHeader, SectionShell, reveal } from './ui';
import { assetUrl } from '../lib/utils';
import { mailLink, telLink, vcardUri, waLink } from '../lib/links';
import {
  AlertCircle,
  ArrowUpRight,
  CheckCircle2,
  Contact as ContactIcon,
  Mail,
  MessageCircle,
  QrCode,
  Send,
} from 'lucide-react';

const XIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const Contact: React.FC = () => {
  const { language } = useLanguage();
  const t = portfolioData[language].contact;
  const [form, setForm] = useState({ name: '', contact: '', message: '' });
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
          email: form.contact,
          subject: `${t.form.title} — ${form.name}`,
          message: `${form.message}\n\n— ${form.contact} · ${location.host}`,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error('failed');
      setStatus('sent');
      setForm({ name: '', contact: '', message: '' });
      window.setTimeout(() => setStatus('idle'), 6000);
    } catch {
      setStatus('error');
      window.setTimeout(() => setStatus('idle'), 6000);
    }
  };

  return (
    <SectionShell id="contact" className="mesh-soft">
      <SectionHeader
        eyebrow={t.eyebrow}
        title={t.title}
        desc={t.desc}
        aside={<Pill tone="good"><span className="status-dot" />{t.responseNote}</Pill>}
      />

      <div className="grid gap-6 lg:grid-cols-12">
        {/* channels */}
        <motion.div {...reveal} className="lg:col-span-5">
          <div className="card overflow-hidden">
            {t.channels.map((c) => {
              const Icon = channelIcon(c.id);
              return (
                <a
                  key={c.id}
                  href={channelHref(c.id, c.href)}
                  target={c.id === 'x' || c.id === 'gh' || c.id === 'wa' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 border-b px-5 py-4 transition-colors last:border-b-0"
                >
                  <span
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-[14px] border border-(--line) bg-(--surface-2) text-(--txt-2) transition-colors group-hover:border-(--accent-line) group-hover:text-(--accent)"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[13.5px] font-bold t-1">
                      {c.label}
                      <span className="mono-xs ms-2 font-normal" style={{ color: 'var(--accent)' }}>
                        {c.value}
                      </span>
                    </span>
                    <span className="mt-0.5 block text-[12px] t-3">{c.note}</span>
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                    style={{ color: 'var(--accent)' }}
                  />
                </a>
              );
            })}
          </div>

          {/* QR + save contact */}
          <div className="card mt-5 p-5">
            <div className="flex items-start gap-5">
              <div className="flex gap-2.5">
                {['qr/whatsapp.png', 'qr/site.png'].map((src) => (
                  <img
                    key={src}
                    src={assetUrl(src)}
                    alt={t.qrTitle}
                    width={86}
                    height={86}
                    loading="lazy"
                    className="h-[86px] w-[86px] rounded-[12px] border bg-white p-1.5"
                    style={{ borderColor: 'var(--line)' }}
                  />
                ))}
              </div>
              <div className="min-w-0 flex-1">
                <div className="mono-xs mb-2 flex items-center gap-2">
                  <QrCode className="h-3.5 w-3.5" style={{ color: 'var(--accent)' }} />
                  {t.qrTitle}
                </div>
                <p className="text-[12.5px] leading-relaxed t-3">{t.qrNote}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a href={vcardUri(language)} download="mohammed-al-bakhity.vcf" className="btn btn-outline btn-sm">
                    <ContactIcon className="h-3.5 w-3.5" />
                    {t.vcard}
                  </a>
                  <a href={telLink()} className="btn btn-ghost btn-sm" dir="ltr">
                    {identity.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
            <p className="mt-4 border-t pt-4 text-[12.5px] leading-relaxed t-3">{t.availability}</p>
          </div>
        </motion.div>

        {/* form */}
        <motion.div {...reveal} transition={{ duration: 0.6, delay: 0.08 }} className="lg:col-span-7">
          <form onSubmit={onSubmit} className="card h-full p-6 md:p-8">
            <div className="flex items-center gap-3">
              <span
                className="grid h-9 w-9 place-items-center rounded-[12px]"
                style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
              >
                <Send className="h-4 w-4" />
              </span>
              <h3 className="h-card text-[17px]">{t.form.title}</h3>
            </div>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="field-label">{t.form.name}</span>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="field"
                  autoComplete="name"
                />
              </label>
              <label className="block">
                <span className="field-label">{t.form.contact}</span>
                <input
                  required
                  value={form.contact}
                  onChange={(e) => setForm({ ...form, contact: e.target.value })}
                  className="field"
                  autoComplete="email"
                  dir="ltr"
                />
              </label>
            </div>

            <label className="mt-5 block">
              <span className="field-label">{t.form.message}</span>
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="field resize-none"
                placeholder={t.form.messagePlaceholder}
              />
            </label>

            {/* honeypot */}
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} aria-hidden />

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button type="submit" disabled={status === 'sending'} className="btn btn-primary btn-lg disabled:opacity-60">
                {status === 'sending' ? t.form.sending : t.form.submit}
                <Send className="h-4 w-4" />
              </button>
              <span className="mono-xs">{t.form.privacy}</span>
            </div>

            {(status === 'sent' || status === 'error') && (
              <div
                className="mt-5 flex items-center gap-2.5 rounded-[14px] border px-4 py-3 text-[13px] font-medium t-1"
                style={{
                  borderColor: status === 'sent' ? 'var(--good-line)' : 'rgba(200,60,60,0.35)',
                  background: status === 'sent' ? 'var(--good-soft)' : 'rgba(200,60,60,0.08)',
                }}
                role="status"
              >
                {status === 'sent' ? (
                  <CheckCircle2 className="h-4 w-4" style={{ color: 'var(--good)' }} />
                ) : (
                  <AlertCircle className="h-4 w-4" style={{ color: '#C83C3C' }} />
                )}
                {status === 'sent' ? t.form.success : t.form.error}
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </SectionShell>
  );
};
