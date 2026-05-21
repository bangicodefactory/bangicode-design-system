"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV = [
  {
    heading: "Getting started",
    links: [
      { href: "/docs/first-install", label: "First install" },
      { href: "/docs/add-component", label: "Add a component" },
    ],
  },
  {
    heading: "Registry",
    links: [
      { href: "/changelog", label: "Changelog" },
      { href: "/components", label: "Component library" },
    ],
  },
];

export function DocsNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-6">
      {NAV.map((section) => (
        <div key={section.heading}>
          <p className="mb-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            {section.heading}
          </p>
          <ul className="space-y-0.5">
            {section.links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    "block rounded-sm px-2 py-1 text-sm transition-colors",
                    pathname === href
                      ? "bg-secondary/20 font-medium text-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
