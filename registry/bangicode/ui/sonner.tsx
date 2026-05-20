"use client";

import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      position="top-right"
      toastOptions={{
        classNames: {
          toast:
            "group rounded-sm border border-border bg-popover text-popover-foreground shadow-none font-hanken-grotesk text-sm",
          title: "font-medium text-foreground",
          description: "text-muted-foreground",
          actionButton: "bg-primary text-primary-foreground rounded-sm text-xs font-medium",
          cancelButton: "bg-muted text-muted-foreground rounded-sm text-xs font-medium",
          error: "border-destructive/50 bg-destructive/10 text-destructive",
          success: "border-border",
          info: "border-secondary/50 bg-secondary/10",
          warning: "border-border",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
