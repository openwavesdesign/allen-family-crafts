import CreatorLayout from "@/components/CreatorLayout";
import CraftCard from "@/components/CraftCard";
import { Button } from "@/components/ui/button";
import { MessageCircle, Heart, Sparkles } from "lucide-react";
import evelynCrafts from "@/assets/evelyn-crafts.jpg";

const Evelyn = () => {
  return (
    <CreatorLayout 
      name="Evelyn" 
      tagline="Ev the Yarn Dragon"
      emoji="🐉" 
      accentColor="bg-lavender/40"
    >
      <section className="relative">
        <div className="absolute inset-0 paper-texture pointer-events-none" />
        <div className="section-container py-12 md:py-16">
          {/* About */}
          <div className="max-w-2xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-lavender/40 rounded-full px-4 py-2 mb-4">
              <Sparkles className="w-4 h-4 text-lavender-foreground" />
              <span className="text-sm font-medium text-lavender-foreground">Master Yarn Crafter</span>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Meet Evelyn, also known as "Ev the Yarn Dragon"! She's a crochet whiz who brings 
              adorable animals to life with yarn, creates tiny outfits for dolls, and hand-paints 
              beautiful journals. Every piece has its own personality and charm!
            </p>
          </div>

          {/* Crafts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <CraftCard 
              title="Crochet Animals"
              description="Adorable handmade stuffed animals—from bunnies and bears to dragons and dinosaurs. Each one is unique!"
              image={evelynCrafts}
              badge="Bestseller"
            />
            <CraftCard 
              title="Doll Clothing"
              description="Tiny crocheted outfits for dolls of all sizes. Dresses, sweaters, accessories, and more!"
              image={evelynCrafts}
            />
            <CraftCard 
              title="Painted Journals"
              description="Hand-painted journals with colorful designs—perfect for drawing, writing, or keeping secrets!"
              image={evelynCrafts}
              badge="Custom Art"
            />
          </div>

          {/* CTA */}
          <div className="text-center bg-lavender/30 rounded-3xl p-8 md:p-12">
            <Heart className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
              Want a Custom Creation?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              The Yarn Dragon loves taking custom requests! Tell Evelyn what animal or design you'd like.
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

export default Evelyn;
