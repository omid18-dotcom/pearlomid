import { useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";

interface Props {
  onYes: () => void;
}

export default function StepMarry({ onYes }: Props) {
  const noRef = useRef<HTMLButtonElement>(null);

  const escapeNo = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (!noRef.current) return;
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 60);
    noRef.current.style.position = "fixed";
    noRef.current.style.left = `${x}px`;
    noRef.current.style.top = `${y}px`;
    noRef.current.style.zIndex = "50";
  }, []);

  return (
    <div className="text-center max-w-md mx-auto animate-fade-up">
      <h1 className="text-4xl md:text-6xl font-display mb-4 text-primary">
        Will you marry me? 💍
      </h1>
      <p className="text-muted-foreground font-body mb-10 italic">
        i dare you to say no 😏
      </p>

      <div className="flex gap-6 justify-center">
        <Button onClick={onYes} size="lg" className="text-xl px-10 py-6">
          Yes 💕
        </Button>
        <Button
          ref={noRef}
          onMouseEnter={escapeNo}
          onTouchStart={escapeNo}
          variant="outline"
          size="lg"
          className="text-xl px-10 py-6"
        >
          No
        </Button>
      </div>
    </div>
  );
}
