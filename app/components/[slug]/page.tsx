import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { REGISTRY_ITEMS, getItem } from "@/lib/registry-data";
import { CopyButton } from "../_components/copy-button";

const REGISTRY_HOST = "https://design.bangicode.ma";

export function generateStaticParams() {
  return REGISTRY_ITEMS.map((item) => ({ slug: item.name }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getItem(slug);
  if (!item) return {};
  return {
    title: `${item.title} — Bangicode`,
    description: item.description,
  };
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getItem(slug);
  if (!item) notFound();

  const installCmd = `npx shadcn@latest add ${REGISTRY_HOST}/r/${item.name}.json`;

  return (
    <article className="max-w-2xl space-y-10">
      {/* Header */}
      <div className="space-y-2">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          {item.category}
        </p>
        <h1 className="font-display text-3xl font-bold tracking-tight text-foreground">
          {item.title}
        </h1>
        <p className="text-base text-muted-foreground">{item.description}</p>
      </div>

      {/* Install */}
      <section className="space-y-3">
        <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
          Install
        </h2>
        <div className="flex items-center gap-2 rounded-sm border border-border bg-muted px-4 py-3">
          <code className="flex-1 font-mono text-sm text-foreground">{installCmd}</code>
          <CopyButton value={installCmd} />
        </div>
      </section>

      {/* Dependencies */}
      {item.dependencies.length > 0 && (
        <section className="space-y-3">
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
            npm dependencies
          </h2>
          <ul className="space-y-1">
            {item.dependencies.map((dep) => (
              <li key={dep} className="flex items-center gap-2">
                <span className="font-mono text-xs text-muted-foreground">—</span>
                <code className="font-mono text-sm text-foreground">{dep}</code>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Registry dependencies */}
      {item.registryDependencies.length > 0 && (
        <section className="space-y-3">
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
            Registry dependencies
          </h2>
          <ul className="space-y-1">
            {item.registryDependencies.map((dep) => (
              <li key={dep} className="flex items-center gap-2">
                <span className="font-mono text-xs text-muted-foreground">—</span>
                <code className="font-mono text-sm text-foreground">{dep}</code>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Source link */}
      <section>
        <a
          href={`${REGISTRY_HOST}/r/${item.name}.json`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          View registry JSON →
        </a>
      </section>
    </article>
  );
}
