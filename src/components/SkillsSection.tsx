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
    <section id="skills" className="py-16 lg:py-20 bg-gradient-earth">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            {translations.skills.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            خبرة متخصصة في مجال المساحة وتصميم الطرق باستخدام أحدث التقنيات والأجهزة
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {/* Expertise Levels */}
          <div className="lg:col-span-2 xl:col-span-2">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-professional transition-all duration-500 h-full">
              <CardHeader>
                <CardTitle className="text-xl text-center flex items-center justify-center gap-2">
                  <Target className="h-6 w-6 text-primary" />
                  مستوى الخبرة
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {expertiseData.map((skill: any, index: number) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <skill.icon className="h-5 w-5 text-primary" />
                        <span className="font-medium text-foreground">{skill.skill}</span>
                      </div>
                      <span className="text-sm font-semibold text-primary">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-3 bg-muted"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Achievements */}
          <div className="xl:col-span-1">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-professional transition-all duration-500 h-full">
              <CardHeader>
                <CardTitle className="text-xl text-center flex items-center justify-center gap-2">
                  <Award className="h-6 w-6 text-primary" />
                  الإنجازات
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {translations.skills.achievements.map((achievement: any, index: number) => (
                    <div key={index} className="text-center p-4 rounded-lg bg-muted/20 hover:bg-muted/30 transition-all duration-300">
                      <div className="text-2xl mb-2">{achievement.icon}</div>
                      <div className="text-lg font-bold text-primary mb-1">{achievement.value}</div>
                      <div className="text-xs text-muted-foreground leading-tight">{achievement.title}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {translations.skills.categories.map((category: any, categoryIndex: number) => (
            <Card 
              key={categoryIndex}
              className="bg-card/30 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-professional transition-all duration-500 group animate-float"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-lg flex items-center gap-3 text-center justify-center">
                  {React.createElement(skillIcons[categoryIndex]?.icon || Settings, {
                    className: "h-6 w-6 text-primary group-hover:animate-pulse"
                  })}
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill: string, skillIndex: number) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="bg-secondary/10 text-secondary-foreground border-secondary/20 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 text-xs"
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