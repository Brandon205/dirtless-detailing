import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, ChevronRight, Gift, Globe, MessageCircleQuestion, ShieldCheck, ShoppingCart, Tv } from "lucide-react";
import { VideoEmbed } from "../components/VideoEmbed";

// A link-in-bio page for social profiles: one column of big tap targets.

function LinkRow({ href, icon: Icon, iconSrc, title, subtext, featured = false }) {
  const external = href.startsWith("http");
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={
        featured
          ? "group flex items-center gap-4 rounded-2xl bg-accent p-4 text-on-accent transition-colors hover:bg-accent-hover"
          : "group flex items-center gap-4 rounded-2xl border border-line bg-surface p-4 text-ink transition-colors hover:border-line-strong hover:bg-line"
      }
    >
      <span className={`flex size-11 shrink-0 items-center justify-center rounded-full ${featured ? "bg-black/10" : "bg-page"}`}>
        {iconSrc ? <Image src={iconSrc} alt="" width={22} height={22} /> : <Icon aria-hidden="true" className="size-[22px]" />}
      </span>
      <span className="flex flex-1 flex-col">
        <span className="text-lg font-bold leading-tight">{title}</span>
        {subtext && <span className={`text-sm ${featured ? "text-zinc-800" : "text-muted"}`}>{subtext}</span>}
      </span>
      <ChevronRight aria-hidden="true" className="size-5 shrink-0 opacity-60 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-page px-6 pb-16 pt-28 text-ink">
      <div className="mx-auto flex w-full max-w-md flex-col gap-3">
        <div className="mx-auto mb-2 flex size-24 items-center justify-center overflow-hidden rounded-full border-4 border-line bg-surface">
          <Image src="/assets/images/showcase/homepage-logo.png" alt="Dirt-Less Detailing" width={124} height={124} className="h-full w-full object-contain" />
        </div>
        <h1 className="mb-4 text-balance text-center text-2xl font-extrabold">Links to all things Dirt-Less Detailing</h1>

        <LinkRow href="/booking" icon={CalendarCheck} title="Book Online" subtext="All services and add-ons, open times and prices" featured />
        <LinkRow href="/inquiry" icon={MessageCircleQuestion} title="Send an Inquiry" subtext="Quotes, in-shop services, anything else" />
        <LinkRow href="/gift-cards" icon={Gift} title="Buy a Gift Card" subtext="Gift cards for any of our services" />
        <LinkRow href="/products" icon={ShoppingCart} title="Shop Detailing Products" subtext="Our recommended supplies" />
        <LinkRow href="/products?category=Ceramic Maintenance" icon={ShieldCheck} title="Ceramic Maintenance Guide" subtext="How to care for your coating" />
        <LinkRow href="/products?category=As Seen On Our Channel" icon={Tv} title="Products Showcased on YouTube" subtext="As seen in our videos" />

        <p className="mt-6 flex items-center gap-4 text-eyebrow font-bold uppercase text-muted">
          <span className="h-px flex-1 bg-line" />
          Socials
          <span className="h-px flex-1 bg-line" />
        </p>
        <LinkRow href="https://www.youtube.com/channel/UCsoqP5s4hwkQd_Sd-TVv-jg" iconSrc="/assets/icons/youtube.svg" title="YouTube" />
        <LinkRow href="https://www.instagram.com/dirt_less_detailing/" iconSrc="/assets/icons/instagram.svg" title="Instagram" />
        <LinkRow href="https://www.facebook.com/DirtLessDetailing/" iconSrc="/assets/icons/facebook.svg" title="Facebook" />
        <LinkRow href="https://www.tiktok.com/@brendenflower" iconSrc="/assets/icons/tiktok.svg" title="TikTok" />

        <div className="mt-8">
          <p className="text-center text-eyebrow font-bold uppercase text-accent">Our latest video</p>
          <h2 className="mb-4 mt-2 text-balance text-center text-xl font-bold">From Filthy to Factory Clean: Extreme Chevy Truck Detail</h2>
          <VideoEmbed id="aeLztM3ng54" title="From Filthy to Factory Clean: Extreme Chevy Truck Detail" />
        </div>

        <Link href="/" className="mx-auto mt-8 flex items-center gap-2 text-sm text-muted hover:text-ink">
          <Globe aria-hidden="true" className="size-4" /> Visit our main website
        </Link>
      </div>
    </div>
  );
}
