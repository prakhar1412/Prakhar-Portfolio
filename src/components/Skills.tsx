import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "JavaScript", level: 95 },
  { name: "HTML5 & CSS3", level: 90 },
  { name: "React.js", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Express.js", level: 85 },
  { name: "Python", level: 80 },
  { name: "Machine Learning", level: 75 },
  { name: "RESTful APIs", level: 90 },
  { name: "Git & GitHub", level: 95 },
  { name: "Responsive Design", level: 95 },
];

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-glow-lavender">
          Skills & Technologies
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="glass-effect rounded-xl p-6 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-glow-sky"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-foreground font-medium">{skill.name}</span>
                <span className="text-primary text-sm font-bold">{skill.level}%</span>
              </div>
              
              <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: isVisible ? `${skill.level}%` : "0%",
                    boxShadow: "0 0 10px hsl(var(--primary))",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
