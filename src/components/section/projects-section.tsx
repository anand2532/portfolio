import BlurFade from "@/components/magicui/blur-fade";
import { SITE } from "@/data/site";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
  return (
    <section id="projects">
      <div className="flex min-h-0 flex-col gap-y-8">
        <div className="flex flex-col gap-y-4">
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary">
            // projects
          </p>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Selected work
          </h2>
          <p className="text-muted-foreground text-pretty">
            Embedded firmware, radio drivers, and field systems.
          </p>
        </div>
        <div className="grid gap-3">
          {SITE.projects.map((project, id) => (
            <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
              <Link
                href={project.href || "/work"}
                className="panel-blueprint block p-4 hover:border-primary/40 transition-colors group"
              >
                <div className="flex justify-between gap-2">
                  <div>
                    <p className="font-mono text-[10px] text-muted-foreground">
                      {project.dates}
                    </p>
                    <h3 className="font-semibold mt-1 group-hover:text-primary">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      {project.description}
                    </p>
                  </div>
                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground" />
                </div>
              </Link>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
