import { Link } from "react-router-dom";
import { Heart, Palette, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import lydiaImg from "@/assets/lydia-crafts.jpg";
import evelynImg from "@/assets/evelyn-crafts.jpg";
import norahImg from "@/assets/norah-crafts.jpg";
import hazelImg from "@/assets/hazel-crafts.jpg";

const creators = [
  {
    name: "Lydia",
    emoji: "🐕",
    image: lydiaImg,
    crafts: ["Dog toys", "Dog sticker journals", "Seasonal garland"],
    description: "Lydia loves dogs and brings that passion to her crafts! She creates fun toys for furry friends and adorable dog-themed journals.",
    accentColor: "bg-primary/20",
  },
  {
    name: "Evelyn",
    alias: "Ev the Yarn Dragon",
    emoji: "🐉",
    image: evelynImg,
    crafts: ["Crochet animals", "Doll clothing", "Painted journals"],
    description: "Also known as 'Ev the Yarn Dragon,' Evelyn creates magical crochet creatures, stylish doll outfits, and beautifully painted journals.",
    accentColor: "bg-lavender/40",
  },
  {
    name: "Norah",
    emoji: "🐍",
    image: norahImg,
    crafts: ["Finger crochet snakes"],
    description: "Norah is our snake specialist! She finger crochets colorful, squishy snakes that make perfect companions.",
    accentColor: "bg-accent/40",
  },
  {
    name: "Hazel",
    emoji: "🐱",
    image: hazelImg,
    crafts: ["Friendship bracelets", "Cat sticker journals"],
    description: "Hazel creates beautiful friendship bracelets and cat-themed sticker journals. Perfect for cat lovers and best friends!",
    accentColor: "bg-sky/40",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative bg-lavender/30 overflow-hidden">
        <div className="absolute inset-0 paper-texture pointer-events-none opacity-50" />
        <div className="section-container py-16 md:py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-lavender rounded-full px-4 py-2 mb-6">
            <Heart className="w-4 h-4 text-lavender-foreground" />
            <span className="text-sm font-medium text-lavender-foreground">Our Story</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Meet Our Little <span className="text-primary">Creators</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Allen Family Creations is a family-run craft business where the kids are the artists. 
            Each creator brings their own unique talents and imagination!
          </p>
        </div>
      </section>

      {/* Creators Grid */}
      <section className="section-container py-16 md:py-24">
        <div className="space-y-16">
          {creators.map((creator, index) => (
            <div 
              key={creator.name}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className={`relative ${creator.accentColor} rounded-3xl p-4`}>
                  <img 
                    src={creator.image} 
                    alt={`${creator.name}'s crafts`}
                    className="w-full aspect-[4/3] object-cover rounded-2xl shadow-craft"
                  />
                  <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-background flex items-center justify-center text-3xl shadow-playful">
                    {creator.emoji}
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 space-y-4">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  {creator.name}
                </h2>
                {creator.alias && (
                  <p className="text-lg text-primary font-medium italic">"{creator.alias}"</p>
                )}
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {creator.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {creator.crafts.map((craft) => (
                    <span 
                      key={craft}
                      className={`${creator.accentColor} px-4 py-2 rounded-full text-sm font-medium text-foreground`}
                    >
                      {craft}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary/30 relative">
        <div className="absolute inset-0 paper-texture pointer-events-none" />
        <div className="section-container py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-12">
            What Makes Us Special
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background rounded-2xl p-8 shadow-craft text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">Made with Love</h3>
              <p className="text-muted-foreground">Every craft is made with care and attention by our kids.</p>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-craft text-center">
              <div className="w-16 h-16 rounded-full bg-accent/40 flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">Kid-Created</h3>
              <p className="text-muted-foreground">All designs come from the imagination of our young artists.</p>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-craft text-center">
              <div className="w-16 h-16 rounded-full bg-sky/40 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-sky-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">One-of-a-Kind</h3>
              <p className="text-muted-foreground">No two crafts are exactly alike—each one is unique!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-container py-16 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Want to see our crafts in person?
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          Check out our upcoming events or get in touch for custom orders!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/events">
            <Button variant="hero" size="lg">See Our Events</Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg">Contact Us</Button>
          </Link>
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

export default About;
