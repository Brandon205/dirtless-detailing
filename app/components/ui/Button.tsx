import Link from "next/link";
import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../../utils/cn";

export type ButtonVariant = "primary" | "secondary" | "link";
export type ButtonSize = "md" | "lg";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-page";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-accent text-on-accent hover:bg-accent-hover",
  secondary: "border border-zinc-600 text-ink hover:bg-zinc-800",
  link: "min-h-0 rounded-sm font-semibold text-accent-hover hover:text-accent hover:underline"
};

const sizes: Record<ButtonSize, string> = {
  md: "px-5 py-3 text-base",
  lg: "px-7 py-4 text-lg"
};

/** The classes behind <Button>, for elements that must stay their own component (such as CallLink). */
export function buttonClasses({ variant = "primary", size = "md", className }: { variant?: ButtonVariant; size?: ButtonSize; className?: string } = {}) {
  return cn(base, variants[variant], variant !== "link" && sizes[size], className);
}

type Props = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  children: ReactNode;
  /** Only used when there's no href (a real <button>). */
  type?: "button" | "submit";
  disabled?: boolean;
} & Omit<HTMLAttributes<HTMLElement>, "className" | "children">;

/** Site-wide button: primary (amber), secondary (outline) or link (amber text with an arrow). */
export function Button({ variant = "primary", size = "md", href, className, children, type = "button", disabled, ...rest }: Props) {
  const classes = buttonClasses({ variant, size, className });
  const content = (
    <>
      {children}
      {variant === "link" && <span aria-hidden="true">→</span>}
    </>
  );

  if (!href) {
    return (
      <button type={type} disabled={disabled} className={classes} {...rest}>
        {content}
      </button>
    );
  }
  // Internal pages use next/link; tel:, sms:, mailto: and other sites use a plain link.
  const linkProps = rest as HTMLAttributes<HTMLAnchorElement>;
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes} {...linkProps}>
        {content}
      </Link>
    );
  }
  const external = href.startsWith("http");
  return (
    <a href={href} className={classes} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...linkProps}>
      {content}
    </a>
  );
}
