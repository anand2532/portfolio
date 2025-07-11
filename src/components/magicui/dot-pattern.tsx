import { cn } from "@/lib/utils";

export function DotPattern({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 opacity-[0.35]",
        className
      )}
      style={{
        backgroundImage:
          "radial-gradient(circle, color-mix(in srgb, var(--phosphor) 45%, transparent) 1px, transparent 1px)",
        backgroundSize: "18px 18px",
        maskImage:
          "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent)",
        WebkitMaskImage:
          "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent)",
      }}
    />
  );
}
