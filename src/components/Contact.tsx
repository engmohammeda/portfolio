import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send, CheckCircle2, AlertCircle } from 'lucide-react';

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
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
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          ...formData,
          subject: `New contact from portfolio: ${formData.name}`
        })
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
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <motion.section 
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="py-16 sm:py-24 border-t border-gray-200/60 dark:border-gray-800/60 pb-32"
    >
      <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-10">{t.title}</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        {/* Contact Form */}
        <div className="order-2 lg:order-1">
          <h4 className="text-lg font-medium text-black dark:text-white mb-6">{t.form.title}</h4>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.form.namePlaceholder}
                  required
                  className="w-full bg-white dark:bg-slate-900 border border-gray-200/60 dark:border-gray-800/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500 dark:text-white"
                  dir={dir}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.form.emailPlaceholder}
                  required
                  className="w-full bg-white dark:bg-slate-900 border border-gray-200/60 dark:border-gray-800/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500 dark:text-white"
                  dir="ltr"
                />
              </div>
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.form.messagePlaceholder}
                required
                rows={4}
                className="w-full bg-white dark:bg-slate-900 border border-gray-200/60 dark:border-gray-800/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500 dark:text-white resize-none"
                dir={dir}
              />
            </div>
            
            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
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
                <span className="flex items-center gap-1.5 text-sm font-medium text-green-600">
                  <CheckCircle2 className="w-4 h-4" />
                  {t.form.success}
                </span>
              )}
              
              {status === 'error' && (
                <span className="flex items-center gap-1.5 text-sm font-medium text-red-500">
                  <AlertCircle className="w-4 h-4" />
                  {t.form.error}
                </span>
              )}
            </div>
          </form>
        </div>
        
        {/* Contact Info */}
        <div className="order-1 lg:order-2 flex flex-col justify-center">
          <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">{language === 'en' ? 'Get in touch' : 'تواصل معي'}</p>
          <p className="text-2xl sm:text-3xl font-medium text-black dark:text-white mb-10 leading-snug">
            {language === 'en' ? "Let's work together on your next project." : "دعنا نعمل معاً على مشروعك القادم."}
          </p>
          
          <div className="flex items-center gap-4">
            <a 
              href={`mailto:${t.email}`} 
              className="flex items-center justify-center w-12 h-12 bg-white dark:bg-slate-900 text-black dark:text-white border border-gray-200/60 dark:border-gray-800/60 rounded-full hover:border-black/20 dark:hover:border-white/20 hover:shadow-md hover:-translate-y-1 transition-all"
              title="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            
            <a 
              href={`https://wa.me/${t.phone.replace(/[^0-9]/g, '')}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center w-12 h-12 bg-white dark:bg-slate-900 text-black dark:text-white border border-gray-200/60 dark:border-gray-800/60 rounded-full hover:border-black/20 dark:hover:border-white/20 hover:shadow-md hover:-translate-y-1 transition-all"
              title="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            
            <a 
              href="https://x.com/engalbukhaiti" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center w-12 h-12 bg-white dark:bg-slate-900 text-black dark:text-white border border-gray-200/60 dark:border-gray-800/60 rounded-full hover:border-black/20 dark:hover:border-white/20 hover:shadow-md hover:-translate-y-1 transition-all"
              title="X (Twitter)"
            >
              <XIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono font-medium text-gray-400 dark:text-gray-500 no-print">
        <p>© {new Date().getFullYear()} {t.name}.</p>
      </div>
    </motion.section>
  );
};
