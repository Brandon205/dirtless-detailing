"use client";
import { useState, useEffect } from "react";
import HeaderComponent from "../../components/HeaderComponent";
import FaqItem from "../../components/FaqItem";
import MosaicGallery from "../../components/MosaicGallery";
import Image from "next/image";
import BaseSchema from "../../jsonSchemas/BaseSchema";

const faqItems = [
  {
    title: "What does your ORV detailing package include?",
    description:
      "Our ORV Detailing will include cleaning/washing the full interior and exterior, using foaming chemicals that are safe to use on all surfaces that's still strong enough to ensure no dirt sticks behind!"
  },
  {
    title: "Do you offer polishing for boats and RV's?",
    description:
      "Not usually as of right now, only washes and boat interiors. We have done it in the past though as you can see in some of the photos, so give us a call and we might be able to work something out. Our typical pricing for that is starting around $120/ft. We may formally offer polishing and ceramic coating services for both in the future, so be sure to check back!"
  },
  {
    title: "Can you come to me for these services?",
    description: "Yes! We can perform all of these services at your home, all we will need is an electrical outlet and water spigot."
  },
  {
    title: "What cities do you service?",
    description:
      "With our mobile service we can go out to: Bonney Lake, Buckley, Sumner, Enumclaw, Puyallup, Lake Tapps, Federal Way, Orting, South Prairie, Black Diamond, Milton, Edgewood, and Graham."
  }
];

// const serviceSteps = {
//   "Boat Interior Detail": (
//     <>
//       <h2 className="cleaning-process-title pb-8 text-center">Our Boat Interior Detail Process</h2>
//       <motion.ol className="list" variants={containerVariant} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
//         <motion.li className="item" variants={oddVariant}>
//           <div className="step-number-container">
//             <h3 className="step-number">1</h3>
//           </div>
//           <div className="step-container">
//             <h4 className="step-title">Blow out Interior</h4>
//             <p className="step-desc">Thorough blow-out to remove a majority of the debris making the vacuuming step easier</p>
//           </div>
//         </motion.li>
//         <motion.li className="item" variants={evenVariant}>
//           <div className="step-number-container">
//             <h3 className="step-number">2</h3>
//           </div>
//           <div className="step-container">
//             <h4 className="step-title">Vacuum</h4>
//             <p className="step-desc">All surfaces and cubbies/storage areas vacuumed out</p>
//           </div>
//         </motion.li>
//         <motion.li className="item" variants={oddVariant}>
//           <div className="step-number-container">
//             <h3 className="step-number">3</h3>
//           </div>
//           <div className="step-container">
//             <h4 className="step-title">Cleaning</h4>
//             <p className="step-desc">All surfaces/seats/plastics hit with a strong cleaner to remove any mildew, dirt, and dust that has built up over time</p>
//           </div>
//         </motion.li>
//         <motion.li className="item" variants={evenVariant}>
//           <div className="step-number-container">
//             <h3 className="step-number">4</h3>
//           </div>
//           <div className="step-container">
//             <h4 className="step-title">Clean Windows</h4>
//             <p className="step-desc">All windows, mirrors, and glass cleaned and left streak-free</p>
//           </div>
//         </motion.li>
//       </motion.ol>
//     </>
//   ),
//   "Boat Exterior Detail": (
//     <>
//       <h2 className="cleaning-process-title pb-8 text-center">Our Boat Exterior Detail Process</h2>
//       <motion.ol className="list" variants={containerVariant} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
//         <motion.li className="item" variants={oddVariant}>
//           <div className="step-number-container">
//             <h3 className="step-number">1</h3>
//           </div>
//           <div className="step-container">
//             <h4 className="step-title">Foam Cannon Wash</h4>
//             <p className="step-desc">Using a foam cannon and pressure washer, completely wash the exterior</p>
//           </div>
//         </motion.li>
//         <motion.li className="item" variants={evenVariant}>
//           <div className="step-number-container">
//             <h3 className="step-number">2</h3>
//           </div>
//           <div className="step-container">
//             <h4 className="step-title">Trailer Wash</h4>
//             <p className="step-desc">Full wash and tire dressing on the trailer (if it's on one instead of a lift)</p>
//           </div>
//         </motion.li>
//         <motion.li className="item" variants={oddVariant}>
//           <div className="step-number-container">
//             <h3 className="step-number">3</h3>
//           </div>
//           <div className="step-container">
//             <h4 className="step-title">Ceramic Spray Sealant</h4>
//             <p className="step-desc">Application of a ceramic spray sealant to protect the exterior for around 3 months of use</p>
//           </div>
//         </motion.li>
//       </motion.ol>
//     </>
//   ),
//   "RV/Trailer Exterior Detail": (
//     <>
//       <h2 className="cleaning-process-title pb-8 text-center">Our RV/Trailer Exterior Process</h2>
//       <motion.ol className="list" variants={containerVariant} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
//         <motion.li className="item" variants={oddVariant}>
//           <div className="step-number-container">
//             <h3 className="step-number">1</h3>
//           </div>
//           <div className="step-container">
//             <h4 className="step-title">Foam Cannon Wash</h4>
//             <p className="step-desc">
//               Full vehicle wash using a foam cannon and pressure washer to easily remove built up pollen and dirt from all cracks and corners
//             </p>
//           </div>
//         </motion.li>
//         <motion.li className="item" variants={evenVariant}>
//           <div className="step-number-container">
//             <h3 className="step-number">2</h3>
//           </div>
//           <div className="step-container">
//             <h4 className="step-title">Wheels and Tires</h4>
//             <p className="step-desc">Cleaning of wheels, wheel barrels, and wheel wells</p>
//           </div>
//         </motion.li>
//         <motion.li className="item" variants={oddVariant}>
//           <div className="step-number-container">
//             <h3 className="step-number">3</h3>
//           </div>
//           <div className="step-container">
//             <h4 className="step-title">Ceramic Spray Coating</h4>
//             <p className="step-desc">While drying the RV/Trailer we will apply a ceramic spray that will protect for 3-6 months</p>
//           </div>
//         </motion.li>
//         <motion.li className="item" variants={evenVariant}>
//           <div className="step-number-container">
//             <h3 className="step-number">4</h3>
//           </div>
//           <div className="step-container">
//             <h4 className="step-title">Tar and Sap removal</h4>
//             <p className="step-desc">Carefully remove all stubborn tar and sap that the wash didn't get</p>
//           </div>
//         </motion.li>
//         <motion.li className="item" variants={oddVariant}>
//           <div className="step-number-container">
//             <h3 className="step-number">5</h3>
//           </div>
//           <div className="step-container">
//             <h4 className="step-title">Dressing</h4>
//             <p className="step-desc">Dress tires and wheel wells for a nice new tire shine look</p>
//           </div>
//         </motion.li>
//       </motion.ol>
//     </>
//   ),
//   "ORV Detail": (
//     <>
//       <h2 className="cleaning-process-title pb-8 text-center">Our ORV Detailing Process</h2>
//       <motion.ol className="list" variants={containerVariant} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
//         <motion.li className="item" variants={oddVariant}>
//           <div className="step-number-container">
//             <h3 className="step-number">1</h3>
//           </div>
//           <div className="step-container">
//             <h4 className="step-title">Foam Cannon Wash</h4>
//             <p className="step-desc">
//               Full Exterior wash using a foam cannon and pressure washer to easily remove built up dirt/grime from all cracks and corners.
//             </p>
//           </div>
//         </motion.li>
//         <motion.li className="item" variants={evenVariant}>
//           <div className="step-number-container">
//             <h3 className="step-number">2</h3>
//           </div>
//           <div className="step-container">
//             <h4 className="step-title">Wheels and Tires</h4>
//             <p className="step-desc">Cleaning of wheels, wheel barrels, and wheel wells</p>
//           </div>
//         </motion.li>
//         <motion.li className="item" variants={oddVariant}>
//           <div className="step-number-container">
//             <h3 className="step-number">3</h3>
//           </div>
//           <div className="step-container">
//             <h4 className="step-title">Ceramic Spray Coating</h4>
//             <p className="step-desc">While drying we will apply a ceramic spray that will protect for 3-6 months</p>
//           </div>
//         </motion.li>
//         <motion.li className="item" variants={evenVariant}>
//           <div className="step-number-container">
//             <h3 className="step-number">4</h3>
//           </div>
//           <div className="step-container">
//             <h4 className="step-title">Interior Cleaning</h4>
//             <p className="step-desc">
//               Depending on the interior we may wash it while we wash the outside, but if not we will clean it out here using things similar to our normal
//               Interior Cleaning Process.
//             </p>
//           </div>
//         </motion.li>
//         <motion.li className="item" variants={evenVariant}>
//           <div className="step-number-container">
//             <h3 className="step-number">4</h3>
//           </div>
//           <div className="step-container">
//             <h4 className="step-title">Tar and Sap removal</h4>
//             <p className="step-desc">Carefully remove all stubborn tar and sap that the wash didn't get</p>
//           </div>
//         </motion.li>
//         <motion.li className="item" variants={oddVariant}>
//           <div className="step-number-container">
//             <h3 className="step-number">5</h3>
//           </div>
//           <div className="step-container">
//             <h4 className="step-title">Dressing</h4>
//             <p className="step-desc">Dress tires and wheel wells for a nice new tire shine look</p>
//           </div>
//         </motion.li>
//       </motion.ol>
//     </>
//   )
// };

export default function Recreational() {
  // const [currService, setCurrService] = useState("Boat Interior Detail");
  // const [length, setLength] = useState(15);
  const [smallScreen, setSmallScreen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  // const [imageIndex, setImageIndex] = useState(2);

  useEffect(() => {
    if (window.innerWidth < 979) {
      setSmallScreen(true);
    } else {
      setSmallScreen(false);
    }
  }, []);

  return (
    <section className="service-content-container">
      <BaseSchema
        serviceImage="/assets/images/recreational/RVWash.jpg"
        url="https://www.dirtlessdetailing.com/services/recreational"
        makesOffer={{
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "RV/Trailer and Boat Detailing",
            "description": "At Dirt-Less Detailing we aren't limited to just cars and trucks! Book any boats, RV's, Trailers, or ORV's for a detail today!",
            "areaServed": "Buckley, Bonney Lake, and surrounding areas.",
            "serviceType": "RV/Trailer and Boat Detailing"
          }
        }}
      />
      <HeaderComponent
        imageUrl="/assets/images/recreational/RVWash.jpg"
        title="Boats, RV's, Trailer, and ORV Detailing"
        description="Bring any of your recreational vehicles back to life with our new detailing services for them!"
        secondaryUrl="/assets/images/recreational/sidexsideFoam.jpg"
      />

      <div className="main-content-container">
        <div className="w-full">
          <div className="flex justify-center gap-8 flex-col lg:flex-row">
            <div className="max-w-[450px] w-full bg-zinc-800 text-white rounded-lg shadow-sm border border-zinc-900 p-6 mb-8">
              <h3 className="font-bold text-2xl text-primary">RV/TRAILER DETAILING</h3>
              {/* <p className="font-bold text-2xl text-primary">HEAVY USE & PET HAIR</p> */}
              <div className="w-auto h-[250px] relative my-4">
                <Image
                  src="/assets/images/recreational/toyHaulerAfter.jpg"
                  alt="Before and after of a heavily neglected interior"
                  fill
                  objectFit="cover"
                  className="mb-4 rounded-lg"
                />
              </div>
              <strong className="font-bold text-2xl text-primary">$10/foot</strong>
              <p className="text-sm text-gray-400">$10/foot Interior, $10/foot Exterior</p>
              <p className="text-left">
                Perfect for right after you are getting it out for the year after a couple of months sitting in storage, or right before going into storage to
                make sure that nothing that's on it now eats into the materials.
              </p>
            </div>
            <div className="max-w-[400px] w-full bg-zinc-800 text-white rounded-lg shadow-sm border border-zinc-900 p-6 mb-8">
              <h3 className="font-bold text-2xl text-primary">BOAT DETAILING:</h3>
              {/* <p className="font-bold text-2xl text-primary">MOLD & BIOHAZARD</p> */}
              <div className="w-auto h-[250px] relative my-4">
                <Image
                  src="/assets/images/recreational/Boatinterior.jpg"
                  alt="Moldy rear van seat before and after"
                  fill
                  objectFit="cover"
                  className="mb-4 rounded-lg"
                />
              </div>
              <strong className="font-bold text-2xl text-primary">$10/foot</strong>
              <p className="text-sm text-gray-400">$10/foot Interior, $10/foot Exterior</p>
              <p className="text-left">
                Get your boat ready for the summer with our Boat Detailing Services. With our simple $10/foot pricing we'll vacuum, blow, and clean out all main
                compartments and protect them with our specialized cleaners. On the exterior side of things we'll give it a thorough wash and top it with a
                ceramic spray sealant to ensure it stays cleaner throughout the year!
              </p>
            </div>
            <div className="max-w-[400px] w-full bg-zinc-800 text-white rounded-lg shadow-sm border border-zinc-900 p-6 mb-8">
              <h3 className="font-bold text-2xl text-primary">ORV DETAILING</h3>
              {/* <p className="font-bold text-2xl text-primary">OLD VEHICLE/BARN FINDS</p> */}
              <div className="w-auto h-[250px] relative my-4">
                <Image
                  src="/assets/images/recreational/sidexside.png"
                  alt="Photo of the interior of an old Ferrari Interior"
                  fill
                  objectFit="cover"
                  className="mb-4 rounded-lg"
                />
              </div>
              <strong className="font-bold text-2xl text-primary">QUOTE REQUIRED*</strong>
              <p className="text-sm text-gray-400">*depending on size/condition</p>
              <p className="text-left">
                We're in the perfect area of Washington to own Dirtbikes, Quads, Side by Sides and other ORV's so we've washed many of them, and know that to
                get everything takes a ton of attention to detail, and the right chemicals. We can do the interior and exterior and always top it with a ceramic
                spray sealant in hopes to keep at least some of the dirt and mud off next time you bring it out. So if you want yours done feel free to give us
                a call!
              </p>
            </div>
          </div>

          <div className="w-full bg-zinc-800 flex text-white rounded-lg shadow-sm border border-zinc-900 p-6 mb-8 max-w-[1315px] mx-auto text-left gap-4 flex-col lg:flex-row justify-center lg:justify-start">
            <div className="w-full h-[250px] relative">
              <Image
                src="/assets/images/recreational/motorcycleFoam.jpg"
                alt="Motorcycle during a wash with foam on it"
                fill
                objectFit="cover"
                className="mb-4 object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold text-2xl text-primary mb-2">NOTES ON OUR RECREATIONAL SERVICES</h3>
              <p>
                At this point we don't offer polishing on boats, RVs/Trailers, or ORV's though we may in the future or in very specific cases. If you have
                another vehicle that you don't see listed here let us know and we can most likely figure out a price and way to get it detailed for you. With
                just our detailing equipment we've even done things like roof tops, solar panels, various car parts like a full rear axle, so give us a call or
                text and we'll see if we can work something out!
              </p>
              <div className="flex justify-start gap-8 mt-4 flex-col lg:flex-row">
                <a
                  href="sms:+12532529758"
                  className="text-white hover:underline text-xl font-semibold flex items-center gap-1 mt-2 bg-primary py-2 px-6 rounded-lg w-max"
                >
                  <span>Call/Text any questions: (252) 252-9758</span>
                </a>
                <a
                  href="/contact"
                  className="text-white border-primary border-2 hover:underline text-xl font-semibold flex items-center gap-1 mt-2 py-2 px-6 rounded-lg w-max"
                >
                  <span>Contact Us</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 lg:p-8 bg-gradient-to-r from-zinc-800 to-zinc-700 rounded-lg border border-accent border-opacity-30 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">Have something that needs a good detail?</h3>
            <p className="text-gray-300 mb-6 text-lg">
              If you have any questions or want a free quote on our Recreational detailing services click Get Started to get in touch!
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-accent hover:bg-accent/90 text-black font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent/50"
            >
              Get Started
            </a>
          </div>

          <div id="faq" style={{ width: "90%", margin: "0 auto", paddingTop: "2rem" }}>
            <div className="new-heading-container text-white">
              <strong className="above-heading text-3xl">Recreational Detailing FAQ</strong>
              <h3 className="new-heading text-xl lg:text-2xl">Answers for the most commonly asked questions about ceramic coatings.</h3>
            </div>
            <div className="faq-container" style={{ color: "white" }} itemScope itemType="https://schema.org/FAQPage">
              {faqItems.map((item, i) => (
                <FaqItem key={i} i={i} expanded={expanded} setExpanded={setExpanded} title={item.title} description={item.description} isMobile={smallScreen} />
              ))}
            </div>
          </div>

          <p style={{ fontSize: "2rem", margin: 0, color: "white" }}>End Results</p>
          <h3 className="pricing__heading">Recreational Perfection</h3>
          <p className="pricing__subtext">Whether it's taken far on the road, or far off the road, we've got you covered when it comes to cleaning it up!</p>
          <div>
            <MosaicGallery
              images={[
                { src: "/assets/images/recreational/nautiqueInt.jpg", alt: "" },
                { src: "/assets/images/recreational/rvRoofDuring.jpg", alt: "" },
                { src: "/assets/images/recreational/RVPolishBA.jpg", alt: "" },
                { src: "/assets/images/recreational/jetskis.jpeg", alt: "" },
                { src: "/assets/images/recreational/RBoat.jpg", alt: "" },
                { src: "/assets/images/recreational/rvInt.png", alt: "" }
              ]}
            />
          </div>
        </div>
        {/* <div className="pricing__heading-container text-center">
          <h3 className="pricing__heading">Our {currService} Pricing</h3>
          <strong className="pricing__subheading">Select a length below to get a quick price estimate.</strong>
          <div style={{ margin: "0 auto" }}>
            <select className="text-input pricing__select" name="package" id="package" onChange={(e) => setCurrService(e.target.value)}>
              <option value="Boat Interior Detail">Boat Interior Detail</option>
              <option value="Boat Exterior Detail">Boat Exterior Detail</option>
              <option value="RV/Trailer Exterior Detail">RV/Trailer Exterior Detail</option>
              <option value="ORV Detail">ORV Detailing</option>
            </select>
          </div>
        </div> */}
        {/* <BoatPricing
          length={length}
          setLength={setLength}
          currService={currService}
          setCurrService={setCurrService}
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
        /> */}
      </div>

      {/* <div className="text-center">
        {serviceSteps[currService]}
        <br className="extra-space" />

        <p style={{ fontSize: "2rem", margin: 0, color: "white" }}>Stunning Results</p>
        <h3 className="pricing__heading">
          {currService === "RV/Trailer Exterior Detail"
            ? "Ready for Camping."
            : currService === "ORV Detail"
            ? "Remove ALL the Dirt From Your ORV"
            : "Get Your Boat Ready for Summer."}
        </h3>
        <p className="pricing__subtext">
          {currService === "RV/Trailer Exterior Detail"
            ? "After years of mess from having an RV in Washington we'll be sure to bring it back to life."
            : currService === "ORV Detail"
            ? "We have the chemicals and training to make sure no spot gets missed."
            : "Leave it to us to remove the nastiness that builds up over the winter."}
        </p>

        {currService === "ORV Detail" ? (
          <div className="w-11/12 lg:w-3/4 max-w-[1200px] mx-auto">
            <BeforeAfterSlider
              beforeImage="/assets/images/before&afters/sideBySideBefore.jpg"
              afterImage="/assets/images/before&afters/sideBySideAfter.jpg"
              aspectRatio="16/9"
            />
          </div>
        ) : currService === "RV/Trailer Exterior Detail" ? (
          <div className="w-11/12 lg:w-3/4 max-w-[1200px] mx-auto">
            <BeforeAfterSlider
              beforeImage="/assets/images/before&afters/winnebagoB.jpg"
              afterImage="/assets/images/before&afters/winnebagoA.jpg"
              aspectRatio="16/9"
            />
          </div>
        ) : (
          <div className="slider-container w-full mx-auto">
            <Image src="/assets/images/showcase/detailed-boat.jpg" alt="Detailed Boat" fill className="object-cover rounded-3xl" />
          </div>
        )}

        <h3 className="text-3xl lg:text-4xl text-white pb-8 py-16">Frequently Asked Questions</h3>
        <div className="faq-container text-white w-11/12 max-w-screen-xl mx-auto" itemScope itemType="https://schema.org/FAQPage">
          {faqItems.map((item, i) => (
            <FaqItem key={i} i={i} expanded={expanded} setExpanded={setExpanded} title={item.title} description={item.description} isMobile={smallScreen} />
          ))}
        </div>
      </div> */}
    </section>
  );
}

//            length={length}
//           setLength={setLength}
//           currService={currService}
//           setCurrService={setCurrService}
//           imageIndex={imageIndex}
//           setImageIndex={setImageIndex}

// function BoatPricing({ length, setLength, currService, setCurrService, imageIndex, setImageIndex }) {
//   const [animate, setAnimate] = useState(false);

//   useEffect(() => {
//     setTimeout(() => {
//       setAnimate(true);
//     }, 1500);
//   }, []);

//   useEffect(() => {
//     // Boat Exterior Detail, Boat Interior Detail, RV/Trailer Exterior Detail, ORV Detail
//     if (currService === "Boat Exterior Detail" || (currService === "Boat Interior Detail" && length >= 15)) {
//       // Longer boat image
//       setImageIndex(1);
//     } else if (currService === "Boat Exterior Detail" || currService === "Boat Interior Detail") {
//       // Jet ski image
//       setImageIndex(0);
//     } else if (currService === "RV/Trailer Exterior Detail") {
//       // RV Image
//       setImageIndex(2);
//     } else if (currService === "ORV Detail") {
//       // Side by Side Image
//       setImageIndex(3);
//     }

//     if (currService === "Boat Interior Detail" && length < 15) {
//       setLength(15);
//     }
//   }, [length, currService]);

//   return (
//     <div className="pricing__container">
//       <div className="pricing__img">
//         <Image src={imagesArr[imageIndex]} alt="Dirt-Less Detailing sizing" fill className="object-cover rounded-3xl" />
//       </div>
//       {currService === "ORV Detail" ? (
//         ""
//       ) : (
//         <select onChange={(e) => setLength(e.target.value)} className="vehicle__select" value={length}>
//           {currService === "Boat Exterior Detail" ? (
//             <>
//               <option value={5}>5'</option>
//               <option value={6}>6'</option>
//               <option value={7}>7'</option>
//               <option value={8}>8'</option>
//               <option value={9}>9'</option>
//               <option value={10}>10'</option>
//               <option value={11}>11'</option>
//               <option value={12}>12'</option>
//               <option value={13}>13'</option>
//               <option value={14}>14'</option>
//             </>
//           ) : (
//             ""
//           )}
//           <option value={15}>15'</option>
//           <option value={16}>16'</option>
//           <option value={17}>17'</option>
//           <option value={18}>18'</option>
//           <option value={19}>19'</option>
//           <option value={20}>20'</option>
//           <option value={21}>21'</option>
//           <option value={22}>22'</option>
//           <option value={23}>23'</option>
//           <option value={24}>24'</option>
//           <option value={25}>25'</option>
//           <option value={26}>26'</option>
//           <option value={27}>27'</option>
//           <option value={28}>28'</option>
//           <option value={29}>29'</option>
//           <option value={30}>30'</option>
//           <option value={31}>31'</option>
//           <option value={32}>32'</option>
//           <option value={33}>33'</option>
//           <option value={34}>34'</option>
//           <option value={35}>35'</option>
//           <option value={36}>36'</option>
//           <option value={37}>37'</option>
//           <option value={38}>38'</option>
//           <option value={39}>39'</option>
//           <option value={40}>40'+</option>
//         </select>
//       )}

//       <div className="flex flex-col justify-between items-center w-[90%] my-0 mx-auto max-w-[700px] lg:flex-row">
//         <p className="text-2xl">Your Price Estimate:</p>
//         <div className="flex flex-col items-center gap-4">
//           <strong className="pricing__pricecard-pricebox">
//             <span className="pricing__pricecard-price">
//               $
//               {animate ? (
//                 <AnimatedNumbers
//                   includeComma
//                   animateToNumber={currService === "ORV Detail" ? 250 : 10 * length}
//                   configs={[{ mass: 1, tension: 320, friction: 100 }]}
//                 ></AnimatedNumbers>
//               ) : currService === "ORV Detail" ? (
//                 250
//               ) : (
//                 10 * length
//               )}
//             </span>
//           </strong>
//           <p className="flex">{currService === "ORV Detail" ? "*Pricing may vary, contact us!" : "Pricing is $10/foot"}</p>
//         </div>
//       </div>

//       <a href="/contact" className="new-contact-btn">
//         Contact Us
//       </a>
//     </div>
//   );
// }
