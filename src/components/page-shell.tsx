import { cn } from "@/lib/utils";

export function PageShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main
      className={cn(
        "mx-auto w-full max-w-6xl px-4 sm:px-6 py-6 sm:py-8 flex flex-col gap-6 sm:gap-8",
        className
      )}
    >
      {children}
    </main>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <header className="panel-blueprint flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 p-4 sm:p-5">
      <div className="min-w-0">
        <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-1">
          {eyebrow}
        </p>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-balance">
          {title}
        </h1>
        {description ? (
          <p className="text-sm text-muted-foreground mt-1.5 max-w-2xl text-pretty">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </header>
  );
}

export function ModuleGrid({
  children,
  cols = 1,
  className,
}: {
  children: React.ReactNode;
  cols?: 1 | 2 | 3;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid gap-3 sm:gap-4",
        cols === 1 && "grid-cols-1",
        cols === 2 && "grid-cols-1 sm:grid-cols-2",
        cols === 3 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
}

export function ModuleCard({
  children,
  className,
  as: Comp = "div",
  href,
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
  href?: string;
}) {
  const classes = cn(
    "panel-blueprint p-4 sm:p-5 h-full transition-colors",
    href && "hover:border-primary/50 block",
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return <Comp className={classes}>{children}</Comp>;
}
