import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Bot, X, Send } from "lucide-react";

export const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! I'm Prakhar's AI Assistant. Want me to walk you through his projects?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { role: "user", content: input }]);
    
    // Simulate AI response
    setTimeout(() => {
      let response = "I can help you navigate through Prakhar's portfolio!";
      
      const lowerInput = input.toLowerCase();
      if (lowerInput.includes("projects")) {
        response = "Prakhar has built several exciting projects including a Fake News Detector using ML, an AI Chatbot, and a Recipe Finder App. Would you like to know more about any specific project?";
      } else if (lowerInput.includes("skills")) {
        response = "Prakhar specializes in Full Stack Development with expertise in JavaScript, React.js, Node.js, Python, and Machine Learning. He's also proficient in building RESTful APIs and responsive web designs.";
      } else if (lowerInput.includes("contact")) {
        response = "You can reach Prakhar at prakhar14123@gmail.com, connect on LinkedIn, or check out his GitHub profile. Would you like me to scroll to the contact section?";
      } else if (lowerInput.includes("who")) {
        response = "Prakhar Kumar is a passionate Full Stack Developer who creates modern, responsive web applications by blending design and functionality.";
      }
      
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
    }, 500);
    
    setInput("");
  };

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-gradient-to-r from-primary to-secondary shadow-glow-sky hover:shadow-glow-lavender transition-all duration-300 hover:scale-110 z-50"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6 animate-pulse-glow" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-96 h-[500px] glass-effect border-primary/30 shadow-glow-sky z-50 flex flex-col">
          <div className="p-4 border-b border-border bg-gradient-primary rounded-t-lg">
            <div className="flex items-center gap-3">
              <Bot className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-bold text-foreground">AI Assistant</h3>
                <p className="text-xs text-muted-foreground">Always here to help</p>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground ml-4"
                      : "bg-muted text-foreground mr-4"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask me anything..."
                className="bg-background/50 border-border focus:border-primary"
              />
              <Button
                onClick={handleSend}
                size="icon"
                className="bg-primary hover:bg-primary/90 shadow-glow-sky"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};
