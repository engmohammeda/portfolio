import { CheckCircle, Award, Target, Users, TrendingUp, Lightbulb, Building2, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface AboutSectionProps {
  translations: any;
}

export const AboutSection = ({ translations }: AboutSectionProps) => {
  const achievements = [
    { icon: Building2, number: '2+', text: 'مشروع هندسي', color: 'primary' },
    { icon: Code, number: '4+', text: 'تطبيق تقني', color: 'secondary' },
    { icon: Users, number: '5+', text: 'مشروع مكتمل', color: 'hologram-blue' },
    { icon: Award, number: '1+', text: 'جائزة تخرج', color: 'matrix-green' },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 neural-network opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/20 rounded-full px-6 py-2 mb-6 animate-glow-pulse">
            <Target className="w-4 h-4 text-secondary" />
            <span className="text-sm text-secondary font-medium">About Mohammed</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Text Content */}
          <div className="space-y-8 animate-float">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                {translations.about.title}
              </h2>
              <h3 className="text-2xl text-secondary mb-8 font-medium">
                {translations.about.subtitle}
              </h3>
            </div>

            <div className="prose prose-lg text-muted-foreground leading-relaxed">
              <p className="text-lg mb-6">
                {translations.about.description}
              </p>
              
              {/* Professional Values */}
              <div className="grid grid-cols-2 gap-4 my-8">
                {[
                  { icon: TrendingUp, text: 'Innovation' },
                  { icon: Target, text: 'Precision' },
                  { icon: Lightbulb, text: 'Creativity' },
                  { icon: Users, text: 'Collaboration' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center space-x-3 p-3 bg-gradient-tech rounded-xl border border-border/30 hover:border-primary/50 transition-all duration-300 group">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Highlights */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                <Award className="w-5 h-5 text-secondary mr-2" />
                Key Achievements
              </h4>
              <div className="grid gap-3">
                {translations.about.highlights.map((highlight: string, index: number) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-4 p-4 bg-card/30 backdrop-blur-sm border border-border/30 rounded-xl hover:border-primary/50 hover:bg-card/50 transition-all duration-500 group animate-float hover:scale-105 hover:-translate-y-2"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <CheckCircle className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground font-medium flex-1 group-hover:text-primary transition-colors duration-300">{highlight}</span>
                    <Badge variant="outline" className="opacity-0 group-hover:opacity-100 transition-opacity text-primary border-primary/30">
                      ✓
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Revolutionary Visual Section */}
          <div className="relative animate-float" style={{ animationDelay: '0.2s' }}>
            {/* Statistics Cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <Card
                    key={achievement.text}
                    className="bg-card/20 backdrop-blur-xl border-border/30 hover:border-primary/50 transition-all duration-500 group relative overflow-hidden animate-glow-pulse"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Holographic Background */}
                    <div className="absolute inset-0 bg-gradient-hologram opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                    
                    <CardContent className="p-6 text-center relative z-10">
                      <div className="w-12 h-12 mx-auto bg-gradient-primary rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-500">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-1">
                        {achievement.number}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {achievement.text}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Advanced Data Visualization */}
            <Card className="bg-gradient-tech border-border/30 p-8 relative overflow-hidden group hover:shadow-tech transition-all duration-700 backdrop-blur-xl">
              {/* Animated Particles Background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                {[...Array(15)].map((_, i) => (
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

              <CardContent className="p-0 relative z-10">
                <div className="space-y-6">
                  {/* Interactive Skill Bars */}
                  <div className="space-y-4">
                    {[
                      { skill: 'Civil Engineering', level: 95 },
                      { skill: 'Programming', level: 90 },
                      { skill: 'AI Development', level: 85 },
                      { skill: 'Project Management', level: 88 },
                    ].map((item, index) => (
                      <div key={item.skill} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-foreground">{item.skill}</span>
                          <span className="text-sm text-primary font-bold">{item.level}%</span>
                        </div>
                        <div className="h-2 bg-space-gray/50 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                              width: `${item.level}%`,
                              transitionDelay: `${index * 0.2}s`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* 3D Chart Visualization */}
                  <div className="h-40 bg-space-gray/30 border border-border/20 rounded-xl p-4 relative overflow-hidden">
                    <div className="flex items-end justify-between h-full">
                      {Array.from({ length: 8 }).map((_, index) => (
                        <div
                          key={index}
                          className="bg-gradient-primary rounded-t-lg relative group-hover:scale-110 transition-transform duration-500"
                          style={{
                            width: '16px',
                            height: `${20 + Math.sin(index) * 30 + 30}%`,
                            animationDelay: `${index * 0.1}s`,
                            transform: 'perspective(100px) rotateX(10deg)'
                          }}
                        >
                          <div className="absolute top-0 left-0 w-full h-2 bg-secondary rounded-t-lg"></div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Data Stream Effect */}
                    <div className="absolute inset-0 bg-gradient-neural opacity-20 animate-data-stream"></div>
                    
                    {/* Holographic Grid */}
                    <div className="absolute inset-0 neural-grid opacity-10"></div>
                  </div>
                </div>
              </CardContent>

              {/* Corner Glow Effect */}
              <div className="absolute -top-2 -right-2 w-20 h-20 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/40 transition-all duration-500"></div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};