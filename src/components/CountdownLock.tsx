import { useState, useEffect } from "react";
import { Heart, Sparkles, Star } from "lucide-react";

interface Props {
  onUnlock: () => void;
}

const TARGET_DATE = new Date("2026-02-10T00:00:00+08:00"); // Philippines time (UTC+8)

const poems = [
  {
    text: "In every heartbeat, I find your name,\nIn every sunrise, you're my flame.\nNo distance too far, no night too long,\nWith you, my love, is where I belong. 💕",
    author: "— Omid, for his queen 👑",
  },
  {
    text: "You are the poem I never knew\nI needed to read,\nthe song I never knew\nI needed to hear. 🎶",
    author: "— written in my heart for you 🤍",
  },
  {
    text: "If I had a flower for every time\nyou made me smile,\nI'd have an endless garden\nstretching mile after mile. 🌸",
    author: "— your Omid, always 💗",
  },
  {
    text: "They say home is a place,\nbut I found mine in your embrace.\nYour laugh, your eyes, your gentle grace,\nYou are my favorite place. 🏡",
    author: "— forever yours, Omid 💕",
  },
  {
    text: "I don't need the stars to shine,\nI don't need the moon at night,\nBecause your smile alone, mi esposa,\nis my guiding light. ✨",
    author: "— Omid, counting the seconds 🤍",
  },
  {
    text: "Before you, days were ordinary,\nNow every moment is extraordinary.\nYou turned my world from grey to gold,\nA love story forever to be told. 💛",
    author: "— with all my love, Omid 🌹",
  },
];

function getPhilippinesNow() {
  const now = new Date();
  const phOffset = 8 * 60;
  const localOffset = now.getTimezoneOffset();
  return new Date(now.getTime() + (phOffset + localOffset) * 60000);
}

function getTimeLeft() {
  const now = getPhilippinesNow();
  const diff = TARGET_DATE.getTime() - now.getTime();
  if (diff <= 0) return null;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

export default function CountdownLock({ onUnlock }: Props) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);
  const [poemIndex, setPoemIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      const tl = getTimeLeft();
      if (!tl) {
        clearInterval(timer);
        onUnlock();
      }
      setTimeLeft(tl);
    }, 1000);
    return () => clearInterval(timer);
  }, [onUnlock]);

  // Rotate poems every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setPoemIndex((i) => (i + 1) % poems.length);
        setFade(true);
      }, 500);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) return null;

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Floating decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-primary/20 animate-pulse"
            style={{
              width: 16 + Math.random() * 20,
              height: 16 + Math.random() * 20,
              top: `${10 + Math.random() * 80}%`,
              left: `${5 + Math.random() * 90}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
        {[...Array(4)].map((_, i) => (
          <Sparkles
            key={`s-${i}`}
            className="absolute text-accent-foreground/15 animate-pulse"
            style={{
              width: 14 + Math.random() * 16,
              height: 14 + Math.random() * 16,
              top: `${15 + Math.random() * 70}%`,
              left: `${10 + Math.random() * 80}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="text-center mb-8 animate-fade-up relative z-10">
        <Star className="w-8 h-8 text-primary mx-auto mb-3 animate-pulse" />
        <h1 className="text-3xl md:text-5xl font-display text-foreground mb-2">
          Something Special is Coming 💕
        </h1>
        <p className="text-muted-foreground font-body text-lg">
          patience, mi esposa... the magic begins soon 🤍
        </p>
      </div>

      {/* Countdown */}
      <div className="grid grid-cols-4 gap-3 md:gap-6 mb-10 relative z-10">
        {[
          { label: "Days", value: timeLeft.days },
          { label: "Hours", value: timeLeft.hours },
          { label: "Minutes", value: timeLeft.minutes },
          { label: "Seconds", value: timeLeft.seconds },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-card border border-primary/20 rounded-2xl p-4 md:p-6 text-center shadow-soft min-w-[70px] md:min-w-[100px]"
          >
            <span className="text-3xl md:text-5xl font-display text-primary block tabular-nums">
              {String(item.value).padStart(2, "0")}
            </span>
            <span className="text-xs md:text-sm text-muted-foreground font-body mt-1 block">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Date info */}
      <p className="text-sm text-muted-foreground mb-8 relative z-10">
        🗓️ February 10, 2026 — Philippines Time
      </p>

      {/* Rotating poems */}
      <div className="max-w-md mx-auto relative z-10">
        <div
          className={`bg-card border border-primary/15 rounded-2xl p-6 shadow-soft transition-all duration-500 ${
            fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <Heart className="w-5 h-5 text-primary mx-auto mb-3" />
          <p className="font-body text-foreground whitespace-pre-line leading-relaxed text-center italic">
            {poems[poemIndex].text}
          </p>
          <p className="text-xs text-muted-foreground mt-4 text-center">
            {poems[poemIndex].author}
          </p>
        </div>

        {/* Poem dots */}
        <div className="flex justify-center gap-1.5 mt-4">
          {poems.map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === poemIndex ? "bg-primary w-4" : "bg-primary/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Footer message */}
      <p className="text-xs text-muted-foreground mt-10 text-center relative z-10">
        looooob yooouuuuu so much 💗 — Omid
      </p>
    </div>
  );
}
