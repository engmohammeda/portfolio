// src/components/ExperienceSection.tsx

import { Award, Calendar, GraduationCap, Trophy, Download } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { translations, Language } from '@/data/translations'; // Correct import path for translations and Language type

interface ExperienceSectionProps {
  currentLanguage: Language; // Use the Language type from translations.ts
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ currentLanguage }) => {

  // CORRECTED Helper function to get translated text
  const t = (path: string, fallback?: string): string => {
    const keys = path.split('.');
    let result: any = translations[currentLanguage];

    for (const key of keys) {
      if (result && typeof result === 'object' && key in result) {
        result = result[key];
      } else {
        // If a key is not found, return the fallback or the path itself
        return fallback || path;
      }
    }
    // Ensure the returned value is always a string.
    // This is important if an array (like achievements) is accessed this way,
    // though for achievements we will iterate directly on the array in render.
    if (Array.isArray(result)) {
        return result.join(', '); // Join array elements if somehow an array is returned to a string context
    }
    return String(result); // Convert to string just in case
  };

  // Helper for arrays, specifically for achievements
  const getTranslatedArray = (path: string): string[] => {
    const keys = path.split('.');
    let result: any = translations[currentLanguage];

    for (const key of keys) {
      if (result && typeof result === 'object' && key in result) {
        result = result[key];
      } else {
        return []; // Return empty array if path not found
      }
    }
    return Array.isArray(result) ? result : [];
  };


  const experiences = [
    {
      title: t('experienceSection.graduationProject.title'),
      company: t('experienceSection.graduationProject.company'),
      period: "2025",
      description: t('experienceSection.graduationProject.description'),
      achievements: getTranslatedArray('experienceSection.graduationProject.achievements')
    },
    {
      title: t('experienceSection.practicalTraining.title'),
      company: t('experienceSection.practicalTraining.company'),
      period: "2024-2025",
      description: t('experienceSection.practicalTraining.description'),
      achievements: getTranslatedArray('experienceSection.practicalTraining.achievements')
    }
  ];

  const education = [
    {
      degree: t('experienceSection.educationDetails.diploma'),
      university: t('experienceSection.educationDetails.institute'),
      year: "2025", // Your actual graduation year
      specialization: t('experienceSection.educationDetails.specialization')
    }
  ];

  const certifications = [
    {
      title: t('experienceSection.certificationDetails.aiExpert'),
      downloadUrl: null,
      comingSoon: true
    },
    {
      title: t('experienceSection.certificationDetails.gisFundamentals'),
      downloadUrl: null,
      comingSoon: true
    },
    {
      title: t('experienceSection.certificationDetails.pythonBeginner'),
      downloadUrl: 'https://www.mediafire.com/file/lkmcxtvqc1gzunb/Professional+surveyor+certificate+.pdf/file?dkey=qta2y8pldgt&r=640',
      comingSoon: false
    }
  ];

  return (
    <section className="py-20 w-full">
      <div className="w-full px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            {t('experienceSection.sectionTitle')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('experienceSection.sectionSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Projects */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <Trophy className="h-8 w-8 text-primary" />
              <h3 className="text-3xl font-bold text-foreground">{t('experienceSection.projectsTitle')}</h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-professional transition-all duration-500 group">
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
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
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
                  <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3 flex-1">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <div className="flex-1">
                            <p className="text-sm text-foreground">{cert.title}</p>
                            {cert.comingSoon && (
                              <p className="text-xs text-muted-foreground mt-1">سيتم إرفاقها عند صدورها</p>
                            )}
                          </div>
                        </div>
                        {cert.downloadUrl && !cert.comingSoon && (
                          <button
                            onClick={() => window.open(cert.downloadUrl, '_blank')}
                            className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors duration-300 opacity-0 group-hover:opacity-100"
                            title="تحميل الشهادة"
                          >
                            <Download className="h-4 w-4" />
                          </button>
                        )}
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
