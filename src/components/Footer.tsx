
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com/SarthakParikh', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sarthakparikh/', label: 'LinkedIn' },
   
    { icon: Mail, href: 'mailto:p.sarthak.j@gmail.com', label: 'Email' }
  ];

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Projects', path: '/projects' },
    { title: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="text-2xl font-display font-semibold">
              Portfolio
            </Link>
            <p className="mt-2 text-primary-foreground/80 max-w-md">
              Creating beautiful, functional, and user-centered digital experiences.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <nav className="flex flex-wrap justify-center md:justify-end gap-6 mb-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  {link.title} 
                </Link>
              ))}
            </nav>
            
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-primary-foreground/10 p-2 rounded-full hover:bg-primary-foreground/20 transition-colors"
                  target='_blank'
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/80 text-sm">
              © {currentYear} Sarthak Parikh. All rights reserved.
            </p>
           
          </div>
        </div>
      </div>
    </footer>
  );
}
