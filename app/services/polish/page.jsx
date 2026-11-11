import { ServicePage } from "../../components/ServicePage";
import { GiClayBrick } from "react-icons/gi";
import { FaCarOn } from "react-icons/fa6";
import ImageGallery from "../../components/ImageGallery";

export const metadata = {
  title: "Paint Polish & Ceramic Coating in Buckley & Bonney Lake",
  description:
    "Single-stage paint enhancement polishing and 3-year ceramic coating in Pierce County. Removes light swirls, restores paint depth, and delivers durable protection.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/services/polish" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/services/polish",
    images: [{ url: "/assets/images/correction/teslaclean.jpg", alt: "Tesla Model 3 after our Polish & Coat service" }]
  }
};

// Content for this page. The layout lives in app/components/ServicePage.tsx.
const page = {
  slug: "polish",
  schema: {
    serviceImage: "/assets/images/correction/teslaclean.jpg",
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Polish & Coat",
        description:
          "Experience a showroom shine and unparalleled protection with our Exterior Polish & Coat service, ensuring your car gleams like new while safeguarding its finish.",
        areaServed: "Buckley, Bonney Lake, and surrounding areas.",
        serviceType: "Paint Polishing and Ceramic Coating"
      }
    }
  },
  hero: {
    title: "Exterior Polish & Coat",
    lead: "An even more thorough wash with clay bar decontamination, a corrective polish, and a high-quality ceramic coating.",
    image: "/assets/images/correction/teslaclean.jpg",
    sideImage: "/assets/images/before&afters/f150PolishBA.jpg"
  },
  about: {
    title: "Our Polish & Coat service",
    lead: "The perfect exterior middle ground",
    media: { before: "/assets/images/before&afters/polishHoodB.jpg", after: "/assets/images/before&afters/polishHoodA.jpg" },
    points: [
      {
        icon: <GiClayBrick />,
        text: (
          <>
            This service is the perfect middle ground for vehicles that have developed light swirl marks and a dull appearance. After a thorough decontamination
            and clay bar treatment, we perform a light machine polishing step to restore depth and clarity to your clear coat.
          </>
        )
      },
      {
        icon: <FaCarOn />,
        text: (
          <>
            We top the restored surface with our 3-year ceramic coating that acts as a durable barrier against environmental damage and water spots. We also
            give your windshield, exterior glass, and trim that same coating, protecting your entire vehicle. Your car will look better, stay cleaner for
            longer, and be significantly easier to maintain until the next time you visit.
          </>
        )
      }
    ],
    idealFor: 'Daily drivers with light swirl marks or paint that has lost its original depth and "glow."',
    note: (
      <>
        Now's the perfect time to book an interior cleaning as well. Check out our current offers and pricing on our full interior detail{" "}
        <a href="/services/interior" className="font-semibold text-accent-hover hover:underline">
          here
        </a>
        !
      </>
    )
  },
  process: {
    title: "Our Polish & Coat process",
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
      { title: "Dry vehicle and dress tires", text: <>Dry the whole vehicle with drying towels and air blowers, and then dress the tires if desired.</> },
      {
        title: "Remove scratches, swirl marks, and waterspots",
        text: (
          <>
            Perform our polishing procedure removing many lighter scratches and swirls from your paint. We also go over all of the glass to remove any
            watermarks that have built up.
          </>
        )
      },
      {
        title: "Coat vehicle",
        text: (
          <>
            Apply the 3-year ceramic coating. At this stage we'll also apply our windshield, trim, headlight, and wheel coatings to protect your entire vehicle!
          </>
        )
      },
      { title: "Final touches", text: <>Dress the tires and wheel wells</> }
    ],
    upgrade: {
      title: "Upgrade to Correct & Coat",
      text: (
        <>
          If you opt for our Exterior Correct & Coat package you get all of these services, a 2-stage paint correction (removes more & deeper scratches), for an
          even deeper gloss and a flawless, mirror-like finish!
        </>
      ),
      href: "/services/correct",
      label: "See Correct & Coat"
    }
  },
  faq: {
    title: "Polish & Coat FAQs",
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
            water beading can degrade (for this coating it should stay in good quality for up to 3 years). We recommend getting at least our{" "}
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
    title: "Clean, shiny and protected",
    lead: "With light scratches removed and 3 years of protection applied, your car will shine like never before.",
    galleryHref: "/gallery/polish",
    galleryLabel: "See the Polish & Coat gallery",
    images: [
      { src: "/assets/images/polish/36 plymouth.jpg", alt: "Exterior after our Polish & Coat Service" },
      { src: "/assets/images/polish/bMustang1.jpg", alt: "Exterior after our Polish & Coat Service" },
      { src: "/assets/images/polish/jaguar.jpg", alt: "Exterior after our Polish & Coat Service" },
      { src: "/assets/images/polish/thatmustang.jpg", alt: "Exterior after our Polish & Coat Service" },
      { src: "/assets/images/polish/redFordPolishers.jpg", alt: "Exterior during our Polish & Coat Service" },
      { src: "/assets/images/polish/fjCruiserOutside2.jpg", alt: "Exterior after our Polish & Coat Service" },
      { src: "/assets/images/polish/rivianDuring.jpg", alt: "Exterior after our Polish & Coat Service" },
      { src: "/assets/images/polish/blueRav4.jpg", alt: "Exterior after our Polish & Coat Service" }
    ]
  },
  cta: {
    title: "Not sure this is the service you need?",
    lead: "Come by our shop in Buckley, or get in touch with us today, and for no cost at all we can answer your questions. We'll take a look, assess what you want and even show you test spots vs our other services on your car so you can see what each service entails and the results.",
    next: { label: "Want a flawless, mirror-like finish? See Correct & Coat", href: "/services/correct" }
  }
};

export default function Page() {
  return <ServicePage {...page} />;
}
