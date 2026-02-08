import { useState } from "react";
import StepPickNumber from "@/components/surprise/StepPickNumber";
import StepAmIGay from "@/components/surprise/StepAmIGay";
import StepTease from "@/components/surprise/StepTease";
import StepMad from "@/components/surprise/StepMad";
import StepSorry from "@/components/surprise/StepSorry";
import StepMarry from "@/components/surprise/StepMarry";
import StepAnniversary from "@/components/surprise/StepAnniversary";
import StepEnvelope from "@/components/surprise/StepEnvelope";
import StepLetter from "@/components/surprise/StepLetter";

const SurpriseFlow = () => {
  const [step, setStep] = useState(0);
  const [songId, setSongId] = useState<string | null>(null);

  const next = () => setStep((s) => s + 1);

  const handleSongPick = (id: string) => {
    setSongId(id);
    next();
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      {/* Background music player */}
      {songId && (
        <iframe
          className="fixed top-0 left-0 w-0 h-0 pointer-events-none opacity-0"
          src={`https://www.youtube.com/embed/${songId}?autoplay=1&loop=1&playlist=${songId}&controls=0`}
          allow="autoplay; encrypted-media"
          title="Background music"
        />
      )}

      {step === 0 && <StepPickNumber onPick={handleSongPick} />}
      {step === 1 && <StepAmIGay onNo={next} />}
      {step === 2 && <StepTease onNext={next} />}
      {step === 3 && <StepMad onYes={next} />}
      {step === 4 && <StepSorry onNext={next} />}
      {step === 5 && <StepMarry onYes={next} />}
      {step === 6 && <StepAnniversary onCorrect={next} />}
      {step === 7 && <StepEnvelope onOpen={next} />}
      {step === 8 && <StepLetter />}
    </div>
  );
};

export default SurpriseFlow;
