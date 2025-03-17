
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Modern E-commerce Platform",
      description: "A responsive e-commerce platform built with React, Redux, and Stripe integration.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      tags: ["React", "Redux", "Stripe"],
      github: "#",
      demo: "https://main.d1rjep4aguo1fh.amplifyapp.com/"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A clean, modern portfolio website with smooth animations and responsive design.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      tags: ["React", "Tailwind", "Framer Motion"],
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A productivity app with drag-and-drop functionality and user authentication.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["Next.js", "Firebase", "TypeScript"],
      github: "#",
      demo: "https://master.d2sbnr4t100cpp.amplifyapp.com/"
    },
    {
      id: 4, 
      title: "Tic Tac Toe Game application",
      description: "A clasic Tic Tac Toe game which you can play with your friends",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["React.js", "JavaScript"],
      github: "#",
      demo: "https://main.dm28nto2w86b3.amplifyapp.com/"
    },
    {
      id: 5,
      title: "DFS / BFS Algo  ",
      description: "A DFS / BFS Visualizer ",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["React.js", "JavaScript"],
      github: "#",
      demo: "https://master.d18u6tgq5dr77q.amplifyapp.com/"
    },

  ];

  const filters = ['All', 'React', 'Next.js', 'Tailwind', 'TypeScript',"JavaScript"];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wide">My Projects</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Featured Work
          </h2>
          <p className="text-muted-foreground">
            Explore some of my recent projects and discover the perfect blend of design and functionality that I bring to every project.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"} 
              className="rounded-full text-sm"
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="glass-card rounded-xl overflow-hidden hover-card"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="text-xs font-medium py-1 px-2 bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex items-center gap-3">
                  {project.github && (
                    <Button variant="outline" size="sm" className="gap-1" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  
                  {project.demo && (
                    <Button size="sm" className="gap-1" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
