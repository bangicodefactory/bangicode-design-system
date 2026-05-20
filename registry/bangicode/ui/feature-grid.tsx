import * as React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/registry/bangicode/ui/card";

export interface FeatureItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface FeatureGridProps {
  features: FeatureItem[];
  /** Number of columns at desktop breakpoint (default 3) */
  columns?: 3 | 4;
  /** Wrap each cell in a Card (default false — chromeless) */
  withCard?: boolean;
  className?: string;
}

const FeatureGrid = React.forwardRef<HTMLElement, FeatureGridProps>(
  ({ features, columns = 3, withCard = false, className }, ref) => {
    return (
      <section ref={ref} className={cn("w-full px-6 py-16", className)}>
        <div className="mx-auto w-full max-w-[1280px]">
          <ul
            className={cn(
              "grid gap-8 list-none p-0",
              "grid-cols-1 sm:grid-cols-2",
              columns === 3 && "lg:grid-cols-3",
              columns === 4 && "lg:grid-cols-4",
            )}
          >
            {features.map((feature, i) =>
              withCard ? (
                <li key={i}>
                  <Card className="h-full">
                    <CardHeader className="pb-2">
                      <feature.icon className="h-6 w-6 text-accent" />
                      <h3 className="mt-3 font-montserrat text-[20px] font-medium leading-[28px] text-foreground">
                        {feature.title}
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <p className="font-hanken-grotesk text-base text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </li>
              ) : (
                <li key={i} className="flex flex-col gap-3">
                  <feature.icon className="h-6 w-6 text-accent" />
                  <h3 className="font-montserrat text-[20px] font-medium leading-[28px] text-foreground">
                    {feature.title}
                  </h3>
                  <p className="font-hanken-grotesk text-base text-muted-foreground">
                    {feature.description}
                  </p>
                </li>
              ),
            )}
          </ul>
        </div>
      </section>
    );
  },
);
FeatureGrid.displayName = "FeatureGrid";

export { FeatureGrid };
