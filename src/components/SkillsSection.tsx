import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SkillsSectionProps {
  translations: any;
}

export const SkillsSection = ({ translations }: SkillsSectionProps) => {
  return (
    <section id="skills" className="py-20 bg-gradient-space">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            {translations.skills.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {translations.skills.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {translations.skills.categories.map((category: any, index: number) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-tech transition-all duration-500 group animate-float"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-lg text-center text-foreground group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  {category.skills.map((skill: string, skillIndex: number) => (
                    <div
                      key={skillIndex}
                      className="flex items-center space-x-3 p-2 rounded-lg bg-space-gray/50 hover:bg-space-gray transition-colors duration-300"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow"></div>
                      <span className="text-sm text-foreground/90">{skill}</span>
                    </div>
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