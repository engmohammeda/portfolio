import { ProjectCard } from './ProjectCard';
import roadDesignImage from '@/assets/road-design-project.jpg';
import smartCityImage from '@/assets/smart-city-blueprint.jpg';
import urbanMappingImage from '@/assets/urban-mapping-project.jpg';

interface ProjectsSectionProps {
  translations: any;
}

export const ProjectsSection = ({ translations }: ProjectsSectionProps) => {
  const projects = [
    {
      title: translations.projects.items[0].title,
      description: translations.projects.items[0].description,
      technologies: translations.projects.items[0].technologies,
      image: roadDesignImage,
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: translations.projects.items[1].title,
      description: translations.projects.items[1].description,
      technologies: translations.projects.items[1].technologies,
      image: smartCityImage,
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: translations.projects.items[2].title,
      description: translations.projects.items[2].description,
      technologies: translations.projects.items[2].technologies,
      image: urbanMappingImage,
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-space">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            {translations.projects.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {translations.projects.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              className="animate-float"
            />
          ))}
        </div>
      </div>
    </section>
  );
};