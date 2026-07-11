# Byte and Bolt

Terminal / engineering-instrument portfolio for **embedded systems & firmware** services and products by Anand Mohan Pandey.

Built with Next.js + Tailwind (originally from [Magic UI portfolio](https://github.com/magicuidesign/portfolio)), restyled and slimmed for an embedded studio site.

## Quick start

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit content

Almost all copy lives in one file:

- [`src/data/site.ts`](src/data/site.ts) — identity, experience, skills, services, products, projects, contact

## Layout

- **Top site header** — Home / Services / Products / Work / About / Contact
- **Modular pages** — `PageShell`, `PageHeader`, `ModuleGrid`, `ModuleCard` in `src/components/page-shell.tsx`

## Routes

| Path | Purpose |
|------|---------|
| `/` | Hero + services/work/products previews |
| `/services` | Service packages |
| `/products` | Product catalog |
| `/work` | Case studies |
| `/about` | Experience, education, skills |
| `/contact` | Mailto form + social links |

## Stack

- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- Lucide icons, motion (BlurFade), next-themes
- Radix accordion (experience list)
- Deploy: Vercel-ready (`pnpm build`)

## License

Upstream Magic UI portfolio is MIT. Your content and branding remain yours.
