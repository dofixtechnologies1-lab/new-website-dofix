import { Product } from "@/types/product";

const shopData: Product[] = [

  // ================= AC REPAIR INSTALLATION =================

  {
    id: 10,
    title: "Foam Jet AC Service",
    category: "acrepairinstallation",
    subCategory: "ac-service",
    rateCardKey: "ac",
    reviews: 10,

    imgs: {
      thumbnails: ["/images/ac/jet-service.png"],
      previews: ["/images/ac/jet-service.png"],
    },

    description: {
      about: [
        "High-pressure jet cleaning of indoor unit",
        "Deep cleaning of cooling coil",
        "Blower and fan cleaning",
        "Drain line cleaning",
        "Outdoor condenser jet wash",
        "Cooling performance testing",
      ],

      benefits: [
        "Strong and fast cooling",
        "Removal of deep dirt and blockages",
        "Improved airflow",
        "Reduced electricity consumption",
        "Extended AC lifespan",
      ],
    },

    variants: [
      {
        id: 101,
        title: "Split AC Foam Jet Service",
        price: 499,
        oldPrice: 699,
        description: "Complete AC inspection and jet cleaning",
      },
      {
        id: 102,
        title: "Window AC Foam Jet Service",
        price: 599,
        oldPrice: 999,
        description: "Deep jet cleaning for two AC units",
      },
      // {
      //   id: 103,
      //   title: "3 AC Foam Jet Service",
      //   price: 999,
      //   oldPrice: 1099,
      //   description: "Deep jet cleaning for three AC units",
      // },
      // {
      //   id: 104,
      //   title: "4 AC Foam Jet Service",
      //   price: 1299,
      //   oldPrice: 1399,
      //   description: "Deep jet cleaning for Four AC units",
      // },
    ],
  },

{
  id: 11,
  title: "Power Jet Pump Ac Service",
  category: "acrepairinstallation",
  subCategory: "ac-service",
  rateCardKey: "ac",
  reviews: 10,

  imgs: {
    thumbnails: ["/images/ac/basic-ac-service.png"],
    previews: ["/images/ac/basic-ac-service.png"],
  },

  description: {
    about: [
      "Basic cleaning of indoor AC unit",
      "Air filter cleaning and dust removal",
      "Cooling coil surface cleaning",
      "Drain pipe inspection and cleaning",
      "Outdoor unit basic cleaning",
      "Complete AC performance check",
    ],

    benefits: [
      "Maintains healthy airflow",
      "Improves cooling efficiency",
      "Reduces dust and bad smell",
      "Helps lower electricity consumption",
      "Prevents minor AC issues",
    ],
  },

  variants: [
    {
      id: 101,
      title: "Split AC Jet Pump Service",
      price: 399,
      oldPrice: 799,
      description: "Basic cleaning and inspection for one AC unit",
    },
    {
      id: 102,
      title: "Window AC Jet Pump Service",
      price: 399,
      oldPrice: 599,
      description: "Basic cleaning and inspection for two AC units",
    },
    // {
    //   id: 103,
    //   title: "3 Power Jet Pump AC Service",
    //   price: 999,
    //   oldPrice: 1099,
    //   description: "Basic cleaning and inspection for three AC units",
    // },
    // {
    //   id: 104,
    //   title: "4 Power Jet Pump AC Service",
    //   price: 1299,
    //   oldPrice: 1399,
    //   description: "Basic cleaning and inspection for four AC units",
    // },
  ],
},
  
  {
  id: 12,
  title: "AC Gas Charging",
  category: "acrepairinstallation",
  subCategory: "ac-service",
  rateCardKey: "ac",
  reviews: 6,

  imgs: {
    thumbnails: ["/images/ac/gas-charging.jpg"],
    previews: ["/images/ac/gas-charging.jpg"],
  },

  description: {
    about: [
      "Complete AC gas pressure inspection",
      "Leak detection and basic check",
      "Top-up or refill of AC refrigerant gas",
      "Cooling performance testing",
      "System pressure balancing",
    ],

    benefits: [
      "Restores proper cooling performance",
      "Improves AC efficiency",
      "Prevents compressor overload",
      "Reduces electricity consumption",
      "Ensures longer AC lifespan",
    ],
  },

  variants: [
    {
      id: 121,
      title: "Split AC Gas Charging",
      price: 1999,
      oldPrice: 2199,
      description: "Gas refill service for split AC with pressure check",
    },
    {
      id: 122,
      title: "Window AC Gas Charging",
      price: 1799,
      oldPrice: 1999,
      description: "Gas refill service for window AC unit",
    },
  ],
},

  {
    id: 5,
    title: "AC Repair",
    category: "acrepairinstallation",
    subCategory: "ac-repair",
    rateCardKey: "ac",
    reviews: 18,

    imgs: {
      thumbnails: ["/images/ac/ac-repair.jpg"],
      previews: ["/images/ac/ac-repair.jpg"],
    },

    variants: [],
  },

  {
    id: 6,
    title: "AC Installation & Uninstallation",
    category: "acrepairinstallation",
    subCategory: "ac-installation-uninstallation",
    rateCardKey: "ac",
    reviews: 12,

    imgs: {
      thumbnails: ["/images/ac/ac-install-uninstall.jpg"],
      previews: ["/images/ac/ac-install-uninstall.jpg"],
    },

    variants: [],
  },

  // ================= HOME CLEANING =================

  {
    id: 3,
    title: "Deep Cleaning",
    category: "home-cleaning",
    subCategory: "deep-cleaning",
    rateCardKey: "cleaning",
    reviews: 10,

    imgs: {
      thumbnails: ["/images/cleaning/deep.jpg"],
      previews: ["/images/cleaning/deep.jpg"],
    },

    variants: [],
  },

  {
    id: 7,
    title: "Bathroom Cleaning",
    category: "home-cleaning",
    subCategory: "bathroom-cleaning",
    rateCardKey: "cleaning",
    reviews: 9,

    imgs: {
      thumbnails: ["/images/cleaning/bathroom.jpg"],
      previews: ["/images/cleaning/bathroom.jpg"],
    },

    variants: [],
  },

  {
    id: 8,
    title: "Kitchen Cleaning",
    category: "home-cleaning",
    subCategory: "kitchen-cleaning",
    rateCardKey: "cleaning",
    reviews: 11,

    imgs: {
      thumbnails: ["/images/cleaning/kitchen.jpg"],
      previews: ["/images/cleaning/kitchen.jpg"],
    },

    variants: [],
  },

  {
    id: 9,
    title: "Full Home Cleaning",
    category: "home-cleaning",
    subCategory: "full-home",
    rateCardKey: "cleaning",
    reviews: 14,

    imgs: {
      thumbnails: ["/images/cleaning/full-home.jpg"],
      previews: ["/images/cleaning/full-home.jpg"],
    },

    variants: [],
  },

  // ================= PAINTING =================

  {
    id: 4,
    title: "Wall Painting",
    category: "painting",
    subCategory: "wall-paint",
    rateCardKey: "painting",
    reviews: 8,

    imgs: {
      thumbnails: ["/images/painting/wall.jpg"],
      previews: ["/images/painting/wall.jpg"],
    },

    variants: [],
  },
];

export default shopData;