
import React, { useEffect, useRef } from 'react';
import { Code, Database, Wrench, Globe, Terminal, Layers } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["Java", "JavaScript", "SQL", "HTML5", "CSS3"],
      color: "primary"
    },
    {
      title: "Backend Technologies", 
      icon: <Terminal className="h-6 w-6" />,
      skills: ["Spring Boot", "JDBC", "REST APIs", "Microservices", "Node.js"],
      color: "secondary"
    },
    {
      title: "Frontend & Full-Stack",
      icon: <Globe className="h-6 w-6" />,
      skills: ["React.js", "JavaScript ES6+", "Responsive Design", "Modern CSS", "Component Architecture"],
      color: "primary"
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: ["MySQL", "MongoDB", "Firebase", "Database Design", "Query Optimization"],
      color: "secondary"
    },
    {
      title: "Development Tools",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["Git & GitHub", "IntelliJ IDEA", "VS Code", "Eclipse", "Postman"],
      color: "primary"
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layers className="h-6 w-6" />,
      skills: ["Spring Framework", "React Ecosystem", "Express.js", "Java Swing", "Bootstrap"],
      color: "secondary"
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const skills = skillsRef.current;

    if (section && skills) {
      // Animate skill categories
      gsap.from(skills.children, {
        opacity: 0,
        y: 50,
        scale: 0.8,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Animate individual skills with delay
      skillCategories.forEach((category, categoryIndex) => {
        const categoryElement = skills.children[categoryIndex];
        if (categoryElement) {
          const skillBadges = categoryElement.querySelectorAll('.skill-badge');
          gsap.from(skillBadges, {
            opacity: 0,
            x: -20,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: categoryElement,
              start: "top 90%",
              toggleActions: "play none none reverse"
            }
          });
        }
      });
    }
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">02.</span> Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            My comprehensive technical arsenal for building scalable, efficient, and innovative software solutions
          </p>
        </div>

        <div ref={skillsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-card rounded-xl p-6 border border-border card-hover"
            >
              <div className={`flex items-center space-x-3 mb-6 text-${category.color}`}>
                {category.icon}
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill} className="skill-badge">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Proficiency Overview */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card rounded-xl p-8 border border-border">
            <h3 className="text-2xl font-semibold mb-6 gradient-text">Core Competencies</h3>
            <div className="space-y-4">
              {[
                { skill: "Java Development", level: "Advanced", percent: "90%" },
                { skill: "Spring Boot", level: "Intermediate", percent: "75%" },
                { skill: "Database Management", level: "Advanced", percent: "85%" },
                { skill: "React.js", level: "Intermediate", percent: "70%" },
                { skill: "REST API Development", level: "Advanced", percent: "80%" }
              ].map((item, index) => (
                <div key={item.skill}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{item.skill}</span>
                    <span className="text-sm text-muted-foreground">{item.level}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000"
                      style={{ width: item.percent }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-xl p-8 border border-border">
            <h3 className="text-2xl font-semibold mb-6 gradient-text">Currently Learning</h3>
            <div className="space-y-4">
              {[
                "Advanced Spring Boot Features",
                "Microservices Architecture", 
                "Cloud Technologies (AWS/Azure)",
                "System Design Patterns",
                "Docker & Containerization",
                "Advanced React Patterns"
              ].map((item, index) => (
                <div key={item} className="flex items-center space-x-3 text-muted-foreground">
                  <span className="text-primary text-lg">⚡</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Development Philosophy */}
        <div className="bg-card rounded-xl p-8 border border-border">
          <h3 className="text-2xl font-semibold mb-6 text-center gradient-text">
            Development Philosophy
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="font-semibold mb-2">Clean Code</h4>
              <p className="text-sm text-muted-foreground">Writing maintainable, readable, and efficient code that follows best practices</p>
            </div>
            <div>
              <div className="text-3xl mb-3">🚀</div>
              <h4 className="font-semibold mb-2">Scalable Solutions</h4>
              <p className="text-sm text-muted-foreground">Building applications that can grow and adapt to changing requirements</p>
            </div>
            <div>
              <div className="text-3xl mb-3">🔄</div>
              <h4 className="font-semibold mb-2">Continuous Learning</h4>
              <p className="text-sm text-muted-foreground">Staying updated with latest technologies and industry best practices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
