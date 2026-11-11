import { GalleryPage } from "../../components/GalleryPage";

// Photos for this gallery. The layout lives in app/components/GalleryPage.tsx.
const baImages = [
  { src: "/assets/images/before&afters/carwashTruckBA.jpg" },
  { src: "/assets/images/before&afters/scratchesBA.png" },
  { src: "/assets/images/before&afters/pcBA.jpg" },
  { src: "/assets/images/before&afters/doorHandleBA.jpg" }
];

const images = [
  { src: "/assets/images/correction/wiping.jpg" },
  { src: "/assets/images/correction/wtbeads4.jpg" },
  { src: "/assets/images/correction/bMustang1.jpg" },
  { src: "/assets/images/correction/bMustang2.jpg" },
  { src: "/assets/images/correction/bmwCorrect2.jpg" },
  { src: "/assets/images/correction/carwashtruckBA.jpg" },
  { src: "/assets/images/correction/carWashTruckOutside.jpg" },
  { src: "/assets/images/correction/ceramicb528.jpg" },
  { src: "/assets/images/correction/ceramicBeads1.jpg" },
  { src: "/assets/images/correction/ceramicBeads2.jpg" },
  { src: "/assets/images/correction/ceramicBeads3.jpg" },
  { src: "/assets/images/correction/chevelle.jpg" },
  { src: "/assets/images/correction/correction1280.jpg" },
  { src: "/assets/images/correction/ferrariBadge.jpg" },
  { src: "/assets/images/correction/ferrariFL.jpg" },
  { src: "/assets/images/correction/ferrariPolishing.jpg" },
  { src: "/assets/images/correction/genesis1.jpeg" },
  { src: "/assets/images/correction/genesis2.jpeg" },
  { src: "/assets/images/correction/genesis3.jpeg" },
  { src: "/assets/images/correction/genesis4.jpeg" },
  { src: "/assets/images/correction/genesisBeads.jpg" },
  { src: "/assets/images/correction/goodguystruck.jpg" },
  { src: "/assets/images/correction/goodguystruck2.jpg" },
  { src: "/assets/images/correction/modelXOutside2.jpg" },
  { src: "/assets/images/correction/old-chevy.jpg" },
  { src: "/assets/images/correction/ponyDually.jpg" },
  { src: "/assets/images/correction/ram1.jpg" },
  { src: "/assets/images/correction/sanding.jpg" },
  { src: "/assets/images/correction/tantruck2.jpg" },
  { src: "/assets/images/correction/tantruck3.jpg" },
  { src: "/assets/images/correction/teslaclean.jpg" },
  { src: "/assets/images/correction/teslafoam.jpg" },
  { src: "/assets/images/correction/teslaparking.jpg" },
  { src: "/assets/images/correction/teslapolishing.jpg" },
  { src: "/assets/images/correction/teslaRL.jpg" },
  { src: "/assets/images/correction/teslaRR.jpg" },
  { src: "/assets/images/correction/truckBeadsNight.jpg" },
  { src: "/assets/images/correction/waterbeading1.jpg" },
  { src: "/assets/images/correction/waterbeading2.jpg" },
  { src: "/assets/images/correction/wheelFaces.jpg" }
];

export default function CorrectCoatGallery() {
  return (
    <GalleryPage
      hero={{
        title: "Exterior Correct & Coat gallery",
        lead: "The results of a multi-stage paint correction and a freshly applied ceramic coating: deep gloss, no swirls, and water that beads right off.",
        image: "/assets/images/correction/genesis2.jpeg",
        alt: "Front right view of a ceramic coated Genesis in the sun"
      }}
      services={[{ label: "Exterior Correct & Coat", href: "/services/correct" }]}
      altLabel="Exterior Correct & Coat"
      beforeAfter={baImages}
      results={images}
    />
  );
}
