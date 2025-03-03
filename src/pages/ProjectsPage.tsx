
import React, { useEffect } from 'react';
import Layout from '@/layouts/Layout';
import { Projects } from '@/components/Projects';

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="pt-28 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wide">Portfolio</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              My Recent Work
            </h1>
            <p className="text-muted-foreground">
              Browse through my latest projects and discover the perfect blend of design and functionality that I bring to every project.
            </p>
          </div>
        </div>
      </div>

      <Projects />
    </Layout>
  );
};

export default ProjectsPage;
