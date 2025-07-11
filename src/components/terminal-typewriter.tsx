"use client";

import { SITE } from "@/data/site";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function TerminalTypewriter({ className }: { className?: string }) {
  const lines = SITE.terminalLines;
  const [visibleLines, setVisibleLines] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    if (mq.matches) {
      setVisibleLines(lines.length);
      setCharIndex(lines[lines.length - 1]?.length ?? 0);
    }
  }, [lines]);

  useEffect(() => {
    if (reduced) return;
    if (visibleLines >= lines.length) return;

    const current = lines[visibleLines];
    if (charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 18);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setVisibleLines((v) => v + 1);
      setCharIndex(0);
    }, 320);
    return () => clearTimeout(t);
  }, [charIndex, visibleLines, lines, reduced]);

  return (
    <div
      className={cn(
        "panel-blueprint font-mono text-xs sm:text-sm leading-relaxed p-4 sm:p-5 overflow-hidden",
        className
      )}
      aria-label="Terminal session"
    >
      <div className="flex items-center gap-2 mb-3 border-b border-border pb-2 text-muted-foreground">
        <span className="size-2 rounded-full bg-destructive/80" />
        <span className="size-2 rounded-full bg-primary/80" />
        <span className="size-2 rounded-full bg-[var(--phosphor)]/80" />
        <span className="ml-2 text-[10px] uppercase tracking-widest">
          ttyUSB0 — 115200 8N1
        </span>
      </div>
      <div className="space-y-1 min-h-[9.5rem]">
        {lines.slice(0, visibleLines).map((line, i) => (
          <p
            key={i}
            className={
              line.startsWith("$")
                ? "text-[var(--phosphor)]"
                : "text-muted-foreground"
            }
          >
            {line}
          </p>
        ))}
        {visibleLines < lines.length && (
          <p
            className={cn(
              "terminal-cursor",
              lines[visibleLines].startsWith("$")
                ? "text-[var(--phosphor)]"
                : "text-muted-foreground"
            )}
          >
            {lines[visibleLines].slice(0, charIndex)}
          </p>
        )}
      </div>
    </div>
  );
}
