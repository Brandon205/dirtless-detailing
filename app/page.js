"use client";
import Benefits from "./Benefits";
import { topBtnVariant } from "../utils/animationVariations";
import { motion } from "framer-motion";
import { Titillium_Web } from "next/font/google";
import { sendGTMEvent } from "@next/third-parties/google";

const titillium = Titillium_Web({ weight: ["400", "600"], subsets: ["latin"] });

const jsonld = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Dirt-Less Detailing",
  image: "https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0d30edc6-6afe-4162-1f9e-4b57f8e85300/cover",
  url: "https://www.dirtlessdetailing.com",
  telephone: "2532529758",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "9305 205th Ave E",
    addressLocality: "Bonney Lake",
    addressRegion: "WA",
    postalCode: "98391",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.1728314,
    longitude: -122.1567854,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "07:00",
    closes: "19:00",
  },
  sameAs: ["https://www.instagram.com/dirt_less_detailing", "https://www.youtube.com/channel/UCsoqP5s4hwkQd_Sd-TVv-jg"],
};

export default function Home() {
  return (
    <div className="App">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld, null, 2) }} />
      <header className="home-header">
        <div
          className="maincover"
          style={{
            backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0d30edc6-6afe-4162-1f9e-4b57f8e85300/cover')`,
          }}
        ></div>
        <div className="landing-div">
          <h1 className={`${titillium.className} main-title`}>
            Bonney Lake & Pierce County's
            <br />
            Auto Detailing Specialists
          </h1>
          {/* <p className="special-deal-p">
            <span className="special-deal-colored">VALENTINES DAY SPECIAL</span>: Book through Urable below and use code
            <span className="special-deal-colored bold"> VALENTINE10</span> to save 10% on any In Shop Detail!
          </p> */}
          <p className="main-desc">
            Anything from a simple interior detail, to the most detail oriented paint correction ceramic coating jobs,
            you can trust Dirt-Less Detailing to get the job done right.
          </p>

          <div className="header-link-container">
            <motion.a
              href="/contact"
              className="top-quote-btn"
              variants={topBtnVariant}
              whileHover="hover"
              transition={{ duration: 0.25 }}
            >
              <img src="../assets/icons/clipboard.png" alt="clipboard" className="btn-icon" /> Contact Us
            </motion.a>
            {/* <motion.a
              href="tel:2532529758"
              className="top-quote-btn btn-secondary"
              variants={topBtnVariant}
              whileHover="hover"
              transition={{ duration: 0.25 }}
            >
              <img src="../assets/icons/phoneMessage.png" alt="call or message" className="btn-icon" /> (253) 252-9758
            </motion.a> */}
            <motion.a
              href="https://app.urable.com/virtual-shop/pMe0iWXWCBfTL47sDvjd"
              className="top-quote-btn btn-secondary btn-urable"
              variants={topBtnVariant}
              whileHover="hover"
              transition={{ duration: 0.25 }}
              rel="noopener"
              target="_blank"
              onClick={() => sendGTMEvent({ event: "urableClick", value: "1" })}
            >
              <img src="../assets/icons/urable.png" alt="clipboard" className="btn-icon" /> Urable Instant Booking
            </motion.a>
          </div>

          <div style={{ gap: 32 }} className="screen-flex">
            <a href="https://iglcoatingsusa.com/" target="_blank" rel="noopener">
              <div
                className="header-cert"
                style={{
                  backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/833088d3-ca7b-41b9-561f-21f8517f3300/public')`,
                  width: "110px",
                  height: "105px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </a>
            <a
              href="https://www.bbb.org/us/wa/bonney-lake/profile/auto-detailing/dirt-less-detailing-1296-1000135733/#sealclick"
              target="_blank"
              rel="noopener"
              aria-label="Dirt-Less Detailing on Better Business Bureau"
            >
              <div
                className="header-cert"
                style={{
                  backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/1f42d129-8657-4246-7297-ab33dc24c000/public')`,
                  width: "175px",
                  height: "100px",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
            </a>
          </div>
        </div>
      </header>

      <div className="service-bkg" style={{ paddingTop: 0 }}>
        <Benefits />

        <div className="general-container new-heading-container" style={{ margin: "5vh auto 2vh auto" }}>
          <strong className="above-heading"> Interior Services </strong>
          <h2 className="new-heading">Transform your vehicle's interior with our Premium Auto Detailing services.</h2>
        </div>

        <div className="otherservices-subcontainer">
          <div className="popular-services-card">
            <div className="new-banner">
              <div className="banner">NEW!</div>
            </div>
            <div
              className="popular-img"
              style={{
                backgroundImage: `url(https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/e073e12e-8f0c-4ae5-fa12-4abc9ab9db00/public)`,
              }}
            ></div>
            <div className="popular-header">
              <a href="/services/interior-swift" className="accent-orange">
                Swift Interior Detail
              </a>
              <div>
                <p>Starting At:</p>
                <p className="popular-pricing-price">$150</p>
              </div>
            </div>
            <hr className="long-hr accent-orange" />

            <ul className="checklist">
              <li>
                <img src="../assets/icons/checkmark.svg" alt="steering wheel" className="icon-36" />
                <p className="checklist-item">Vacuum the entire vehicle</p>
              </li>
              <li>
                <img src="../assets/icons/checkmark.svg" alt="steering wheel" className="icon-36" />
                <p className="checklist-item">Wipe down and condition all surfaces</p>
              </li>
              <li>
                <img src="../assets/icons/checkmark.svg" alt="steering wheel" className="icon-36" />
                <p className="checklist-item">Wash all floormats</p>
              </li>
              <li>
                <img src="../assets/icons/checkmark.svg" alt="steering wheel" className="icon-36" />
                <p className="checklist-item">Clean all windows/glass</p>
              </li>
            </ul>

            <hr className="long-hr accent-orange" />
            <div className="popular-link-container">
              <a href="/contact" className="popular-readmore">
                Book Now!
              </a>
              <a href="/services/interior-swift" className="popular-readmore-secondary">
                Learn More
              </a>
            </div>
          </div>

          <div className="popular-services-card">
            <div
              className="popular-img"
              style={{
                backgroundImage: `url(https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/2a40931e-dd21-407c-dd03-86fd43b05200/public)`,
              }}
            ></div>
            <div className="popular-header">
              <a href="/services/interior" className="accent-orange">
                Full Interior Detail
              </a>
              <div>
                <p>Starting At:</p>
                <p className="popular-pricing-price">$300</p>
              </div>
            </div>
            <hr className="long-hr accent-orange" />

            <ul className="checklist">
              <li>
                <img src="../assets/icons/checkmark.svg" alt="steering wheel" className="icon-36" />
                <p className="checklist-item">Blow out all dirt/debris</p>
              </li>
              <li>
                <img src="../assets/icons/checkmark.svg" alt="steering wheel" className="icon-36" />
                <p className="checklist-item">Steam extraction/carpet shampooing</p>
              </li>
              <li>
                <img src="../assets/icons/checkmark.svg" alt="steering wheel" className="icon-36" />
                <p className="checklist-item">Door jambs cleaned</p>
              </li>
              <li>
                <img src="../assets/icons/checkmark.svg" alt="steering wheel" className="icon-36" />
                <p className="checklist-item">All Leathers and plastics cleaned</p>
              </li>
              <li>
                <img src="../assets/icons/checkmark.svg" alt="steering wheel" className="icon-36" />
                <p className="checklist-item">All interior windows and glass cleaned</p>
              </li>
            </ul>

            <hr className="long-hr accent-orange" />
            <div className="popular-link-container">
              <a href="/contact" className="popular-readmore">
                Book Now!
              </a>
              <a href="/services/interior" className="popular-readmore-secondary">
                Learn More
              </a>
            </div>
          </div>

          <div className="popular-services-card">
            <div
              className="popular-img"
              style={{
                backgroundImage: `url(https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/213e3fa9-1def-44b2-3031-1901432b9a00/public)`,
              }}
            ></div>
            <div className="popular-header">
              <a href="/services/interior-spill" className="accent-orange">
                Full Interior + Spill Guard
              </a>
              <div>
                <p>Starting At:</p>
                <p className="popular-pricing-price">$450</p>
              </div>
            </div>
            <hr className="long-hr accent-orange" />

            <ul className="checklist">
              <li>
                <img
                  src="../assets/icons/checkmark.svg"
                  alt="steering wheel"
                  className="icon-36"
                  style={{ marginTop: "5px" }}
                />
                <p className="checklist-item">
                  <span className="bold">EVERYTHING</span> from our Full Interior Service
                </p>
              </li>
              <li>
                <img
                  src="../assets/icons/checkmark.svg"
                  alt="steering wheel"
                  className="icon-36"
                  style={{ marginTop: "5px" }}
                />
                <p className="checklist-item">Interior Ceramic Coating applied on all surfaces</p>
              </li>
            </ul>

            <hr className="long-hr accent-orange" />
            <div className="popular-link-container">
              <a href="/contact" className="popular-readmore">
                Book Now!
              </a>
              <a href="/services/interior-spill" className="popular-readmore-secondary">
                Learn More{" "}
              </a>
            </div>
          </div>
        </div>

        <br className="extra-space" />

        <div className="general-container new-heading-container" style={{ margin: "5vh auto 2vh auto" }}>
          <strong className="above-heading"> Exterior Services </strong>
          <h3 className="new-heading">
            From a quick refresh to a complete paint correction, we cover all things exterior.
          </h3>
        </div>

        <div className="otherservices-subcontainer">
          <div className="popular-services-card">
            <div
              className="popular-img"
              style={{
                backgroundImage: `url(https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/b5859464-3c0e-4fcf-8332-17155eb86d00/public)`,
              }}
            ></div>
            <div className="popular-header">
              <a href="/services/exterior" className="accent-orange">
                Exterior Decon Wash
              </a>
              <div>
                <p style={{ marginBottom: 0, color: "#c0c0c0", textAlign: "left" }}>Starting At:</p>
                <p className="popular-pricing-price">$100</p>
              </div>
            </div>
            <hr className="long-hr accent-orange" />

            <ul className="checklist">
              <li>
                <img
                  src="../assets/icons/checkmark.svg"
                  alt="steering wheel"
                  className="icon-36"
                  style={{ marginTop: "5px" }}
                />
                <p className="checklist-item">
                  Full vehicle strip wash (to remove any embedded contaminants, tar, and sap)
                </p>
              </li>
              <li>
                <img
                  src="../assets/icons/checkmark.svg"
                  alt="steering wheel"
                  className="icon-36"
                  style={{ marginTop: "5px" }}
                />
                <p className="checklist-item">Thoroughly wash tires, wheels, wheel barrels and wells</p>
              </li>
              <li>
                <img src="../assets/icons/checkmark.svg" alt="steering wheel" className="icon-36" />
                <p className="checklist-item">Clean door jambs and the gas door</p>
              </li>
              <li>
                <img src="../assets/icons/checkmark.svg" alt="steering wheel" className="icon-36" />
                <p className="checklist-item">Ceramic protection applied to paint (lasts up to 3 months)</p>
              </li>
            </ul>

            <hr className="long-hr accent-orange" />
            <div className="popular-link-container">
              <a href="/contact" className="popular-readmore">
                Book Now!
              </a>
              <a href="/services/exterior" className="popular-readmore-secondary">
                Learn More{" "}
              </a>
            </div>
          </div>
          <div className="popular-services-card">
            <div
              className="popular-img"
              style={{
                backgroundImage: `url(https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/977438a8-129b-496b-9845-e55e3198e900/public)`,
              }}
            ></div>
            <div className="popular-header">
              <a href="/services/exterior-seal" className="accent-orange">
                Exterior Seal and Shine
              </a>
              <div>
                <p style={{ marginBottom: 0, color: "#c0c0c0", textAlign: "left" }}>Starting At:</p>
                <p className="popular-pricing-price">$375</p>
              </div>
            </div>
            <hr className="long-hr accent-orange" />

            <ul className="checklist">
              <li>
                <img
                  src="../assets/icons/checkmark.svg"
                  alt="steering wheel"
                  className="icon-36"
                  style={{ marginTop: "5px" }}
                />
                <p className="checklist-item">
                  <span className="bold">EVERYTHING</span> from our Exterior Decon Service
                </p>
              </li>
              <li>
                <img
                  src="../assets/icons/checkmark.svg"
                  alt="steering wheel"
                  className="icon-36"
                  style={{ marginTop: "5px" }}
                />
                <p className="checklist-item">Light polish to remove minor swirls and waterspots</p>
              </li>
              <li>
                <img src="../assets/icons/checkmark.svg" alt="steering wheel" className="icon-36" />
                <p className="checklist-item">Restore and ceramic coat all trim</p>
              </li>
              <li>
                <img
                  src="../assets/icons/checkmark.svg"
                  alt="steering wheel"
                  className="icon-36"
                  style={{ marginTop: "5px" }}
                />
                <p className="checklist-item">Windshield Coating (you won't even need to use your wipers anymore!)</p>
              </li>
              <li>
                <img
                  src="../assets/icons/checkmark.svg"
                  alt="steering wheel"
                  className="icon-36"
                  style={{ marginTop: "5px" }}
                />
                <p className="checklist-item">Ceramic protection applied on paint (lasts up to 1 year)</p>
              </li>
            </ul>

            <hr className="long-hr accent-orange" />
            <div className="popular-link-container">
              <a href="/contact" className="popular-readmore">
                Book Now!
              </a>
              <a href="/services/exterior-seal" className="popular-readmore-secondary">
                Learn More{" "}
              </a>
            </div>
          </div>
          <div className="popular-services-card">
            <div
              className="popular-img"
              style={{
                backgroundImage: `url(https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/4ce4f977-365c-4211-a7f9-68c5ec6d7a00/public)`,
              }}
            ></div>
            <div className="popular-header">
              <a href="/services/exterior-correct" className="accent-orange">
                Correct and Protect
              </a>
              <div>
                <p style={{ marginBottom: 0, color: "#c0c0c0", textAlign: "left" }}>Starting At:</p>
                <p className="popular-pricing-price">$1,300</p>
              </div>
            </div>
            <hr className="long-hr accent-orange" />

            <ul className="checklist">
              <li>
                <img
                  src="../assets/icons/checkmark.svg"
                  alt="steering wheel"
                  className="icon-36"
                  style={{ marginTop: "5px" }}
                />
                <p className="checklist-item">
                  <span className="bold">EVERYTHING</span> from our Exterior Decon Service
                </p>
              </li>
              <li>
                <img
                  src="../assets/icons/checkmark.svg"
                  alt="steering wheel"
                  className="icon-36"
                  style={{ marginTop: "5px" }}
                />
                <p className="checklist-item">Our full paint correction process (Removes 80%-90% of scratching)</p>
              </li>
              <li>
                <img src="../assets/icons/checkmark.svg" alt="steering wheel" className="icon-36" />
                <p className="checklist-item">Restore and ceramic coat all trim</p>
              </li>
              <li>
                <img
                  src="../assets/icons/checkmark.svg"
                  alt="steering wheel"
                  className="icon-36"
                  style={{ marginTop: "5px" }}
                />
                <p className="checklist-item">Windshield Coating (you won't even need to use your wipers anymore!)</p>
              </li>
              <li>
                <img
                  src="../assets/icons/checkmark.svg"
                  alt="steering wheel"
                  className="icon-36"
                  style={{ marginTop: "5px" }}
                />
                <p className="checklist-item">Ceramic coat wheel faces</p>
              </li>
              <li>
                <img
                  src="../assets/icons/checkmark.svg"
                  alt="steering wheel"
                  className="icon-36"
                  style={{ marginTop: "5px" }}
                />
                <p className="checklist-item">Ceramic coating applied to paint (Lasts a Lifetime*!)</p>
              </li>
            </ul>

            <hr className="long-hr accent-orange" />
            <div className="popular-link-container">
              <a href="/contact" className="popular-readmore">
                Book Now!
              </a>
              <a href="/services/exterior-correct" className="popular-readmore-secondary">
                Learn More{" "}
              </a>
            </div>
          </div>
        </div>

        <br className="extra-space" />

        <div className="service-bkg-lighter" style={{ paddingBottom: "5rem" }}>
          <div className="general-container new-heading-container" style={{ margin: "5vh auto 2vh auto" }}>
            <strong className="above-heading">Testimonials</strong>
            <h3 className="new-heading">Read some of the reviews from our valued customers!</h3>
            <p style={{ margin: 0, padding: "1rem 0" }}>
              See all of the reviews from our customers on our{" "}
              <a
                style={{ color: "dodgerblue" }}
                target="_blank"
                rel="noopener"
                href="https://www.facebook.com/DirtLessDetailing/reviews"
              >
                Facebook
              </a>{" "}
              or{" "}
              <a
                style={{ color: "dodgerblue" }}
                target="_blank"
                rel="noopener"
                href="https://www.google.com/localservices/prolist?g2lbs=ADZRdktLAaGKKobG3aZn2_Qd9tpM-f3ifTKQp4hXsZnMmVk1USpK7Ha4kZIeLdSCTp26Z3uD8UBdDwRY7Zqn7XZatg-9z1GI86mqJXoiFQCA1rCg0Vis_yQK9JiR9qrRMObWwAegw9aPUbKd01T05_4R3o4ry_qhHA%3D%3D&hl=en-US&gl=us&cs=1&ssta=1&q=dirtless%20detailing&oq=dirtless%20detailing&slp=MgA6HENoTUlxZVd0Nkl2SV9nSVY2UTZ0QmgyZWJnaVJSAggCYAB6-gFDaEprYVhKMGJHVnpjeUJrWlhSaGFXeHBibWRJNnZqVDFhcTRnSUFJV2h3UUFCQUJHQUFZQVNJU1pHbHlkR3hsYzNNZ1pHVjBZV2xzYVc1bmtnRVZZMkZ5WDJSbGRHRnBiR2x1WjE5elpYSjJhV05sbWdFa1EyaGtSRk5WYUU1TlJ6bHVVekJXU2xFd1JtNVRWVkpEV2pKYVNHTnVhRzVTVWtGQ3FnRTZFQUV5SGhBQklocEZwOXktNVEwdWdLbGRqT2pnOEdvLWlaQlZ5NUdlSjh3QjV6SVdFQUlpRW1ScGNuUnNaWE56SUdSbGRHRnBiR2x1Wi1BQkFBkgG0AgoNL2cvMTFzYnBjOV8zYgoNL2cvMTFmcDJwN3dtbgoNL2cvMTFrMndndnhyegoNL2cvMTFzbXZfbm13MQoLL2cvMXRmM2I3bHQKDS9nLzExZ2w0dDJkY20KDC9nLzEyNjBieGxoNgoNL2cvMTFwMTN5MnQ4cQoNL2cvMTFjbnpuX3p3agoNL2cvMTFqcTlwcGtfNwoNL2cvMTFneTRsejU5aAoNL2cvMTF0ZDhjN195NQoNL2cvMTFrNDVzNzVmcwoNL2cvMTFnMnhjbHBxMwoNL2cvMTFzNTFrN2YzdAoNL2cvMTFzM2YwMHZzcAoML2cvMTFnem44M3diCg0vZy8xMW5uMGhzanF2Cg0vZy8xMWZxcXoxdmdwCg0vZy8xMXQ0ZmprMDltEgQSAggBEgQKAggB&src=2&spp=Cg0vZy8xMXNicGM5XzNiOtABV2h3UUFCQUJHQUFZQVNJU1pHbHlkR3hsYzNNZ1pHVjBZV2xzYVc1bmtnRVZZMkZ5WDJSbGRHRnBiR2x1WjE5elpYSjJhV05sbWdFa1EyaGtSRk5WYUU1TlJ6bHVVekJXU2xFd1JtNVRWVkpEV2pKYVNHTnVhRzVTVWtGQ3FnRTZFQUV5SGhBQklocEZwOXktNVEwdWdLbGRqT2pnOEdvLWlaQlZ5NUdlSjh3QjV6SVdFQUlpRW1ScGNuUnNaWE56SUdSbGRHRnBiR2x1Wnc9PQ%3D%3D&serdesk=1&lrlstt=1682530844021&ved=2ahUKEwiSvKHoi8j-AhWfHjQIHT0kD2MQvS56BAgwEAE&scp=ChpnY2lkOmNhcl9kZXRhaWxpbmdfc2VydmljZRJgEhIJeUAf2e38kFQRVTQwKEuFSMMiMkRpcnQtTGVzcyBEZXRhaWxpbmcsIDkzMDUgMjA1dGggQXZlIEUsIEJvbm5leSBMYWtlKhQNCAEeHBXFWjC3HQgBHhwlxVowtzAAGhJkaXJ0bGVzcyBkZXRhaWxpbmciEmRpcnRsZXNzIGRldGFpbGluZyoVQ2FyIGRldGFpbGluZyBzZXJ2aWNl#ts=3"
              >
                Google
              </a>{" "}
              page.
            </p>
          </div>
          <div className="reviews-container">
            <div className="review-card">
              <div className="review-top">
                <p className="review-text">
                  "Had an issue with the interior of a vehicle that had been in a garage for too long. Dirt-Less handled
                  it professionally and quickly.{" "}
                  <span className="highlight">We will definitely keep going back for our needs.</span>"
                </p>
              </div>
              <div className="review-bottom">
                <div style={{ textAlign: "left" }}>
                  <strong className="name">Jonathon H.</strong>
                  <p className="services-p">Full Interior</p>
                </div>
                <div className="google-review">
                  <img src="../assets/icons/star.svg" alt="5 stars" className="icon-36" />
                  <p className="star-review">5.0</p>
                </div>
              </div>
            </div>
            <div className="review-card">
              <div className="review-top">
                <p className="review-text">
                  "Brenden does an amazing job. My car looks amazing.{" "}
                  <span className="highlight">He is super reasonable in his pricing and was very efficient.</span> Will
                  definitely continue to use his service for all our vehicles."
                </p>
              </div>
              <div className="review-bottom">
                <div style={{ textAlign: "left" }}>
                  <strong className="name">Kristi H.</strong>
                  <p className="services-p">Full Interior + Exterior Wash</p>
                </div>
                <div className="google-review">
                  <img src="../assets/icons/star.svg" alt="5 stars" className="icon-36" />
                  <p className="star-review">5.0</p>
                </div>
              </div>
            </div>
            <div className="review-card">
              <div className="review-top">
                <p className="review-text">
                  "Had a whole half gallon of almond chocolate milk spilled into my trunk thanks to Walmart pickup.
                  <span className="highlight">
                    {" "}
                    After calling many detailing shops (whom most were rude and not helpful) Brenden at Dirt-Less Detail
                    was very polite and eager to help.
                  </span>{" "}
                  Despite his busy schedule he fit me in asap and took care of my weird circumstance. It didn't take
                  long to clean the trunk and because of it he didn't charge me for the cleaning. Way to go Brenden at
                  Dirt-Less Detail. Thanks again."
                </p>
              </div>
              <div className="review-bottom">
                <div style={{ textAlign: "left" }}>
                  <strong className="name">Jennifer D.</strong>
                  <p className="services-p">Full Interior</p>
                </div>
                <div className="google-review">
                  <img src="../assets/icons/star.svg" alt="5 stars" className="icon-36" />
                  <p className="star-review">5.0</p>
                </div>
              </div>
            </div>
            <div className="review-card review-screen">
              <div className="review-top">
                <p className="review-text">
                  "Brought in my 12 Escalade and he worked his magic on both inside and outside.{" "}
                  <span className="highlight">
                    Brenden is very good at what he does, the vehicle looks amazing. Better than it was when I bought
                    it.
                  </span>{" "}
                  Thank you so much for getting me into your schedule. I am Extremely pleased with the outcome of your
                  services."
                </p>
              </div>
              <div className="review-bottom">
                <div style={{ textAlign: "left" }}>
                  <strong className="name">Rob B.</strong>
                  <p className="services-p">Full Interior + Exterior Wash</p>
                </div>
                <div className="google-review">
                  <img src="../assets/icons/star.svg" alt="5 stars" className="icon-36" />
                  <p className="star-review">5.0</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br className="extra-space" />
        <hr className="pricing__hr" />

        <div className="general-container new-heading-container">
          <h3 style={{ margin: 0, width: "auto" }} className="new-heading new-heading-center">
            Our shop location and mobile services
          </h3>
        </div>
        <section className="mobileservices-container">
          <div className="mobileservices-details">
            <h4>Mobile Service Information:</h4>
            <ul>
              <li>
                We can come to you to perform our details with most of our services as long as the weather cooperates.
                Some services that you will need to come to us for are:
              </li>
              <li className="no-list">
                <ul>
                  <li>Exterior Seal & Shine</li>
                  <li>Exterior Correct & Protect</li>
                </ul>
              </li>
              <li>For our mobile services we currently travel out to the following cities:</li>
              <li className="no-list">
                <ul>
                  <li>
                    Bonney Lake, Buckley, Sumner, Enumclaw, Puyallup, Lake Tapps, Federal Way, Orting, South Prairie
                    Tehaleh, Black Diamond, Milton, Edgewood, and Graham
                  </li>
                </ul>
              </li>
              <li>
                *Note: For Mobile Services totaling less than $200 we do charge a small $1/mile from our shop location
                fee.
              </li>
            </ul>
          </div>
          <div className="map">
            <iframe
              title="Map of Dirt-Less Detailing location"
              width={"300"}
              height={"350"}
              style={{ border: 0 }}
              loading="lazy"
              src={`https://www.google.com/maps/embed/v1/place?zoom=15&q=place_id:ChIJxxfUWqz7kFQRotRs8MwWDRE&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS}`}
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
}
