import Image from "next/image";
import { Check, Clock } from "lucide-react";
import { cn } from "../../../utils/cn";
import { bookingHref, formatPrice, startingPrice, type Service } from "../../../utils/services";
import { Badge } from "./Badge";
import { Button } from "./Button";

/**
 * A service in a card grid. Put cards in a CSS grid: every card stretches to the row's height
 * and the price and buttons sit at the bottom, so they line up across the row.
 */
export function ServiceCard({ service, sizes = "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" }: { service: Service; sizes?: string }) {
  const price = startingPrice(service);
  const featured = service.badge === "featured";

  return (
    <article className={cn("flex h-full flex-col overflow-hidden rounded-2xl border bg-surface text-ink", featured ? "border-accent" : "border-line")}>
      <div className="relative h-48 w-full">
        <Image src={service.photo} alt={service.name} fill sizes={sizes} className="object-cover" />
        {service.badge && (
          <Badge variant={service.badge} className={cn("absolute left-4 top-4", service.badge === "new" && "bg-surface/90")}>
            {featured ? "Most popular" : "New"}
          </Badge>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-card font-bold">{service.name}</h3>
        <p className="mt-2 text-muted">{service.description}</p>

        <ul className="mt-5 space-y-2.5">
          {service.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2.5 text-zinc-200">
              <Check aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-accent" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {(service.protection || service.swirlRemoval) && (
          <dl className="mt-5 grid grid-cols-2 gap-3 rounded-lg border border-line bg-page/60 p-3 text-sm">
            <div>
              <dt className="text-muted">Protection</dt>
              <dd className="font-semibold">{service.protection}</dd>
            </div>
            <div>
              <dt className="text-muted">Swirl removal</dt>
              <dd className="font-semibold">{service.swirlRemoval}</dd>
            </div>
          </dl>
        )}

        <div className="mt-auto pt-6">
          <div className="flex items-end justify-between gap-4 border-t border-line pt-5">
            {price !== null && (
              <p>
                <span className="block text-eyebrow font-bold uppercase text-muted">Starting at</span>
                <span className="text-2xl font-extrabold">{formatPrice(price)}</span>
              </p>
            )}
            {service.hours && (
              <p className="flex items-center gap-1.5 text-sm text-muted">
                <Clock aria-hidden="true" size={16} />
                {service.hours} hrs
              </p>
            )}
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <Button variant="secondary" href={service.href} aria-label={`Details about ${service.name}`}>
              Details
            </Button>
            <Button href={bookingHref(service)}>Book</Button>
          </div>
        </div>
      </div>
    </article>
  );
}
