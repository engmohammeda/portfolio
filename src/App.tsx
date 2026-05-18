import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileDown, Map, Calculator, Code2, Globe, Mail, Phone, MapPin, 
  Linkedin, Printer, Briefcase, User, GraduationCap, Wrench, FolderOpen,
  ArrowRight, CheckCircle2, ChevronRight, Download, Terminal, Layers,
  ListFilter, ArrowUpDown, Github, Twitter, Moon, Sun, Send, MessageSquare
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
      setTimeout(() => setShowPrintWarning(false), 5000);
    } else {
      window.print();
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      setTimeout(() => setFormState('idle'), 5000);
    }, 1500);
  };


  const allCategories = useMemo(() => {
    const cats = d.caseStudies?.projects.map(p => p.category).filter(Boolean) as string[];
    return ['All', ...Array.from(new Set(cats))];
  }, [d.caseStudies?.projects]);

  const filteredProjects = useMemo(() => {
    if (!d.caseStudies?.projects) return [];
    return [...d.caseStudies.projects]
      .filter(p => filterCategory === 'All' || p.category === filterCategory)
      .sort((a, b) => {
        const da = a.date ? new Date(a.date).getTime() : 0;
        const db = b.date ? new Date(b.date).getTime() : 0;
        return sortOrder === 'desc' ? db - da : da - db;
      });
  }, [d.caseStudies?.projects, filterCategory, sortOrder]);

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
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 font-['Alexandria',_sans-serif] selection:bg-blue-600 selection:text-white print:bg-white print:text-black">
        
        {/* Top Navigation */}
        <nav className="fixed w-full top-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 z-50 transition-all print:hidden">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="font-bold text-lg tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-600 text-white font-mono text-sm">MB</span>
              <span className="hidden sm:inline">The Master Blueprint</span>
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
              {d.header.linkedin && (
                <a href={d.header.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm">
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
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
              <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">
                {isRtl ? "نظرة متعمقة على الأنظمة التي بنيتها لحل المشاكل المعقدة في المشاريع." : "An in-depth look at systems I've built to solve complex project bottlenecks."}
              </p>
            </motion.div>

            <motion.div {...fadeUp} className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-12 gap-6 bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
              <div className="flex flex-wrap gap-2 justify-center">
                {allCategories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setFilterCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${filterCategory === cat ? 'bg-blue-600 text-white shadow-md' : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700'}`}
                  >
                    {cat === 'All' ? (isRtl ? 'الكل' : 'All') : cat}
                  </button>
                ))}
              </div>
              
              <button
                onClick={() => setSortOrder(o => o === 'desc' ? 'asc' : 'desc')}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shrink-0"
              >
                <ArrowUpDown className="w-4 h-4" />
                {isRtl ? (sortOrder === 'desc' ? 'الأحدث أولاً' : 'الأقدم أولاً') : (sortOrder === 'desc' ? 'Newest First' : 'Oldest First')}
              </button>
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
                         <span>PROJECT_{project.id}</span>
                         <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                         <span className="text-blue-600 dark:text-blue-400">{project.category}</span>
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

        {/* The Arsenal (Skills) & Experience Split */}
        <section className="py-20 lg:py-32 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
              
              {/* Experience */}
              <motion.div {...fadeUp} className="lg:col-span-7">
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center shadow-sm border border-slate-200 dark:border-slate-800">
                    <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{d.experience.title}</h2>
                </div>
                
                <div className="space-y-12 relative before:absolute before:inset-0 before:ms-[23px] before:h-full before:w-px before:bg-slate-200 dark:before:bg-slate-800">
                  {d.experience.jobs.map((job, idx) => (
                    <div key={idx} className="relative ps-16">
                      <span className="absolute start-[19px] top-2 w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-400 shadow-[0_0_0_6px_white] dark:shadow-[0_0_0_6px_#0f172a] ring-1 ring-slate-200 dark:ring-slate-700"></span>
                      
                      <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white">{job.title}</h3>
                          <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold tracking-wider font-mono">
                            {job.date}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-6">{job.company}</h4>
                        
                        <ul className="space-y-4">
                          {job.points.map((pt, i) => (
                            <li key={i} className="flex gap-4 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                              <span className="mt-[8px] w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 shrink-0"></span>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Skills & Arsenal */}
              <motion.div {...fadeUp} className="lg:col-span-5 space-y-12">
                <div>
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center shadow-sm border border-slate-200 dark:border-slate-800">
                      <Wrench className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{d.competencies.title}</h2>
                  </div>

                  {d.competencies.chartData && (
                    <div className="h-72 mb-8 bg-white dark:bg-slate-900 appearance-none rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={d.competencies.chartData}>
                          <PolarGrid stroke={theme === 'dark' ? '#334155' : '#cbd5e1'} />
                          <PolarAngleAxis dataKey="subject" tick={{ fill: theme === 'dark' ? '#94a3b8' : '#475569', fontSize: 11, fontWeight: 700 }} />
                          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                          <Radar name="Proficiency" dataKey="A" stroke="#2563eb" fill="#3b82f6" fillOpacity={0.4} strokeWidth={2} />
                          <Tooltip wrapperClassName="text-sm font-semibold text-slate-700" contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                        </RadarChart>
                      </ResponsiveContainer>
                    </div>
                  )}

                  <div className="space-y-8">
                    {d.competencies.categories.map((cat, i) => (
                      <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
                        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider">{cat.name}</h4>
                        <div className="space-y-5">
                          {cat.skills.map((skill: any, idx: number) => (
                            <div key={idx} className="space-y-2">
                              <div className="flex justify-between text-xs font-semibold">
                                <span className="text-slate-600 dark:text-slate-300">{skill.name}</span>
                                <span className="text-blue-600 dark:text-blue-400 font-mono">{skill.value}%</span>
                              </div>
                              <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                <motion.div 
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${skill.value}%` }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 1, delay: 0.2 + (idx * 0.1) }}
                                  className="h-full bg-blue-500 dark:bg-blue-400 rounded-full"
                                ></motion.div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center shadow-sm border border-slate-200 dark:border-slate-800">
                      <FolderOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{d.workSamples.title}</h2>
                  </div>
                  
                  <div className="grid gap-4">
                    {d.workSamples.samples.map((sample, i) => (
                      <div 
                        key={i} 
                        className="group flex items-center justify-between p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-md transition-all cursor-pointer"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:bg-blue-50 dark:group-hover:bg-slate-800 transition-colors">
                            {sample.type === 'dwg' && <Map className="w-6 h-6" />}
                            {sample.type === 'xls' && <Calculator className="w-6 h-6" />}
                            {sample.type === 'code' && <Code2 className="w-6 h-6" />}
                          </div>
                          <div>
                            <h5 className="font-bold text-slate-900 dark:text-white text-sm mb-1">{sample.title}</h5>
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{sample.desc}</p>
                          </div>
                        </div>
                        <div className="w-10 h-10 rounded-full border border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-400 dark:text-slate-500 group-hover:bg-blue-600 dark:group-hover:bg-blue-600 group-hover:text-white dark:group-hover:text-white group-hover:border-blue-600 dark:group-hover:border-blue-600 transition-all">
                          <Download className="w-4 h-4" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 lg:py-32 bg-slate-900 dark:bg-slate-950 text-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeUp} className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight mb-4">
                {d.testimonials.title}
              </h2>
              <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {d.testimonials.quotes.map((quote: any, idx: number) => (
                <motion.div 
                  key={idx}
                  {...fadeUp}
                  className="bg-white/5 border border-white/10 p-8 rounded-3xl relative"
                >
                  <MessageSquare className="w-10 h-10 text-white/10 absolute top-8 end-8" />
                  <p className="text-lg text-slate-300 leading-relaxed italic mb-8 relative z-10">
                    "{quote.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center font-bold text-lg">
                      {quote.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{quote.author}</h4>
                      <span className="text-sm text-blue-400">{quote.role}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Footer & Contact Form */}
        <section className="py-20 lg:py-32 bg-blue-600 dark:bg-blue-800 text-white relative print:hidden">
          <div className="absolute inset-0 opacity-[0.05] dark:opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeUp} className="text-start">
                <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">{d.contact.title}</h2>
                <p className="text-blue-100 text-lg font-medium mb-10 max-w-md">
                  {d.contact.subtitle}
                </p>
                <div className="space-y-6 text-sm font-semibold text-blue-100/80 font-mono">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center"><Mail className="w-4 h-4 text-white" /></div>
                    <span dir="ltr">{d.header.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center"><Phone className="w-4 h-4 text-white" /></div>
                    <span dir="ltr">{d.header.phone}</span>
                  </div>
                </div>
              </motion.div>

              <motion.div {...fadeUp} className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-2xl text-slate-800 dark:text-slate-200">
                {formState === 'success' ? (
                  <div className="h-64 flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/40 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{d.contact.successText}</h3>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">{d.contact.nameLabel}</label>
                      <input required type="text" className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">{d.contact.emailLabel}</label>
                      <input required type="email" className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">{d.contact.messageLabel}</label>
                      <textarea required rows={4} className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium resize-none"></textarea>
                    </div>
                    <button 
                      disabled={formState === 'submitting'}
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-70 disabled:hover:bg-blue-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                    >
                      {formState === 'submitting' ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          {d.contact.submitText}
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
              className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-full shadow-2xl z-[100] flex items-center gap-3 text-sm font-bold border border-slate-700 dark:border-slate-200"
            >
              <Printer className="w-4 h-4 text-emerald-400 dark:text-emerald-500" />
              <span>{isRtl ? 'للطباعة، يرجى فتح التطبيق في نافذة جديدة (Open in New Tab) لكي يعمل زر الطباعة.' : 'To print, please open the app in a new tab first.'}</span>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}


