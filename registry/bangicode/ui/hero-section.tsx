import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/bangicode/ui/button";

export interface HeroSectionProps {
  eyebrow?: string;
  headline: string;
  copy?: string;
  primaryCta?: { label: string; href?: string; onClick?: () => void };
  secondaryCta?: { label: string; href?: string; onClick?: () => void };
  align?: "left" | "center";
  className?: string;
}

const HeroSection = React.forwardRef<HTMLElement, HeroSectionProps>(
  ({ eyebrow, headline, copy, primaryCta, secondaryCta, align = "left", className }, ref) => {
    const centered = align === "center";
    return (
      <section
        ref={ref}
        className={cn("w-full px-6 py-16 md:py-24", className)}
      >
        <div
          className={cn(
            "mx-auto w-full max-w-[1280px]",
            centered && "flex flex-col items-center text-center",
          )}
        >
          {eyebrow && (
            <p className="mb-4 font-jetbrains-mono text-xs uppercase tracking-widest text-muted-foreground">
              {eyebrow}
            </p>
          )}

          <h1
            className={cn(
              "font-montserrat font-bold tracking-[-0.02em] text-foreground",
              "text-[32px] leading-[40px] md:text-[48px] md:leading-[56px]",
              !centered && "max-w-3xl",
              centered && "max-w-4xl",
            )}
          >
            {headline}
          </h1>

          {copy && (
            <p
              className={cn(
                "mt-6 font-hanken-grotesk text-lg leading-[28px] text-muted-foreground",
                !centered && "max-w-2xl",
                centered && "max-w-2xl",
              )}
            >
              {copy}
            </p>
          )}

          {(primaryCta || secondaryCta) && (
            <div className={cn("mt-8 flex flex-wrap gap-3", centered && "justify-center")}>
              {primaryCta && (
                <Button
                  variant="primary"
                  size="lg"
                  onClick={primaryCta.onClick}
                  {...(primaryCta.href ? { asChild: true } : {})}
                >
                  {primaryCta.href ? (
                    <a href={primaryCta.href}>{primaryCta.label}</a>
                  ) : (
                    primaryCta.label
                  )}
                </Button>
              )}
              {secondaryCta && (
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={secondaryCta.onClick}
                  {...(secondaryCta.href ? { asChild: true } : {})}
                >
                  {secondaryCta.href ? (
                    <a href={secondaryCta.href}>{secondaryCta.label}</a>
                  ) : (
                    secondaryCta.label
                  )}
                </Button>
              )}
            </div>
          )}
        </div>
      </section>
    );
  },
);
HeroSection.displayName = "HeroSection";

export { HeroSection };
