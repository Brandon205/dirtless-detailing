import React, { useState } from "react";
import Image from "next/image";
import { Card } from "./Card";
import { X } from "lucide-react";

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 py-16">
        {images.map((image, index) => (
          <Card key={index} className="overflow-hidden cursor-pointer" onClick={() => openModal(image)}>
            <div className="relative w-full pt-[100%]">
              <Image
                src={image.src}
                alt={image.alt || `Gallery ${index + 1}`}
                fill
                priority={index < 4}
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, 
                       (max-width: 768px) 50vw,
                       (max-width: 1024px) 33vw,
                       25vw"
              />
            </div>
          </Card>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="absolute inset-0 bg-black transition-opacity duration-300 ease-in-out opacity-75" />

          <div className="relative w-full max-w-6xl flex items-center justify-center h-[90vh] animate-in fade-in zoom-in duration-300">
            <button onClick={closeModal} className="z-50 absolute top-8 right-4 text-white hover:text-gray-300 transition-colors">
              <X size={32} />
            </button>

            <div className="relative w-full h-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt || "Expanded gallery image"}
                fill
                className="object-contain"
                sizes="90vw"
                priority
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
