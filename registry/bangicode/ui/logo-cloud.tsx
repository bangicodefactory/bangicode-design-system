import * as React from "react";
import { cn } from "@/lib/utils";

export interface LogoCloudItem {
  name: string;
  logo?: React.ReactNode;
}

export interface LogoCloudProps {
  logos: LogoCloudItem[];
  eyebrow?: string;
  className?: string;
}

const LogoCloud = React.forwardRef<HTMLElement, LogoCloudProps>(
  ({ logos, eyebrow, className }, ref) => {
    return (
      <section ref={ref} className={cn("w-full px-6 py-12", className)}>
        <div className="mx-auto w-full max-w-[1280px]">
          {eyebrow && (
            <p className="mb-8 text-center font-jetbrains-mono text-xs uppercase tracking-widest text-muted-foreground">
              {eyebrow}
            </p>
          )}
          <ul
            className={cn(
              "flex list-none flex-wrap items-center justify-center gap-x-12 gap-y-6 p-0",
            )}
          >
            {logos.map((item, i) => (
              <li
                key={i}
                className="flex items-center justify-center opacity-40 grayscale transition-opacity hover:opacity-60"
                title={item.name}
              >
                {item.logo ? (
                  item.logo
                ) : (
                  <span className="font-montserrat text-lg font-semibold text-on-surface-variant">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  },
);
LogoCloud.displayName = "LogoCloud";

export { LogoCloud };
