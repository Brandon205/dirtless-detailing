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
      interiorswift: 175,
      interior: 335,
      interiorspill: 500
    },
    exterior: {
      exteriorwash: 125,
      exteriorseal: 600,
      exteriorcorrect: 1250
    }
  },
  "Quarter Ton": {
    interior: {
      interiorswift: 175,
      interior: 335,
      interiorspill: 500
    },
    exterior: {
      exteriorwash: 125,
      exteriorseal: 600,
      exteriorcorrect: 1250
    }
  },
  "4 Door": {
    interior: {
      interiorswift: 175,
      interior: 375,
      interiorspill: 500
    },
    exterior: {
      exteriorwash: 125,
      exteriorseal: 600,
      exteriorcorrect: 1250
    }
  },
  "Mid Size": {
    interior: {
      interiorswift: 200,
      interior: 375,
      interiorspill: 550
    },
    exterior: {
      exteriorwash: 150,
      exteriorseal: 775,
      exteriorcorrect: 1500
    }
  },
  "Trucks": {
    interior: {
      interiorswift: 200,
      interior: 375,
      interiorspill: 550
    },
    exterior: {
      exteriorwash: 175,
      exteriorseal: 925,
      exteriorcorrect: 1750
    }
  },
  "3 Row": {
    interior: {
      interiorswift: 225,
      interior: 425,
      interiorspill: 600
    },
    exterior: {
      exteriorwash: 175,
      exteriorseal: 925,
      exteriorcorrect: 1750
    }
  },
  "addons": {
    "Ozone Treatment": 75,
    "Engine Bay": 75
  }
};

export default prices;
