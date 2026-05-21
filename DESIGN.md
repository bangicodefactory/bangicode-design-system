---
name: Bangicode Identity System
colors:
  surface: '#f7f9ff'
  surface-dim: '#d8dae0'
  surface-bright: '#f7f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3f9'
  surface-container: '#eceef4'
  surface-container-high: '#e6e8ee'
  surface-container-highest: '#e0e2e8'
  on-surface: '#181c20'
  on-surface-variant: '#444650'
  inverse-surface: '#2d3135'
  inverse-on-surface: '#eff1f7'
  outline: '#757781'
  outline-variant: '#c5c6d1'
  surface-tint: '#465d96'
  primary: '#000c2c'
  on-primary: '#ffffff'
  primary-container: '#002058'
  on-primary-container: '#7389c7'
  inverse-primary: '#b2c5ff'
  secondary: '#016397'
  on-secondary: '#ffffff'
  secondary-container: '#80c5fe'
  on-secondary-container: '#00517d'
  tertiary: '#280000'
  on-tertiary: '#ffffff'
  tertiary-container: '#510000'
  on-tertiary-container: '#dc6857'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2ff'
  primary-fixed-dim: '#b2c5ff'
  on-primary-fixed: '#001847'
  on-primary-fixed-variant: '#2d457d'
  secondary-fixed: '#cce5ff'
  secondary-fixed-dim: '#93ccff'
  on-secondary-fixed: '#001d31'
  on-secondary-fixed-variant: '#004b73'
  tertiary-fixed: '#ffdad4'
  tertiary-fixed-dim: '#ffb4a8'
  on-tertiary-fixed: '#410000'
  on-tertiary-fixed-variant: '#83251b'
  background: '#f7f9ff'
  on-background: '#181c20'
  surface-variant: '#e0e2e8'
  scrim: '#091D2E'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Montserrat
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: 0em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  space-xs: 4px
  space-sm: 8px
  space-md: 16px
  space-lg: 24px
  space-xl: 32px
  space-2xl: 48px
  space-3xl: 64px
  container-max: 1280px
  gutter: 24px
components:
  button:
    radius: 0.25rem
    focus-ring-width: 2px
    focus-ring-offset: 2px
    height-sm: 32px
    height-md: 40px
    height-lg: 48px
  input:
    radius: 0.25rem
    border-width: 1px
    height: 40px
    padding-x: 12px
  card:
    radius: 0.5rem
    padding: 24px
    border-width: 1px
  dialog:
    radius: 0.5rem
    scrim-opacity: 0.4
    max-width: 32rem
  sheet:
    scrim-opacity: 0.4
    max-width: 24rem
  badge:
    radius: 0.25rem
    font-size: 11px
    letter-spacing: 0.05em
  avatar:
    size-sm: 24px
    size-md: 32px
    size-lg: 40px
  tooltip:
    radius: 0.25rem
    padding-x: 12px
    padding-y: 6px
  sidebar-nav:
    width: 280px
    active-border-width: 4px
  data-table:
    header-font-size: 13px
    header-letter-spacing: 0.06em
    row-height: 48px
  stats-card:
    number-font-size: 2.25rem
  hero-section:
    container-max-width: 1280px
    heading-size-desktop: 48px
    heading-size-mobile: 32px
  pricing-table:
    radius: 0.5rem
    featured-border-width: 4px
---

## Brand & Style
The design system is built for a high-precision software development studio, emphasizing technical excellence, Moroccan craft-inspired precision, and modern corporate reliability. The aesthetic follows a **Corporate-Modern** direction with a **Flat-plus** execution: it prioritizes clarity and structural integrity over decorative effects.

The emotional response should be one of "Engineered Trust"—feeling stable, developer-centric, and meticulously organized. The interface uses a restrained visual language where hierarchy is communicated through intentional color blocking and crisp 1px outlines rather than heavy shadows or gradients. 

**Key Principles:**
- **High-Precision:** Every element aligns to a strict 8px grid.
- **Restrained:** Use color only to denote action or critical status.
- **Accessible:** All color combinations must exceed WCAG 2.2 AA contrast ratios.
- **Editorial:** Use sentence case for all UI copy to maintain a professional yet approachable tone.

## Colors
The palette is anchored in a deep **Primary Navy** (#000C2C) representing the studio's foundation, with **Primary Container Navy** (#002058) used for large structural fills like sidebars. It is supported by a technical **Sky Blue** for interactivity and a "Tech Red" reserved exclusively for critical warnings or error states.

- **Primary & Containers:** Use `Primary Navy` for main actions and `Primary Container` for structural navigation elements like sidebars.
- **Interactive:** `Secondary Sky Blue` is the primary color for links and focus states. `Secondary Container` acts as a high-visibility accent for active tab indicators or chip backgrounds.
- **Surfaces:** The background is a crisp `Surface` blue-white (#F7F9FF). Depth is created by layering `Surface-container` (#ECEEF4) rather than adding shadows.
- **Typography:** Use `On-surface` for maximum readability in headlines and body. Use `On-surface-variant` for metadata and secondary labels.

## Typography
This design system uses a tri-font strategy to balance brand presence with technical utility.

- **Montserrat:** Used for high-level branding and headlines. It should always be set with a slight negative letter spacing (-0.01em to -0.02em) to maintain a tight, engineered feel.
- **Hanken Grotesk:** The primary workhorse for all body text, UI labels, and inputs. It provides a clean, modern grotesque look that remains highly legible at small sizes.
- **JetBrains Mono:** Reserved for "Technical Artifacts." Use this for code snippets, version numbers, status tags, and statistical data. It signals the developer-centric nature of the brand.

Always use **Sentence case** for headings and buttons to ensure the UI feels modern and sophisticated.

## Layout & Spacing
The layout is governed by a strict **8px baseline grid**. All spatial increments must be multiples of 8 (with 4px reserved for micro-adjustments like icon-to-label spacing).

- **Grid System:** Use a 12-column fluid grid for desktop with 24px gutters. For dashboards, use a fixed sidebar (280px) with a fluid content area.
- **Desktop (1440px+):** 24px margins, 24px gutters.
- **Tablet (768px - 1024px):** 16px margins, 16px gutters.
- **Mobile (below 768px):** 16px margins, 12px gutters. Headlines should scale down using the `-mobile` variants defined in Typography.

Spacing should be used to create clear logical groups. Use `space-xl` (32px) to separate major sections and `space-md` (16px) for internal component padding.

## Elevation & Depth
This design system employs a **Flat-plus** depth model. Traditional drop shadows are avoided in favor of tonal layering and precise borders.

- **Layering:** Use `Surface` for the main background. Use `Surface-container` for cards, modals, or distinct UI sections.
- **Outlines:** Use 1px borders in `Outline-variant` (#C5C6D1) to define the boundaries of elements. This replaces the need for shadows.
- **Interactive Elevation:** Elements do not "lift" on hover. Instead, they change fill color (e.g., a card background may move from `Surface` to `Surface-container`) or the border thickness/color may shift.
- **Modals/Overlays:** When a modal is required, use a high-opacity scrim (#091D2E at 40%) to dim the background, keeping the modal surface flat with a crisp `Outline-variant` border.

## Shapes
The shape language is disciplined and geometric. 

- **Components:** Buttons, input fields, and tags use a **4px (0.25rem)** radius (`rounded-sm`). This creates a sharp, professional look that aligns with the 8px grid.
- **Containers:** Cards and large containers use an **8px (0.5rem)** radius (`rounded-lg`) to provide a subtle distinction from smaller components.
- **System:** Do not use fully rounded pill shapes or circular buttons, as these clash with the "High-Precision" brand intent.

## Components

- **Buttons:** 
  - *Primary:* Filled `Primary Navy` with White text. 4px radius. 
  - *Secondary:* 1px `Secondary Sky Blue` outline with Sky Blue text.
  - *Focus State:* A 2px `Secondary Sky Blue` ring with a 2px offset.
- **Input Fields:** 
  - Use `Surface` fill with a 1px `Outline-variant` border. Labels should be in `Hanken Grotesk` (Body-sm). Error states use `Tertiary Tech Red` for the border and helper text.
- **Cards:** 
  - 1px `Outline-variant` border, `Surface-container` or `Surface` background, and 8px radius. Content should have 24px internal padding.
- **Chips/Tags:** 
  - Use `JetBrains Mono` for tag text. Default tags should use `Surface-container` background with `On-surface-variant` text. Active or high-priority tags use `Secondary Container` with `Primary Navy` text.
- **Navigation Sidebar:** 
  - Background: `Primary Container Navy`. Active links: `Secondary Container` left-border (4px) and a subtle fill shift. Text: White or high-contrast silver.
- **Data Tables:** 
  - Header cells: `Montserrat` (Label-mono style), 1px bottom border. Row hover state: `Surface-container`. Use `JetBrains Mono` for all numeric data.