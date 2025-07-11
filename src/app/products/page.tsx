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
  title: "Products",
  description:
    "SX1262 MicroPython drivers, LoRa edge vision nodes, and USB host loggers.",
};

const DELAY = 0.04;

export default function ProductsPage() {
  return (
    <PageShell>
      <BlurFade delay={DELAY}>
        <PageHeader
          eyebrow="// products"
          title="Catalog"
          description="Drivers and system packages — open source with commercial support, or project-based delivery."
        />
      </BlurFade>

      <ModuleGrid cols={3}>
        {SITE.products.map((product, i) => (
          <BlurFade key={product.id} delay={DELAY * (2 + i)}>
            <ModuleCard as="article" className="flex flex-col">
              <div className="flex flex-wrap items-center gap-2 justify-between">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--phosphor)]">
                  {product.status}
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">
                  {product.price}
                </span>
              </div>
              <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
              <p className="text-sm text-primary/90 mt-1">{product.tagline}</p>
              <p className="text-sm text-muted-foreground mt-2 flex-1 text-pretty line-clamp-3">
                {product.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {product.specs.map((spec) => (
                  <span
                    key={spec}
                    className="font-mono text-[10px] border border-border px-2 py-0.5 text-muted-foreground"
                  >
                    {spec}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <Button asChild size="sm" className="rounded-sm font-mono">
                  <Link
                    href={product.href}
                    target={product.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      product.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {product.status === "Available" ? "View source" : "Inquire"}
                  </Link>
                </Button>
              </div>
            </ModuleCard>
          </BlurFade>
        ))}
      </ModuleGrid>
    </PageShell>
  );
}
