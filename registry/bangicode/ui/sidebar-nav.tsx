"use client";

import * as React from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/bangicode/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/bangicode/ui/sheet";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface SidebarNavItem {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  active?: boolean;
}

export interface SidebarNavSection {
  title?: string;
  items: SidebarNavItem[];
}

export interface SidebarNavProps {
  sections: SidebarNavSection[];
  logo?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

// ─── Inner nav list (shared between fixed and Sheet) ─────────────────────────

function NavContent({ sections, logo, footer }: Omit<SidebarNavProps, "className">) {
  return (
    <div className="flex h-full flex-col">
      {logo && (
        <div className="flex h-16 shrink-0 items-center px-6 border-b border-white/10">
          {logo}
        </div>
      )}

      <nav className="flex-1 overflow-y-auto py-4">
        {sections.map((section, si) => (
          <div key={si} className="mb-4">
            {section.title && (
              <p className="mb-1 px-6 font-jetbrains-mono text-[11px] uppercase tracking-widest text-on-primary-container/60">
                {section.title}
              </p>
            )}
            <ul>
              {section.items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={cn(
                      "group flex items-center gap-3 px-6 py-2.5",
                      "font-hanken-grotesk text-sm transition-colors",
                      "border-l-4",
                      item.active
                        ? [
                            "border-secondary-container bg-primary",
                            "text-on-primary",
                          ]
                        : [
                            "border-transparent",
                            "text-on-primary-container hover:bg-primary hover:text-on-primary",
                          ],
                    )}
                  >
                    {item.icon && (
                      <item.icon
                        className={cn(
                          "h-4 w-4 shrink-0 transition-colors",
                          item.active
                            ? "text-secondary-container"
                            : "text-on-primary-container/70 group-hover:text-on-primary",
                        )}
                      />
                    )}
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {footer && (
        <div className="shrink-0 border-t border-white/10 p-4">
          {footer}
        </div>
      )}
    </div>
  );
}

// ─── Fixed sidebar (desktop) ─────────────────────────────────────────────────

const SidebarNav = React.forwardRef<HTMLElement, SidebarNavProps>(
  ({ sections, logo, footer, className }, ref) => (
    <aside
      ref={ref}
      className={cn(
        "hidden w-[280px] shrink-0 bg-primary-container lg:flex lg:flex-col",
        className,
      )}
    >
      <NavContent sections={sections} logo={logo} footer={footer} />
    </aside>
  ),
);
SidebarNav.displayName = "SidebarNav";

// ─── Mobile trigger (renders a Sheet) ────────────────────────────────────────

function SidebarNavMobileTrigger({
  sections,
  logo,
  footer,
  label = "Menu",
}: SidebarNavProps & { label?: string }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label={label} className="lg:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] bg-primary-container p-0 border-r-0">
        <SheetHeader className="sr-only">
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <NavContent sections={sections} logo={logo} footer={footer} />
      </SheetContent>
    </Sheet>
  );
}

export { SidebarNav, SidebarNavMobileTrigger };
