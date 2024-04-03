"use client";
import { useState } from "react";

export default function ImageSlider({ beforeUrlId, afterUrlId, beforeOffset, afterOffset }) {
  const [slide, setSlide] = useState(50);

  return (
    <div style={{ display: "grid", marginBottom: "10vh" }} className="place-center">
      <div className="slider-container">
        <div
          style={{
            backgroundPositionY: afterOffset,
            backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/${afterUrlId}/public')`,
          }}
          className="slider-img"
        ></div>
        <div
          style={{
            width: slide + "%",
            backgroundPosition: beforeOffset,
            backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/${beforeUrlId}/public')`,
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
        <div style={{ left: slide - 3 + "%" }} className="slider-button"></div>
      </div>
    </div>
  );
}
