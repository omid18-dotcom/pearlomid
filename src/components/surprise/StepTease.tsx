import { Button } from "@/components/ui/button";
import catNaughty from "@/assets/cat-naughty.jpg";

interface Props {
  onNext: () => void;
}

export default function StepTease({ onNext }: Props) {
  return (
    <div className="text-center max-w-md mx-auto animate-fade-up">
      <p className="text-xl md:text-2xl font-display mb-6 text-foreground leading-relaxed">
        I know you always tease me and i love it when you tease me. i am your man only 💕
      </p>

      <img
        src={catNaughty}
        alt="Naughty cat"
        className="rounded-2xl shadow-soft w-64 mx-auto mb-8"
      />

      <Button onClick={onNext} size="lg" className="text-lg px-8">
        Next →
      </Button>
    </div>
  );
}
