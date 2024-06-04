"use client";
import React, { useEffect, useState } from "react";
import PricingComponent from "../../../utils/PricingComponent";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const jsonld = {
  "@context": "https://schema.org/",
  "@type": "LocalBusiness",
  "name": "Dirt-Less Detailing",
  "image": "https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/5fc33d57-709e-4ae0-582d-9cdc42ed0300/public",
  "currenciesAccepted": "USD",
  "priceRange": "$$$",
  "openingHours": ["Mo-Su 7:00-19:00"],
  "paymentAccepted": "Credit/Debit Card, Cash",
  "url": "https://www.dirtlessdetailing.com/location/tehaleh",
  "email": "brenden@dirtlessdetailing.com",
  "telephone": "(253) 252-9758",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Buckley",
    "addressRegion": "WA",
    "postalCode": "99391",
    "streetAddress": "28120 WA-410, Building C6"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 47.15803435589099,
    "longitude": -122.05283957787773
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": 5,
    "reviewCount": 28
  }
};

export default function Tehaleh() {
  const [currPackage, setCurrPackage] = useState("Interior");
  const [currLink, setCurrLink] = useState("interior");
  const [currComponent, setCurrComponent] = useState(<PricingComponent prices={["300", "300", "335", "335", "375", "375"]} addons="interior" />);

  useEffect(() => {
    if (currPackage === "Full Interior") {
      setCurrComponent(<PricingComponent prices={[300, 300, 300, 335, 375, 375]} addons="interior" />);
      setCurrLink("interior");
    } else if (currPackage === "Interior + Spill Guard") {
      setCurrComponent(<PricingComponent prices={[450, 450, 450, 500, 575, 575]} addons="interior" />);
      setCurrLink("interior-spill");
    } else if (currPackage === "Swift Interior") {
      setCurrComponent(<PricingComponent prices={[150, 150, 150, 175, 175, 200]} addons="interior" />);
      setCurrLink("interior-swift");
    } else if (currPackage === "Exterior Wash") {
      setCurrComponent(<PricingComponent prices={[100, 100, 100, 125, 150, 150]} addons="exterior" />);
      setCurrLink("exterior");
    } else if (currPackage === "Exterior Seal") {
      setCurrComponent(<PricingComponent prices={[500, 500, 500, 625, 750, 750]} addons="correction" />);
      setCurrLink("exterior-seal");
    } else if (currPackage === "Exterior Correct") {
      setCurrComponent(<PricingComponent prices={[1000, 1000, 1000, 1250, 1500, 1500]} addons="correction" />);
      setCurrLink("exterior-correct");
    }
  }, [currPackage]);

  return (
    <div className="location-container bg-contact">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld, null, 2) }} />
      <div
        className="cover"
        style={{
          backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/5fc33d57-709e-4ae0-582d-9cdc42ed0300/cover')`
        }}
      ></div>
      <div className="servicepage-header">
        <div style={{ alignItems: "center" }}>
          <h1>
            <span className="accent-orange bold text-shadow">Tehaleh Vehicle Detailing Services</span>
          </h1>
          <h2 className="page-subheading" style={{ textAlign: "center" }}>
            Ceramic Coatings • Interior • Exterior • Paint Correction services. See our offers for Tehaleh Washington below!
          </h2>
          <div className="header-buttons">
            <a href="/contact" className="top-quote-btn">
              <img src="../assets/icons/clipboard.png" alt="clipboard" className="btn-icon" /> Book Now!
            </a>
            <a href="tel:2532529758" className="top-quote-btn btn-secondary">
              <img src="../assets/icons/phoneMessage.png" alt="call or message" className="btn-icon" /> (253) 252-9758
            </a>
          </div>
        </div>
      </div>

      <main className="location-main">
        <h2 className="text-large">Our Detailing Services offered in Tehaleh Washington.</h2>
        <div className="text-left">
          <p>
            Our mobile auto detailing services in Tehaleh are designed to keep your vehicle looking its best. We offer a variety of services, including interior
            cleaning, exterior washes, ceramic coatings, and paint corrections.
          </p>
          <p>
            Whether you need a quick wash or a full detail, our team has you covered. With our attention to detail and commitment to customer satisfaction, you
            can trust us to provide the best possible results.
          </p>
          <p>
            Plus, we can come to you, so you can enjoy the convenience of our services wherever you are in Tehaleh. Contact us today to schedule an appointment
            and experience the difference our mobile auto detailing services can make for your vehicle.
          </p>
        </div>

        <br className="extra-space" />
      </main>
      <div className="service-bkg-lighter">
        <div style={{ paddingBottom: "2rem" }} className="general-container">
          <h3 className="text-large">Mobile Services offered in Tehaleh:</h3>
          <div style={{ paddingBottom: "2rem" }} className="text-left">
            <a href="/services/interior-swift" className="aside-link text-medium">
              Swift Interior Detail
            </a>
            <p className="mt-0">
              The quickest way to get a clean and conditioned interior without breaking the bank. With this service we use a new all in one revolutionary
              cleaning and conditioning product that saves us time allowing us to bring down the cost of our interior detail. With our full interior we go way
              more in depth, and after seeing the condition of your vehicle we may recommend you upgrade to it. This is the perfect option for maintenance or to
              quickly give the interior of your vehicle a refresh.
            </p>
            <a href="/services/interior" className="aside-link text-medium">
              Full Interior Cleaning
            </a>
            <p className="mt-0">
              A full interior detail will clean every crack and crevice of your vehicles interior to a like-new condition. If needed we include a hot water
              extraction to the carpets and fabric of your vehicle to get out the deeper stains and dirt. For mold, smoke smell, and other unwanted odor removal
              we recommend getting our Ozone Treatment addon to fully remove unwanted smells.
            </p>
            <a href="/services/interior-spill" className="aside-link text-medium">
              Full Interior + Spill Guard
            </a>
            <p className="mt-0">
              If your cars interior gets heavy use by means of spills, wet animals, or even just messy kids, we have you covered. With our Full Interior + Spill
              Guard service you will be getting our Full Interior service to clean up all of the mess, but we will also make future messes less of an issue with
              our Interior Ceramic Coating leaving a layer of protection between messes and any surface in your vehicle!
            </p>
            <a href="/services/exterior" className="aside-link text-medium">
              Exterior Decon Wash
            </a>
            <p className="mt-0">
              Our Exterior Decon Wash will thoroughly clean the exterior of your vehicle with our tried and true cleaning processes. Topped off with a ceramic
              spray for an extra layer of protection and shine. Combine this with our Interior Cleaning service to get a full revamp on your car!
            </p>
          </div>

          <h3 className="text-large">Other services that we offer at our shop (Buckley).</h3>
          <div className="text-left">
            <a href="/services/exterior-seal" className="aside-link text-medium">
              Exterior Seal & Shine
            </a>
            <p className="mt-0">
              Our Seal and Shine service offers everything from our Exterior Decon Wash, a full vehicle polish, windshield coating, and 6 month ceramic spray.
              This really is the best deal if you want light scratches removed from your vehicle, and a full year of protection! The results from this service
              have been stunning us as well as our customers ever since we introduced it!
            </p>
            <a href="/services/exterior-correct" className="aside-link text-medium">
              Exterior Correct & Protect
            </a>
            <p className="mt-0">
              Our most involved and detailed exterior service that we offer. If you truly want the best shine and protection from your car then this is the
              package to choose. Everything from our Exterior Decon Wash, the windshield coating from our Exterior Seal & Shine, a full vehicle Single Stage
              paint correction, all topped off with a 5 year ceramic coating. The process takes up to 2 days and we take great pride in the results from it,
              taking our time at every edge and corner making sure everything turns out as good as possible!
            </p>
          </div>

          <a href="/contact" className="quote-btn location-quote-btn">
            Get A Free Quote
          </a>
        </div>
      </div>

      <div>
        <div className="pricing__heading-container text-center">
          <h3 className="pricing__heading">Our {currPackage} Pricing</h3>
          <strong className="pricing__subheading">Select the package and vehicle size below to get a quick price estimate for your vehicle.</strong>
          <div style={{ margin: "0 auto" }}>
            <select className="text-input pricing__select" name="package" id="package" onChange={(e) => setCurrPackage(e.target.value)}>
              <option value="Swift Interior">Swift Interior</option>
              <option value="Full Interior">Full Interior</option>
              <option value="Interior + Spill Guard">Interior + Spill Guard</option>
              <option value="Exterior Wash">Exterior Decon Wash</option>
              <option value="Exterior Seal">Exterior Seal & Shine</option>
              <option value="Exterior Correct">Exterior Correct & Protect</option>
            </select>
          </div>
        </div>

        {currComponent}

        <p className="text-medium text-center">
          See more details about our {currPackage} service{" "}
          <a href={`/services/${currLink}`} className="aside-link">
            here
          </a>
        </p>
      </div>

      <div>
        <h3 style={{ marginTop: "3rem" }} className="text-large text-center">
          Check out some of the results from our services
        </h3>
        <div className="mini-grid">
          <Zoom>
            <div
              className="card"
              style={{
                backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/5c7fc46a-ada8-4ee1-a95f-3faaf47ded00/public')`
              }}
            ></div>
          </Zoom>
          <Zoom>
            <div
              className="card"
              style={{
                backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/24656e79-2a98-495c-99f6-3e65665c5300/public')`
              }}
            ></div>
          </Zoom>
          <Zoom>
            <div
              className="card"
              style={{
                backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/ff2d836c-23d3-43fe-4f5c-844e5fb2a100/public')`
              }}
            ></div>
          </Zoom>
          <Zoom>
            <div
              className="card"
              style={{
                backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/4b286353-ec88-4c47-225f-5890ed674000/public')`
              }}
            ></div>
          </Zoom>
          <Zoom>
            <div
              className="card"
              style={{
                backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/f6170666-70f6-487c-4db8-26125453df00/public')`
              }}
            ></div>
          </Zoom>
          <Zoom>
            <div
              className="card"
              style={{
                backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/b36b25e0-3f4f-41e9-75ce-5f1245ec6500/public')`
              }}
            ></div>
          </Zoom>
          <Zoom>
            <div
              className="card"
              style={{
                backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/6e0ddf6d-7ccb-4ee8-5ae1-bdc6574eae00/public')`
              }}
            ></div>
          </Zoom>
          <Zoom>
            <div
              className="card"
              style={{
                backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/8c1574b9-7517-4c50-6b36-133352ab0a00/public')`
              }}
            ></div>
          </Zoom>
          <Zoom>
            <div
              className="card"
              style={{
                backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/6fb3a112-d77a-41fb-e7ec-728b2185b600/public')`
              }}
            ></div>
          </Zoom>
        </div>
      </div>

      <div className="locationpage-section no-bg">
        <div className="location-gallery-container">
          <h3 className="text-large">Our Gallery Pages:</h3>
          <div>
            <a href="/gallery/interior" className="aside-link text-medium">
              Full Interior Gallery
            </a>
            <br />
            <a href="/gallery/exterior" className="aside-link text-medium">
              Exterior Wash Gallery
            </a>
            <br />
            <a href="/gallery/seal" className="aside-link text-medium">
              Seal & Shine Gallery
            </a>
            <br />
            <a href="/gallery/correct" className="aside-link text-medium">
              Correct & Protect Gallery
            </a>
            <br />
          </div>
        </div>
      </div>
      <a href="/contact" className="quote-btn location-quote-btn">
        Get A Free Quote Today!
      </a>
    </div>
  );
}
