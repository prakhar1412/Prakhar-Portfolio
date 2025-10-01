import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:prakhar14123@gmail.com",
      label: "Email",
      color: "hover:text-primary",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/prakhar-kumar-9711932a7",
      label: "LinkedIn",
      color: "hover:text-secondary",
    },
    {
      icon: Github,
      href: "https://github.com/prakhar1412",
      label: "GitHub",
      color: "hover:text-accent",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-glow-sky">
          Get In Touch
        </h2>
        
        <div className="glass-effect rounded-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-background/50 border-border focus:border-primary"
              />
            </div>
            
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-background/50 border-border focus:border-primary"
              />
            </div>
            
            <div>
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="bg-background/50 border-border focus:border-primary resize-none"
              />
            </div>
            
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-sky hover:shadow-glow-lavender transition-all duration-300"
            >
              Send Message
            </Button>
          </form>
          
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex justify-center gap-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-xl glass-effect border border-border ${link.color} transition-all duration-300 hover:scale-110 hover:shadow-glow-sky`}
                  aria-label={link.label}
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
