
import React from 'react';
import { Github, ExternalLink, Code, Database, Shield, Zap, Building, Wrench } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Coal Mine Safety & Productivity Management",
      description: "Comprehensive enterprise software for coal mining operations, featuring safety monitoring, productivity tracking, and real-time analytics dashboard.",
      tech: ["Java", "Spring Boot", "MySQL", "REST APIs", "Dashboard"],
      icon: <Shield className="h-6 w-6" />,
      color: "green",
      features: [
        "Safety incident tracking and reporting",
        "Productivity metrics and analytics",
        "Real-time monitoring dashboard",
        "Multi-user role management"
      ]
    },
    {
      title: "Passure - Password Manager",
      description: "Secure Java-based password management application with encryption, secure storage, and intuitive user interface for managing credentials.",
      tech: ["Java", "Encryption", "Swing", "File I/O", "Security"],
      icon: <Code className="h-6 w-6" />,
      color: "cyan",
      features: [
        "AES encryption for password security",
        "Master password protection",
        "Password generation utility",
        "Secure local storage"
      ]
    },
    {
      title: "WattTrack - Electricity Tracker",
      description: "Java Swing application for monitoring and tracking electricity consumption with usage analytics and billing calculations.",
      tech: ["Java Swing", "File Management", "Analytics", "GUI"],
      icon: <Zap className="h-6 w-6" />,
      color: "green",
      features: [
        "Real-time consumption monitoring",
        "Monthly usage reports",
        "Cost calculation and forecasting",
        "Interactive charts and graphs"
      ]
    },
    {
      title: "Rukmini Enterprises Website",
      description: "Professional business website with modern design, responsive layout, and comprehensive business information presentation.",
      tech: ["React", "JavaScript", "CSS", "Responsive Design"],
      icon: <Building className="h-6 w-6" />,
      color: "cyan",
      features: [
        "Responsive design for all devices",
        "Professional business showcase",
        "Contact forms and integration",
        "SEO optimized structure"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="text-green-500 font-mono">03.</span> Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my development journey, from enterprise software to personal utilities
          </p>
        </div>

        {/* Terminal-style project list */}
        <div className="terminal-window max-w-4xl mx-auto mb-12 animate-fade-in-up">
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500"></div>
            <div className="terminal-dot bg-yellow-500"></div>
            <div className="terminal-dot bg-green-500"></div>
            <span className="text-gray-400 ml-4 font-mono text-sm">projects --show-all</span>
          </div>
          
          <div className="terminal-content">
            <div className="space-y-3">
              <div>
                <span className="text-green-500">$</span>
                <span className="text-gray-400 ml-2">ls -la ~/projects/</span>
              </div>
              
              <div className="ml-4 space-y-2 text-sm font-mono">
                {projects.map((project, index) => (
                  <div key={project.title} className="flex items-center space-x-3 text-gray-300">
                    <span className="text-cyan-400">drwxr-xr-x</span>
                    <span className="text-green-500">2</span>
                    <span className="text-yellow-400">bhavin</span>
                    <span className="text-yellow-400">bhavin</span>
                    <span className="text-gray-400">4096</span>
                    <span className="text-gray-400">Dec {index + 1}</span>
                    <span className="text-white">{project.title.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '')}/</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`text-${project.color}-500`}>
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                  {project.title}
                </h3>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-mono text-green-500 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                      <span className="text-green-500">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="skill-tag text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <a
                  href="https://github.com/Bhavin-0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-green-500/10 border border-green-500/30 rounded px-3 py-2 text-sm font-mono hover:bg-green-500/20 hover:border-green-500 transition-all duration-300"
                >
                  <Github className="h-4 w-4" />
                  <span>Code</span>
                </a>
                <button className="flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 rounded px-3 py-2 text-sm font-mono hover:bg-cyan-500/20 hover:border-cyan-500 transition-all duration-300">
                  <ExternalLink className="h-4 w-4" />
                  <span>Demo</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub integration section */}
        <div className="mt-16 terminal-window">
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500"></div>
            <div className="terminal-dot bg-yellow-500"></div>
            <div className="terminal-dot bg-green-500"></div>
            <span className="text-gray-400 ml-4 font-mono text-sm">github_activity.sh</span>
          </div>
          
          <div className="terminal-content text-center">
            <div className="space-y-4">
              <div>
                <span className="text-green-500">$</span>
                <span className="text-gray-400 ml-2">git log --author="Bhavin-0" --oneline</span>
              </div>
              
              <div className="inline-block">
                <a
                  href="https://github.com/Bhavin-0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 bg-green-500/10 border border-green-500/30 rounded-lg px-6 py-4 hover:bg-green-500/20 hover:border-green-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                >
                  <Github className="h-8 w-8" />
                  <div className="text-left">
                    <div className="text-white font-bold">View All Projects</div>
                    <div className="text-gray-400 text-sm font-mono">github.com/Bhavin-0</div>
                  </div>
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
