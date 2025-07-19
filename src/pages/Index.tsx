import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { ThreeBackground } from '@/components/ThreeBackground';
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
      <ThreeBackground />
      <Navigation
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        translations={currentTranslations}
      />
      
      <main className="relative z-10">
        <HeroSection translations={currentTranslations} />
        <AboutSection translations={currentTranslations} />
        <ExperienceSection />
        <ProjectsSection translations={currentTranslations} />
        <SkillsSection translations={currentTranslations} />
        <ContactSection translations={currentTranslations} />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
