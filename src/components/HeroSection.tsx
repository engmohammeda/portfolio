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
            <div className="flex space-x-4 animate-float" style={{animationDelay: '0.7s'}}>
              {[
                { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-matrix-green' },
                { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-hologram-blue' },
                { icon: Mail, href: '#contact', label: 'Email', color: 'hover:text-secondary' }
              ].map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  className={`p-3 rounded-xl border border-border/30 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group ${color}`}
                  aria-label={label}
                >
                  <Icon className="h-5 w-5 text-foreground/70 group-hover:scale-110 transition-all duration-300" />
                </a>
              ))}
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
                  <div className="text-primary font-bold text-lg">5+</div>
                  <div className="text-xs text-muted-foreground">سنوات خبرة</div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-card/80 backdrop-blur-sm border border-secondary/30 rounded-xl p-3 animate-float" style={{animationDelay: '1.5s'}}>
                  <div className="text-secondary font-bold text-lg">50+</div>
                  <div className="text-xs text-muted-foreground">مشروع منجز</div>
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