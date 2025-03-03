
import React from 'react';
import { CheckCircle } from 'lucide-react';

export function About() {
  const skills = [
    "React & Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "UI/UX Design",
    "API Integration",
    "Java","Spring Boot",
    "Docker","Express JS", "Hibernate", "MySQL", 
    "Oracle", "MongoDB", "Elasticsearch", "Git"," CI/CD pipelines", "Kubernetes", "AWS", "Azure"," REST APIs", "GraphQL" , 
    "WebSocket", "Kafka"
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg animate-slide-in">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent opacity-50 mix-blend-overlay"></div>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Developer working" 
                className="w-full h-auto object-cover aspect-[4/3] rounded-2xl"
              />
            </div>
            <div className="glass-panel absolute -bottom-6 -right-6 p-6 rounded-xl shadow-lg hidden md:block animate-slide-up">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Always Learning</p>
                  <p className="text-sm text-muted-foreground">Constantly improving skills</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="animate-slide-in animate-delay-200">
              <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wide">About Me</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Passionate Developer & Designer
              </h2>
              <p className="text-muted-foreground mb-6">
                I'm a full-stack developer with a passion for creating beautiful, functional, and user-centered digital experiences. With 3+ years of experience in the field, I am always looking for new and innovative ways to bring my clients' visions to life.
              </p>
              <p className="text-muted-foreground mb-8">
                I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.
              </p>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">My Skills & Expertise</h3>
                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
