import Image from "next/image";
import Link from "next/link";
import { HeroSlider } from "./components/hero-slider";
import HomePageSchema from "./jsonSchemas/HomePageSchema";
import { StatsStrip } from "./components/StatsStrip";
import { VideoEmbed } from "./components/VideoEmbed";
import { Badge } from "./components/ui/Badge";
import { Button } from "./components/ui/Button";
import { CtaBand } from "./components/ui/CtaBand";
import { Faq } from "./components/ui/Faq";
import { Section, containerClass } from "./components/ui/Section";
import { SectionHeader } from "./components/ui/SectionHeader";
import { ServiceCard } from "./components/ui/ServiceCard";
import { serviceBySlug, servicesIn } from "../utils/services";

const GOOGLE_REVIEWS = "https://www.google.com/localservices/prolist?g2lbs=ADZRdktLAaGKKobG3aZn2_Qd9tpM-f3ifTKQp4hXsZnMmVk1USpK7Ha4kZIeLdSCTp26Z3uD8UBdDwRY7Zqn7XZatg-9z1GI86mqJXoiFQCA1rCg0Vis_yQK9JiR9qrRMObWwAegw9aPUbKd01T05_4R3o4ry_qhHA%3D%3D&hl=en-US&gl=us&cs=1&ssta=1&q=dirtless%20detailing&oq=dirtless%20detailing&slp=MgA6HENoTUlxZVd0Nkl2SV9nSVY2UTZ0QmgyZWJnaVJSAggCYAB6-gFDaEprYVhKMGJHVnpjeUJrWlhSaGFXeHBibWRJNnZqVDFhcTRnSUFJV2h3UUFCQUJHQUFZQVNJU1pHbHlkR3hsYzNNZ1pHVjBZV2xzYVc1bmtnRVZZMkZ5WDJSbGRHRnBiR2x1WjE5elpYSjJhV05sbWdFa1EyaGtSRk5WYUU1TlJ6bHVVekJXU2xFd1JtNVRWVkpEV2pKYVNHTnVhRzVTVWtGQ3FnRTZFQUV5SGhBQklocEZwOXktNVEwdWdLbGRqT2pnOEdvLWlaQlZ5NUdlSjh3QjV6SVdFQUlpRW1ScGNuUnNaWE56SUdSbGRHRnBiR2x1Wi1BQkFBkgG0AgoNL2cvMTFzYnBjOV8zYgoNL2cvMTFmcDJwN3dtbgoNL2cvMTFrMndndnhyegoNL2cvMTFzbXZfbm13MQoLL2cvMXRmM2I3bHQKDS9nLzExZ2w0dDJkY20KDC9nLzEyNjBieGxoNgoNL2cvMTFwMTN5MnQ4cQoNL2cvMTFjbnpuX3p3agoNL2cvMTFqcTlwcGtfNwoNL2cvMTFneTRsejU5aAoNL2cvMTF0ZDhjN195NQoNL2cvMTFrNDVzNzVmcwoNL2cvMTFnMnhjbHBxMwoNL2cvMTFzNTFrN2YzdAoNL2cvMTFzM2YwMHZzcAoML2cvMTFnem44M3diCg0vZy8xMW5uMGhzanF2Cg0vZy8xMWZxcXoxdmdwCg0vZy8xMXQ0ZmprMDltEgQSAggBEgQKAggB&src=2&spp=Cg0vZy8xMXNicGM5XzNiOtABV2h3UUFCQUJHQUFZQVNJU1pHbHlkR3hsYzNNZ1pHVjBZV2xzYVc1bmtnRVZZMkZ5WDJSbGRHRnBiR2x1WjE5elpYSjJhV05sbWdFa1EyaGtSRk5WYUU1TlJ6bHVVekJXU2xFd1JtNVRWVkpEV2pKYVNHTnVhRzVTVWtGQ3FnRTZFQUV5SGhBQklocEZwOXktNVEwdWdLbGRqT2pnOEdvLWlaQlZ5NUdlSjh3QjV6SVdFQUlpRW1ScGNuUnNaWE56SUdSbGRHRnBiR2x1Wnc9PQ%3D%3D&serdesk=1&lrlstt=1682530844021&ved=2ahUKEwiSvKHoi8j-AhWfHjQIHT0kD2MQvS56BAgwEAE&scp=ChpnY2lkOmNhcl9kZXRhaWxpbmdfc2VydmljZRJgEhIJeUAf2e38kFQRVTQwKEuFSMMiMkRpcnQtTGVzcyBEZXRhaWxpbmcsIDkzMDUgMjA1dGggQXZlIEUsIEJvbm5leSBMYWtlKhQNCAEeHBXFWjC3HQgBHhwlxVowtzAAGhJkaXJ0bGVzcyBkZXRhaWxpbmciEmRpcnRsZXNzIGRldGFpbGluZyoVQ2FyIGRldGFpbGluZyBzZXJ2aWNl#ts=3";
const FACEBOOK_REVIEWS = "https://www.facebook.com/DirtLessDetailing/reviews";

const heroImages = [
  "/assets/images/showcase/range-rover-left.webp",
  "/assets/images/showcase/ceramicBeads1.webp",
  "/assets/images/showcase/redGTRWipe.jpg",
  "/assets/images/showcase/brandonBMW.jpg",
  "/assets/images/showcase/fordGTBack.webp",
  "/assets/images/showcase/driverNewLexus.webp",
  "/assets/images/correction/bPressure.jpg"
];

// `highlight` is the sentence shown in white semibold.
const reviews = [
  {
    before: "Had an issue with the interior of a vehicle that had been in a garage for too long. Dirt-Less handled it professionally and quickly.",
    highlight: "We will definitely keep going back for our needs.",
    after: "",
    name: "Jonathon H.",
    service: "Full Interior Detail"
  },
  {
    before: "Brenden does an amazing job. My car looks amazing.",
    highlight: "He is super reasonable in his pricing and was very efficient.",
    after: "Will definitely continue to use his service for all our vehicles.",
    name: "Kristi H.",
    service: "Full Interior Detail"
  },
  {
    before: "Brought in my 12 Escalade and he worked his magic on both inside and outside.",
    highlight: "Brenden is very good at what he does, the vehicle looks amazing. Better than it was when I bought it.",
    after: "Thank you so much for getting me into your schedule. I am Extremely pleased with the outcome of your services.",
    name: "Rob B.",
    service: "Full Interior Detail"
  }
];

const faqs = [
  {
    question: "How do I wash and maintain a ceramic coating?",
    answer: (
      <>
        Our full Ceramic Coating Maintenance Guide is on our{" "}
        <Link href="/products?category=Ceramic Maintenance" className="font-semibold text-accent-hover hover:underline">
          Products page
        </Link>
        . It covers everything you need to know, including the products and techniques we recommend.
      </>
    ),
    answerText:
      "Our full Ceramic Coating Maintenance Guide is on our Products page. It covers everything you need to know, including the products and techniques we recommend."
  },
  {
    question: "After dropping off I won't have a ride home. What are my options?",
    answerText:
      "No worries, it happens all the time! We've brought people back home, picked their car up and dropped it off later, and we've even had customers order an Uber straight from our shop. All of these are included as long as you're within 20 minutes of our shop. Let us know which option works best for you!"
  },
  {
    question: "What areas do you service?",
    answerText:
      "Our shop is in Buckley, Washington. For mobile services we typically go as far north as Kent and as far south as Graham. Contact us if you have questions about your location!"
  },
  {
    question: "What forms of payment do you take?",
    answerText:
      "We take all widely accepted debit and credit cards. We also accept checks, and can text or email you an invoice to pay online if needed."
  },
  {
    question: "Do you offer gift cards?",
    answerText: "Yes! Any of our services can be bought as a gift card. Get one through our online booking page, or call or text us."
  },
  {
    question: "How does booking with Dirt-Less Detailing work?",
    answerText:
      "Pick your services and an open time on our booking page, then hold it with a small deposit. Expect a text from us the day before your detail to make sure the time still works, and we'll see you then!"
  }
].map((f) => ({ ...f, answer: f.answer ?? f.answerText }));

export default function Home() {
  const recreational = serviceBySlug("recreational");

  return (
    <div className="bg-page text-ink">
      <HomePageSchema />

      <HeroSlider images={heroImages} overlayClassName="bg-black/55" className="h-auto min-h-[640px] lg:h-[90vh] lg:min-h-[680px]">
        <div className={`${containerClass} relative z-50 py-32 lg:py-24`}>
          <p className="text-eyebrow font-bold uppercase text-accent">Buckley, WA · Mobile from Kent to Graham</p>
          <h1 className="mt-4 max-w-4xl text-balance text-hero-sm font-extrabold text-white md:text-hero">Your Ceramic Coating & Auto Detailing Specialists</h1>
          <p className="mt-6 max-w-2xl text-lead text-zinc-200">
            Everything from removing stains from your interior to our most detail-oriented paint correction and ceramic coating jobs. You can trust Dirt-Less
            Detailing to get the job done right.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/booking" size="lg">
              Book Online
            </Button>
            <Button href="/inquiry" variant="secondary" size="lg" className="bg-zinc-950/40">
              Send an Inquiry
            </Button>
          </div>
          <Link
            href="/booking"
            className="group mt-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-zinc-950/50 py-1.5 pl-1.5 pr-4 text-sm font-semibold text-white transition-colors hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Badge variant="featured">Gift cards</Badge>
            Give a detail this season
            <span aria-hidden="true" className="text-accent-hover transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </HeroSlider>

      <StatsStrip />

      <Section className="border-t-0">
        <SectionHeader
          eyebrow="Interior"
          title="Premium interior services"
          lead="Transform your vehicle's interior, from a quick refresh to a full restoration."
          action={{ label: "Compare interior services", href: "/services/interior" }}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicesIn("interior").map((s) => (
            <ServiceCard key={s.slug} service={s} sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw" />
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeader
          eyebrow="Exterior"
          title="Exterior services"
          lead="From a deep decon wash to full paint correction and a ceramic coating. Listed from lowest to highest price."
          action={{ label: "Compare exterior services", href: "/services/polish" }}
        />
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {servicesIn("exterior").map((s) => (
            <ServiceCard key={s.slug} service={s} sizes="(min-width: 1280px) 300px, (min-width: 640px) 50vw, 100vw" />
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line">
            <Image src={recreational.photo} alt="An RV after a wash by Dirt-Less Detailing" fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" />
          </div>
          <div>
            <SectionHeader
              eyebrow="Recreational"
              title={recreational.name}
              lead="Interior and exterior detailing for any of your other vehicles: boats, RVs, trailers and off-road vehicles."
              className="mb-8"
            />
            <Button href={recreational.href} variant="secondary" size="lg">
              Explore recreational services
            </Button>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeader eyebrow="Reviews" title="What our customers say" />
        <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
          {reviews.map((r) => (
            <figure key={r.name} className="flex min-w-[85%] snap-start flex-col justify-between gap-6 rounded-2xl border border-line bg-page p-6 md:min-w-0">
              <blockquote className="leading-relaxed text-zinc-300">
                <p>
                  “{r.before} <strong className="font-semibold text-white">{r.highlight}</strong>
                  {r.after && ` ${r.after}`}”
                </p>
              </blockquote>
              <figcaption className="flex flex-wrap items-center justify-between gap-3">
                <span className="font-bold">{r.name}</span>
                <Badge>{r.service}</Badge>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-8 text-muted">
          Read all of our reviews on{" "}
          <a href={GOOGLE_REVIEWS} target="_blank" rel="noopener noreferrer" className="font-semibold text-accent-hover hover:underline">
            Google
          </a>{" "}
          or{" "}
          <a href={FACEBOOK_REVIEWS} target="_blank" rel="noopener noreferrer" className="font-semibold text-accent-hover hover:underline">
            Facebook
          </a>
          .
        </p>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div>
            <SectionHeader
              eyebrow="FAQ"
              title="Common questions"
              lead="Answers to the questions we hear most when people book with us."
              className="mb-6"
            />
            <Button variant="link" href="/inquiry">
              Send us an inquiry
            </Button>
          </div>
          <Faq items={faqs} />
        </div>
      </Section>

      <Section className="border-t-0 pt-0 md:pt-0">
        <CtaBand title="See pricing and book online, 24/7." lead="Pick your services, see real prices and choose an open time." />
      </Section>

      <Section tone="surface">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHeader
              eyebrow="YouTube"
              title="Latest video"
              lead="Testing primer polishes: Dr. Beasley's CoreCut vs. Shine Supply Burnout, head to head."
              className="mb-6"
            />
            <Button variant="link" href="https://www.youtube.com/channel/UCsoqP5s4hwkQd_Sd-TVv-jg">
              More on our YouTube channel
            </Button>
          </div>
          <VideoEmbed id="tCHIwrw5aJ4" title="Testing Primer Polishes: Dr. Beasley's CoreCut vs. Shine Supply Burnout Head-to-Head | Part 1" />
        </div>
      </Section>
    </div>
  );
}
