import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "./components/ui/Button";
import { Section } from "./components/ui/Section";
import { services } from "../utils/services";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true }
};

export default function NotFound() {
  return (
    <Section className="min-h-[80vh] border-t-0 pt-32 md:pt-40">
      <div className="max-w-2xl">
        <p className="text-eyebrow font-bold uppercase text-accent">404</p>
        <h1 className="mt-4 text-balance text-hero-sm font-extrabold md:text-hero">We couldn&apos;t find that page</h1>
        <p className="mt-6 text-lead text-muted">It may have moved, or the link might have a typo. Here are some places to start instead.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/" size="lg">
            Back to home
          </Button>
          <Button href="/booking" variant="secondary" size="lg">
            Book Online
          </Button>
        </div>
      </div>

      <div className="mt-16 border-t border-line pt-10">
        <h2 className="text-eyebrow font-bold uppercase text-muted">Our services</h2>
        <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <li key={s.slug}>
              <Link href={s.href} className="font-semibold text-ink hover:text-accent-hover hover:underline">
                {s.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
