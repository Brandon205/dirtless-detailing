import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content-card-left">
        <div>
          <a href="/">
            <img src="../assets/icons/logoCircle.png" alt="Dirt-Less Detailing" style={{ width: "88px" }} />
          </a>
          <div>
            <h3>Dirt-Less</h3>
            <h3>Detailing</h3>
          </div>
        </div>
        <div>
          <p>©2025 Dirt-Less Detailing.</p>
          <a target="_blank" rel="noopener" href="https://icons8.com" className="text-gray-400 underline">
            Icons made by Icons8.
          </a>
          <br />
          <a target="_blank" rel="noopener" href="https://www.brandonblack.dev" className="text-gray-400 underline">
            Website by Brandon.
          </a>
        </div>
        <div style={{ gap: 32, paddingTop: "1rem" }} className="screen-flex">
          <a href="https://iglcoatingsusa.com/" target="_blank" rel="noopener">
            <Image
              src="/assets/images/showcase/homepage-kenzo-nobkg.png"
              alt="IGL Kenzo Coatings certified"
              className="w-auto h-auto"
              width={110}
              height={105}
            />
          </a>
          <a
            href="https://www.bbb.org/us/wa/bonney-lake/profile/auto-detailing/dirt-less-detailing-1296-1000135733/#sealclick"
            target="_blank"
            rel="noopener"
            aria-label="Dirt-Less Detailing on Better Business Bureau"
          >
            <Image
              src="/assets/images/showcase/homepage-bbb-large.png"
              alt="Better Business Bureau A+ rating"
              className="w-auto h-auto"
              width={200}
              height={100}
            />
          </a>
        </div>
      </div>
      <div className="footer-content-card">
        <h3>COMPANY</h3>
        <Link href="/" className="footer-link">
          Home
        </Link>
        <Link href="/about" className="footer-link">
          About Us
        </Link>
      </div>
      <div className="footer-content-card" style={{ paddingBottom: "2rem" }}>
        <h3>SERVICES</h3>
        <Link href="/services/interior-swift" className="footer-link">
          Swift Interior Detail
        </Link>
        <Link href="/services/interior" className="footer-link">
          Full Interior Detail
        </Link>
        <Link href="/services/interior-spill" className="footer-link">
          Full Interior + Spill Guard
        </Link>
        <hr style={{ marginTop: "1.5rem" }} />
        <Link href="/services/exterior" className="footer-link">
          Exterior Decon Wash
        </Link>
        <Link href="/services/exterior-seal" className="footer-link">
          Exterior Seal & Shine
        </Link>
        <Link href="/services/exterior-correct" className="footer-link">
          Exterior Correct & Protect
        </Link>
      </div>
      <div className="footer-content-card footer-contact-card" id="contact">
        <h3>CONTACT</h3>
        <a href="tel:2532529758" className="contact-link footer-contact-link underline" rel="noopener">
          <img src="../assets/icons/phoneMessageColor.png" alt="Phone call / message" className="icon-24" /> (253) 252-9758
        </a>
        <a
          href="mailto:brenden@dirtlessdetailing.com?subject = Schedule a Dirt-Less Detail"
          className="contact-link footer-contact-link underline"
          target="_blank"
          rel="noopener"
        >
          <img src="../assets/icons/post.png" alt="email" className="icon-24" /> brenden@dirtlessdetailing.com
        </a>
        <a href="https://maps.app.goo.gl/bhPDhjUN4jsSegu48" className="contact-link footer-contact-link underline" target="_blank" rel="noopener">
          <img src="../assets/icons/placeMarker.png" alt="place marker" className="icon-24" /> Buckley Business Park, 28120 WA-410, Building C6
        </a>
        <br />
        <div>
          <a href="https://www.facebook.com/DirtLessDetailing/" className="socials" target="_blank" rel="noopener" aria-label="Facebook">
            <img src="../assets/icons/facebook.svg" alt="facebook" className="icon-48" />
          </a>
          <a href="https://www.instagram.com/dirt_less_detailing/" className="socials" target="_blank" rel="noopener" aria-label="Instagram">
            <img src="../assets/icons/instagram.svg" alt="instagram" className="icon-48" />
          </a>
          <a href="https://www.youtube.com/channel/UCsoqP5s4hwkQd_Sd-TVv-jg" className="socials" target="_blank" rel="noopener" aria-label="Youtube">
            <img src="../assets/icons/youtube.svg" alt="youtube" className="icon-48" />
          </a>
          <a href="https://www.tiktok.com/@brendenflower" className="socials" target="_blank" rel="noopener" aria-label="TikTok">
            <img src="../assets/icons/tiktok.svg" alt="tiktok" className="icon-48" />
          </a>
        </div>
      </div>
    </footer>
  );
}
