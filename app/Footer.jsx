import Image from "next/image";
import Link from "next/link";
import { CallLink, REAL_PHONE_DISPLAY } from "./components/CallTracking";
import { containerClass } from "./components/ui/Section";
import { servicesIn } from "../utils/services";

// Small uppercase labels, not headings, so the footer doesn't add to the page outline.
const label = "mb-4 text-xs font-bold uppercase tracking-[0.16em] text-muted";
const link = "text-zinc-400 transition-colors hover:text-ink";

const socials = [
  ["Instagram", "https://www.instagram.com/dirt_less_detailing/", "/assets/icons/instagram.svg"],
  ["Facebook", "https://www.facebook.com/DirtLessDetailing/", "/assets/icons/facebook.svg"],
  ["YouTube", "https://www.youtube.com/channel/UCsoqP5s4hwkQd_Sd-TVv-jg", "/assets/icons/youtube.svg"],
  ["TikTok", "https://www.tiktok.com/@brendenflower", "/assets/icons/tiktok.svg"]
];

function ServiceList({ category }) {
  return (
    <ul className="space-y-3">
      {servicesIn(category).map((s) => (
        <li key={s.slug}>
          <Link href={s.href} className={link}>
            {s.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-line bg-page text-ink">
      <div className={`${containerClass} grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]`}>
        <div>
          <Link href="/" className="inline-block">
            <Image src="/assets/images/showcase/splatTextLeft.png" alt="Dirt-Less Detailing home" width={160} height={160} />
          </Link>
          <p className="mt-4 max-w-xs text-zinc-400">Auto detailing and ceramic coating in Buckley, WA, with mobile service from Kent to Graham.</p>
          <div className="mt-6 flex items-center gap-6">
            <a href="https://iglcoatingsusa.com/" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/images/showcase/homepage-kenzo-nobkg.png" alt="IGL Kenzo Coatings certified" width={72} height={69} className="h-auto w-[72px]" />
            </a>
            <a
              href="https://www.bbb.org/us/wa/bonney-lake/profile/auto-detailing/dirt-less-detailing-1296-1000135733/#sealclick"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/assets/images/showcase/homepage-bbb-large.png" alt="Better Business Bureau A+ rating" width={130} height={65} className="h-auto w-[130px]" />
            </a>
          </div>
        </div>

        <div>
          <p className={label}>Interior</p>
          <ServiceList category="interior" />
          <p className={`${label} mt-8`}>Recreational</p>
          <ServiceList category="recreational" />
        </div>

        <div>
          <p className={label}>Exterior</p>
          <ServiceList category="exterior" />
        </div>

        <div>
          <p className={label}>Contact</p>
          <ul className="space-y-3 text-zinc-400">
            <li>
              <CallLink className={link}>{REAL_PHONE_DISPLAY}</CallLink>
              <span className="text-muted"> · call or text</span>
            </li>
            <li>
              <a href="mailto:brenden@dirtlessdetailing.com?subject=Schedule a Detail with Dirt-Less Detailing" className={`${link} break-all`}>
                brenden@dirtlessdetailing.com
              </a>
            </li>
            <li>
              <a href="https://maps.app.goo.gl/bhPDhjUN4jsSegu48" target="_blank" rel="noopener noreferrer" className={link}>
                Buckley Business Park, 28120 WA-410, Unit C6
              </a>
            </li>
            <li>Monday - Sunday: 8 AM - 7 PM</li>
          </ul>
          <div className="mt-6 flex gap-3">
            {socials.map(([name, href, icon]) => (
              <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name} className="rounded-md transition-opacity hover:opacity-80">
                <Image src={icon} alt="" width={36} height={36} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className={`${containerClass} flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-6 text-sm text-muted`}>
          <p>© {new Date().getFullYear()} Dirt-Less Detailing. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="/privacy" className={link}>
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/products" className={link}>
                Products
              </Link>
            </li>
            <li>
              <Link href="/links" className={link}>
                Links
              </Link>
            </li>
            <li>
              <a href="https://www.brandonblack.dev" target="_blank" rel="noopener noreferrer" className={link}>
                Site by Brandon
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
