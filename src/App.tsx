import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { EngineeringBackground } from './components/EngineeringBackground';
import { Technology } from './components/Technology';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function AppContent() {
  return (
    <div className="min-h-screen font-sans selection:bg-black selection:text-white relative bg-white">
      <div className="absolute inset-0 bg-grid z-0 pointer-events-none" />
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
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
