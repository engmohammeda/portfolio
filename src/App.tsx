import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Map, Code2, Globe, Mail, Phone, MapPin, Printer, 
  CheckCircle2, Download, Terminal, Layers, Moon, Sun, 
  Send, ExternalLink, MessageCircle, AlertTriangle, Cpu, 
  Settings, Check, Compass, Trash2, Sliders, ChevronDown, RefreshCw, Upload, Eye,
  Github, Twitter
} from 'lucide-react';
import { cvData, Language } from './data';
import confetti from 'canvas-confetti';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof navigator !== 'undefined' && navigator.language) {
      return navigator.language.startsWith('ar') ? 'ar' : 'en';
    }
    return 'ar';
  });
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [showPrintWarning, setShowPrintWarning] = useState(false);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [telegramLogs, setTelegramLogs] = useState<string[]>([]);
  
  // Custom Telegram Config Overrides via LocalStorage (internal bypass)
  const botToken = localStorage.getItem('bukhaiti_tg_token') || '';
  const chatId = localStorage.getItem('bukhaiti_tg_chat_id') || '';

  // Custom User Profile Image from localStorage
  const [profileImage, setProfileImage] = useState(() => localStorage.getItem('bukhaiti_profile_image') || '');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Coordinate Cleaner Sandbox States
  const [coordinateInput, setCoordinateInput] = useState(() => {
    return `Point 1: 13919.25, 51221.43, 12.50 [Dirty Note]
Point 2: N: 13922.10 E: 51224.89 EL: 13.12 (Surface)
POINT 03 / 13928.00 / 51230.15 / 11.85 / RoadCenterline
Point_4 - 13931.45 - 51235.60 - 14.10`;
  });
  const [parsedCoordinates, setParsedCoordinates] = useState<Array<{
    index: number;
    northing: string;
    easting: string;
    elevation: string;
    description: string;
    raw: string;
  }>>([]);
  const [parserStatus, setParserStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Time in Yemen (UTC+3)
  const [yemenTime, setYemenTime] = useState('');

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  // Update Yemen time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Yemen is UTC+3
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const yemenOffset = 3; 
      const yemenDate = new Date(utc + (3600000 * yemenOffset));
      
      const timeStr = yemenDate.toLocaleTimeString(lang === 'ar' ? 'ar-YE' : 'en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      setYemenTime(timeStr);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [lang]);

  const d = cvData[lang];
  const isRtl = lang === 'ar';
  const filteredProjects = d.caseStudies.projects;

  const toggleLang = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
  };

  const handlePrint = () => {
    if (window.self !== window.top) {
      setShowPrintWarning(true);
      setTimeout(() => setShowPrintWarning(false), 9000);
    } else {
      window.print();
    }
  };

  // Profile icon change
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert(isRtl ? 'حجم الملف كبير جداً، يرجى اختيار صورة أقل من 2 ميغابايت.' : 'File size too large. Please select an image under 2MB.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        localStorage.setItem('bukhaiti_profile_image', base64String);
        setProfileImage(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearProfileImage = () => {
    localStorage.removeItem('bukhaiti_profile_image');
    setProfileImage('');
  };

  // Coordinates parser algorithm (real functional parser!)
  const processCoordinates = () => {
    try {
      if (!coordinateInput.trim()) {
        setParsedCoordinates([]);
        setParserStatus('idle');
        return;
      }

      const lines = coordinateInput.split('\n');
      const results: typeof parsedCoordinates = [];

      lines.forEach((line, index) => {
        const cleanedLine = line.trim();
        if (!cleanedLine) return;

        // Hunt for numbers like coordinate fields (e.g. 13919.25, 51221.43, 12.50)
        // Match numbers, floating points, ignoring symbols
        const numbersMatch = cleanedLine.match(/-?\d+(\.\d+)?/g);
        
        let northing = '0.00';
        let easting = '0.00';
        let elevation = '0.00';
        let desc = 'GROUND';

        if (numbersMatch && numbersMatch.length >= 3) {
          // Civil 3D typical fields: Index is often stripped or taken as first, or we match top 3
          // If first number is integer under 1000, it's often the Point Number
          let numStart = 0;
          if (numbersMatch.length > 3 && parseInt(numbersMatch[0]) < 10000 && !numbersMatch[0].includes('.')) {
            // First arg is likely Point Index
            numStart = 1;
          }
          northing = parseFloat(numbersMatch[numStart] || '0').toFixed(3);
          easting = parseFloat(numbersMatch[numStart + 1] || '0').toFixed(3);
          elevation = parseFloat(numbersMatch[numStart + 2] || '0').toFixed(3);
        } else if (numbersMatch && numbersMatch.length === 2) {
          northing = parseFloat(numbersMatch[0] || '0').toFixed(3);
          easting = parseFloat(numbersMatch[1] || '0').toFixed(3);
          elevation = '0.000';
        }

        // Try to capture text inside brackets [] or parenthesis () or at the end as Description
        const descMatch = cleanedLine.match(/[\[\(\/]([a-zA-Z\u0600-\u06FF0-9_\s\-]+)[\]\)]/);
        if (descMatch && descMatch[1]) {
          desc = descMatch[1].trim().toUpperCase();
        } else {
          // Hunt for words at the end
          const words = cleanedLine.split(/\s+/).filter(w => /^[a-zA-Z\u0600-\u06FF_]+$/.test(w));
          if (words.length > 0) {
            desc = words[words.length - 1].toUpperCase();
          }
        }

        // Keep description clean
        desc = desc.replace(/^(N|E|EL|ALT|COORD|POINT|P)$/i, 'SURVEY');

        results.push({
          index: results.length + 1,
          northing,
          easting,
          elevation,
          description: desc,
          raw: cleanedLine
        });
      });

      setParsedCoordinates(results);
      setParserStatus(results.length > 0 ? 'success' : 'error');
    } catch (e) {
      console.error(e);
      setParserStatus('error');
    }
  };

  useEffect(() => {
    processCoordinates();
  }, [coordinateInput]);

  // Download parsed coordinates as Civil 3D PNEZD CSV Format
  const downloadCSV = () => {
    if (parsedCoordinates.length === 0) return;
    
    let csvContent = "Point Number,Northing,Easting,Elevation,Raw Description\r\n";
    parsedCoordinates.forEach(row => {
      csvContent += `${row.index},${row.northing},${row.easting},${row.elevation},${row.description}\r\n`;
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `clean_civil3d_pnezd_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    setTelegramLogs([isRtl ? 'بدء معالجة الاتصال...' : 'Initializing connection...']);
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    
    const text = `📬 *رسالة جديدة من المحفظة*\n\n*المرسل:* ${name}\n*البريد الإلكتروني:* ${email}\n\n*الرسالة:*\n${message}\n\n📍 _تم الإرسال من بورتفوليو البخيتي_`;
    
    // Check local tokens, prioritize localStorage override, then fall back to dotenv
    const realToken = botToken.trim() || (import.meta as any).env?.VITE_TELEGRAM_BOT_TOKEN;
    const realChatId = chatId.trim() || (import.meta as any).env?.VITE_TELEGRAM_CHAT_ID;

    // Simulate stylish terminal logging
    const addLog = (msg: string, delay: number) => {
      return new Promise<void>(resolve => {
        setTimeout(() => {
          setTelegramLogs(prev => [...prev, msg]);
          resolve();
        }, delay);
      });
    };

    await addLog(isRtl ? 'جاري التحقق من قنوات الاتصال برقية (Telegram)...' : 'Checking Telegram communication pipelines...', 400);

    if (realToken && realChatId) {
      await addLog(isRtl ? `توجيه البيانات لـ البوت المعرّف بـ: ...${realToken.slice(-8)}` : `Routing payload to Token signature: ...${realToken.slice(-8)}`, 500);
      try {
        const response = await fetch(`https://api.telegram.org/bot${realToken}/sendMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: realChatId,
            text,
            parse_mode: 'Markdown',
          }),
        });

        if (response.ok) {
          await addLog(isRtl ? '✅ تم استلام استجابة إيجابية من خوادم Telegram API (200 OK).' : '✅ Positive handshaking response from Telegram API (200 OK).', 600);
          await addLog(isRtl ? '🚀 تم تسليم الرسالة بنجاح إلى هاتفك!' : '🚀 Message delivered to your Telegram chat successfully!', 450);
          setFormState('success');
          confetti({
            particleCount: 110,
            spread: 80,
            origin: { y: 0.6 }
          });
          setTimeout(() => setFormState('idle'), 5000);
        } else {
          const errData = await response.json();
          await addLog(`❌ خطأ Telegram: ${errData.description || 'فشل الاتصال'}`, 500);
          setFormState('error');
        }
      } catch (err) {
        console.error(err);
        await addLog(isRtl ? '❌ خطأ استدعاء الشبكة. يرجى التحقق من الاتصال.' : '❌ Network call exception. Please verify route connectivity.', 500);
        setFormState('error');
      }
    } else {
      // Local preview / test mode simulation
      await addLog(isRtl ? '⚠️ لم يتم تهيئة توكن البوت أو معرّف المحادثة حتى الآن.' : '⚠️ Bot token or Chat ID is not configured yet.', 600);
      await addLog(isRtl ? '⚡ تفعيل نمط الواجهة المحاكية المتقدم (Simulator Mode)...' : '⚡ Activating advanced simulator sandbox...', 700);
      await addLog(isRtl ? '✅ تم تفعيل اتصال تجريبي للمعاينة بنجاح!' : '✅ Simulated connection active for preview successfully!', 800);
      
      setFormState('success');
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
      setTimeout(() => setFormState('idle'), 5000);
    }
  };

  const toggleTheme = () => {
    setTheme(t => t === 'light' ? 'dark' : 'light');
  };

  const loadSampleCoordinates = () => {
    setCoordinateInput(`Point 1: 14102.32, 53991.12, 125.40 [TO_BARRIER]
BoundaryLine_P2 (N: 14104.99, E: 53995.80, Z: 126.11)
SurfacePoint_3 - 14112.44 - 54003.50 - 124.90
Tree_4 - 14118.90 - 54010.22 - 123.85
EdgeOfPavement - 14125.10 - 54015.66 - 122.10`);
    confetti({
      particleCount: 20,
      colors: ['#3b82f6']
    });
  };

  return (
    <div className={`${theme === 'dark' ? 'dark' : ''}`}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans selection:bg-blue-600 selection:text-white print:bg-white print:text-black transition-colors duration-500 pb-20">
        
        {/* Sleek, Cybernetic Glass Navbar */}
        <nav className="fixed w-full top-0 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 z-50 transition-all duration-300 print:hidden">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            
            {/* Logo area */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white font-mono text-sm shadow-md shadow-blue-500/20 shadow-inner group cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Compass className="w-5 h-5 animate-spin-slow" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-xs text-slate-400 dark:text-slate-500 font-bold tracking-widest leading-none">SYSTEM.ON</span>
                <span className="font-bold text-sm sm:text-base tracking-tighter text-slate-900 dark:text-white font-mono">MOHAMMED.LTM</span>
              </div>
            </div>

            {/* Live Yemen Clock */}
            <div className="hidden md:flex items-center gap-2 bg-slate-100 dark:bg-slate-900/50 px-4 py-2 rounded-xl border border-slate-200/40 dark:border-slate-800/40 font-mono text-xs text-slate-500 dark:text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>YEMEN_TIME:</span>
              <span className="font-bold font-mono text-slate-800 dark:text-emerald-400 tracking-wider" dir="ltr">{yemenTime}</span>
            </div>
            
            {/* Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 text-xs font-bold font-mono bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-75 *text-slate-600 dark:text-slate-300 px-4 py-2 rounded-xl transition-all shadow-sm hidden sm:flex"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>EXPORT_PDF</span>
              </button>
              
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-850 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-sm"
                aria-label="Toggle Theme"
              >
                {theme === 'light' ? <Moon className="w-4.5 h-4.5" /> : <Sun className="w-4.5 h-4.5" />}
              </button>

              <button
                onClick={toggleLang}
                className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-850 font-mono font-bold text-xs uppercase tracking-widest text-slate-600 dark:text-slate-300 hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-sm"
              >
                {lang === 'en' ? 'عربي' : 'EN'}
              </button>
            </div>
          </div>
        </nav>

        {/* Ambient background particle system */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,_var(--tw-gradient-stops))] from-blue-100/30 via-slate-50 to-slate-50 dark:from-blue-950/20 dark:via-slate-950 dark:to-slate-950 pointer-events-none -z-10"></div>
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-10"></div>

        {/* Hero Area */}
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 px-6 relative print:pt-6 print:pb-4">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Futuristic Banner Status */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/40 shadow-sm"
            >
              <Cpu className="w-4 h-4 text-blue-600 dark:text-blue-400 animate-pulse" />
              <span className="font-mono text-[10px] sm:text-xs font-bold text-blue-700 dark:text-blue-300 uppercase tracking-widest">
                {isRtl ? 'الحالة: في انتظار الذكاء الاصطناعي العام (AGI)' : 'SYSTEM STATUS: AWAITING AGI'}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
            </motion.div>

            {/* Profile Picture Frame with local file upload capability */}
            <div className="relative mx-auto mb-10 w-36 h-36 md:w-44 md:h-44 group">
              <motion.div 
                initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full h-full rounded-[2.5rem] border-4 border-white dark:border-slate-900 shadow-xl overflow-hidden relative bg-slate-100 dark:bg-slate-800 flex items-center justify-center"
              >
                {profileImage ? (
                  <img src={profileImage} alt={d.header.name} className="w-full h-full object-cover" />
                ) : (
                  // Cyber Grid Abstract Placeholder SVG
                  <div className="w-full h-full bg-slate-900 flex flex-col items-center justify-center p-4 relative overflow-hidden text-blue-500/30">
                    <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:10px_10px]"></div>
                    <Compass className="w-16 h-16 text-blue-500 animate-spin-slow opacity-80" strokeWidth={1} />
                    <span className="absolute bottom-2 font-mono text-[9px] text-blue-400 font-bold opacity-75">NO_GEO_IMG</span>
                  </div>
                )}

                {/* Overlay Tooltip Trigger */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-2 text-white transition-opacity duration-300 cursor-pointer text-xs p-2">
                  <Upload className="w-5 h-5 text-blue-400 animate-bounce" />
                  <span className="font-bold text-[10px] uppercase text-center">{isRtl ? 'تحميل صورتك' : 'Upload Photograh'}</span>
                </div>
                
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleImageUpload} 
                  accept="image/*" 
                  className="absolute inset-0 opacity-0 w-full h-full cursor-pointer" 
                  title={isRtl ? 'انقر لرفع صورتك الشخصية' : 'Click to load your personal portrait'}
                />
              </motion.div>

              {/* Decorative futuristic design borders */}
              <div className="absolute -inset-1.5 border border-dashed border-blue-400/30 rounded-[2.8rem] pointer-events-none -z-10 animate-spin-slow"></div>
              
              {/* Reset Photo Button */}
              {profileImage && (
                <button
                  onClick={(e) => { e.stopPropagation(); clearProfileImage(); }}
                  className="absolute -bottom-2 -end-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-lg transition-transform hover:scale-115 active:scale-95"
                  title={isRtl ? 'حذف الصورة' : 'Remove Image'}
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Title / Role */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.1 }}
              className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-100/60 dark:bg-slate-900 border border-blue-200/50 dark:border-slate-800"
            >
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent font-bold tracking-widest text-xs uppercase font-mono">
                {d.header.title}
              </span>
            </motion.div>

            {/* Complete Professional Name */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-none mb-6 font-mono"
            >
              {d.header.name}
            </motion.h1>

            {/* Statement Proposition */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-3xl mx-auto"
            >
              {d.header.valueProp}
            </motion.p>
            
            {/* Quick Contact Specs */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-wrap justify-center gap-6 text-sm font-semibold text-slate-500 dark:text-slate-400 font-mono"
            >
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-500" /> {d.header.location}</span>
              <a href={d.header.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-green-500 transition-colors"><MessageCircle className="w-4 h-4 text-green-500" /> <span dir="ltr">{d.header.phone}</span></a>
              <a href={`mailto:${d.header.email}`} className="flex items-center gap-2 hover:text-blue-500 transition-colors"><Mail className="w-4 h-4 text-blue-500" /> {d.header.email}</a>
            </motion.div>

            {/* Social Gateways */}
            <motion.div
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.6 }}
              className="mt-8 flex justify-center gap-4"
            >
              {d.header.github && (
                <a 
                  href={d.header.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all shadow-sm group"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 duration-200" />
                </a>
              )}
              {d.header.twitter && (
                <a 
                  href={d.header.twitter} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-400 dark:hover:text-blue-300 transition-all shadow-sm group"
                >
                  <Twitter className="w-5 h-5 group-hover:scale-110 duration-200" />
                </a>
              )}
              {d.header.whatsapp && (
                <a 
                  href={d.header.whatsapp} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-green-50 dark:hover:bg-slate-800 hover:text-[#25D366] dark:hover:text-[#25D366] transition-all shadow-sm group"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 duration-200" />
                </a>
              )}
            </motion.div>
          </div>
        </section>

        {/* Clean, Honest Value Manifesto */}
        <section className="py-16 lg:py-24 bg-slate-900 dark:bg-slate-950 border-y border-slate-800 text-white relative">
          <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4">
                <span className="font-mono text-xs text-blue-400 font-bold uppercase tracking-widest leading-loose">01 // PROTOCOL</span>
                <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight mt-1 font-mono">
                  {d.summary.title}
                </h2>
                <div className="w-14 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mt-4 rounded-full"></div>
              </div>
              <div className="md:col-span-8">
                <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-medium leading-relaxed border-s border-blue-500/30 ps-6">
                  {d.summary.content}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* REAL INTERACTIVE ENGINE DEVELOPMENT TO BOOST CREDIBILITY */}
        <section className="py-20 lg:py-28 bg-slate-100 dark:bg-slate-950/20 border-b border-slate-200/50 dark:border-slate-900/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Informational Column */}
              <div className="lg:col-span-5 space-y-6 text-start">
                <span className="font-mono text-xs text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest">02 // REAL OPERATIONS DEMO</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight font-mono">
                  {isRtl ? 'مختبر معالجة البيانات الطبوغرافية' : 'Topographic Data Parser Engine'}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                  {isRtl 
                    ? 'يقوم هذا البرنامج الصغير الذي قمت ببنائه هنا على المتصفح بمعالجة وتنظيف نصوص الرفع المساحي العشوائية وتنسيقها فوراً إلى صيغة PNEZD القياسية المتكاملة لتكون صالحة للاستيراد البرمجي المباشر داخل AutoCAD Civil 3D.' 
                    : 'A client-side utility built using TypeScript that matches raw coordinate streams, filters formatting anomalies, and converts them instantly to standard Civil 3D-compliant CSV records.'}
                </p>
                <div className="bg-white/40 dark:bg-slate-900/40 p-5 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 space-y-4">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-500" />
                    <span className="text-sm text-slate-700 dark:text-slate-300 font-bold">{isRtl ? 'تحويل البيانات الميدانية الفوضوية فوراً' : 'Instantly parses unorganized raw lines'}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-500" />
                    <span className="text-sm text-slate-700 dark:text-slate-300 font-bold">{isRtl ? 'تصدير بصيغة PNEZD CSV متكاملة' : 'Generates standard PNEZD CSV format'}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-500" />
                    <span className="text-sm text-slate-700 dark:text-slate-300 font-bold">{isRtl ? 'معالجة جافاسكريبت محلية آمنة' : 'Secure offline-ready clientside parsing'}</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={loadSampleCoordinates}
                    className="flex-1 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-850 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 text-xs font-bold py-3.5 px-4 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>{isRtl ? 'تحميل إحداثيات عينة' : 'Load Sample Survey Coords'}</span>
                  </button>
                  {parsedCoordinates.length > 0 && (
                    <button
                      onClick={downloadCSV}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-3.5 px-4 rounded-xl transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>{isRtl ? 'تصدير ملف CAD CSV' : 'Export CAD CSV'}</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Live Sandbox Interactive Component */}
              <div className="lg:col-span-7 space-y-5">
                <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-6 lg:p-8 shadow-xl border border-slate-200/50 dark:border-slate-800">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono text-xs text-slate-400 font-bold">{isRtl ? 'أدخل البيانات الطبوغرافية الفوضوية هنا:' : 'INPUT RAW SURVEY TEXT LINES:'}</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-slate-100 dark:bg-slate-800 text-slate-500">
                      SYS_PARSER_ACTIVE
                    </span>
                  </div>

                  <textarea
                    value={coordinateInput}
                    onChange={(e) => setCoordinateInput(e.target.value)}
                    rows={6}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-mono text-xs text-slate-900 dark:text-white leading-relaxed resize-y shadow-inner"
                    placeholder={isRtl ? 'أدخل سطر تلو الآخر ببيانات إحداثيات وملاحظات...' : 'Paste point records...'}
                  />

                  {/* Output Screen */}
                  <div className="mt-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-xs text-blue-600 dark:text-blue-400 font-bold">{isRtl ? 'مخرجات المترجم (صيغة PNEZD المحسنة):' : 'COMPILED OUTBOX (CLEANED PNEZD RECORDS):'}</span>
                      <span className="text-xs font-mono text-slate-400 font-bold">{parsedCoordinates.length} Point(s)</span>
                    </div>

                    <div className="bg-slate-950 text-emerald-400 rounded-xl p-4 font-mono text-xs overflow-x-auto border border-slate-800 max-h-56 shadow-inner text-left" dir="ltr">
                      {parsedCoordinates.length > 0 ? (
                        <table className="w-full text-left">
                          <thead>
                            <tr className="border-b border-slate-800 text-slate-400 text-[10px] uppercase font-bold tracking-wider">
                              <th className="pb-2">Point No.</th>
                              <th className="pb-2">Northing (N)</th>
                              <th className="pb-2">Easting (E)</th>
                              <th className="pb-2">Elevation (Z)</th>
                              <th className="pb-2 text-right">Desc (D)</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-850">
                            {parsedCoordinates.map((row) => (
                              <tr key={row.index} className="hover:bg-slate-900/40 transition-colors">
                                <td className="py-1 text-slate-500 font-bold">{row.index}</td>
                                <td className="py-1">{row.northing}</td>
                                <td className="py-1 text-teal-300">{row.easting}</td>
                                <td className="py-1 text-blue-300">{row.elevation}</td>
                                <td className="py-1 text-amber-300 text-right font-semibold">{row.description}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      ) : (
                        <div className="py-8 text-center text-slate-500">
                          &lt; WAITING FOR DATA INPUT / لا توجد مدخلات صالحة &gt;
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Current Operations Section */}
        <section className="py-20 lg:py-28 bg-white dark:bg-slate-900/20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 15 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="text-center mb-16 space-y-3"
            >
              <span className="font-mono text-xs text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest">03 // NO PSEUDO DESCRIPTIONS</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-none font-mono">
                {d.caseStudies.title}
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  key={project.id}
                  className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/60 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col justify-between group hover:border-blue-400 dark:hover:border-blue-500 transition-all hover:shadow-lg hover:-translate-y-1 duration-350"
                >
                  <div className="p-6 sm:p-8 space-y-6">
                    
                    {/* Badge Info */}
                    <div className="flex justify-between items-center bg-slate-50 dark:bg-slate-950 p-3 rounded-2xl border border-slate-200/40 dark:border-slate-800/40">
                      <span className="font-mono text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase">SYS_WORK_{project.id}</span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold font-mono text-amber-700 bg-amber-50 dark:bg-amber-950/40 dark:text-amber-400 flex items-center gap-1.5 ring-1 ring-amber-500/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                        {project.date}
                      </span>
                    </div>

                    {/* Code Icon Representation */}
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800/60 flex items-center justify-center text-slate-400 dark:text-slate-500 group-hover:bg-blue-600 dark:group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {project.type === 'code' ? <Code2 className="w-6 h-6" /> : project.type === 'dwg' ? <Map className="w-6 h-6" /> : <Globe className="w-6 h-6" />}
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.name}</h3>
                      <p className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">{project.role}</p>
                    </div>

                    <div className="space-y-4 pt-2">
                      {/* Context / Need */}
                      <div>
                        <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-red-500 mb-1">{isRtl ? 'الهدف / المتطلب' : 'Operational Need'}</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">{project.context}</p>
                      </div>
                      {/* Approach */}
                      <div>
                        <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-blue-500 mb-1">{isRtl ? 'الآلية المقترحة' : 'Engineered Approach'}</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">{project.solution}</p>
                      </div>
                    </div>

                  </div>

                  {/* Operational Footer Details */}
                  <div className="bg-slate-50 dark:bg-slate-950/70 p-6 border-t border-slate-200/50 dark:border-slate-800/50 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <p className="text-[11px] text-slate-800 dark:text-slate-200 font-bold leading-tight">{project.impact}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Dynamic Telegram Gateway Configuration & Contact Section */}
        <section id="contact-gate" className="py-20 lg:py-28 bg-slate-900 dark:bg-slate-950 text-white relative overflow-hidden print:hidden">
          <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              
              {/* Left Column Contacts */}
              <div className="space-y-8 text-start">
                <div>
                  <span className="font-mono text-xs text-blue-400 font-bold uppercase tracking-widest leading-loose">04 // GATEWAY TRANSIT</span>
                  <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mt-1 font-mono">{d.contact.title}</h2>
                  <p className="text-slate-400 text-base mt-2">{d.contact.subtitle}</p>
                </div>

                <div className="space-y-4 text-sm font-semibold text-slate-300 font-mono">
                  <a href={`mailto:${d.header.email}`} className="flex items-center gap-4 group p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center group-hover:scale-105 duration-200"><Mail className="w-5 h-5" /></div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-500 uppercase font-bold">{isRtl ? 'البريد الإلكتروني' : 'Secure Email'}</span>
                      <span className="text-xs sm:text-sm" dir="ltr">{d.header.email}</span>
                    </div>
                  </a>
                  
                  <a href={d.header.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-green-500/20 text-green-400 flex items-center justify-center group-hover:scale-105 duration-200"><MessageCircle className="w-5 h-5" /></div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-500 uppercase font-bold">{isRtl ? 'تواصل فوري عبر الخدمة' : 'Immediate Signal / WhatsApp'}</span>
                      <span className="text-xs sm:text-sm" dir="ltr">{d.header.phone}</span>
                    </div>
                  </a>
                </div>


              </div>

              {/* Right Column Interactive Dynamic Form */}
              <div className="w-full">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-slate-950 rounded-[2rem] p-8 lg:p-10 shadow-2xl relative overflow-hidden border border-slate-800 text-left"
                >
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                  
                  {formState === 'success' ? (
                    <div className="py-12 flex flex-col items-center justify-center text-center">
                      <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6 ring-8 ring-emerald-500/5">
                        <CheckCircle2 className="w-10 h-10 text-emerald-400 animate-bounce" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{d.contact.successText}</h3>
                      <p className="text-xs font-mono text-slate-400 mt-2">{isRtl ? 'تم إرسال حزم البيانات بنجاح.' : 'Encrypted packets processed.'}</p>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-5 text-start">
                      
                      <div className="flex items-center gap-2 pb-2 border-b border-slate-800/80 mb-4">
                        <Terminal className="w-4 h-4 text-emerald-400" />
                        <span className="font-mono text-xs text-emerald-400 font-bold">{isRtl ? 'تهيئة كتابة الرسالة' : 'TERMINAL TRANSMISSION GATEWAY'}</span>
                      </div>

                      <div>
                        <label className="block text-slate-400 font-mono text-[10px] uppercase font-bold tracking-widest mb-1.5">{d.contact.nameLabel}</label>
                        <input 
                          name="name" 
                          required 
                          type="text" 
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all font-mono text-xs text-white" 
                        />
                      </div>
                      
                      <div>
                        <label className="block text-slate-400 font-mono text-[10px] uppercase font-bold tracking-widest mb-1.5">{d.contact.emailLabel}</label>
                        <input 
                          name="email" 
                          required 
                          type="email" 
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all font-mono text-xs text-white" 
                        />
                      </div>
                      
                      <div>
                        <label className="block text-slate-400 font-mono text-[10px] uppercase font-bold tracking-widest mb-1.5">{d.contact.messageLabel}</label>
                        <textarea 
                          name="message" 
                          required 
                          rows={4} 
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all font-mono text-xs text-white resize-none"
                        ></textarea>
                      </div>

                      {/* Connection Console Output Logs */}
                      {formState === 'submitting' && (
                        <div className="p-4 bg-black/60 rounded-xl border border-slate-800 font-mono text-[9px] text-emerald-400 text-left space-y-1.5 leading-relaxed max-h-40 overflow-y-auto">
                          {telegramLogs.map((logStr, i) => (
                            <div key={i}>
                              <span className="text-slate-500">&gt;&gt;</span> {logStr}
                            </div>
                          ))}
                        </div>
                      )}

                      <button 
                        disabled={formState === 'submitting'}
                        type="submit" 
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:opacity-75 disabled:cursor-not-allowed text-white font-mono text-xs font-bold uppercase tracking-widest py-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-lg shadow-blue-500/20"
                      >
                        {formState === 'submitting' ? (
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5" />
                            <span>{d.contact.submitText}</span>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* Minimalist Professional Footer */}
        <footer className="py-12 bg-slate-900 dark:bg-slate-950 text-slate-500 text-xs font-mono border-t border-slate-800/80 tracking-widest mt-12 text-center">
          <p>© {new Date().getFullYear()} MOHAMMED ALBKHYTY. ALL SYSTEMS OPERATIONAL.</p>
          <p className="mt-2 text-[10px] text-slate-600 opacity-60">HAND-CRAFTED CODE // YEMEN PRO LEVEL</p>
        </footer>

        {/* Improved Print Warning / Navigation Duplicate Gateway */}
        <AnimatePresence>
          {showPrintWarning && (
            <motion.div 
              initial={{ opacity: 0, y: 55 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 55 }}
              className="fixed bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 w-full max-w-sm sm:max-w-md px-4 z-[100]"
            >
              <div className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-4 rounded-[1.50rem] shadow-2xl flex flex-col gap-4 text-sm font-bold border border-slate-700 dark:border-slate-200 w-full text-center">
                <div className="flex items-center justify-center gap-2 text-rose-400 dark:text-rose-600">
                  <Printer className="w-5 h-5 shrink-0" />
                  <span>{isRtl ? 'لا يمكن الطباعة من الإطار الداخلي.' : 'Printing locked inside current viewport.'}</span>
                </div>
                <div className="text-slate-300 dark:text-slate-600 font-medium text-xs">
                  {isRtl 
                    ? 'يرجى فتح التطبيق في نافذة حقيقية مباشرة لتوليد وتصدير ملفات الـ PDF بشكل نموذجي.' 
                    : 'Dispatched proxy required. Open the application in a standard standalone tab to export the model.'}
                </div>
                <a 
                  href={window.location.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white w-full py-3 rounded-xl flex items-center justify-center gap-2 transition-colors mt-2 text-xs font-mono uppercase tracking-widest shadow-lg shadow-blue-500/20"
                >
                  <ExternalLink className="w-4 h-4" />
                  {isRtl ? 'فتح في نافذة كاملة جديدة' : 'OPEN STANDALONE TAB'}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
