import { CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface AboutSectionProps {
  translations: any;
}

export const AboutSection = ({ translations }: AboutSectionProps) => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                {translations.about.title}
              </h2>
              <h3 className="text-xl text-secondary mb-6">
                {translations.about.subtitle}
              </h3>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {translations.about.description}
            </p>

            <div className="space-y-3">
              {translations.about.highlights.map((highlight: string, index: number) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <Card className="bg-gradient-tech border-border/50 p-8 relative overflow-hidden group hover:shadow-tech transition-all duration-500">
              <CardContent className="p-0">
                <div className="space-y-6">
                  {/* Animated Grid */}
                  <div className="grid grid-cols-3 gap-4">
                    {Array.from({ length: 9 }).map((_, index) => (
                      <div
                        key={index}
                        className="h-16 bg-space-gray border border-border/30 rounded-lg flex items-center justify-center animate-neural-pulse"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="w-8 h-8 bg-primary/20 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Data Visualization */}
                  <div className="h-32 bg-space-gray border border-border/30 rounded-lg p-4 relative overflow-hidden">
                    <div className="flex items-end justify-between h-full">
                      {Array.from({ length: 7 }).map((_, index) => (
                        <div
                          key={index}
                          className="bg-gradient-primary rounded-t"
                          style={{
                            width: '12px',
                            height: `${Math.random() * 80 + 20}%`,
                            animationDelay: `${index * 0.1}s`
                          }}
                        ></div>
                      ))}
                    </div>
                    <div className="absolute inset-0 bg-gradient-neural opacity-30 animate-data-stream"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};