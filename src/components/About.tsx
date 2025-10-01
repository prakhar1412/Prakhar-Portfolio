import { Code2, Palette, Rocket } from "lucide-react";

const passions = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code with best practices and modern patterns.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating beautiful, intuitive interfaces that users love to interact with.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "Exploring cutting-edge technologies and pushing the boundaries of web development.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-glow-lavender">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {passions.map((passion, index) => (
            <div
              key={index}
              className="group glass-effect rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-glow-sky hover:scale-105 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6 inline-block p-4 rounded-xl bg-gradient-primary">
                <passion.icon className="h-8 w-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {passion.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {passion.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
