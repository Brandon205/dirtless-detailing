import PricingComponent from "../../../../utils/PricingComponent";
import HeaderComponent from "../../../../components/HeaderComponent";
import {
  previewParentVariation,
  imgVariation1,
  imgVariation2,
  imgVariation3,
  imgVariation4,
} from "../../../../utils/animationVariations";
import { motion } from "framer-motion";
import BeforeAfter from "../../../../components/BeforeAfter";

export const metadata = {
  title: "Exterior Decon Wash",
  description:
    "Bonney Lakes top choice for Ceramic Coating, Paint Correction, and all of your auto detailing needs! Contact us to schedule your appointment today!",
  alternates: { canonical: "https://www.dirtlessdetailing.com/exterior" },
};

export default function Exterior() {
  return (
    <section className="service-content-container">
      {/* <Head>
        <title>Exterior Decon Wash | Dirt-Less Detailing</title>
        <Metatags
          title='Exterior Decon Wash | Dirt-Less Detailing'
          description='Get a car wash like never before with our Exterior Decon Wash. Where we go in depth to get all corners and remove any paint contaminants.'
          image='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/da3f5734-319b-4301-43c9-7af958fd5600/public'
          canonical='/services/exterior'
        />
        <script type="application/ld+json" key="product-jsonld" dangerouslySetInnerHTML={{
          __html: `{
            "@context": "http://schema.org",
            "@type": "Product",
            "name": "Exterior Decon Wash",
            "brand": "Dirt-Less Detailing",
            "description": "Get a car wash like never before with our Exterior Decon Wash. Where we go in depth to get all corners and remove any paint contaminants.",
            "image": "https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/da3f5734-319b-4301-43c9-7af958fd5600/public",
            "url": "https://www.dirtlessdetailing.com/services/exterior/",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "price": "100",
              "priceSpecification": {
              	"@type": "PriceSpecification",
                "priceCurrency": "USD",
                "price": "100",
                "minPrice": "100",
                "maxPrice": "150"
              },
              "availability": "http://schema.org/InStock",
              "itemOffered": {
                "@type": "Service",
                "name": "Exterior Decon Wash",
                "serviceType": "Exterior Detailing",
                "providerMobility": "dynamic"
              }
            }
          }`,
        }} />
      </Head> */}
      <HeaderComponent
        mainUrl={"da3f5734-319b-4301-43c9-7af958fd5600"}
        title="Exterior Decon Wash"
        description="Get a complete car wash, down to even the smallest dots of tar removed."
        secondaryUrl={"939afebd-2188-47d8-fd50-328291b2a300"}
      />

      <div className="main-content-container">
        <div className="process-container">
          <div style={{ width: "100%" }}>
            <main className="service-main">
              <h2 style={{ marginBottom: 0 }} className="text-large">
                Exterior Decon Wash
              </h2>
              <hr style={{ margin: "0 auto 3rem auto" }} />
              <div className="service-explain">
                <p>
                  This is our base exterior detailing service. It is designed to give the outside of your vehicle a
                  thorough cleaning and decontamination. We even top it off with a 3 month ceramic spray to protect it
                  for time to come.
                </p>
                <p>
                  Wheels and tires can easily be one of the dirtiest parts of a car without you even realizing it, and
                  brake dust is no joke once it's been on there for a while. Thats why we have a wide array of chemicals
                  and products to best clean even the dirtiest wheels.
                </p>
                <p>
                  In our Decon Wash, our goal is not to just give your car a quick mitt wash and call it good. A Decon
                  Wash is more in-depth removing all contaminants including iron, tar, artilary fungus etc.
                </p>
                <p>
                  And while we're at it, how's the interior of your car doing? We'd be more than happy to clean it out
                  as well, no matter the condition! Check out our interior offers{" "}
                  <a href="/services/interior" className="aside-link">
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
                  <span className="accent-orange bold">Exterior Decon Wash</span> Pricing
                </h3>
                <strong className="pricing__subheading">
                  Select your vehicle size below to get a quick price estimate for your vehicle.
                </strong>
              </div>
              <PricingComponent prices={[100, 100, 100, 125, 150, 150]} addons="exterior" />
            </div>

            <h2 className="cleaning-process-title text-xl">Our Exterior Decon Wash Process</h2>
            <ol className="list">
              <li className="item">
                <div className="step-number-container">
                  <h3 className="step-number">1</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Wash Vehicle</h4>
                  <p className="step-desc">Thorough top to bottom wash including the inside of the gas door.</p>
                </div>
              </li>
              <li className="item">
                <div className="step-number-container">
                  <h3 className="step-number">2</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Wheel Cleaning</h4>
                  <p className="step-desc">
                    Clean wheels, wheel wells, and wheel barrels with chemicals made for removing brake dust and road
                    film.
                  </p>
                </div>
              </li>
              <li className="item">
                <div className="step-number-container">
                  <h3 className="step-number">3</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Remove tar and sap</h4>
                  <p className="step-desc">
                    Remove any tar and sap from the exterior. Especially if your car is white, small black dots of tar
                    appear usually on the lower panels of the car. We have some of the best products to remove all of
                    it.
                  </p>
                </div>
              </li>
              <li className="item">
                <div className="step-number-container">
                  <h3 className="step-number">4</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Protect Paint</h4>
                  <p className="step-desc">
                    Apply our mix of Ceramic Spray (gives the whole vehicle 3 months of protection).
                  </p>
                </div>
              </li>
              <li className="item">
                <div className="step-number-container">
                  <h3 className="step-number">5</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Dry Vehicle</h4>
                  <p className="step-desc">Dry the whole vehicle with drying towels and air blowers.</p>
                </div>
              </li>
              <li className="item">
                <div className="step-number-container">
                  <h3 className="step-number">6</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Clean Door Jambs</h4>
                  <p className="step-desc">Thoroughly wipe down all the cracks and crevices in the door jambs.</p>
                </div>
              </li>
              <li className="item">
                <div className="step-number-container">
                  <h3 className="step-number">7</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Final Touches</h4>
                  <p className="step-desc">Dress tires, wheel wells and plastics.</p>
                </div>
              </li>
              <li className="item item-disabled">
                <div className="step-number-container">
                  <h3 className="step-number" style={{ border: "2px solid #aaa" }}>
                    8
                  </h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">
                    All this and more!{" "}
                    <a href="/services/exterior-seal">
                      <img src="../assets/icons/linking.png" alt="external link" className="icon-24" />
                    </a>
                  </h4>
                  <p className="step-desc">
                    If you opt for our Exterior Seal and Shine package you get all of these services, a full vehicle
                    polish, specialized windshield and trim coatings, and a top coating of IGL Premier, leaving you with
                    1 year of total protection! See more info{" "}
                    <a href="/services/exterior-seal" className="aside-link">
                      here
                    </a>
                    .
                  </p>
                </div>
              </li>
            </ol>

            <br className="extra-space" />

            <p style={{ fontSize: "2rem", margin: 0, color: "white" }}>End Results</p>
            <h3 className="pricing__heading">What a car wash should be.</h3>
            <p className="pricing__subtext">Your car, washed, without the unnecessary scratching and missed corners.</p>
            <BeforeAfter
              beforeUrl={"4aad5d50-ca20-4973-59d6-47e9ebe24100"}
              afterUrl={"74d7cbdb-782e-4a5b-dde5-ac078af06700"}
            />

            <div className="preview-container">
              <motion.a
                initial="rest"
                whileHover="hover"
                variants={previewParentVariation}
                href="/gallery/exterior"
                className="gallery-preview"
              >
                <motion.img
                  variants={imgVariation1}
                  src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/5ccc928a-c036-489b-fec8-e674a9d0ae00/public"
                  alt="preview"
                  className="preview-img"
                />
                <motion.img
                  variants={imgVariation2}
                  src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/c274c919-595c-4283-2d10-c5a47e569700/public"
                  alt="preview"
                  className="preview-img"
                />
                <motion.img
                  variants={imgVariation3}
                  src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/6649be49-1ef8-475a-6610-695cc8619a00/public"
                  alt="preview"
                  className="preview-img"
                />
                <motion.img
                  variants={imgVariation4}
                  src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/3a1a1e74-854b-4aa9-ae8e-06816ec80200/public"
                  alt="preview"
                  className="preview-img"
                />
              </motion.a>
              <div className="preview-content">
                <h4>
                  See examples of our{" "}
                  <a href="/gallery/exterior" className="aside-link">
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
                  Check out our exterior gallery page, showing off some of the great results we've gotten over the
                  years! See it{" "}
                  <a href="/gallery/exterior" className="aside-link">
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
