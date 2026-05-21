# Changelog

All component and token changes in the Bangicode design system.

---

## v0.1.0 — 2026-05-21

Initial registry release. 34 components across 6 categories, full token pipeline, and deployment infrastructure.

### Token pipeline
- DESIGN.md as single source of truth (Google DESIGN.md spec v0.1.x alpha)
- `build-tokens.mjs` compiles M3 tokens → Tailwind v4 `@theme` block
- Dark mode via `DESIGN.dark.md` → `.dark { --color-* }` overrides
- Scrim token (`#091D2E`) wired through `--scrim` alias
- Component tokens (`--component-{name}-{prop}`) emitted from `components:` YAML block

### Components added

**Form**
- Button — primary / secondary / ghost / destructive / link · sm / md / lg / icon
- Input — surface fill, outline-variant border, 4px radius
- Label — Radix UI Label primitive
- Textarea — multi-line, resizable
- Select — Radix UI Select, JetBrains Mono group labels
- Checkbox — Radix UI Checkbox, Navy fill on checked
- Radio group — Radix UI RadioGroup
- Switch — Radix UI Switch, Navy fill when on
- Form — React Hook Form + Zod wrapper

**Disclosure**
- Dialog — scrim overlay (`bg-scrim/40`), 8px radius
- Dropdown menu — Radix UI DropdownMenu
- Popover — floating, 4px radius
- Sheet — slide-in panel, 4 sides
- Tabs — Sky Blue 4px active indicator
- Accordion — outline-variant dividers

**Feedback**
- Alert — default / info / success / destructive variants
- Toast (Sonner) — top-right, Bangicode themed
- Tooltip — Radix UI Tooltip, 4px radius
- Badge — JetBrains Mono, uppercase, 4px radius

**Layout**
- Card — outline-variant border, 8px radius, 24px padding
- Separator — 1px divider, outline-variant color
- Avatar — 4px radius (not circular), initials fallback
- Skeleton — muted pulse animation

**Dashboard**
- Sidebar navigation — 280px fixed, Sky Blue active indicator, mobile Sheet variant
- Data table — TanStack Table v8, JetBrains Mono numeric cells
- Charts (Recharts) — Line / Bar / Area / Pie, Navy/Sky palette
- Stats card — Montserrat display number, delta indicator
- Breadcrumb — Hanken Grotesk body-sm
- Pagination — ghost button style, JetBrains Mono page numbers

**Marketing**
- Hero section — Montserrat display-lg, CTA pair
- Feature grid — 3-up / 4-up, Lucide icon Sky Blue
- Pricing table — featured tier with Sky Blue left border
- CTA block — primary-container Navy bg, white headline
- Testimonials — card chrome, Avatar + JetBrains Mono role
- Logo cloud — grayscale, 5–6 per row
- FAQ section — Accordion-based, stacked or split layout
- Site footer — 3–4 column link grid, JetBrains Mono headings

### Infrastructure
- Private shadcn registry at `https://design.bangicode.ma/r/*.json`
- GitHub Actions CI: lint → tokens → registry → build → deploy
- Netlify hosting (`bangicode-design-system.netlify.app`)
- Renovate weekly dependency updates (self-hosted via GitHub Actions)
- Per-component docs at `/components/[slug]`
- Dark mode toggle (next-themes, `attribute="class"`)
