
import React, { useEffect, useRef } from 'react';
import { Github, ExternalLink, Shield, Code, Zap, Building, Lock, BarChart3 } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "Coal Mine Safety & Productivity Management System",
      description: "Comprehensive enterprise software solution designed for coal mining operations, featuring real-time safety monitoring, productivity tracking, and advanced analytics dashboard. Built with Java Spring Boot backend and includes modules for equipment monitoring, worker safety protocols, and operational efficiency metrics.",
      fullDescription: "A robust enterprise application that revolutionizes coal mine operations through digital transformation. Features include real-time safety alerts, equipment tracking, worker attendance management, production analytics, and compliance reporting.",
      tech: ["Java", "Spring Boot", "MySQL", "REST APIs", "JDBC", "Enterprise Architecture"],
      icon: <Shield className="h-6 w-6" />,
      color: "primary",
      featured: true,
      category: "Enterprise Software"
    },
    {
      title: "Passure - Secure Password Manager",
      description: "Advanced Java-based password management application with military-grade encryption, secure local storage, and intuitive user interface. Features master password protection, auto-generation of strong passwords, and secure data backup capabilities.",
      fullDescription: "A comprehensive security solution built in Java that helps users manage their digital credentials safely. Implements AES encryption, secure password generation algorithms, and provides a clean Java Swing interface.",
      tech: ["Java", "AES Encryption", "Java Swing", "File I/O", "Security Protocols"],
      icon: <Lock className="h-6 w-6" />,
      color: "secondary",
      category: "Security Application"
    },
    {
      title: "WattTrack - Smart Electricity Monitor",
      description: "Intelligent electricity consumption tracking application built with Java Swing. Features real-time usage monitoring, bill calculation, consumption analytics, and energy-saving recommendations with detailed reporting capabilities.",
      fullDescription: "A desktop utility that helps users monitor and optimize their electricity consumption. Includes usage pattern analysis, cost calculations, peak hour detection, and energy efficiency suggestions.",
      tech: ["Java Swing", "Data Analytics", "Chart Libraries", "GUI Design", "File Management"],
      icon: <Zap className="h-6 w-6" />,
      color: "primary",
      category: "Utility Application"
    },
    {
      title: "Rukmini Enterprises - Business Website",
      description: "Professional responsive business website featuring modern design principles, comprehensive company information, service portfolios, and contact management. Built with React.js and modern web technologies for optimal performance.",
      fullDescription: "A complete business web presence solution with responsive design, interactive components, service showcases, and integrated contact forms. Optimized for performance and SEO.",
      tech: ["React.js", "JavaScript", "CSS3", "Responsive Design", "Modern Web APIs"],
      icon: <Building className="h-6 w-6" />,
      color: "secondary",
      category: "Web Development"
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const projectsGrid = projectsRef.current;

    if (section && projectsGrid) {
      // Animate project cards with stagger
      gsap.from(projectsGrid.children, {
        opacity: 0,
        y: 80,
        scale: 0.8,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });
    }
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="section-padding bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">03.</span> Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            A comprehensive showcase of my development journey, from enterprise-level software solutions to innovative personal utilities
          </p>
        </div>

        <div ref={projectsRef} className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`bg-card rounded-xl p-8 border border-border card-hover ${
                project.featured ? 'lg:p-12' : ''
              }`}
            >
              <div className="grid lg:grid-cols-3 gap-8 items-start">
                {/* Project Info */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`text-${project.color} bg-${project.color}/10 p-3 rounded-lg`}>
                        {project.icon}
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground font-medium">{project.category}</span>
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed text-lg">
                      {project.description}
                    </p>

                    {project.featured && (
                      <div className="bg-muted/30 rounded-lg p-4 mb-4">
                        <h4 className="font-semibold mb-2 text-primary">Key Features & Impact:</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {project.fullDescription}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="skill-badge text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/Bhavin-0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-primary/10 border border-primary/30 rounded-lg px-6 py-3 text-sm font-medium hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
                    >
                      <Github className="h-4 w-4" />
                      <span>View Code</span>
                    </a>
                    <button className="flex items-center space-x-2 bg-secondary/10 border border-secondary/30 rounded-lg px-6 py-3 text-sm font-medium hover:bg-secondary/20 hover:border-secondary/50 transition-all duration-300">
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </button>
                  </div>
                </div>

                {/* Project Stats/Highlights */}
                <div className="space-y-4">
                  <div className="bg-muted/20 rounded-lg p-6">
                    <h4 className="font-semibold mb-4 gradient-text">Project Highlights</h4>
                    <div className="space-y-3">
                      {index === 0 && (
                        <>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Scale</span>
                            <span className="text-sm font-medium">Enterprise</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Industry</span>
                            <span className="text-sm font-medium">Mining</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Users</span>
                            <span className="text-sm font-medium">100+ Workers</span>
                          </div>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Security</span>
                            <span className="text-sm font-medium">AES Encryption</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Platform</span>
                            <span className="text-sm font-medium">Desktop</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Type</span>
                            <span className="text-sm font-medium">Security Tool</span>
                          </div>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Domain</span>
                            <span className="text-sm font-medium">Energy</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Interface</span>
                            <span className="text-sm font-medium">Java Swing</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Analytics</span>
                            <span className="text-sm font-medium">Real-time</span>
                          </div>
                        </>
                      )}
                      {index === 3 && (
                        <>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Type</span>
                            <span className="text-sm font-medium">Business Site</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Framework</span>
                            <span className="text-sm font-medium">React.js</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Design</span>
                            <span className="text-sm font-medium">Responsive</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Section */}
        <div className="mt-16 text-center">
          <div className="bg-card rounded-xl p-8 border border-border">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <BarChart3 className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-semibold gradient-text">
                Explore My Complete Portfolio
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Visit my GitHub profile to explore additional projects, contributions to open source, 
              code samples, and ongoing development work. See the full scope of my technical journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/Bhavin-0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-primary/10 border border-primary rounded-lg px-8 py-4 hover:bg-primary/20 transition-all duration-300 card-hover"
              >
                <Github className="h-6 w-6" />
                <span className="font-medium">Visit My GitHub</span>
                <ExternalLink className="h-4 w-4" />
              </a>
              <div className="inline-flex items-center space-x-3 bg-secondary/10 border border-secondary/30 rounded-lg px-8 py-4">
                <Code className="h-6 w-6 text-secondary" />
                <span className="font-medium">20+ Repositories</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
