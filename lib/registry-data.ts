export type RegistryCategory =
  | "Form"
  | "Disclosure"
  | "Feedback"
  | "Layout"
  | "Dashboard"
  | "Marketing";

export interface RegistryItem {
  name: string;
  title: string;
  description: string;
  category: RegistryCategory;
  dependencies: string[];
  registryDependencies: string[];
}

export const REGISTRY_ITEMS: RegistryItem[] = [
  // ── Form ──────────────────────────────────────────────────────────────────
  {
    name: "button",
    title: "Button",
    description: "Bangicode primary button — sentence case label, 4px radius, navy fill. Built from shadcn/Radix Slot + class-variance-authority.",
    category: "Form",
    dependencies: ["@radix-ui/react-slot", "class-variance-authority"],
    registryDependencies: [],
  },
  {
    name: "input",
    title: "Input",
    description: "Text input — surface fill, outline-variant border, 4px radius, Hanken Grotesk body-sm.",
    category: "Form",
    dependencies: [],
    registryDependencies: [],
  },
  {
    name: "label",
    title: "Label",
    description: "Accessible form label via Radix UI Label primitive, Hanken Grotesk text-sm.",
    category: "Form",
    dependencies: ["@radix-ui/react-label"],
    registryDependencies: [],
  },
  {
    name: "textarea",
    title: "Textarea",
    description: "Multi-line text input — surface fill, outline-variant border, 4px radius, resizable.",
    category: "Form",
    dependencies: [],
    registryDependencies: [],
  },
  {
    name: "select",
    title: "Select",
    description: "Accessible select dropdown via Radix UI Select, surface fill, JetBrains Mono group labels.",
    category: "Form",
    dependencies: ["@radix-ui/react-select", "lucide-react"],
    registryDependencies: [],
  },
  {
    name: "checkbox",
    title: "Checkbox",
    description: "Accessible checkbox via Radix UI Checkbox, 4px radius, Navy fill on checked.",
    category: "Form",
    dependencies: ["@radix-ui/react-checkbox", "lucide-react"],
    registryDependencies: [],
  },
  {
    name: "radio-group",
    title: "Radio group",
    description: "Accessible radio group via Radix UI RadioGroup, 4px radius, Navy fill on selected.",
    category: "Form",
    dependencies: ["@radix-ui/react-radio-group", "lucide-react"],
    registryDependencies: [],
  },
  {
    name: "switch",
    title: "Switch",
    description: "Toggle switch via Radix UI Switch, 4px radius thumb, Navy fill when on.",
    category: "Form",
    dependencies: ["@radix-ui/react-switch"],
    registryDependencies: [],
  },
  {
    name: "form",
    title: "Form",
    description: "React Hook Form + Zod wrapper with accessible FormField, FormLabel, FormMessage primitives.",
    category: "Form",
    dependencies: ["react-hook-form", "@hookform/resolvers", "zod", "@radix-ui/react-slot"],
    registryDependencies: ["label"],
  },
  // ── Disclosure ────────────────────────────────────────────────────────────
  {
    name: "dialog",
    title: "Dialog",
    description: "Modal dialog via Radix UI Dialog — surface-container-high bg, 8px radius, scrim overlay.",
    category: "Disclosure",
    dependencies: ["@radix-ui/react-dialog", "lucide-react"],
    registryDependencies: [],
  },
  {
    name: "dropdown-menu",
    title: "Dropdown menu",
    description: "Accessible dropdown menu via Radix UI DropdownMenu — 4px radius, JetBrains Mono labels.",
    category: "Disclosure",
    dependencies: ["@radix-ui/react-dropdown-menu", "lucide-react"],
    registryDependencies: [],
  },
  {
    name: "popover",
    title: "Popover",
    description: "Floating popover via Radix UI Popover — surface-container-high bg, 4px radius, no shadow.",
    category: "Disclosure",
    dependencies: ["@radix-ui/react-popover"],
    registryDependencies: [],
  },
  {
    name: "sheet",
    title: "Sheet",
    description: "Slide-in panel via Radix UI Dialog — 4 sides (top/bottom/left/right), scrim overlay.",
    category: "Disclosure",
    dependencies: ["@radix-ui/react-dialog", "class-variance-authority", "lucide-react"],
    registryDependencies: [],
  },
  {
    name: "tabs",
    title: "Tabs",
    description: "Tab navigation via Radix UI Tabs — Sky Blue 4px active indicator, no shadow.",
    category: "Disclosure",
    dependencies: ["@radix-ui/react-tabs"],
    registryDependencies: [],
  },
  {
    name: "accordion",
    title: "Accordion",
    description: "Disclosure accordion via Radix UI Accordion — outline-variant dividers, no card shadow.",
    category: "Disclosure",
    dependencies: ["@radix-ui/react-accordion", "lucide-react"],
    registryDependencies: [],
  },
  // ── Feedback ──────────────────────────────────────────────────────────────
  {
    name: "alert",
    title: "Alert",
    description: "Inline status alert — default, info, success, destructive variants. No shadow, border-only depth.",
    category: "Feedback",
    dependencies: ["class-variance-authority"],
    registryDependencies: [],
  },
  {
    name: "sonner",
    title: "Toast (Sonner)",
    description: "Toast notifications via Sonner — top-right, JetBrains Mono optional label, Bangicode themed.",
    category: "Feedback",
    dependencies: ["sonner"],
    registryDependencies: [],
  },
  {
    name: "tooltip",
    title: "Tooltip",
    description: "Accessible tooltip via Radix UI Tooltip — surface-container-high bg, 4px radius, body-sm.",
    category: "Feedback",
    dependencies: ["@radix-ui/react-tooltip"],
    registryDependencies: [],
  },
  {
    name: "badge",
    title: "Badge",
    description: "Status tag — JetBrains Mono, uppercase, 4px radius. Variants: default, primary, secondary, outline, destructive.",
    category: "Feedback",
    dependencies: ["class-variance-authority"],
    registryDependencies: [],
  },
  // ── Layout ────────────────────────────────────────────────────────────────
  {
    name: "card",
    title: "Card",
    description: "Container card — outline-variant border, surface background, 8px radius, 24px padding.",
    category: "Layout",
    dependencies: [],
    registryDependencies: [],
  },
  {
    name: "separator",
    title: "Separator",
    description: "Horizontal or vertical 1px divider — outline-variant color via Radix UI Separator.",
    category: "Layout",
    dependencies: ["@radix-ui/react-separator"],
    registryDependencies: [],
  },
  {
    name: "avatar",
    title: "Avatar",
    description: "User avatar via Radix UI Avatar — 4px radius (not circular), Hanken Grotesk initials fallback.",
    category: "Layout",
    dependencies: ["@radix-ui/react-avatar"],
    registryDependencies: [],
  },
  {
    name: "skeleton",
    title: "Skeleton",
    description: "Loading skeleton — muted background pulse animation, 4px radius, no shadow.",
    category: "Layout",
    dependencies: [],
    registryDependencies: [],
  },
  // ── Dashboard ─────────────────────────────────────────────────────────────
  {
    name: "sidebar-nav",
    title: "Sidebar navigation",
    description: "Fixed 280px sidebar — primary-container Navy bg, Sky Blue 4px active indicator, mobile Sheet variant.",
    category: "Dashboard",
    dependencies: ["lucide-react"],
    registryDependencies: ["button", "sheet"],
  },
  {
    name: "data-table",
    title: "Data table",
    description: "TanStack Table v8 wrapper — Montserrat headers, JetBrains Mono numeric cells, surface-container row hover, no striping.",
    category: "Dashboard",
    dependencies: ["@tanstack/react-table", "lucide-react"],
    registryDependencies: ["button", "input"],
  },
  {
    name: "charts",
    title: "Charts (Recharts)",
    description: "Line, Bar, Area, Pie wrappers — token-mapped Navy/Sky palette, outline-variant grid, JetBrains Mono tooltip.",
    category: "Dashboard",
    dependencies: ["recharts"],
    registryDependencies: [],
  },
  {
    name: "stats-card",
    title: "Stats card",
    description: "Number-forward metric card — Montserrat display number, JetBrains Mono label, delta indicator.",
    category: "Dashboard",
    dependencies: ["lucide-react"],
    registryDependencies: [],
  },
  {
    name: "breadcrumb",
    title: "Breadcrumb",
    description: "Navigation breadcrumb — Hanken Grotesk body-sm, muted for inactive, foreground for current.",
    category: "Dashboard",
    dependencies: ["lucide-react"],
    registryDependencies: [],
  },
  {
    name: "pagination",
    title: "Pagination",
    description: "Page navigation — ghost button style, JetBrains Mono page numbers, 4px radius.",
    category: "Dashboard",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
  },
  // ── Marketing ─────────────────────────────────────────────────────────────
  {
    name: "hero-section",
    title: "Hero section",
    description: "Top-of-page marketing hero — Montserrat display-lg headline, Hanken Grotesk copy, CTA pair, optional JetBrains Mono eyebrow.",
    category: "Marketing",
    dependencies: [],
    registryDependencies: ["button"],
  },
  {
    name: "feature-grid",
    title: "Feature grid",
    description: "3-up / 4-up feature showcase — Lucide icon Sky Blue, headline-sm title, body-md description. Optional card chrome.",
    category: "Marketing",
    dependencies: ["lucide-react"],
    registryDependencies: ["card"],
  },
  {
    name: "pricing-table",
    title: "Pricing table",
    description: "Side-by-side pricing tiers — featured tier with surface-container-high + Sky Blue left border, Montserrat price, Check icons.",
    category: "Marketing",
    dependencies: ["lucide-react"],
    registryDependencies: ["button", "badge"],
  },
  {
    name: "cta-block",
    title: "CTA block",
    description: "Full-width band — primary-container Navy bg, white display-md headline, single CTA button.",
    category: "Marketing",
    dependencies: [],
    registryDependencies: ["button"],
  },
  {
    name: "testimonials",
    title: "Testimonials",
    description: "Quote-led testimonial grid — card chrome, Hanken Grotesk quote, Avatar + JetBrains Mono role/company.",
    category: "Marketing",
    dependencies: [],
    registryDependencies: ["avatar"],
  },
  {
    name: "logo-cloud",
    title: "Logo cloud",
    description: "Grayscale customer logo row — on-surface-variant tint, 5–6 per row, optional JetBrains Mono eyebrow.",
    category: "Marketing",
    dependencies: [],
    registryDependencies: [],
  },
  {
    name: "faq-section",
    title: "FAQ section",
    description: "Accordion-based FAQ — stacked or split layout (heading left, answers right).",
    category: "Marketing",
    dependencies: [],
    registryDependencies: ["accordion"],
  },
  {
    name: "site-footer",
    title: "Site footer",
    description: "3–4 column link grid + wordmark + copyright — JetBrains Mono column headings and legal line.",
    category: "Marketing",
    dependencies: [],
    registryDependencies: ["separator"],
  },
];

export const CATEGORIES: RegistryCategory[] = [
  "Form",
  "Disclosure",
  "Feedback",
  "Layout",
  "Dashboard",
  "Marketing",
];

export function getItem(slug: string): RegistryItem | undefined {
  return REGISTRY_ITEMS.find((item) => item.name === slug);
}
