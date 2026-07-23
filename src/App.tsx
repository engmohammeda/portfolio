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
    <div className="min-h-screen font-sans selection:bg-amber-500 selection:text-white relative transition-colors duration-300 overflow-x-hidden">
      {/* Global blueprint grid - subtle */}
      <div className="fixed inset-0 blueprint-grid opacity-[0.4] dark:opacity-[0.15] pointer-events-none z-0" />
      
      <Navbar />
      
      <main className="max-w-5xl mx-auto px-6 relative z-10">
        <Hero />
        <About />
        <Services />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      {/* Bottom engineering line */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pb-8">
        <div className="flex items-center gap-3 opacity-40">
          <div className="flex-1 h-[1px] bg-zinc-200 dark:bg-zinc-800" />
          <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-zinc-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full border border-zinc-400" />
            DWG • PDF • SURVEY • ROADS • 2024
            <span className="w-2 h-2 rounded-full bg-amber-500" />
          </div>
          <div className="flex-1 h-[1px] bg-zinc-200 dark:bg-zinc-800" />
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
