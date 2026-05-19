import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileDown, Map, Calculator, Code2, Globe, Mail, Phone, MapPin, 
  Linkedin, Printer, Briefcase, User, GraduationCap, Wrench, FolderOpen,
  ArrowRight, CheckCircle2, ChevronRight, Download, Terminal, Layers,
  ListFilter, ArrowUpDown, Github, Twitter, Moon, Sun, Send, MessageSquare, ExternalLink, MessageCircle
} from 'lucide-react';
import { cvData, Language } from './data';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import confetti from 'canvas-confetti';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof navigator !== 'undefined' && navigator.language) {
      return navigator.language.startsWith('ar') ? 'ar' : 'en';
    }
    return 'ar';
  });
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc');
  const [showPrintWarning, setShowPrintWarning] = useState(false);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const d = cvData[lang];
  const isRtl = lang === 'ar';

  const toggleLang = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
    document.documentElement.dir = lang === 'en' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang === 'en' ? 'ar' : 'en';
  };

  const handlePrint = () => {
    if (window.self !== window.top) {
      setShowPrintWarning(true);
      setTimeout(() => setShowPrintWarning(false), 10000);
    } else {
      window.print();
    }
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    const text = `*New Lead / Transmission*\n\n*Name:* ${name}\n*Email:* ${email}\n*Payload:*\n${message}`;
    
    try {
      const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
      const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;
      
      if (botToken && chatId) {
        await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: chatId,
            text,
            parse_mode: 'Markdown',
          }),
        });
      } else {
        // Mock successful delay if env vars aren't set yet for preview
        await new Promise(resolve => setTimeout(resolve, 1500));
      }
      
      setFormState('success');
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      setTimeout(() => setFormState('idle'), 5000);
    } catch (err) {
      console.error(err);
      setFormState('idle'); // In a real app we'd show an error state
    }
  };


  const filteredProjects = useMemo(() => {
    if (!d.caseStudies?.projects) return [];
    return [...d.caseStudies.projects];
  }, [d.caseStudies?.projects]);

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1, transition: { staggerChildren: 0.1 } },
    viewport: { once: true }
  };

  const toggleTheme = () => {
    setTheme(t => t === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`${theme === 'dark' ? 'dark' : ''}`}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 font-['Alexandria',_sans-serif] selection:bg-blue-600 selection:text-white print:bg-white print:text-black transition-colors duration-300">
        
        {/* Top Navigation */}
        <nav className="fixed w-full top-0 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 z-50 transition-all print:hidden">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="font-bold text-lg tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-mono text-sm shadow-md shadow-blue-500/20 shadow-inner">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="hidden sm:inline font-mono tracking-tighter">MOHAMMED.DEV</span>
            </div>
            
            <div className="flex items-center gap-4 sm:gap-6">
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors hidden sm:flex"
              >
                <Printer className="w-4 h-4" />
                <span>{isRtl ? 'حفظ PDF' : 'Save PDF'}</span>
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>
              <button
                onClick={toggleLang}
                className="px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 font-bold text-xs uppercase tracking-widest hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
              >
                {lang === 'en' ? 'عربي' : 'EN'}
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 relative overflow-hidden print:pt-12 print:pb-8">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 via-slate-50 to-slate-50 dark:from-blue-900/20 dark:via-slate-950 dark:to-slate-950 -z-10"></div>
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="mx-auto w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white dark:border-slate-900 shadow-2xl overflow-hidden mb-8 relative bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 dark:text-slate-500"
            >
               {/* 
                 Replace the src below with your actual image path or URL.
                 Example: src="/my-photo.jpg"
               */}
               <img 
                 src={`https://ui-avatars.com/api/?name=${d.header.name}&background=2563eb&color=fff&size=256&font-size=0.33&bold=true`} 
                 alt={d.header.name} 
                 className="w-full h-full object-cover" 
                 onError={(e) => { e.currentTarget.style.display = 'none'; }} 
               />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-block mb-8 px-5 py-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent font-bold tracking-wide uppercase text-sm">
                {d.header.title}
              </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-8"
            >
              {d.header.name}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg sm:text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-3xl mx-auto"
            >
              {d.header.valueProp}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.4 }}
              className="mt-12 flex flex-wrap justify-center gap-6 text-sm font-semibold text-slate-500 dark:text-slate-400"
            >
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-500 dark:text-blue-400"/> {d.header.location}</span>
              <span className="flex items-center gap-2 font-mono"><Phone className="w-4 h-4 text-blue-500 dark:text-blue-400" /> <span dir="ltr">{d.header.phone}</span></span>
              <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-blue-500 dark:text-blue-400"/> {d.header.email}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.5 }}
              className="mt-8 flex justify-center gap-4"
            >
              {d.header.github && (
                <a href={d.header.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors shadow-sm">
                  <Github className="w-5 h-5" />
                </a>
              )}
              {d.header.twitter && (
                <a href={d.header.twitter} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-400 dark:hover:text-blue-300 transition-colors shadow-sm">
                  <Twitter className="w-5 h-5" />
                </a>
              )}
              {d.header.whatsapp && (
                <a href={d.header.whatsapp} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-green-50 dark:hover:bg-slate-800 hover:text-[#25D366] dark:hover:text-[#25D366] transition-colors shadow-sm">
                  <MessageCircle className="w-5 h-5" />
                </a>
              )}
            </motion.div>
          </div>
        </section>

        {/* Philosophy / Value Prop */}
        <section className="py-20 lg:py-32 bg-slate-900 dark:bg-slate-950 text-white relative border-y border-slate-800">
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-5" style={{backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-12 items-center relative z-10">
              <motion.div {...fadeUp} className="md:col-span-4">
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                  {d.summary.title}
                </h2>
                <div className="w-16 h-1.5 bg-blue-500 mt-6 rounded-full"></div>
              </motion.div>
              <motion.div {...fadeUp} className="md:col-span-8">
                <p className="text-xl lg:text-2xl text-slate-300 font-light leading-[1.8] border-s-4 border-white/10 ps-8">
                  {d.summary.content}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Case Studies / Engineering Portfolio */}
        <section className="py-20 lg:py-32 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeUp} className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
                {d.caseStudies?.title || "Portfolio"}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-16 lg:gap-24">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, idx) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    key={project.id} 
                    className={`flex flex-col lg:flex-row gap-8 lg:gap-20 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                  >
                    {/* Visual Representation (Abstract) */}
                    <div className="w-full lg:w-1/2 aspect-video bg-slate-50 dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 overflow-hidden relative group/mockup flex items-center justify-center">
                      <div className="absolute inset-0 bg-blue-50/50 dark:bg-transparent transition-colors pointer-events-none"></div>
                      
                      {project.type === 'code' && <Code2 className="w-32 h-32 text-slate-300 dark:text-slate-600 group-hover/mockup:text-blue-500 dark:group-hover/mockup:text-blue-400 transition-all duration-500 group-hover/mockup:scale-110" strokeWidth={1} />}
                      {project.type === 'dwg' && <Map className="w-32 h-32 text-slate-300 dark:text-slate-600 group-hover/mockup:text-blue-500 dark:group-hover/mockup:text-blue-400 transition-all duration-500 group-hover/mockup:scale-110" strokeWidth={1} />}
                      {project.type === 'web' && <Globe className="w-32 h-32 text-slate-300 dark:text-slate-600 group-hover/mockup:text-blue-500 dark:group-hover/mockup:text-blue-400 transition-all duration-500 group-hover/mockup:scale-110" strokeWidth={1} />}
                      {(!project.type) && <Layers className="w-32 h-32 text-slate-300 dark:text-slate-600 group-hover/mockup:text-blue-500 dark:group-hover/mockup:text-blue-400 transition-all duration-500 group-hover/mockup:scale-110" strokeWidth={1} />}
                      
                      <div className="absolute top-4 start-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold font-mono text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 flex items-center gap-2">
                         <span>PROCESS_{project.id}</span>
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 space-y-8">
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-2">{project.name}</h3>
                        <div className="flex items-center gap-3">
                          <p className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide">{project.role}</p>
                          <span className="text-sm font-mono text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">{project.date}</span>
                        </div>
                      </div>
                    
                    <div className="space-y-6">
                      <div className="bg-red-50/50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/50 rounded-2xl p-6">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-red-500 dark:text-red-400 mb-3">{isRtl ? 'التحدي / المشكلة' : 'The Problem'}</h4>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">{project.context}</p>
                      </div>
                      
                      <div className="bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/50 rounded-2xl p-6 relative">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">{isRtl ? 'الحل الهندسي' : 'Engineered Solution'}</h4>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">{project.solution}</p>
                      </div>
                      
                      <div className="flex items-start gap-4 p-2">
                        <CheckCircle2 className="w-6 h-6 text-emerald-500 dark:text-emerald-400 shrink-0 mt-1" />
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">{isRtl ? 'الأثر / النتائج' : 'The Impact'}</h4>
                          <p className="text-slate-800 dark:text-slate-200 font-bold leading-relaxed">{project.impact}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* CTA Footer & Contact Form */}
        <section className="py-20 lg:py-32 bg-slate-900 dark:bg-slate-950 border-t border-slate-800 text-white relative print:hidden overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
          
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>

          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeUp} className="text-start">
                <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight tracking-tight">{d.contact.title}</h2>
                <p className="text-slate-400 text-lg font-medium mb-10 max-w-md">
                  {d.contact.subtitle}
                </p>
                <div className="space-y-6 text-sm font-semibold text-slate-300 font-mono">
                  <a href={`mailto:${d.header.email}`} className="flex items-center gap-4 group hover:opacity-80 transition-opacity w-fit">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors"><Mail className="w-5 h-5" /></div>
                    <span dir="ltr">{d.header.email}</span>
                  </a>
                  <a href={d.header.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group hover:opacity-80 transition-opacity w-fit">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#25D366]/20 group-hover:text-[#25D366] transition-colors"><MessageCircle className="w-5 h-5" /></div>
                    <span dir="ltr">WhatsApp ({d.header.phone})</span>
                  </a>
                </div>
              </motion.div>

              <motion.div {...fadeUp} className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 lg:p-10 shadow-2xl relative overflow-hidden border border-slate-100 dark:border-slate-800">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                {formState === 'success' ? (
                  <div className="h-64 flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/40 rounded-full flex items-center justify-center mb-6 ring-8 ring-emerald-50 dark:ring-emerald-950">
                      <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{d.contact.successText}</h3>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-5 text-start">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">{d.contact.nameLabel}</label>
                      <input name="name" required type="text" className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-slate-900 dark:text-white" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">{d.contact.emailLabel}</label>
                      <input name="email" required type="email" className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-slate-900 dark:text-white" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">{d.contact.messageLabel}</label>
                      <textarea name="message" required rows={4} className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium resize-none text-slate-900 dark:text-white"></textarea>
                    </div>
                    <button 
                      disabled={formState === 'submitting'}
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:opacity-70 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-lg shadow-blue-500/25"
                    >
                      {formState === 'submitting' ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>{d.contact.submitText}</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Actual Print/Hide Footer */}
        <footer className="py-8 text-center bg-slate-900 dark:bg-slate-950 text-slate-500 text-sm font-medium print:bg-white print:text-slate-400 border-t border-slate-800 dark:border-slate-900">
          <p>© {new Date().getFullYear()} Mohammed albukhaiti. All rights reserved.</p>
        </footer>

        {/* Print Warning Toast */}
        <AnimatePresence>
          {showPrintWarning && (
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 w-full max-w-sm sm:max-w-md px-4 z-[100]"
            >
              <div className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-4 rounded-2xl shadow-2xl flex flex-col gap-4 text-sm font-bold border border-slate-700 dark:border-slate-200 w-full text-center">
                <div className="flex items-center justify-center gap-2 text-rose-400 dark:text-rose-600">
                  <Printer className="w-5 h-5 shrink-0" />
                  <span>{isRtl ? 'عذراً! لا يمكن الطباعة من داخل نافذة العرض هذه.' : 'Oops! Printing is disabled inside this view.'}</span>
                </div>
                <div className="text-slate-300 dark:text-slate-600 font-medium">
                  {isRtl ? 'يرجى فتح التطبيق في نافذة جديدة لكي يعمل زر الطباعة.' : 'Please open the app in a new tab first to print.'}
                </div>
                <a 
                  href={window.location.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white w-full py-3 rounded-xl flex items-center justify-center gap-2 transition-colors mt-2 uppercase tracking-wider text-xs shadow-lg shadow-blue-500/20"
                >
                  <ExternalLink className="w-4 h-4" />
                  {isRtl ? 'فتح في نافذة جديدة' : 'Open in New Tab'}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}


