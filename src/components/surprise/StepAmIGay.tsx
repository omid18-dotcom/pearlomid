import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import catSad from "@/assets/cat-sad.jpg";
import catSad2 from "@/assets/cat-sad-2.jpg";

interface Props {
  onNo: () => void;
}

export default function StepAmIGay({ onNo }: Props) {
  const [sadCats, setSadCats] = useState<string[]>([]);
  const yesRef = useRef<HTMLButtonElement>(null);

  const handleYesHover = useCallback(() => {
    if (!yesRef.current) return;
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 60);
    yesRef.current.style.position = "fixed";
    yesRef.current.style.left = `${x}px`;
    yesRef.current.style.top = `${y}px`;
    yesRef.current.style.zIndex = "50";
  }, []);

  const handleYesClick = () => {
    setSadCats((prev) => [
      ...prev,
      prev.length % 2 === 0 ? catSad : catSad2,
    ]);
    handleYesHover();
  };

  return (
    <div className="text-center max-w-md mx-auto animate-fade-up">
      <h1 className="text-4xl md:text-5xl font-display mb-8 text-foreground">
        AM I GAY? 🤔
      </h1>

      <div className="flex gap-4 justify-center mb-8">
        <Button
          ref={yesRef}
          onMouseEnter={handleYesHover}
          onTouchStart={handleYesHover}
          onClick={handleYesClick}
          variant="outline"
          size="lg"
          className="text-lg px-8"
        >
          Yes
        </Button>
        <Button
          onClick={onNo}
          size="lg"
          className="text-lg px-8"
        >
          No
        </Button>
      </div>

      {sadCats.length > 0 && (
        <div className="space-y-4 animate-fade-up">
          <p className="text-muted-foreground font-body italic">
            why would you say that 😢
          </p>
          <div className="grid grid-cols-2 gap-3">
            {sadCats.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Sad cat"
                className="rounded-2xl shadow-soft w-full animate-fade-up"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
