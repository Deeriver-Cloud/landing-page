import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Standard utility to conditionally merge Tailwind CSS classes
 * cleanly without class collisions.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
