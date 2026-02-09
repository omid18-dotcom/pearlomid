import { useState, useCallback } from "react";
import CountdownLock from "@/components/CountdownLock";
import BirthdayReveal from "@/components/BirthdayReveal";
import StepPickNumber from "@/components/surprise/StepPickNumber";
import StepAmIGay from "@/components/surprise/StepAmIGay";
import StepTease from "@/components/surprise/StepTease";
import StepMad from "@/components/surprise/StepMad";
import StepSorry from "@/components/surprise/StepSorry";
import StepMarry from "@/components/surprise/StepMarry";
import StepAnniversary from "@/components/surprise/StepAnniversary";
import StepEnvelope from "@/components/surprise/StepEnvelope";
import StepLetter from "@/components/surprise/StepLetter";

function isPhilippinesBirthdayYet() {
  const now = new Date();
  const phOffset = 8 * 60;
  const localOffset = now.getTimezoneOffset();
  const phNow = new Date(now.getTime() + (phOffset + localOffset) * 60000);
  return phNow >= new Date("2026-02-10T00:00:00+08:00");
}

const SurpriseFlow = () => {
  const [unlocked, setUnlocked] = useState(isPhilippinesBirthdayYet);
  const [revealed, setRevealed] = useState(false);
  const [step, setStep] = useState(0);

  const handleUnlock = useCallback(() => setUnlocked(true), []);
  const next = () => setStep((s) => s + 1);

  if (!unlocked) {
    return <CountdownLock onUnlock={handleUnlock} />;
  }

  if (!revealed) {
    return <BirthdayReveal onContinue={() => setRevealed(true)} />;
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      {step === 0 && <StepPickNumber onPick={next} />}
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
