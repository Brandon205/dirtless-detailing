import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BeforeAfterSlider = ({ beforeImage, afterImage, aspectRatio = "16/9" }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    updateSliderPosition(e);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      updateSliderPosition(e);
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      updateSliderPosition(e.touches[0]);
    }
  };

  const updateSliderPosition = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      setSliderPosition(Math.min(Math.max(x, 0), 100));
    }
  };

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDragging, handleMouseMove]);

  return (
    <div
      ref={containerRef}
      className="relative w-full cursor-col-resize select-none"
      style={{ aspectRatio }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* Before Image (Bottom Layer) */}
      <div className="absolute inset-0">
        <Image src={beforeImage} alt="Before" draggable={false} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" priority />
      </div>

      {/* After Image (Top Layer with Clip Path) */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`
        }}
      >
        <Image src={afterImage} alt="After" draggable={false} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" priority />
      </div>

      {/* Slider Line */}
      <div className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize" style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}>
        {/* Slider Handle with Arrows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="absolute left-1 -translate-x-1">
            <ChevronLeft size={16} className="text-gray-600" />
          </div>
          <div className="absolute right-1 translate-x-1">
            <ChevronRight size={16} className="text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
