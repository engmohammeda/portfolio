import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';
import { Mail, MessageCircle } from 'lucide-react';

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export const Contact: React.FC = () => {
  const { language } = useLanguage();
  const t = portfolioData[language].contact;

  return (
    <motion.section 
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="py-16 sm:py-24 border-t border-gray-200/60 pb-32"
    >
      <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-10">{t.title}</h3>
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-10">
        <div>
          <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400 mb-2">{language === 'en' ? 'Get in touch' : 'تواصل معي'}</p>
          <p className="text-2xl sm:text-3xl font-medium text-black">{t.name}</p>
        </div>
        
        <div className="flex items-center gap-4">
          <a 
            href={`mailto:${t.email}`} 
            className="flex items-center justify-center w-12 h-12 bg-white text-black border border-gray-200/60 rounded-full hover:border-black/20 hover:shadow-md transition-all"
            title="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          
          <a 
            href={`https://wa.me/${t.phone.replace(/[^0-9]/g, '')}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center w-12 h-12 bg-white text-black border border-gray-200/60 rounded-full hover:border-black/20 hover:shadow-md transition-all"
            title="WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          
          <a 
            href="https://x.com/engalbukhaiti" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center w-12 h-12 bg-white text-black border border-gray-200/60 rounded-full hover:border-black/20 hover:shadow-md transition-all"
            title="X (Twitter)"
          >
            <XIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
      
      <div className="mt-24 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono font-medium text-gray-400 no-print">
        <p>© {new Date().getFullYear()} {t.name}.</p>
        <p>Built with minimal design philosophy.</p>
      </div>
    </motion.section>
  );
};
