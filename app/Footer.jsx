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
          <p>©2024 Dirt-Less Detailing.</p>
          <a target="_blank" rel="noopener" href="https://icons8.com" className="text-gray-400 hover:underline">
            Icons made by Icons8.
          </a>
          <br />
          <a
            target="_blank"
            rel="noopener"
            href="https://github.com/Brandon205"
            className="text-gray-400 hover:underline"
          >
            Design + Code by Brandon.
          </a>
        </div>
        <div style={{ gap: 32, paddingTop: "1rem" }} className="screen-flex">
          <a href="https://iglcoatingsusa.com/" target="_blank" rel="noopener">
            <div
              className="header-cert"
              style={{
                backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/833088d3-ca7b-41b9-561f-21f8517f3300/public')`,
                width: "110px",
                height: "105px",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </a>
          <a
            href="https://www.bbb.org/us/wa/bonney-lake/profile/auto-detailing/dirt-less-detailing-1296-1000135733/#sealclick"
            target="_blank"
            rel="noopener"
            aria-label="Dirt-Less Detailing on Better Business Bureau"
          >
            <div
              className="header-cert"
              style={{
                backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/1f42d129-8657-4246-7297-ab33dc24c000/public')`,
                width: "175px",
                height: "100px",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
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
          Swift Interior Detail - <span className="special-package">NEW</span>
        </Link>
        <Link href="/services/interior" className="footer-link">
          Full Interior Detail
        </Link>
        <Link href="/services/interior-spill" className="footer-link">
          Full Interior + Spill Guard
        </Link>
        <hr style={{ marginTop: "1.5rem" }} />
        <Link href="/services/exterior" className="footer-link">
          Exterior Wash
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
          <img src="../assets/icons/phoneMessageColor.png" alt="Phone call / message" className="icon-24" /> (253)
          252-9758
        </a>
        <a
          href="mailto:brenden@dirtlessdetailing.com?subject = Schedule a Dirt-Less Detail"
          className="contact-link footer-contact-link underline"
          target="_blank"
          rel="noopener"
        >
          <img src="../assets/icons/post.png" alt="email" className="icon-24" /> brenden@dirtlessdetailing.com
        </a>
        <a
          href="https://www.google.com/maps/place/9305+205th+Ave+E,+Bonney+Lake,+WA+98391/@47.172835,-122.1589741,17z/data=!3m1!4b1!4m5!3m4!1s0x5490faeb8aa2e3d7:0xe53c2e7cb4aa7549!8m2!3d47.1728314!4d-122.1567854"
          className="contact-link footer-contact-link underline"
          target="_blank"
          rel="noopener"
        >
          <img src="../assets/icons/placeMarker.png" alt="place marker" className="icon-24" /> 9305 205th Ave E, Bonney
          Lake, Wa 98391
        </a>
        <br />
        <div>
          <a
            href="https://www.facebook.com/DirtLessDetailing/"
            className="socials"
            target="_blank"
            rel="noopener"
            aria-label="Facebook"
          >
            <img src="../assets/icons/facebook.svg" alt="facebook" className="icon-48" />
          </a>
          <a
            href="https://www.instagram.com/dirt_less_detailing/"
            className="socials"
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
          >
            <img src="../assets/icons/instagram.svg" alt="instagram" className="icon-48" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCsoqP5s4hwkQd_Sd-TVv-jg"
            className="socials"
            target="_blank"
            rel="noopener"
            aria-label="Youtube"
          >
            <img src="../assets/icons/youtube.svg" alt="youtube" className="icon-48" />
          </a>
          <a
            href="https://www.tiktok.com/@brendenflower"
            className="socials"
            target="_blank"
            rel="noopener"
            aria-label="TikTok"
          >
            <img src="../assets/icons/tiktok.svg" alt="tiktok" className="icon-48" />
          </a>
        </div>
      </div>
    </footer>
  );
}
