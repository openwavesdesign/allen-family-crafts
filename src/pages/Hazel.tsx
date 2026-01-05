import CreatorLayout from "@/components/CreatorLayout";
import CraftCard from "@/components/CraftCard";
import { Button } from "@/components/ui/button";
import { MessageCircle, Heart, Cat } from "lucide-react";
import hazelCrafts from "@/assets/hazel-crafts.jpg";

const Hazel = () => {
  return (
    <CreatorLayout 
      name="Hazel" 
      emoji="🐱" 
      accentColor="bg-sky/40"
    >
      <section className="relative">
        <div className="absolute inset-0 paper-texture pointer-events-none" />
        <div className="section-container py-12 md:py-16">
          {/* About */}
          <div className="max-w-2xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-sky/40 rounded-full px-4 py-2 mb-4">
              <Cat className="w-4 h-4 text-sky-foreground" />
              <span className="text-sm font-medium text-sky-foreground">Bracelet & Journal Artist</span>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hazel loves making friendship bracelets and decorating journals with cute cat stickers! 
              Her bracelets feature beautiful patterns and color combinations, while her cat journals 
              are purr-fect for any cat lover. Each piece is made with love and creativity!
            </p>
          </div>

          {/* Crafts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <CraftCard 
              title="Friendship Bracelets"
              description="Colorful woven bracelets in beautiful patterns. Perfect for sharing with your bestie!"
              image={hazelCrafts}
              badge="Most Popular"
            />
            <CraftCard 
              title="Beaded Bracelets"
              description="Cute beaded bracelets with letters, shapes, and charms. Customize with your name!"
              image={hazelCrafts}
            />
            <CraftCard 
              title="Cat Sticker Journals"
              description="Adorable journals covered with cute cat stickers. Great for drawing, writing, or doodling!"
              image={hazelCrafts}
              badge="Cat Lovers!"
            />
          </div>

          {/* Color Palette */}
          <div className="bg-secondary/50 rounded-3xl p-8 mb-12">
            <h3 className="font-display text-xl font-semibold text-foreground text-center mb-6">
              🎨 Popular Bracelet Colors
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Pink", "Purple", "Blue", "Teal", "Green", "Yellow", "Orange", "Red", "Rainbow"].map((color) => (
                <span 
                  key={color}
                  className="bg-background px-4 py-2 rounded-full text-sm font-medium text-foreground shadow-craft"
                >
                  {color}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-sky/30 rounded-3xl p-8 md:p-12">
            <Heart className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
              Want a Custom Bracelet or Journal?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Pick your colors and patterns! Hazel loves making custom friendship bracelets and decorated journals.
            </p>
            <Button variant="hero" size="lg">
              <MessageCircle className="w-5 h-5" />
              Request a Custom Craft
            </Button>
          </div>
        </div>
      </section>
    </CreatorLayout>
  );
};

export default Hazel;
