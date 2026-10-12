import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Profile } from './components/Profile';
import { Capabilities } from './components/Capabilities';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Credentials } from './components/Credentials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWA } from './components/FloatingWA';
import { ResumeSheet } from './components/ResumeSheet';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div id="site" className="min-h-screen selection:bg-(--gold) selection:text-white">
          <Navbar />
          <main>
            <Hero />
            <Profile />
            <Capabilities />
            <Services />
            <Projects />
            <Experience />
            <Credentials />
            <Contact />
          </main>
          <Footer />
          <FloatingWA />
        </div>

        {/* print-only CV sheet (shown by the "Print / save PDF" action) */}
        <ResumeSheet />
      </LanguageProvider>
    </ThemeProvider>
  );
}
