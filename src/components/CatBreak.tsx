import { useScrollFade } from "@/hooks/useScrollFade";

interface CatBreakProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function CatBreak({ src, alt, caption }: CatBreakProps) {
  const ref = useScrollFade();

  return (
    <div ref={ref} className="section-fade py-12 md:py-16">
      <div className="section-container">
        <div className="max-w-md mx-auto">
          <img
            src={src}
            alt={alt}
            className="cat-image w-full h-auto"
            loading="lazy"
          />
          {caption && (
            <p className="text-center text-sm text-muted-foreground mt-3 font-body italic">
              {caption}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
