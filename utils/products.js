// Categories Exterior, Ceramic, Interior, Wheels, Accessories, Equipment, As Seen On Our Channel
// Ceramic category will be the ceramic maintenance products specifically for coated vehicles

const products = [
  {
    name: "The Rag Company Gauntlet Drying Towel",
    price: 28.95,
    category: ["Exterior", "Ceramic Maintenance"],
    rating: 4.7,
    description:
      "The Rag Company produces some of the best drying towels that we have found so far. If you prefer one large drying towel than several smaller ones, this is the larger option.",
    featured: true,
    image: "/assets/images/products/ragcompanygauntlet.jpg",
    link: "https://amzn.to/4kwXDBj"
  },
  {
    name: "Griot's Tar and Sap Remover",
    price: 22.11,
    category: ["Exterior"],
    rating: 3.9,
    description:
      "One of our primary stops for our chemicals, rags, and other detailing supplies is Griots Garage. With their Tar and Sap Remover you will be able to watch any tar and sap melt away in a matter of seconds thanks to one of the best Tar and Sap removers we've tried so far!",
    featured: false,
    image: "/assets/images/products/griotstarandsap.jpg",
    link: "https://amzn.to/4kAyKVx"
  },
  {
    name: "CarPro TarX",
    price: 27.96,
    category: ["Exterior"],
    rating: 4.4,
    description:
      "Chemically very similar to Griot's Tar and Sap Remover, CarPro's TarX is another great option for removing tar and sap from your vehicle quickly and easily. Especially right now while Griots is out of stock!",
    featured: false,
    image: "/assets/images/products/carproTarX.jpg",
    link: "https://amzn.to/4bJtrlp"
  },
  {
    name: "Griots 3-in-1 Wheel, Tire and Mat Cleaner",
    price: 11.99,
    category: ["Wheels", "Interior"],
    rating: 4.8,
    description: "Professional-grade cleaner that removes road grime from wheels and tires.",
    featured: false,
    image: "/assets/images/products/griotswheeltiremat.jpg",
    link: "https://amzn.to/4kcpWoT"
  },
  {
    name: "Chemical Guys Wheel Brush",
    price: 10.99,
    category: ["Accessories", "Wheels", "Equipment"],
    rating: 4.6,
    description:
      "We don't advise using microfibers on tires in particular because they can trap a lot of dirt and deteriorate the fibers. Instead, to scrub and thoroughly clean the wheels, we advise using a brush similar to this one.",
    featured: false,
    image: "/assets/images/products/chemguystirebrush.jpg",
    link: "https://amzn.to/45tFfFb"
  },
  {
    name: "Labocosmetica Glico",
    price: 20.95,
    category: ["As Seen On Our Channel"],
    rating: "N/A",
    description:
      "GLICO is a patented glycolic acid-based cleaner for fabrics and upholstery. It removes inorganic residues, minerals, and stubborn stains while restoring softness and color. Its unique Luminol Effect highlights hidden spots, ensuring a flawless finish every time.",
    featured: false,
    image: "/assets/images/products/glico.webp",
    link: "https://www.labocosmetica.store/products/labocosmetica-glico?ref=DIRTLESS&variant=51346489213229"
  },
  {
    name: "Labocosmetica Ductile",
    price: 15.95,
    category: ["As Seen On Our Channel"],
    rating: "N/A",
    description:
      "DUCTILE is a highly concentrated All Purpose Cleaner for interiors and exteriors, safe even on delicate materials like Alcantara®. It removes stubborn stains, neutralizes odors, and leaves fabrics soft, making it ideal for both reconditioning and maintenance cleaning.",
    featured: false,
    image: "/assets/images/products/ductile.webp",
    link: "https://www.labocosmetica.store/products/labocosmetica-ductile?ref=DIRTLESS&variant=51346489344301"
  },
  {
    name: "Labocosmetica Sidero",
    price: 19.95,
    category: ["As Seen On Our Channel"],
    rating: "N/A",
    description:
      "SIDERO is a highly concentrated, scented iron remover gel with anti-limescale action. Its innovative F.R.G. technology ensures strong adhesion to vertical surfaces, making it ideal for safe, effective decontamination of bodywork, rims, and glass.",
    featured: false,
    image: "/assets/images/products/sidero.webp",
    link: "https://www.labocosmetica.store/products/labocosmetica-sidero?ref=DIRTLESS&variant=51346487771437"
  },
  {
    name: "Shine Supply Clutch",
    price: 33.95,
    category: ["As Seen On Our Channel"],
    rating: "N/A",
    description:
      "Clutch is a Silica-based spray designed to provide 6 months of protection on paint, trim, glass, and more. You've seen us use it on faded blacks to try to restore their color a little bit too, or even applying it after cleaning interiors to provide extra protection and gloss.",
    featured: false,
    image: "/assets/images/products/clutch.webp",
    link: "https://www.detailedimage.com/wax.php?id=138663&url=detailedimage.com/Shine-Supply-M132/Clutch-P2941/16-oz-S1/"
  },
  {
    name: "Tornador Vacuum",
    price: 52,
    category: ["As Seen On Our Channel"],
    rating: 3.9,
    description:
      "This is an amazing attachment for a vacuum that combines the power of a tornador and immediately sucks everything that the tornador would normally blows around. An amazing tool on many interiors with stubborn carpet, pet hair, or dirt embedded deep down.",
    featured: false,
    image: "/assets/images/products/tornVacuum.jpg",
    link: "https://amzn.to/3L6f6V9"
  },
  {
    name: "Tornador Foam Gun",
    price: 52,
    category: ["As Seen On Our Channel"],
    rating: "N/A",
    description:
      "A foam gun we bought just to test out, mainly for when we want to do waterless washes that still have strong cleaning power. This allows you to put your chemical of choice in and it will foam it out somewhat as if using a foam cannon, without much liquid, overall pretty cool.",
    featured: false,
    image: "/assets/images/products/tornFoam.jpg",
    link: "https://amzn.to/3Zs5yHy"
  },
  //   {
  //     name: "ADS Amplify Ceramic Spray",
  //     price: 19.99,
  //     category: ["Ceramic", "Exterior"],
  //     rating: 4.7,
  //     description:
  //       "We use this ceramic detailer all the time for our washes. It's very easy to use, leaves less streaks than others even in the sun, and smells great! We recommend using it as a topper during a rinseless wash by spraying it on right before drying.",
  //     featured: true,
  //     image: "/assets/images/products/amplify.jpg",
  //     link: "https://amzn.to/45tFfFb"
  //   },
  //   {
  //     name: "ADS Hero Rinseless Wash",
  //     price: 21.99,
  //     category: ["Exterior", "Ceramic"],
  //     rating: 4.8,
  //     description:
  //       "Rinseless washes are our recommended method for washing your car, especially after getting a ceramic coating. You can do them anywhere, don't need to worry about water spots, and it will encapsulate dirt and grime so that it doesn't scratch while washing.",
  //     featured: false,
  //     image: "/assets/images/products/hero.jpg",
  //     link: "https://amzn.to/4kUTZ4M"
  //   },
  {
    name: "Gyeon Eco Wash",
    price: 31.99,
    category: ["Exterior", "Ceramic Maintenance"],
    rating: 5.0,
    description:
      "An amazing 3-in-1 product that can be used as a Rinseless, Waterless, and drying aid. Though it's only 1000ml, this should last a whole year for most people!",
    featured: true,
    image: "/assets/images/products/gyeonecoWash.jpg",
    link: "https://amzn.to/4lZC513"
  }
];

export default products;
