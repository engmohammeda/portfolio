import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language } from '../data';

interface LanguageContextProps {
  language: Language;
  toggleLanguage: () => void;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('app-language');
    if (saved === 'ar' || saved === 'en') return saved;
    
    // Detect browser language
    if (typeof navigator !== 'undefined') {
      const browserLang = navigator.language || (navigator.languages && navigator.languages[0]);
      if (browserLang && browserLang.toLowerCase().startsWith('ar')) {
        return 'ar';
      }
      return 'en';
    }
    
    return 'ar'; // Fallback
  });

  const toggleLanguage = () => {
    setLanguage(prev => {
      const next = prev === 'en' ? 'ar' : 'en';
      localStorage.setItem('app-language', next);
      return next;
    });
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [dir, language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
