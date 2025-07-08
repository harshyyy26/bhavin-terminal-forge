
import React, { useEffect, useRef } from 'react';
import { Code, Database, Wrench, Globe } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["Java", "JavaScript", "SQL"],
      color: "primary"
    },
    {
      title: "Tech Stack", 
      icon: <Globe className="h-6 w-6" />,
      skills: ["Spring Boot", "REST APIs", "React", "Node.js", "Firebase"],
      color: "secondary"
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: ["MySQL", "MongoDB"],
      color: "primary"
    },
    {
      title: "Tools",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["Git", "GitHub", "IntelliJ IDEA", "VS Code"],
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
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My technical arsenal for building scalable and efficient software solutions
          </p>
        </div>

        <div ref={skillsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

        {/* Learning Section */}
        <div className="mt-16 bg-card rounded-xl p-8 border border-border">
          <h3 className="text-2xl font-semibold mb-6 text-center gradient-text">
            Currently Learning
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Advanced Spring Boot",
              "Microservices Architecture", 
              "Cloud Technologies",
              "System Design Patterns"
            ].map((item, index) => (
              <div key={item} className="flex items-center space-x-2 text-muted-foreground">
                <span className="text-primary">⚡</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
