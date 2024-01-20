"use client";
import { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
import Link from "next/link";

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
    console.log("ran, ", pos);
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

  // const navParent = {
  //   open: { opacity: 1 },
  //   closed: { opacity: 0 },
  // };

  // const navChild = {
  //   open: { x: 0, opacity: 1 },
  //   closed: { x: "-8%", opacity: 0 },
  // };

  // const navChildDiff = {
  //   open: { x: 0, opacity: 1 },
  //   closed: { x: "8%", opacity: 0 },
  // };
  return (
    <header className="App-header">
      <nav id="nav" ref={navBar}>
        <a
          style={{ display: "flex", justifyContent: "flex-start" }}
          className="nav-logo"
          href="/"
          aria-label="Dirt-Less Detailing Logo"
        >
          <div
            className="header-cert logo-screen"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0a945e76-f4c0-4e29-ef16-463490d0db00/public')`,
              height: 105 + "px",
            }}
          ></div>
        </a>
        {nav === "none" ? (
          <img
            src="../assets/icons/menuBars.png"
            alt="menu bars"
            className="menu-bars"
            onClick={() => setNav("block")}
          />
        ) : (
          <img src="../assets/icons/close.png" alt="close" className="menu-bars" onClick={() => setNav("none")} />
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
                  {/* {services && (
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
                            <img src="../assets/icons/time-span.png" alt="fast clock" className="nav-icon" /> Swift
                            Interior Detail
                          </Link>
                        </motion.div>
                        <motion.div variants={navChildDiff} className="sub-menu-div" onClick={() => setNav("none")}>
                          <Link href="/services/interior" className="menu-link smaller-line-height">
                            <img src="../assets/icons/steering1.png" alt="steering wheel" className="nav-icon" /> Full
                            Interior
                          </Link>
                        </motion.div>
                        <motion.div variants={navChild} className="sub-menu-div" onClick={() => setNav("none")}>
                          <Link href="/services/interior-spill" className="menu-link smaller-line-height">
                            <img
                              src="../assets/icons/steeringLock.png"
                              alt="steering wheel with lock"
                              className="nav-icon"
                            />{" "}
                            Full Interior with Spill Guard
                          </Link>
                        </motion.div>
                      </div>

                      <div>
                        <h4 className="sub-menu-header">EXTERIOR SERVICES</h4>
                        <motion.div variants={navChildDiff} className="sub-menu-div" onClick={() => setNav("none")}>
                          <Link href="/services/exterior" className="menu-link smaller-line-height">
                            <img src="../assets/icons/carWash.png" alt="car with bubbles" className="nav-icon" />{" "}
                            Exterior Wash
                          </Link>
                        </motion.div>
                        <motion.div variants={navChild} className="sub-menu-div" onClick={() => setNav("none")}>
                          <Link href="/services/exterior-seal" className="menu-link smaller-line-height">
                            <img src="../assets/icons/carPolish.png" alt="microfiber" className="nav-icon" /> Exterior
                            Seal and Shine
                          </Link>
                        </motion.div>
                        <motion.div variants={navChildDiff} className="sub-menu-div" onClick={() => setNav("none")}>
                          <Link href="/services/exterior-correct" className="menu-link smaller-line-height">
                            <img src="../assets/icons/correctProtect.png" alt="polisher" className="nav-icon" />{" "}
                            Exterior Correct and Protect
                          </Link>
                        </motion.div>
                      </div>
                    </motion.li>
                  )} */}
                  {services && (
                    <li className="nav-li">
                      <div>
                        <h4 className="sub-menu-header">INTERIOR CLEANING SERVICES</h4>
                        <div className="sub-menu-div" onClick={() => setNav("none")}>
                          <Link href="/services/interior-swift" className="menu-link smaller-line-height">
                            <img src="../assets/icons/time-span.png" alt="fast clock" className="nav-icon" /> Swift
                            Interior Detail
                          </Link>
                        </div>
                        <div className="sub-menu-div" onClick={() => setNav("none")}>
                          <Link href="/services/interior" className="menu-link smaller-line-height">
                            <img src="../assets/icons/steering1.png" alt="steering wheel" className="nav-icon" /> Full
                            Interior
                          </Link>
                        </div>
                        <div className="sub-menu-div" onClick={() => setNav("none")}>
                          <Link href="/services/interior-spill" className="menu-link smaller-line-height">
                            <img
                              src="../assets/icons/steeringLock.png"
                              alt="steering wheel with lock"
                              className="nav-icon"
                            />{" "}
                            Full Interior with Spill Guard
                          </Link>
                        </div>
                      </div>

                      <div>
                        <h4 className="sub-menu-header">EXTERIOR SERVICES</h4>
                        <div className="sub-menu-div" onClick={() => setNav("none")}>
                          <Link href="/services/exterior" className="menu-link smaller-line-height">
                            <img src="../assets/icons/carWash.png" alt="car with bubbles" className="nav-icon" />{" "}
                            Exterior Wash
                          </Link>
                        </div>
                        <div className="sub-menu-div" onClick={() => setNav("none")}>
                          <Link href="/services/exterior-seal" className="menu-link smaller-line-height">
                            <img src="../assets/icons/carPolish.png" alt="microfiber" className="nav-icon" /> Exterior
                            Seal and Shine
                          </Link>
                        </div>
                        <div className="sub-menu-div" onClick={() => setNav("none")}>
                          <Link href="/services/exterior-correct" className="menu-link smaller-line-height">
                            <img src="../assets/icons/correctProtect.png" alt="polisher" className="nav-icon" />{" "}
                            Exterior Correct and Protect
                          </Link>
                        </div>
                      </div>
                    </li>
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
                  {/* {gallery && (
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
                          <img src="../assets/icons/steering1.png" alt="car with doors open" className="nav-icon" />{" "}
                          Full Interior Gallery
                        </Link>
                      </motion.div>
                      <motion.div variants={navChildDiff} className="sub-menu-div" onClick={() => setNav("none")}>
                        <Link href="/gallery/exterior" className="menu-link smaller-line-height">
                          <img src="../assets/icons/carWash.png" alt="soap bubbles" className="nav-icon" /> Exterior
                          Wash Gallery
                        </Link>
                      </motion.div>
                      <motion.div variants={navChild} className="sub-menu-div" onClick={() => setNav("none")}>
                        <Link href="/gallery/seal" className="menu-link smaller-line-height">
                          <img src="../assets/icons/carPolish.png" alt="car hood" className="nav-icon" /> Seal & Shine
                          Gallery
                        </Link>
                      </motion.div>
                      <motion.div variants={navChildDiff} className="sub-menu-div" onClick={() => setNav("none")}>
                        <Link href="/gallery/correct" className="menu-link smaller-line-height">
                          <img src="../assets/icons/correctProtect.png" alt="gallery" className="nav-icon" /> Correct &
                          Protect Gallery
                        </Link>
                      </motion.div>
                    </motion.li>
                  )} */}
                  {gallery && (
                    <li className="nav-li">
                      <h4 className="sub-menu-header">GALLERIES</h4>
                      <div className="sub-menu-div" onClick={() => setNav("none")}>
                        <Link href="/gallery/interior" className="menu-link smaller-line-height">
                          <img src="../assets/icons/steering1.png" alt="car with doors open" className="nav-icon" />{" "}
                          Full Interior Gallery
                        </Link>
                      </div>
                      <div className="sub-menu-div" onClick={() => setNav("none")}>
                        <Link href="/gallery/exterior" className="menu-link smaller-line-height">
                          <img src="../assets/icons/carWash.png" alt="soap bubbles" className="nav-icon" /> Exterior
                          Wash Gallery
                        </Link>
                      </div>
                      <div className="sub-menu-div" onClick={() => setNav("none")}>
                        <Link href="/gallery/seal" className="menu-link smaller-line-height">
                          <img src="../assets/icons/carPolish.png" alt="car hood" className="nav-icon" /> Seal & Shine
                          Gallery
                        </Link>
                      </div>
                      <div className="sub-menu-div" onClick={() => setNav("none")}>
                        <Link href="/gallery/correct" className="menu-link smaller-line-height">
                          <img src="../assets/icons/correctProtect.png" alt="gallery" className="nav-icon" /> Correct &
                          Protect Gallery
                        </Link>
                      </div>
                    </li>
                  )}
                </div>
              </ul>
            </li>

            <li className="menu-li menu-li-screen">
              <Link href="/about" className="menu-link" onClick={() => setNav("none")}>
                About / FAQ
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
