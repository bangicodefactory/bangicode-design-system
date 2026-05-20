import * as React from "react";
import { cn } from "@/lib/utils";
import { Separator } from "@/registry/bangicode/ui/separator";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface SiteFooterProps {
  columns?: FooterColumn[];
  logo?: React.ReactNode;
  legal?: string;
  className?: string;
}

const SiteFooter = React.forwardRef<HTMLElement, SiteFooterProps>(
  ({ columns, logo, legal, className }, ref) => {
    const year = new Date().getFullYear();

    return (
      <footer ref={ref} className={cn("w-full border-t border-border bg-background px-6 py-12", className)}>
        <div className="mx-auto w-full max-w-[1280px]">
          {/* Link columns */}
          {columns && columns.length > 0 && (
            <div
              className={cn(
                "grid gap-8",
                "grid-cols-2 sm:grid-cols-3",
                columns.length >= 4 && "lg:grid-cols-4",
              )}
            >
              {columns.map((col, ci) => (
                <div key={ci}>
                  <p className="font-jetbrains-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {col.title}
                  </p>
                  <ul className="mt-4 space-y-3 list-none p-0">
                    {col.links.map((link, li) => (
                      <li key={li}>
                        <a
                          href={link.href}
                          className="font-hanken-grotesk text-sm text-foreground transition-colors hover:text-accent"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          <Separator className={cn(columns && columns.length > 0 && "my-8")} />

          {/* Bottom bar */}
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            {logo && <div>{logo}</div>}
            <p className="font-jetbrains-mono text-xs text-muted-foreground">
              {legal ?? `© ${year} Bangicode. All rights reserved.`}
            </p>
          </div>
        </div>
      </footer>
    );
  },
);
SiteFooter.displayName = "SiteFooter";

export { SiteFooter };
