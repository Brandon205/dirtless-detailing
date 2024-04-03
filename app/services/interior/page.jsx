"use client";
import PricingComponent from "../../../utils/PricingComponent";
import ImageSlider from "../../../utils/ImageSlider";
import HeaderComponent from "../../components/HeaderComponent";
import {
  previewParentVariation,
  imgVariation1,
  imgVariation2,
  imgVariation3,
  imgVariation4,
} from "../../../utils/animationVariations";
import { motion } from "framer-motion";

const jsonld = {
  "@context": "https://schema.org/",
  "@type": "Product",
  name: "Full Interior Detail",
  image: "https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/6d1c1456-97c0-4c35-d58a-ed3c0d576a00/public",
  description:
    "Get your car's interior looking brand new with our full interior detailing service. We offer thorough cleaning and conditioning of all surfaces, including the dashboard, seats, and carpets. Contact us to schedule your appointment today.",
  brand: {
    "@type": "Brand",
    name: "Dirt-Less Detailing",
  },
  offers: {
    "@type": "AggregateOffer",
    url: "https://www.dirtlessdetailing.com/services/interior",
    priceCurrency: "USD",
    lowPrice: "300",
    highPrice: "375",
  },
};

export default function FullIntEx() {
  return (
    <section className="service-content-container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld, null, 2) }} />
      <HeaderComponent
        mainUrl={"6d1c1456-97c0-4c35-d58a-ed3c0d576a00"}
        title="Full Interior Cleaning"
        description="Our easy and hassle-free Interior Cleaning Service."
        secondaryUrl={"270a9710-a253-4522-ff8a-691ad0cb2d00"}
      />

      <div className="main-content-container">
        <div className="process-container">
          <div style={{ width: "100%" }}>
            <main className="service-main">
              <h2 style={{ marginBottom: 0 }} className="text-large">
                Our Full Interior Cleaning Service
              </h2>
              <hr style={{ margin: "0 auto 3rem auto" }} />
              <div className="service-explain">
                <p>
                  The goal of the Full Interior Cleaning package is to restore your interior to its best condition. Your
                  carpet, seats, floor mats, plastics, windows, and all other interior fixtures will be meticulously
                  cleaned.
                </p>
                <p>
                  While we will attempt to remove all stains, many stains could prove to be more challenging to remove,
                  or might not be completely removed. Some won't completely disappear depending on the kind of stain,
                  how long it has been sitting, and the material the stain is on.
                </p>
                <p>
                  Taking us by surprise is difficult. We will not think that your interior is too dirty. We've seen
                  hundreds of different interiors, and have all the necessary tools for every situation.
                </p>
                <p>
                  Want the outside done as well? Simply book an interior and exterior service, we'll do the hard work to
                  get your car back to its best condition! Check out our exterior offers{" "}
                  <a href="/services/exterior" className="aside-link">
                    here
                  </a>
                  .
                </p>
              </div>
            </main>
            <br className="extra-space" />
            <div>
              <div className="pricing__heading-container">
                <h3 className="pricing__heading">
                  <span className="accent-orange bold">Full Interior</span> Pricing
                </h3>
                <strong className="pricing__subheading">
                  Select your vehicle size below to get a quick price estimate for your vehicle.
                </strong>
              </div>
              <PricingComponent prices={[300, 300, 300, 335, 375, 375]} addons="interior" />
            </div>

            <h2 className="cleaning-process-title text-xl">Our Interior Cleaning Process</h2>
            <ol className="list">
              <li className="item">
                <div className="step-number-container">
                  <h3 className="step-number">1</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Expose Hidden Dirt</h4>
                  <p className="step-desc">
                    Blow out all hidden dirt and debris and gets areas that are hard to reach with a vacuum.
                  </p>
                </div>
              </li>
              <li className="item">
                <div className="step-number-container">
                  <h3 className="step-number">2</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Vacuum Vehicle</h4>
                  <p className="step-desc">Thoroughly vacuum every crack and crevice of the vehicle.</p>
                </div>
              </li>
              <li className="item">
                <div className="step-number-container">
                  <h3 className="step-number">3</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Hot Water Extraction (stain removal)</h4>
                  <p className="step-desc">
                    Remove/Extract all stains that we can. We will be sure to get all carpets, floor mats, and cloth
                    seats.
                  </p>
                </div>
              </li>
              <li className="item">
                <div className="step-number-container">
                  <h3 className="step-number">4</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Door Jambs</h4>
                  <p className="step-desc">Clean all of the door jambs.</p>
                </div>
              </li>
              <li className="item">
                <div className="step-number-container">
                  <h3 className="step-number">5</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Wipe Down Plastics and Leathers</h4>
                  <p className="step-desc">We will clean, steam, and degrease all plastics and leather seats.</p>
                </div>
              </li>
              <li className="item">
                <div className="step-number-container">
                  <h3 className="step-number">6</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Window Cleaning</h4>
                  <p className="step-desc">
                    Clean all windows and other glass, removing any streaking possibly left behind from the previous
                    steps.
                  </p>
                </div>
              </li>
              <li className="item item-disabled">
                <div className="step-number-container">
                  <h3 className="step-number" style={{ border: "2px solid #aaa" }}>
                    7
                  </h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">
                    Interior Spill Guard Coating{" "}
                    <a href="/services/interior-spill">
                      <img src="../assets/icons/linking.png" alt="external link" className="icon-24" />
                    </a>
                  </h4>
                  <p className="step-desc">
                    Upgrade to our Spill Guard Service to have us apply a 1 year interior ceramic coating to all
                    surfaces in the vehicle. This is PERFECT for cars with kids, pets, or daily coffee trips with the
                    occasional spills as cleaning it will now be easier. See more info{" "}
                    <a href="/services/interior-spill" className="aside-link">
                      here
                    </a>
                    .
                  </p>
                </div>
              </li>
            </ol>

            <br className="extra-space" />

            <p style={{ fontSize: "2rem", margin: 0, color: "white" }}>End Results</p>
            <h3 className="pricing__heading">Fresh, Clean, and Stunning Results.</h3>
            <p className="pricing__subtext">Once we are done you won't want to see your car dirty ever again!</p>
            <ImageSlider
              beforeUrlId="70e54f6b-a9f8-48aa-a9af-893776082400"
              afterUrlId="907d2e8b-5d24-40bf-387e-90be139c2d00"
              beforeOffset={0}
              afterOffset={0}
            />

            <iframe
              style={{ width: "80%", height: "700px" }}
              src="https://www.youtube.com/embed/W5HOGIvRppI"
              title="Red Genesis SUV Transformation | Revitalizing Brilliance with Professional Detailing"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>

            <div className="preview-container">
              <motion.a
                initial="rest"
                whileHover="hover"
                variants={previewParentVariation}
                href="/gallery/interior"
                className="gallery-preview"
              >
                <motion.img
                  variants={imgVariation1}
                  src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0e2bc8e9-28e8-4888-200b-86674d466600/public"
                  alt="preview"
                  className="preview-img"
                />
                <motion.img
                  variants={imgVariation2}
                  src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/9b9c4f43-bef5-4516-78cf-9fa978743100/public"
                  alt="preview"
                  className="preview-img"
                />
                <motion.img
                  variants={imgVariation3}
                  src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/e7d160ba-aac9-46f5-985d-1a9dc5d0d600/public"
                  alt="preview"
                  className="preview-img"
                />
                <motion.img
                  variants={imgVariation4}
                  src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/b1d716fa-888e-48a1-148d-e2cd896b8500/public"
                  alt="preview"
                  className="preview-img"
                />
              </motion.a>
              <div className="preview-content">
                <h4>
                  See examples of our interior{" "}
                  <a href="/gallery/interior" className="aside-link">
                    work{" "}
                    <img
                      src="../assets/icons/linking.png"
                      style={{ marginLeft: "0.5rem" }}
                      alt="external link"
                      className="icon-36"
                    />
                  </a>
                </h4>
                <p>
                  Our interior gallery page has a large collection of interior images including before and after
                  pictures! Check it out{" "}
                  <a href="/gallery/interior" className="aside-link">
                    here
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
