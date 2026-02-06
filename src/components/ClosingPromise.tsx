import { useScrollFade } from "@/hooks/useScrollFade";
import { Heart } from "lucide-react";

export default function ClosingPromise() {
  const ref = useScrollFade();

  return (
    <section id="promise" className="py-20 md:py-28 bg-secondary/50">
      <div ref={ref} className="section-fade section-container text-center">
        <Heart className="w-8 h-8 text-primary fill-primary mx-auto mb-8 animate-gentle-float" />

        <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-10">
          My Promise to You
        </h2>

        <div className="max-w-2xl mx-auto space-y-6 text-base md:text-lg font-body text-secondary-foreground leading-relaxed text-left">
          <p>
            I'm not going to promise you that I'll always say the right thing, because I won't.
            I'll mess up. I'll say something clumsy when I mean something kind. I'll go quiet
            when I should speak up. I'll probably overthink a message for twenty minutes and
            then send something completely different.
          </p>

          <p>
            But here's what I can promise: I'll try. Genuinely, honestly try. Not the kind of
            trying that looks good but doesn't mean much — the kind that shows up on bad days
            too. The kind that remembers. The kind that pays attention.
          </p>

          <p>
            I promise to be honest with you, even when it's uncomfortable. To respect your
            space and your time. To celebrate the small things with you, not just the big ones.
            To be the person you can call at 2am, or not call at all, and either way we're okay.
          </p>

          <p>
            I promise to keep learning how to care about you better. Not because you ask me to,
            but because you deserve someone who keeps trying to understand you — not just once,
            but over and over, as you grow and change.
          </p>

          <p>
            You're not a project. You're not a responsibility. You're someone I chose to care
            about, and I keep choosing it, every single day.
          </p>

          <p className="text-primary italic font-display text-xl text-center pt-6">
            Happy birthday. I'm so glad you're here.
          </p>

          <p className="text-muted-foreground text-center text-sm pt-4">
            — with love, always
          </p>
        </div>
      </div>
    </section>
  );
}
