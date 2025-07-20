import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Zap, Brain, Cpu, Rocket, Globe, Code2, Building, Calculator } from 'lucide-react';

interface SkillsSectionProps {
  translations: any;
}

export const SkillsSection = ({ translations }: SkillsSectionProps) => {
  const skillIcons = [Building, Code2, Brain, Calculator];
  
  const expertiseData = [
    { name: 'Civil Engineering', level: 95, color: 'primary', icon: Building },
    { name: 'Programming', level: 90, color: 'secondary', icon: Code2 },
    { name: 'AI Development', level: 85, color: 'hologram-blue', icon: Brain },
    { name: 'Project Management', level: 88, color: 'matrix-green', icon: Calculator },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Revolutionary Background */}
      <div className="absolute inset-0 neural-network opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-matrix"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6 animate-smooth-glow">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Core Expertise</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-gentle-float">
            {translations.skills.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {translations.skills.subtitle}
          </p>
        </div>

        {/* Expertise Level Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {expertiseData.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card
                key={skill.name}
                className="bg-card/30 backdrop-blur-xl border-border/30 hover:border-primary/50 transition-all duration-500 group relative overflow-hidden animate-float"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Holographic Background Effect */}
                <div className="absolute inset-0 bg-gradient-hologram opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                <CardContent className="p-6 relative z-10">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 animate-smooth-glow">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {skill.name}
                      </h3>
                      <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                        {skill.level}%
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-space-gray/50"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Revolutionary Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {translations.skills.categories.map((category: any, index: number) => {
            const IconComponent = skillIcons[index % skillIcons.length];
            return (
              <Card
                key={index}
                className="bg-card/20 backdrop-blur-xl border-border/30 hover:border-primary/50 hover:shadow-tech transition-all duration-700 group relative overflow-hidden animate-float"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Animated Background Particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-primary rounded-full animate-particle"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.2}s`,
                      }}
                    />
                  ))}
                </div>

                <CardHeader className="pb-4 relative z-10">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-gradient-tech rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 animate-smooth-glow">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg text-center text-foreground group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0 relative z-10">
                  <div className="space-y-3">
                {category.skills.map((skill: string, skillIndex: number) => (
                  <div
                    key={skillIndex}
                    className="flex items-center space-x-3 p-3 rounded-xl bg-space-gray/30 hover:bg-gradient-tech border border-border/20 hover:border-primary/30 transition-all duration-300 group/skill hover:shadow-tech"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse-slow group-hover/skill:scale-125 transition-transform"></div>
                    <span className="text-sm text-foreground/90 group-hover/skill:text-foreground transition-colors font-medium">
                      {skill}
                    </span>
                    <Badge 
                      variant="outline" 
                      className="ml-auto text-xs border-primary/30 text-primary/80 opacity-0 group-hover/skill:opacity-100 transition-opacity"
                    >
                      Expert
                    </Badge>
                  </div>
                ))}
                  </div>
                </CardContent>

                {/* Holographic Corner Effect */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-primary opacity-10 group-hover:opacity-30 transition-opacity duration-500" 
                     style={{clipPath: 'polygon(100% 0%, 0% 100%, 100% 100%)'}}></div>
              </Card>
            );
          })}
        </div>

        {/* Achievement Badges */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap gap-4 justify-center">
            {[
              { icon: Rocket, text: 'Innovation Leader', delay: '0s' },
              { icon: Globe, text: 'Global Projects', delay: '0.2s' },
              { icon: Cpu, text: 'Tech Pioneer', delay: '0.4s' },
              { icon: Brain, text: 'AI Specialist', delay: '0.6s' },
            ].map(({ icon: Icon, text, delay }) => (
              <div
                key={text}
                className="flex items-center space-x-2 bg-gradient-neural border border-primary/20 rounded-full px-6 py-3 animate-gentle-float hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: delay }}
              >
                <Icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};