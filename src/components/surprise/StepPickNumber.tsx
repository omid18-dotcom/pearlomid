import { useState } from "react";
import { Heart } from "lucide-react";

interface Props {
  onPick: () => void;
}

const choices = [
  {
    number: 1,
    message: `You are my today, my tomorrow,\nand every single day after that.\nI will never stop choosing you. 💕`,
    assurance: "You are my forever.",
  },
  {
    number: 2,
    message: `No matter how hard life gets,\nI promise to hold your hand through it all.\nYou'll never face anything alone. 🤍`,
    assurance: "I'll always be here.",
  },
  {
    number: 3,
    message: `You are the most beautiful thing\nthat ever happened to me.\nI fall in love with you every single day. 🌹`,
    assurance: "You are my everything.",
  },
  {
    number: 4,
    message: `Even on your worst days,\nyou are still the best thing in my life.\nI love you more than words can say. 💗`,
    assurance: "You are more than enough.",
  },
];

export default function StepPickNumber({ onPick }: Props) {
  const [picked, setPicked] = useState<number | null>(null);

  const handlePick = (idx: number) => {
    if (picked !== null) return;
    setPicked(idx);
  };

  const selected = picked !== null ? choices[picked] : null;

  return (
    <div className="text-center max-w-lg mx-auto animate-fade-up">
      {picked === null ? (
        <>
          <Heart className="w-10 h-10 text-primary mx-auto mb-4 animate-pulse" />
          <h1 className="text-3xl md:text-4xl font-display mb-3 text-foreground">
            Pick a Number 💕
          </h1>
          <p className="text-muted-foreground font-body mb-2 text-lg">
            Trust yourself!!
          </p>
          <p className="text-muted-foreground font-body mb-8 italic">
            Good luck 🍀
          </p>

          <div className="grid grid-cols-2 gap-4">
            {choices.map((c, i) => (
              <button
                key={c.number}
                onClick={() => handlePick(i)}
                className="group relative bg-card border-2 border-primary/30 hover:border-primary rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <span className="text-5xl font-display text-primary group-hover:scale-110 transition-transform block">
                  {c.number}
                </span>
                <span className="text-lg mt-2 block">💕</span>
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="animate-fade-up space-y-6">
          <Heart className="w-12 h-12 text-primary mx-auto animate-pulse" />
          <h2 className="text-3xl font-display text-primary">
            You picked {selected!.number} 💕
          </h2>
          <p className="text-sm text-muted-foreground italic">
            — {selected!.assurance} —
          </p>
          <div className="bg-card border border-primary/20 rounded-2xl p-6 shadow-soft">
            <p className="font-body text-foreground whitespace-pre-line leading-relaxed text-lg italic">
              {selected!.message}
            </p>
          </div>
          <p className="text-muted-foreground text-xs">From Omid, with all my heart 🤍</p>
          <button
            onClick={onPick}
            className="mt-4 bg-primary text-primary-foreground px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
          >
            Continue 💕
          </button>
        </div>
      )}
    </div>
  );
}
