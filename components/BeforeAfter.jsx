"use client";
import { useState } from "react";

export default function BeforeAfter({ beforeUrl, afterUrl }) {
  const [slide, setSlide] = useState(50);

  return (
    <div style={{ display: "grid", marginBottom: "10vh" }} className="place-center">
      <div className="slider-container">
        <div
          style={{ backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/${afterUrl}/public')` }}
          className="slider-img"
        ></div>
        <div
          style={{
            width: slide + "%",
            backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/${beforeUrl}/public')`,
          }}
          className="slider-img foreground"
        ></div>
        <input
          type="range"
          min="1"
          max="100"
          value={slide}
          onChange={(e) => setSlide(Number(e.target.value))}
          className="slider-bar"
          name="slider"
          id="slider"
        />
        <div style={{ left: slide - 4 + "%" }} className="slider-button"></div>
      </div>
    </div>
  );
}
