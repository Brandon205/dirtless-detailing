import { ServicePage } from "../../components/ServicePage";
import { MdLocalCarWash } from "react-icons/md";
import { PiSprayBottleFill } from "react-icons/pi";

export const metadata = {
  title: "Exterior Decon Wash in Buckley & Bonney Lake",
  description: "Thorough hand wash, iron decontamination, tar removal, wheel cleaning, door jambs, and 3-month ceramic protection in Pierce County, WA.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/services/exterior" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/services/exterior",
    images: [{ url: "/assets/images/exterior/subaruWashed.jpeg", alt: "Subaru WRX after our Exterior Decon Wash" }]
  }
};

// Content for this page. The layout lives in app/components/ServicePage.tsx.
const page = {
  slug: "exterior",
  schema: {
    serviceImage: "/assets/images/exterior/subaruWashed.jpeg",
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Exterior Decon Wash",
        description:
          "Get a car wash like never before with our Exterior Decon Wash. Where we go in depth to get all corners and remove any paint contaminants.",
        areaServed: "Buckley, Bonney Lake, and surrounding areas.",
        serviceType: "Car Wash"
      }
    }
  },
  hero: {
    title: "Exterior Decon Wash",
    lead: "The detailers car wash. We focus on the parts that get missed, removing contaminants, and protecting your paint.",
    image: "/assets/images/exterior/corvetteWash.jpg",
    sideImage: "/assets/images/before&afters/rangeRoverRearBA.jpg"
  },
  about: {
    title: "Our Exterior Decon Wash",
    lead: "The detailer's car wash",
    media: { before: "/assets/images/before&afters/teslawashBFR.jpg", after: "/assets/images/before&afters/teslawashAFR.jpg" },
    points: [
      {
        icon: <MdLocalCarWash />,
        text: (
          <>
            Our Exterior Decon Wash is the "detailer's car wash"—built on the principle that truly clean means contaminant-free. We go far beyond the surface to
            actively dissolve iron particles, tar, and tree sap that automatic washes simply cannot touch. By focusing on areas often skipped—like door jambs
            and gas doors—we ensure your paint and wheels are clean and protected from the elements.
          </>
        )
      },
      {
        icon: <PiSprayBottleFill />,
        text: (
          <>
            We finish every wash with a high-grade ceramic spray that provides at least 3 months of protection. This layer isn't just for a mirror-like shine;
            it creates a slick surface that repels water and prevents dirt from sticking, making your next wash faster and more effective. It is the essential
            foundation for maintaining any vehicle's long-term surface integrity.
          </>
        )
      }
    ],
    idealFor: "Vehicles needing a deep season reset or a foundation professional cleaning.",
    note: (
      <>
        Complete the detail! While your car is with us now is the best time to get that neglected interior back in shape! Check out our current offers and
        pricing on our full interior detail{" "}
        <a href="/services/interior" className="font-semibold text-accent-hover hover:underline">
          here
        </a>
        !
      </>
    )
  },
  process: {
    title: "Our Exterior Decon Wash process",
    steps: [
      { title: "Wash vehicle", text: <>Thorough top to bottom wash including inside the gas door.</> },
      {
        title: "Wheel cleaning",
        text: <>Clean wheels, wheel wells, and wheel barrels with specialized chemicals made for removing brake dust and road film.</>
      },
      { title: "Clean door jambs", text: <>Thoroughly clean and rinse out all cracks and crevices in the door jambs.</> },
      {
        title: "Remove tar and sap",
        text: (
          <>
            Remove any tar and sap from the exterior. Tar typically builds up on the lower panels of the vehicle, we have strong chemicals that can safely
            remove it.
          </>
        )
      },
      { title: "Protect paint", text: <>Apply a Ceramic Spray before drying (gives the entire vehicle 3 months of protection).</> },
      { title: "Dry vehicle", text: <>Dry the whole vehicle with drying towels and air blowers.</> },
      { title: "Final touches", text: <>Dress the tires and wheel wells.</> }
    ],
    upgrade: {
      title: "Upgrade to Polish & Coat",
      text: (
        <>
          If you opt for our Exterior Polish & Coat package you get all of these benefits plus: a full vehicle polish, specialized windshield and trim coatings,
          and a 3-year ceramic coating on all paint!
        </>
      ),
      href: "/services/polish",
      label: "See Polish & Coat"
    }
  },
  results: {
    title: "What a car wash should be",
    lead: "Your car, washed, without the unnecessary scratching or missed corners.",
    galleryHref: "/gallery/exterior",
    galleryLabel: "See the exterior gallery",
    images: [
      { src: "/assets/images/exterior/subaruSoap.jpeg", alt: "Exterior after our Exterior Decon Wash" },
      { src: "/assets/images/exterior/engine5c77.jpg", alt: "Engine bay after our Engine Bay Cleaning addon" },
      { src: "/assets/images/exterior/exterior10c6.jpg", alt: "Exterior after our Exterior Decon Wash" },
      { src: "/assets/images/exterior/showTruck3.jpg", alt: "Exterior after our Exterior Decon Wash" },
      { src: "/assets/images/exterior/lexusMobile.jpg", alt: "Exterior after our Exterior Decon Wash" },
      { src: "/assets/images/exterior/terryRam.jpg", alt: "Exterior after our Exterior Decon Wash" },
      { src: "/assets/images/exterior/slamry.jpg", alt: "Exterior after our Exterior Decon Wash" },
      { src: "/assets/images/exterior/fordOutside.jpg", alt: "Exterior after our Exterior Decon Wash" }
    ]
  },
  cta: {
    title: "Book your Exterior Decon Wash",
    lead: "See prices and open times online, or send us a question first.",
    next: { label: "Want protection that lasts a year? See Wash & Coat", href: "/services/wash-coat" }
  }
};

export default function Page() {
  return <ServicePage {...page} />;
}
