import { Heart } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="section-container text-center">
        <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <Heart className="w-10 h-10 text-primary fill-primary mx-auto mb-6 animate-gentle-float" />
        </div>

        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-display font-medium text-foreground leading-tight mb-8 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          Happy Birthday,<br />
          <span className="text-primary italic">You</span>
        </h1>

        <p
          className="text-lg md:text-xl font-body text-muted-foreground max-w-xl mx-auto leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          I made this for you because I wanted you to have something that lasts a little longer
          than a text message. Something you can come back to whenever you need to remember
          that someone out here genuinely cares about you. So, happy birthday. I'm really glad
          you exist.
        </p>

        <div
          className="mt-12 animate-fade-up"
          style={{ animationDelay: "0.7s" }}
        >
          <a
            href="#why-you"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#why-you")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-blush-deep transition-colors duration-300 font-body"
          >
            scroll down
            <span className="animate-gentle-float inline-block">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
