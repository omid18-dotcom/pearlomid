import { useState } from "react";
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

  const next = () => setStep((s) => s + 1);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      {step === 0 && <StepAmIGay onNo={next} />}
      {step === 1 && <StepTease onNext={next} />}
      {step === 2 && <StepMad onYes={next} />}
      {step === 3 && <StepSorry onNext={next} />}
      {step === 4 && <StepMarry onYes={next} />}
      {step === 5 && <StepAnniversary onCorrect={next} />}
      {step === 6 && <StepEnvelope onOpen={next} />}
      {step === 7 && <StepLetter />}
    </div>
  );
};

export default SurpriseFlow;
