import { ServicePage } from "../../components/ServicePage";
import { GiSpill, GiVacuumCleaner } from "react-icons/gi";

export const metadata = {
  title: "Full Interior Detailing in Buckley & Bonney Lake",
  description:
    "Comprehensive interior auto detailing in Pierce County. Shampoo and steam extraction, stain removal, leather conditioning, and thorough odor elimination.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/services/interior" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/services/interior",
    images: [{ url: "/assets/images/interior/driver16.jpg", alt: "Car driver interior after our Full Interior Detail service" }]
  }
};

// Content for this page. The layout lives in app/components/ServicePage.tsx.
const page = {
  slug: "interior",
  schema: {
    serviceImage: "/assets/images/interior/driver16.jpg",
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Full Interior Detail",
        description:
          "Get your car's interior looking brand new with our full interior detailing service. This is our thorough cleaning and conditioning package where we try to bring your vehicle as close to perfection as we can get it. Contact us to schedule your appointment today.",
        areaServed: "Buckley, Bonney Lake, and surrounding areas.",
        serviceType: "Interior Detailing"
      }
    }
  },
  hero: {
    title: "Full Interior Detail",
    lead: "Our full interior detail service is designed to bring your vehicle's interior back to life. From deep cleaning carpets to conditioning leather, we cover it all.",
    image: "/assets/images/interior/driver16.jpg",
    sideImage: "/assets/images/interior/driverTesla.jpg"
  },
  about: {
    title: "Our Full Interior Detail",
    lead: "Thorough cleaning and conditioning",
    media: { before: "/assets/images/before&afters/subPassB.jpg", after: "/assets/images/before&afters/subPassA.jpg" },
    points: [
      {
        icon: <GiVacuumCleaner />,
        text: (
          <>
            When your vehicle has reached the point where a simple vacuuming isn't enough, the Full Interior detail is the reset you need. We've spent years
            researching chemicals to find exactly what works for every mess—from coffee spills and pet accidents to embedded dirt and mystery odors. We don't
            just mask problems; we utilize specific chemistry to eliminate them at the source.
          </>
        )
      },
      {
        icon: <GiSpill />,
        text: (
          <>
            We match our techniques to your specific situation, using a "carpet encapsulation" process to remove light stains and odors without unnecessarily
            soaking your floors. For tougher cases, we utilize high-grade extraction and agitation to pull mud and debris from deep within the fibers. Your
            interior won't just look clean—it will be as clean as modern detailing chemistry allows.
          </>
        )
      }
    ],
    checklist: [
      "Expert Chemical Research",
      "Specialized Carpet Methods",
      "Safe, Efficient, and Effective",
      "Targeted Odor Elimination",
      "Embedded Dirt & Stain Removal"
    ],
    note: (
      <>
        Want the exterior done as well? Feel free to book an interior and exterior detail, we will get your entire vehicle looking like new in just one day!
        Check out our exterior decon wash{" "}
        <a href="/services/exterior" className="font-semibold text-accent-hover hover:underline">
          here
        </a>
        !
      </>
    )
  },
  process: {
    title: "Our interior cleaning process",
    steps: [
      { title: "Expose hidden dirt", text: <>Blow out all hidden dirt and debris to get areas that are hard to reach with a vacuum.</> },
      { title: "Vacuum vehicle", text: <>Thoroughly vacuum every crack and crevice of the vehicle.</> },
      { title: "Carpet reconditioning/extraction", text: <>Using our wide array of carpet cleaning chemicals, remove & extract all of stains that we can.</> },
      { title: "Door jambs", text: <>Thoroughly clean and rinse out all door jambs.</> },
      { title: "Wipe down plastics and leathers", text: <>We will clean and degrease all plastics and leather seats.</> },
      { title: "Window cleaning", text: <>Clean all windows and other glass, removing any streaking possibly left behind from the previous steps.</> }
    ],
    upgrade: {
      title: "Need a full restoration?",
      text: (
        <>
          If you are looking for a more extensive interior detailing service to bring a car that has really been through it, you may need to consider our
          Interior Restoration option.
        </>
      ),
      href: "/services/interior-restoration",
      label: "See Interior Restoration"
    }
  },
  results: {
    title: "Fresh, clean and stunning results",
    lead: "Once we're done, you won't want to see your car dirty ever again.",
    galleryHref: "/gallery/interior",
    galleryLabel: "See the interior gallery",
    images: [
      { src: "/assets/images/interior/driver6.jpg", alt: "Interior after our Full Interior Service" },
      { src: "/assets/images/interior/driverTesla.jpg", alt: "Interior after our Full Interior Service" },
      { src: "/assets/images/interior/rear10.jpg", alt: "Interior after our Full Interior Service" },
      { src: "/assets/images/interior/doorRenegade.jpg", alt: "Interior after our Full Interior Service" },
      { src: "/assets/images/interior/rear4.jpg", alt: "Interior after our Full Interior Service" },
      { src: "/assets/images/interior/jamb4.jpg", alt: "Interior after our Full Interior Service" },
      { src: "/assets/images/interior/driverNewLexus.jpg", alt: "Interior after our Full Interior Service" },
      { src: "/assets/images/interior/trunk3.jpg", alt: "Interior after our Full Interior Service" }
    ]
  },
  cta: {
    title: "Want us to bring your car back to new?",
    lead: "Have questions about our Full Interior Service? Want to book an appointment? Get in touch with us today!",
    next: { label: "Mostly clean already? See Interior Refresh", href: "/services/interior-refresh" }
  }
};

export default function Page() {
  return <ServicePage {...page} />;
}
