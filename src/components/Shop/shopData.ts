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
      thumbnails: ["/images/ac/foam-jet.png"],
      previews: ["/images/ac/foam-jet.png"],
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
        img: "/images/ac/foam-s.png",
        description: "Complete AC inspection and jet cleaning",
      },
      {
        id: 102,
        title: "Window AC Foam Jet Service",
        price: 599,
        oldPrice: 999,
         img: "/images/ac/foam-w.png",
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
    thumbnails: ["/images/ac/jet-pump.png"],
    previews: ["/images/ac/jet-pump.png"],
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
      price: 499,
      oldPrice: 799,
      img: "/images/ac/split-jet.png",
      description: "Basic cleaning and inspection for one AC unit",
    },
    {
      id: 102,
      title: "Window AC Jet Pump Service",
      price: 399,
      oldPrice: 599,
      img: "/images/ac/window-jet.png",
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
    thumbnails: ["/images/ac/gas-charge.png"],
    previews: ["/images/ac/gas-charge.png"],
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
      title: "Gas Charging (0.8 to 1 Ton)",
      price: 2499,
      oldPrice: 2599,
      img: "/images/ac/gas1.png",
      description: "Gas refill service for split AC with pressure check",
    },
    {
      id: 122,
      title: "Gas Charging (1.2 to 1.5 Ton)",
      price: 2799,
      oldPrice: 2899,
      img: "/images/ac/gas2.png",
      description: "Gas refill service for split AC with pressure check",
    },
     {
      id: 123,
      title: "Gas Charging (1.6 to 2 Ton)",
      price: 3199,
      oldPrice: 3299,
      img: "/images/ac/gas3.png",
      description: "Gas refill service for split AC with pressure check",
    },
  ],
},

{
  id: "cassette-ac-jet-service",
  title: "Cassette AC Jet Service",
  category: "acrepairinstallation",
  subCategory: "ac-service",
  rateCardKey: "ac",
  reviews: 6,

  imgs: {
    thumbnails: ["/images/ac/c-jet.png"],
    previews: ["/images/ac/c-jet.png"],
  },

  description: {
    about: [
      "Deep jet cleaning of cassette AC indoor unit",
      "Cooling coil cleaning with high-pressure jet",
      "Blower and fan blade cleaning",
      "Drain tray and drain pipe cleaning",
      "Dust and dirt removal from air vents",
      "Complete AC performance testing after service",
    ],

    benefits: [
      "Improves cooling performance",
      "Removes dust, bacteria and bad odor",
      "Ensures smooth airflow",
      "Reduces electricity consumption",
      "Increases AC lifespan",
    ],
  },

  variants: [
    {
      id: 131,
      title: "Cassette AC Jet Service",
      price: 699,
      oldPrice: 799,
      img: "/images/ac/c-jet-service.png",
      description: "Deep jet cleaning service for cassette AC units",
    },
  ],
},

  {
    id: "ac-less-no-cooling-repair",
    title: "Ac Less/No Cooling Repair",
    category: "acrepairinstallation",
    subCategory: "ac-repair",
    rateCardKey: "ac",
    reviews: 18,

    imgs: {
      thumbnails: ["/images/ac/ac-repair.png"],
      previews: ["/images/ac/ac-repair.png"],
    },

    variants: [

      // id: 1,
      // title: "Cassette AC Jet Service",
      // price: 699,
      // oldPrice: 799,
      // img: "/images/ac/c-jet-service.png",
      // description: "Deep jet cleaning service for cassette AC units",
    ],
  },

  {
    id: 6,
    title: "AC Installation & Uninstallation",
    category: "acrepairinstallation",
    subCategory: "ac-installation-uninstallation",
    rateCardKey: "ac",
    reviews: 12,

    imgs: {
      thumbnails: ["/images/ac/ac-install-uninstall.png"],
      previews: ["/images/ac/ac-install-uninstall.png"],
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
      thumbnails: ["/images/cleaning/deep.png"],
      previews: ["/images/cleaning/deep.png"],
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
      thumbnails: ["/images/cleaning/bathroom.png"],
      previews: ["/images/cleaning/bathroom.png"],
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
      thumbnails: ["/images/cleaning/kitchen.png"],
      previews: ["/images/cleaning/kitchen.png"],
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
      thumbnails: ["/images/cleaning/full-home.png"],
      previews: ["/images/cleaning/full-home.png"],
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
      thumbnails: ["/images/painting/wall.png"],
      previews: ["/images/painting/wall.png"],
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
    thumbnails: ["/images/appliances/fridge.png"],
    previews: ["/images/appliances/fridge.png"],
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
    thumbnails: ["/images/appliances/washing-machine.png"],
    previews: ["/images/appliances/washing-machine.png"],
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
    thumbnails: ["/images/appliances/microwave.png"],
    previews: ["/images/appliances/microwave.png"],
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
    thumbnails: ["/images/interior/modular-kitchen.png"],
    previews: ["/images/interior/modular-kitchen.png"],
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
    thumbnails: ["/images/interior/wardrobe.png"],
    previews: ["/images/interior/wardrobe.png"],
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
    thumbnails: ["/images/electrician/switch-board.png"],
    previews: ["/images/electrician/switch-board.png"],
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
    thumbnails: ["/images/electrician/fan.png"],
    previews: ["/images/electrician/fan.png"],
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
    thumbnails: ["/images/electrician/light.png"],
    previews: ["/images/electrician/light.png"],
  },

  variants: [],
},

];



export default shopData;