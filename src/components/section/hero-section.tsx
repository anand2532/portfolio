import Link from "next/link";
import { Button } from "@/components/ui/button";
import BlurFade from "@/components/magicui/blur-fade";
import { TerminalTypewriter } from "@/components/terminal-typewriter";
import { SITE } from "@/data/site";

const DELAY = 0.04;

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative grid lg:grid-cols-[1.1fr_0.9fr] gap-5 lg:gap-6 lg:min-h-[calc(100dvh-8.5rem)] lg:items-center"
    >
      <div className="flex flex-col gap-5 justify-center">
        <BlurFade delay={DELAY}>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--phosphor)]">
            {SITE.title}
          </p>
        </BlurFade>

        <div className="flex flex-col gap-3">
          <BlurFade delay={DELAY * 2}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance leading-[1.05]">
              {SITE.brand}
            </h1>
          </BlurFade>
          <BlurFade delay={DELAY * 2.5}>
            <p className="font-mono text-sm text-primary/90">
              {SITE.name}
            </p>
          </BlurFade>
          <BlurFade delay={DELAY * 3}>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl text-pretty">
              {SITE.headline}
            </p>
          </BlurFade>
          <BlurFade delay={DELAY * 4}>
            <p className="text-sm text-muted-foreground max-w-lg text-pretty">
              {SITE.description}
            </p>
          </BlurFade>
        </div>

        <BlurFade delay={DELAY * 5}>
          <div className="flex flex-wrap gap-3">
            <Button asChild className="rounded-sm font-mono text-sm">
              <Link href="/services">View services</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-sm font-mono text-sm border-border"
            >
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </BlurFade>
      </div>

      <BlurFade delay={DELAY * 6} className="min-h-0">
        <TerminalTypewriter className="h-full lg:min-h-[280px]" />
      </BlurFade>
    </section>
  );
}
