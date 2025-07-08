
import React, { useEffect, useRef } from 'react';
import { GraduationCap, Code, Database, Server, BookOpen, Target } from 'lucide-react';
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
                I'm a passionate Computer Engineering student at MIT Academy of Engineering (AOE), Pune, 
                currently in my final year (2022-2026). My journey in software development is driven by 
                a deep fascination with backend systems, scalable architecture, and innovative problem-solving.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With hands-on experience in Java development, full-stack web technologies, and database management, 
                I've built enterprise-level software solutions including safety management systems for industrial 
                applications and user-friendly utilities for everyday problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in writing clean, efficient code and building solutions that make a real impact. 
                My goal is to contribute to meaningful projects that solve complex challenges while continuously 
                learning and growing as a developer.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 border border-border">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Core Interests</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center space-x-3">
                  <span className="text-primary">▶</span>
                  <span>Backend Development & System Architecture</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-primary">▶</span>
                  <span>Full-Stack Web Applications with Java & React</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-primary">▶</span>
                  <span>Database Design & Optimization (MySQL, MongoDB)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-primary">▶</span>
                  <span>REST API Development & Microservices</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-primary">▶</span>
                  <span>Enterprise Software Solutions</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-primary">▶</span>
                  <span>Open Source Contributions & Collaborative Development</span>
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
              <div className="text-xs text-muted-foreground mt-1">B.Tech Computer Engineering</div>
            </div>
            
            <div className="bg-card rounded-xl p-6 text-center border border-border card-hover">
              <Code className="h-8 w-8 text-secondary mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
              <div className="text-xs text-muted-foreground mt-1">Enterprise & Personal</div>
            </div>
            
            <div className="bg-card rounded-xl p-6 text-center border border-border card-hover">
              <Database className="h-8 w-8 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Database Technologies</div>
              <div className="text-xs text-muted-foreground mt-1">MySQL, MongoDB, Firebase</div>
            </div>
            
            <div className="bg-card rounded-xl p-6 text-center border border-border card-hover">
              <Server className="h-8 w-8 text-secondary mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">8+</div>
              <div className="text-sm text-muted-foreground">Technologies Mastered</div>
              <div className="text-xs text-muted-foreground mt-1">Languages, Frameworks & Tools</div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-16">
          <div className="bg-card rounded-xl p-8 border border-border">
            <h3 className="text-2xl font-semibold mb-6 gradient-text text-center">Education</h3>
            <div className="flex items-center justify-center space-x-6">
              <div className="text-center">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">MIT Academy of Engineering</h4>
                <p className="text-muted-foreground mb-1">B.Tech in Computer Engineering</p>
                <p className="text-sm text-muted-foreground">2022 - 2026 | Pune, Maharashtra</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
