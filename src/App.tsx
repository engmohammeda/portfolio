import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Profile } from './components/Profile';
import { Capabilities } from './components/Capabilities';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWA } from './components/FloatingWA';

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
            <Contact />
          </main>
          <Footer />
          <FloatingWA />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
