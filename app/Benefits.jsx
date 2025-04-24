"use client";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import starJSON from "../public/assets/icons/starJSON.json";
import calendarJSON from "../public/assets/icons/calendarJSON.json";
import carJSON from "../public/assets/icons/carJSON.json";
import locationJSON from "../public/assets/icons/locationPing.json";

// Import Lottie dynamically with SSR disabled
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Benefits() {
  const calendarRef = useRef(null);
  const carRef = useRef(null);
  const starRef = useRef(null);
  const mapRef = useRef(null);

  // Add state to track if we're in the browser
  const [isBrowser, setIsBrowser] = useState(false);

  // Set isBrowser to true once component mounts (client-side only)
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  // Only render the component on the client side
  if (!isBrowser) {
    return null; // Return null during server-side rendering
  }

  return (
    <div className="header-icons-container screen-flex">
      <div>
        <Lottie
          animationData={calendarJSON}
          lottieRef={calendarRef}
          style={{ width: "70px", gridArea: "icon" }}
          loop={0}
          onMouseEnter={() => {
            calendarRef.current.stop();
            calendarRef.current.play();
          }}
          onMouseLeave={() => calendarRef.current.goToAndStop(60, true)}
        />
        <p className="header-desc">9 Years</p>
        <span className="header-desc-span">Detailing</span>
      </div>
      <div>
        <Lottie
          animationData={carJSON}
          lottieRef={carRef}
          style={{ width: "70px", height: "70px", gridArea: "icon" }}
          loop={0}
          onMouseEnter={() => {
            carRef.current.stop();
            carRef.current.play();
          }}
          onMouseLeave={() => carRef.current.goToAndStop(90, true)}
        />
        <p className="header-desc">1500+</p>
        <span className="header-desc-span">Details Done</span>
      </div>
      <div>
        <Lottie
          animationData={starJSON}
          lottieRef={starRef}
          style={{ width: "70px", gridArea: "icon" }}
          loop={0}
          onMouseEnter={() => {
            starRef.current.stop();
            starRef.current.play();
          }}
          onMouseLeave={() => starRef.current.goToAndStop(20, true)}
        />
        <p className="header-desc text-left">40+</p>
        <span className="header-desc-span">5 Star Reviews</span>
      </div>
      <div>
        <Lottie
          animationData={locationJSON}
          lottieRef={mapRef}
          style={{ width: "70px", gridArea: "icon" }}
          loop={0}
          onMouseEnter={() => {
            mapRef.current.stop();
            mapRef.current.play();
          }}
          onMouseLeave={() => mapRef.current.goToAndStop(80, true)}
        />
        <p className="header-desc text-left">In-Shop</p>
        <span className="header-desc-span text-left">or Mobile Services</span>
      </div>
    </div>
  );
}
