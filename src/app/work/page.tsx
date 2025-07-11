import BlurFade from "@/components/magicui/blur-fade";
import {
  ModuleCard,
  ModuleGrid,
  PageHeader,
  PageShell,
} from "@/components/page-shell";
import { SITE } from "@/data/site";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies: Netrajaal LoRa mesh, SX1262 drivers, UAV companion computers.",
};

const DELAY = 0.04;

export default function WorkPage() {
  return (
    <PageShell>
      <BlurFade delay={DELAY}>
        <PageHeader
          eyebrow="// work"
          title="Case studies"
          description="Selected systems from surveillance mesh, radio drivers, and aerospace companion computers."
        />
      </BlurFade>

      <ModuleGrid cols={2}>
        {SITE.projects.map((project, i) => (
          <BlurFade key={project.title} delay={DELAY * (2 + i)}>
            <ModuleCard as="article" className="group">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-mono text-[10px] text-muted-foreground">
                    {project.dates}
                    {project.active ? " · active" : ""}
                  </p>
                  <h2 className="text-lg font-semibold mt-1">{project.title}</h2>
                </div>
                {project.href && project.href !== "#" && (
                  <Link
                    href={project.href}
                    target={project.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors shrink-0"
                    aria-label={`Open ${project.title}`}
                  >
                    <ArrowUpRight className="size-5" />
                  </Link>
                )}
              </div>
              <p className="text-sm text-muted-foreground mt-2 text-pretty line-clamp-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {project.technologies.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] border border-border px-2 py-0.5 text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </ModuleCard>
          </BlurFade>
        ))}
      </ModuleGrid>
    </PageShell>
  );
}
