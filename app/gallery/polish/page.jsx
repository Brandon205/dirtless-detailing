import { GalleryPage } from "../../components/GalleryPage";

// Photos for this gallery. The layout lives in app/components/GalleryPage.tsx.
const baImages = [
  { src: "/assets/images/before&afters/daytonaBA.jpg" },
  { src: "/assets/images/before&afters/headlightBA.jpg" },
  { src: "/assets/images/before&afters/winnebagoBA.jpg" },
  { src: "/assets/images/before&afters/f150PolishBA.jpg" }
];

const images = [
  { src: "/assets/images/polish/sprinter2.jpg" },
  { src: "/assets/images/polish/sprinter4.jpg" },
  { src: "/assets/images/polish/sprinter6.jpg" },
  { src: "/assets/images/polish/tealJeep.jpg" },
  { src: "/assets/images/polish/terryBroncoOutside.jpg" },
  { src: "/assets/images/polish/thatmustang.jpg" },
  { src: "/assets/images/polish/vanSeal.jpg" },
  { src: "/assets/images/polish/whiteTacoma.jpg" },
  { src: "/assets/images/polish/36 plymouth.jpg" },
  { src: "/assets/images/polish/36 plymouthFL.jpg" },
  { src: "/assets/images/polish/audiSeal3.jpg" },
  { src: "/assets/images/polish/audiSeal2.jpg" },
  { src: "/assets/images/polish/beamer2.jpg" },
  { src: "/assets/images/polish/blueRav4.jpg" },
  { src: "/assets/images/polish/bMustang1.jpg" },
  { src: "/assets/images/polish/correction86ce.jpg" },
  { src: "/assets/images/polish/fjCruiserOutside2.jpg" },
  { src: "/assets/images/polish/fordSuv.jpg" },
  { src: "/assets/images/polish/hondaSeal2.jpg" },
  { src: "/assets/images/polish/jaguar.jpg" },
  { src: "/assets/images/polish/jeepSeal.jpg" },
  { src: "/assets/images/polish/jeepSeal2.jpg" },
  { src: "/assets/images/polish/jeepseal3.jpg" },
  { src: "/assets/images/polish/mustangFL.jpg" },
  { src: "/assets/images/polish/oldSuburbanOutside.jpg" },
  { src: "/assets/images/polish/oldWrangler.jpg" },
  { src: "/assets/images/polish/oldWrangler2.jpg" },
  { src: "/assets/images/polish/porscheFL.jpg" },
  { src: "/assets/images/polish/porscheFrontLL.jpg" },
  { src: "/assets/images/polish/porscheRearL.jpg" },
  { src: "/assets/images/polish/porscheTaped.jpg" },
  { src: "/assets/images/polish/redFordPlatinum.jpg" },
  { src: "/assets/images/polish/redFordPolishers.jpg" },
  { src: "/assets/images/polish/rivianDuring.jpg" },
  { src: "/assets/images/polish/rivianOutside.jpg" },
  { src: "/assets/images/polish/rubiconA.jpg" }
];

export default function PolishCoatGallery() {
  return (
    <GalleryPage
      hero={{
        title: "Exterior Polish & Coat gallery",
        lead: "See what we can do with a single-stage polish and a ceramic spray coating.",
        image: "/assets/images/polish/36 plymouth.jpg",
        alt: "Polished 1936 Plymouth"
      }}
      services={[{ label: "Exterior Polish & Coat", href: "/services/polish" }]}
      altLabel="Exterior Polish & Coat"
      beforeAfter={baImages}
      results={images}
    />
  );
}
