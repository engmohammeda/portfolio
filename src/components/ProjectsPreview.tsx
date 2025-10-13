import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, FolderKanban } from 'lucide-react';

interface ProjectsPreviewProps {
  translations: any;
}

export const ProjectsPreview = ({ translations }: ProjectsPreviewProps) => {
  const navigate = useNavigate();

  return (
    <div className="py-20 w-full bg-gradient-to-br from-background to-background/95">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          {/* Icon */}
          <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-gradient-primary/10 flex items-center justify-center backdrop-blur-sm border border-primary/20">
            <FolderKanban className="w-10 h-10 text-primary" />
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            {translations.projects.title}
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            {translations.projects.subtitle}
          </p>

          {/* CTA Button */}
          <Button
            onClick={() => navigate('/projects')}
            size="lg"
            className="group hover:shadow-glow transition-all duration-300"
          >
            {translations.projectsPage?.viewAllProjects || (translations.nav?.projects === 'المشاريع' ? 'عرض جميع المشاريع' : 'View All Projects')}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Description */}
          <p className="mt-6 text-sm text-muted-foreground">
            {translations.nav?.projects === 'المشاريع' 
              ? 'اكتشف مجموعة من المشاريع في AutoCAD و Civil 3D'
              : 'Discover a collection of projects in AutoCAD & Civil 3D'}
          </p>
        </div>
      </div>
    </div>
  );
};