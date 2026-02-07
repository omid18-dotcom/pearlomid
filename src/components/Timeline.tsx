import { useScrollFade } from "@/hooks/useScrollFade";

const memories = [
  {
    label: "The beginning",
    title: "When we first talked",
    text: "Honestly there was a magnetic attention you had. I felt something the 1st time i heard your voice. You were busy talking with BBO. and i was teasing you. i really liked it when you give me attention.",
  },
  {
    label: "That one night",
    title: "When you stayed up with me",
    text: "I was having one of those nights where everything felt wrong and I couldn't explain why. You didn't try to fix it. You just stayed. You sent stupid memes and talked about nothing and somehow that was exactly everything",
  },
  {
    label: "A quiet moment",
    title: "When I realized I trusted you",
    text: "It wasn't a big moment. I just caught myself telling you something I hadn't told anyone else, and it didn't feel scary. It felt natural. That's when I knew this was different.",
  },
  {
    label: "A small thing",
    title: "When you remembered",
    text: "I mentioned something small — once, in passing — and weeks later you brought it up like it mattered. Because to you, it did. I don't think you know how much that meant to me.",
  },
  {
    label: "Recently",
    title: "When I started making this",
    text: "I sat down and thought about what I wanted to say to you, and I realized I had so much. Not grand declarations, just a lot of small, honest things that had been building up quietly. So I made this.",
  },
];

export default function Timeline() {
  const ref = useScrollFade();

  return (
    <section id="memories" className="py-20 md:py-28">
      <div ref={ref} className="section-fade section-container">
        <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-4">
          Moments I Keep
        </h2>
        <p className="text-muted-foreground font-body mb-14 max-w-lg">
          Not all memories are big. Some of the best ones are barely noticeable when they happen.
        </p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-5 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {memories.map((m, i) => (
              <div key={i} className="relative pl-12 md:pl-14">
                {/* Dot */}
                <div className="absolute left-2.5 md:left-3.5 top-1.5 w-3 h-3 rounded-full bg-primary/60 border-2 border-background" />

                <span className="text-xs font-body uppercase tracking-widest text-primary/70 mb-1 block">
                  {m.label}
                </span>
                <h3 className="font-display text-lg font-medium text-foreground mb-2">
                  {m.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {m.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
