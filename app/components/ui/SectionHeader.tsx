import type { ReactNode } from "react";
import { cn } from "../../../utils/cn";
import { Button } from "./Button";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  /** An optional link shown on the right, such as "Compare interior services". */
  action?: { label: string; href: string };
  /** The page's main heading uses "h1"; every other section keeps the default "h2". */
  as?: "h1" | "h2";
  className?: string;
};

/** Eyebrow, title and lead for the top of every section, left-aligned. */
export function SectionHeader({ eyebrow, title, lead, action, as: Heading = "h2", className }: Props) {
  return (
    <div className={cn("mb-10 flex flex-wrap items-end justify-between gap-x-8 gap-y-4", className)}>
      <div className="max-w-3xl">
        {eyebrow && <p className="mb-3 text-eyebrow font-bold uppercase text-accent">{eyebrow}</p>}
        <Heading
          className={cn(
            "text-balance text-ink",
            Heading === "h1" ? "text-hero-sm font-extrabold md:text-hero" : "text-title-sm font-bold md:text-title"
          )}
        >
          {title}
        </Heading>
        {lead && <p className="mt-4 text-lead text-muted">{lead}</p>}
      </div>
      {action && (
        <Button variant="link" href={action.href}>
          {action.label}
        </Button>
      )}
    </div>
  );
}
