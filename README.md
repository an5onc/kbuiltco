# Kiefer Built Contracting — kbuiltco.com

Website for **Kiefer Built Contracting**, a custom home builder and general contractor in Northern Colorado with 25+ years of experience.

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **UI Components:** Radix UI primitives, Lucide icons
- **Deployment:** Vercel (auto-deploy from `main`)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command          | Description              |
| ---------------- | ------------------------ |
| `npm run dev`    | Start dev server         |
| `npm run build`  | Production build         |
| `npm run start`  | Start production server  |
| `npm run lint`   | Run ESLint               |
| `npm run format` | Format with Prettier     |

## Project Structure

```
app/              # Next.js App Router pages
components/
  forms/          # Contact & vendor forms
  layout/         # Header, footer, CTA
  motion/         # Animation components (scroll, parallax, etc.)
  sections/       # Page sections (hero, gallery, testimonials, etc.)
  seo/            # JSON-LD structured data
  ui/             # Base UI primitives (button, card, badge, etc.)
lib/
  config.ts       # Site config, navigation, footer links
  metadata.ts     # SEO metadata & JSON-LD generators
  utils.ts        # Utility functions
public/
  team/           # Team member photos
```

## Key Pages

- `/` — Home
- `/about` — Company story & values
- `/employees` — Team bios
- `/services` — Service overview
- `/new-builds`, `/commercial`, `/renovations-and-additions` — Portfolio pages
- `/gallery` — Project gallery
- `/testimonials` — Client reviews
- `/contact` — Contact form
- `/vendors` — Vendor/subcontractor application
- `/join-our-team` — Careers
- `/blog` — Blog posts
- `/accolades` — Awards & recognition
- `/privacy`, `/terms` — Legal pages
