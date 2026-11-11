import Image from "next/image";
import BaseSchema from "../jsonSchemas/BaseSchema";
import { StatsStrip } from "../components/StatsStrip";
import { Button } from "../components/ui/Button";
import { CtaBand } from "../components/ui/CtaBand";
import { Faq } from "../components/ui/Faq";
import { PageHero } from "../components/ui/PageHero";
import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";

const linkClass = "font-semibold text-accent-hover hover:underline";

const faqItems = [
  {
    question: "Can you come to my apartment or workplace?",
    answer:
      "It depends on the space and access. Apartment complexes and some workplaces can be strict about this, so we may not be able to come to you. Let us know if you need a ride home while we detail your vehicle; we give rides back all the time! We can also pick up your vehicle if needed, just let us know when you book."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, of course! We're fully insured for our vehicle pickup service as well."
  },
  {
    question: "What types of payment do you accept?",
    answer: "We take cash, check, and all major debit and credit cards."
  },
  {
    question: "What cities do you service?",
    answer:
      "With our mobile service we can go to Bonney Lake, Buckley, Sumner, Enumclaw, Puyallup, Lake Tapps, Federal Way, Orting, South Prairie, Black Diamond, Milton, Edgewood and Graham. Our current mobile fee is $50, which covers packing, travel, setup and takedown time."
  },
  {
    question: "Do I have to be there the whole time you're working on my car?",
    answer: "Absolutely not! You're free to go do whatever you need to while we work."
  },
  {
    question: "Do you install PPF or window tint?",
    answer:
      "We don't install PPF or window tint at this time. If you're looking for window tinting, there's an installer just a few bays down from our shop that we recommend!"
  },
  {
    question: "How would you recommend I wash my car on my own?",
    answer: (
      <>
        We have a guide on the steps and products we recommend on our{" "}
        <a href="/products?category=Ceramic Maintenance8" className={linkClass}>
          DIY maintenance
        </a>{" "}
        page. All the products are fine to use whether your car is ceramic coated or not. If you need a very quick wash, we only recommend touchless car washes,
        since they won&apos;t damage your paint as much as a normal car wash.
      </>
    )
  }
];

export default function About() {
  return (
    <div className="bg-page text-ink">
      <BaseSchema
        serviceImage="/assets/images/interior/driver16.jpg"
        url="https://www.dirtlessdetailing.com/about"
        makesOffer={{
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Auto Detailing",
            description:
              "Learn more about us and why Dirt-Less Detailing was founded, and check out our FAQ to get answers to our most frequently asked questions.",
            areaServed: "Buckley, Bonney Lake, and surrounding areas.",
            serviceType: "Auto Detailing"
          }
        }}
      />

      <PageHero
        eyebrow="About Dirt-Less Detailing"
        title="Who we are"
        lead="Learn a little more about who we are, how we work, and the questions we hear most."
        image="/assets/images/correction/teslafoam.jpg"
      />

      <StatsStrip />

      <Section className="border-t-0">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-line">
            <Image
              src="/assets/images/exterior/fordGTBack.jpg"
              alt="Clean Ford GT in a garage"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeader eyebrow="Our story" title="You shouldn't have to take time out of your busy day to clean your car." className="mb-6" />
            <div className="space-y-4 text-lg leading-relaxed text-zinc-300">
              <p>
                We do the dirty work for you, leaving you free to do whatever you want. After more than 1,500 details over the last 10 years we&apos;ve seen it
                all, and perfected how we tackle every part of it.
              </p>
              <p>
                I started out as a detailer at an autobody shop, and founded Dirt-Less Detailing to keep doing what I love for everyone in Bonney Lake and the
                surrounding area.
              </p>
              <p>
                Since then I&apos;ve spent about as much time researching the products and methods we use as I have detailing, and that research pays off in
                every car we work on.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <figure className="mx-auto max-w-4xl text-center">
          <p aria-hidden="true" className="text-accent">
            ★★★★★
          </p>
          <blockquote className="mt-4 text-balance text-xl leading-relaxed text-zinc-200 md:text-2xl">
            &ldquo;I cannot believe the hair and grime they were able to get out of my car. Animals, ice cream and makeup spills. Incredible! 150,000 miles and
            my interior looks brand new. Ozone treatment has it smelling so refreshed. I can&apos;t say enough about how impressed I am. On top of that they
            finished exactly when they said they would and were great to work with. Will definitely use again and refer to friends and family.&rdquo;
          </blockquote>
          <figcaption className="mt-6 font-bold">Kristen H.</figcaption>
        </figure>
      </Section>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="lg:order-2">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line">
              <Image
                src="/assets/images/showcase/porscheFront.jpg"
                alt="Brenden, the owner of Dirt-Less Detailing, with a detailed Porsche"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <SectionHeader eyebrow="The shop" title="Dirt-Less Detailing" className="mb-6" />
            <div className="space-y-4 text-lg leading-relaxed text-zinc-300">
              <p>
                Dirt-Less Detailing was founded by Brenden (on the right in the picture), a detailer with 10 years of industry experience. We specialize in
                restoring your vehicle&apos;s beauty, inside and out. Our mission is simple: give you the best results and customer service your money can buy.
              </p>
              <p>
                We offer interior and exterior detailing, ceramic coatings, paint correction and engine bay cleaning, all to keep your vehicle looking and
                performing its best.
              </p>
              <p>
                Our shop is in the{" "}
                <a href="https://maps.app.goo.gl/bhPDhjUN4jsSegu48" className={linkClass} target="_blank" rel="noopener noreferrer">
                  Buckley Business Park
                </a>
                , Unit C6, off State Route 410.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div>
            <SectionHeader eyebrow="FAQ" title="Frequently asked questions" lead="Answers to the questions we hear most." className="mb-6" />
            <Button variant="link" href="/inquiry">
              Send us an inquiry
            </Button>
          </div>
          <Faq items={faqItems} />
        </div>
      </Section>

      <Section>
        <CtaBand title="Ready to get your car detailed?" lead="See pricing and book online 24/7, or send us a question first." />
      </Section>
    </div>
  );
}
