#!/usr/bin/env node
/**
 * build-tokens.mjs
 *
 * Reads DESIGN.md YAML front matter directly and emits a Tailwind v4
 * `@theme` block to styles/theme.generated.css.
 *
 * Replaces the previous approach that called `npx @google/design.md export`
 * which hangs because the CLI does not yet ship a css-tailwind exporter.
 */
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import yaml from "js-yaml";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const designMdPath = join(root, "DESIGN.md");
const outPath = join(root, "styles", "theme.generated.css");

console.log("[bangicode] building tokens from DESIGN.md");

const content = readFileSync(designMdPath, "utf8");
const match = content.match(/^---\n([\s\S]*?)\n---/);
if (!match) {
  console.error("[bangicode] no YAML front matter found in DESIGN.md");
  process.exit(1);
}

const tokens = yaml.load(match[1]);
const lines = [];

lines.push("/**");
lines.push(" * AUTO-GENERATED from DESIGN.md by scripts/build-tokens.mjs");
lines.push(" * DO NOT EDIT. Edit DESIGN.md and re-run `npm run build:tokens`.");
lines.push(" */");
lines.push("");
lines.push("@theme {");

// Colors
if (tokens.colors) {
  lines.push("  /* Colors (Material 3 token set from DESIGN.md) */");
  for (const [name, value] of Object.entries(tokens.colors)) {
    lines.push(`  --color-${name}: ${value};`);
  }
  lines.push("");
}

// Font families (deduplicated from typography entries)
if (tokens.typography) {
  const families = new Set();
  for (const scale of Object.values(tokens.typography)) {
    if (scale.fontFamily) families.add(scale.fontFamily);
  }
  if (families.size) {
    lines.push("  /* Font families */");
    for (const family of families) {
      const slug = family.toLowerCase().replace(/\s+/g, "-");
      lines.push(`  --font-${slug}: "${family}", ui-sans-serif, system-ui, sans-serif;`);
    }
    lines.push("");
  }

  // Type scale
  lines.push("  /* Type scale */");
  for (const [name, scale] of Object.entries(tokens.typography)) {
    if (scale.fontSize) lines.push(`  --text-${name}: ${scale.fontSize};`);
    if (scale.lineHeight) lines.push(`  --text-${name}--line-height: ${scale.lineHeight};`);
    if (scale.letterSpacing) lines.push(`  --text-${name}--letter-spacing: ${scale.letterSpacing};`);
    if (scale.fontWeight) lines.push(`  --text-${name}--font-weight: ${scale.fontWeight};`);
  }
  lines.push("");
}

// Border radius
if (tokens.rounded) {
  lines.push("  /* Radius */");
  for (const [name, value] of Object.entries(tokens.rounded)) {
    const key = name === "DEFAULT" ? "radius" : `radius-${name}`;
    lines.push(`  --${key}: ${value};`);
  }
  lines.push("");
}

// Spacing
if (tokens.spacing) {
  lines.push("  /* Spacing */");
  for (const [name, value] of Object.entries(tokens.spacing)) {
    lines.push(`  --spacing-${name}: ${value};`);
  }
  lines.push("");
}

lines.push("}");
lines.push("");

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, lines.join("\n"));
console.log(`[bangicode] wrote ${outPath} (${lines.length} lines)`);
