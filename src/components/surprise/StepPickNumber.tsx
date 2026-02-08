import { useState } from "react";
import { Heart, Music } from "lucide-react";

interface Props {
  onPick: (songId: string) => void;
}

const choices = [
  {
    number: 1,
    country: "🇵🇭",
    songId: "N1wgZRCDlxU",
    poem: `Sa liwanag ng buwan,\nnasumpungan kita—\nang tanging tahanan\nng aking puso't diwa.`,
  },
  {
    number: 2,
    country: "🇪🇸",
    songId: "KMHsOFET9Lg",
    poem: `Bajo un cielo de estrellas,\nte encontré, mi amor—\ncada beso tuyo\nes mi canción mejor.`,
  },
  {
    number: 3,
    country: "🇬🇧",
    songId: "p_Fk9Cq-_6I",
    poem: `I had all and then most of you,\nsome and now none of you—\nbut in the silence of the night,\nyou're still the only view.`,
  },
  {
    number: 4,
    country: "🇰🇷",
    songId: "xEeFrLSkMm8",
    poem: `너를 만난 그 순간부터\n세상이 달라졌어—\n내 마음속에 너만이\n영원히 살고 있어.`,
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
                <span className="text-2xl mt-2 block">{c.country}</span>
                <Music className="w-4 h-4 text-muted-foreground mx-auto mt-2 opacity-50" />
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="animate-fade-up space-y-6">
          <h2 className="text-3xl font-display text-primary">
            Number {selected!.number} {selected!.country}
          </h2>
          <div className="bg-card border border-primary/20 rounded-2xl p-6 shadow-soft">
            <p className="font-body text-foreground whitespace-pre-line leading-relaxed text-lg italic">
              {selected!.poem}
            </p>
          </div>
          <p className="text-muted-foreground text-sm">🎵 Listen closely… 🎵</p>
          <button
            onClick={() => onPick(selected!.songId)}
            className="mt-4 bg-primary text-primary-foreground px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
          >
            Continue 💕
          </button>
        </div>
      )}
    </div>
  );
}
