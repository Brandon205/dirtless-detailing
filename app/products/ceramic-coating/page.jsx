"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { PhoneCall, ClipboardCheck } from "lucide-react";
import { topBtnVariant } from "../../../utils/animationVariations";

export default function products() {
  return (
    <div className="bg-contact">
      <div className="cover">
        <Image src="/assets/images/correction/teslafoam.jpg" alt="Dirt-Less Detailing" quality={50} fill priority className="object-cover" />
      </div>
      <div className="servicepage-header">
        <div style={{ alignItems: "center" }}>
          <h1>
            <span className="text-accent bold text-shadow">Ceramic Coating Maintenance</span>
          </h1>
          <h2 className="page-subheading" style={{ textAlign: "center" }}>
            Check out our how-to on keeping your car clean yourself without damaging your new ceramic coating with these simple products and methods!
          </h2>
          <div className="header-buttons">
            <motion.a href="/contact" className="top-quote-btn" variants={topBtnVariant} whileHover="hover" transition={{ duration: 0.25 }}>
              <ClipboardCheck color="#ffffff" className="mr-2" size={36} /> Get a Free Quote
            </motion.a>
            <motion.a href="tel:2532529758" className="top-quote-btn btn-secondary" variants={topBtnVariant} whileHover="hover" transition={{ duration: 0.25 }}>
              <PhoneCall color="#ffffff" className="mr-2" size={36} />
              (253) 252-9758
            </motion.a>
          </div>
        </div>
      </div>

      <main style={{ marginTop: "4vh" }} className="service-main">
        <main className="service-main">
          <h2 style={{ marginBottom: 0 }} className="text-large">
            DIY Ceramic Maintenance Recommendations
          </h2>
          <hr style={{ margin: "0 auto 3rem auto" }} />
          <div className="service-explain">
            <p>
              We have personally owned and used all of these items at some point in our nine years of detailing, and some we even still use to this day. Most
              Amazon links below are affiliate links which won't change the price you pay, but will give us a small commission.
            </p>
            <p>
              This list should make it simple for you to create a simple and safe washing procedure that you can complete at home. A video guide for these steps
              is coming soon!
            </p>
          </div>
        </main>
      </main>

      <h2 className="text-4xl text-center pb-10">The Products We Recommend:</h2>
      <div className="product-container">
        <div className="product">
          <iframe
            sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
            style={{ width: "120px", height: "240px" }}
            marginwidth="0"
            marginheight="0"
            src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=brandonblack0-20&language=en_US&marketplace=amazon&region=US&placement=B0009IQXFO&asins=B0009IQXFO&linkId=d5ad40cecb3aaf7be8c87246fc5eea6a&show_border=true&link_opens_in_new_window=true"
          ></iframe>
          <div className="product-desc">
            <a href="https://amzn.to/3NGbUht" className="product-title" target="_blank" rel="noopener noreferrer">
              Meguiar's Car Wash Soap
            </a>
            <p>
              Meguiar's has a number of excellent options for consumer-grade, reasonably priced car soaps. We suggest purchasing the Gold Class version to be
              the easiest on the ceramic coating.
            </p>
          </div>
        </div>
        <div className="product">
          <iframe
            sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
            style={{ width: "120px", height: "240px" }}
            marginwidth="0"
            marginheight="0"
            src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=brandonblack0-20&language=en_US&marketplace=amazon&region=US&placement=B0787JSXX2&asins=B0787JSXX2&linkId=3010892b40311b946b175d627a341cc4&show_border=false&link_opens_in_new_window=true"
          ></iframe>
          <div className="product-desc">
            <a href="https://amzn.to/446GPsE" className="product-title" target="_blank" rel="noopener noreferrer">
              CarCarez Wash Microfiber Towels
            </a>
            <p>
              We wanted some microfibers that had a little bit more fluff than a standard microfiber towel as they will be the ones you use for the wash. These
              ones from CarCarez are perfect for that.
            </p>
          </div>
        </div>
        <div className="product">
          <iframe
            sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
            style={{ width: "120px", height: "240px" }}
            src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=brandonblack0-20&language=en_US&marketplace=amazon&region=US&placement=B004BFZRCQ&asins=B004BFZRCQ&linkId=7358a4b30236e6af6e92fdc9ccd31ad2&show_border=false&link_opens_in_new_window=true"
          ></iframe>
          <div className="product-desc">
            <a href="https://amzn.to/4475vBo" className="product-title" target="_blank" rel="noopener noreferrer">
              3D Bug Remover
            </a>
            <p>
              The Bug Remover from 3D, which is safe to use on all surfaces, including ceramic coatings, is an excellent tool for cleaning bugs off the front of
              your car.
            </p>
          </div>
        </div>
        <div className="product">
          <iframe
            sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
            style={{ width: "120px", height: "240px" }}
            marginwidth="0"
            marginheight="0"
            src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=brandonblack0-20&language=en_US&marketplace=amazon&region=US&placement=B09S814R5F&asins=B09S814R5F&linkId=0081a54cc3d3a434b0195fbe3452b628&show_border=true&link_opens_in_new_window=true"
          ></iframe>
          <div className="product-desc">
            <a href="https://amzn.to/3CHqWgP" className="product-title" target="_blank" rel="noopener noreferrer">
              Griot's Tar and Sap Remover
            </a>
            <p>
              One of our primary stops for our chemicals, rags, and other detailing supplies is Griots Garage. With their Tar and Sap Remover you will be able
              to watch any tar and sap melt away in a matter of seconds thanks to one of the best Tar and Sap removers we've tried so far!
            </p>
          </div>
        </div>
        <div className="product">
          <iframe
            sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
            style={{ width: "120px", height: "240px" }}
            marginwidth="0"
            marginheight="0"
            src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=brandonblack0-20&language=en_US&marketplace=amazon&region=US&placement=B0BQCTHKT4&asins=B0BQCTHKT4&linkId=214006bd6028a9c806f8618b439a1f2e&show_border=false&link_opens_in_new_window=true"
          ></iframe>
          <div className="product-desc">
            <a href="https://amzn.to/3Xjqizu" className="product-title" target="_blank" rel="noopener noreferrer">
              Griot's Wheel, Tire, and Mat Cleaner
            </a>
            <p>
              This Griot's Garage product is an amazing 3-in-1 product. This will remove layers of dirt and grime that you wouldn't have even realized were
              there.
            </p>
          </div>
        </div>
        <div className="product">
          <iframe
            sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
            style={{ width: "120px", height: "240px" }}
            marginwidth="0"
            marginheight="0"
            src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=brandonblack0-20&language=en_US&marketplace=amazon&region=US&placement=B095DTBBVJ&asins=B095DTBBVJ&linkId=43992e4f23c20868fcb4708411c948a1&show_border=false&link_opens_in_new_window=true"
          ></iframe>
          <div className="product-desc">
            <a href="https://amzn.to/43N2jLw" className="product-title" target="_blank" rel="noopener noreferrer">
              Chemical Guys Wheel Brush
            </a>
            <p>
              We don't advise using microfibers on tires in particular because they can trap a lot of dirt and deteriorate the fibers. Instead, to scrub and
              thoroughly clean the wheels, we advise using a brush similar to this one.
            </p>
          </div>
        </div>
        <div className="product">
          <iframe
            sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
            style={{ width: "120px", height: "240px" }}
            marginwidth="0"
            marginheight="0"
            src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=brandonblack0-20&language=en_US&marketplace=amazon&region=US&placement=B0BNVFRV3Z&asins=B0BNVFRV3Z&linkId=ee8f3ecd74f31bd716731063d91f0ae2&show_border=false&link_opens_in_new_window=true"
          ></iframe>
          <div className="product-desc">
            <a href="https://amzn.to/3NIHJWU" className="product-title" target="_blank" rel="noopener noreferrer">
              Cobee Detailing Brush Set
            </a>
            <p>
              It is convenient to have a good selection of brushes so that you can quickly reach and clean every area on the exterior of your car, especially
              smaller areas like the front grill and side mirrors.
            </p>
          </div>
        </div>
        <div className="product">
          <iframe
            sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
            style={{ width: "120px", height: "240px" }}
            marginwidth="0"
            marginheight="0"
            src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=brandonblack0-20&language=en_US&marketplace=amazon&region=US&placement=B07W6JMK1L&asins=B07W6JMK1L&linkId=a330591c57a4458a09fc10baab17a2d5&show_border=true&link_opens_in_new_window=true"
          ></iframe>
          <div className="product-desc">
            <a href="https://amzn.to/3PpObn3" className="product-title" target="_blank" rel="noopener noreferrer">
              The Rag Company Microfiber Towels
            </a>
            <p>
              We recommend this pack of 10 edgeless microfibers from The Rag Company is recommended if you need high-quality microfibers for small-area
              touch-ups or cleaning.
            </p>
          </div>
        </div>
        <div className="product">
          <iframe
            sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
            style={{ width: "120px", height: "240px" }}
            marginwidth="0"
            marginheight="0"
            src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=brandonblack0-20&language=en_US&marketplace=amazon&region=US&placement=B083KPS7QD&asins=B083KPS7QD&linkId=677e37025d7ca22764aea57debd4eed0&show_border=true&link_opens_in_new_window=true"
          ></iframe>
          <div className="product-desc">
            <a href="https://amzn.to/449nFm7" className="product-title" target="_blank" rel="noopener noreferrer">
              The Rag Company Large Drying Towel
            </a>
            <p>
              The Rag Company produces some of the best drying towels that we have found so far. If you prefer one large drying towel than several smaller ones,
              this is the larger option.
            </p>
          </div>
        </div>
        <div className="product">
          <iframe
            sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
            style={{ width: "120px", height: "240px" }}
            marginwidth="0"
            marginheight="0"
            src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=brandonblack0-20&language=en_US&marketplace=amazon&region=US&placement=B083KNNY2P&asins=B083KNNY2P&linkId=d4cf69183b7a6ad17a5d4d30cd7ff66c&show_border=true&link_opens_in_new_window=true"
          ></iframe>
          <div className="product-desc">
            <a href="https://amzn.to/3JrSbzB" className="product-title" target="_blank" rel="noopener noreferrer">
              The Rag Company Drying Towels
            </a>
            <p>
              Alternatively, for roughly the same cost, you can purchase this 3-pack of towels from The Rag Company in place of the single large towel; it all
              depends on your personal preference, we switch between the 2 options all of the time.
            </p>
          </div>
        </div>
      </div>

      <br className="extra-space" />

      <h2 className="text-5xl text-center pb-10">The Process To Follow</h2>
      <ol className="list">
        <li className="item product-item">
          <div className="step-number-container">
            <h3 className="step-number">1</h3>
            <div className="vertical-rule"></div>
          </div>
          <div className="step-container">
            <h4 className="step-title">Set Up</h4>
            <p className="step-desc">
              Put 4-5oz (a good amount) of Meguiar's Gold Class Soap into a bucket and then fill the bucket about halfway with water. Then put all the
              microfibers in the bucket as well.
            </p>
          </div>
        </li>
        <li className="item product-item">
          <div className="step-number-container">
            <h3 className="step-number">2</h3>
            <div className="vertical-rule"></div>
          </div>
          <div className="step-container">
            <h4 className="step-title">Initial Rinse</h4>
            <p className="step-desc">
              Use your hose to give your car a good rinse, this will get all large contaminants off of the car as well as wets down the vehicle for the next
              steps. If you plan on using the 3D Bug Remover or Griots Tar and Sap Remover, read the instructions on how to use them and use them now.
            </p>
          </div>
        </li>
        <li className="item product-item">
          <div className="step-number-container">
            <h3 className="step-number">3</h3>
            <div className="vertical-rule"></div>
          </div>
          <div className="step-container">
            <h4 className="step-title">Wash the car</h4>
            <p className="step-desc">
              Grab a microfiber out of the bucket and fold it in 1/4ths (2 folds), then go panel by panel folding the towel to a new side each time you move to
              the next one. You should get about 8 panels per towel. This ensures no dirt is carried over to the next panel, and the least amount of new
              scratches are made on your paint.
            </p>
          </div>
        </li>
        <li className="item product-item">
          <div className="step-number-container">
            <h3 className="step-number">4</h3>
            <div className="vertical-rule"></div>
          </div>
          <div className="step-container">
            <h4 className="step-title">Scrub Wheels </h4>
            <p className="step-desc">
              Use the Wheel Brush and spray on the Griot's Wheel Tire and Mat cleaner to clean off any tough to remove dirt. You can use the smaller brushes to
              reach into smaller grooves like the lug nuts if needed.
            </p>
          </div>
        </li>
        <li className="item product-item">
          <div className="step-number-container">
            <h3 className="step-number">5</h3>
            <div className="vertical-rule"></div>
          </div>
          <div className="step-container">
            <h4 className="step-title">Final Rinse</h4>
            <p className="step-desc">
              Rinse off the entire vehicle. Make sure to get in all the cracks where smaller debris likes to get stuck, and try to leave no soap behind.
            </p>
          </div>
        </li>
        <li className="item product-item">
          <div className="step-number-container">
            <h3 className="step-number">6</h3>
            <div className="vertical-rule"></div>
          </div>
          <div className="step-container">
            <h4 className="step-title">Enhance and Dry</h4>
            <p className="step-desc">
              Give about 2-3 sprays of{" "}
              <a href="https://amzn.to/3uKuqi1" target="_blank" rel="noopener noreferrer" className="text-blue-500">
                Griots Ceramic Speed Shine
              </a>{" "}
              per panel, and use your preferred drying towel to completely dry off the car. And you're done!
            </p>
          </div>
        </li>
      </ol>

      <br className="extra-space" />
    </div>
  );
}
