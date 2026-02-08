import { useState } from "react";
import { Button } from "@/components/ui/button";
import helloKittyCouple from "@/assets/hello-kitty-couple.jpg";
import { Mail } from "lucide-react";

interface Props {
  onOpen: () => void;
}

export default function StepEnvelope({ onOpen }: Props) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    setOpening(true);
    setTimeout(onOpen, 1200);
  };

  return (
    <div className="text-center max-w-md mx-auto animate-fade-up">
      <img
        src={helloKittyCouple}
        alt="Hello Kitty couple"
        className="w-48 mx-auto rounded-2xl shadow-soft mb-8"
      />

      <div
        className={`mx-auto mb-6 transition-all duration-700 ${
          opening ? "scale-110 rotate-3 opacity-0" : ""
        }`}
      >
        <div className="bg-card border-2 border-primary/30 rounded-2xl p-8 shadow-glow max-w-xs mx-auto">
          <Mail className="w-16 h-16 mx-auto text-primary mb-4 animate-gentle-float" />
          <p className="text-sm text-muted-foreground font-body">you have a letter 💌</p>
        </div>
      </div>

      <p className="text-xl font-display mb-6 text-foreground">
        open the letter cutiepie 💕
      </p>

      <Button
        onClick={handleOpen}
        size="lg"
        className="text-lg px-8"
        disabled={opening}
      >
        {opening ? "Opening... 💌" : "Open 💗"}
      </Button>
    </div>
  );
}
