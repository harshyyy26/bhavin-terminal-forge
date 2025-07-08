
import React, { useEffect, useRef } from 'react';
import { Github, ExternalLink, Shield, Code, Zap, Building } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "Coal Mine Safety & Productivity Management",
      description: "Comprehensive enterprise software for coal mining operations, featuring safety monitoring, productivity tracking, and real-time analytics dashboard.",
      tech: ["Java", "Spring Boot", "MySQL", "REST APIs"],
      icon: <Shield className="h-6 w-6" />,
      color: "primary",
      featured: true
    },
    {
      title: "Passure - Password Manager",
      description: "Secure Java-based password management application with encryption, secure storage, and intuitive user interface.",
      tech: ["Java", "Encryption", "Swing", "Security"],
      icon: <Code className="h-6 w-6" />,
      color: "secondary"
    },
    {
      title: "WattTrack - Electricity Tracker",
      description: "Java Swing application for monitoring and tracking electricity consumption with usage analytics and billing calculations.",
      tech: ["Java Swing", "Analytics", "GUI"],
      icon: <Zap className="h-6 w-6" />,
      color: "primary"
    },
    {
      title: "Rukmini Enterprises Website",
      description: "Professional business website with modern design, responsive layout, and comprehensive business information presentation.",
      tech: ["React", "JavaScript", "CSS", "Responsive"],
      icon: <Building className="h-6 w-6" />,
      color: "secondary"
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
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">03.</span> Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my development journey, from enterprise software to personal utilities
          </p>
        </div>

        <div ref={projectsRef} className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`bg-card rounded-xl p-8 border border-border card-hover ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`text-${project.color}`}>
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="skill-badge text-xs"
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
                  className="flex items-center space-x-2 bg-primary/10 border border-primary/30 rounded-lg px-4 py-2 text-sm font-medium hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
                >
                  <Github className="h-4 w-4" />
                  <span>View Code</span>
                </a>
                <button className="flex items-center space-x-2 bg-secondary/10 border border-secondary/30 rounded-lg px-4 py-2 text-sm font-medium hover:bg-secondary/20 hover:border-secondary/50 transition-all duration-300">
                  <ExternalLink className="h-4 w-4" />
                  <span>Live Demo</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Section */}
        <div className="mt-16 text-center">
          <div className="bg-card rounded-xl p-8 border border-border">
            <h3 className="text-2xl font-semibold mb-4 gradient-text">
              More Projects on GitHub
            </h3>
            <p className="text-muted-foreground mb-6">
              Explore my complete portfolio of projects and contributions
            </p>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
