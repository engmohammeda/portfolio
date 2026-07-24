import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';

function AppContent() {
  return (
    <div className="min-h-screen font-sans selection:bg-[#d4a853] selection:text-white relative overflow-x-hidden transition-colors duration-300">
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      {/* Footer line */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-10">
        <div className="flex items-center gap-4 opacity-30">
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#1e3a5f]/20 dark:to-white/10" />
          <div className="font-mono text-[9px] tracking-[0.25em] uppercase text-[#1e3a5f]/50 dark:text-white/30 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full border border-current" />
            DWG • PDF • TOPOGRAPHIC • ROADS • 2026
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4a853]" />
          </div>
          <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#1e3a5f]/20 dark:to-white/10" />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
