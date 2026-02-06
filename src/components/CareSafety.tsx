import { useScrollFade } from "@/hooks/useScrollFade";
import { Shield, Heart, Sparkles } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Your feelings are always valid here",
    text: "Whatever you feel, whenever you feel it — there's no judgment. You don't have to explain yourself or apologize for having a hard day. You're allowed to just feel things.",
  },
  {
    icon: Shield,
    title: "Your boundaries are respected",
    text: "If you need space, take it. If something doesn't feel right, say so. I'll never push. Your comfort matters more than any conversation or plan.",
  },
  {
    icon: Sparkles,
    title: "You're safe to be yourself",
    text: "The messy, uncertain, figuring-it-out version of you is just as welcome as the put-together version. You don't have to earn kindness by being perfect.",
  },
];

export default function CareSafety() {
  const ref = useScrollFade();

  return (
    <section id="care" className="py-20 md:py-28 bg-secondary/50">
      <div ref={ref} className="section-fade section-container">
        <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-4">
          Care & Safety
        </h2>
        <p className="text-muted-foreground font-body mb-12 max-w-lg">
          Some things I want you to always feel sure about when it comes to us.
        </p>

        <div className="grid gap-6 md:gap-8">
          {values.map((v, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border/50"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                  <v.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-medium text-foreground mb-2">
                    {v.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {v.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
