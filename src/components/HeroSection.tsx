import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  translations: any;
}

export const HeroSection = ({ translations }: HeroSectionProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-space">
        <div className="absolute inset-0 bg-gradient-tech opacity-30"></div>
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-pulse-glow"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-secondary rounded-full animate-pulse-glow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-32 w-3 h-3 bg-tech-blue rounded-full animate-pulse-glow" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-neural-purple rounded-full animate-pulse-glow" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-float">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {translations.hero.name}
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl text-foreground/80 mb-4 animate-float" style={{animationDelay: '0.2s'}}>
            {translations.hero.title}
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-float" style={{animationDelay: '0.4s'}}>
            {translations.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-float" style={{animationDelay: '0.6s'}}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-aqua-glow transition-all duration-300"
            >
              {translations.hero.cta.primary}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            >
              {translations.hero.cta.secondary}
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16 animate-float" style={{animationDelay: '0.8s'}}>
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Mail, href: '#contact', label: 'Email' }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-3 rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                aria-label={label}
              >
                <Icon className="h-5 w-5 text-foreground/70 group-hover:text-primary transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};