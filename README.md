# Byte and Bolt

Terminal / engineering-instrument portfolio for **embedded systems & firmware** services and products by Anand Mohan Pandey.

Built on [magicuidesign/portfolio](https://github.com/magicuidesign/portfolio) + [Magic UI](https://magicui.design/) (~21k★), restyled for Linux/embedded aesthetics.

## Quick start

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit content

Almost all copy lives in one file:

- [`src/data/site.ts`](src/data/site.ts) — identity, experience, skills, services, products, projects, contact

Update that file to change the site. Resume PDF is kept at [`resume.pdf`](resume.pdf) for download/reference.

## Layout

- **Top site header** — Home / Services / Products / Work / About / Contact (sticky)
- **Modular pages** — shared `PageShell`, `PageHeader`, `ModuleGrid`, `ModuleCard` in `src/components/page-shell.tsx`
- **Viewport-friendly** — wider `max-w-6xl` grid modules; hero fills remaining viewport height on large screens

## Routes

| Path | Purpose |
|------|---------|
| `/` | Hero + services/work/products previews |
| `/services` | Service packages |
| `/products` | Product catalog |
| `/work` | Case studies |
| `/about` | Experience, education, skills |
| `/contact` | Mailto form + social links |
| `/blog` | Optional MDX blog (from upstream template) |

## Design tokens

Charcoal background, phosphor green + amber accents, Geist Sans + JetBrains Mono. CSS variables in [`src/app/globals.css`](src/app/globals.css).

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 + shadcn/ui
- Magic UI (`BlurFade`, `Dock`, custom `DotPattern`, terminal typewriter)
- motion / Framer Motion
- Deploy: Vercel-ready (`pnpm build`)

## License

Upstream Magic UI portfolio is MIT. Your content and branding remain yours.
