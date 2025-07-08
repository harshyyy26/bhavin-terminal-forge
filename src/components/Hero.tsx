
import React, { useEffect, useRef } from 'react';
import { Github, Mail, MapPin, ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLParagraphElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate name
    tl.from(nameRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out"
    })
    // Animate role with typing effect
    .to(roleRef.current, {
      text: "Aspiring Java Developer | Full-Stack Enthusiast",
      duration: 2,
      ease: "none"
    }, "-=0.5")
    // Animate intro line
    .from(introRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out"
    }, "-=1")
    // Animate social links
    .from(linksRef.current?.children || [], {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out"
    }, "-=0.5");

  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
      
      <div ref={heroRef} className="max-w-4xl mx-auto text-center relative z-10 section-padding">
        <div className="space-y-8">
          {/* Name */}
          <h1 
            ref={nameRef}
            className="text-5xl md:text-7xl font-bold text-foreground mb-4"
          >
            Bhavin Lalit Joshi
          </h1>

          {/* Role with typing animation */}
          <p 
            ref={roleRef}
            className="text-xl md:text-2xl gradient-text font-medium h-8"
          >
            {/* Text will be animated via GSAP */}
          </p>

          {/* Intro line */}
          <div ref={introRef} className="space-y-4">
            <div className="text-lg text-muted-foreground flex items-center justify-center space-x-2">
              <span className="text-primary">{'>'}</span>
              <span>Crafting scalable software solutions with passion and precision</span>
            </div>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
              B.Tech. Computer Engineering student at MIT AOE Pune (2022–2026), passionate about backend systems, 
              full-stack development, and building innovative software solutions that solve real-world problems.
            </p>
          </div>

          {/* Social Links */}
          <div ref={linksRef} className="flex justify-center space-x-6">
            <a
              href="https://github.com/Bhavin-0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-card border border-border rounded-lg px-6 py-3 hover:border-primary/50 transition-all duration-300 card-hover"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
            <a
              href="mailto:bhavin.joshi@mitaoe.ac.in"
              className="flex items-center space-x-2 bg-card border border-border rounded-lg px-6 py-3 hover:border-primary/50 transition-all duration-300 card-hover"
            >
              <Mail className="h-5 w-5" />
              <span>Email</span>
            </a>
            <div className="flex items-center space-x-2 bg-card border border-border rounded-lg px-6 py-3">
              <MapPin className="h-5 w-5" />
              <span>Pune, India</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="h-8 w-8 text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
