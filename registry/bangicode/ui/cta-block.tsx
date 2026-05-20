import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/bangicode/ui/button";

export interface CtaBlockProps {
  headline: string;
  subtext?: string;
  cta: { label: string; href?: string; onClick?: () => void };
  className?: string;
}

const CtaBlock = React.forwardRef<HTMLElement, CtaBlockProps>(
  ({ headline, subtext, cta, className }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("w-full bg-primary-container px-6 py-16 md:py-24", className)}
      >
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex flex-col gap-2">
            <h2 className="font-montserrat text-[32px] font-bold leading-[40px] tracking-[-0.01em] text-on-primary">
              {headline}
            </h2>
            {subtext && (
              <p className="font-hanken-grotesk text-lg text-on-primary-container">
                {subtext}
              </p>
            )}
          </div>

          {cta.href ? (
            <Button variant="primary" size="lg" className="shrink-0" asChild>
              <a href={cta.href}>{cta.label}</a>
            </Button>
          ) : (
            <Button variant="primary" size="lg" className="shrink-0" onClick={cta.onClick}>
              {cta.label}
            </Button>
          )}
        </div>
      </section>
    );
  },
);
CtaBlock.displayName = "CtaBlock";

export { CtaBlock };
