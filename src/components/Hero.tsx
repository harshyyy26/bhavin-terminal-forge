
import React, { useEffect, useRef, useState } from 'react';
import { Github, Mail, MapPin, Terminal, ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const commandRef = useRef<HTMLDivElement>(null);
  const [currentCommand, setCurrentCommand] = useState(0);

  const commands = [
    '> whoami',
    'Bhavin Lalit Joshi',
    '> cat role.txt',
    'Java Developer | Full-Stack Engineer',
    '> ls skills/',
    'Java  Spring-Boot  React.js  MongoDB  MySQL',
    '> cat status.txt',
    'Available for opportunities...',
    '> echo "Welcome to my portfolio"',
    'System ready. Explore my work below ↓'
  ];

  useEffect(() => {
    const terminal = terminalRef.current;
    const command = commandRef.current;

    if (terminal && command) {
      const tl = gsap.timeline();

      // Initial terminal setup
      tl.from(terminal, {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "power3.out"
      });

      // Typing animation for commands
      commands.forEach((cmd, index) => {
        tl.to({}, {
          duration: 0.5,
          onComplete: () => setCurrentCommand(index)
        })
        .to(command, {
          text: cmd,
          duration: cmd.length * 0.03,
          ease: "none"
        }, `+=${index === 0 ? 0 : 0.5}`);
      });

      // Final glow effect
      tl.to(terminal, {
        boxShadow: "0 0 30px rgba(52, 211, 153, 0.3)",
        duration: 0.5,
        ease: "power2.out"
      });
    }
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative terminal-bg">
      {/* Matrix background effect */}
      <div className="matrix-bg"></div>
      
      <div ref={heroRef} className="max-w-4xl mx-auto text-center relative z-10 section-padding">
        {/* Terminal Window */}
        <div 
          ref={terminalRef}
          className="bg-card border border-border rounded-lg cyber-glow mb-8 max-w-2xl mx-auto"
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-sm text-muted-foreground ml-4">bhavin@portfolio:~</span>
            </div>
            <Terminal className="h-4 w-4 text-muted-foreground" />
          </div>

          {/* Terminal Content */}
          <div className="p-6 font-mono text-left">
            <div className="space-y-2 min-h-[300px]">
              {commands.slice(0, currentCommand + 1).map((cmd, index) => (
                <div key={index} className={`${
                  cmd.startsWith('>') 
                    ? 'text-primary' 
                    : index % 2 === 1 
                      ? 'text-secondary font-semibold' 
                      : 'text-foreground'
                }`}>
                  {cmd}
                </div>
              ))}
              <div 
                ref={commandRef}
                className="terminal-cursor text-primary"
              ></div>
            </div>
          </div>
        </div>

        {/* Quick Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-card border border-border rounded-lg p-6 card-hover">
            <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-sm text-muted-foreground">Contact</div>
            <a 
              href="mailto:bhavin.joshi@mitaoe.ac.in"
              className="text-primary hover:text-secondary transition-colors"
            >
              bhavin.joshi@mitaoe.ac.in
            </a>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 card-hover">
            <MapPin className="h-8 w-8 text-secondary mx-auto mb-3" />
            <div className="text-sm text-muted-foreground">Location</div>
            <div className="text-foreground">Pune, Maharashtra</div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 card-hover">
            <Github className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-sm text-muted-foreground">GitHub</div>
            <a 
              href="https://github.com/Bhavin-0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary transition-colors"
            >
              /Bhavin-0
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="animate-bounce text-primary hover:text-secondary transition-colors"
        >
          <ChevronDown className="h-8 w-8 mx-auto" />
          <div className="text-sm mt-2">scroll down</div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
