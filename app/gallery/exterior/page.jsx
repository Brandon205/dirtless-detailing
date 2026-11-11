import { GalleryPage } from "../../components/GalleryPage";

export const metadata = {
  title: "Exterior Decon Wash Gallery",
  description: "View before-and-after photos and finished results from our Exterior Decon Wash details across Buckley, Bonney Lake, and Pierce County.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/gallery/exterior" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/gallery/exterior",
    images: [{ url: "/assets/images/exterior/sideofsilverram.jpg", alt: "Silver Dodge Ram showing clean finish after Exterior Decon Wash" }]
  }
};

// Photos for this gallery. The layout lives in app/components/GalleryPage.tsx.
const baImages = [
  { src: "/assets/images/before&afters/rearBA2.jpg" },
  { src: "/assets/images/before&afters/toyotaEngineBA.jpg" },
  { src: "/assets/images/before&afters/doorJambsBA.jpg" },
  { src: "/assets/images/before&afters/wheelsBA.jpg" },
  { src: "/assets/images/before&afters/wheelsBA2.jpg" },
  { src: "/assets/images/before&afters/sideBA.jpg" },
  { src: "/assets/images/before&afters/wheelsBA3.jpg" },
  { src: "/assets/images/before&afters/fordTarBA.jpg" },
  { src: "/assets/images/before&afters/teslaExteriorBA.jpg" },
  { src: "/assets/images/before&afters/WashBADiagonal.png" }
];

const images = [
  { src: "/assets/images/exterior/archDenali.jpg" },
  { src: "/assets/images/exterior/archWork1.jpg" },
  { src: "/assets/images/exterior/archWork2.jpg" },
  { src: "/assets/images/exterior/archWork3.jpg" },
  { src: "/assets/images/exterior/bluefordnight.jpg" },
  { src: "/assets/images/exterior/blueMercedesSuv.jpg" },
  { src: "/assets/images/exterior/blueTesla.jpg" },
  { src: "/assets/images/exterior/bmwZ3.jpg" },
  { src: "/assets/images/exterior/corvetteWash.jpg" },
  { src: "/assets/images/exterior/crTesla.jpg" },
  { src: "/assets/images/exterior/elCamino.jpg" },
  { src: "/assets/images/exterior/engine5c77.jpg" },
  { src: "/assets/images/exterior/engine35c8.jpg" },
  { src: "/assets/images/exterior/engineba99.jpg" },
  { src: "/assets/images/exterior/engined691.jpg" },
  { src: "/assets/images/exterior/exterior6f35.jpg" },
  { src: "/assets/images/exterior/exterior7ef7.jpg" },
  { src: "/assets/images/exterior/exterior8bf9.jpg" },
  { src: "/assets/images/exterior/exterior10c6.jpg" },
  { src: "/assets/images/exterior/exterior9976.jpg" },
  { src: "/assets/images/exterior/flameGladiator.jpg" },
  { src: "/assets/images/exterior/fordOutside.jpg" },
  { src: "/assets/images/exterior/gmcAT4X.jpg" },
  { src: "/assets/images/exterior/gmcAT4XRR.jpg" },
  { src: "/assets/images/exterior/gmcAT4XWheel.jpg" },
  { src: "/assets/images/exterior/gmcMobile.jpg" },
  { src: "/assets/images/exterior/gmcOld.jpg" },
  { src: "/assets/images/exterior/gmcOld2.jpg" },
  { src: "/assets/images/exterior/hondaFront.jpg" },
  { src: "/assets/images/exterior/hondaRear.jpg" },
  { src: "/assets/images/exterior/ironwheel1.jpg" },
  { src: "/assets/images/exterior/ironwheel2.jpg" },
  { src: "/assets/images/exterior/ironwheel3.jpg" },
  { src: "/assets/images/exterior/jeepRenegade.jpg" },
  { src: "/assets/images/exterior/jeepRenegade2.jpg" },
  { src: "/assets/images/exterior/jeepWrangler.jpg" },
  { src: "/assets/images/exterior/3doorFordRight.jpg" },
  { src: "/assets/images/exterior/acc1.jpg" },
  { src: "/assets/images/exterior/acc2.jpg" },
  { src: "/assets/images/exterior/acc4.jpg" },
  { src: "/assets/images/exterior/accDa.jpg" },
  { src: "/assets/images/exterior/accH2.jpg" },
  { src: "/assets/images/exterior/accK.jpg" },
  { src: "/assets/images/exterior/accM.jpg" },
  { src: "/assets/images/exterior/accR.jpg" },
  { src: "/assets/images/exterior/accS.jpg" },
  { src: "/assets/images/exterior/amg.jpg" },
  { src: "/assets/images/exterior/amgWorkTruck.jpg" },
  { src: "/assets/images/exterior/archCoTruck.jpg" },
  { src: "/assets/images/exterior/wheelFinished.jpg" },
  { src: "/assets/images/exterior/whiteRangeRover.jpg" },
  { src: "/assets/images/exterior/whiteSierra2.jpg" },
  { src: "/assets/images/exterior/showtruck2.jpg" }
];

export default function ExteriorWashGallery() {
  return (
    <GalleryPage
      hero={{
        title: "Exterior Decon Wash gallery",
        lead: "A showcase of our Exterior Decon Wash, from muddy trucks to daily drivers.",
        image: "/assets/images/exterior/sideofsilverram.jpg",
        alt: "Side of a silver Dodge Ram"
      }}
      services={[{ label: "Exterior Decon Wash", href: "/services/exterior" }]}
      altLabel="Exterior Decon Wash"
      beforeAfter={baImages}
      results={images}
    />
  );
}
