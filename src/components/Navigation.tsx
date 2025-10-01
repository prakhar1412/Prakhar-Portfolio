import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import pkLogo from "@/../public/pk.png";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.replace("#", ""));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled 
          ? "glass-effect border-b border-border shadow-glow-sky" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-1">
            <img 
              src={pkLogo} 
              alt="Prakhar Kumar Logo" 
              className="h-12 w-12 object-contain hover:scale-110 transition-transform cursor-pointer filter drop-shadow-glow-sky"
            />
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-1 glass-effect rounded-full px-6 py-2 border border-primary/20">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-glow-sky"
                        : "text-foreground hover:text-primary hover:bg-primary/10"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right side spacer for balance */}
          <div className="flex-1 flex justify-end">
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="hover:bg-primary/10 hover:text-primary transition-all"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-effect border-t border-border animate-fade-in">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-glow-sky"
                      : "text-foreground hover:text-primary hover:bg-primary/10"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
      )}

      {/* Scroll Progress Indicator */}
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-300"
        style={{
          width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`,
        }}
      />
    </nav>
  );
};
