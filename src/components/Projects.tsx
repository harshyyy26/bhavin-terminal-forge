
import React, { useEffect, useRef } from 'react';
import { Github, ExternalLink, Shield, Code, Zap, Building, Lock, BarChart3, Terminal, Folder } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "Coal Mine Safety & Productivity Management System",
      description: "Enterprise software solution for coal mining operations with real-time safety monitoring, productivity tracking, and advanced analytics dashboard.",
      tech: ["Java", "Spring Boot", "MySQL", "REST APIs", "JDBC", "Enterprise Architecture"],
      icon: <Shield className="h-6 w-6" />,
      color: "primary",
      featured: true,
      category: "Enterprise Software",
      status: "Production Ready"
    },
    {
      title: "Passure - Secure Password Manager",
      description: "Advanced Java-based password management application with military-grade AES encryption and secure local storage.",
      tech: ["Java", "AES Encryption", "Java Swing", "File I/O", "Security Protocols"],
      icon: <Lock className="h-6 w-6" />,
      color: "secondary",
      category: "Security Application",
      status: "Stable Release"
    },
    {
      title: "WattTrack - Smart Electricity Monitor",
      description: "Intelligent electricity consumption tracking with real-time monitoring, bill calculation, and energy-saving recommendations.",
      tech: ["Java Swing", "Data Analytics", "Chart Libraries", "GUI Design", "File Management"],
      icon: <Zap className="h-6 w-6" />,
      color: "primary",
      category: "Utility Application",
      status: "Active Development"
    },
    {
      title: "Rukmini Enterprises - Business Website",
      description: "Professional responsive business website with modern design, service portfolios, and contact management.",
      tech: ["React.js", "JavaScript", "CSS3", "Responsive Design", "Modern Web APIs"],
      icon: <Building className="h-6 w-6" />,
      color: "secondary",
      category: "Web Development",
      status: "Live & Maintained"
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const projectsGrid = projectsRef.current;

    if (section && projectsGrid) {
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
              <span className="text-secondary">></span>
              <span className="text-primary">find ./projects -type f -name "*.md" | head -4</span>
            </div>
            <p className="text-muted-foreground">
              Enterprise-level software solutions and innovative personal utilities
            </p>
          </div>
        </div>

        <div ref={projectsRef} className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-card border border-border rounded-lg card-hover cyber-glow overflow-hidden"
            >
              <div className="p-8">
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  {/* Project Info */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`text-${project.color} bg-${project.color}/10 p-3 rounded-lg border border-${project.color}/20`}>
                            {project.icon}
                          </div>
                          <div>
                            <div className="flex items-center space-x-3">
                              <span className="text-xs text-muted-foreground font-mono bg-muted px-2 py-1 rounded">
                                {project.category}
                              </span>
                              <span className={`text-xs font-mono px-2 py-1 rounded ${
                                project.status.includes('Production') || project.status.includes('Live') 
                                  ? 'bg-primary/20 text-primary' 
                                  : 'bg-secondary/20 text-secondary'
                              }`}>
                                {project.status}
                              </span>
                            </div>
                            <h3 className="text-2xl font-bold terminal-text mt-2">{project.title}</h3>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                        {project.description}
                      </p>

                      {project.featured && (
                        <div className="code-block mb-6">
                          <div className="flex items-center space-x-2 mb-3">
                            <span className="text-secondary">></span>
                            <span className="text-primary">cat features.txt</span>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {index === 0 && "Comprehensive enterprise application with real-time safety alerts, equipment tracking, worker management, production analytics, and compliance reporting for coal mining operations."}
                            {index === 1 && "Military-grade security solution with AES encryption, secure password generation algorithms, and clean Java Swing interface for credential management."}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="skill-badge text-xs terminal-text"
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
                        className="flex items-center space-x-2 bg-primary/10 border border-primary/30 rounded-lg px-6 py-3 text-sm font-medium hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 cyber-glow"
                      >
                        <Github className="h-4 w-4" />
                        <span>source code</span>
                      </a>
                      <button className="flex items-center space-x-2 bg-secondary/10 border border-secondary/30 rounded-lg px-6 py-3 text-sm font-medium hover:bg-secondary/20 hover:border-secondary/50 transition-all duration-300">
                        <ExternalLink className="h-4 w-4" />
                        <span>demo</span>
                      </button>
                    </div>
                  </div>

                  {/* Project Stats */}
                  <div className="space-y-4">
                    <div className="code-block">
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="text-secondary">></span>
                        <span className="text-primary">./project_info.sh</span>
                      </div>
                      <div className="space-y-3 text-sm">
                        {index === 0 && (
                          <>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">scale:</span>
                              <span className="terminal-text">enterprise</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">industry:</span>
                              <span className="terminal-text">mining</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">users:</span>
                              <span className="terminal-text">100+</span>
                            </div>
                          </>
                        )}
                        {index === 1 && (
                          <>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">security:</span>
                              <span className="terminal-text">aes-256</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">platform:</span>
                              <span className="terminal-text">desktop</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">type:</span>
                              <span className="terminal-text">security</span>
                            </div>
                          </>
                        )}
                        {index === 2 && (
                          <>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">domain:</span>
                              <span className="terminal-text">energy</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">interface:</span>
                              <span className="terminal-text">swing</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">analytics:</span>
                              <span className="terminal-text">real-time</span>
                            </div>
                          </>
                        )}
                        {index === 3 && (
                          <>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">type:</span>
                              <span className="terminal-text">business</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">framework:</span>
                              <span className="terminal-text">react</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">design:</span>
                              <span className="terminal-text">responsive</span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Section */}
        <div className="mt-16 text-center">
          <div className="code-block max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <BarChart3 className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-semibold terminal-text">
                explore complete portfolio
              </h3>
            </div>
            <div className="flex items-center space-x-2 mb-4 justify-center">
              <span className="text-secondary">></span>
              <span className="text-primary">git remote -v</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Visit my GitHub profile for additional projects, open source contributions, 
              and ongoing development work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              <div className="inline-flex items-center space-x-3 bg-secondary/10 border border-secondary/30 rounded-lg px-8 py-4 terminal-text">
                <Code className="h-6 w-6 text-secondary" />
                <span className="font-medium">20+ repositories</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
