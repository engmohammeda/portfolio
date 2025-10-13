import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsPreview } from '@/components/ProjectsPreview';
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
      <div className="min-h-screen w-full flex items-center justify-center bg-background">
        <div className="text-center space-y-6">
          <div className="w-20 h-20 border-4 border-survey-orange/30 border-t-survey-orange rounded-full animate-spin mx-auto"></div>
          <div className="typewriter text-lg text-survey-orange font-medium">
            محمد البخيتي - مهندس مساحة
          </div>
          <p className="text-muted-foreground">جاري تحضير المحتوى الهندسي...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen w-full bg-background ${currentLang === 'ar' ? 'rtl' : 'ltr'}`}>
      <GeometricBackground />
      <ProgressIndicator />
      <Navigation
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        translations={currentTranslations}
      />
      
      <main className="relative z-10 w-full">
        <section id="home" className="w-full">
          <HeroSection translations={currentTranslations} />
        </section>
        <section id="about" className="w-full">
          <AboutSection translations={currentTranslations} />
        </section>
        <section id="experience" className="w-full">
          <ExperienceSection currentLanguage={currentLang} />
        </section>
        <section id="projects" className="w-full">
          <ProjectsPreview translations={currentTranslations} />
        </section>
        <section id="skills" className="w-full">
          <SkillsSection translations={currentTranslations} />
        </section>
        <section id="contact" className="w-full">
          <ContactSection translations={currentTranslations} />
        </section>
      </main>
      
      <Footer translations={currentTranslations} />
    </div>
  );
};

export default Index;