import { Product } from "@/types/product";

const shopData: Product[] = [

  // ================= AC REPAIR INSTALLATION =================

  {
    id: "foam-jet-ac-service",
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
  id: "power-jet-pump-ac-service",
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
  id: "ac-gas-charging",
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
    id: "ac-repair",
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
    id: "deep-cleaning",
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
    id: "bathroom-cleaning",
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
    id: "kitchen-cleaning",
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
    id: "wall-painting",
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


// ================= HOME APPLIANCES =================

{
  id: "refrigerator-repair",
  title: "Refrigerator Repair",
  category: "home-appliances",
  subCategory: "refrigerator",
  rateCardKey: "appliances",
  reviews: 8,

  imgs: {
    thumbnails: ["/images/appliances/fridge.jpg"],
    previews: ["/images/appliances/fridge.jpg"],
  },

  variants: [],
},

{
  id: "washing-machine-repair",
  title: "Washing Machine Repair",
  category: "home-appliances",
  subCategory: "washing-machine",
  rateCardKey: "appliances",
  reviews: 7,

  imgs: {
    thumbnails: ["/images/appliances/washing-machine.jpg"],
    previews: ["/images/appliances/washing-machine.jpg"],
  },

  variants: [],
},

{
  id: "microwave-repair",
  title: "Microwave Repair",
  category: "home-appliances",
  subCategory: "microwave",
  rateCardKey: "appliances",
  reviews: 6,

  imgs: {
    thumbnails: ["/images/appliances/microwave.jpg"],
    previews: ["/images/appliances/microwave.jpg"],
  },

  variants: [],
},

// ================= INTERIOR =================

{
  id: "modular-kitchen-design",
  title: "Modular Kitchen Design",
  category: "interior",
  subCategory: "kitchen-interior",
  rateCardKey: "interior",
  reviews: 9,

  imgs: {
    thumbnails: ["/images/interior/modular-kitchen.jpg"],
    previews: ["/images/interior/modular-kitchen.jpg"],
  },

  variants: [],
},

{
  id: "wardrobe-design",
  title: "Wardrobe Design",
  category: "interior",
  subCategory: "wardrobe",
  rateCardKey: "interior",
  reviews: 7,

  imgs: {
    thumbnails: ["/images/interior/wardrobe.jpg"],
    previews: ["/images/interior/wardrobe.jpg"],
  },

  variants: [],
},

// ================= ELECTRICIAN =================

{
  id: "switch-board-repair",
  title: "Switch Board Repair",
  category: "electrician",
  subCategory: "switch-board",
  rateCardKey: "electrician",
  reviews: 12,

  imgs: {
    thumbnails: ["/images/electrician/switch-board.jpg"],
    previews: ["/images/electrician/switch-board.jpg"],
  },

  variants: [],
},

{
  id: "fan-installation",
  title: "Fan Installation",
  category: "electrician",
  subCategory: "fan-install",
  rateCardKey: "electrician",
  reviews: 10,

  imgs: {
    thumbnails: ["/images/electrician/fan.jpg"],
    previews: ["/images/electrician/fan.jpg"],
  },

  variants: [],
},

{
  id: "light-installation",
  title: "Light Installation",
  category: "electrician",
  subCategory: "light-install",
  rateCardKey: "electrician",
  reviews: 9,

  imgs: {
    thumbnails: ["/images/electrician/light.jpg"],
    previews: ["/images/electrician/light.jpg"],
  },

  variants: [],
},

];



export default shopData;