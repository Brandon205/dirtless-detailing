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
  /** Add-on ids (from `addons` below) offered with this service in the estimator. */
  addons?: string[];
  /** Shows the "$150/hour for more correction" line under the estimate. */
  correctionNote?: boolean;
};

export const services: Service[] = [
  {
    slug: "interior-refresh",
    addons: ["ozone", "interiorCeramic"],
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
    addons: ["ozone", "interiorCeramic"],
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
    addons: ["interiorCeramic"],
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
    addons: ["engineBay", "clayBar", "ceramicMaintenance", "trimRestoration"],
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
    addons: ["engineBay", "trimRestoration"],
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
    addons: ["engineBay", "trimRestoration", "debadging"],
    correctionNote: true,
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
    addons: ["engineBay", "trimRestoration", "debadging"],
    correctionNote: true,
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

/** Vehicle sizes, in Prices.js order. `priceKey` is the size's key in Prices.js. */
export const vehicleSizes = [
  { id: "2-door", name: "Any 2-door", examples: "Coupes and 2-door trucks", priceKey: "Any 2-Door Vehicle", image: "/assets/images/polish/porscheFL.jpg" },
  { id: "sedan", name: "4-door sedan", examples: "Civic, Camry, Model 3", priceKey: "4 Door", image: "/assets/images/exterior/subaruWashed.jpeg" },
  { id: "midsize", name: "Mid-size SUV", examples: "RAV4, CR-V, Model Y", priceKey: "Mid Size", image: "/assets/images/exterior/jeepRenegade.jpg" },
  { id: "truck", name: "4-door truck", examples: "Tacoma, F-150, Silverado", priceKey: "Trucks", image: "/assets/images/exterior/archCoTruck.jpg" },
  { id: "3-row", name: "3-row SUV / minivan", examples: "Highlander, Tahoe, Odyssey", priceKey: "3 Row", image: "/assets/images/polish/vanSeal.jpg" }
] as const;

export type VehicleSize = (typeof vehicleSizes)[number];
export const DEFAULT_SIZE = "sedan";

/**
 * Same names and rules as the CRM's catalog (dirt-less-crm packages/shared/src/catalog.ts), so the
 * booking page can preselect them. `priceKey` is the add-on's key in Prices.js `addons`. Hourly
 * add-ons aren't in the CRM; they're passed to the booking form as a note instead.
 */
export const addons: Record<string, { name: string; description: string; priceKey?: string; hourly?: number }> = {
  ozone: { name: "Ozone Treatment", priceKey: "Ozone Treatment", description: "Removes odors, bacteria and viruses. Recommended for smoke, mold and strong odors." },
  interiorCeramic: { name: "Interior Ceramic", priceKey: "Interior Ceramic", description: "Protects seats and surfaces from stains and spills." },
  engineBay: { name: "Engine Bay", priceKey: "Engine Bay", description: "Sensitive areas covered, then cleaned, washed and dressed." },
  clayBar: { name: "Clay Bar Treatment", priceKey: "Clay Bar Treatment", description: "Removes bonded grit so the paint feels smooth again." },
  ceramicMaintenance: { name: "Ceramic Maintenance", priceKey: "Ceramic Maintenance", description: "A check-in and topper for coated cars, every 6-12 months." },
  trimRestoration: { name: "Trim Restoration", priceKey: "Trim Restoration", description: "Brings faded exterior trim back to a deep black and protects it." },
  debadging: { name: "Debadging", hourly: 80, description: "Remove badges and emblems so we can polish under them. Usually 30-60 minutes." }
};

export const sizeById = (id: string | null | undefined) => vehicleSizes.find((s) => s.id === id);

/** A service's price for one size, using the sale price while a sale is on. */
export function priceFor(service: Service, size: VehicleSize): number | null {
  if (!service.priceKey) return null;
  const { type, key } = service.priceKey;
  const sale = salePrices.active ? salePrices[size.priceKey]?.[type]?.[key] : undefined;
  return sale ?? prices[size.priceKey]?.[type]?.[key] ?? null;
}

/** A flat add-on's price (null for hourly add-ons). */
export const addonPrice = (id: string): number | null => {
  const key = addons[id]?.priceKey;
  return key ? (prices.addons[key] ?? null) : null;
};

/**
 * Matches a CRM size class name to one of our sizes. Mirrors sizeIndex() in the CRM's Urable
 * import, since the CRM's names ("4-Door Sedans") differ from Prices.js keys here ("4 Door").
 */
export function sizeIdForName(name: string): VehicleSize["id"] | null {
  const l = name.toLowerCase();
  if (/3.?row|minivan|large suv/.test(l)) return "3-row";
  if (/4.?door.?truck|truck/.test(l)) return "truck";
  if (/mid|^suv$/.test(l)) return "midsize";
  if (/sedan|4.?door/.test(l)) return "sedan";
  if (/2.?door|coupe/.test(l)) return "2-door";
  return null;
}

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

/** Where "Book" buttons go. The booking page preselects whatever is passed here. */
export function bookingHref(service?: Service, opts: { size?: string; addons?: string[] } = {}) {
  const q = new URLSearchParams();
  if (service) q.set("service", service.slug);
  if (opts.size) q.set("size", opts.size);
  if (opts.addons?.length) q.set("addons", opts.addons.join(","));
  const qs = q.toString();
  return qs ? `/booking?${qs}` : "/booking";
}

export const INQUIRY_HREF = "/inquiry";
