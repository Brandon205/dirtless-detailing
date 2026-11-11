import { ServicePage } from "../../components/ServicePage";
import { FaLock } from "react-icons/fa";
import { GiSquareBottle } from "react-icons/gi";
import ImageGallery from "../../components/ImageGallery";

// Content for this page. The layout lives in app/components/ServicePage.tsx.
const page = {
  slug: "correct",
  schema: {
    serviceImage: "/assets/images/correction/genesis3.jpeg",
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Correct & Coat",
        description: "Elevate your vehicle's appearance and protection with our Correct & Coat service, leaving your car with a mirror-like shine and defense.",
        areaServed: "Buckley, Bonney Lake, and surrounding areas.",
        serviceType: "Paint Correction and Ceramic Coating"
      }
    }
  },
  hero: {
    title: "Exterior Correct & Coat",
    lead: "The Ultimate Exterior Detail & Protection for your vehicle. Our most extensive exterior package with extra in-depth Paint Correction and a 3-Year Ceramic Coating.",
    image: "/assets/images/correction/genesis3.jpeg",
    sideImage: "/assets/images/before&afters/scratchesBA.png"
  },
  about: {
    title: "Our Correct & Coat service",
    lead: "The ultimate exterior detail and protection",
    media: { before: "/assets/images/before&afters/ramCorrectB.jpg", after: "/assets/images/before&afters/ramCorrectA.jpg" },
    points: [
      {
        icon: <FaLock />,
        text: (
          <>
            Correct & Coat is our premier exterior service, utilizing a rigorous 2-stage paint correction process to remove 70-95% of scratches, swirls, and
            imperfections. We tailor this intensive process to your specific goals, ensuring you get the exact results you want for your investment.
          </>
        )
      },
      {
        icon: <GiSquareBottle />,
        text: (
          <>
            The restored paint is then locked in with a professional 3-year ceramic coating, providing a glass-like shine and the best protection against
            Washington's weather. We choose a 3-year coating specifically because it aligns with a realistic maintenance schedule, allowing us to check in and
            refresh the surface before new swirls can accumulate.
          </>
        )
      }
    ],
    idealFor: "Owners seeking a flawless, mirror-like finish and the highest level of scratch removal.",
    note: (
      <>
        Complete the detail! While your car is with us now is the best time to get that interior you've been meaning to do back in shape! Check out our current
        offers and pricing on our full interior detail{" "}
        <a href="/services/interior" className="font-semibold text-accent-hover hover:underline">
          here
        </a>
        !
      </>
    )
  },
  process: {
    title: "Our Correct & Coat process",
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
      { title: "Dry vehicle", text: <>Dry the whole vehicle with drying towels and air blowers.</> },
      {
        title: "Remove scratches and watermarks",
        text: (
          <>
            Perform a 2-stage paint correction removing up to 70-95% of scratches and greatly reducing if not removing the look of deeper scratches. We also go
            over the glass as well removing watermarks and light scratches.
          </>
        )
      },
      {
        title: "Coat vehicle",
        text: (
          <>
            Apply our 3-year Ceramic Coating to the paint. At this point we also coat the windshield, wheels, and the trim. Leaving no part of your car that's
            uncoated!
          </>
        )
      },
      {
        title: "Final touches",
        text: <>Dress the tires if desired, dress the wheel wells, and touch up all around removing polishing compound from corners and anything else we see.</>
      }
    ]
  },
  faq: {
    title: "Ceramic coating FAQs",
    lead: "Answers to the most common questions we get about ceramic coatings.",
    items: [
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
            <ImageGallery className="mt-4 max-w-xs grid-cols-1 md:grid-cols-1 lg:grid-cols-1" images={[{ src: "/assets/images/showcase/iglcircle.jpg", alt: "Benefits of IGL high solids ceramic coatings" }]} />
          </div>
        )
      },
      {
        question: "How do I wash/maintain a Ceramic Coating?",
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
        question: "Does a ceramic coating make my vehicle scratch proof?",
        answer: <p>Unfortunately no, but it does noticeably increase resistance against light scratches and swirl marks.</p>
      },
      {
        question: "How long will my Ceramic Coating last?",
        answer: (
          <p>
            Unlike waxes true ceramic coatings don't just wash off, however, over time your coating can get clogged with contaminants and gloss, slickness, and
            water beading can degrade (for this coating it should stay in good quality for up to 3 years). If you want to maintain all the benefits of your
            ceramic coating we recommend getting at least our{" "}
            <a href="/services/exterior" className="font-semibold text-accent-hover hover:underline">
              Exterior Decon Wash
            </a>{" "}
            package bi-annually or annually. This package fully decontaminates and refreshes your ceramic coating back to the day you got it.
          </p>
        )
      },
      {
        question: "Can I still go through car washes?",
        answer: (
          <p>
            We never recommend going through a car wash as they can reduce the gloss slickness and beading of your coating prematurely. However in a pinch a
            touch-less car wash will suffice. Just make sure to use the cheapest setting, without any waxes. It is also recommended after the wash to dry the
            whole vehicle with high quality drying towels (We recommend{" "}
            <a href="https://amzn.to/449nFm7" className="font-semibold text-accent-hover hover:underline" target="_blank" rel="noopener noreferrer">
              The Rag Company's Large Drying Towel
            </a>
            and{" "}
            <a href="https://amzn.to/3uKuqi1" className="font-semibold text-accent-hover hover:underline" target="_blank" rel="noopener noreferrer">
              Griot's Ceramic Speed Shine
            </a>
            )!
          </p>
        )
      }
    ]
  },
  results: {
    title: "A brand new look and feel",
    lead: "Not just a complete exterior refresh: your vehicle is now protected against everything Washington's weather throws at it.",
    galleryHref: "/gallery/correct",
    galleryLabel: "See the Correct & Coat gallery",
    images: [
      { src: "/assets/images/correction/correction1280.jpg", alt: "Exterior after our Correct & Coat Service" },
      { src: "/assets/images/correction/ram1.jpg", alt: "Exterior after our Correct & Coat Service" },
      { src: "/assets/images/correction/goodguystruck.jpg", alt: "Exterior after our Correct & Coat Service" },
      { src: "/assets/images/correction/ferrariBadge.jpg", alt: "Exterior after our Correct & Coat Service" },
      { src: "/assets/images/correction/teslafoam.jpg", alt: "Exterior during our Correct & Coat Service" },
      { src: "/assets/images/correction/sanding.jpg", alt: "trunk lid during our Correct & Coat Service" },
      { src: "/assets/images/correction/ceramicBeads1.jpg", alt: "Exterior after our Correct & Coat Service" },
      { src: "/assets/images/correction/old-chevy.jpg", alt: "Exterior after our Correct & Coat Service" },
      { src: "/assets/images/correction/wheelFaces.jpg", alt: "trunk lid during our Correct & Coat Service" },
      { src: "/assets/images/correction/carwashtruckBA.jpg", alt: "trunk lid during our Correct & Coat Service" }
    ]
  },
  cta: {
    title: "Not sure this is the service you need?",
    lead: "Come by our shop in Buckley, or get in touch with us today, and for no cost at all we can answer your questions. We'll take a look, assess what you want and even show you test spots vs our other services on your car so you can see what each service entails and the results.",
    next: { label: "Prefer a lighter polish? See Polish & Coat", href: "/services/polish" }
  }
};

export default function Page() {
  return <ServicePage {...page} />;
}
