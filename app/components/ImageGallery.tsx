"use client";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "../../utils/cn";

type GalleryImage = { src: string; alt?: string };

/** A grid of square photos. Click one to see it full size; arrow keys step through, Escape closes. */
export default function ImageGallery({ images, altLabel = "Gallery", className }: { images: GalleryImage[]; altLabel?: string; className?: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const altFor = (image: GalleryImage, index: number) => image.alt || `${altLabel}, photo ${index + 1}`;

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback((by: number) => setOpen((i) => (i === null ? i : (i + by + images.length) % images.length)), [images.length]);

  useEffect(() => {
    if (open === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  const current = open === null ? null : images[open];
  const many = images.length > 1;

  return (
    <>
      <div className={cn("grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4", className)}>
        {images.map((image, index) => (
          <button
            key={`${index}-${image.src}`}
            type="button"
            onClick={() => setOpen(index)}
            aria-label={`View larger: ${altFor(image, index)}`}
            className="group relative aspect-square overflow-hidden rounded-xl border border-line bg-surface"
          >
            <Image
              src={image.src}
              alt={altFor(image, index)}
              fill
              quality={80}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(min-width: 1536px) 384px, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
            />
          </button>
        ))}
      </div>

      {current && open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={altFor(current, open)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={close}
        >
          <div className="relative h-[85vh] w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <Image src={current.src} alt={altFor(current, open)} fill quality={75} className="object-contain" sizes="(max-width: 1152px) 95vw, 1152px" />
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 rounded-full bg-zinc-950/70 p-2 text-white hover:text-accent-hover"
          >
            <X className="size-7" />
          </button>
          {many && (
            <>
              <button
                type="button"
                onClick={(e) => (e.stopPropagation(), step(-1))}
                aria-label="Previous photo"
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-zinc-950/70 p-2 text-white hover:text-accent-hover md:left-6"
              >
                <ChevronLeft className="size-7" />
              </button>
              <button
                type="button"
                onClick={(e) => (e.stopPropagation(), step(1))}
                aria-label="Next photo"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-zinc-950/70 p-2 text-white hover:text-accent-hover md:right-6"
              >
                <ChevronRight className="size-7" />
              </button>
              <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-zinc-950/70 px-3 py-1 text-sm text-zinc-200">
                {open + 1} / {images.length}
              </p>
            </>
          )}
        </div>
      )}
    </>
  );
}
