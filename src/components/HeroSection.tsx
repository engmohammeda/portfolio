import { ChevronDown, Github, Linkedin, Mail, Download, Code, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import portraitImage from '@/assets/mohammed-portrait.jpg';

interface HeroSectionProps {
  translations: any;
}

export const HeroSection = ({ translations }: HeroSectionProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Revolutionary 3D Background */}
      <div className="absolute inset-0 neural-network">
        <div className="matrix-particles"></div>
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
        
        {/* Advanced Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full animate-particle ${
              i % 4 === 0 ? 'bg-primary' : 
              i % 4 === 1 ? 'bg-secondary' : 
              i % 4 === 2 ? 'bg-hologram-blue' : 'bg-matrix-green'
            }`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
        
        {/* Holographic Grid Lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-primary animate-pulse"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-primary animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-primary animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute left-3/4 top-0 w-px h-full bg-gradient-primary animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          
          {/* Left Column - Content */}
          <div className="lg:order-1 order-2 space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 animate-glow-pulse">
              <div className="w-2 h-2 bg-matrix-green rounded-full animate-pulse"></div>
              <span className="text-sm text-primary font-medium">متاح للعمل • Available for Projects</span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-float">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  {translations.hero.name}
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-secondary mb-6 animate-float" style={{animationDelay: '0.2s'}}>
                {translations.hero.title}
              </h2>
            </div>

            {/* Enhanced Description */}
            <div className="space-y-4 animate-float" style={{animationDelay: '0.3s'}}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {translations.hero.description}
              </p>
              
              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2">
                {['Civil Engineering', 'AI Development', 'Road Design', 'Programming'].map((skill, index) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 bg-gradient-tech rounded-full text-sm text-foreground/80 border border-border/30 animate-hologram"
                    style={{animationDelay: `${index * 0.2}s`}}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-float" style={{animationDelay: '0.5s'}}>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-aqua-glow transition-all duration-300 group"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Code className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                {translations.hero.cta.primary}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Mohammed-Al-Bukhaiti-CV.pdf';
                  link.download = 'Mohammed-Al-Bukhaiti-CV.pdf';
                  link.click();
                }}
              >
                <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                {translations.hero.cta.secondary}
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <Button 
                variant="outline" 
                size="icon" 
                className="hover:bg-primary/10 border-primary/20"
                onClick={() => window.open('https://github.com/yourusername', '_blank')}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="hover:bg-primary/10 border-primary/20"
                onClick={() => window.open('https://linkedin.com/in/yourusername', '_blank')}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="hover:bg-primary/10 border-primary/20"
                onClick={() => window.open('https://twitter.com/yourusername', '_blank')}
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="hover:bg-primary/10 border-primary/20"
                onClick={() => window.open('mailto:mohammedalbkhyty@gmail.com', '_blank')}
              >
                <Mail className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="hover:bg-primary/10 border-primary/20"
                onClick={() => window.open('tel:+967772791169', '_blank')}
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="hover:bg-primary/10 border-primary/20"
                onClick={() => window.open('https://wa.me/967772791169', '_blank')}
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.891 3.488"/>
                </svg>
              </Button>
            </div>
          </div>

          {/* Right Column - Professional Portrait */}
          <div className="lg:order-2 order-1 flex justify-center items-center">
            <div className="relative group">
              {/* Holographic Border Effect */}
              <div className="absolute -inset-1 bg-gradient-primary rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-glow-pulse"></div>
              
              {/* Portrait Container */}
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-2xl overflow-hidden border-2 border-primary/30 bg-gradient-hologram animate-float">
                  <img 
                    src={portraitImage} 
                    alt="Mohammed Albukaiti - Civil Engineer & AI Developer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Overlay Elements */}
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  
                  {/* Floating Tech Icons */}
                  <div className="absolute top-4 right-4 p-2 bg-primary/20 backdrop-blur-sm rounded-lg border border-primary/30 animate-pulse">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <div className="absolute bottom-4 left-4 p-2 bg-secondary/20 backdrop-blur-sm rounded-lg border border-secondary/30 animate-pulse" style={{animationDelay: '0.5s'}}>
                    <Code className="w-4 h-4 text-secondary" />
                  </div>
                </div>

                {/* Floating Data Points */}
                <div className="absolute -top-6 -right-6 bg-card/80 backdrop-blur-sm border border-primary/30 rounded-xl p-3 animate-float" style={{animationDelay: '1s'}}>
                  <div className="text-primary font-bold text-lg">2+</div>
                  <div className="text-xs text-muted-foreground">مشاريع مكتملة</div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-card/80 backdrop-blur-sm border border-secondary/30 rounded-xl p-3 animate-float" style={{animationDelay: '1.5s'}}>
                  <div className="text-secondary font-bold text-lg">حديث</div>
                  <div className="text-xs text-muted-foreground">التخرج</div>
                </div>
              </div>
            </div>
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