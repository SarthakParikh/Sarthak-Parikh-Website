
import React, { useEffect } from 'react';
import Layout from '@/layouts/Layout';
import { About } from '@/components/About';
import { CheckCircle, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Web Development",
      description: "Creating responsive, user-friendly websites using modern technologies.",
      icon: CheckCircle
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive interfaces with a focus on user experience.",
      icon: CheckCircle
    },
    {
      title: "Mobile Development",
      description: "Building cross-platform mobile applications that perform flawlessly.",
      icon: CheckCircle
    },
    {
      title: "API Integration",
      description: "Connecting your application with third-party services and APIs.",
      icon: CheckCircle
    }
  ];

  return (
    <Layout>
      <div className="pt-28 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wide">About Me</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              My Journey & Expertise
            </h1>
            <p className="text-muted-foreground">
              Learn more about my background, skills, and the services I offer to help bring your digital ideas to life.
            </p>
          </div>
        </div>
      </div>

      <About />
      
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wide">My Services</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              What I Offer
            </h2>
            <p className="text-muted-foreground">
              I provide a range of services to help businesses and individuals establish a strong online presence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="glass-card rounded-xl p-8 hover-card">
                <div className="bg-primary/10 p-3 rounded-full inline-flex mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
             <a href='https://www.google.com/' target='_blank'>Download Resume </a> 
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
