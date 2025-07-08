
import React, { useEffect, useRef } from 'react';
import { GraduationCap, Code, Database, Server } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const stats = statsRef.current;

    if (section && content && stats) {
      // Animate content on scroll
      gsap.from(content.children, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Animate stats
      gsap.from(stats.children, {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: stats,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
    }
  }, []);

  return (
    <section ref={sectionRef} id="about" className="section-padding bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">01.</span> About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div ref={contentRef} className="space-y-6">
            <div className="bg-card rounded-xl p-8 border border-border">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Background</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a passionate Computer Engineering student at MIT AOE Pune, currently in my final year 
                (2022-2026). My journey in software development focuses on backend systems and scalable 
                applications using Java and modern web technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in writing clean, efficient code and building solutions that make a real impact. 
                My experience spans from enterprise software development to personal utility applications.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 border border-border">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Interests</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <span className="text-primary">•</span>
                  <span>Backend Development & System Design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">•</span>
                  <span>Full-Stack Web Applications</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">•</span>
                  <span>Database Optimization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">•</span>
                  <span>API Development & Integration</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-2 gap-6">
            <div className="bg-card rounded-xl p-6 text-center border border-border card-hover">
              <GraduationCap className="h-8 w-8 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">2026</div>
              <div className="text-sm text-muted-foreground">Expected Graduation</div>
            </div>
            
            <div className="bg-card rounded-xl p-6 text-center border border-border card-hover">
              <Code className="h-8 w-8 text-secondary mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            
            <div className="bg-card rounded-xl p-6 text-center border border-border card-hover">
              <Database className="h-8 w-8 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Database Technologies</div>
            </div>
            
            <div className="bg-card rounded-xl p-6 text-center border border-border card-hover">
              <Server className="h-8 w-8 text-secondary mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">4+</div>
              <div className="text-sm text-muted-foreground">Frameworks & Tools</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
