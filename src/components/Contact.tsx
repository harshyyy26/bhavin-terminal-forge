
import React, { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Github, Send, Terminal, MessageSquare, Phone, Linkedin } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useToast } from '@/hooks/use-toast';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isTyping, setIsTyping] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const section = sectionRef.current;
    const form = formRef.current;
    const info = infoRef.current;
    const cursor = cursorRef.current;

    if (section && form && info) {
      gsap.from(info.children, {
        opacity: 0,
        x: -50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      gsap.from(form, {
        opacity: 0,
        x: 50,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
    }

    // Animate cursor
    if (cursor) {
      gsap.to(cursor, {
        opacity: 0,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsTyping(true);
    
    const subject = formData.subject || `Portfolio Contact from ${formData.name}`;
    const body = `Hi Bhavin,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`;
    const mailtoLink = `mailto:bhavin.joshi@mitaoe.ac.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    setTimeout(() => {
      window.location.href = mailtoLink;
      setIsTyping(false);
      
      toast({
        title: "Email client opened!",
        description: "Your message is ready to send.",
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section ref={sectionRef} id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-6">
            <MessageSquare className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold terminal-text">
              <span className="text-secondary">04.</span> ./contact.sh
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <div className="code-block max-w-2xl mx-auto">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-secondary">{'>'}</span>
              <span className="text-primary">ping -c 1 bhavin.dev</span>
            </div>
            <p className="text-muted-foreground">
              Let's connect! I'm always interested in discussing new opportunities, collaborations, or tech innovations.
              <span ref={cursorRef} className="text-primary">_</span>
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div ref={infoRef} className="space-y-6">
            <div className="code-block">
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-secondary">{'>'}</span>
                <span className="text-primary">cat contact_info.json</span>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg border border-primary/20">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium terminal-text mb-1">Email</div>
                    <a
                      href="mailto:bhavin.joshi@mitaoe.ac.in"
                      className="text-muted-foreground hover:text-primary transition-colors font-mono"
                    >
                      bhavin.joshi@mitaoe.ac.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/10 p-3 rounded-lg border border-secondary/20">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-medium terminal-text mb-1">Location</div>
                    <div className="text-muted-foreground font-mono">Pune, Maharashtra, India</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg border border-primary/20">
                    <Github className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium terminal-text mb-1">GitHub</div>
                    <a
                      href="https://github.com/Bhavin-0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors font-mono"
                    >
                      github.com/Bhavin-0
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="code-block">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-secondary">{'>'}</span>
                <span className="text-primary">systemctl status availability</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <div>
                  <div className="font-medium text-primary terminal-text">ONLINE & AVAILABLE</div>
                  <div className="text-sm text-muted-foreground">
                    Open to internship opportunities and exciting projects
                  </div>
                </div>
              </div>
            </div>

            <div className="code-block">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-secondary">{'>'}</span>
                <span className="text-primary">echo "Let's connect!"</span>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  I'm always excited to discuss:
                </p>
                <div className="space-y-2">
                  {[
                    "Full-stack development opportunities",
                    "Backend system architecture",
                    "Open source collaborations",
                    "Java & Spring Boot projects",
                    "Tech discussions and learning"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 text-sm text-muted-foreground">
                      <span className="text-primary">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formRef} className="code-block">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-secondary">{'>'}</span>
              <span className="text-primary">vim message.txt</span>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 terminal-text">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-muted border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors font-mono text-sm"
                    placeholder="your_name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 terminal-text">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-muted border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors font-mono text-sm"
                    placeholder="user@domain.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 terminal-text">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-muted border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors font-mono text-sm"
                  placeholder="Project collaboration..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 terminal-text">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-muted border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none font-mono text-sm"
                  placeholder="echo 'Your message here...'"
                />
              </div>

              <button
                type="submit"
                disabled={isTyping}
                className={`w-full flex items-center justify-center space-x-3 bg-primary/10 border border-primary text-primary rounded-lg px-6 py-4 font-medium transition-all duration-300 cyber-glow terminal-text ${
                  isTyping ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary hover:text-background'
                }`}
              >
                <Send className="h-5 w-5" />
                <span>{isTyping ? 'Sending...' : 'send_message()'}</span>
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="code-block max-w-2xl mx-auto">
            <div className="flex items-center space-x-2 mb-4 justify-center">
              <span className="text-secondary">{'>'}</span>
              <span className="text-primary">whoami && date</span>
            </div>
            <p className="text-muted-foreground mb-2">
              Built with <span className="text-primary">❤️</span> by <span className="gradient-text font-medium">Bhavin Lalit Joshi</span>
            </p>
            <p className="text-sm text-muted-foreground font-mono">
              © {new Date().getFullYear()} • Crafted with React, TypeScript & lots of ☕
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
