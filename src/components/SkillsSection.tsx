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
          <Card className="bg-card/50 border-border/50 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6 text-center text-foreground">
                {translations.skills.expertiseTitle}
              </h3>
              <div className="grid gap-4">
                {expertiseData.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <item.icon className="h-5 w-5 text-survey-orange" />
                        <span className="text-sm font-medium text-foreground">{item.skill}</span>
                      </div>
                      <span className="text-sm font-bold text-survey-orange">{item.level}%</span>
                    </div>
                    <Progress 
                      value={item.level} 
                      className="h-3 bg-muted/30" 
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="bg-card/50 border-border/50 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6 text-center text-foreground">
                {translations.skills.achievementsTitle}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {translations.skills.achievements.map((achievement: any, index: number) => (
                  <div 
                    key={index}
                    className="text-center p-4 bg-gradient-to-br from-survey-orange/10 to-survey-blue/10 rounded-xl border border-survey-orange/20"
                  >
                    <div className="text-2xl mb-2">{achievement.icon}</div>
                    <div className="text-lg font-bold text-survey-orange mb-1">{achievement.value}</div>
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
              className="bg-card/50 border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-survey-orange to-survey-blue rounded-lg flex items-center justify-center">
                    {React.createElement(skillIcons[categoryIndex]?.icon || Settings, {
                      className: "h-5 w-5 text-white"
                    })}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill: string, skillIndex: number) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-survey-orange/10 text-survey-orange border-survey-orange/20 hover:bg-survey-orange/20 transition-colors font-medium"
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