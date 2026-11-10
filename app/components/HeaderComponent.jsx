"use client";
import Image from "next/image";
import { Button } from "./ui/Button";

export default function HeaderComponent({ imageUrl, title, description, secondaryUrl }) {
  return (
    <>
      <div className="cover">
        <Image src={imageUrl} alt={title} quality={75} priority fill sizes="100vw" className="object-cover" />
      </div>
      <div className="servicepage-header">
        <div>
          <h1 className="text-center lg:text-left text-accent bold text-shadow font-heading">{title}</h1>
          <h2 className="page-subheading lg:max-w-[550px]">{description}</h2>
          <div className="header-buttons">
            <Button href="/booking" size="lg">
              Book Online
            </Button>
            <Button href="/inquiry" variant="secondary" size="lg" className="bg-zinc-950/40">
              Send an Inquiry
            </Button>
          </div>
        </div>
        <div className="service-image">
          <Image
            src={secondaryUrl}
            sizes="(max-width: 1349px) 0, (min-width: 1350px) 500px"
            alt={`${title} example`}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </>
  );
}
