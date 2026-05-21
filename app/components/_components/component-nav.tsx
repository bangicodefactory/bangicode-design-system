"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CATEGORIES, REGISTRY_ITEMS, type RegistryCategory } from "@/lib/registry-data";
import { cn } from "@/lib/utils";

export function ComponentNav() {
  const pathname = usePathname();
  const [query, setQuery] = useState("");

  const filtered = query.trim()
    ? REGISTRY_ITEMS.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.name.toLowerCase().includes(query.toLowerCase())
      )
    : null;

  const itemsByCategory = (category: RegistryCategory) =>
    (filtered ?? REGISTRY_ITEMS).filter((item) => item.category === category);

  const visibleCategories = CATEGORIES.filter(
    (cat) => itemsByCategory(cat).length > 0
  );

  return (
    <nav className="flex flex-col gap-6">
      <input
        type="search"
        placeholder="Search components…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="h-8 w-full rounded-sm border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        aria-label="Search components"
      />

      {visibleCategories.map((category) => (
        <div key={category}>
          <p className="mb-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            {category}
          </p>
          <ul className="space-y-0.5">
            {itemsByCategory(category).map((item) => {
              const isActive = pathname === `/components/${item.name}`;
              return (
                <li key={item.name}>
                  <Link
                    href={`/components/${item.name}`}
                    className={cn(
                      "block rounded-sm px-2 py-1 text-sm transition-colors",
                      isActive
                        ? "bg-secondary/20 font-medium text-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
