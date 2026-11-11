import { ServicePage } from "../../components/ServicePage";
import { OptionCard, WideCard } from "../../components/OptionCard";
import { Button } from "../../components/ui/Button";

export const metadata = {
  title: "Boat, RV, Trailer & ORV Detailing in Buckley & Bonney Lake",
  description: "Mobile and shop detailing for RVs, travel trailers, boats, and off-road vehicles (ORVs) across Pierce County and South King County, WA.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/services/recreational" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/services/recreational",
    images: [{ url: "/assets/images/polish/rv-finished.jpg", alt: "RV after wash and ceramic spray sealant" }]
  }
};

// Content for this page. The layout lives in app/components/ServicePage.tsx.
// Recreational is priced per foot or by quote, so option cards take the estimator's place.
const page = {
  slug: "recreational",
  schema: {
    serviceImage: "/assets/images/recreational/RVWash.jpg",
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "RV/Trailer and Boat Detailing",
        description: "At Dirt-Less Detailing we aren't limited to just cars and trucks! Book any boats, RV's, Trailers, or ORV's for a detail today!",
        areaServed: "Buckley, Bonney Lake, and surrounding areas.",
        serviceType: "RV/Trailer and Boat Detailing"
      }
    }
  },
  hero: {
    title: "Boat, RV, Trailer & ORV Detailing",
    lead: "Bring any of your recreational vehicles back to life with our detailing services for them.",
    image: "/assets/images/recreational/RVWash.jpg",
    sideImage: "/assets/images/recreational/sidexsideFoam.jpg"
  },
  options: {
    title: "Recreational services",
    lead: "Simple per-foot pricing for RVs, trailers and boats. Off-road vehicles are quoted.",
    content: (
      <>
        <div className="grid gap-6 md:grid-cols-3">
          <OptionCard
            title="RV & trailer detailing"
            image="/assets/images/recreational/toyHaulerAfter.jpg"
            alt="Detailed RV toy hauler interior"
            price="$10/foot"
            priceNote="$10/foot interior, $10/foot exterior"
          >
            Perfect right after you take it out of storage for the year, or right before it goes in, so nothing on it now eats into the materials.
          </OptionCard>
          <OptionCard
            title="Boat detailing"
            image="/assets/images/recreational/Boatinterior.jpg"
            alt="Clean boat interior after detailing"
            price="$10/foot"
            priceNote="$10/foot interior, $10/foot exterior"
          >
            Get your boat ready for summer. We&apos;ll vacuum, blow out and clean all the main compartments and protect them with our specialized cleaners. On
            the outside we give it a thorough wash and top it with a ceramic spray sealant so it stays cleaner through the year.
          </OptionCard>
          <OptionCard
            title="ORV detailing"
            image="/assets/images/before&afters/sideBySideAfter.jpg"
            alt="Side-by-side ORV clean after detailing"
            price="Quote required"
            priceNote="Depending on size and condition"
          >
            We&apos;re in the perfect part of Washington for dirt bikes, quads and side-by-sides, so we&apos;ve washed plenty of them. We clean the interior and
            exterior and always top it with a ceramic spray sealant to help keep some of the dirt and mud off next time.
          </OptionCard>
        </div>
        <WideCard
          title="Notes on our recreational services"
          image="/assets/images/recreational/motorcycleFoam.jpg"
          alt="Motorcycle during a wash with foam on it"
          actions={
            <>
              <Button href="/inquiry" size="lg">
                Send an Inquiry
              </Button>
              <Button href="sms:+12532529758" variant="secondary" size="lg">
                Call or text (253) 252-9758
              </Button>
            </>
          }
        >
          We don&apos;t currently offer polishing on boats, RVs, trailers or ORVs, though we may in the future or in very specific cases. If you have another
          vehicle you don&apos;t see listed here, let us know and we can most likely work out a price. With our detailing equipment we&apos;ve even done roofs,
          solar panels and car parts like a full rear axle.
        </WideCard>
      </>
    )
  },
  faq: {
    title: "Recreational detailing FAQs",
    lead: "Answers to the questions we hear most before recreational details.",
    items: [
      {
        question: "What does your ORV detailing package include?",
        answer:
          "Our ORV detailing includes cleaning and washing the full interior and exterior, using foaming chemicals that are safe on all surfaces but still strong enough to make sure no dirt sticks behind."
      },
      {
        question: "Do you offer polishing for boats and RVs?",
        answer:
          "Not usually right now, only washes and boat interiors. We have done it in the past, as you can see in some of the photos, so give us a call and we might be able to work something out. Our typical pricing for that starts around $120/ft. We may formally offer polishing and ceramic coating for both in the future, so check back!"
      },
      {
        question: "Can you come to me for these services?",
        answer: "Yes! We can do all of these services at your home. All we need is an electrical outlet and a water spigot."
      },
      {
        question: "What cities do you service?",
        answer:
          "With our mobile service we can go to Bonney Lake, Buckley, Sumner, Enumclaw, Puyallup, Lake Tapps, Federal Way, Orting, South Prairie, Black Diamond, Milton, Edgewood and Graham."
      }
    ]
  },
  results: {
    title: "On the road or off it, we've got you covered",
    lead: "Recent boats, RVs and off-road vehicles we've detailed.",
    galleryHref: "/gallery/exterior",
    galleryLabel: "See the exterior gallery",
    images: [
      { src: "/assets/images/recreational/nautiqueInt.jpg", alt: "Clean Nautique boat interior and deck after detailing" },
      { src: "/assets/images/recreational/rvRoofDuring.jpg", alt: "RV roof partway through cleaning, showing removed dirt" },
      { src: "/assets/images/recreational/RVPolishBA.jpg", alt: "Before and after of an RV exterior polish" },
      { src: "/assets/images/recreational/jetskis.jpeg", alt: "Two jet skis on a trailer in the Dirt-Less Detailing shop" },
      { src: "/assets/images/recreational/RBoat.jpg", alt: "Detailed pontoon boat docked on the lake" },
      { src: "/assets/images/recreational/rvInt.png", alt: "Cleaned RV interior living area" }
    ]
  },
  cta: {
    title: "Have something that needs a good detail?",
    lead: "Questions, or want a free quote on a recreational detail? Send us an inquiry and we'll get back to you, usually the same day.",
    actions: (
      <>
        <Button href="/inquiry" size="lg">
          Send an Inquiry
        </Button>
        <Button href="sms:+12532529758" variant="secondary" size="lg">
          Call or text
        </Button>
      </>
    )
  }
};

export default function Page() {
  return <ServicePage {...page} />;
}
