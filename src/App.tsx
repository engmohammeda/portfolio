import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { EngineeringBackground } from './components/EngineeringBackground';
import { Technology } from './components/Technology';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function AppContent() {
  return (
    <div className="min-h-screen font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black relative transition-colors duration-300">
      <div className="aurora-bg">
        <div className="aurora-blob aurora-1"></div>
        <div className="aurora-blob aurora-2"></div>
        <div className="aurora-blob aurora-3"></div>
      </div>
      <div className="absolute inset-0 bg-grid z-0 pointer-events-none dark:opacity-20 mask-image-b" />
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-6 relative z-10">
        <Hero />
        <About />
        <EngineeringBackground />
        <Technology />
        <Projects />
        <Contact />
      </main>
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
