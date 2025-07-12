import { Globe, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LanguageToggleProps {
  currentLang: 'en' | 'ar';
  onToggle: () => void;
}

export const LanguageToggle = ({ currentLang, onToggle }: LanguageToggleProps) => {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onToggle}
      className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
    >
      <Languages className="h-4 w-4 mr-2" />
      {currentLang === 'en' ? 'العربية' : 'English'}
    </Button>
  );
};