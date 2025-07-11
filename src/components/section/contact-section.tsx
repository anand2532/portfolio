import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { SITE } from "@/data/site";
import Link from "next/link";

export default function ContactSection() {
  return (
    <div className="border border-border rounded-sm p-10 relative panel-blueprint">
      <div className="absolute -top-4 border border-border bg-primary z-10 rounded-sm px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-primary-foreground text-sm font-mono font-medium">
          Contact
        </span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Get in Touch
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          Prefer email or{" "}
          <Link
            href={SITE.contact.social.LinkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline underline-offset-4"
          >
            LinkedIn
          </Link>
          . Or use the{" "}
          <Link
            href="/contact"
            className="text-[var(--phosphor)] hover:underline"
          >
            contact form
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
