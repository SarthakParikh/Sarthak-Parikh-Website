
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen flex items-center" ref={containerRef}>
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')] bg-cover bg-center opacity-5"
        style={{ 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-sm md:text-base font-medium text-primary mb-4 uppercase tracking-wide animate-on-scroll opacity-0">
              Hello, I'm Sarthak, a Creative Developer
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 animate-on-scroll opacity-0">
              Crafting Digital <span className="text-gradient">Experiences</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-on-scroll opacity-0">
              I build modern, responsive websites and applications with a focus on clean design, intuitive user experience, and exceptional performance.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 animate-on-scroll opacity-0">
              <Button asChild size="lg" className="btn-primary">
                <Link to="/projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
          
          <div className="mt-20 flex justify-center animate-on-scroll opacity-0">
            <div className="glass-panel p-6 rounded-xl max-w-3xl">
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <p className="text-3xl md:text-4xl font-semibold text-primary">3+</p>
                  <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-semibold text-primary">15+</p>
                  <p className="text-sm text-muted-foreground mt-1">Projects Completed</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-semibold text-primary">10+</p>
                  <p className="text-sm text-muted-foreground mt-1">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
