import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Ruler, MapPin, Calculator, Compass, Mountain, Settings, Target, Award, TrendingUp, Zap } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

interface SkillsSectionProps {
  translations: any;
}

// Counter animation hook
const useCountUp = (end: number, duration: number = 2000, start: number = 0) => {
  const [count, setCount] = useState(start);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
          let startTime: number | null = null;
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * (end - start) + start));
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, start, hasAnimated]);

  return { count, elementRef };
};

// Simple Bar Chart Component - Professional and Clean
const SkillBar = ({ percentage, label, icon: Icon, index }: { percentage: number; label: string; icon: any; index: number }) => {
  const [width, setWidth] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const { count } = useCountUp(percentage, 2000);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
          setTimeout(() => {
            setWidth(percentage);
          }, index * 150);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [percentage, index, hasAnimated]);

  return (
    <div 
      ref={elementRef}
      className="space-y-3"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <span className="text-base font-semibold text-foreground">
            {label}
          </span>
        </div>
        <span className="text-xl font-bold text-primary tabular-nums">
          {count}%
        </span>
      </div>
      
      <div className="relative h-3 bg-muted/30 rounded-full overflow-hidden">
        <div 
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: `${width}%`,
            boxShadow: '0 0 20px hsl(var(--primary) / 0.5)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </div>
      </div>
    </div>
  );
};

// Achievement card with animation
const AchievementCard = ({ achievement, index }: { achievement: any; index: number }) => {
  const value = parseInt(achievement.value);
  const { count, elementRef } = useCountUp(value, 2000);

  return (
    <div
      ref={elementRef}
      className="relative p-6 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:shadow-glow group overflow-hidden"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
          {achievement.icon}
        </div>
        <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2 tabular-nums">
          {count}{achievement.value.includes('+') ? '+' : ''}
        </div>
        <div className="text-sm text-muted-foreground font-medium leading-tight">
          {achievement.title}
        </div>
      </div>
      
      {/* Glow effect on hover */}
      <div className="absolute -inset-1 bg-gradient-primary opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10" />
    </div>
  );
};

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
    <section id="skills" className="py-20 w-full relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95" />
      <div className="absolute inset-0 bg-gradient-cyber opacity-30" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            {translations.skills.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {translations.skills.subtitle}
          </p>
        </div>

        {/* Simple Bar Chart - Expertise Levels */}
        <Card className="glass-card border-primary/20 shadow-glow mb-16 overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div className="flex items-center justify-center gap-2 mb-10">
              <TrendingUp className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-center bg-gradient-primary bg-clip-text text-transparent">
                مستوى الإتقان
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {expertiseData.map((item: any, index: number) => (
                <SkillBar
                  key={index}
                  percentage={item.level}
                  label={item.skill}
                  icon={item.icon}
                  index={index}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Achievements Grid */}
        <Card className="glass-card border-primary/20 shadow-glow mb-16 overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div className="flex items-center justify-center gap-2 mb-10">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-center bg-gradient-primary bg-clip-text text-transparent">
                الإنجازات
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {translations.skills.achievements.map((achievement: any, index: number) => (
                <AchievementCard key={index} achievement={achievement} index={index} />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {translations.skills.categories.map((category: any, categoryIndex: number) => (
            <Card 
              key={categoryIndex}
              className="glass-card border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-glow group overflow-hidden"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardContent className="p-6 relative">
                {/* Animated background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      {React.createElement(skillIcons[categoryIndex]?.icon || Settings, {
                        className: "h-6 w-6 text-white"
                      })}
                    </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill: string, skillIndex: number) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 hover:border-primary/50 hover:scale-105 transition-all duration-200 font-medium px-3 py-1.5 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};