import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Props {
  onCorrect: () => void;
}

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export default function StepAnniversary({ onCorrect }: Props) {
  const [phase, setPhase] = useState<"month" | "date" | "year">("month");
  const [error, setError] = useState("");
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    const val = input.trim().toLowerCase();
    setError("");

    if (phase === "month") {
      if (val === "january" || val === "1" || val === "jan") {
        setPhase("date");
        setInput("");
      } else {
        setError("hmm try again cutie 🤔");
      }
    } else if (phase === "date") {
      if (val === "24") {
        setPhase("year");
        setInput("");
      } else {
        setError("that's not right baby 🥺");
      }
    } else if (phase === "year") {
      if (val === "2025" || val === "25") {
        onCorrect();
      } else {
        setError("are you sure about that? 😤");
      }
    }
  };

  const labels = {
    month: "what month is our anniversary? 🗓️",
    date: "what date? 📅",
    year: "what year? 💕",
  };

  return (
    <div className="text-center max-w-md mx-auto animate-fade-up">
      <h2 className="text-2xl md:text-3xl font-display mb-2 text-foreground">
        she said yes!! 🎉💍
      </h2>
      <p className="text-lg font-body mb-8 text-muted-foreground">
        now tell me...
      </p>

      <p className="text-xl font-display mb-6 text-foreground">
        {labels[phase]}
      </p>

      {phase === "month" ? (
        <div className="grid grid-cols-3 gap-2 mb-4">
          {MONTHS.map((m) => (
            <Button
              key={m}
              variant={input.toLowerCase() === m.toLowerCase() ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setInput(m);
                setError("");
              }}
            >
              {m}
            </Button>
          ))}
        </div>
      ) : (
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setError("");
          }}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          className="w-32 mx-auto block text-center text-2xl font-display border-b-2 border-primary bg-transparent outline-none py-2 mb-4 text-foreground"
          placeholder="..."
          autoFocus
        />
      )}

      {error && (
        <p className="text-destructive font-body mb-4 animate-fade-up">{error}</p>
      )}

      <Button onClick={handleSubmit} size="lg" className="text-lg px-8 mt-2">
        {phase === "month" && !input ? "Pick a month" : "Submit 💗"}
      </Button>
    </div>
  );
}
