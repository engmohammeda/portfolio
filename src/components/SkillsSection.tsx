import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Ruler, MapPin, Calculator, Compass, Mountain, Settings, Target, Award } from 'lucide-react';
import React from 'react';

interface SkillsSectionProps {
  translations: any;
}

export const SkillsSection = ({ translations }: SkillsSectionProps) => {
  const skillIcons = [
    { icon: Settings, title: "برامج المساحة والتصميم" },
    { icon: Compass, title: "أجهزة المساحة" },
    { icon: Mountain, title: "تصميم الطرق" }
  ];

  const expertiseData = translations.skills.expertise.map((skill: any, index: number) => ({
    ...skill,
    icon: [Ruler, Calculator, Compass, Mountain][index] || Settings
  }));

  return (
    <section id="skills" className="py-20 w-full bg-gradient-to-br from-background to-background/95">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            {translations.skills.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {translations.skills.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Expertise Levels */}
          <Card className="glass-card border-primary/20 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-8 text-center text-foreground">
                {translations.skills.expertiseTitle}
              </h3>
              <div className="grid gap-6">
                {expertiseData.map((item, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-base font-semibold text-foreground">{item.skill}</span>
                      </div>
                      <span className="text-lg font-bold text-primary">{item.level}%</span>
                    </div>
                    <div className="relative h-3 bg-muted/30 rounded-full overflow-hidden">
                      <div 
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="glass-card border-primary/20 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-8 text-center text-foreground">
                {translations.skills.achievementsTitle}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {translations.skills.achievements.map((achievement: any, index: number) => (
                  <div 
                    key={index}
                    className="text-center p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="text-3xl mb-3">{achievement.icon}</div>
                    <div className="text-2xl font-bold text-primary mb-2">{achievement.value}</div>
                    <div className="text-xs text-foreground font-medium leading-tight">{achievement.title}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {translations.skills.categories.map((category: any, categoryIndex: number) => (
            <Card 
              key={categoryIndex}
              className="glass-card border-primary/20 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 rtl:space-x-reverse mb-5">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center shadow-lg">
                    {React.createElement(skillIcons[categoryIndex]?.icon || Settings, {
                      className: "h-6 w-6 text-white"
                    })}
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill: string, skillIndex: number) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary border-primary/30 hover:bg-primary/20 hover:border-primary/50 transition-all duration-200 font-medium px-3 py-1"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};