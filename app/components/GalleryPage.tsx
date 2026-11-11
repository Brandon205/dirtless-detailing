import type { ReactNode } from "react";
import ImageGallery from "./ImageGallery";
import { CtaBand } from "./ui/CtaBand";
import { PageHero } from "./ui/PageHero";
import { Section } from "./ui/Section";
import { SectionHeader } from "./ui/SectionHeader";

// One template for every /gallery/* page: Hero → Before & after → Finished results → CTA band.

type Photo = { src: string; alt?: string };

export type GalleryPageProps = {
  hero: { title: string; lead: ReactNode; image: string; alt: string };
  /** The service page(s) this gallery shows, linked from the hero and the closing band. */
  services: { label: string; href: string }[];
  /** Used to write alt text for photos that don't have their own, like "Full Interior Detail before and after, photo 3". */
  altLabel: string;
  beforeAfter: Photo[];
  results: Photo[];
};

export function GalleryPage({ hero, services, altLabel, beforeAfter, results }: GalleryPageProps) {
  return (
    <div className="bg-page text-ink">
      <PageHero eyebrow="Gallery" title={hero.title} lead={hero.lead} image={hero.image} alt={hero.alt} />

      <Section>
        <SectionHeader
          eyebrow="Before & after"
          title="Before & after results"
          action={{ label: `See the ${services[0]!.label} page`, href: services[0]!.href }}
        />
        <ImageGallery images={beforeAfter} altLabel={`${altLabel} before and after`} />
      </Section>

      <Section tone="surface">
        <SectionHeader eyebrow="Results" title="Finished results" lead="Tap any photo to see it full size." />
        <ImageGallery images={results} altLabel={`${altLabel} finished results`} />
      </Section>

      <Section>
        <CtaBand
          title="Want results like these?"
          lead={
            <>
              See what&apos;s included and get a price on the{" "}
              {services.map((s, i) => (
                <span key={s.href}>
                  {i > 0 && " or "}
                  <a href={s.href} className="font-semibold text-accent-hover hover:underline">
                    {s.label}
                  </a>
                </span>
              ))}{" "}
              page, then book online 24/7.
            </>
          }
        />
      </Section>
    </div>
  );
}
