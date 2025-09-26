import { Download, MapPin, Phone, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import profileImage from '@/assets/mohammed-portrait.jpg';
import surveyorIllustration from '@/assets/surveyor-illustration.png';

interface HeroSectionProps {
  translations: any;
}

export const HeroSection = ({ translations }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="xl:col-span-7 text-center lg:text-left space-y-6 lg:space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">
                {translations.hero.title}
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl text-survey-orange font-medium">
                {translations.hero.subtitle}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                {translations.hero.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-professional group"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Mohammed-Al-Bukhaiti-CV.pdf';
                  link.download = 'Mohammed-Al-Bukhaiti-CV.pdf';
                  link.click();
                }}
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                {translations.hero.downloadCV}
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary/20 hover:bg-primary/10 hover:border-primary/40"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-5 w-5" />
                {translations.hero.contactMe}
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <a
                href="https://github.com/mohammed-bukhaiti"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/50 border border-border/50 hover:border-primary/50 hover:shadow-professional transition-all duration-300 group"
              >
                <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/mohammed-bukhaiti"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/50 border border-border/50 hover:border-primary/50 hover:shadow-professional transition-all duration-300 group"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://twitter.com/mohammed_bukhaiti"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/50 border border-border/50 hover:border-primary/50 hover:shadow-professional transition-all duration-300 group"
              >
                <Twitter className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>

            {/* Location & Contact Info */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start text-sm">
              <Badge variant="secondary" className="bg-secondary/10 text-secondary-foreground border-secondary/20">
                <MapPin className="h-3 w-3 mr-1" />
                صنعاء، اليمن
              </Badge>
              <Badge variant="secondary" className="bg-secondary/10 text-secondary-foreground border-secondary/20">
                <Phone className="h-3 w-3 mr-1" />
                +967 772791169
              </Badge>
              <Badge variant="secondary" className="bg-secondary/10 text-secondary-foreground border-secondary/20">
                <Mail className="h-3 w-3 mr-1" />
                mohalbukhaiti@gmail.com
              </Badge>
            </div>
          </div>

          {/* Visual Section */}
          <div className="xl:col-span-5 flex flex-col items-center space-y-6">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-professional animate-float">
                <img
                  src={profileImage}
                  alt="Mohammed Al-Bukhaiti"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-full flex items-center justify-center animate-pulse-glow">
                <span className="text-primary-foreground font-bold text-xs sm:text-sm">مساح</span>
              </div>
            </div>

            {/* Surveyor Illustration Card */}
            <Card className="bg-card/30 backdrop-blur-sm border-border/50 hover:shadow-professional transition-all duration-500 max-w-sm">
              <CardContent className="p-4">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <img 
                    src={surveyorIllustration} 
                    alt="Surveyor Illustration" 
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="font-semibold text-foreground text-sm">مهندس مساحة محترف</h3>
                    <p className="text-xs text-muted-foreground">دقة في القياس وإتقان في التصميم</p>
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
