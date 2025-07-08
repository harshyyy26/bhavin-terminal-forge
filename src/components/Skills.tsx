import React from 'react';
import { Code, Database, Wrench, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["Java", "JavaScript", "SQL", "HTML/CSS"],
      color: "green"
    },
    {
      title: "Frameworks & Libraries", 
      icon: <Globe className="h-6 w-6" />,
      skills: ["Spring Boot", "React", "Node.js", "JDBC", "REST APIs"],
      color: "cyan"
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: ["MySQL", "MongoDB", "Firebase"],
      color: "green"
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["Git", "GitHub", "IntelliJ IDEA", "VS Code", "Postman"],
      color: "cyan"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="text-green-500 font-mono">02.</span> Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My technical arsenal for building scalable and efficient software solutions
          </p>
        </div>

        {/* Terminal-style skills display */}
        <div className="terminal-window max-w-4xl mx-auto mb-12 animate-fade-in-up">
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500"></div>
            <div className="terminal-dot bg-yellow-500"></div>
            <div className="terminal-dot bg-green-500"></div>
            <span className="text-gray-400 ml-4 font-mono text-sm">skills --list --verbose</span>
          </div>
          
          <div className="terminal-content">
            <div className="space-y-6">
              {skillCategories.map((category, index) => (
                <div key={category.title}>
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-green-500">$</span>
                    <span className="text-gray-400">ls</span>
                    <span className="text-yellow-400">{category.title.toLowerCase().replace(' & ', '_').replace(' ', '_')}/</span>
                  </div>
                  
                  <div className="ml-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill}
                        className="skill-tag"
                        style={{ animationDelay: `${index * 200 + skillIndex * 100}ms` }}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="project-card group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`flex items-center space-x-3 mb-4 text-${category.color}-500`}>
                {category.icon}
                <h3 className="font-bold text-lg text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between py-2 border-b border-gray-700/30 last:border-b-0"
                  >
                    <span className="text-gray-300 font-mono text-sm">{skill}</span>
                    <div className="flex space-x-1">
                      <div className={`w-2 h-2 rounded-full bg-${category.color}-500`}></div>
                      <div className={`w-2 h-2 rounded-full bg-${category.color}-500`}></div>
                      <div className={`w-2 h-2 rounded-full bg-${category.color}-500`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill progression animation */}
        <div className="mt-16 terminal-window">
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500"></div>
            <div className="terminal-dot bg-yellow-500"></div>
            <div className="terminal-dot bg-green-500"></div>
            <span className="text-gray-400 ml-4 font-mono text-sm">learning_progress.sh</span>
          </div>
          
          <div className="terminal-content">
            <div className="space-y-4">
              <div>
                <span className="text-green-500">$</span>
                <span className="text-gray-400 ml-2">echo "Currently learning and improving..."</span>
              </div>
              
              <div className="ml-4 space-y-3 text-sm">
                <div className="flex items-center space-x-3">
                  <span className="text-yellow-400">⚡</span>
                  <span className="text-gray-300">Advanced Spring Boot concepts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-yellow-400">⚡</span>
                  <span className="text-gray-300">Microservices architecture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-yellow-400">⚡</span>
                  <span className="text-gray-300">Cloud technologies (AWS, Docker)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-yellow-400">⚡</span>
                  <span className="text-gray-300">System design patterns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
