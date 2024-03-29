// const prices = {
//     'Protect': {
//         'cost': [900, 900, 900, 1000, 1200, 1150]
//     },
//     'Protect+': {
//         'cost': [1350, 1350, 1500, 1600, 1800, 1750]
//     },
//     'Interior Coating': {
//         'cost': [150, 150, 150, 150, 150, 150]
//     },
//     'Dirt-Less Detail': {
//         'cost': [375, 375, 450, 450, 475, 500]
//     },
//     'Full Interior': {
//         'cost': [300, 300, 350, 350, 350, 375]
//     },
//     'Bio': {
//         'cost': [500, 500, 500, 500, 500, 500]
//     },
//     'Dirt-Less Wash': {
//         'cost': [75, 75, 75, 100, 150, 125]
//     },
//     'Single Stage': {
//         'cost': [500, 500, 500, 600, 800, 750]
//     },
//     'Two Stage': {
//         'cost': [650, 650, 650, 750, 900, 850]
//     },
//     'Engine': {
//         'cost': [80, 80, 80, 80, 80, 80]
//     },
//     'Clay Bar': {
//         'cost': [35, 35, 50, 50, 75, 75]
//     },
//     'Glass': {
//         'cost': [80, 80, 80, 80, 80, 80]
//     },
//     'Waterspot': {
//         'cost': [80, 80, 80, 80, 80, 80]
//     },
//     'Debadging': {
//         'cost': [80, 80, 80, 80, 80, 80]
//     },
//     'Extraction': {
//         'cost': [35, 35, 50, 50, 50, 75]
//     },
//     'Dog Hair': {
//         'cost': {
//             "Little or None": 0,
//             "Medium Amount": 50,
//             "Lots of Hair": 100
//         }
//     },
//     'Headliners': {
//         'cost': [35, 35, 35, 35, 35, 35]
//     },
//     'Ozone': {
//         'cost': [100, 100, 100, 100, 100, 100]
//     },
//     'Monthly': {
//         'cost': [130, 130, 145, 160, 190, 190]
//     },
//     'Yearly': {
//         'cost': [275, 275, 325, 325, 375, 375]
//     },
// }

const prices = {
  "2 Door": {
    interior: {
      interior: 300,
      interiorspill: 450,
      interiorswift: 150,
    },
    exterior: {
      exteriorwash: 100,
      exteriorseal: 400,
      exteriorcorrect: 1000,
    },
  },
  "Quarter Ton": {
    interior: {
      interior: 300,
      interiorspill: 450,
      interiorswift: 150,
    },
    exterior: {
      exteriorwash: 100,
      exteriorseal: 400,
      exteriorcorrect: 1000,
    },
  },
  "4 Door": {
    interior: {
      interior: 300,
      interiorspill: 450,
      interiorswift: 150,
    },
    exterior: {
      exteriorwash: 125,
      exteriorseal: 400,
      exteriorcorrect: 1000,
    },
  },
  "Mid Size": {
    interior: {
      interior: 335,
      interiorspill: 500,
      interiorswift: 175,
    },
    exterior: {
      exteriorwash: 125,
      exteriorseal: 500,
      exteriorcorrect: 1250,
    },
  },
  Trucks: {
    interior: {
      interior: 375,
      interiorspill: 575,
      interiorswift: 175,
    },
    exterior: {
      exteriorwash: 150,
      exteriorseal: 600,
      exteriorcorrect: 1500,
    },
  },
  "3 Row": {
    interior: {
      interior: 375,
      interiorspill: 575,
      interiorswift: 200,
    },
    exterior: {
      exteriorwash: 150,
      exteriorseal: 600,
      exteriorcorrect: 1500,
    },
  },
  addons: {
    "Ozone Treatment": 75,
    "Engine Bay": 75,
  },
  dogHair: {
    "Little or None": 0,
    "Medium Amount": 50,
    "Lots of Hair": 100,
  },
};

export default prices;
