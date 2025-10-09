// Categories Exterior, Ceramic, Interior, Wheels, Accessories, Equipment
// Ceramic category will be the ceramic maintenance products specifically for coated vehicles

const products = [
  {
    name: "The Rag Company Gauntlet Drying Towel",
    price: 28.95,
    category: ["Exterior", "Ceramic"],
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
    category: ["Exterior", "Ceramic"],
    rating: 5.0,
    description:
      "An amazing 3-in-1 product that can be used as a Rinseless, Waterless, and drying aid. Though it's only 1000ml, this should last a whole year for most people!",
    featured: true,
    image: "/assets/images/products/gyeonecoWash.jpg",
    link: "https://amzn.to/4lZC513"
  }
];

export default products;
