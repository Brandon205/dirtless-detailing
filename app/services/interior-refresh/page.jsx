import { ServicePage } from "../../components/ServicePage";
import { Flame, Sparkles } from "lucide-react";

export const metadata = {
  title: "Interior Refresh Detail in Buckley & Bonney Lake",
  description:
    "Maintenance-focused interior car detailing in Buckley and Pierce County. Thorough dusting, vacuuming, wipe-down, and conditioning for vehicles in good condition.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/services/interior-refresh" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/services/interior-refresh",
    images: [{ url: "/assets/images/interior/driver15.jpg", alt: "Driver side interior of a car after our Interior Refresh service" }]
  }
};

// Content for this page. The layout lives in app/components/ServicePage.tsx.
const page = {
  slug: "interior-refresh",
  schema: {
    serviceImage: "/assets/images/interior/pass1.jpg",
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Interior Refresh",
        description:
          "Give your already-clean interior a professional refresh with our Interior Refresh service. Perfect for vehicles that are already in good condition without needing deep cleaning or stain extraction.",
        areaServed: "Buckley, Bonney Lake, and surrounding areas.",
        serviceType: "Interior Detailing"
      }
    }
  },
  hero: {
    title: "Interior Refresh",
    lead: "For vehicles that are already nearly clean. A maintenance-focused interior detail that keeps your interior looking like new.",
    image: "/assets/images/interior/pass1.jpg",
    sideImage: "/assets/images/interior/driver5.jpg"
  },
  about: {
    title: "Our Interior Refresh service",
    lead: "A maintenance-based interior detail",
    media: { image: "/assets/images/interior/driverModelX.jpg", alt: "Tesla Model X interior after an Interior Refresh" },
    points: [
      {
        icon: <Sparkles />,
        text: (
          <>
            Our Interior Refresh is designed for vehicles already in good condition that don't require intensive stain removal or heavy pet hair extraction.
            It's the perfect maintenance choice if you've had your vehicle detailed within the last year to keep your cabin looking sharp and protected without
            the extra cost of a deep clean.
          </>
        )
      },
      {
        icon: <Flame />,
        text: (
          <>
            We perform a thorough top-to-bottom cleaning of all surfaces, including seats, carpets, dashboards, and vents. While doing that we use products made
            to clean and condition, saving us time and you money while still giving the benefits of protected and conditioned surfaces (without a greasy
            finish).
          </>
        )
      }
    ],
    checklist: ["Perfect for Maintenance", "Time-Efficient", "Cost-Effective", "Maintains Fresh Appearance", "Protects Interior Surfaces"],
    note: (
      <>
        Need something more intensive? If your interior needs deep cleaning, stain extraction, or heavy pet hair removal, check out our Full Interior Service{" "}
        <a href="/services/interior" className="font-semibold text-accent-hover hover:underline">
          here
        </a>
        !
      </>
    )
  },
  process: {
    title: "Our Interior Refresh process",
    steps: [
      { title: "Vacuum entire interior", text: <>Thorough vacuum of all carpets, floor mats, under seats, and any crevices to remove dust and light dirt.</> },
      {
        title: "Blow out vehicle",
        text: <>Blow out all the cracks and crevices as well as blowing out all embedded dirt and dust from the seats and carpeting.</>
      },
      {
        title: "Spot clean seats & upholstery",
        text: <>Clean all seats and fabric surfaces with specialized cleaners appropriate for already-clean upholstery, leaving them fresh and vibrant.</>
      },
      {
        title: "Clean and condition",
        text: (
          <>
            Use a dedicated cleaner/conditioner product to detail the dashboard, door panels, center console, and all hard surfaces with appropriate products.
          </>
        )
      },
      {
        title: "Clean windows and mirrors",
        text: <>Clean all interior windows and mirrors for crystal clear visibility and a polished look throughout the cabin.</>
      },
      {
        title: "Door jamb wipe down",
        text: (
          <>
            Do a quick wipe down of the door jambs to remove any dust/dirt that has accumulated there. We don't do a full deep clean of the jambs with our
            interior refresh.
          </>
        )
      }
    ],
    upgrade: {
      title: "Need something more in depth?",
      text: (
        <>
          If your interior needs deep stain extraction, pet hair removal, or carpet restoration, check out our Full Interior Service for more comprehensive
          detailing.
        </>
      ),
      href: "/services/interior",
      label: "See Full Interior Detail"
    }
  },
  results: {
    title: "Back to the way it should be",
    lead: "And the way you wish it could stay forever.",
    galleryHref: "/gallery/interior",
    galleryLabel: "See the interior gallery",
    images: [
      { src: "/assets/images/interior/passfordGT.jpg", alt: "Interior after our Interior Refresh Service" },
      { src: "/assets/images/interior/rear13.jpg", alt: "Interior after our Interior Refresh Service" },
      { src: "/assets/images/interior/doorRenegade.jpg", alt: "Interior after our Interior Refresh Service" },
      { src: "/assets/images/interior/trunkLexus.jpg", alt: "Interior after our Interior Refresh Service" },
      { src: "/assets/images/interior/driver15.jpg", alt: "Interior after our Interior Refresh Service" },
      { src: "/assets/images/interior/door1.jpg", alt: "Interior after our Interior Refresh Service" }
    ]
  },
  cta: {
    title: "Ready to refresh your interior?",
    lead: "Have questions about our Interior Refresh service? Want to book an appointment? Get in touch with us today!",
    next: { label: "Need a deeper clean? See Full Interior Detail", href: "/services/interior" }
  }
};

export default function Page() {
  return <ServicePage {...page} />;
}
