import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { LanguageToggle } from './LanguageToggle';

interface NavigationProps {
  currentLang: 'en' | 'ar';
  onLanguageToggle: () => void;
  translations: any;
}

export const Navigation = ({ currentLang, onLanguageToggle, translations }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'projects', href: '#projects' },
    { key: 'skills', href: '#skills' },
    { key: 'contact', href: '#contact' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            MA
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 relative group"
              >
                {translations.nav[item.key]}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <LanguageToggle currentLang={currentLang} onToggle={onLanguageToggle} />
            
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {translations.nav[item.key]}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};