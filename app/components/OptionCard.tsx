import type { ReactNode } from "react";
import Image from "next/image";

/** A priced option on pages without the estimator (Interior Restoration, Recreational). */
export function OptionCard({ title, subtitle, image, alt, price, priceNote, children }: { title: string; subtitle?: string; image: string; alt: string; price: string; priceNote?: string; children: ReactNode }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface">
      <div className="relative aspect-[16/10]">
        <Image src={image} alt={alt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        {subtitle && <p className="text-eyebrow font-bold uppercase text-accent">{subtitle}</p>}
        <h3 className="mt-1 text-card font-bold">{title}</h3>
        <p className="mt-3 leading-relaxed text-zinc-300">{children}</p>
        <div className="mt-auto pt-6">
          <p className="border-t border-line pt-5 text-2xl font-extrabold">{price}</p>
          {priceNote && <p className="text-sm text-muted">{priceNote}</p>}
        </div>
      </div>
    </article>
  );
}

/** A wide card with a photo beside text and buttons, for an extra option or a note. */
export function WideCard({ title, image, alt, children, actions }: { title: string; image: string; alt: string; children: ReactNode; actions?: ReactNode }) {
  return (
    <article className="mt-6 grid overflow-hidden rounded-2xl border border-line bg-surface md:grid-cols-[2fr_3fr]">
      <div className="relative min-h-56">
        <Image src={image} alt={alt} fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
      </div>
      <div className="p-6 md:p-8">
        <h3 className="text-card font-bold">{title}</h3>
        <p className="mt-3 leading-relaxed text-zinc-300">{children}</p>
        {actions && <div className="mt-6 flex flex-col gap-3 sm:flex-row">{actions}</div>}
      </div>
    </article>
  );
}
