"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
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
      {
        title: "INTERIOR CLEANING SERVICES",
        items: [
          {
            name: "Swift Interior Detail",
            href: "/services/interior-swift",
            icon: "/assets/icons/time-span.png",
            bgImage: "/assets/images/interior/driver12.jpg"
          },
          {
            name: "Full Interior",
            href: "/services/interior",
            icon: "/assets/icons/steering1.png",
            bgImage: "/assets/images/interior/driver16.jpg"
          },
          {
            name: "Full Interior with Spill Guard",
            href: "/services/interior-spill",
            icon: "/assets/icons/steeringLock.png",
            bgImage: "/assets/images/interior/accO.jpg"
          }
        ]
      },
      {
        title: "EXTERIOR SERVICES",
        items: [
          {
            name: "Exterior Decon Wash",
            href: "/services/exterior",
            icon: "/assets/icons/carWash.png",
            bgImage: "/assets/images/exterior/subaruWashed.jpeg"
          },
          {
            name: "Seal and Shine",
            href: "/services/exterior-seal",
            icon: "/assets/icons/carPolish.png",
            bgImage: "/assets/images/correction/teslaclean.jpg"
          },
          {
            name: "Correct and Protect",
            href: "/services/exterior-correct",
            icon: "/assets/icons/correctProtect.png",
            bgImage: "/assets/images/correction/genesis3.jpeg"
          }
        ]
      },
      {
        title: "RECREATIONAL DETAILING",
        items: [
          {
            name: "Boats/RV's/Trailers & ORV's",
            href: "/services/recreational",
            icon: "/assets/icons/boat.png",
            bgImage: "/assets/images/showcase/RVWash.jpg"
          }
        ]
      }
    ],
    gallery: [
      {
        title: "GALLERIES",
        items: [
          {
            name: "Full Interior Gallery",
            href: "/gallery/interior",
            icon: "/assets/icons/steering1.png",
            bgImage: "/assets/images/interior/driverNewLexus.jpg"
          },
          {
            name: "Exterior Wash Gallery",
            href: "/gallery/exterior",
            icon: "/assets/icons/carWash.png",
            bgImage: "/assets/images/exterior/sideofsilverram.jpg"
          },
          {
            name: "Seal & Shine Gallery",
            href: "/gallery/seal",
            icon: "/assets/icons/carPolish.png",
            bgImage: "/assets/images/sealshine/porscheHeadOn.jpg"
          },
          {
            name: "Correct & Protect Gallery",
            href: "/gallery/correct",
            icon: "/assets/icons/correctProtect.png",
            bgImage: "/assets/images/correction/genesis2.jpeg"
          }
        ]
      }
    ]
  };

  return (
    <header className="relative z-50">
      <nav className={`w-full fixed transition-all duration-300 ${isScrolled || mobileMenuOpen ? "bg-zinc-800 shadow-md" : "bg-zinc-900/90"}`}>
        <div className="w-screen mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 absolute left-0 ml-4">
              <Link href="/" className="block relative w-[150px] h-[80px] lg:w-[175px] lg:h-[90px]">
                <Image src="/assets/images/showcase/homepage-logo.png" alt="Dirt-Less Detailing Logo" className="object-cover" sizes="33vw" priority fill />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              <Link href="/" className="text-gray-100 hover:text-amber-300 px-3 py-2 font-medium transition-colors">
                Home
              </Link>

              <div className="relative" ref={dropdownRef}>
                <button
                  className="group text-gray-100 hover:text-amber-300 px-3 py-2 font-medium inline-flex items-center transition-colors"
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
                        <h3 className="text-xs font-semibold text-gray-300 tracking-wider mb-3">{section.title}</h3>
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
                                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${item.bgImage})` }}></div>

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

              <div className="relative" ref={dropdownRef}>
                <button
                  className="group text-gray-100 hover:text-amber-300 px-3 py-2 font-medium inline-flex items-center transition-colors"
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
                        <h3 className="text-xs font-semibold text-gray-300 tracking-wider mb-3">{section.title}</h3>
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
                                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${item.bgImage})` }}></div>

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

              <Link href="/about" className="text-gray-100 hover:text-amber-300 px-3 py-2 font-medium transition-colors">
                About Us
              </Link>

              <Link
                href="/contact"
                className="ml-4 inline-flex items-center justify-center px-6 py-2.5 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-amber-700 hover:bg-amber-600 transition-colors"
              >
                CONTACT US
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-zinc-800 shadow-lg">
            <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-100 hover:bg-zinc-700 rounded-md" onClick={closeMenu}>
              Home
            </Link>

            <div>
              <button
                className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-100 hover:bg-zinc-700 rounded-md"
                onClick={() => toggleDropdown("mobileServices")}
              >
                <span>All Services</span>
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === "mobileServices" ? "rotate-180" : ""}`}
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

              {activeDropdown === "mobileServices" && (
                <div className="pl-4 pr-2 py-2 space-y-3">
                  {dropdowns.services.map((section, index) => (
                    <div key={index}>
                      <h3 className="text-xs font-semibold text-gray-300 tracking-wider mb-1 pl-3">{section.title}</h3>
                      <ul className="space-y-1">
                        {section.items.map((item, idx) => (
                          <li key={idx}>
                            <Link
                              href={item.href}
                              className="flex items-center px-3 py-2 text-sm text-gray-100 hover:bg-zinc-700 rounded-md"
                              onClick={(e) => {
                                e.stopPropagation();
                                closeMenu();
                              }}
                            >
                              <Image src={item.icon} alt="" width={16} height={16} className="mr-2 flex-shrink-0" />
                              <span>{item.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-100 hover:bg-zinc-700 rounded-md"
                onClick={() => toggleDropdown("mobileGallery")}
              >
                <span>Galleries</span>
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === "mobileGallery" ? "rotate-180" : ""}`}
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

              {activeDropdown === "mobileGallery" && (
                <div className="pl-4 pr-2 py-2 space-y-3">
                  {dropdowns.gallery.map((section, index) => (
                    <div key={index}>
                      <h3 className="text-xs font-semibold text-gray-300 tracking-wider mb-1 pl-3">{section.title}</h3>
                      <ul className="space-y-1">
                        {section.items.map((item, idx) => (
                          <li key={idx}>
                            <Link
                              href={item.href}
                              className="flex items-center px-3 py-2 text-sm text-gray-100 hover:bg-zinc-700 rounded-md"
                              onClick={(e) => {
                                e.stopPropagation();
                                closeMenu();
                              }}
                            >
                              <Image src={item.icon} alt="" width={16} height={16} className="mr-2 flex-shrink-0" />
                              <span>{item.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-100 hover:bg-zinc-700 rounded-md" onClick={closeMenu}>
              About Us
            </Link>

            <Link
              href="/contact"
              className="block w-full text-center px-4 py-2.5 font-medium text-white bg-amber-700 hover:bg-amber-600 rounded-md transition-colors"
              onClick={closeMenu}
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
