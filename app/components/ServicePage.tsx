import type { ReactNode } from "react";
import Image from "next/image";
import BaseSchema from "../jsonSchemas/BaseSchema";
import ImageGallery from "./ImageGallery";
import BeforeAfterSlider from "./ImageSlider";
import { PricingEstimator } from "./PricingEstimator";
import { Button } from "./ui/Button";
import { CtaBand } from "./ui/CtaBand";
import { Faq, type FaqEntry } from "./ui/Faq";
import { Section, containerClass } from "./ui/Section";
import { SectionHeader } from "./ui/SectionHeader";
import { serviceBySlug, type ServiceCategory } from "../../utils/services";

// One template for every /services/* page, in this order:
// Hero → Pricing (or option cards) → About → Process → FAQ → Results → CTA band.
// Every section after the hero is optional, so pages without a process or FAQ just skip it.

const categoryLabel: Record<ServiceCategory, string> = {
  interior: "Interior detailing",
  exterior: "Exterior detailing",
  recreational: "Recreational detailing"
};

export type Step = { title: string; text: ReactNode };

export type ServicePageProps = {
  slug: string;
  schema: { serviceImage: string; makesOffer: any };
  hero: { title: string; lead: string; image: string; sideImage?: string };
  /** Shown instead of the estimator, for services without size-based pricing. */
  options?: { title: string; lead?: string; content: ReactNode };
  about?: {
    title: string;
    lead: string;
    media: { before: string; after: string } | { image: string; alt: string };
    points: { icon: ReactNode; text: ReactNode }[];
    idealFor?: ReactNode;
    checklist?: string[];
    note?: ReactNode;
  };
  process?: { title: string; steps: Step[]; upgrade?: Step & { href: string; label: string } };
  faq?: { title: string; lead?: string; items: FaqEntry[] };
  results?: { title: string; lead: string; images: { src: string; alt: string }[]; galleryHref: string; galleryLabel: string };
  cta: { title: string; lead: ReactNode; actions?: ReactNode; next?: { label: string; href: string } };
};

function ServiceHero({ eyebrow, title, lead, image, sideImage }: { eyebrow: string } & ServicePageProps["hero"]) {
  return (
    <section className="relative isolate overflow-hidden bg-page">
      <Image src={image} alt="" fill priority sizes="100vw" quality={75} className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-black/55" />
      <div className={`${containerClass} grid items-center gap-10 pb-16 pt-32 lg:min-h-[600px] lg:grid-cols-[1fr_auto] lg:pb-20 lg:pt-36`}>
        <div className="max-w-2xl">
          <p className="text-eyebrow font-bold uppercase text-accent">{eyebrow}</p>
          <h1 className="mt-4 text-balance text-hero-sm font-extrabold text-white md:text-hero">{title}</h1>
          <p className="mt-6 text-lead text-zinc-200">{lead}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/booking" size="lg">
              Book Online
            </Button>
            <Button href="/inquiry" variant="secondary" size="lg" className="bg-zinc-950/40">
              Send an Inquiry
            </Button>
          </div>
        </div>
        {sideImage && (
          <div className="relative hidden aspect-[4/3] w-[420px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl xl:block">
            <Image src={sideImage} alt={`${title} example`} fill sizes="420px" className="object-cover" />
          </div>
        )}
      </div>
    </section>
  );
}

export function ServicePage({ slug, schema, hero, options, about, process, faq, results, cta }: ServicePageProps) {
  const service = serviceBySlug(slug);
  if (!service) return null;
  let tone = 0;
  const next = () => (tone++ % 2 === 0 ? "surface" : "base");

  return (
    <div className="bg-page text-ink">
      <BaseSchema serviceImage={schema.serviceImage} url={`https://www.dirtlessdetailing.com${service.href}`} makesOffer={schema.makesOffer} />
      <ServiceHero eyebrow={categoryLabel[service.category]} {...hero} />

      {options ? (
        <Section tone={next()}>
          <SectionHeader eyebrow="Options and pricing" title={options.title} lead={options.lead} />
          {options.content}
        </Section>
      ) : service.priceKey ? (
        <Section tone={next()}>
          <SectionHeader eyebrow="Pricing" title={`${service.name} pricing`} lead="Pick your vehicle size and any add-ons for an estimate." />
          <PricingEstimator slug={slug} />
        </Section>
      ) : null}

      {about && (
        <Section tone={next()}>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="overflow-hidden rounded-2xl border border-line">
              {"before" in about.media ? (
                <BeforeAfterSlider beforeImage={about.media.before} afterImage={about.media.after} aspectRatio="16/9" />
              ) : (
                <div className="relative aspect-[4/3]">
                  <Image src={about.media.image} alt={about.media.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                </div>
              )}
            </div>
            <div>
              <SectionHeader eyebrow="About this service" title={about.title} lead={about.lead} className="mb-8" />
              <div className="space-y-6">
                {about.points.map((p, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="mt-1 shrink-0 text-accent [&>svg]:size-8">{p.icon}</span>
                    <p className="leading-relaxed text-zinc-300">{p.text}</p>
                  </div>
                ))}
              </div>
              {about.idealFor && (
                <p className="mt-8 rounded-xl border border-line bg-page/60 p-4 text-zinc-300">
                  <span className="font-bold text-ink">Ideal for: </span>
                  {about.idealFor}
                </p>
              )}
              {about.checklist && (
                <ul className="mt-8 grid gap-x-6 gap-y-2 rounded-xl border border-line bg-page/60 p-4 sm:grid-cols-2">
                  {about.checklist.map((c) => (
                    <li key={c} className="flex gap-2 text-zinc-300">
                      <span aria-hidden="true" className="text-accent">
                        ✓
                      </span>
                      {c}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          {about.note && <p className="mx-auto mt-12 max-w-3xl text-center text-muted">{about.note}</p>}
        </Section>
      )}

      {process && (
        <Section tone={next()}>
          <SectionHeader eyebrow="Process" title={process.title} lead="Every step we take, in order." />
          <ol className="grid gap-4 md:grid-cols-2">
            {process.steps.map((s, i) => (
              <li key={s.title} className="flex gap-4 rounded-2xl border border-line bg-surface p-6">
                <span aria-hidden="true" className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent font-extrabold text-on-accent">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold">{s.title}</h3>
                  <p className="mt-1 leading-relaxed text-zinc-300">{s.text}</p>
                </div>
              </li>
            ))}
            {process.upgrade && (
              <li className="flex flex-col gap-3 rounded-2xl border border-dashed border-accent/60 bg-accent/[0.04] p-6 md:col-span-2">
                <p className="text-eyebrow font-bold uppercase text-accent">Want even more?</p>
                <h3 className="text-lg font-bold">{process.upgrade.title}</h3>
                <p className="leading-relaxed text-zinc-300">{process.upgrade.text}</p>
                <Button variant="link" href={process.upgrade.href} className="self-start">
                  {process.upgrade.label}
                </Button>
              </li>
            )}
          </ol>
        </Section>
      )}

      {faq && (
        <Section tone={next()}>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
            <div>
              <SectionHeader eyebrow="FAQ" title={faq.title} lead={faq.lead ?? "Answers to the questions we hear most about this service."} className="mb-6" />
              <Button variant="link" href="/inquiry">
                Send us an inquiry
              </Button>
            </div>
            <Faq items={faq.items} />
          </div>
        </Section>
      )}

      {results && (
        <Section tone={next()}>
          <SectionHeader eyebrow="Results" title={results.title} lead={results.lead} action={{ label: results.galleryLabel, href: results.galleryHref }} />
          <ImageGallery images={results.images} altLabel={`${service.name} results`} />
        </Section>
      )}

      <Section tone={next()}>
        <CtaBand
          title={cta.title}
          lead={
            <>
              {cta.lead}
              {cta.next && (
                <span className="mt-4 block">
                  <Button variant="link" href={cta.next.href}>
                    {cta.next.label}
                  </Button>
                </span>
              )}
            </>
          }
          actions={cta.actions}
        />
      </Section>
    </div>
  );
}
