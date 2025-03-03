
import React, { useEffect } from 'react';
import Layout from '@/layouts/Layout';
import { Contact } from '@/components/Contact';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="pt-28 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wide">Get In Touch</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Contact Me
            </h1>
            <p className="text-muted-foreground">
              Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
            </p>
          </div>
        </div>
      </div>

      <Contact />
    </Layout>
  );
};

export default ContactPage;
