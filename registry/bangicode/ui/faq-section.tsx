import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/bangicode/ui/accordion";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqSectionProps {
  items: FaqItem[];
  heading?: string;
  /** Layout: "stacked" (full-width list) or "split" (heading left, accordion right) */
  layout?: "stacked" | "split";
  className?: string;
}

const FaqSection = React.forwardRef<HTMLElement, FaqSectionProps>(
  ({ items, heading = "Frequently asked questions", layout = "stacked", className }, ref) => {
    const accordion = (
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );

    return (
      <section ref={ref} className={cn("w-full px-6 py-16", className)}>
        <div className="mx-auto w-full max-w-[1280px]">
          {layout === "split" ? (
            <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
              <div>
                <h2 className="font-montserrat text-[32px] font-semibold leading-[40px] tracking-[-0.01em] text-foreground">
                  {heading}
                </h2>
              </div>
              {accordion}
            </div>
          ) : (
            <>
              <h2 className="mb-8 font-montserrat text-[32px] font-semibold leading-[40px] tracking-[-0.01em] text-foreground">
                {heading}
              </h2>
              {accordion}
            </>
          )}
        </div>
      </section>
    );
  },
);
FaqSection.displayName = "FaqSection";

export { FaqSection };
