import Image from "next/image";
import { PhoneCall, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content-card-left">
        <div>
          <a href="/">
            <Image src="/assets/images/showcase/newLogoLeft2.png" alt="Dirt-Less Detailing" width={200} height={200} />
          </a>
        </div>
        <div>
          <p>©2025 Dirt-Less Detailing.</p>
          <p>All rights reserved.</p>
          <a target="_blank" rel="noopener" href="https://www.brandonblack.dev" className="text-gray-400 underline">
            Website made by Brandon.
          </a>
          <br />
          <a href="/privacy" className="text-gray-400 underline">
            Privacy Policy
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
        <h3 className="font-medium">COMPANY</h3>
        <div className="flex flex-col gap-4 mt-4">
          <Link href="/" className="no-underline text-gray-400 hover:underline hover:text-gray-200">
            Home
          </Link>
          <Link href="/about" className="no-underline text-gray-400 hover:underline hover:text-gray-200">
            About Us
          </Link>
        </div>
      </div>
      <div className="footer-content-card" style={{ paddingBottom: "2rem" }}>
        <h3 className="font-medium">SERVICES</h3>
        <div className="flex flex-col gap-4 mt-4">
          {/* <Link href="/services/interior-swift" className="no-underline text-gray-400 hover:underline hover:text-gray-300">
            Swift Interior Detail
          </Link> */}
          <Link href="/services/interior" className="no-underline text-gray-400 hover:underline hover:text-gray-300">
            Full Interior Detail
          </Link>
          <Link href="/services/interior-spill" className="no-underline text-gray-400 hover:underline hover:text-gray-300">
            Full Interior + Spill Guard
          </Link>
          <hr style={{ marginTop: "1.5rem" }} />
          <Link href="/services/exterior" className="no-underline text-gray-400 hover:underline hover:text-gray-300">
            Exterior Decon Wash
          </Link>
          <Link href="/services/exterior-seal" className="no-underline text-gray-400 hover:underline hover:text-gray-300">
            Exterior Seal & Shine
          </Link>
          <Link href="/services/exterior-correct" className="no-underline text-gray-400 hover:underline hover:text-gray-300">
            Exterior Correct & Protect
          </Link>
        </div>
      </div>
      <div className="footer-content-card footer-contact-card" id="contact">
        <h3 className="font-medium">CONTACT</h3>

        <div className="flex flex-col gap-4 mt-4">
          <a href="tel:2532529758" className="underline text-gray-400 flex gap-2 hover:underline hover:text-gray-300" rel="noopener">
            <PhoneCall color="white" /> (253) 252-9758
          </a>
          <a
            href="mailto:brenden@dirtlessdetailing.com?subject = Schedule a Detail with Dirt-Less Detailing"
            className="underline text-gray-400 flex gap-2 hover:underline hover:text-gray-300"
            target="_blank"
            rel="noopener"
          >
            <Mail color="white" /> brenden@dirtlessdetailing.com
          </a>
          <a
            href="https://maps.app.goo.gl/bhPDhjUN4jsSegu48"
            className="underline text-gray-400 flex gap-2 hover:underline hover:text-gray-300"
            target="_blank"
            rel="noopener"
          >
            <MapPin color="white" /> Buckley Business Park, 28120 WA-410, Building C6
          </a>
        </div>

        <br />

        <div>
          <a href="https://www.instagram.com/dirt_less_detailing/" target="_blank" rel="noopener" aria-label="Instagram">
            <Image src="/assets/icons/instagram.svg" alt="instagram" width={48} height={48} className="text-white" />
          </a>
          <a href="https://www.facebook.com/DirtLessDetailing/" target="_blank" rel="noopener" aria-label="Facebook">
            <Image src="/assets/icons/facebook.svg" alt="facebook" width={48} height={48} className="text-white" />
          </a>
          <a href="https://www.youtube.com/channel/UCsoqP5s4hwkQd_Sd-TVv-jg" target="_blank" rel="noopener" aria-label="Youtube">
            <Image src="/assets/icons/youtube.svg" alt="youtube" width={48} height={48} className="text-white" />
          </a>
          <a href="https://www.tiktok.com/@brendenflower" target="_blank" rel="noopener" aria-label="TikTok">
            <Image src="/assets/icons/tiktok.svg" alt="tiktok" width={48} height={48} className="text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
}
