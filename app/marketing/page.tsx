import { Code2, GitBranch, Layers, Lock, Palette, Zap } from "lucide-react";

import { HeroSection } from "@/components/ui/hero-section";
import { FeatureGrid } from "@/components/ui/feature-grid";
import { PricingTable } from "@/components/ui/pricing-table";
import { CtaBlock } from "@/components/ui/cta-block";
import { Testimonials } from "@/components/ui/testimonials";
import { LogoCloud } from "@/components/ui/logo-cloud";
import { FaqSection } from "@/components/ui/faq-section";
import { SiteFooter } from "@/components/ui/site-footer";

export default function MarketingShowcase() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <HeroSection
        eyebrow="Bangicode design system · v0.1.0"
        headline="One design system. Every Bangicode product in sync."
        copy="A DESIGN.md-driven token pipeline feeding a private shadcn registry. Change the spec once — every component re-themes on the next build."
        primaryCta={{ label: "Get started", href: "#" }}
        secondaryCta={{ label: "View registry", href: "#" }}
      />

      {/* Logo cloud */}
      <LogoCloud
        eyebrow="Used across Bangicode products"
        logos={[
          { name: "Direct Auto Care" },
          { name: "Bangicode App" },
          { name: "Admin Portal" },
          { name: "Client Hub" },
          { name: "Analytics" },
        ]}
      />

      {/* Feature grid — chromeless */}
      <FeatureGrid
        features={[
          {
            icon: Palette,
            title: "Token-first theming",
            description:
              "DESIGN.md defines every colour, type scale, and radius. The build pipeline generates Tailwind v4 CSS variables automatically.",
          },
          {
            icon: Layers,
            title: "Private shadcn registry",
            description:
              "Install any component into a consumer project with a single npx shadcn add command — no copy-paste, no drift.",
          },
          {
            icon: GitBranch,
            title: "Reproducible by default",
            description:
              "Lockfile + Renovate keep dependencies pinned and updated safely. Engine-strict mode catches version skew in CI.",
          },
          {
            icon: Code2,
            title: "Tri-font type system",
            description:
              "Montserrat for headlines, Hanken Grotesk for body, JetBrains Mono for code and numeric data.",
          },
          {
            icon: Lock,
            title: "Flat-plus depth",
            description:
              "No shadows. Tonal layering and 1px outline-variant borders create hierarchy without elevation.",
          },
          {
            icon: Zap,
            title: "22 themed primitives",
            description:
              "Form, disclosure, feedback, and layout primitives — all carrying Bangicode tokens, never raw hex values.",
          },
        ]}
        columns={3}
      />

      {/* Feature grid — with card chrome */}
      <section className="bg-muted px-6 py-16">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="mb-2 font-montserrat text-[32px] font-semibold leading-[40px] tracking-[-0.01em] text-foreground">
            Dashboard components
          </h2>
          <p className="mb-12 font-hanken-grotesk text-lg text-muted-foreground">
            Higher-level blocks for admin and data-heavy interfaces.
          </p>
          <FeatureGrid
            features={[
              {
                icon: Layers,
                title: "Sidebar navigation",
                description: "Fixed 280px Navy sidebar with Sky Blue active indicator and mobile Sheet variant.",
              },
              {
                icon: Code2,
                title: "DataTable",
                description: "TanStack Table v8 with Montserrat headers, JetBrains Mono numeric cells, sort and filter.",
              },
              {
                icon: Zap,
                title: "Chart wrappers",
                description: "Recharts Line, Bar, Area, Pie — token-mapped palette, no drop shadows.",
              },
              {
                icon: Palette,
                title: "Stats cards",
                description: "Number-forward metrics with Montserrat display number and delta indicator.",
              },
            ]}
            columns={4}
            withCard
          />
        </div>
      </section>

      {/* Pricing */}
      <PricingTable
        tiers={[
          {
            name: "Starter",
            currency: "$",
            price: "0",
            period: "mo",
            description: "For individual projects and exploration.",
            features: [
              "All 22 primitives",
              "DESIGN.md token pipeline",
              "shadcn registry access",
              "Community support",
            ],
            cta: { label: "Start for free", href: "#" },
          },
          {
            name: "Pro",
            currency: "$",
            price: "49",
            period: "mo",
            description: "For teams shipping multiple products.",
            features: [
              "Everything in Starter",
              "Dashboard components",
              "Marketing blocks",
              "Private registry hosting",
              "Priority support",
            ],
            cta: { label: "Start free trial", href: "#" },
            featured: true,
            badge: "Most popular",
          },
          {
            name: "Enterprise",
            currency: "$",
            price: "199",
            period: "mo",
            description: "For organisations with custom requirements.",
            features: [
              "Everything in Pro",
              "Custom token palette",
              "Dedicated Slack channel",
              "SLA + onboarding",
            ],
            cta: { label: "Contact sales", href: "#" },
          },
        ]}
      />

      {/* Testimonials */}
      <Testimonials
        heading="What teams say"
        testimonials={[
          {
            quote:
              "The token pipeline is exactly what we needed. DESIGN.md changes propagate to every product automatically — no more design-dev drift.",
            name: "Sara Benali",
            role: "Lead designer",
            company: "Bangicode",
            avatarFallback: "SB",
          },
          {
            quote:
              "Installing a component with a single CLI command and knowing it'll match our brand tokens perfectly is a game-changer.",
            name: "Youssef Idrissi",
            role: "Frontend engineer",
            company: "Direct Auto Care",
            avatarFallback: "YI",
          },
          {
            quote:
              "The flat-plus depth system keeps the UI clean without any of the shadow-layering debates we used to have.",
            name: "Nadia Chraibi",
            role: "Product manager",
            company: "Bangicode App",
            avatarFallback: "NC",
          },
        ]}
      />

      {/* CTA block */}
      <CtaBlock
        headline="Ready to ship a consistent product?"
        subtext="Get started with the Bangicode design system in minutes."
        cta={{ label: "View the registry", href: "#" }}
      />

      {/* FAQ */}
      <FaqSection
        layout="split"
        heading="Common questions"
        items={[
          {
            question: "How do I install a component in my project?",
            answer:
              'Run `npx shadcn add https://design.bangicode.ma/r/<name>.json` in your Next.js project. The component lands in components/ui/ already themed to Bangicode tokens.',
          },
          {
            question: "Can I use this with a non-Next.js framework?",
            answer:
              "The registry artifacts are framework-agnostic TSX. The token pipeline targets Tailwind v4 CSS variables, which work anywhere Tailwind does.",
          },
          {
            question: "What happens when DESIGN.md tokens change?",
            answer:
              "Run `npm run build:tokens` (or push — the predev/prebuild hooks do it automatically). All components re-theme via CSS variables with zero code changes.",
          },
          {
            question: "Is dark mode supported?",
            answer:
              "A `.dark` stub exists. Full dark mode requires a DESIGN.dark.md file and extending build-tokens.mjs — tracked in IST-182.",
          },
          {
            question: "How is the lockfile kept up to date?",
            answer:
              "Renovate opens weekly PRs grouped by framework bumps. Each update runs CI before merge, so breaking changes are caught early.",
          },
        ]}
      />

      {/* Footer */}
      <SiteFooter
        logo={
          <span className="font-montserrat text-sm font-semibold text-foreground">Bangicode</span>
        }
        columns={[
          {
            title: "Product",
            links: [
              { label: "Registry", href: "#" },
              { label: "Components", href: "#" },
              { label: "Changelog", href: "#" },
            ],
          },
          {
            title: "Developers",
            links: [
              { label: "CLAUDE.md", href: "#" },
              { label: "DESIGN.md", href: "#" },
              { label: "GitHub", href: "https://github.com/bangicodefactory/bangicode-design-system" },
            ],
          },
          {
            title: "Company",
            links: [
              { label: "About", href: "#" },
              { label: "Contact", href: "#" },
            ],
          },
        ]}
        legal="© 2026 Bangicode. All rights reserved. · DESIGN.md v0.1 · shadcn registry"
      />
    </div>
  );
}
