import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useEffect, useState, useRef } from "react";

declare global {
  interface Window {
    VANTA: {
      BIRDS: (options: any) => any;
    };
  }
}

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const vantaRef = useRef<HTMLElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    setIsVisible(true);

    // Initialize Vanta effect
    const initVanta = () => {
      if (window.VANTA && vantaRef.current && !vantaEffect.current) {
        vantaEffect.current = window.VANTA.BIRDS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x0a1628,
          color1: 0x4dd0e1,
          color2: 0x9c27b0,
          colorMode: "lerp",
          birdSize: 1.0,
          wingSpan: 18.0,
          speedLimit: 3.0,
          separation: 40.0,
          alignment: 40.0,
          cohesion: 40.0,
          quantity: 5.0,
        });
      }
    };

    // Check if Vanta is already loaded
    if (window.VANTA) {
      initVanta();
    } else {
      // Wait for Vanta to load
      const checkVanta = setInterval(() => {
        if (window.VANTA) {
          clearInterval(checkVanta);
          initVanta();
        }
      }, 100);

      return () => clearInterval(checkVanta);
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={vantaRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Content */}
      <div
        className={`relative z-10 text-center px-4 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="inline-block mb-4 px-4 py-2 rounded-full glass-effect border border-primary/20">
          <span className="text-primary text-sm font-medium">
            Full Stack Developer
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-glow-sky font-sans">
          PRAKHAR KUMAR
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Full stack developer with a passion for creating modern, responsive,
          and efficient web applications. I enjoy blending design and
          functionality to deliver seamless user experiences while continuously
          exploring new tools and technologies.
        </p>

        <Button
          onClick={scrollToProjects}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-sky hover:shadow-glow-lavender transition-all duration-300 group"
        >
          View My Work
          <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};
