import type { ReactNode } from "react";
import { cn } from "../../../utils/cn";

/** The page container: 1280px wide at most, with 24px side padding. */
export const containerClass = "mx-auto w-full max-w-[1280px] px-6";

type Props = {
  tone?: "base" | "surface";
  id?: string;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
};

/** A full-width page band. Alternate tone="base" and tone="surface" down the page. */
export function Section({ tone = "base", id, className, containerClassName, children }: Props) {
  return (
    <section id={id} className={cn("border-t border-line py-16 text-ink md:py-24", tone === "surface" ? "bg-surface" : "bg-page", className)}>
      <div className={cn(containerClass, containerClassName)}>{children}</div>
    </section>
  );
}
