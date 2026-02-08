import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Props {
  onYes: () => void;
}

export default function StepMad({ onYes }: Props) {
  const [yesScale, setYesScale] = useState(1);

  const handleNo = () => {
    setYesScale((s) => s + 0.3);
  };

  return (
    <div className="text-center max-w-md mx-auto animate-fade-up">
      <p className="text-xl md:text-2xl font-display mb-8 text-foreground leading-relaxed">
        are you mad cause i stayed up all week for this project? 🥺
      </p>

      <div className="flex gap-4 justify-center items-center">
        <Button
          onClick={onYes}
          size="lg"
          className="text-lg px-8 transition-transform duration-300"
          style={{ transform: `scale(${yesScale})` }}
        >
          Yes
        </Button>
        <Button
          onClick={handleNo}
          variant="outline"
          size="lg"
          className="text-lg px-8"
        >
          No
        </Button>
      </div>

      {yesScale > 1.3 && (
        <p className="mt-6 text-muted-foreground font-body italic animate-fade-up">
          just click yes already 😤💕
        </p>
      )}
    </div>
  );
}
