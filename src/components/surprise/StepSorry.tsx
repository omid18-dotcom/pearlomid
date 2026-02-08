import { Button } from "@/components/ui/button";
import catsCutePair from "@/assets/cats-cute-pair.jpg";
import catSad from "@/assets/cat-sad.jpg";

interface Props {
  onNext: () => void;
}

export default function StepSorry({ onNext }: Props) {
  return (
    <div className="text-center max-w-md mx-auto animate-fade-up">
      <p className="text-xl md:text-2xl font-display mb-2 text-foreground leading-relaxed">
        hahaha i didn't want to make you mad.
      </p>
      <p className="text-2xl md:text-3xl font-display mb-2 text-primary">
        SORRY my cutie pie. 🥺
      </p>
      <p className="text-lg font-body mb-2 text-foreground leading-relaxed">
        SORRY i didn't want to reveal my project
      </p>
      <p className="text-lg font-body mb-6 text-foreground leading-relaxed">
        pleaseeee accept my apology
      </p>
      <p className="text-2xl md:text-3xl font-display mb-8 text-primary">
        i looooob yooouuuuu 💗
      </p>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <img src={catsCutePair} alt="Cute cats" className="rounded-2xl shadow-soft w-full" />
        <img src={catSad} alt="Cute sad cat" className="rounded-2xl shadow-soft w-full" />
      </div>

      <Button onClick={onNext} size="lg" className="text-lg px-8">
        Next →
      </Button>
    </div>
  );
}
