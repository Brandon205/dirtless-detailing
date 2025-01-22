"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  const [nav, setNav] = useState("none");
  const [services, setServices] = useState(false);
  const [gallery, setGallery] = useState(false);

  const navBar = useRef(null);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (nav === "block") {
      setServices(true);
      setGallery(true);
    } else {
      setServices(false);
      setGallery(false);
    }
  }, [nav]);

  let handleScroll = () => {
    const pos = window.scrollY;
    if (navBar.current) {
      if (pos > 0 || window.innerWidth < 979) {
        navBar.current.classList.add("normal-nav");
      } else {
        navBar.current.classList.remove("normal-nav");
      }
    }
  };

  // let changeNav = (changeTo) => {
  //   switch (changeTo) {
  //     case "services":
  //       {
  //         setGallery(false);
  //         setServices(true);
  //       }
  //       break;
  //     case "gallery":
  //       {
  //         setServices(false);
  //         setGallery(true);
  //       }
  //       break;
  //     default: {
  //       setServices(false);
  //       setGallery(false);
  //     }
  //   }
  // };

  const navParent = {
    open: { opacity: 1 },
    closed: { opacity: 0 }
  };

  const navChild = {
    open: { x: 0, opacity: 1 },
    closed: { x: "-8%", opacity: 0 }
  };

  const navChildDiff = {
    open: { x: 0, opacity: 1 },
    closed: { x: "8%", opacity: 0 }
  };
  return (
    <header className="App-header">
      <nav id="nav" ref={navBar}>
        <a style={{ display: "flex", justifyContent: "flex-start" }} className="nav-logo" href="/" aria-label="Dirt-Less Detailing Logo">
          <Image src="/assets/images/showcase/homepage-logo.png" alt="Dirt-Less Detailing Logo" width={150} height={108} />
        </a>
        {nav === "none" ? (
          ""
        ) : (
          // <Image
          //   src="/assets/icons/hamburger-menu.svg"
          //   alt="Menu bars"
          //   className="btn-icon text-white cursor-pointer"
          //   width={48}
          //   height={48}
          //   onClick={() => setNav("block")}
          // />
          <Image
            src="/assets/icons/close.svg"
            alt="close"
            className="btn-icon text-white cursor-pointer"
            width={48}
            height={48}
            onClick={() => setNav("none")}
          />
        )}
        <div style={{ display: nav }} className="menu-container">
          <ul className="main-ul">
            <li className="menu-li">
              <Link href="/" className="menu-link">
                Home
              </Link>
            </li>

            <li style={{ position: "relative" }}>
              <div
                className="menu-li"
                onPointerEnter={() => {
                  nav !== "block" ? setServices(true) : null;
                }}
                onPointerLeave={() => {
                  nav !== "block" ? setServices(false) : null;
                }}
              >
                <a href="#" className="menu-link no-click">
                  All Services <img src="../assets/icons/downArrow.png" alt="down caret" className="icon-20" />
                </a>
              </div>
              <ul
                className="sub-ul"
                onPointerEnter={() => {
                  nav !== "block" ? setServices(true) : null;
                }}
                onPointerLeave={() => {
                  nav !== "block" ? setServices(false) : null;
                }}
              >
                <div>
                  {services && (
                    <motion.li
                      animate="open"
                      initial="closed"
                      exit="closed"
                      transition={{ ease: "easeInOut", duration: 0.2 }}
                      variants={navParent}
                      className="nav-li"
                    >
                      <div>
                        <h4 className="sub-menu-header">INTERIOR CLEANING SERVICES</h4>
                        <motion.div variants={navChild} className="sub-menu-div" onClick={() => setNav("none")}>
                          <Link href="/services/interior-swift" className="menu-link smaller-line-height">
                            <img src="../assets/icons/time-span.png" alt="fast clock" className="nav-icon" /> Swift Interior Detail
                          </Link>
                        </motion.div>
                        <motion.div variants={navChildDiff} className="sub-menu-div" onClick={() => setNav("none")}>
                          <Link href="/services/interior" className="menu-link smaller-line-height">
                            <img src="../assets/icons/steering1.png" alt="steering wheel" className="nav-icon" /> Full Interior
                          </Link>
                        </motion.div>
                        <motion.div variants={navChild} className="sub-menu-div" onClick={() => setNav("none")}>
                          <Link href="/services/interior-spill" className="menu-link smaller-line-height">
                            <img src="../assets/icons/steeringLock.png" alt="steering wheel with lock" className="nav-icon" /> Full Interior with Spill Guard
                          </Link>
                        </motion.div>
                      </div>

                      <div>
                        <h4 className="sub-menu-header">EXTERIOR SERVICES</h4>
                        <motion.div variants={navChildDiff} className="sub-menu-div" onClick={() => setNav("none")}>
                          <Link href="/services/exterior" className="menu-link smaller-line-height">
                            <img src="../assets/icons/carWash.png" alt="car with bubbles" className="nav-icon" /> Exterior Decon Wash
                          </Link>
                        </motion.div>
                        <motion.div variants={navChild} className="sub-menu-div" onClick={() => setNav("none")}>
                          <Link href="/services/exterior-seal" className="menu-link smaller-line-height">
                            <img src="../assets/icons/carPolish.png" alt="microfiber" className="nav-icon" /> Seal and Shine
                          </Link>
                        </motion.div>
                        <motion.div variants={navChildDiff} className="sub-menu-div" onClick={() => setNav("none")}>
                          <Link href="/services/exterior-correct" className="menu-link smaller-line-height">
                            <img src="../assets/icons/correctProtect.png" alt="polisher" className="nav-icon" /> Correct and Protect
                          </Link>
                        </motion.div>
                      </div>

                      <div>
                        <h4 className="sub-menu-header">RECREATIONAL DETAILING</h4>
                        <motion.div variants={navChildDiff} className="sub-menu-div" onClick={() => setNav("none")}>
                          <Link href="/services/recreational" className="menu-link smaller-line-height">
                            <img src="../assets/icons/boat.png" alt="yacht icon" className="nav-icon" /> Boats/RV's/Trailers & ORV's
                          </Link>
                        </motion.div>
                      </div>
                    </motion.li>
                  )}
                </div>
              </ul>
            </li>

            <li style={{ position: "relative" }}>
              <div
                className="menu-li"
                onPointerEnter={() => {
                  nav !== "block" ? setGallery(true) : null;
                }}
                onPointerLeave={() => {
                  nav !== "block" ? setGallery(false) : null;
                }}
              >
                <a href="#" className="menu-link no-click">
                  Galleries <img src="../assets/icons/downArrow.png" alt="down caret" className="icon-20" />
                </a>
              </div>
              <ul
                className="sub-ul"
                onPointerEnter={() => {
                  nav !== "block" ? setGallery(true) : null;
                }}
                onPointerLeave={() => {
                  nav !== "block" ? setGallery(false) : null;
                }}
              >
                <div>
                  {gallery && (
                    <motion.li
                      animate="open"
                      initial="closed"
                      exit="closed"
                      transition={{ ease: "easeInOut", duration: 0.3 }}
                      variants={navParent}
                      className="nav-li"
                    >
                      <h4 className="sub-menu-header">GALLERIES</h4>
                      <motion.div variants={navChild} className="sub-menu-div" onClick={() => setNav("none")}>
                        <Link href="/gallery/interior" className="menu-link smaller-line-height">
                          <img src="../assets/icons/steering1.png" alt="car with doors open" className="nav-icon" /> Full Interior Gallery
                        </Link>
                      </motion.div>
                      <motion.div variants={navChildDiff} className="sub-menu-div" onClick={() => setNav("none")}>
                        <Link href="/gallery/exterior" className="menu-link smaller-line-height">
                          <img src="../assets/icons/carWash.png" alt="soap bubbles" className="nav-icon" /> Exterior Wash Gallery
                        </Link>
                      </motion.div>
                      <motion.div variants={navChild} className="sub-menu-div" onClick={() => setNav("none")}>
                        <Link href="/gallery/seal" className="menu-link smaller-line-height">
                          <img src="../assets/icons/carPolish.png" alt="car hood" className="nav-icon" /> Seal & Shine Gallery
                        </Link>
                      </motion.div>
                      <motion.div variants={navChildDiff} className="sub-menu-div" onClick={() => setNav("none")}>
                        <Link href="/gallery/correct" className="menu-link smaller-line-height">
                          <img src="../assets/icons/correctProtect.png" alt="gallery" className="nav-icon" /> Correct & Protect Gallery
                        </Link>
                      </motion.div>
                    </motion.li>
                  )}
                </div>
              </ul>
            </li>

            <li className="menu-li menu-li-screen">
              <Link href="/about" className="menu-link pb-10 lg:p-0" onClick={() => setNav("none")}>
                About Us
              </Link>
            </li>

            <li className="menu-li quote-li">
              <Link href="/contact" className="nav-quote-btn" onClick={() => setNav("none")}>
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
