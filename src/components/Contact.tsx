
import React, { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Send, Terminal } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Hi Bhavin,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`;
    const mailtoLink = `mailto:bhavin.joshi@mitaoe.ac.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client...",
      description: "Your default email client should open shortly.",
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="text-green-500 font-mono">04.</span> Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Let's connect and discuss opportunities, collaborations, or just have a chat about technology!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info Terminal */}
          <div className="terminal-window animate-slide-in-left">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
              <span className="text-gray-400 ml-4 font-mono text-sm">contact_info.sh</span>
            </div>
            
            <div className="terminal-content">
              <div className="space-y-6">
                <div>
                  <span className="text-green-500">$</span>
                  <span className="text-gray-400 ml-2">cat contact.json</span>
                </div>
                
                <div className="ml-4 space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-green-500/5 border border-green-500/20 rounded-lg">
                    <Mail className="h-6 w-6 text-green-500" />
                    <div>
                      <div className="text-sm text-gray-400 font-mono">email:</div>
                      <a
                        href="mailto:bhavin.joshi@mitaoe.ac.in"
                        className="text-white hover:text-green-400 transition-colors"
                      >
                        bhavin.joshi@mitaoe.ac.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-cyan-500/5 border border-cyan-500/20 rounded-lg">
                    <MapPin className="h-6 w-6 text-cyan-500" />
                    <div>
                      <div className="text-sm text-gray-400 font-mono">location:</div>
                      <div className="text-white">Pune, Maharashtra, India</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <span className="text-green-500">$</span>
                  <span className="text-gray-400 ml-2">ls social_links/</span>
                </div>

                <div className="ml-4 space-y-3">
                  <a
                    href="https://github.com/Bhavin-0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 bg-muted border border-green-500/30 rounded-lg hover:bg-green-500/10 hover:border-green-500 transition-all duration-300"
                  >
                    <Github className="h-5 w-5 text-green-500" />
                    <div>
                      <div className="text-white font-mono">GitHub</div>
                      <div className="text-sm text-gray-400">github.com/Bhavin-0</div>
                    </div>
                  </a>

                  <a
                    href="mailto:bhavin.joshi@mitaoe.ac.in"
                    className="flex items-center space-x-3 p-3 bg-muted border border-cyan-500/30 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-500 transition-all duration-300"
                  >
                    <Mail className="h-5 w-5 text-cyan-500" />
                    <div>
                      <div className="text-white font-mono">Email</div>
                      <div className="text-sm text-gray-400">Direct contact</div>
                    </div>
                  </a>
                </div>

                <div className="mt-8 p-4 bg-muted/50 border border-gray-700 rounded-lg">
                  <div className="text-green-500 font-mono text-sm mb-2">Status:</div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-300">Available for opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Terminal */}
          <div className="terminal-window animate-slide-in-right">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
              <span className="text-gray-400 ml-4 font-mono text-sm">send_message.sh</span>
            </div>
            
            <div className="terminal-content">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-green-500">$</span>
                  <span className="text-gray-400 ml-2">nano message.txt</span>
                </div>

                <div className="ml-4 space-y-4">
                  <div>
                    <label className="block text-sm font-mono text-gray-400 mb-2">
                      --name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-muted border border-green-500/30 rounded px-4 py-3 text-white font-mono focus:outline-none focus:border-green-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-mono text-gray-400 mb-2">
                      --email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-muted border border-green-500/30 rounded px-4 py-3 text-white font-mono focus:outline-none focus:border-green-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-mono text-gray-400 mb-2">
                      --message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-muted border border-green-500/30 rounded px-4 py-3 text-white font-mono focus:outline-none focus:border-green-500 transition-colors resize-none"
                      placeholder="Your message here..."
                    />
                  </div>

                  <div>
                    <span className="text-green-500">$</span>
                    <span className="text-gray-400 ml-2">chmod +x send_message.sh && ./send_message.sh</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-3 bg-green-500/10 border border-green-500 rounded-lg px-6 py-4 text-white font-mono hover:bg-green-500/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                  >
                    <Send className="h-5 w-5" />
                    <span>Execute Message Send</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="terminal-window max-w-2xl mx-auto">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
              <span className="text-gray-400 ml-4 font-mono text-sm">footer.sh</span>
            </div>
            
            <div className="terminal-content text-center">
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-2">
                  <Terminal className="h-5 w-5 text-green-500" />
                  <span className="text-white font-mono">Designed & Built by Bhavin Lalit Joshi</span>
                </div>
                
                <div className="text-sm text-gray-400 font-mono">
                  © {new Date().getFullYear()} • Made with ❤️ and lots of ☕
                </div>
                
                <div className="text-xs text-gray-500 font-mono">
                  <span className="text-green-500">$</span> echo "Thanks for visiting!"
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
