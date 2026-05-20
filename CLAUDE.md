# CLAUDE.md — Bangicode Design System

Context for AI coding agents working in this repo. Read this before making changes.

---

## What this repo is

A two-in-one artifact:

1. **The source of truth for the Bangicode brand** — `DESIGN.md` at the root, authored against [Google's DESIGN.md spec](https://github.com/google-labs-code/design.md) (v0.1.x alpha).
2. **A private shadcn registry** — `registry.json` + `registry/bangicode/ui/*` exposed via `public/r/*.json` so other Bangicode projects install components with `npx shadcn add <host>/r/<name>.json`.

The docs site (`app/page.tsx`) doubles as the brand showcase.

---

## Stack (canonical, don't drift)

| Layer | Choice | Notes |
|---|---|---|
| Brand spec | DESIGN.md (Google, alpha) | Lint with `npm run lint:design` |
| Framework | Next.js (latest dist-tag) + App Router + RSC | React 19. `package.json` uses `"next": "latest"` so installs always pull the current major. |
| Styling | Tailwind CSS v4 | CSS-first `@theme` block, no `tailwind.config.ts` |
| Components | shadcn/ui (new-york style) | Vendored source, not imported package |
| Primitives | Radix UI | via shadcn |
| Icons | Lucide | shadcn default |
| Type | Montserrat (headlines) · Hanken Grotesk (body) · JetBrains Mono (technical) | Loaded via `next/font/google` in `app/layout.tsx` |
| Lang | TypeScript 5 strict | `@/*` alias → repo root |

---

## Reproducibility contract (read before touching dependencies)

`package.json` uses `"next": "latest"` and other `^` ranges so the brand stays on current versions, but reproducibility is enforced by the **lockfile + Renovate** layer below. If you ignore this contract, you can silently introduce breaking changes during a routine install.

| Rule | Why |
|---|---|
| **Always commit `package-lock.json`.** Never gitignore it, never delete it casually. | The lockfile pins exact resolved versions for every dependency (including transitive). With it committed, the `"latest"` in `package.json` becomes informational — the lockfile is what actually installs. |
| **In CI, deploys, and Docker: use `npm ci`, not `npm install`.** | `npm ci` errors if the lockfile and `package.json` disagree; `npm install` silently re-resolves and rewrites the lockfile. Vercel does this automatically when a lockfile is present. |
| **Local dev: use `npm install` only after `git pull`.** | Reuses lockfile, installs missing packages. Never touches resolutions unless `package.json` changed. |
| **Updates happen via Renovate PRs, not ad-hoc `npm update`.** | `renovate.json` schedules weekly PRs, groups framework bumps, auto-merges patches. Each update is reviewable and runs through CI. |
| **`engine-strict=true` is set in `.npmrc`.** | Refuses install on Node < 20 or npm < 10 (`engines` field in `package.json`). Catches version skew between dev/CI. |
| **`save-exact=true` is set in `.npmrc`.** | New `npm install <pkg>` calls write exact versions to `package.json`, keeping it honest. |

If a Renovate PR's CI fails, the breaking change is caught at PR time, not at the next clean install. The combination of `"latest"` + lockfile + Renovate gives "always-current with a safety net" — pick whichever discipline level you want by tightening the renovate.json rules.

---

## Token pipeline (the one thing you must understand)

```
DESIGN.md  ──build-tokens.mjs──▶  styles/theme.generated.css   (auto, DO NOT EDIT)
                                              │
                                              ▼ imported by
                                  styles/theme.css             (hand-authored aliases)
                                              │
                                              ▼ imported by
                                  app/globals.css              (Next entry point)
```

- `scripts/build-tokens.mjs` runs the published `@google/design.md` CLI (`export --format tailwind`), parses the JSON, and emits a Tailwind v4 `@theme` block.
- It runs automatically via `predev` and `prebuild` hooks. Never edit `theme.generated.css` by hand — it's overwritten on every run.
- **The published CLI (v0.1.1) does not yet ship a `css-tailwind` exporter.** Our build script is the stopgap. When Google ships native v4 export, simplify the script.
- All semantic shadcn aliases (`--background`, `--primary`, `--border`, etc.) live in the hand-authored `styles/theme.css`. That file is where the M3 → shadcn mapping is decided.

---

## Decisions already made (don't re-litigate without asking)

### Token authority over logo
The DESIGN.md token palette is **authoritative**. The `logo.svg` uses brighter blues (#114483, #2E91CE) and a crimson (#D30F33) that don't match the current tokens. Treat the logo as an older asset — the brand is moving toward the DESIGN.md palette, not the logo. Do not propose adding logo-derived tokens unless the user reopens this.

### Material 3 → shadcn alias mapping
DESIGN.md uses a Material 3 token vocabulary (`surface-container`, `on-primary`, `outline-variant`, etc.). The mapping to shadcn semantic tokens is in `styles/theme.css` and was deliberately chosen:

| shadcn name | mapped to | rationale |
|---|---|---|
| `--background` | `--color-background` | direct |
| `--foreground` | `--color-on-background` | direct |
| `--card` | `--color-surface-container-lowest` | cards sit one level above page |
| `--popover` | `--color-surface-container-high` | floating UI sits higher |
| `--primary` | `--color-primary` (#000c2c — deep navy) | direct |
| `--secondary` | `--color-secondary-container` (#80c5fe — sky) | the LIGHTER blue is the secondary surface; the darker `secondary` token becomes `--accent` |
| `--accent` | `--color-secondary` (#016397 — ocean) | accent text/icons sit on muted surfaces |
| `--muted` | `--color-surface-container` | gray-blue tint |
| `--muted-foreground` | `--color-on-surface-variant` | direct |
| `--destructive` | `--color-error` | direct |
| `--border` / `--input` | `--color-outline-variant` | per DESIGN.md §Elevation (flat-plus, borders instead of shadows) |
| `--ring` | `--color-secondary` | DESIGN.md §Components specifies 2px Sky Blue focus rings |
| `--radius` | `--radius-sm` (0.25rem / 4px) | DESIGN.md §Shapes: 4px for components, 8px for containers |

If you propose changing this mapping, surface the trade-off explicitly — it propagates to every component.

### Deferred (intentionally, not forgotten)
- **Dark mode.** `.dark` selector exists as a no-op stub. To enable: create `DESIGN.dark.md`, extend `build-tokens.mjs` to emit a second `@theme` block, populate `.dark { ... }` in `theme.css`.
- **`components:` block in DESIGN.md YAML.** Component styling currently lives in prose only. When ready, codify buttons/cards/inputs as machine-readable tokens.
- **Logo / palette reconciliation.** See "Token authority" above.
- **The rest of v1 scope.** Only `Button` is seeded. Remaining: Input, Card, Dialog, Dropdown, Form, Select, Tooltip, Tabs, Toast, Sidebar, DataTable, Chart, Stats card, Hero, Feature grid, Pricing, CTA. Pattern is in `registry/bangicode/ui/button.tsx` — follow it.

---

## Conventions from DESIGN.md (apply without being asked)

- **Sentence case** for all button/heading/nav labels. Not Title Case, not UPPERCASE.
- **4px radius** (`rounded-sm`) for interactive components; **8px** (`rounded-lg`) for cards and large containers; **never** fully rounded pills.
- **Flat-plus depth.** No `shadow-*` utilities. Use 1px `border-border` and tonal layering (`bg-card`, `bg-popover`) instead.
- **8px baseline grid.** All spacing multiples of 8, with 4px reserved for icon-to-label gaps.
- **Tri-font roles.** Montserrat for headlines, Hanken Grotesk for body, JetBrains Mono for code/version numbers/status tags/numeric table cells.
- **Focus = 2px Sky Blue ring with 2px offset.** Already baked into the Button base class as `focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`.
- **Tertiary "Tech Red" is reserved** for error states only — never for decorative or marketing use.

---

## How to add a new component

1. Create `registry/bangicode/ui/<name>.tsx`. Use the `Button` as the template — `cva` for variants, `cn` from `@/lib/utils`, shadcn aliases only (never raw hex).
2. Re-export from `components/ui/<name>.tsx` so the docs app can import it.
3. Add an entry to `registry.json` (name, type `registry:ui`, file path, target).
4. Add a showcase section to `app/page.tsx`.
5. Run `npm run build:registry` to regenerate `public/r/*.json`.

---

## Common tasks

```bash
npm install                # first-time setup
npm run dev                # http://localhost:3000 (rebuilds tokens via predev)
npm run lint:design        # validate DESIGN.md against Google's spec
npm run build:tokens       # manually regenerate theme.generated.css
npm run build:registry     # compile registry/*.tsx → public/r/*.json
npm run build              # production Next build (rebuilds tokens via prebuild)
```

---

## Files you'll touch most

| When you want to... | Edit |
|---|---|
| Change a color / type size / spacing | `DESIGN.md` (then `npm run build:tokens`) |
| Change the shadcn semantic mapping | `styles/theme.css` |
| Change base body / heading styles | `styles/theme.css` `@layer base` |
| Add a component | `registry/bangicode/ui/<name>.tsx` + `registry.json` + `components/ui/` re-export |
| Update the showcase | `app/page.tsx` |

## Files you should NOT touch

- `styles/theme.generated.css` — auto-built
- `next-env.d.ts` — Next manages it
- Anything in `public/r/` — `shadcn build` output
- Anything in `node_modules/` or `.next/`
