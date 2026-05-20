import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Bangicode `cn` — merge Tailwind classes intelligently.
 * Used by every shadcn component to compose variants without conflicts.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
