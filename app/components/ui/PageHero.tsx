import type { ReactNode } from "react";
import Image from "next/image";
import { Button } from "./Button";
import { containerClass } from "./Section";

type Props = {
  eyebrow: string;
  title: string;
  lead: ReactNode;
  /** Full-bleed background photo, darkened so the text reads. */
  image: string;
  alt?: string;
  /** An optional photo card on the right, shown from xl up. */
  sideImage?: string;
  sideAlt?: string;
};

/** The photo hero at the top of service, gallery and about pages, with the page's H1 and the standard buttons. */
export function PageHero({ eyebrow, title, lead, image, alt = "", sideImage, sideAlt }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-page">
      <Image src={image} alt={alt} fill priority sizes="100vw" quality={75} className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-black/55" />
      <div
        className={`${containerClass} grid items-center gap-10 pb-16 pt-32 lg:grid-cols-[1fr_auto] lg:pb-20 lg:pt-36 ${sideImage ? "lg:min-h-[600px]" : ""}`}
      >
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
            <Image src={sideImage} alt={sideAlt ?? `${title} example`} fill sizes="420px" className="object-cover" />
          </div>
        )}
      </div>
    </section>
  );
}
