import { PiBiohazardBold } from "react-icons/pi";
import { LuAirVent } from "react-icons/lu";
import { ServicePage } from "../../components/ServicePage";
import { OptionCard, WideCard } from "../../components/OptionCard";
import { Button } from "../../components/ui/Button";

export const metadata = {
  title: "Interior Restoration in Buckley & Bonney Lake",
  description:
    "Heavy-duty vehicle interior restoration in Buckley & Bonney Lake. Specialized cleaning for mold removal, smoke odor elimination, severe stains, and biohazards.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/services/interior-restoration" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/services/interior-restoration",
    images: [{ url: "/assets/images/before&afters/badInteriorBA.png", alt: "Before and after of a vehicle interior restoration" }]
  }
};

// Content for this page. The layout lives in app/components/ServicePage.tsx.
// Restoration is priced by condition, so option cards take the estimator's place.
const page = {
  slug: "interior-restoration",
  schema: {
    serviceImage: "/assets/images/before&afters/badInteriorBA.png",
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Interior Restoration",
        description:
          "Our Interior Restoration service is a service designed for vehicles that have been neglected beyond what our Full Interior Detail can handle. If your interior has heavy odors, mold, or is extremely dirty, and you need it back to acceptable, this is the service for you.",
        areaServed: "Buckley, Bonney Lake, and surrounding areas.",
        serviceType: "Interior Restoration"
      }
    }
  },
  hero: {
    title: "Interior Restoration",
    lead: "The service that can bring life back into heavily neglected interiors. If your interior has heavy odors, mold, or is extremely dirty, this is the service for you.",
    image: "/assets/images/interior/passfordGT.jpg",
    sideImage: "/assets/images/before&afters/badVanBA.jpg"
  },
  options: {
    title: "Restoration options",
    lead: "Pricing depends on the size and condition of your vehicle. Text us photos for a free estimate.",
    content: (
      <>
        <div className="grid gap-6 md:grid-cols-3">
          <OptionCard
            subtitle="Deep revive"
            title="Heavy use & pet hair"
            image="/assets/images/before&afters/badInteriorBA.png"
            alt="Before and after of a heavily neglected interior"
            price="$350 - $650+"
            priceNote="Depending on size and condition"
          >
            Perfect for heavily used daily drivers, family cars, and vehicles with embedded dirt, spills, or strong smoke/musty odors. Includes deep extraction,
            scrubbing, and sanitization. Most odors should be gone afterwards: we use zinc odor neutralizers after extracting to trap and neutralize any odors
            that survive extraction, then our Ozone Treatment (included) gets even more odors past that point.
          </OptionCard>
          <OptionCard
            subtitle="Safety & health"
            title="Mold & biohazard"
            image="/assets/images/before&afters/bio1278.webp"
            alt="Moldy rear van seat before and after"
            price="$600 - $1,200+"
            priceNote="Depending on size and condition"
          >
            If there&apos;s just a small spot or a little mold, it&apos;s included in our Full Interior Detail, but if there&apos;s more than one area or the
            mold is very bad, this is the service for you. We use multiple stages and chemicals that kill mold, and finish with a complete ozone treatment to
            get the places no one can reach.
          </OptionCard>
          <OptionCard
            subtitle="Ultimate restoration"
            title="Old vehicles & barn finds"
            image="/assets/images/interior/ferrariInt.jpg"
            alt="The interior of an old Ferrari"
            price="Quote required"
            priceNote="Depending on size and condition"
          >
            Typically for older vehicles with sun damage, fading plastics and leathers, and varying levels of wear. We use specialized cleaners to rejuvenate
            plastics and leathers and restore the interior to its best possible condition, then protect it from further damage with UV inhibitors and a durable
            interior dressing.
          </OptionCard>
        </div>
        <WideCard
          title="Budget-conscious restoration: a capped hourly detail"
          image="/assets/images/before&afters/badVanBA.jpg"
          alt="Before and after of a heavily neglected van interior"
          actions={
            <>
              <Button href="/booking" size="lg">
                Book an Hourly Block
              </Button>
              <Button href="sms:+12532529758" variant="secondary" size="lg">
                Text photos for an estimate: (253) 252-9758
              </Button>
            </>
          }
        >
          Choose this option for any of these services at our hourly rate ($125-$150/hour). Set a specific time limit (for example a 4 or 6 hour block) and
          we&apos;ll prioritize your biggest concerns, getting through the most important steps before the time is up. Ideal for making a huge impact without
          spending more.
        </WideCard>
      </>
    )
  },
  about: {
    title: "Our Interior Restoration service",
    lead: "For interiors a standard detail can't handle",
    media: { before: "/assets/images/before&afters/subDriveB.jpg", after: "/assets/images/before&afters/subDriveA.jpg" },
    points: [
      {
        icon: <PiBiohazardBold />,
        text: (
          <>
            This is a full recovery service for vehicles facing extreme conditions that standard detailing simply cannot solve. We go beyond surface cleaning,
            making sure to get hidden biohazards or deep-seated grime. Whether you&apos;re dealing with major water damage, a neglected used car, or a
            &quot;disaster&quot; vehicle, we do what it takes to restore your interior.
          </>
        )
      },
      {
        icon: <LuAirVent />,
        text: (
          <>
            On all Interior Restoration vehicles that need it we run our professional grade ozone machine to remove odors and mold spores that we can&apos;t
            reach. Combined with heated carpet/fabric extraction and EPA registered disinfectants, we tackle the jobs other shops turn away. Our goal is to
            restore your interior to its highest possible standard.
          </>
        )
      }
    ],
    checklist: [
      "HEPA vacuum",
      "Embedded grime removal",
      "Heated extraction",
      "EPA registered disinfectants",
      "Mold spore elimination",
      "Professional ozone treatment"
    ],
    note: (
      <>
        Want the exterior done as well? Book an interior and exterior detail and we&apos;ll get your entire vehicle looking like new in just one day. Check out
        our{" "}
        <a href="/services/exterior" className="font-semibold text-accent-hover hover:underline">
          Exterior Decon Wash
        </a>
        .
      </>
    )
  },
  results: {
    title: "Back to the way your car should be",
    lead: "A car you aren't scared or embarrassed to drive anymore.",
    galleryHref: "/gallery/interior",
    galleryLabel: "See the interior gallery",
    images: [
      { src: "/assets/images/interior/ferrariInt.jpg", alt: "Vehicle interior after our extensive Interior Restoration service" },
      { src: "/assets/images/interior/bio1281.jpg", alt: "Vehicle during our ozone treatment with the machine pumping ozone into the cabin" },
      { src: "/assets/images/before&afters/badMobileIntBA.jpg", alt: "Vehicle interior after our extensive Interior Restoration service" },
      { src: "/assets/images/before&afters/bio1279.webp", alt: "Vehicle interior after our extensive Interior Restoration service" },
      { src: "/assets/images/before&afters/traegerDriverBA.jpg", alt: "Vehicle interior after our extensive Interior Restoration service" },
      { src: "/assets/images/before&afters/traegerCenterBA.jpg", alt: "Vehicle interior after our extensive Interior Restoration service" },
      { src: "/assets/images/interior/wranglerIntCeramic.jpg", alt: "Vehicle interior after our extensive Interior Restoration service" }
    ]
  },
  cta: {
    title: "Is your car in need of a restoration?",
    lead: "Have questions or want a free quote on our Interior Restoration service? Send us an inquiry, or book a time online.",
    next: { label: "Not that bad? See the Full Interior Detail", href: "/services/interior" }
  }
};

export default function Page() {
  return <ServicePage {...page} />;
}
