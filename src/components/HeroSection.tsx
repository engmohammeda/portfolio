import { Download, MapPin, Phone, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import profileImage from '@/assets/mohammed-portrait.jpg';
import surveyorIllustration from '@/assets/surveyor-illustration.png';

interface HeroSectionProps {
  translations: any;
}

export const HeroSection = ({ translations }: HeroSectionProps) => {
  return (
    <section id="home" className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-gradient-hero pt-20">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-particle blur-sm"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="w-full px-4 sm:px-6 py-12 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="xl:col-span-7 text-center lg:text-left space-y-6 lg:space-y-8 animate-reveal z-10">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold font-display bg-gradient-primary bg-clip-text text-transparent leading-tight animate-gradient-shift" style={{ backgroundSize: '200% 200%' }}>
                {translations.hero.title}
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl text-secondary font-semibold animate-slide-up" style={{ animationDelay: '0.2s' }}>
                {translations.hero.subtitle}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
                {translations.hero.description}
              </p>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    size="lg" 
                    className="bg-gradient-primary hover:shadow-glow text-primary-foreground font-semibold group relative overflow-hidden"
                  >
                    <span className="absolute inset-0 shimmer"></span>
                    <Download className="mr-2 h-5 w-5 group-hover:animate-bounce relative z-10" />
                    <span className="relative z-10">{translations.hero.downloadCV}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="glass-card border-primary/30 min-w-[200px]" align="center">
                  <DropdownMenuItem 
                    className="cursor-pointer hover:bg-primary/10 focus:bg-primary/10 text-foreground font-medium"
                    onClick={() => {
                      window.open('https://www.mediafire.com/file/4q7na66sd21xz2y/CV_MOHAMMED_AL-BUKHAITI_AR.pdf/file?dkey=s0ks7b170wk&r=6', '_blank');
                    }}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    النسخة العربية
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="cursor-pointer hover:bg-primary/10 focus:bg-primary/10 text-foreground font-medium"
                    onClick={() => {
                      window.open('https://www.mediafire.com/file/s2g9wtnhizzlhbc/CV_MOHAMMED_AL-BUKHAITI_EN_.pdf/file?dkey=emzwgx1v6tj&r=1818', '_blank');
                    }}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    English Version
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button 
                size="lg" 
                variant="outline"
                className="glass-card border-primary/30 hover:border-primary/60 hover-glow font-semibold group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
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
            {/* Enhanced Profile Image with Glow */}
            <div className="relative animate-float">
              {/* Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-2xl animate-pulse-glow"></div>
              
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-professional hover:border-primary/50 transition-all duration-500 hover-glow group">
                <img
                  src={profileImage}
                  alt="Mohammed Al-Bukhaiti"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow animate-pulse-glow hover:scale-110 transition-transform duration-300 cursor-pointer">
                <span className="text-primary-foreground font-bold text-xs sm:text-sm">مساح</span>
              </div>
            </div>

            {/* Enhanced Surveyor Illustration Card */}
            <Card className="glass-card border-primary/20 hover:border-primary/40 hover-glow transition-all duration-500 max-w-sm group">
              <CardContent className="p-5">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-lg rounded-lg"></div>
                    <img 
                      src={surveyorIllustration} 
                      alt="Surveyor Illustration" 
                      className="w-16 h-16 rounded-lg object-cover relative z-10 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="font-bold font-display text-foreground text-sm mb-1 group-hover:text-primary transition-colors duration-300">مهندس مساحة محترف</h3>
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