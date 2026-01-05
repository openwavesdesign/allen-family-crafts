import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CreatorLayoutProps {
  children: ReactNode;
  name: string;
  tagline?: string;
  emoji: string;
  accentColor: string;
}

const CreatorLayout = ({ children, name, tagline, emoji, accentColor }: CreatorLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="section-container py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
            </Link>
            <div className="h-6 w-px bg-border" />
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-display text-lg font-semibold text-foreground hidden sm:inline">Allen Family Creations</span>
            </Link>
          </div>
          <Link to="/">
            <Button variant="outline" size="sm" className="gap-2">
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Banner */}
      <section className={`relative ${accentColor} overflow-hidden`}>
        <div className="absolute inset-0 paper-texture pointer-events-none opacity-50" />
        <div className="section-container py-12 md:py-16 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-background/80 backdrop-blur-sm text-4xl mb-4 shadow-craft">
            {emoji}
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2">
            {name}'s Crafts
          </h1>
          {tagline && (
            <p className="text-lg text-muted-foreground italic">"{tagline}"</p>
          )}
        </div>
      </section>

      {/* Content */}
      {children}

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

export default CreatorLayout;
