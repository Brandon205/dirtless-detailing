import Image from "next/image";
import Link from "next/link";
import { Clock, Gift, Mail, MapPin, Smartphone, Truck } from "lucide-react";
import BaseSchema from "../jsonSchemas/BaseSchema";
import { CallLink, REAL_PHONE_DISPLAY } from "../components/CallTracking";
import { Button } from "../components/ui/Button";
import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";

const MAPS_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS;
const MAPS_LINK = "https://maps.app.goo.gl/bhPDhjUN4jsSegu48";
const linkClass = "font-semibold text-ink hover:text-accent-hover hover:underline";

function Row({ icon: Icon, label, children }) {
  return (
    <li className="flex gap-4 p-5">
      <Icon aria-hidden="true" className="mt-0.5 size-6 shrink-0 text-accent" />
      <div>
        <p className="text-sm text-muted">{label}</p>
        <div className="mt-0.5 text-lg">{children}</div>
      </div>
    </li>
  );
}

export default function Contact() {
  return (
    <div className="bg-page text-ink">
      <BaseSchema
        serviceImage="/assets/images/interior/driver16.jpg"
        url="https://www.dirtlessdetailing.com/contact"
        makesOffer={{
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Auto Detailing",
            "description":
              "Contact us here! Let us know any additional information we may need to know before your detail. Feel free to reach out with any questions!",
            "areaServed": "Buckley, Bonney Lake, and surrounding areas.",
            "serviceType": "Auto Detailing"
          }
        }}
      />

      <Section className="border-t-0 pt-32 md:pt-40">
        <SectionHeader
          as="h1"
          eyebrow="Contact"
          title="Contact & book your auto detail"
          lead="See pricing and book online 24/7, or send us a question first. We usually reply the same day."
          className="mb-8"
        />
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/booking" size="lg">
            Book Online
          </Button>
          <Button href="/inquiry" variant="secondary" size="lg">
            Send an Inquiry
          </Button>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <ul className="divide-y divide-line self-start rounded-2xl border border-line bg-surface">
            <Row icon={Smartphone} label="Call or text">
              <CallLink className={linkClass}>{REAL_PHONE_DISPLAY}</CallLink>
            </Row>
            <Row icon={Mail} label="Email">
              <a href="mailto:brenden@dirtlessdetailing.com?subject=Schedule a Detail" className={linkClass}>
                brenden@
                <wbr />
                dirtlessdetailing.com
              </a>
            </Row>
            <Row icon={Clock} label="Hours">
              Monday - Sunday: 8 AM - 7 PM
            </Row>
            <Row icon={MapPin} label="Shop">
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className={linkClass}>
                Buckley Business Park, 28120 WA-410, Unit C6
              </a>
            </Row>
            <Row icon={Truck} label="Mobile service">
              We come to you, from Kent to Graham.
            </Row>
            <Row icon={Gift} label="Gift cards">
              <Link href="/gift-cards" className={linkClass}>
                Buy a gift card
              </Link>{" "}
              <span className="text-muted">or pick one up in person</span>
            </Row>
          </ul>

          <div className="relative min-h-[360px] overflow-hidden rounded-2xl border border-line bg-surface">
            {MAPS_KEY ? (
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJxxfUWqz7kFQRotRs8MwWDRE&key=${MAPS_KEY}`}
                title="Map to the Dirt-Less Detailing shop in Buckley"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
              />
            ) : (
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="group absolute inset-0">
                <Image
                  src="/assets/images/showcase/homepage-main.webp"
                  alt="The Dirt-Less Detailing team in front of a classic Chevy truck"
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover"
                />
                <span className="absolute bottom-4 left-4 rounded-lg bg-zinc-950/80 px-4 py-2 font-semibold group-hover:text-accent-hover">Open in Google Maps →</span>
              </a>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
}
