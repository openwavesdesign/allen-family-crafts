import CreatorLayout from "@/components/CreatorLayout";
import CraftCard from "@/components/CraftCard";
import { Button } from "@/components/ui/button";
import { MessageCircle, Heart, Dog } from "lucide-react";
import lydiaCrafts from "@/assets/lydia-crafts.jpg";

const Lydia = () => {
  return (
    <CreatorLayout 
      name="Lydia" 
      emoji="🐕" 
      accentColor="bg-primary/20"
    >
      <section className="relative">
        <div className="absolute inset-0 paper-texture pointer-events-none" />
        <div className="section-container py-12 md:py-16">
          {/* About */}
          <div className="max-w-2xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
              <Dog className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Dog Lover & Crafter</span>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Lydia loves dogs and it shows in everything she makes! From handmade dog toys 
              that pups go crazy for, to adorable dog sticker journals, and beautiful seasonal 
              garlands to decorate your home—each piece is made with care and creativity.
            </p>
          </div>

          {/* Crafts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <CraftCard 
              title="Dog Toys"
              description="Handmade rope toys and soft plush toys that dogs love to play with. Durable and made with pet-safe materials."
              image={lydiaCrafts}
              badge="Popular!"
            />
            <CraftCard 
              title="Dog Sticker Journals"
              description="Cute journals decorated with adorable dog stickers—perfect for tracking pet memories or daily notes."
              image={lydiaCrafts}
            />
            <CraftCard 
              title="Seasonal Garland"
              description="Beautiful handmade garlands for every season—spring flowers, summer fun, fall leaves, and winter wonderland!"
              image={lydiaCrafts}
              badge="Seasonal"
            />
          </div>

          {/* CTA */}
          <div className="text-center bg-secondary/50 rounded-3xl p-8 md:p-12">
            <Heart className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
              Love Lydia's Crafts?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Custom orders are always welcome! Let Lydia create something special for you or your furry friend.
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

export default Lydia;
