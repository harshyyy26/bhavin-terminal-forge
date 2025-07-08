
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Aspiring Java Developer | Full-Stack Enthusiast";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="terminal-window animate-fade-in-up">
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500"></div>
            <div className="terminal-dot bg-yellow-500"></div>
            <div className="terminal-dot bg-green-500"></div>
            <span className="text-gray-400 ml-4 font-mono text-sm">bhavin@portfolio:~$</span>
          </div>
          
          <div className="terminal-content">
            <div className="mb-8">
              <div className="text-green-500 mb-2 font-mono">
                <span className="text-gray-400">$</span> whoami
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 neon-text">
                Bhavin Lalit Joshi
              </h1>
            </div>

            <div className="mb-8">
              <div className="text-green-500 mb-2 font-mono">
                <span className="text-gray-400">$</span> cat role.txt
              </div>
              <div className="h-8 mb-4">
                <p className="text-xl md:text-2xl text-cyan-400 font-mono">
                  {typedText}
                  <span className="animate-blink">|</span>
                </p>
              </div>
            </div>

            <div className="mb-8">
              <div className="text-green-500 mb-2 font-mono">
                <span className="text-gray-400">$</span> echo $MISSION
              </div>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                "Building scalable software solutions with passion for backend systems and modern web technologies. 
                Transforming ideas into robust, efficient code."
              </p>
            </div>

            <div className="mb-8">
              <div className="text-green-500 mb-4 font-mono">
                <span className="text-gray-400">$</span> ls -la social_links/
              </div>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://github.com/Bhavin-0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-2 hover:bg-green-500/20 hover:border-green-500 transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,197,94,0.5)]"
                >
                  <Github className="h-5 w-5" />
                  <span className="font-mono">GitHub</span>
                </a>
                <a
                  href="mailto:bhavin.joshi@mitaoe.ac.in"
                  className="flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg px-4 py-2 hover:bg-cyan-500/20 hover:border-cyan-500 transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                >
                  <Mail className="h-5 w-5" />
                  <span className="font-mono">Email</span>
                </a>
                <div className="flex items-center space-x-2 bg-muted border border-green-500/30 rounded-lg px-4 py-2">
                  <MapPin className="h-5 w-5" />
                  <span className="font-mono">Pune</span>
                </div>
              </div>
            </div>

            <div className="text-green-500 font-mono">
              <span className="text-gray-400">$</span> ./explore_portfolio.sh
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="h-8 w-8 text-green-500" />
        </button>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-4 h-4 bg-green-500 rounded-full opacity-50"></div>
      </div>
      <div className="absolute top-1/3 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-6 h-6 bg-cyan-500 rounded-full opacity-30"></div>
      </div>
      <div className="absolute bottom-1/4 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-3 h-3 bg-green-500 rounded-full opacity-40"></div>
      </div>
    </section>
  );
};

export default Hero;
