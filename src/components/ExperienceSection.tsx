// src/components/ExperienceSection.tsx

import { Award, Calendar, GraduationCap, Trophy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { translations, Language } from '@/data/translations'; // Correct import path for translations and Language type

interface ExperienceSectionProps {
  currentLanguage: Language; // Use the Language type from translations.ts
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ currentLanguage }) => {

  // Helper function to get translated text
  const t = (path: string): string | string[] => {
    const keys = path.split('.');
    let result: any = translations[currentLanguage];

    for (const key of keys) {
      if (result && typeof result === 'object' && key in result) {
        result = result[key];
      } else {
        // Fallback for missing keys, especially for nested arrays like achievements
        // This will return the path itself if not found, or an empty array for achievement lists
        if (path.includes('achievements')) return []; // Return empty array for missing achievements
        return path; // Return the path for other missing strings
      }
    }
    return result;
  };

  const experiences = [
    {
      title: t('experienceSection.graduationProject.title') as string,
      company: t('experienceSection.graduationProject.company') as string,
      period: "2025", // Your actual graduation year
      description: t('experienceSection.graduationProject.description') as string,
      achievements: t('experienceSection.graduationProject.achievements') as string[]
    },
    // You can add more projects here by defining them in experienceSection.projects in translations.ts
    // For example, if you add another project:
    // {
    //   title: t('experienceSection.otherProject1.title') as string,
    //   company: t('experienceSection.otherProject1.company') as string,
    //   period: "2024",
    //   description: t('experienceSection.otherProject1.description') as string,
    //   achievements: t('experienceSection.otherProject1.achievements') as string[]
    // }
  ];

  const education = [
    {
      degree: t('experienceSection.educationDetails.diploma') as string,
      university: t('experienceSection.educationDetails.institute') as string,
      year: "2025", // Your actual graduation year
      specialization: t('experienceSection.educationDetails.specialization') as string
    }
  ];

  const certifications = [
    t('experienceSection.certificationDetails.aiExpert') as string,
    t('experienceSection.certificationDetails.gisFundamentals') as string,
    t('experienceSection.certificationDetails.pythonBeginner') as string,
    // Add other certifications here from translations.ts if you have them
    // t('experienceSection.certificationDetails.otherOnlineCert') as string,
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            {t('experienceSection.sectionTitle')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('experienceSection.sectionSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Projects */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <Trophy className="h-8 w-8 text-primary" />
              <h3 className="text-3xl font-bold text-foreground">{t('experienceSection.projectsTitle')}</h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-tech transition-all duration-500 group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {exp.title}
                        </h4>
                        <p className="text-secondary font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    <div className="space-y-2">
                      <h5 className="font-semibold text-foreground">
                        {t('experienceSection.keyAchievements')}
                      </h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="h-6 w-6 text-secondary" />
                <h3 className="text-2xl font-bold text-foreground">{t('experienceSection.educationTitle')}</h3>
              </div>

              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                      <p className="text-secondary text-sm">{edu.university}</p>
                      <p className="text-muted-foreground text-sm">{edu.specialization}</p>
                      <p className="text-primary text-sm font-medium">{edu.year}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="h-6 w-6 text-secondary" />
                <h3 className="text-2xl font-bold text-foreground">{t('experienceSection.certificationsTitle')}</h3>
              </div>

              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow"></div>
                        <p className="text-sm text-foreground">{cert}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
