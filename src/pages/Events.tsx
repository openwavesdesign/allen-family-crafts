import { Link } from "react-router-dom";
import { Sparkles, Calendar, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

const upcomingEvents = [
  {
    name: "Spring Craft Fair",
    date: "March 15, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Community Center",
    description: "Join us at the annual Spring Craft Fair! We'll have all our favorite creations available.",
  },
  {
    name: "Neighborhood Market",
    date: "April 5, 2025",
    time: "9:00 AM - 2:00 PM",
    location: "Oak Street Park",
    description: "A fun outdoor market with local crafters and treats. Stop by and say hi!",
  },
];

const Events = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative bg-accent/30 overflow-hidden">
        <div className="absolute inset-0 paper-texture pointer-events-none opacity-50" />
        <div className="section-container py-16 md:py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-accent rounded-full px-4 py-2 mb-6">
            <Calendar className="w-4 h-4 text-accent-foreground" />
            <span className="text-sm font-medium text-accent-foreground">Where to Find Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Upcoming <span className="text-primary">Events</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Come see our crafts in person! We love meeting our customers at local markets and fairs.
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="section-container py-16 md:py-24">
        {upcomingEvents.length > 0 ? (
          <div className="space-y-8 max-w-3xl mx-auto">
            {upcomingEvents.map((event) => (
              <div 
                key={event.name}
                className="bg-background border border-border rounded-2xl p-6 md:p-8 shadow-craft hover:shadow-craft-hover transition-shadow"
              >
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                  {event.name}
                </h2>
                <div className="grid sm:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="text-muted-foreground">{event.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-10 h-10 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-display font-bold text-foreground mb-2">
              No Events Scheduled Yet
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Check back soon! We're always planning our next market appearance.
            </p>
          </div>
        )}
      </section>

      {/* Newsletter CTA */}
      <section className="bg-sky/20 relative">
        <div className="absolute inset-0 paper-texture pointer-events-none" />
        <div className="section-container py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Don't Miss an Event!
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
            Sign up for our newsletter to get notified about upcoming markets and new craft creations.
          </p>
          <Link to="/#newsletter">
            <Button variant="hero" size="lg">Join Our Newsletter</Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="section-container text-center">
          <Link to="/" className="inline-flex items-center gap-2 hover:text-accent transition-colors">
            <Sparkles className="w-4 h-4" />
            <span className="font-display">Mystical Makers</span>
          </Link>
          <p className="text-sm text-background/60 mt-2">
            Handmade with love by Mystical Makers
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Events;
