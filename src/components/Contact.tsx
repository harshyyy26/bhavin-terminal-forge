
import React, { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Github, Send, Terminal, MessageSquare } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useToast } from '@/hooks/use-toast';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  useEffect(() => {
    const section = sectionRef.current;
    const form = formRef.current;
    const info = infoRef.current;

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
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Hi Bhavin,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`;
    const mailtoLink = `mailto:bhavin.joshi@mitaoe.ac.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client...",
      description: "Your default email client should open shortly.",
    });

    setFormData({ name: '', email: '', message: '' });
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
              Let's connect and discuss opportunities, collaborations, or tech innovations!
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
                    <div className="font-medium terminal-text mb-1">email</div>
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
                    <div className="font-medium terminal-text mb-1">location</div>
                    <div className="text-muted-foreground font-mono">pune, maharashtra, india</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg border border-primary/20">
                    <Github className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium terminal-text mb-1">github</div>
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
                  <div className="font-medium text-primary terminal-text">ONLINE</div>
                  <div className="text-sm text-muted-foreground">
                    Available for internship and collaboration opportunities
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formRef} className="code-block">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-secondary">{'>'}</span>
              <span className="text-primary">nano message.txt</span>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 terminal-text">name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-muted border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors font-mono"
                  placeholder="your_name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 terminal-text">email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-muted border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors font-mono"
                  placeholder="user@domain.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 terminal-text">message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-muted border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none font-mono"
                  placeholder="echo 'Your message here...'"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-3 bg-primary/10 border border-primary text-primary rounded-lg px-6 py-4 font-medium hover:bg-primary hover:text-background transition-all duration-300 cyber-glow terminal-text"
              >
                <Send className="h-5 w-5" />
                <span>send_message()</span>
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
              Designed & Built by <span className="gradient-text font-medium">Bhavin Lalit Joshi</span>
            </p>
            <p className="text-sm text-muted-foreground font-mono">
              © {new Date().getFullYear()} • crafted with ❤️ and lots of ☕
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
