import Image from "next/image";

export default function MosaicGallery({ images }) {
  return (
    <div className="w-full">
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 px-4 pt-4 lg:px-8 lg:pt-8">
        {images.map((image, index) => (
          <div key={index} className="break-inside-avoid pb-4">
            <div className="relative w-full aspect-[3/4] bg-zinc-700 rounded-lg overflow-hidden hover:shadow-primary shadow-xl hover:shadow-md transition-shadow duration-300">
              <Image
                src={image.src}
                alt={image.alt || `Gallery image ${index + 1}`}
                fill
                className="object-cover object-center rounded-lg"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
