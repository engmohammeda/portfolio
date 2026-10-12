import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWA } from './components/FloatingWA';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div id="site" className="min-h-screen">
          <Navbar />
          <main>
            <Hero />
            <Services />
            <Projects />
            <About />
            <Contact />
          </main>
          <Footer />
          <FloatingWA />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
