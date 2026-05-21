import type { Metadata } from "next";
import { readFileSync } from "fs";
import { join } from "path";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Changelog — Bangicode",
  description: "What changed in the Bangicode design system registry.",
};

function parseChangelog(md: string) {
  const releases: { version: string; date: string; sections: { heading: string; items: string[] }[] }[] = [];
  let current: (typeof releases)[0] | null = null;
  let currentSection: { heading: string; items: string[] } | null = null;

  for (const raw of md.split("\n")) {
    const line = raw.trim();

    const h2 = line.match(/^##\s+(.+?)\s+—\s+(.+)$/);
    if (h2) {
      if (current) releases.push(current);
      current = { version: h2[1], date: h2[2], sections: [] };
      currentSection = null;
      continue;
    }

    const h3 = line.match(/^###\s+(.+)$/);
    if (h3 && current) {
      currentSection = { heading: h3[1], items: [] };
      current.sections.push(currentSection);
      continue;
    }

    const bullet = line.match(/^[-*]\s+(.+)$/);
    if (bullet && currentSection) {
      currentSection.items.push(bullet[1]);
    }
  }
  if (current) releases.push(current);
  return releases;
}

export default function ChangelogPage() {
  const md = readFileSync(join(process.cwd(), "CHANGELOG.md"), "utf8");
  const releases = parseChangelog(md);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b border-border bg-background">
        <div className="mx-auto flex h-14 max-w-screen-xl items-center gap-4 px-6">
          <Link href="/" className="mr-4 shrink-0">
            <Image src="/logo.svg" alt="Bangicode" width={140} height={22} priority />
          </Link>
          <span className="text-sm text-muted-foreground">Changelog</span>
        </div>
      </header>

      <main className="mx-auto w-full max-w-2xl px-6 py-12 space-y-16">
        <div className="space-y-2">
          <h1 className="font-display text-3xl font-bold tracking-tight text-foreground">Changelog</h1>
          <p className="text-base text-muted-foreground">
            Component and token changes across registry versions.
          </p>
        </div>

        {releases.map((release) => (
          <section key={release.version} className="space-y-6">
            <div className="flex items-baseline gap-4 border-b border-border pb-4">
              <h2 className="font-display text-xl font-bold text-foreground">{release.version}</h2>
              <span className="font-mono text-xs text-muted-foreground">{release.date}</span>
            </div>

            {release.sections.map((section) => (
              <div key={section.heading} className="space-y-2">
                <h3 className="font-mono text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  {section.heading}
                </h3>
                <ul className="space-y-1">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-foreground">
                      <span className="font-mono text-xs text-muted-foreground mt-0.5 shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        ))}
      </main>
    </div>
  );
}
