
import React, { useEffect, useRef } from 'react';
import { Code, Database, Wrench, Globe, Terminal, Layers, Cpu, Zap, Target } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const commandRef = useRef<HTMLDivElement>(null);

  const techStack = [
    { name: 'Java', level: 95, category: 'Backend' },
    { name: 'Spring Boot', level: 90, category: 'Framework' },
    { name: 'MongoDB', level: 85, category: 'Database' },
    { name: 'MySQL', level: 88, category: 'Database' },
    { name: 'React', level: 82, category: 'Frontend' },
    { name: 'Node.js', level: 75, category: 'Backend' },
    { name: 'JavaScript', level: 85, category: 'Language' },
    { name: 'Tailwind CSS', level: 80, category: 'Styling' },
    { name: 'Firebase', level: 75, category: 'Cloud' },
    { name: 'Git', level: 90, category: 'Tools' }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const skills = skillsRef.current;
    const command = commandRef.current;

    if (section && skills && command) {
      // Animate command terminal
      gsap.from(command.children, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Animate skill badges
      gsap.from(skills.children, {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: skills,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
    }
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-6">
            <Cpu className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold terminal-text">
              <span className="text-secondary">02.</span> ./skills --list
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        {/* Terminal Command Output */}
        <div ref={commandRef} className="code-block mb-12 max-w-4xl mx-auto">
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-secondary">{'>'}</span>
            <span className="text-primary">tech-stack --list --verbose</span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="text-primary">✓ Initializing skill assessment...</div>
            <div className="text-muted-foreground">✓ Scanning technology proficiency...</div>
            <div className="text-primary">✓ Analyzing project experience...</div>
            <div className="text-secondary">✓ Assessment complete. Displaying results...</div>
          </div>
        </div>

        {/* Tech Stack Grid */}
        <div ref={skillsRef} className="tech-grid mb-16">
          {techStack.map((tech, index) => (
            <div
              key={tech.name}
              className="skill-badge group relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium terminal-text">{tech.name}</span>
                <span className="text-xs text-muted-foreground">{tech.level}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 relative"
                  style={{ width: `${tech.level}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                </div>
              </div>
              <div className="absolute top-2 right-2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                {tech.category}
              </div>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              title: "Backend",
              icon: <Terminal className="h-6 w-6" />,
              skills: ["Java", "Spring Boot", "Node.js", "REST APIs"],
              color: "primary"
            },
            {
              title: "Frontend",
              icon: <Globe className="h-6 w-6" />,
              skills: ["React", "JavaScript", "Tailwind CSS", "HTML5"],
              color: "secondary"
            },
            {
              title: "Database",
              icon: <Database className="h-6 w-6" />,
              skills: ["MongoDB", "MySQL", "Firebase", "JDBC"],
              color: "primary"
            },
            {
              title: "Tools",
              icon: <Wrench className="h-6 w-6" />,
              skills: ["Git", "IntelliJ IDEA", "VS Code", "Postman"],
              color: "secondary"
            }
          ].map((category, index) => (
            <div
              key={category.title}
              className="bg-card border border-border rounded-lg p-6 card-hover cyber-glow"
            >
              <div className={`flex items-center space-x-3 mb-4 text-${category.color}`}>
                {category.icon}
                <h3 className="font-semibold text-lg terminal-text">{category.title}</h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div key={skill} className="text-sm text-muted-foreground">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learning Path */}
        <div className="code-block">
          <div className="flex items-center space-x-2 mb-6">
            <span className="text-secondary">{'>'}</span>
            <span className="text-primary">tail -f learning_path.log</span>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4 terminal-text flex items-center space-x-2">
                <Zap className="h-5 w-5 text-primary" />
                <span>Currently Learning</span>
              </h4>
              <div className="space-y-3">
                {[
                  "Advanced Spring Boot Features",
                  "Microservices Architecture",
                  "Docker & Containerization",
                  "AWS Cloud Services"
                ].map((item, index) => (
                  <div key={item} className="flex items-center space-x-3 text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 terminal-text flex items-center space-x-2">
                <Target className="h-5 w-5 text-secondary" />
                <span>Next Goals</span>
              </h4>
              <div className="space-y-3">
                {[
                  "System Design Patterns",
                  "Kubernetes Orchestration",
                  "GraphQL APIs",
                  "Machine Learning Integration"
                ].map((item, index) => (
                  <div key={item} className="flex items-center space-x-3 text-muted-foreground">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
