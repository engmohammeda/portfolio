import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  className?: string;
}

export const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  className = ""
}: ProjectCardProps) => {
  return (
    <Card className={`group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-tech transition-all duration-500 ${className}`}>
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-neural opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="flex space-x-4">
            {githubUrl && (
              <Button
                size="sm"
                variant="outline"
                className="border-primary/50 bg-background/80 backdrop-blur-sm hover:bg-primary/20"
                asChild
              >
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            )}
            {liveUrl && (
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 shadow-glow"
                asChild
              >
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs bg-space-gray border border-border/30 rounded-full text-foreground/80"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};