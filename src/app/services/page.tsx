import BlurFade from "@/components/magicui/blur-fade";
import {
  ModuleCard,
  ModuleGrid,
  PageHeader,
  PageShell,
} from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { SITE } from "@/data/site";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom firmware, LoRa integration, edge vision nodes, UAV companions, and MCU consulting.",
};

const DELAY = 0.04;

export default function ServicesPage() {
  return (
    <PageShell>
      <BlurFade delay={DELAY}>
        <PageHeader
          eyebrow="// services"
          title="Engineering packages"
          description="Fixed-scope offerings for firmware, radio, and edge systems — or a custom quote for your stack."
          action={
            <Button asChild size="sm" className="rounded-sm font-mono">
              <Link href="/contact">Inquire</Link>
            </Button>
          }
        />
      </BlurFade>

      <ModuleGrid cols={2}>
        {SITE.services.map((service, i) => (
          <BlurFade key={service.id} delay={DELAY * (2 + i)}>
            <ModuleCard as="article" className="flex flex-col">
              <div className="flex items-start gap-3">
                <service.icon className="size-5 text-primary shrink-0 mt-0.5" />
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg font-semibold">{service.title}</h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    {service.outcome}
                  </p>
                </div>
              </div>
              <ul className="mt-4 grid gap-1.5 flex-1">
                {service.includes.map((item) => (
                  <li
                    key={item}
                    className="font-mono text-xs text-muted-foreground flex gap-2"
                  >
                    <span className="text-[var(--phosphor)]">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap items-center gap-3 justify-between border-t border-border pt-3">
                <div className="font-mono text-[10px] sm:text-xs text-muted-foreground">
                  <span className="text-foreground">{service.timeline}</span>
                  {" · "}
                  <span className="text-primary">{service.startingAt}</span>
                </div>
                <Button asChild size="sm" variant="outline" className="rounded-sm font-mono h-8">
                  <Link href="/contact">Inquire</Link>
                </Button>
              </div>
            </ModuleCard>
          </BlurFade>
        ))}
      </ModuleGrid>
    </PageShell>
  );
}
