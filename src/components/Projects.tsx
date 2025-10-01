import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Fake News Detector",
    description: "ML-powered application that analyzes news articles to detect misinformation using NLP techniques.",
    tech: ["Python", "Machine Learning", "NLP", "Flask"],
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Reptile Interactive Cursor",
    description: "Creative web experience with a reptile-themed cursor that follows user movements with smooth animations.",
    tech: ["JavaScript", "CSS3", "Canvas API"],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "URL Shortener",
    description: "Fast and reliable URL shortening service with analytics tracking and custom short links.",
    tech: ["Node.js", "Express.js", "MongoDB", "React"],
    gradient: "from-pink-500/20 to-rose-500/20",
  },
  {
    title: "Rock, Paper, Scissors Game",
    description: "Interactive game with AI opponent, smooth animations, and score tracking system.",
    tech: ["JavaScript", "HTML5", "CSS3"],
    gradient: "from-cyan-500/20 to-teal-500/20",
  },
  {
    title: "AI Chatbot",
    description: "Intelligent conversational AI with context awareness and natural language understanding.",
    tech: ["Python", "Machine Learning", "React", "WebSockets"],
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  {
    title: "Recipe Finder App",
    description: "Discover recipes based on available ingredients with step-by-step cooking instructions.",
    tech: ["React", "REST APIs", "Node.js", "Express"],
    gradient: "from-orange-500/20 to-red-500/20",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-glow-sky">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group glass-effect border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow-lavender hover:scale-105 hover:-translate-y-2 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              
              <CardHeader>
                <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/20 hover:border-primary hover:bg-primary/10"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/20 hover:border-primary hover:bg-primary/10"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
