
import React, { useEffect, useRef } from 'react';
import { GraduationCap, Code, Database, Server, BookOpen, Target, Terminal } from 'lucide-react';
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
    <section ref={sectionRef} id="about" className="section-padding terminal-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-6">
            <Terminal className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold terminal-text">
              <span className="text-secondary">01.</span> ./about.sh
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div ref={contentRef} className="space-y-6">
            <div className="code-block">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-secondary">{'>'}</span>
                <span className="text-primary">cat background.txt</span>
              </div>
              <div className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Computer Engineering student at MIT Academy of Engineering (AOE), Pune. 
                  Passionate about backend systems, enterprise software development, and building 
                  scalable solutions that solve real-world problems.
                </p>
                <p>
                  Specialized in Java development with hands-on experience in Spring Boot, 
                  database management, and full-stack web technologies. Built enterprise-level 
                  software including safety management systems for industrial applications.
                </p>
                <p>
                  Committed to writing clean, efficient code and continuously learning new 
                  technologies to stay ahead in the rapidly evolving tech landscape.
                </p>
              </div>
            </div>

            <div className="code-block">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-secondary">{'>'}</span>
                <span className="text-primary">ls -la interests/</span>
              </div>
              <div className="space-y-3">
                {[
                  'Backend Development & System Architecture',
                  'Enterprise Java Applications with Spring Boot',
                  'Database Design & Optimization (MySQL, MongoDB)',
                  'RESTful API Development & Microservices',
                  'Full-Stack Web Development with React',
                  'Open Source Contributions & Collaborative Development'
                ].map((interest, index) => (
                  <div key={index} className="flex items-center space-x-3 text-muted-foreground">
                    <span className="text-primary">drwxr-xr-x</span>
                    <span>{interest}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-lg p-6 text-center card-hover cyber-glow">
                <GraduationCap className="h-8 w-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold terminal-text">2026</div>
                <div className="text-sm text-muted-foreground">Expected Graduation</div>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6 text-center card-hover cyber-glow">
                <Code className="h-8 w-8 text-secondary mx-auto mb-4" />
                <div className="text-3xl font-bold terminal-text">5+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6 text-center card-hover cyber-glow">
                <Database className="h-8 w-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold terminal-text">3+</div>
                <div className="text-sm text-muted-foreground">Database Technologies</div>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6 text-center card-hover cyber-glow">
                <Server className="h-8 w-8 text-secondary mx-auto mb-4" />
                <div className="text-3xl font-bold terminal-text">8+</div>
                <div className="text-sm text-muted-foreground">Tech Stack Mastery</div>
              </div>
            </div>

            {/* Education */}
            <div className="code-block">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-secondary">{'>'}</span>
                <span className="text-primary">cat education.json</span>
              </div>
              <div className="space-y-2 text-sm">
                <div><span className="text-secondary">{`{`}</span></div>
                <div className="pl-4">
                  <span className="text-primary">"institution"</span>: 
                  <span className="text-foreground"> "MIT Academy of Engineering"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-primary">"degree"</span>: 
                  <span className="text-foreground"> "B.Tech Computer Engineering"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-primary">"duration"</span>: 
                  <span className="text-foreground"> "2022 - 2026"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-primary">"location"</span>: 
                  <span className="text-foreground"> "Pune, Maharashtra"</span>
                </div>
                <div><span className="text-secondary">{`}`}</span></div>
              </div>
            </div>

            {/* Status */}
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span className="font-medium text-primary terminal-text">SYSTEM STATUS</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Available for internship opportunities and collaborative projects
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
