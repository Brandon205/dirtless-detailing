const addons = { // IF DIFFERENT COSTS ARE WANTED: make cost = ['$35', '$50', etc...] then use currVal on the PricingComponent to choose the corresponding cost.
    'extraction': {
        name: 'Steam Extraction',
        icon: 'extraction',
        desc: "A quick steam extraction is the best way to remove stains, spills, and embedded dirt that normal vacuuming can't get easily.",
        cost: ['$35', '$35', '$50', '$50', '$50', '$75']
    },
    'hair': {
        name: 'Pet Hair',
        icon: 'hair',
        desc: "Pet hair can be a pain to remove from carpets, luckily we have the tools to get the job done.",
        cost: ['$50-$100', '$50-$100', '$50-$100', '$50-$100', '$50-$100', '$50-$100']
    },
    'headliners': {
        name: 'Headliners',
        icon: 'headliners',
        desc: "Headliners are tricky to clean and improper handling can cause them to sag, we'll pick the right products for the job to clean them while keeping them intact.",
        cost: ['$40-$80', '$40-$80', '$40-$80', '$40-$80', '$40-$80', '$40-$80']
    },
    'fabric': {
        name: 'Fabric Ceramic Coating',
        icon: 'fabric',
        desc: "Get a ceramic coating on all of the fabric in your vehicle to give it an extra layer of protection against spills and other messes.",
        cost: ['$75', '$75', '$75', '$75', '$75', '$75',]
    },
    'leather': {
        name: 'Leather Ceramic Coating',
        icon: 'leather',
        desc: "Ceramic coating can also be a great option for anyone who wants to protect the leather in their vehicle from stains, UV damage, and make it easier to clean.",
        cost: ['$150', '$150', '$150', '$150', '$150', '$150']
    },
    'ozone': {
        name: 'Ozone Treatment',
        icon: 'ozone',
        desc: "Ozone treatment is the use of O3 (gas ozone) to remove bacteria, viruses, and odors from your vehicle.",
        cost: ['$100', '$100', '$100', '$100', '$100', '$100']
    },
    'claybar': {
        name: 'Clay Bar',
        icon: 'claybar',
        desc: "Get any small contaminants off of the car to give the paint an even smoother and cleaner shine.",
        cost: ['$50', '$50', '$50', '$50', '$75', '$75']
    },
    'glass': {
        name: 'Glass Polishing',
        icon: 'glass',
        desc: "We will remove as many scratches, etching, and watermarks from the glass as possible.",
        cost: ['$80/hour', '$80/hour', '$80/hour', '$80/hour', '$80/hour', '$80/hour']
    },
    'waterspot': {
        name: 'Waterspot/Overspray Removal',
        icon: 'waterspot',
        desc: "Remove all overspray and waterspots we safely can.",
        cost: ['$80/hour', '$80/hour', '$80/hour', '$80/hour', '$80/hour', '$80/hour']
    },
    'engine': {
        name: 'Engine Bay Cleaning',
        icon: 'engine',
        desc: "We will cover sensitive/electronic areas in the bay, clean and wash, then dress the engine bay to have it looking like new!",
        cost: ['$80', '$80', '$80', '$80', '$80', '$80']
    },
    'debadge': {
        name: 'Debadging',
        icon: 'debadge',
        desc: "Remove any vehicle badging including any residue left behind after removal.",
        cost: ['$80/hour', '$80/hour', '$80/hour', '$80/hour', '$80/hour', '$80/hour']
    },
}

export default addons;