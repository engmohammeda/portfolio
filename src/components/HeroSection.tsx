import { Download, MapPin, Phone, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import profileImage from '@/assets/mohammed-portrait.jpg';
import surveyorIllustration from '@/assets/surveyor-illustration.png';

interface HeroSectionProps {
  translations: any;
}

export const HeroSection = ({ translations }: HeroSectionProps) => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-gradient-hero pt-20">
      <div className="w-full px-4 sm:px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="xl:col-span-7 text-center lg:text-left space-y-6 lg:space-y-8 animate-fade-in z-10">
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

            {/* Social Links and Contact Info */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start items-center pt-4 text-sm">
              {/* Contact Links */}
              <a
                href={`tel:${translations.contact.info.phone}`}
                className="p-3 rounded-full bg-card/50 border border-border/50 hover:border-primary/50 hover:shadow-professional transition-all duration-300 group"
                title="Phone"
              >
                <Phone className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href={`mailto:${translations.contact.info.email}`}
                className="p-3 rounded-full bg-card/50 border border-border/50 hover:border-primary/50 hover:shadow-professional transition-all duration-300 group"
                title="Email"
              >
                <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href={`https://wa.me/${translations.contact.info.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/50 border border-border/50 hover:border-primary/50 hover:shadow-professional transition-all duration-300 group"
                title="WhatsApp"
              >
                <svg className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.891 3.488"/>
                </svg>
              </a>
              <a
                href="https://maps.google.com/?q=Sana'a,Yemen"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/50 border border-border/50 hover:border-primary/50 hover:shadow-professional transition-all duration-300 group"
                title="Location"
              >
                <MapPin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              
              {/* Divider */}
              <div className="w-px h-8 bg-border/50 mx-2"></div>
              
              {/* Social Links */}
              <a
                href="https://github.com/engmohammeda"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/50 border border-border/50 hover:border-primary/50 hover:shadow-professional transition-all duration-300 group"
                title="GitHub"
              >
                <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/mohammed-bukhaiti"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/50 border border-border/50 hover:border-primary/50 hover:shadow-professional transition-all duration-300 group"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://twitter.com/engalbukhaiti"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/50 border border-border/50 hover:border-primary/50 hover:shadow-professional transition-all duration-300 group"
                title="Twitter"
              >
                <Twitter className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Visual Section */}
          <div className="xl:col-span-5 flex flex-col items-center space-y-6">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-professional">
                <img
                  src={profileImage}
                  alt="Mohammed Al-Bukhaiti"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-full flex items-center justify-center">
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