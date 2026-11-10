import prices from "./Prices";
import salePrices from "./SalePrices";

// One list of services for the home cards, nav, footer and service pages, so names and copy
// can't drift apart. Prices stay in Prices.js (kept in step with the CRM by hand).

export type ServiceCategory = "interior" | "exterior" | "recreational";

export type Service = {
  slug: string;
  href: string;
  name: string;
  category: ServiceCategory;
  description: string;
  bullets: string[];
  hours?: string;
  /** Where this service's prices live in Prices.js. Recreational is quoted, so it has none. */
  priceKey?: { type: "interior" | "exterior"; key: string };
  protection?: string;
  swirlRemoval?: string;
  photo: string;
  navImage: string;
  badge?: "featured" | "new";
};

export const services: Service[] = [
  {
    slug: "interior-refresh",
    href: "/services/interior-refresh",
    name: "Interior Refresh",
    category: "interior",
    description: "For newer or fairly clean vehicles, or ones detailed in the last 6 months - 1 year. Restores that like-new feel.",
    bullets: ["Air blow-out and vacuum", "Surfaces cleaned and conditioned", "Door jambs wiped down"],
    hours: "2-4",
    priceKey: { type: "interior", key: "intRefresh" },
    photo: "/assets/images/interior/driver12.jpg",
    navImage: "/assets/images/interior/driver15.jpg"
  },
  {
    slug: "interior",
    href: "/services/interior",
    name: "Full Interior Detail",
    category: "interior",
    description: "A deeper clean for stains, pet hair and heavy grime. A complete interior reset.",
    bullets: ["Everything in Interior Refresh", "Stain extraction and headliner cleaning", "Door jambs fully washed"],
    hours: "3-6",
    priceKey: { type: "interior", key: "intFull" },
    photo: "/assets/images/interior/driverCivic.jpg",
    navImage: "/assets/images/interior/driver16.jpg",
    badge: "featured"
  },
  {
    slug: "interior-restoration",
    href: "/services/interior-restoration",
    name: "Interior Restoration",
    category: "interior",
    description: "For mold, smoke odors or extreme neglect: interiors a standard detail can't handle.",
    bullets: ["Everything in Full Interior Detail", "Extra time on heavy stains", "Odor removal with ozone treatment"],
    hours: "4.5-8+",
    priceKey: { type: "interior", key: "intRestoration" },
    photo: "/assets/images/before&afters/badInteriorBA.png",
    navImage: "/assets/images/before&afters/badInteriorBA.png"
  },
  {
    slug: "exterior",
    href: "/services/exterior",
    name: "Exterior Decon Wash",
    category: "exterior",
    description: "A deep clean for paint and wheels that an automatic car wash can't touch.",
    bullets: ["Top-to-bottom hand wash", "Wheels, tires, barrels and wells scrubbed", "Door jambs and gas door washed"],
    hours: "1-2",
    priceKey: { type: "exterior", key: "extDecon" },
    protection: "3-6 mo sealant",
    swirlRemoval: "None",
    photo: "/assets/images/exterior/jeepRenegade.jpg",
    navImage: "/assets/images/exterior/subaruWashed.jpeg",
    badge: "featured"
  },
  {
    slug: "wash-coat",
    href: "/services/wash-coat",
    name: "Wash & Coat",
    category: "exterior",
    description: "Ceramic protection for paint and wheels without the cost or time of paint correction.",
    bullets: ["Everything in Exterior Decon Wash", "Clay bar treatment", "Primer polish to prep the paint"],
    hours: "5-8",
    priceKey: { type: "exterior", key: "extWashCoat" },
    protection: "1-yr ceramic",
    swirlRemoval: "Prep polish",
    photo: "/assets/images/exterior/archCoTruck.jpg",
    navImage: "/assets/images/exterior/crTesla.jpg",
    badge: "new"
  },
  {
    slug: "polish",
    href: "/services/polish",
    name: "Polish & Coat",
    category: "exterior",
    description: "Single-stage paint correction and a 3-year ceramic coating for a big jump in gloss.",
    bullets: ["Decon wash and clay bar treatment", "Single-stage polish", "3-year ceramic coating"],
    hours: "6-9+",
    priceKey: { type: "exterior", key: "extPolish" },
    protection: "3-yr ceramic",
    swirlRemoval: "~50%",
    photo: "/assets/images/polish/porscheFL.jpg",
    navImage: "/assets/images/correction/teslaclean.jpg"
  },
  {
    slug: "correct",
    href: "/services/correct",
    name: "Correct & Coat",
    category: "exterior",
    description: "Our top package: two-stage paint correction and a 3-year ceramic coating.",
    bullets: ["Decon wash and clay bar treatment", "Two-stage paint correction", "3-year ceramic coating"],
    hours: "10-15+",
    priceKey: { type: "exterior", key: "extCorrect" },
    protection: "3-yr ceramic",
    swirlRemoval: "70-95%",
    photo: "/assets/images/correction/bMustang1.jpg",
    navImage: "/assets/images/correction/genesis3.jpeg"
  },
  {
    slug: "recreational",
    href: "/services/recreational",
    name: "Boats, RVs, Trailers & ORVs",
    category: "recreational",
    description: "Interior and exterior detailing for any of your other vehicles.",
    bullets: [],
    photo: "/assets/images/recreational/RVWash.jpg",
    navImage: "/assets/images/recreational/RVWash.jpg"
  }
];

export const servicesIn = (category: ServiceCategory) => services.filter((s) => s.category === category);

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);

export const serviceByPriceKey = (key: string) => services.find((s) => s.priceKey?.key === key);

/** The lowest price for a service (the 2-door size), using the sale price while a sale is on. */
export function startingPrice(service: Service): number | null {
  if (!service.priceKey) return null;
  const { type, key } = service.priceKey;
  const sale = salePrices.active ? salePrices["Any 2-Door Vehicle"]?.[type]?.[key] : undefined;
  return sale ?? prices["Any 2-Door Vehicle"][type][key] ?? null;
}

export const formatPrice = (amount: number) => `$${amount.toLocaleString("en-US")}`;

/** Where "Book" buttons go. Phase 4 adds the service, size and add-ons as query params. */
export const bookingHref = (_service?: Service) => "/booking";

export const INQUIRY_HREF = "/inquiry";
