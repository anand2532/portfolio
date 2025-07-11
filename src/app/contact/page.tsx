"use client";

import BlurFade from "@/components/magicui/blur-fade";
import {
  ModuleCard,
  PageHeader,
  PageShell,
} from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { SITE } from "@/data/site";
import Link from "next/link";
import { FormEvent, useState } from "react";

const DELAY = 0.04;

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`[Portfolio] Inquiry from ${name}`);
    const body = encodeURIComponent(
      `From: ${name} <${email}>\n\n${message}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <PageShell className="lg:min-h-[calc(100dvh-8.5rem)]">
      <BlurFade delay={DELAY}>
        <PageHeader
          eyebrow="// contact"
          title="Get in touch"
          description="Describe your hardware, timeline, and goals. Prefer email or LinkedIn for fastest response."
        />
      </BlurFade>

      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-4 sm:gap-6 flex-1 items-start">
        <BlurFade delay={DELAY * 2}>
          <ModuleCard className="flex flex-col gap-3">
            <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              Direct channels
            </p>
            <Link
              href={`mailto:${SITE.email}`}
              className="font-mono text-xs sm:text-sm border border-border px-3 py-2.5 hover:border-primary hover:text-primary transition-colors"
            >
              {SITE.email}
            </Link>
            <Link
              href={SITE.contact.social.LinkedIn.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs sm:text-sm border border-border px-3 py-2.5 hover:border-[var(--phosphor)] hover:text-[var(--phosphor)] transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href={SITE.contact.social.GitHub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs sm:text-sm border border-border px-3 py-2.5 hover:border-[var(--phosphor)] hover:text-[var(--phosphor)] transition-colors"
            >
              GitHub
            </Link>
            <a
              href={`tel:${SITE.phone}`}
              className="font-mono text-xs sm:text-sm border border-border px-3 py-2.5 hover:border-primary hover:text-primary transition-colors"
            >
              {SITE.phone}
            </a>
          </ModuleCard>
        </BlurFade>

        <BlurFade delay={DELAY * 3}>
          <form
            onSubmit={onSubmit}
            className="panel-blueprint p-4 sm:p-5 flex flex-col gap-3 h-full"
          >
            <label className="flex flex-col gap-1.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Name
              </span>
              <input
                name="name"
                required
                className="bg-background border border-border px-3 py-2 text-sm font-mono focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Email
              </span>
              <input
                name="email"
                type="email"
                required
                className="bg-background border border-border px-3 py-2 text-sm font-mono focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </label>
            <label className="flex flex-col gap-1.5 flex-1">
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Message
              </span>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="MCU, radio, constraints, timeline…"
                className="bg-background border border-border px-3 py-2 text-sm font-mono focus:outline-none focus:ring-1 focus:ring-primary resize-y min-h-[120px] flex-1"
              />
            </label>
            <Button type="submit" className="rounded-sm font-mono w-fit">
              Open mail client
            </Button>
            {sent && (
              <p className="font-mono text-xs text-[var(--phosphor)]">
                Mail client opened — if nothing happened, email {SITE.email}{" "}
                directly.
              </p>
            )}
          </form>
        </BlurFade>
      </div>
    </PageShell>
  );
}
