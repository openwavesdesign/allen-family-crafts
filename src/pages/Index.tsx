import { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Heart, Palette, Gift, Star, Truck, MessageCircle, Phone, Mail, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import heroCrafts from "@/assets/hero-crafts.jpg";
import craftCards from "@/assets/craft-cards.jpg";
import craftPaintings from "@/assets/craft-paintings.jpg";
import craftItems from "@/assets/craft-items.jpg";
const Index = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setIsSubmitting(true);
    // Simulate submission - replace with actual API call when backend is ready
    setTimeout(() => {
      toast({
        title: "You're on the list! 🎉",
        description: "We'll let you know about our markets and new creations."
      });
      setEmail("");
      setIsSubmitting(false);
    }, 500);
  };
  return <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="section-container py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-semibold text-foreground">Allen Family Creations</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="font-body text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#crafts" className="font-body text-muted-foreground hover:text-primary transition-colors">Crafts</a>
            <a href="#how-it-works" className="font-body text-muted-foreground hover:text-primary transition-colors">How It Works</a>
            <Button variant="default" size="sm">Get in Touch</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 paper-texture pointer-events-none" />
        <div className="section-container py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-secondary rounded-full px-4 py-2">
                <Heart className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-secondary-foreground">Made with love by our family</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight text-balance">
                Creative Crafts Made by Kids, with <span className="text-primary">Love</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Fun, colorful, and handmade crafts from the Allen family. Each piece is made with imagination, creativity, and lots of heart!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg">
                  <Palette className="w-5 h-5" />
                  See Our Creations
                </Button>
                <Button variant="outline" size="lg">
                  <MessageCircle className="w-5 h-5" />
                  Custom Request
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/30 via-secondary/30 to-lavender/30 rounded-3xl blur-2xl" />
              <img src={heroCrafts} alt="Colorful handmade crafts by the Allen family kids" className="relative rounded-3xl shadow-craft-hover w-full object-cover aspect-[4/3]" />
              <div className="absolute -bottom-4 -right-4 bg-accent rounded-2xl p-4 shadow-playful animate-bounce-soft">
                <Star className="w-8 h-8 text-accent-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-secondary/30 relative">
        <div className="absolute inset-0 paper-texture pointer-events-none" />
        <div className="section-container py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-lavender rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-lavender-foreground" />
              <span className="text-sm font-medium text-lavender-foreground">About Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Meet Our Creators
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Welcome to Allen Family Creations! We're a family-run craft business where the kids are the artists. 
              Each of our four creators brings their own unique talents and imagination to everything they make!
            </p>
            
            {/* Kids Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
              <Link to="/lydia" className="bg-background rounded-2xl p-6 shadow-craft space-y-3 hover:shadow-craft-hover transition-shadow group">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🐕</span>
                </div>
                <h3 className="font-display font-semibold text-foreground">Lydia</h3>
                <p className="text-sm text-muted-foreground">Dog toys, dog sticker journals & seasonal garland</p>
                <span className="inline-flex items-center gap-1 text-xs text-primary font-medium">
                  See crafts <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
              
              <Link to="/evelyn" className="bg-background rounded-2xl p-6 shadow-craft space-y-3 hover:shadow-craft-hover transition-shadow group">
                <div className="w-14 h-14 rounded-full bg-lavender/40 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🐉</span>
                </div>
                <h3 className="font-display font-semibold text-foreground">Evelyn</h3>
                
                <p className="text-sm text-muted-foreground">Crochet animals, doll clothing & painted journals</p>
                <span className="inline-flex items-center gap-1 text-xs text-primary font-medium">
                  See crafts <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
              
              <Link to="/norah" className="bg-background rounded-2xl p-6 shadow-craft space-y-3 hover:shadow-craft-hover transition-shadow group">
                <div className="w-14 h-14 rounded-full bg-accent/40 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🐍</span>
                </div>
                <h3 className="font-display font-semibold text-foreground">Sparrow</h3>
                <p className="text-sm text-muted-foreground">Finger crochet snakes</p>
                <span className="inline-flex items-center gap-1 text-xs text-primary font-medium">
                  See crafts <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
              
              <Link to="/hazel" className="bg-background rounded-2xl p-6 shadow-craft space-y-3 hover:shadow-craft-hover transition-shadow group">
                <div className="w-14 h-14 rounded-full bg-sky/40 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🐱</span>
                </div>
                <h3 className="font-display font-semibold text-foreground">Hazel</h3>
                <p className="text-sm text-muted-foreground">Friendship bracelets & cat sticker journals</p>
                <span className="inline-flex items-center gap-1 text-xs text-primary font-medium">
                  See crafts <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <span className="font-display font-medium text-foreground">Made with Love</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/40 flex items-center justify-center">
                  <Palette className="w-6 h-6 text-accent-foreground" />
                </div>
                <span className="font-display font-medium text-foreground">Kid-Created</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-sky/40 flex items-center justify-center">
                  <Star className="w-6 h-6 text-sky-foreground" />
                </div>
                <span className="font-display font-medium text-foreground">One-of-a-Kind</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Crafts Section */}
      <section id="crafts" className="relative">
        <div className="absolute inset-0 paper-texture pointer-events-none" />
        <div className="section-container py-16 md:py-24">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 bg-sky rounded-full px-4 py-2">
              <Gift className="w-4 h-4 text-sky-foreground" />
              <span className="text-sm font-medium text-sky-foreground">Our Creations</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Featured Crafts
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Browse some of our favorite handmade creations. Custom requests welcome!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="craft-card group">
              <div className="aspect-square overflow-hidden">
                <img alt="Handmade greeting cards" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/lovable-uploads/3362d692-f8cf-41e8-9826-71082405f743.jpg" />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-display text-xl font-semibold text-foreground">Crochet Animals </h3>
                <p className="text-muted-foreground">​Adopt a handmade crochet octopus, duck, bee, or emotional support pickle!                 </p>
              </div>
            </div>
            
            <div className="craft-card group">
              <div className="aspect-square overflow-hidden">
                <img alt="Kids' paintings and art" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/lovable-uploads/72bd42d5-8556-419f-aeff-ab841f151310.jpg" />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-display text-xl font-semibold text-foreground">Clothing and Jewelry </h3>
                <p className="text-muted-foreground">​Get matching friendship bracelets for you and your dolls or unique clothing items and accessories.                   </p>
              </div>
            </div>
            
            <div className="craft-card group">
              <div className="aspect-square overflow-hidden">
                <img alt="Handmade bracelets and keychains" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/lovable-uploads/dd003485-f951-4e5d-b115-c5be60bfeaa4.jpg" />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-display text-xl font-semibold text-foreground">Pens and Journals    </h3>
                <p className="text-muted-foreground">Each one is uniquely handmade by one of our kids. </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <p className="inline-flex items-center gap-2 bg-accent/30 rounded-full px-6 py-3 font-display font-medium text-foreground">
              <Sparkles className="w-5 h-5 text-primary" />
              Custom requests welcome! Let us create something special for you.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      

      {/* Newsletter Section */}
      <section id="newsletter" className="bg-sky/20 relative">
        <div className="absolute inset-0 paper-texture pointer-events-none" />
        <div className="section-container py-16 md:py-20">
          <div className="max-w-xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-sky rounded-full px-4 py-2">
              <Mail className="w-4 h-4 text-sky-foreground" />
              <span className="text-sm font-medium text-sky-foreground">Stay Updated</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Join Our Newsletter!
            </h2>
            <p className="text-muted-foreground text-lg">
              Be the first to know about our upcoming markets, new craft creations, and family news!
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} required className="flex-1 bg-background border-border rounded-full px-5 h-12" />
              <Button type="submit" variant="hero" size="lg" disabled={isSubmitting} className="rounded-full">
                <Send className="w-4 h-4" />
                {isSubmitting ? "Joining..." : "Subscribe"}
              </Button>
            </form>
            <p className="text-sm text-muted-foreground">
              We promise not to spam you—just crafty goodness! ✨
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      

      {/* Footer */}
      <footer className="bg-foreground text-background">
        <div className="section-container py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <span className="font-display text-lg font-semibold block">Allen Family Creations</span>
                <span className="text-sm text-background/70">Handmade with love by the Allen family</span>
              </div>
            </div>
            
            <div className="flex items-center gap-6 text-background/80">
              <a href="#" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">Contact Us</span>
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">Call Us</span>
              </a>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center">
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} Allen Family Creations. Made with ❤️ by our family.
            </p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;