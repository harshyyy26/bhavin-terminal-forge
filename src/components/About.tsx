
import React from 'react';
import { GraduationCap, Code, Database, Server } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="text-green-500 font-mono">01.</span> About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-cyan-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Terminal-style info */}
          <div className="terminal-window animate-slide-in-left">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
              <span className="text-gray-400 ml-4 font-mono text-sm">about.sh</span>
            </div>
            
            <div className="terminal-content">
              <div className="space-y-4">
                <div>
                  <span className="text-green-500">$</span>
                  <span className="text-gray-400 ml-2">cat personal_info.json</span>
                </div>
                
                <div className="ml-4 space-y-2 text-sm">
                  <div><span className="text-cyan-400">"name":</span> <span className="text-yellow-400">"Bhavin Lalit Joshi"</span>,</div>
                  <div><span className="text-cyan-400">"education":</span> <span className="text-yellow-400">"B.Tech Computer Engineering"</span>,</div>
                  <div><span className="text-cyan-400">"college":</span> <span className="text-yellow-400">"MIT AOE Pune"</span>,</div>
                  <div><span className="text-cyan-400">"year":</span> <span className="text-yellow-400">"2022-2026"</span>,</div>
                  <div><span className="text-cyan-400">"status":</span> <span className="text-yellow-400">"Active"</span></div>
                </div>

                <div className="mt-6">
                  <span className="text-green-500">$</span>
                  <span className="text-gray-400 ml-2">echo $PASSION</span>
                </div>
                
                <div className="ml-4 text-gray-300 text-sm leading-relaxed">
                  I'm passionate about backend systems and scalable software development. 
                  Currently pursuing my B.Tech in Computer Engineering at MIT AOE Pune, 
                  I focus on building robust applications using Java and modern web technologies.
                </div>

                <div className="mt-6">
                  <span className="text-green-500">$</span>
                  <span className="text-gray-400 ml-2">ls interests/</span>
                </div>
                
                <div className="ml-4 space-y-1 text-sm text-gray-300">
                  <div>• Backend Development & System Design</div>
                  <div>• Full-Stack Web Applications</div>
                  <div>• Database Optimization</div>
                  <div>• API Development & Integration</div>
                  <div>• Open Source Contribution</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats and highlights */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="grid grid-cols-2 gap-4">
              <div className="project-card text-center">
                <GraduationCap className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">2026</div>
                <div className="text-sm text-gray-400">Graduation</div>
              </div>
              
              <div className="project-card text-center">
                <Code className="h-8 w-8 text-cyan-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">5+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              
              <div className="project-card text-center">
                <Database className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">2+</div>
                <div className="text-sm text-gray-400">Databases</div>
              </div>
              
              <div className="project-card text-center">
                <Server className="h-8 w-8 text-cyan-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">3+</div>
                <div className="text-sm text-gray-400">Frameworks</div>
              </div>
            </div>

            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="text-gray-400 ml-4 font-mono text-sm">achievements.log</span>
              </div>
              
              <div className="terminal-content">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-3">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-300">Developed production-ready applications</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-300">Experience with enterprise software development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-300">Proficient in full-stack development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-300">Strong foundation in computer engineering</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
