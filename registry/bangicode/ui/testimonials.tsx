import * as React from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/registry/bangicode/ui/avatar";

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company?: string;
  avatarSrc?: string;
  avatarFallback: string;
}

export interface TestimonialsProps {
  testimonials: Testimonial[];
  heading?: string;
  className?: string;
}

const Testimonials = React.forwardRef<HTMLElement, TestimonialsProps>(
  ({ testimonials, heading, className }, ref) => {
    return (
      <section ref={ref} className={cn("w-full px-6 py-16", className)}>
        <div className="mx-auto w-full max-w-[1280px]">
          {heading && (
            <h2 className="mb-12 font-montserrat text-[32px] font-semibold leading-[40px] tracking-[-0.01em] text-foreground">
              {heading}
            </h2>
          )}
          <ul
            className={cn(
              "grid list-none gap-6 p-0",
              "grid-cols-1 sm:grid-cols-2",
              testimonials.length >= 3 && "lg:grid-cols-3",
            )}
          >
            {testimonials.map((t, i) => (
              <li key={i} className="flex flex-col rounded-lg border border-border bg-card p-6">
                <blockquote className="flex-1 font-hanken-grotesk text-lg leading-[28px] text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <Avatar>
                    {t.avatarSrc && <AvatarImage src={t.avatarSrc} alt={t.name} />}
                    <AvatarFallback>{t.avatarFallback}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-hanken-grotesk text-sm font-medium text-foreground">
                      {t.name}
                    </p>
                    <p className="font-jetbrains-mono text-xs tabular-nums text-muted-foreground">
                      {t.role}{t.company ? ` · ${t.company}` : ""}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  },
);
Testimonials.displayName = "Testimonials";

export { Testimonials };
