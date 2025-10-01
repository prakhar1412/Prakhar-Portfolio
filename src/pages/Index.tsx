import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { AIChat } from "@/components/AIChat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <AIChat />
      
      {/* Footer */}
      <footer className="py-8 text-center border-t border-border">
        <p className="text-muted-foreground">
          © 2024 Prakhar Kumar. Built with React & Tailwind CSS
        </p>
      </footer>
    </div>
  );
};

export default Index;
