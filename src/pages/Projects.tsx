import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { GeometricBackground } from '@/components/GeometricBackground';
import { translations } from '@/data/translations';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Construction } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [currentLang, setCurrentLang] = useState<'en' | 'ar'>('en');
  const navigate = useNavigate();

  const handleLanguageToggle = () => {
    setCurrentLang(prev => prev === 'en' ? 'ar' : 'en');
  };

  const currentTranslations = translations[currentLang];

  return (
    <div className={`min-h-screen w-full bg-background ${currentLang === 'ar' ? 'rtl' : 'ltr'}`}>
      <GeometricBackground />
      <Navigation
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        translations={currentTranslations}
      />
      
      <main className="relative z-10 w-full pt-24 pb-16">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              {currentTranslations.projectsPage.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {currentTranslations.projectsPage.subtitle}
            </p>
          </div>

          {/* Tabs for AutoCAD and Civil 3D */}
          <Tabs defaultValue="autocad" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="autocad">
                {currentTranslations.projectsPage.autocadSection}
              </TabsTrigger>
              <TabsTrigger value="civil3d">
                {currentTranslations.projectsPage.civil3dSection}
              </TabsTrigger>
            </TabsList>

            {/* AutoCAD Section */}
            <TabsContent value="autocad" className="space-y-8">
              <Card className="glass-card border-primary/20">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <Construction className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">
                    {currentTranslations.projectsPage.underDevelopment}
                  </CardTitle>
                  <CardDescription className="text-lg">
                    {currentTranslations.projectsPage.comingSoon}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center pb-8">
                  <Button
                    onClick={() => navigate('/')}
                    className="mt-4"
                  >
                    {currentLang === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Civil 3D Section */}
            <TabsContent value="civil3d" className="space-y-8">
              <Card className="glass-card border-primary/20">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <Construction className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">
                    {currentTranslations.projectsPage.underDevelopment}
                  </CardTitle>
                  <CardDescription className="text-lg">
                    {currentTranslations.projectsPage.comingSoon}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center pb-8">
                  <Button
                    onClick={() => navigate('/')}
                    className="mt-4"
                  >
                    {currentLang === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer translations={currentTranslations} />
    </div>
  );
};

export default Projects;