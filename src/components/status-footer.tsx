import { SITE } from "@/data/site";

export function StatusFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-card/50">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 py-3 font-mono text-[10px] sm:text-xs text-muted-foreground">
        <span className="text-[var(--phosphor)] truncate">{SITE.brand}</span>
        <span className="hidden sm:inline text-primary/80 shrink-0">
          [{SITE.title}]
        </span>
        <span className="sm:hidden shrink-0 text-primary/80">B&B</span>
      </div>
    </footer>
  );
}
