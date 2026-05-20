import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/bangicode/ui/button";
import { Badge } from "@/registry/bangicode/ui/badge";

export interface PricingTier {
  name: string;
  price: string;
  currency?: string;
  period?: string;
  description?: string;
  features: string[];
  cta: { label: string; href?: string; onClick?: () => void };
  featured?: boolean;
  badge?: string;
}

export interface PricingTableProps {
  tiers: PricingTier[];
  className?: string;
}

const PricingTable = React.forwardRef<HTMLElement, PricingTableProps>(
  ({ tiers, className }, ref) => {
    return (
      <section ref={ref} className={cn("w-full px-6 py-16", className)}>
        <div className="mx-auto w-full max-w-[1280px]">
          <div
            className={cn(
              "grid gap-6",
              "grid-cols-1 sm:grid-cols-2",
              tiers.length >= 3 && "lg:grid-cols-3",
            )}
          >
            {tiers.map((tier, i) => (
              <div
                key={i}
                className={cn(
                  "relative flex flex-col rounded-lg border p-6",
                  tier.featured
                    ? "border-secondary-container border-l-4 bg-surface-container-high"
                    : "border-border bg-card",
                )}
              >
                {tier.badge && (
                  <div className="mb-3">
                    <Badge variant={tier.featured ? "secondary" : "default"}>
                      {tier.badge}
                    </Badge>
                  </div>
                )}

                <p className="font-montserrat text-lg font-semibold text-foreground">{tier.name}</p>

                {tier.description && (
                  <p className="mt-1 font-hanken-grotesk text-sm text-muted-foreground">
                    {tier.description}
                  </p>
                )}

                <div className="mt-6 flex items-end gap-1">
                  {tier.currency && (
                    <span className="font-jetbrains-mono mb-1 text-base tabular-nums text-muted-foreground">
                      {tier.currency}
                    </span>
                  )}
                  <span className="font-montserrat text-[48px] font-bold leading-[56px] tracking-[-0.02em] text-foreground">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="font-hanken-grotesk mb-2 text-sm text-muted-foreground">
                      /{tier.period}
                    </span>
                  )}
                </div>

                <ul className="my-6 flex-1 space-y-3">
                  {tier.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span className="font-hanken-grotesk text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {tier.cta.href ? (
                  <Button
                    variant={tier.featured ? "primary" : "secondary"}
                    size="md"
                    className="w-full"
                    asChild
                  >
                    <a href={tier.cta.href}>{tier.cta.label}</a>
                  </Button>
                ) : (
                  <Button
                    variant={tier.featured ? "primary" : "secondary"}
                    size="md"
                    className="w-full"
                    onClick={tier.cta.onClick}
                  >
                    {tier.cta.label}
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  },
);
PricingTable.displayName = "PricingTable";

export { PricingTable };
