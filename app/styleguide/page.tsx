import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";
import { ServiceCard } from "../components/ui/ServiceCard";
import { servicesIn } from "../../utils/services";

// Internal reference for the redesign's shared components. Hidden on the live site.
export const metadata: Metadata = { title: "Style guide", robots: { index: false, follow: false } };

const tokens = [
  ["page", "bg-page", "#09090b"],
  ["surface", "bg-surface", "#18181b"],
  ["line", "bg-line", "#27272a"],
  ["line-strong", "bg-line-strong", "#3f3f46"],
  ["muted", "bg-muted", "#a1a1aa"],
  ["ink", "bg-ink", "#fafafa"],
  ["accent", "bg-accent", "#f59e0b"],
  ["accent-hover", "bg-accent-hover", "#fbbf24"],
  ["on-accent", "bg-on-accent", "#18181b"],
  ["danger", "bg-danger", "#f87171"],
  ["success", "bg-success", "#4ade80"]
];

const ctas = [
  ["Book Online", "/booking", "Site-wide booking"],
  ["Book + Details", "/booking, service page", "On a service card"],
  ["Book [Service Name]", "/booking", "In the pricing estimator"],
  ["Book an Hourly Block", "/booking", "Interior restoration"],
  ["Send an Inquiry", "/inquiry", "Anything that isn't booking"]
];

export default function StyleGuide() {
  if (process.env.VERCEL_ENV === "production") notFound();

  return (
    <div className="bg-page">
      <Section className="pt-32 md:pt-40">
        <SectionHeader
          as="h1"
          eyebrow="Dirt-Less Detailing · internal"
          title="Style guide"
          lead="Tokens and shared components for the redesign. This page isn't shown on the live site."
        />
        <h2 className="mb-4 text-card font-bold">Color tokens</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {tokens.map(([name, swatch, hex]) => (
            <div key={name} className="overflow-hidden rounded-xl border border-line">
              <div className={`h-16 ${swatch}`} />
              <div className="p-3 text-sm">
                <p className="font-semibold">{name}</p>
                <p className="text-muted">{hex}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeader eyebrow="Type" title="Type scale" lead="Sentence case everywhere. Only eyebrows and badges are all caps." />
        <div className="space-y-6">
          <p className="text-eyebrow font-bold uppercase text-accent">Eyebrow · 13px bold, 0.16em tracking</p>
          <p className="text-hero-sm font-extrabold md:text-hero">H1 · 56px desktop, 36px mobile</p>
          <p className="text-title-sm font-bold md:text-title">H2 section title · 40px / 30px</p>
          <p className="text-card font-bold">H3 card title · 22px</p>
          <p className="max-w-2xl text-lead text-muted">Lead · 17px zinc-400. Used under section titles to introduce what the section is about.</p>
          <p className="max-w-2xl text-zinc-200">Body · 16px zinc-200. Regular paragraph copy for the rest of the page.</p>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Actions" title="Buttons and badges" action={{ label: "Example header link", href: "/styleguide" }} />
        <div className="flex flex-wrap items-center gap-4">
          <Button href="/booking" size="lg">
            Book Online
          </Button>
          <Button href="/inquiry" variant="secondary" size="lg">
            Send an Inquiry
          </Button>
          <Button href="/booking">Book</Button>
          <Button href="/services/polish" variant="secondary">
            Details
          </Button>
          <Button variant="link" href="/services/recreational">
            Explore recreational services
          </Button>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Badge variant="featured">Most popular</Badge>
          <Badge variant="new">New</Badge>
          <Badge>Full Interior Detail</Badge>
        </div>
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[32rem] text-left text-sm">
            <thead className="text-muted">
              <tr className="border-b border-line">
                <th className="py-2 pr-4 font-semibold">Label</th>
                <th className="py-2 pr-4 font-semibold">Goes to</th>
                <th className="py-2 font-semibold">Used for</th>
              </tr>
            </thead>
            <tbody>
              {ctas.map(([label, to, use]) => (
                <tr key={label} className="border-b border-line">
                  <td className="py-2 pr-4 font-semibold">{label}</td>
                  <td className="py-2 pr-4 text-muted">{to}</td>
                  <td className="py-2 text-muted">{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeader
          eyebrow="Interior"
          title="Interior service cards"
          lead="Only the featured card gets the amber border."
          action={{ label: "Compare interior services", href: "/services/interior" }}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicesIn("interior").map((s) => (
            <ServiceCard key={s.slug} service={s} sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Exterior"
          title="Exterior service cards"
          lead="Low to high price. The spec box shows the tier progression without color."
          action={{ label: "Compare exterior services", href: "/services/polish" }}
        />
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {servicesIn("exterior").map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Section>
    </div>
  );
}
