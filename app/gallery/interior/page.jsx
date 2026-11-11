import { GalleryPage } from "../../components/GalleryPage";

export const metadata = {
  title: "Full Interior Detailing Gallery",
  description: "Browse before-and-after photos of our deep interior detailing, stain extraction, pet hair removal, and leather conditioning results.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/gallery/interior" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/gallery/interior",
    images: [{ url: "/assets/images/interior/driverNewLexus.jpg", alt: "Driver side interior of a Lexus detailed by Dirt-Less Detailing" }]
  }
};

// Photos for this gallery. The layout lives in app/components/GalleryPage.tsx.
const baImages = [
  { src: "/assets/images/before&afters/badInteriorBA.png" },
  { src: "/assets/images/before&afters/cupholderBA.jpg" },
  { src: "/assets/images/before&afters/trunkBA2.jpg" },
  { src: "/assets/images/before&afters/floorBA.jpg" },
  { src: "/assets/images/before&afters/doorPanelBA.jpg" },
  { src: "/assets/images/before&afters/trunkBA.jpg" },
  { src: "/assets/images/before&afters/dogHairBA.jpg" },
  { src: "/assets/images/before&afters/seatsBA.jpg" },
  { src: "/assets/images/before&afters/badInteriorBA.png" }
];

const images = [
  { src: "/assets/images/interior/wranglerIntCeramic.jpg" },
  { src: "/assets/images/interior/driver22.jpg" },
  { src: "/assets/images/interior/driver23.jpg" },
  { src: "/assets/images/interior/rear16.jpg" },
  { src: "/assets/images/interior/pass6.jpg" },
  { src: "/assets/images/interior/accO.jpg" },
  { src: "/assets/images/interior/center2.jpg" },
  { src: "/assets/images/interior/center4.jpg" },
  { src: "/assets/images/interior/centerWhiteRam.jpg" },
  { src: "/assets/images/interior/door1.jpg" },
  { src: "/assets/images/interior/door3.jpg" },
  { src: "/assets/images/interior/doorRenegade.jpg" },
  { src: "/assets/images/interior/driver1.jpg" },
  { src: "/assets/images/interior/driver3.jpg" },
  { src: "/assets/images/interior/driver5.jpg" },
  { src: "/assets/images/interior/driver6.jpg" },
  { src: "/assets/images/interior/driver12.jpg" },
  { src: "/assets/images/interior/driver14.jpg" },
  { src: "/assets/images/interior/driver15.jpg" },
  { src: "/assets/images/interior/driver16.jpg" },
  { src: "/assets/images/interior/driver18.jpg" },
  { src: "/assets/images/interior/driver20.jpg" },
  { src: "/assets/images/interior/driverCivic.jpg" },
  { src: "/assets/images/interior/driverMazdaspeed.jpg" },
  { src: "/assets/images/interior/driverNewLexus.jpg" },
  { src: "/assets/images/interior/driverPorsche.jpg" },
  { src: "/assets/images/interior/driverTesla.jpg" },
  { src: "/assets/images/interior/driverWhiteRam.jpg" },
  { src: "/assets/images/interior/ferrariInt.jpg" },
  { src: "/assets/images/interior/ferrariInt2.jpg" },
  { src: "/assets/images/interior/jamb1.jpg" },
  { src: "/assets/images/interior/jamb4.jpg" },
  { src: "/assets/images/interior/jambWhiteRam.jpg" },
  { src: "/assets/images/interior/pass2.jpg" },
  { src: "/assets/images/interior/pass3.jpg" },
  { src: "/assets/images/interior/passfordGT.jpg" },
  { src: "/assets/images/interior/passRenegade.jpg" },
  { src: "/assets/images/interior/rear1.jpg" },
  { src: "/assets/images/interior/rear2.jpg" },
  { src: "/assets/images/interior/rear4.jpg" },
  { src: "/assets/images/interior/rear10.jpg" },
  { src: "/assets/images/interior/rear11.jpg" },
  { src: "/assets/images/interior/rear12.jpg" },
  { src: "/assets/images/interior/rear13.jpg" },
  { src: "/assets/images/interior/rear14.jpg" },
  { src: "/assets/images/interior/rearWhiteRam.jpg" },
  { src: "/assets/images/interior/trunk1.jpg" },
  { src: "/assets/images/interior/trunk2.jpg" },
  { src: "/assets/images/interior/trunkLexus.jpg" }
];

export default function InteriorGallery() {
  return (
    <GalleryPage
      hero={{
        title: "Interior detailing gallery",
        lead: "We've cleaned it all, even the worst of interiors. Here are some of our favorites.",
        image: "/assets/images/interior/driverNewLexus.jpg",
        alt: "Cleaned interior of a 2024 Lexus SUV"
      }}
      services={[
        { label: "Full Interior Detail", href: "/services/interior" },
        { label: "Interior Restoration", href: "/services/interior-restoration" }
      ]}
      altLabel="Full Interior Detail"
      beforeAfter={baImages}
      results={images}
    />
  );
}
