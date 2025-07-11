"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { SITE } from "@/data/site";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="shrink-0 font-mono text-xs sm:text-sm text-[var(--phosphor)] hover:text-primary transition-colors tracking-tight"
          onClick={() => setOpen(false)}
        >
          <span className="font-semibold">{SITE.brand}</span>
        </Link>

        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Site structure"
        >
          {SITE.navbar.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-2.5 py-1.5 font-mono text-xs rounded-sm border border-transparent transition-colors",
                  active
                    ? "border-border bg-card text-primary"
                    : "text-muted-foreground hover:text-foreground hover:border-border/60"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1">
          {Object.entries(SITE.contact.social)
            .filter(([, s]) => s.navbar)
            .map(([name, social]) => (
              <a
                key={name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex size-8 items-center justify-center rounded-sm border border-transparent text-muted-foreground hover:text-[var(--phosphor)] hover:border-border transition-colors"
                aria-label={name}
              >
                <social.icon className="size-4" />
              </a>
            ))}
          <ModeToggle className="size-8 text-muted-foreground hover:text-foreground" />
          <button
            type="button"
            className="md:hidden inline-flex size-8 items-center justify-center rounded-sm border border-border text-muted-foreground"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="md:hidden border-t border-border bg-card/95 px-4 py-3"
          aria-label="Site structure"
        >
          <ul className="grid gap-1">
            {SITE.navbar.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center gap-2 px-3 py-2.5 font-mono text-sm rounded-sm border transition-colors",
                      active
                        ? "border-primary/40 bg-background text-primary"
                        : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
                    )}
                  >
                    <item.icon className="size-4 shrink-0" />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
