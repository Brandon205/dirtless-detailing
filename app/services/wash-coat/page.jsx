import { ServicePage } from "../../components/ServicePage";
import { FaShieldAlt } from "react-icons/fa";
import { RiResetLeftLine } from "react-icons/ri";
import ImageGallery from "../../components/ImageGallery";

export const metadata = {
  title: "Wash & Ceramic Coating in Buckley & Bonney Lake",
  description:
    "Professional decontamination wash and 1-year ceramic coating without the expense of paint correction. Long-lasting shine and protection in Pierce County, WA.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/services/wash-coat" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/services/wash-coat",
    images: [{ url: "/assets/images/exterior/crTesla.jpg", alt: "Black Tesla after decontamination wash and ceramic coating" }]
  }
};

// Content for this page. The layout lives in app/components/ServicePage.tsx.
const page = {
  slug: "wash-coat",
  schema: {
    serviceImage: "/assets/images/exterior/crTesla.jpg",
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Wash & Coat",
        description:
          "Our full Decon Wash plus a ceramic coating that provides 1 year of protection for your paint. The best way to keep your car looking great with regular maintenance washes.",
        areaServed: "Buckley, Bonney Lake, and surrounding areas.",
        serviceType: "Car Wash & Ceramic Coating"
      }
    }
  },
  hero: {
    title: "Wash & Coat",
    lead: "Our full Decon Wash plus a ceramic coating that provides 1 year of protection for your paint. The best way to keep your car looking great with regular maintenance washes.",
    image: "/assets/images/exterior/newLexusSuv.jpg",
    sideImage: "/assets/images/exterior/porscheMacan2.jpg"
  },
  about: {
    title: "Our Wash & Coat service",
    lead: "The easiest way to get your car protected",
    media: { before: "/assets/images/before&afters/fordExteriorBefore.jpg", after: "/assets/images/before&afters/fordExteriorAfter.jpg" },
    points: [
      {
        icon: <FaShieldAlt />,
        text: (
          <>
            The Wash & Coat package is the ultimate "New Car" reset, designed for owners who prioritize surface protection and ease of maintenance. You get the
            extreme water beading and UV resistance of a ceramic shield at a fraction of the cost of our correction packages.
          </>
        )
      },
      {
        icon: <RiResetLeftLine />,
        text: (
          <>
            Once everything is decontaminated, we perform a dedicated paint prep to ensure our 1-year ceramic coating can bond properly. This creates a durable
            defense that no wax can match. Now your paint will be incredibly slick, meaning road grime struggles to stick and your maintenance washes become
            almost effortless.
          </>
        )
      }
    ],
    idealFor: "New cars or well-maintained daily drivers needing elite protection without the cost of polishing.",
    note: (
      <>
        Complete the detail! While your car is with us now's the best time to get that neglected interior back in shape! Check out our current offers and
        pricing on our full interior detail{" "}
        <a href="/services/interior" className="font-semibold text-accent-hover hover:underline">
          here
        </a>
        !
      </>
    )
  },
  process: {
    title: "Our Wash & Coat process",
    steps: [
      { title: "Wash vehicle", text: <>Thorough top to bottom wash including inside the gas door.</> },
      {
        title: "Wheel cleaning",
        text: <>Clean wheels, wheel wells, and wheel barrels with specialized chemicals made for removing brake dust and road film.</>
      },
      { title: "Clean door jambs", text: <>Thoroughly clean and rinse out all cracks and crevices in the door jambs.</> },
      {
        title: "Remove tar, sap, iron, and clay bar if needed",
        text: (
          <>
            Remove any tar, sap, and iron from the exterior. If the paint is rough to the touch after washing, we will also perform a clay bar treatment to
            remove any remaining contaminants from the paint.
          </>
        )
      },
      {
        title: "Dry vehicle and dress tires",
        text: <>Dry the whole vehicle making sure to blow out the cracks. We'll also dress the tires at this point if desired.</>
      },
      { title: "Apply primer polish", text: <>Apply a Primer Polish to ensure proper bonding.</> },
      { title: "Apply 1-year ceramic coating", text: <>Apply our 1-Year Ceramic Coating for lasting protection and shine.</> }
    ],
    upgrade: {
      title: "Want a polish or paint correction?",
      text: (
        <>
          Check out our{" "}
          <a href="/services/polish" className="font-semibold text-accent-hover hover:underline">
            Polish & Coat
          </a>{" "}
          service for a polish, or our{" "}
          <a href="/services/correct" className="font-semibold text-accent-hover hover:underline">
            Correct & Coat
          </a>{" "}
          service for a full paint correction. Both include our longer-lasting 3-year ceramic coating.
        </>
      ),
      href: "/services/polish",
      label: "See Polish & Coat"
    }
  },
  faq: {
    title: "Wash & Coat FAQs",
    items: [
      {
        question: "How do I maintain my Ceramic Coating?",
        answer: (
          <div>
            We have a full Ceramic Coating Maintenance Guide available on our{" "}
            <a href="/products?category=Ceramic Maintenance" className="font-semibold text-accent-hover hover:underline">
              Products page
            </a>
            , which includes everything you need to know about maintaining your ceramic coating, including recommended products and techniques!
          </div>
        )
      },
      {
        question: "What is a Ceramic Coating and why should I get one?",
        answer: (
          <div>
            <ul className="ml-5 list-disc space-y-1">
              <li>
                Besides PPF it is the best protection for your paint, ceramic coatings increase the hardness of your paint, making it less likely to scratch
                while washing.
              </li>
              <li>
                Coatings increase the Gloss and Slickness of your paint, which can help remove dirt before it gets trapped under your wash mitts leading to
                scratches.
              </li>
              <li>
                Self cleaning properties: ceramic coatings easily bead water, dirt gets caught in these beads and will fly off while you're driving! Your
                windshield will bead water like never before as well!
              </li>
              <li>
                It will be far easier to wash and dry your car. Dirt will wash off with less effort, you can also blow dry 90% of your vehicle when you're done
                washing.
              </li>
            </ul>
            <ImageGallery
              className="mt-4 max-w-xs grid-cols-1 md:grid-cols-1 lg:grid-cols-1"
              images={[{ src: "/assets/images/showcase/iglcircle.jpg", alt: "Benefits of IGL high solids ceramic coatings" }]}
            />
          </div>
        )
      },
      {
        question: "How do I wash/maintain a Ceramic Coating?",
        answer: (
          <div>
            We have a full Ceramic Coating Maintenance Guide available at the bottom of our{" "}
            <a href="/products?category=Ceramic Maintenance" className="font-semibold text-accent-hover hover:underline">
              Ceramic Products Page
            </a>
            , which includes everything you need to know about maintaining your ceramic coating, including recommended products and techniques!
          </div>
        )
      },
      {
        question: "Does a ceramic coating make my vehicle scratch proof?",
        answer: <p>Unfortunately no, but it does noticeably increase resistance against light scratches and swirl marks.</p>
      },
      {
        question: "How long will my Ceramic Coating last?",
        answer: (
          <p>
            Unlike waxes true ceramic coatings don't just wash off, however, over time your coating can get clogged with contaminants and gloss, slickness, and
            water beading can degrade (for this coating it should stay in good quality for up to 1 year). We recommend getting at least our{" "}
            <a href="/services/exterior" className="font-semibold text-accent-hover hover:underline">
              Exterior Decon Wash
            </a>{" "}
            service with the <strong>Ceramic Maintenance Addon</strong> done bi-annually or annually. This package fully decontaminates and refreshes your
            ceramic coating as well as has us top any spots that might be wearing down if needed.
          </p>
        )
      },
      {
        question: "Can I still go through car washes?",
        answer: (
          <p>
            We never recommend going through a car wash as they can reduce the gloss slickness and beading of your coating prematurely. However in a pinch a
            touch-less car wash will suffice. Just make sure to use the cheapest setting, without any waxes. We also recommend to make sure that all the edges
            and corners are blown out and dried (We recommend{" "}
            <a href="https://amzn.to/41db9SY" className="font-semibold text-accent-hover hover:underline" target="_blank" rel="noopener noreferrer">
              The Rag Company's Large Drying Towel
            </a>
            ).
          </p>
        )
      }
    ]
  },
  results: {
    title: "Protected and easy to keep clean",
    lead: "A year of ceramic protection on your paint and wheels.",
    galleryHref: "/gallery/exterior",
    galleryLabel: "See the exterior gallery",
    images: [
      { src: "/assets/images/exterior/archCoTruck.jpg", alt: "Truck after our Wash & Coat service" },
      { src: "/assets/images/exterior/crTesla.jpg", alt: "Tesla after our Wash & Coat service" },
      { src: "/assets/images/exterior/newLexusSuv.jpg", alt: "Lexus SUV after our Wash & Coat service" },
      { src: "/assets/images/exterior/porscheMacan2.jpg", alt: "Porsche Macan after our Wash & Coat service" }
    ]
  },
  cta: {
    title: "Not sure this is the service you need?",
    lead: "Come by our shop in Buckley, or get in touch with us today, and for no cost at all we can answer your questions. We'll take a look, assess what you want and even show you test spots vs our other services on your car so you can see what each service entails and the results.",
    next: { label: "Want swirls removed too? See Polish & Coat", href: "/services/polish" }
  }
};

export default function Page() {
  return <ServicePage {...page} />;
}
