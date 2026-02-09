import { useState } from "react";
import { Heart, Sparkles } from "lucide-react";

interface Props {
  onContinue: () => void;
}

export default function BirthdayReveal({ onContinue }: Props) {
  const [showButton, setShowButton] = useState(false);

  // Show continue button after animation
  setTimeout(() => setShowButton(true), 3000);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-primary/25 animate-bounce"
            style={{
              width: 12 + Math.random() * 24,
              height: 12 + Math.random() * 24,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${1.5 + Math.random() * 2}s`,
            }}
          />
        ))}
        {[...Array(8)].map((_, i) => (
          <Sparkles
            key={`sp-${i}`}
            className="absolute text-accent-foreground/20 animate-pulse"
            style={{
              width: 10 + Math.random() * 18,
              height: 10 + Math.random() * 18,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="text-center relative z-10 animate-fade-up">
        <div className="text-6xl mb-6">🎂</div>
        <h1 className="text-4xl md:text-6xl font-display text-foreground mb-4 leading-tight">
          HAPPY BIRTHDAY
        </h1>
        <h2 className="text-3xl md:text-5xl font-display text-primary mb-6">
          MI ESPOSA 🤍
        </h2>
        <p className="text-lg text-muted-foreground font-body mb-2">
          today is YOUR day, my love
        </p>
        <p className="text-muted-foreground font-body italic">
          everything here was made just for you 💕
        </p>

        {showButton && (
          <button
            onClick={onContinue}
            className="mt-10 bg-primary text-primary-foreground px-10 py-4 rounded-full text-xl font-display hover:opacity-90 transition-all duration-300 animate-fade-up shadow-soft"
          >
            Open Your Surprise 💝
          </button>
        )}
      </div>
    </div>
  );
}
