import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Send, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import Header from "@/components/Header";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Message Sent! 💌",
        description: "Thanks for reaching out! We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative bg-primary/20 overflow-hidden">
        <div className="absolute inset-0 paper-texture pointer-events-none opacity-50" />
        <div className="section-container py-16 md:py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/30 rounded-full px-4 py-2 mb-6">
            <MessageCircle className="w-4 h-4 text-foreground" />
            <span className="text-sm font-medium text-foreground">Get in Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Let's <span className="text-primary">Connect</span>!
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a question, custom request, or just want to say hi? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-container py-16 md:py-24">
        <div className="max-w-xl mx-auto">
          <div className="bg-background border border-border rounded-3xl p-8 md:p-10 shadow-craft">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground">Send Us a Message</h2>
                <p className="text-muted-foreground text-sm">We'll get back to you as soon as we can!</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="What should we call you?"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Your Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your custom order, question, or just say hello!"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="rounded-xl min-h-[150px] resize-none"
                />
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Prefer to see us in person? Check out our{" "}
              <Link to="/events" className="text-primary hover:underline font-medium">
                upcoming events
              </Link>
              !
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="section-container text-center">
          <Link to="/" className="inline-flex items-center gap-2 hover:text-accent transition-colors">
            <Sparkles className="w-4 h-4" />
            <span className="font-display">Allen Family Creations</span>
          </Link>
          <p className="text-sm text-background/60 mt-2">
            Handmade with love by the Allen family
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
