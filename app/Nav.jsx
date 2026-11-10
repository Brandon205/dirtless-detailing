"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { CallLink, REAL_PHONE_DISPLAY } from "./components/CallTracking";
import { Button, buttonClasses } from "./components/ui/Button";
import { containerClass } from "./components/ui/Section";
import { servicesIn } from "../utils/services";

const navItems = (category) => servicesIn(category).map((s) => ({ name: s.name, href: s.href, image: s.navImage }));

const menus = {
  services: [
    { title: "Interior detailing", items: navItems("interior") },
    { title: "Exterior services", items: navItems("exterior") },
    { title: "Recreational", items: navItems("recreational") }
  ],
  galleries: [
    {
      title: "Galleries",
      items: [
        { name: "Full Interior Gallery", href: "/gallery/interior", image: "/assets/images/interior/driverNewLexus.jpg" },
        { name: "Exterior Wash Gallery", href: "/gallery/exterior", image: "/assets/images/exterior/sideofsilverram.jpg" },
        { name: "Polish & Coat Gallery", href: "/gallery/polish", image: "/assets/images/polish/porscheHeadOn.jpg" },
        { name: "Correct & Coat Gallery", href: "/gallery/correct", image: "/assets/images/correction/genesis2.jpeg" }
      ]
    }
  ]
};

const linkClass = "rounded-md px-3 py-2 font-bold text-zinc-100 transition-colors hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";
// Menu section labels are <p>, not headings, so no heading renders before the page's <h1>.
const menuLabel = "mb-3 text-eyebrow font-bold uppercase text-muted";

function PhotoLink({ item, onClick }) {
  return (
    <Link href={item.href} onClick={onClick} className="group relative flex h-28 items-center justify-center overflow-hidden rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
      <Image src={item.image} alt="" fill sizes="(min-width: 1024px) 240px, 0px" className="object-cover" quality={65} />
      <span className="absolute inset-0 bg-black/55 transition-colors group-hover:bg-black/35" />
      <span className="relative px-2 text-center font-semibold text-white">{item.name}</span>
    </Link>
  );
}

function Dropdown({ id, label, open, onToggle, panelClass, children }) {
  return (
    <div className="relative">
      <button type="button" className={`${linkClass} inline-flex items-center gap-1`} aria-expanded={open} aria-controls={`menu-${id}`} onClick={onToggle}>
        {label}
        <ChevronDown aria-hidden="true" className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div id={`menu-${id}`} className={`absolute left-0 top-full z-10 mt-3 rounded-xl border border-line bg-surface p-5 shadow-2xl ${panelClass}`}>
          {children}
        </div>
      )}
    </div>
  );
}

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(null);
  const desktopRef = useRef(null);

  // Close the dropdowns on an outside click or Escape.
  useEffect(() => {
    const onClick = (e) => desktopRef.current && !desktopRef.current.contains(e.target) && setOpen(null);
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const toggle = (name) => setOpen(open === name ? null : name);
  const close = () => {
    setMobileOpen(false);
    setOpen(null);
  };

  return (
    <header className="relative z-50">
      <nav className="absolute inset-x-0 top-0 bg-zinc-900/90" aria-label="Main">
        <div className={`${containerClass} flex h-20 items-center justify-between gap-4`}>
          <Link href="/" className="relative block h-[70px] w-[140px] shrink-0 lg:h-[80px] lg:w-[160px]" onClick={close}>
            <Image src="/assets/images/showcase/homepage-logo.png" alt="Dirt-Less Detailing home" className="object-cover" sizes="160px" priority fill />
          </Link>

          {/* Desktop */}
          <div ref={desktopRef} className="hidden items-center gap-1 lg:flex">
            <Link href="/" className={linkClass}>
              Home
            </Link>
            <Dropdown id="services" label="Services" open={open === "services"} onToggle={() => toggle("services")} panelClass="grid w-[44rem] grid-cols-3 gap-5">
              {menus.services.map((section) => (
                <div key={section.title}>
                  <p className={menuLabel}>{section.title}</p>
                  <ul className="space-y-3">
                    {section.items.map((item) => (
                      <li key={item.href}>
                        <PhotoLink item={item} onClick={close} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </Dropdown>
            <Dropdown id="galleries" label="Galleries" open={open === "galleries"} onToggle={() => toggle("galleries")} panelClass="w-[30rem]">
              {menus.galleries.map((section) => (
                <div key={section.title}>
                  <p className={menuLabel}>{section.title}</p>
                  <ul className="grid grid-cols-2 gap-3">
                    {section.items.map((item) => (
                      <li key={item.href}>
                        <PhotoLink item={item} onClick={close} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </Dropdown>
            <Link href="/about" className={linkClass}>
              About
            </Link>
            <Link href="/contact" className={linkClass}>
              Contact
            </Link>
          </div>

          <div className="hidden items-center gap-5 lg:flex">
            <CallLink className="hidden font-bold text-zinc-100 transition-colors hover:text-accent-hover xl:inline">{REAL_PHONE_DISPLAY}</CallLink>
            <Button href="/booking">Book Online</Button>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-1 lg:hidden">
            <CallLink aria-label={`Call or text ${REAL_PHONE_DISPLAY}`} className="inline-flex size-11 items-center justify-center rounded-md text-zinc-100 hover:text-white">
              <Phone aria-hidden="true" className="h-6 w-6" />
            </CallLink>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="inline-flex size-11 items-center justify-center rounded-md text-zinc-100 hover:text-white"
              onClick={() => setMobileOpen(true)}
            >
              <Menu aria-hidden="true" className="h-7 w-7" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`fixed inset-0 z-50 overflow-y-auto bg-page transition-opacity duration-300 lg:hidden ${mobileOpen ? "opacity-100" : "pointer-events-none invisible opacity-0"}`}
        >
          <div className="flex h-20 items-center justify-end px-6">
            <button type="button" aria-label="Close menu" className="inline-flex size-11 items-center justify-center rounded-md text-zinc-100 hover:text-white" onClick={close}>
              <X aria-hidden="true" className="h-8 w-8" />
            </button>
          </div>
          <div className="mx-auto flex max-w-md flex-col gap-2 px-6 pb-12 text-center">
            <Link href="/" className="py-3 text-2xl font-semibold text-white hover:text-accent-hover" onClick={close}>
              Home
            </Link>
            {[
              ["mobileServices", "Services", menus.services],
              ["mobileGalleries", "Galleries", menus.galleries]
            ].map(([key, label, sections]) => (
              <div key={key} className="py-1">
                <button
                  type="button"
                  aria-expanded={open === key}
                  className="inline-flex w-full items-center justify-center gap-2 py-2 text-2xl font-semibold text-white hover:text-accent-hover"
                  onClick={() => toggle(key)}
                >
                  {label}
                  <ChevronDown aria-hidden="true" className={`h-5 w-5 transition-transform duration-200 ${open === key ? "rotate-180" : ""}`} />
                </button>
                {open === key && (
                  <div className="mt-2 space-y-4 rounded-xl border border-line bg-surface p-4">
                    {sections.map((section) => (
                      <div key={section.title}>
                        <p className={menuLabel}>{section.title}</p>
                        <ul className="space-y-1">
                          {section.items.map((item) => (
                            <li key={item.href}>
                              <Link href={item.href} className="block py-1.5 text-lg text-zinc-300 hover:text-accent-hover" onClick={close}>
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/about" className="py-3 text-2xl font-semibold text-white hover:text-accent-hover" onClick={close}>
              About
            </Link>
            <Link href="/contact" className="py-3 text-2xl font-semibold text-white hover:text-accent-hover" onClick={close}>
              Contact
            </Link>
            <Button href="/booking" size="lg" className="mt-6 w-full" onClick={close}>
              Book Online
            </Button>
            <CallLink className={buttonClasses({ variant: "secondary", size: "lg", className: "w-full" })} onClick={close}>
              Call or text {REAL_PHONE_DISPLAY}
            </CallLink>
          </div>
        </div>
      </nav>
    </header>
  );
}
