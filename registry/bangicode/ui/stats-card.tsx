import * as React from "react";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface StatsCardProps {
  label: string;
  value: React.ReactNode;
  /** Positive = blue, negative = destructive red, zero = neutral */
  delta?: number;
  deltaLabel?: string;
  description?: string;
  className?: string;
}

const StatsCard = React.forwardRef<HTMLDivElement, StatsCardProps>(
  ({ label, value, delta, deltaLabel, description, className }, ref) => {
    const deltaPositive = delta !== undefined && delta > 0;
    const deltaNegative = delta !== undefined && delta < 0;

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg border border-border bg-card p-6",
          className,
        )}
      >
        <p className="font-jetbrains-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          {label}
        </p>

        <p className="mt-2 font-montserrat text-4xl font-bold tracking-tight text-foreground">
          {value}
        </p>

        {delta !== undefined && (
          <div
            className={cn(
              "mt-3 flex items-center gap-1 font-hanken-grotesk text-sm font-medium",
              deltaPositive && "text-accent",
              deltaNegative && "text-destructive",
              !deltaPositive && !deltaNegative && "text-muted-foreground",
            )}
          >
            {deltaPositive ? (
              <TrendingUp className="h-4 w-4" />
            ) : deltaNegative ? (
              <TrendingDown className="h-4 w-4" />
            ) : (
              <Minus className="h-4 w-4" />
            )}
            <span className="font-jetbrains-mono tabular-nums">
              {delta > 0 ? "+" : ""}{delta}%
            </span>
            {deltaLabel && (
              <span className="text-muted-foreground font-hanken-grotesk font-normal">
                {deltaLabel}
              </span>
            )}
          </div>
        )}

        {description && (
          <p className="mt-1 font-hanken-grotesk text-sm text-muted-foreground">{description}</p>
        )}
      </div>
    );
  },
);
StatsCard.displayName = "StatsCard";

export { StatsCard };
