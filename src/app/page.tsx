import BlurFade from "@/components/magicui/blur-fade";
import { HeroSection } from "@/components/section/hero-section";
import {
  ModuleCard,
  ModuleGrid,
  PageShell,
} from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { SITE } from "@/data/site";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const DELAY = 0.04;

function SectionLabel({
  label,
  title,
  href,
  linkText,
}: {
  label: string;
  title: string;
  href: string;
  linkText: string;
}) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-1">
          {label}
        </p>
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
          {title}
        </h2>
      </div>
      <Link
        href={href}
        className="font-mono text-xs text-[var(--phosphor)] hover:underline underline-offset-4 shrink-0"
      >
        {linkText}
      </Link>
    </div>
  );
}

export default function Page() {
  const featured = SITE.projects.filter((p) => p.featured).slice(0, 3);
  const previewServices = SITE.services.slice(0, 3);
  const previewProducts = SITE.products.slice(0, 3);

  return (
    <PageShell>
      <HeroSection />

      <section id="services-preview" className="flex flex-col gap-4">
        <BlurFade delay={DELAY}>
          <SectionLabel
            label="// services"
            title="What I build for you"
            href="/services"
            linkText="all services →"
          />
        </BlurFade>
        <ModuleGrid cols={3}>
          {previewServices.map((service, i) => (
            <BlurFade key={service.id} delay={DELAY * (2 + i)}>
              <Link href="/services" className="block h-full">
                <ModuleCard className="hover:border-primary/50 group">
                  <service.icon className="size-5 text-primary mb-3" />
                  <h3 className="font-medium group-hover:text-primary transition-colors text-sm sm:text-base">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1.5 line-clamp-2">
                    {service.outcome}
                  </p>
                </ModuleCard>
              </Link>
            </BlurFade>
          ))}
        </ModuleGrid>
      </section>

      <section id="work-preview" className="flex flex-col gap-4">
        <BlurFade delay={DELAY}>
          <SectionLabel
            label="// work"
            title="Field-proven systems"
            href="/work"
            linkText="case studies →"
          />
        </BlurFade>
        <ModuleGrid cols={1} className="lg:grid-cols-3">
          {featured.map((project, i) => (
            <BlurFade key={project.title} delay={DELAY * (2 + i)}>
              <a
                href={project.href}
                target={project.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="block h-full"
              >
                <ModuleCard className="hover:border-[var(--phosphor)]/40 group">
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-mono text-[10px] text-muted-foreground">
                      {project.dates}
                    </p>
                    <ArrowUpRight className="size-4 text-muted-foreground shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="font-medium mt-1 group-hover:text-[var(--phosphor)] transition-colors text-sm sm:text-base">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.technologies.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] border border-border px-2 py-0.5 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </ModuleCard>
              </a>
            </BlurFade>
          ))}
        </ModuleGrid>
      </section>

      <section id="products-preview" className="flex flex-col gap-4">
        <BlurFade delay={DELAY}>
          <SectionLabel
            label="// products"
            title="Drivers & packages"
            href="/products"
            linkText="catalog →"
          />
        </BlurFade>
        <ModuleGrid cols={3}>
          {previewProducts.map((product, i) => (
            <BlurFade key={product.id} delay={DELAY * (2 + i)}>
              <Link href={product.href} className="block h-full">
                <ModuleCard className="hover:border-primary/50">
                  <span className="font-mono text-[10px] text-[var(--phosphor)]">
                    {product.status}
                  </span>
                  <h3 className="font-medium mt-1 text-sm sm:text-base">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {product.tagline}
                  </p>
                </ModuleCard>
              </Link>
            </BlurFade>
          ))}
        </ModuleGrid>
      </section>

      <section
        id="cta"
        className="panel-blueprint p-5 sm:p-6 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-4"
      >
        <BlurFade delay={DELAY} className="min-w-0">
          <p className="font-mono text-xs text-[var(--phosphor)] mb-1">
            $ inquire --project
          </p>
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
            Need firmware that holds in the field?
          </h2>
          <p className="text-muted-foreground mt-1 max-w-md text-sm mx-auto sm:mx-0">
            Share your MCU, radio, and constraints — clear scope and timeline
            back.
          </p>
        </BlurFade>
        <BlurFade delay={DELAY * 2}>
          <Button asChild className="mt-4 sm:mt-0 rounded-sm font-mono shrink-0">
            <Link href="/contact">Start a conversation</Link>
          </Button>
        </BlurFade>
      </section>
    </PageShell>
  );
}
