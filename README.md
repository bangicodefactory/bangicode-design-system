# Bangicode Design System

> Engineered Trust — Bangicode's brand and component registry.
> Built on **DESIGN.md** (Google Labs), **shadcn/ui**, and **Next.js (latest)**.

This repository is two things at once:

1. **The source of truth for the Bangicode brand.** All colors, type, spacing, radii, and component rules live in [`DESIGN.md`](./DESIGN.md). Edit that file and everything downstream re-themes.
2. **A private shadcn registry.** Other Bangicode projects pull components from here with one command — no copy-paste, no vendored libraries to keep in sync.

---

## Quick start

```bash
# Install dependencies
npm install

# Start the docs/showcase site (runs token build automatically via predev)
npm run dev
# → open http://localhost:3000

# Build the registry artifacts (public/r/*.json) for distribution
npm run build:registry
```

---

## Architecture

```
DESIGN.md                  ← source of truth (Bangicode brand spec)
   │
   ▼ npm run build:tokens
styles/theme.generated.css ← auto-generated Tailwind v4 @theme block
   │
   ▼ imported by
styles/theme.css           ← hand-authored: shadcn semantic aliases layered on top
   │
   ▼ imported by
app/globals.css            ← Next.js global stylesheet
   │
   ▼ consumed by
components/ui/*            ← Bangicode-themed shadcn components
   │
   ▼ exported via
registry.json              ← shadcn registry manifest
   │
   ▼ npm run build:registry
public/r/*.json            ← deployable registry artifacts
   │
   ▼ consumed by
other Bangicode projects   ← npx shadcn add <host>/r/button.json
```

### Why this shape

- **DESIGN.md stays the only thing humans edit.** Color values, type scale, spacing — all in one file, lint-checked against Google's spec.
- **Token build is automated.** The `predev` and `prebuild` scripts re-generate `theme.generated.css` from `DESIGN.md` every time, so the theme can never drift.
- **shadcn aliases are hand-authored once.** `styles/theme.css` maps DESIGN.md's Material 3 token names (`surface-container`, `on-primary`, `outline-variant`) onto the names shadcn components expect (`background`, `primary-foreground`, `border`). Change this mapping once; every component picks it up.
- **Each component lives once.** `registry/bangicode/ui/button.tsx` is the canonical source. `components/ui/button.tsx` re-exports it for the docs app.

---

## Consuming the registry from another Bangicode project

Once this app is deployed (Vercel or any Node host), other projects install components with:

```bash
# Initialize shadcn in the consumer project (one-time)
npx shadcn@latest init

# Add a Bangicode component
npx shadcn@latest add https://design.bangicode.com/r/button.json
```

That writes `components/ui/button.tsx` directly into the consumer's repo — they own the code, they can extend it, but visual changes flow from the registry on the next add/update.

To keep the consumer's theme in sync with Bangicode's brand, copy `styles/theme.css` and `styles/theme.generated.css` into the consumer project once, then either:

- **Pin** to a snapshot and update manually when DESIGN.md changes, or
- **Submodule** this repo and re-export `theme.css` to keep them auto-synced.

---

## Adding a new component

1. **Build the source** at `registry/bangicode/ui/<name>.tsx`. Reference DESIGN.md tokens via the shadcn aliases (`bg-primary`, `text-foreground`, `border-border`, etc.) — _never_ raw hex.
2. **Re-export it** in `components/ui/<name>.tsx` so the docs site can use it.
3. **Register it** by adding an entry to `registry.json`.
4. **Showcase it** by adding a section to `app/page.tsx`.
5. **Rebuild registry artifacts:** `npm run build:registry`.

---

## Editing the brand

Open `DESIGN.md`. Change a token. Save.

```bash
npm run lint:design   # validate against Google's DESIGN.md spec
npm run build:tokens  # regenerate styles/theme.generated.css
npm run dev           # see the change live
```

Every component re-themes automatically.

---

## v1 scope

- [x] Core token pipeline (DESIGN.md → Tailwind v4 → shadcn)
- [x] Registry scaffolding (registry.json, components.json)
- [x] Seed `Button` component (primary / secondary / ghost / destructive / link · 4 sizes)
- [x] Showcase home page (colors, typography, button gallery)
- [ ] Primitives: Input, Card, Dialog, Dropdown, Form, Select, Tooltip, Tabs, Toast
- [ ] Dashboard: Sidebar, DataTable, Chart, Stats card
- [ ] Marketing: Hero, Feature grid, Pricing table, CTA block
- [ ] Dark mode (paired `DESIGN.dark.md`)
- [ ] Component-level tokens (`components:` block in DESIGN.md YAML)
- [ ] Reconcile logo colors with token palette (deferred — tokens currently authoritative)

---

## Stack

| Layer | Tool | Why |
|---|---|---|
| Brand spec | [DESIGN.md](https://github.com/google-labs-code/design.md) | One file, lint-checked, agent-readable |
| Framework | [Next.js](https://nextjs.org) (pinned to `latest` dist-tag) | App Router, React 19, RSC by default |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) | CSS-first `@theme` block, no JS config |
| Components | [shadcn/ui](https://ui.shadcn.com) | Own-your-source, Radix accessibility |
| Primitives | [Radix UI](https://radix-ui.com) | Headless, ARIA-correct |
| Icons | [Lucide](https://lucide.dev) | shadcn default |
| Language | TypeScript 5 | Strict mode |
| Type families | Montserrat · Hanken Grotesk · JetBrains Mono | Per DESIGN.md §Typography |

---

## License

Internal. Bangicode all rights reserved.
