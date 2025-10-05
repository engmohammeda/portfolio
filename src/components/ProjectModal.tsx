import { X, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    githubUrl?: string;
    liveUrl?: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-reveal">
      {/* Enhanced Backdrop with Blur */}
      <div 
        className="absolute inset-0 bg-background/90 backdrop-blur-xl"
        onClick={onClose}
      />
      
      {/* Enhanced Modal with Glassmorphism */}
      <Card className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto glass-card border-primary/20 shadow-professional animate-scale-in hover-glow">
        <CardContent className="p-0">
          {/* Header with Glass Effect */}
          <div className="sticky top-0 glass-effect border-b border-border/30 p-6 flex items-center justify-between z-10">
            <h2 className="text-2xl font-bold font-display bg-gradient-primary bg-clip-text text-transparent">{project.title}</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-10 w-10 p-0 hover:bg-primary/10 hover:scale-110 transition-all duration-300 rounded-full"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Enhanced Image with Overlay */}
          <div className="aspect-video overflow-hidden relative group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Description with Enhanced Styling */}
            <div className="p-6 bg-gradient-to-r from-card/50 to-transparent rounded-xl border border-border/20">
              <h3 className="text-xl font-bold font-display text-foreground mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-primary rounded-full"></div>
                Project Overview
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {project.description}
              </p>
            </div>

            {/* Technologies with Glass Cards */}
            <div>
              <h3 className="text-xl font-bold font-display text-foreground mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-surveyor rounded-full"></div>
                Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <Badge 
                    key={index}
                    variant="secondary"
                    className="glass-card text-primary border-primary/30 hover:border-primary/60 hover-glow px-4 py-2 text-sm font-medium transition-all duration-300"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Key Features with Enhanced Cards */}
            <div>
              <h3 className="text-xl font-bold font-display text-foreground mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-field rounded-full"></div>
                Key Features
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-3 p-4 glass-card rounded-xl hover-glow group">
                  <div className="w-3 h-3 bg-gradient-primary rounded-full mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-foreground/90 group-hover:text-primary transition-colors duration-300">Comprehensive surveying and design methodology</span>
                </li>
                <li className="flex items-start space-x-3 p-4 glass-card rounded-xl hover-glow group">
                  <div className="w-3 h-3 bg-gradient-primary rounded-full mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-foreground/90 group-hover:text-primary transition-colors duration-300">Advanced CAD software utilization for precision</span>
                </li>
                <li className="flex items-start space-x-3 p-4 glass-card rounded-xl hover-glow group">
                  <div className="w-3 h-3 bg-gradient-primary rounded-full mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-foreground/90 group-hover:text-primary transition-colors duration-300">Field data integration with technical drawings</span>
                </li>
                <li className="flex items-start space-x-3 p-4 glass-card rounded-xl hover-glow group">
                  <div className="w-3 h-3 bg-gradient-primary rounded-full mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-foreground/90 group-hover:text-primary transition-colors duration-300">Cost estimation and project planning</span>
                </li>
              </ul>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              {project.githubUrl && project.githubUrl !== "#" && (
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 glass-card border-primary/30 hover:border-primary/60 hover-glow group"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  View Documentation
                </Button>
              )}
              {project.liveUrl && project.liveUrl !== "#" && (
                <Button
                  size="lg"
                  className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                  onClick={() => window.open(project.liveUrl, '_blank')}
                >
                  <ExternalLink className="mr-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  View Project
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};