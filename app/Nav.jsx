"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { CallLink, REAL_PHONE_DISPLAY } from "./components/CallTracking";
import { Button, buttonClasses } from "./components/ui/Button";
import { servicesIn } from "../utils/services";

const navItems = (category) => servicesIn(category).map((s) => ({ name: s.name, href: s.href, bgImage: s.navImage }));

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const servicesRef = useRef(null);
  const galleriesRef = useRef(null);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside both dropdown refs
      if (servicesRef.current && !servicesRef.current.contains(event.target) && galleriesRef.current && !galleriesRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const dropdowns = {
    services: [
      { title: "INTERIOR DETAILING SERVICES", items: navItems("interior") },
      { title: "EXTERIOR SERVICES", items: navItems("exterior") },
      { title: "RECREATIONAL DETAILING", items: navItems("recreational") }
    ],
    gallery: [
      {
        title: "GALLERIES",
        items: [
          {
            name: "Full Interior Gallery",
            href: "/gallery/interior",
            bgImage: "/assets/images/interior/driverNewLexus.jpg"
          },
          {
            name: "Exterior Wash Gallery",
            href: "/gallery/exterior",
            bgImage: "/assets/images/exterior/sideofsilverram.jpg"
          },
          {
            name: "Polish & Coat Gallery",
            href: "/gallery/polish",
            bgImage: "/assets/images/polish/porscheHeadOn.jpg"
          },
          {
            name: "Correct & Coat Gallery",
            href: "/gallery/correct",
            bgImage: "/assets/images/correction/genesis2.jpeg"
          }
        ]
      }
    ]
  };

  return (
    <header className="relative z-50">
      <nav className={`absolute flex w-full flex-row items-center justify-between pl-5 transition-all duration-300 ${mobileMenuOpen ? "bg-zinc-800 shadow-xl" : "bg-zinc-900/90"}`}>
        <div className="max-w-7xl mx-0 lg:mx-auto px-4 sm:px-6 lg:px-8 ml-auto">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 absolute left-0 ml-4 lg:ml-8">
              <Link href="/" className="block relative w-[150px] h-[80px] lg:w-[175px] lg:h-[90px]">
                <Image src="/assets/images/showcase/homepage-logo.png" alt="Dirt-Less Detailing Logo" className="object-cover" sizes="33vw" priority fill />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-2 xl:space-x-4 2xl:space-x-8">
              <Link href="/" className="text-zinc-100 hover:text-amber-300 px-3 py-2 font-bold transition-colors">
                Home
              </Link>

              <div className="relative cursor-pointer" ref={servicesRef}>
                <button
                  className="group text-zinc-100 hover:text-amber-300 px-3 py-2 font-bold inline-flex items-center transition-colors"
                  onClick={() => toggleDropdown("services")}
                >
                  All Services
                  <svg
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180" : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {activeDropdown === "services" && (
                  <div className="absolute left-0 mt-2 w-screen max-w-3xl bg-zinc-800 shadow-lg rounded-lg py-4 z-10 grid grid-cols-3 gap-4 transform transition-all duration-300 origin-top-left">
                    {dropdowns.services.map((section, index) => (
                      <div key={index} className="px-4">
                        <h3 className="text-xs font-semibold text-zinc-300 tracking-wider mb-3">{section.title}</h3>
                        <ul className="space-y-4">
                          {section.items.map((item, idx) => (
                            <li key={idx} className="h-32">
                              <Link
                                href={item.href}
                                className="group relative flex items-center justify-center h-full w-full overflow-hidden rounded-lg transition-all"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  closeMenu();
                                }}
                              >
                                {/* Background Image */}
                                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all z-10"></div>
                                <div className="absolute inset-0">
                                  <Image
                                    src={item.bgImage}
                                    alt={item.name}
                                    fill
                                    sizes="(min-width: 1024px) 215px, 0px"
                                    className="object-cover"
                                    quality={75}
                                    priority
                                  />
                                </div>

                                {/* Text Content */}
                                <div className="z-20 text-center">
                                  <span className="text-white font-medium text-lg tracking-wide">{item.name}</span>
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative p-0" ref={galleriesRef}>
                <button
                  className="group text-zinc-100 hover:text-amber-300 px-3 py-2 font-bold inline-flex items-center transition-colors cursor-pointer"
                  onClick={() => toggleDropdown("gallery")}
                >
                  Galleries
                  <svg
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === "gallery" ? "rotate-180" : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {activeDropdown === "gallery" && (
                  <div className="absolute left-0 mt-2 w-96 bg-zinc-800 shadow-lg rounded-lg py-4 z-10 transform transition-all duration-300 origin-top-left">
                    {dropdowns.gallery.map((section, index) => (
                      <div key={index} className="px-4">
                        <h3 className="text-xs font-semibold text-zinc-300 tracking-wider mb-3">{section.title}</h3>
                        <ul className="grid grid-cols-2 gap-4">
                          {section.items.map((item, idx) => (
                            <li key={idx} className="h-32">
                              <Link
                                href={item.href}
                                className="group relative flex items-center justify-center h-full w-full overflow-hidden rounded-lg transition-all"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  closeMenu();
                                }}
                              >
                                {/* Background Image */}
                                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all z-10"></div>
                                <div className="absolute inset-0">
                                  <Image
                                    src={item.bgImage}
                                    alt={item.name}
                                    fill
                                    sizes="(min-width: 1024px) 215px, 0px"
                                    className="object-cover"
                                    quality={75}
                                    priority
                                  />
                                </div>

                                {/* Text Content */}
                                <div className="z-20 text-center">
                                  <span className="text-white font-medium text-lg tracking-wide">{item.name}</span>
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/about" className="text-zinc-100 hover:text-amber-300 px-3 py-2 font-bold transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-zinc-100 hover:text-amber-300 px-3 py-2 font-bold transition-colors">
                Contact
              </Link>
            </div>
            <div className="hidden lg:flex absolute right-0 mr-4 lg:mr-8 items-center gap-5">
              <CallLink className="hidden min-[1400px]:inline font-bold text-zinc-100 hover:text-amber-300 transition-colors">{REAL_PHONE_DISPLAY}</CallLink>
              <Button href="/booking">Book Online</Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center gap-1 justify-self-end">
              <CallLink
                aria-label={`Call or text ${REAL_PHONE_DISPLAY}`}
                className="inline-flex size-11 items-center justify-center rounded-md text-zinc-200 hover:text-white"
              >
                <Phone aria-hidden="true" className="h-6 w-6" />
              </CallLink>
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-zinc-200 hover:text-white focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden fixed inset-0 bg-zinc-900 z-50 transition-all duration-300 ease-in-out ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
        >
          {/* Close button */}
          <div className="absolute top-6 right-6">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-200 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Fullscreen menu content */}
          <div className="flex flex-col items-center justify-center h-full">
            <div className="w-full max-w-md px-4 py-8 space-y-6">
              <Link href="/" className="block text-center text-2xl font-medium text-white hover:text-amber-300 py-3 transition-colors" onClick={closeMenu}>
                Home
              </Link>

              <div className="py-3 cursor-pointer">
                <button
                  className="w-full flex items-center justify-center text-2xl font-medium text-white hover:text-amber-300 transition-colors cursor-pointer"
                  onClick={() => toggleDropdown("mobileServices")}
                >
                  <span>All Services</span>
                  <svg
                    className={`ml-2 h-5 w-5 transition-transform duration-200 ${activeDropdown === "mobileServices" ? "rotate-180" : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${activeDropdown === "mobileServices" ? "max-h-screen opacity-100 mt-4" : "max-h-0 opacity-0"
                    }`}
                >
                  {dropdowns.services.map((section, index) => (
                    <div key={index} className="mb-6 text-center">
                      <h3 className="text-lg font-semibold text-zinc-100 tracking-wider mb-3 uppercase">{section.title}</h3>
                      <ul className="space-y-2 text-center">
                        {section.items.map((item, idx) => (
                          <li key={idx}>
                            <Link
                              href={item.href}
                              className="flex items-center justify-center px-3 py-2 text-lg text-zinc-400 hover:text-amber-300 transition-colors"
                              onClick={(e) => {
                                e.stopPropagation();
                                closeMenu();
                              }}
                            >
                              <span>{item.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="py-3">
                <button
                  className="w-full flex items-center justify-center text-2xl font-medium text-white hover:text-amber-300 transition-colors"
                  onClick={() => toggleDropdown("mobileGallery")}
                >
                  <span>Galleries</span>
                  <svg
                    className={`ml-2 h-5 w-5 transition-transform duration-200 ${activeDropdown === "mobileGallery" ? "rotate-180" : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${activeDropdown === "mobileGallery" ? "max-h-screen opacity-100 mt-4" : "max-h-0 opacity-0"
                    }`}
                >
                  {dropdowns.gallery.map((section, index) => (
                    <div key={index} className="mb-6">
                      {/* <h3 className="font-semibold text-zinc-100 tracking-wider mb-3 uppercase">{section.title}</h3> */}
                      <ul className="space-y-2">
                        {section.items.map((item, idx) => (
                          <li key={idx}>
                            <Link
                              href={item.href}
                              className="flex items-center justify-center px-3 py-2 text-lg text-zinc-400 hover:text-amber-300 transition-colors"
                              onClick={(e) => {
                                e.stopPropagation();
                                closeMenu();
                              }}
                            >
                              <span>{item.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <Link href="/about" className="block text-center text-2xl font-medium text-white hover:text-amber-300 py-3 transition-colors" onClick={closeMenu}>
                About Us
              </Link>

              <Link href="/contact" className="block text-center text-2xl font-medium text-white hover:text-amber-300 py-3 transition-colors" onClick={closeMenu}>
                Contact
              </Link>

              <Button href="/booking" size="lg" className="mt-6 w-full" onClick={closeMenu}>
                Book Online
              </Button>
              <CallLink className={buttonClasses({ variant: "secondary", size: "lg", className: "w-full" })} onClick={closeMenu}>
                Call or text {REAL_PHONE_DISPLAY}
              </CallLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
