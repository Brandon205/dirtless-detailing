import type { ReactNode } from "react";
import { cn } from "../../../utils/cn";

const variants = {
  featured: "border-accent bg-accent text-on-accent",
  new: "border-accent text-accent-hover",
  neutral: "border-line-strong text-muted"
};

/** Small uppercase label: featured ("MOST POPULAR"), new ("NEW") or neutral (a review's service). */
export function Badge({ variant = "neutral", className, children }: { variant?: keyof typeof variants; className?: string; children: ReactNode }) {
  return (
    <span className={cn("inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-bold uppercase tracking-wider", variants[variant], className)}>
      {children}
    </span>
  );
}
