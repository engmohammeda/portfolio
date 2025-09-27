import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { GeometricBackground } from '@/components/GeometricBackground';
import { ProgressIndicator } from '@/components/ProgressIndicator';
import { translations } from '@/data/translations';

const Index = () => {
  const [currentLang, setCurrentLang] = useState<'en' | 'ar'>('en');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading and set initial state
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleLanguageToggle = () => {
    setCurrentLang(prev => prev === 'en' ? 'ar' : 'en');
  };

  const currentTranslations = translations[currentLang];

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading Digital Engineering Nexus...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-background ${currentLang === 'ar' ? 'rtl' : 'ltr'}`}>
      <GeometricBackground />
      <ProgressIndicator />
      <Navigation
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        translations={currentTranslations}
      />
      
      <main className="relative z-10">
        <section id="home">
          <HeroSection translations={currentTranslations} />
        </section>
        <section id="about">
          <AboutSection translations={currentTranslations} />
        </section>
        <section id="experience">
          <ExperienceSection currentLanguage={currentLang} />
        </section>
        <section id="projects">
          <ProjectsSection translations={currentTranslations} />
        </section>
        <section id="skills">
          <SkillsSection translations={currentTranslations} />
        </section>
        <section id="contact">
          <ContactSection translations={currentTranslations} />
        </section>
      </main>
      
      <Footer translations={currentTranslations} />
    </div>
  );
};

export default Index;
