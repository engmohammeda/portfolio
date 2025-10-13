import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { GeometricBackground } from '@/components/GeometricBackground';
import { translations } from '@/data/translations';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Construction, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import highwayDesignImage from '@/assets/highway-design.jpg';
import smartCityTechImage from '@/assets/smart-city-tech.jpg';
import roadSurveyorImage from '@/assets/road-surveyor.jpg';

const Projects = () => {
  const [currentLang, setCurrentLang] = useState<'en' | 'ar'>('en');
  const navigate = useNavigate();

  const handleLanguageToggle = () => {
    setCurrentLang(prev => prev === 'en' ? 'ar' : 'en');
  };

  const currentTranslations = translations[currentLang];

  // المشاريع من البيانات
  const projects = [
    {
      title: currentTranslations.projects.items[0].title,
      description: currentTranslations.projects.items[0].description,
      technologies: currentTranslations.projects.items[0].technologies,
      image: roadSurveyorImage,
    },
    {
      title: currentTranslations.projects.items[1].title,
      description: currentTranslations.projects.items[1].description,
      technologies: currentTranslations.projects.items[1].technologies,
      image: smartCityTechImage,
    },
    {
      title: currentTranslations.projects.items[2].title,
      description: currentTranslations.projects.items[2].description,
      technologies: currentTranslations.projects.items[2].technologies,
      image: highwayDesignImage,
    }
  ];

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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <Card key={index} className="glass-card overflow-hidden group hover:shadow-glow transition-all duration-300">
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl line-clamp-2">{project.title}</CardTitle>
                      <CardDescription className="line-clamp-3">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Civil 3D Section */}
            <TabsContent value="civil3d" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <Card key={index} className="glass-card overflow-hidden group hover:shadow-glow transition-all duration-300">
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl line-clamp-2">{project.title}</CardTitle>
                      <CardDescription className="line-clamp-3">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer translations={currentTranslations} />
    </div>
  );
};

export default Projects;