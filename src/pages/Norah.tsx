import CreatorLayout from "@/components/CreatorLayout";
import CraftCard from "@/components/CraftCard";
import { Button } from "@/components/ui/button";
import { MessageCircle, Heart, Zap } from "lucide-react";
import norahCrafts from "@/assets/norah-crafts.jpg";

const Norah = () => {
  return (
    <CreatorLayout 
      name="Norah" 
      emoji="🐍" 
      accentColor="bg-accent/40"
    >
      <section className="relative">
        <div className="absolute inset-0 paper-texture pointer-events-none" />
        <div className="section-container py-12 md:py-16">
          {/* About */}
          <div className="max-w-2xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/40 rounded-full px-4 py-2 mb-4">
              <Zap className="w-4 h-4 text-accent-foreground" />
              <span className="text-sm font-medium text-accent-foreground">Finger Crochet Expert</span>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Norah has mastered the art of finger crochet and specializes in making the most 
              adorable wiggly snakes! Each colorful snake is made by hand using just fingers 
              and yarn—no hooks needed. They're squishy, stretchy, and so much fun!
            </p>
          </div>

          {/* Crafts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <CraftCard 
              title="Rainbow Snakes"
              description="Colorful finger-crocheted snakes in rainbow patterns. Long, wiggly, and super fun to play with!"
              image={norahCrafts}
              badge="Fan Favorite"
            />
            <CraftCard 
              title="Solid Color Snakes"
              description="Pick your favorite color! These cozy snakes come in every shade you can imagine."
              image={norahCrafts}
            />
            <CraftCard 
              title="Custom Snakes"
              description="Want special colors or an extra-long snake? Norah can make it just for you!"
              image={norahCrafts}
              badge="Custom"
            />
          </div>

          {/* Fun Facts */}
          <div className="bg-secondary/50 rounded-3xl p-8 mb-12">
            <h3 className="font-display text-xl font-semibold text-foreground text-center mb-6">
              🎉 Fun Snake Facts
            </h3>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-display font-bold text-primary mb-2">100%</p>
                <p className="text-sm text-muted-foreground">Made with fingers—no hooks!</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-accent-foreground mb-2">∞</p>
                <p className="text-sm text-muted-foreground">Color combinations possible</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-primary mb-2">Extra</p>
                <p className="text-sm text-muted-foreground">Squishy & stretchy!</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-accent/30 rounded-3xl p-8 md:p-12">
            <Heart className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
              Need a Sssspecial Snake?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Tell Norah your favorite colors and she'll finger-crochet a one-of-a-kind snake just for you!
            </p>
            <Button variant="hero" size="lg">
              <MessageCircle className="w-5 h-5" />
              Request a Custom Snake
            </Button>
          </div>
        </div>
      </section>
    </CreatorLayout>
  );
};

export default Norah;
