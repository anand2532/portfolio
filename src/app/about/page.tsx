import BlurFade from "@/components/magicui/blur-fade";
import WorkSection from "@/components/section/work-section";
import {
  ModuleCard,
  ModuleGrid,
  PageHeader,
  PageShell,
} from "@/components/page-shell";
import { SITE } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Embedded software engineer — VyomOS, Okulo, UrbanMatrix. C/C++, FreeRTOS, LoRa, ROS2.",
};

const DELAY = 0.04;

export default function AboutPage() {
  return (
    <PageShell>
      <BlurFade delay={DELAY}>
        <PageHeader
          eyebrow="// about"
          title={SITE.brand}
          description={SITE.summary}
        />
      </BlurFade>
      <BlurFade delay={DELAY * 1.5}>
        <p className="font-mono text-sm text-primary -mt-2 sm:-mt-4 px-1">
          Founder · {SITE.name}
        </p>
      </BlurFade>

      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-4 sm:gap-6 items-start">
        <section className="flex flex-col gap-3">
          <BlurFade delay={DELAY * 2}>
            <h2 className="text-sm font-semibold font-mono text-[var(--phosphor)]">
              Experience
            </h2>
          </BlurFade>
          <BlurFade delay={DELAY * 3}>
            <ModuleCard>
              <WorkSection />
            </ModuleCard>
          </BlurFade>
        </section>

        <div className="flex flex-col gap-4">
          <section className="flex flex-col gap-3">
            <BlurFade delay={DELAY * 4}>
              <h2 className="text-sm font-semibold font-mono text-[var(--phosphor)]">
                Education
              </h2>
            </BlurFade>
            {SITE.education.map((edu, i) => (
              <BlurFade key={edu.school} delay={DELAY * (5 + i)}>
                <ModuleCard>
                  <p className="font-medium text-sm">{edu.school}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {edu.degree}
                  </p>
                  <p className="font-mono text-[10px] text-muted-foreground mt-2">
                    {edu.start}–{edu.end}
                  </p>
                </ModuleCard>
              </BlurFade>
            ))}
          </section>

          <section className="flex flex-col gap-3">
            <BlurFade delay={DELAY * 6}>
              <h2 className="text-sm font-semibold font-mono text-[var(--phosphor)]">
                Publication
              </h2>
            </BlurFade>
            <BlurFade delay={DELAY * 7}>
              <ModuleCard>
                <p className="font-medium text-sm">{SITE.publication.title}</p>
                <p className="text-[10px] text-muted-foreground mt-2 font-mono leading-relaxed">
                  {SITE.publication.authors}
                </p>
              </ModuleCard>
            </BlurFade>
          </section>
        </div>
      </div>

      <section className="flex flex-col gap-3">
        <BlurFade delay={DELAY * 8}>
          <h2 className="text-sm font-semibold font-mono text-[var(--phosphor)]">
            Skills
          </h2>
        </BlurFade>
        <ModuleGrid cols={1}>
          <BlurFade delay={DELAY * 9}>
            <ModuleCard>
              <div className="flex flex-wrap gap-2">
                {SITE.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="font-mono text-xs border border-border bg-background px-2.5 py-1 text-foreground"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </ModuleCard>
          </BlurFade>
        </ModuleGrid>
      </section>

      <section className="flex flex-col gap-3">
        <BlurFade delay={DELAY * 10}>
          <h2 className="text-sm font-semibold font-mono text-[var(--phosphor)]">
            Achievements
          </h2>
        </BlurFade>
        <ModuleCard>
          <ul className="space-y-2">
            {SITE.achievements.map((item) => (
              <li
                key={item}
                className="font-mono text-xs text-muted-foreground flex gap-2"
              >
                <span className="text-primary">▸</span>
                {item}
              </li>
            ))}
          </ul>
        </ModuleCard>
      </section>
    </PageShell>
  );
}
