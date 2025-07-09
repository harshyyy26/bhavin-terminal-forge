
import React, { useEffect, useRef } from 'react';
import { Github, ExternalLink, Shield, Lock, Zap, Building, Terminal, Folder, Play, Eye } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  console.log('Projects component rendering');

  const projects = [
    {
      id: 1,
      title: "Coal Mine Safety & Productivity Management System",
      description: "A comprehensive full-stack platform for real-time coal mine incident tracking and performance monitoring. Features include safety alerts, equipment tracking, worker management, and detailed analytics dashboard.",
      shortDesc: "Enterprise safety management system for coal mining operations",
      tech: ["Java", "Spring Boot", "React", "Node.js", "MongoDB", "REST APIs"],
      icon: <Shield className="h-8 w-8" />,
      color: "primary",
      category: "Enterprise Software",
      features: [
        "Real-time incident tracking",
        "Safety alert system",
        "Equipment monitoring",
        "Performance analytics",
        "Worker management"
      ],
      github: "https://github.com/Bhavin-0",
      demo: "#",
      status: "Production Ready"
    },
    {
      id: 2,
      title: "Passure - Secure Password Manager",
      description: "A robust Java-based desktop application for password management with military-grade AES encryption, secure password generation algorithms, and clean Java Swing interface for credential management.",
      shortDesc: "Secure desktop password manager with AES encryption",
      tech: ["Java", "Java Swing", "AES Encryption", "JDBC", "SQL", "Security"],
      icon: <Lock className="h-8 w-8" />,
      color: "secondary",
      category: "Security Application",
      features: [
        "AES-256 encryption",
        "Password generation",
        "Local storage with JDBC",
        "Strength validation",
        "Secure authentication"
      ],
      github: "https://github.com/Bhavin-0",
      demo: "#",
      status: "Stable Release"
    },
    {
      id: 3,
      title: "WattTrack - Electricity Usage Tracker",
      description: "Java Swing application designed to visualize electricity consumption patterns with automatic billing system, usage analytics, and energy-saving recommendations.",
      shortDesc: "Smart electricity consumption tracking and billing system",
      tech: ["Java Swing", "JDBC", "MySQL", "Chart Libraries", "Data Analytics"],
      icon: <Zap className="h-8 w-8" />,
      color: "primary",
      category: "Utility Application",
      features: [
        "Usage visualization",
        "Automatic billing",
        "Energy analytics",
        "Cost optimization",
        "Historical tracking"
      ],
      github: "https://github.com/Bhavin-0",
      demo: "#",
      status: "Active Development"
    },
    {
      id: 4,
      title: "Rukmini Enterprises Website",
      description: "Modern, responsive business website for a welding electrode manufacturing company. Built with React and Firebase, featuring product listings, company information, and contact management system.",
      shortDesc: "Professional business website with product management",
      tech: ["React", "Firebase", "JavaScript", "CSS3", "Responsive Design"],
      icon: <Building className="h-8 w-8" />,
      color: "secondary",
      category: "Web Development",
      features: [
        "Product showcase",
        "Contact management",
        "Responsive design",
        "Firebase integration",
        "SEO optimized"
      ],
      github: "https://github.com/Bhavin-0",
      demo: "#",
      status: "Live & Maintained"
    }
  ];

  console.log('Projects array:', projects);

  useEffect(() => {
    console.log('Projects useEffect running');
    
    try {
      const section = sectionRef.current;
      const projectsGrid = projectsRef.current;

      console.log('Project refs:', { section, projectsGrid });

      if (section && projectsGrid) {
        console.log('Setting up project animations, children count:', projectsGrid.children.length);
        
        gsap.from(projectsGrid.children, {
          opacity: 0,
          y: 80,
          scale: 0.9,
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
        
        console.log('Project animations set up successfully');
      } else {
        console.log('Project refs not found');
      }
    } catch (error) {
      console.error('Error in Projects useEffect:', error);
    }
  }, []);

  console.log('About to render Projects JSX');

  return (
    <section ref={sectionRef} id="projects" className="section-padding terminal-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-6">
            <Folder className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold terminal-text">
              <span className="text-secondary">03.</span> git log --projects
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <div className="code-block max-w-3xl mx-auto">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-secondary">{'>'}</span>
              <span className="text-primary">find ./projects -type f -name "*.md" | head -4</span>
            </div>
            <p className="text-muted-foreground">
              Showcasing enterprise-level software solutions and innovative applications
            </p>
          </div>
        </div>

        <div ref={projectsRef} className="space-y-12">
          {projects.map((project, index) => {
            console.log('Rendering project:', project.title);
            return (
              <div
                key={project.id}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:border-primary/50"
                style={{ minHeight: '200px' }} // Ensure cards have minimum height
              >
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  {/* Project Header */}
                  <div className="lg:col-span-12 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className={`text-${project.color} bg-${project.color}/10 p-3 rounded-lg border border-${project.color}/20`}>
                          {project.icon}
                        </div>
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <span className="text-xs text-muted-foreground font-mono bg-muted px-2 py-1 rounded">
                              {project.category}
                            </span>
                            <span className={`text-xs font-mono px-2 py-1 rounded ${
                              project.status.includes('Production') || project.status.includes('Live') 
                                ? 'bg-primary/20 text-primary border border-primary/30' 
                                : 'bg-secondary/20 text-secondary border border-secondary/30'
                            }`}>
                              {project.status}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold terminal-text group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="lg:col-span-8 space-y-6">
                    <div>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                        {project.description}
                      </p>
                      
                      <div className="code-block">
                        <div className="flex items-center space-x-2 mb-3">
                          <span className="text-secondary">{'>'}</span>
                          <span className="text-primary">cat features.txt</span>
                        </div>
                        <div className="space-y-2">
                          {project.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-3 text-sm text-muted-foreground">
                              <span className="text-primary">•</span>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="bg-muted/60 border border-primary/30 rounded-lg px-4 py-2 text-sm font-medium hover:border-primary/60 transition-all duration-300 hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20 hover:scale-105 terminal-text"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Actions */}
                  <div className="lg:col-span-4 space-y-4">
                    <div className="code-block">
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="text-secondary">{'>'}</span>
                        <span className="text-primary">./deploy.sh</span>
                      </div>
                      <div className="space-y-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 bg-primary/10 border border-primary/30 rounded-lg px-4 py-3 text-sm font-medium hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 cyber-glow w-full"
                        >
                          <Github className="h-4 w-4" />
                          <span>View Source</span>
                        </a>
                        <button className="flex items-center space-x-2 bg-secondary/10 border border-secondary/30 rounded-lg px-4 py-3 text-sm font-medium hover:bg-secondary/20 hover:border-secondary/50 transition-all duration-300 w-full">
                          <Play className="h-4 w-4" />
                          <span>Live Demo</span>
                        </button>
                      </div>
                    </div>

                    <div className="bg-muted/50 border border-border rounded-lg p-4">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Type:</span>
                          <span className="terminal-text">{project.category.toLowerCase()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Status:</span>
                          <span className="terminal-text">{project.status.toLowerCase()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Stack:</span>
                          <span className="terminal-text">{project.tech.length} technologies</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 text-center">
          <div className="code-block max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 mb-4 justify-center">
              <span className="text-secondary">{'>'}</span>
              <span className="text-primary">git remote -v</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Explore my complete portfolio on GitHub for more projects, contributions, and ongoing development work.
            </p>
            <a
              href="https://github.com/Bhavin-0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-primary/10 border border-primary rounded-lg px-8 py-4 hover:bg-primary/20 transition-all duration-300 card-hover cyber-glow terminal-text"
            >
              <Github className="h-6 w-6" />
              <span className="font-medium">github.com/Bhavin-0</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
