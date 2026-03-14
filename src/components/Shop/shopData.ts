import { Product } from "@/types/product";

const shopData: Product[] = [

  // ================= AC Service =================

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



// ================= Ac Repair =================


  {
    id: "ac-less-no-cooling-repair",
    title: "Ac Less/No Cooling Repair",
    category: "acrepairinstallation",
    subCategory: "ac-repair",
    rateCardKey: "ac",
    reviews: 18,

    imgs: {
      thumbnails: ["/images/ac/ac-less.png"],
      previews: ["/images/ac/ac-less.png"],
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
      id: 141,
      title: "Window AC Visiting Charge",
      price: 299,
      oldPrice: 499,
      img: "/images/ac/less-w.png",
      description: "Deep jet cleaning service for cassette AC units",
      },
      {
      id: 142,
      title: "Split AC Visiting Charge",
      price: 299,
      oldPrice: 499,
      img: "/images/ac/less-s.png",
      description: "Deep jet cleaning service for cassette AC units",
      }
    ],
  },

  {
    id: "ac-power-issue-repair",
    title: "Ac Power Issue Repair",
    category: "acrepairinstallation",
    subCategory: "ac-repair",
    rateCardKey: "ac",
    reviews: 18,

    imgs: {
      thumbnails: ["/images/ac/ac-power.png"],
      previews: ["/images/ac/ac-power.png"],
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
      id: 151,
      title: "Window AC Power Issue Repair",
      price: 299,
      oldPrice: 499,
      img: "/images/ac/power-w.png",
      description: "Deep jet cleaning service for cassette AC units",
      },
      {
      id: 142,
      title: "Split AC Power Issue Repair",
      price: 299,
      oldPrice: 499,
      img: "/images/ac/power-s.png",
      description: "Deep jet cleaning service for cassette AC units",
      }
    ],
  },

  {
    id: "ac-noise-smell-repair",
    title: "Ac Noise/Smell Repair",
    category: "acrepairinstallation",
    subCategory: "ac-repair",
    rateCardKey: "ac",
    reviews: 18,

    imgs: {
      thumbnails: ["/images/ac/ac-noise.png"],
      previews: ["/images/ac/ac-noise.png"],
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
      id: 161,
      title: "Window AC Noise or Smell Repair",
      price: 499,
      oldPrice: 699,
      img: "/images/ac/noise-w.png",
      description: "Deep jet cleaning service for cassette AC units",
      },
      {
      id: 162,
      title: "Split AC Noise or Smell Repair",
      price: 499,
      oldPrice: 699,
      img: "/images/ac/noise-s.png",
      description: "Deep jet cleaning service for cassette AC units",
      }
    ],
  },

  {
    id: "ac-water-leakage-repair",
    title: "Ac Water Leakage Repair",
    category: "acrepairinstallation",
    subCategory: "ac-repair",
    rateCardKey: "ac",
    reviews: 18,

    imgs: {
      thumbnails: ["/images/ac/ac-leakage.png"],
      previews: ["/images/ac/ac-leakage.png"],
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
      id: 171,
      title: "Window AC Water Leakage Repair",
      price: 499,
      oldPrice: 699,
      img: "/images/ac/leakage-w.png",
      description: "Deep jet cleaning service for cassette AC units",
      },
      {
      id: 172,
      title: "Split AC Water Leakage Repair",
      price: 499,
      oldPrice: 799,
      img: "/images/ac/leakage-s.png",
      description: "Deep jet cleaning service for cassette AC units",
      }
    ],
  },

  {
    id: "ac-gas-refill-checkup",
    title: "Ac Gas Refill/CheckUp",
    category: "acrepairinstallation",
    subCategory: "ac-repair",
    rateCardKey: "ac",
    reviews: 18,

    imgs: {
      thumbnails: ["/images/ac/ac-refill.png"],
      previews: ["/images/ac/ac-refill.png"],
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
      id: 181,
      title: "Gas Refill 1 Ton",
      price: 2499,
      oldPrice: 2599,
      img: "/images/ac/ac-refill.png",
      description: "Deep jet cleaning service for cassette AC units",
      },
      {
      id: 182,
      title: "Gas Refill 1.5 Ton",
      price: 2799,
      oldPrice: 2899,
      img: "/images/ac/refill-1.5.png",
      description: "Deep jet cleaning service for cassette AC units",
      },
      {
      id: 183,
      title: "Gas Refill 2 Ton",
      price: 3199,
      oldPrice: 3299,
      img: "/images/ac/refill-2.png",
      description: "Deep jet cleaning service for cassette AC units",
      },
    ],
  },

  {
    id: "cassette-ac-repair",
    title: "Cassette Ac Repair",
    category: "acrepairinstallation",
    subCategory: "ac-repair",
    rateCardKey: "ac",
    reviews: 18,

    imgs: {
      thumbnails: ["/images/ac/ac-repair.png"],
      previews: ["/images/ac/ac-repair.png"],
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
      // {
      // id: 191,
      // title: "Window AC Visiting Charge",
      // price: 299,
      // oldPrice: 499,
      // img: "/images/ac/c-jet-service.png",
      // description: "Deep jet cleaning service for cassette AC units",
      // },
      // {
      // id: 142,
      // title: "Split AC Visiting Charge",
      // price: 299,
      // oldPrice: 499,
      // img: "/images/ac/c-jet-service.png",
      // description: "Deep jet cleaning service for cassette AC units",
      // },
    ],
  },


// ================= Installation =================


  {
    id: "ac-installation",
    title: "AC Installation",
    category: "acrepairinstallation",
    subCategory: "ac-installation-uninstallation",
    rateCardKey: "ac",
    reviews: 12,

    imgs: {
      thumbnails: ["/images/ac/ac-ins.png"],
      previews: ["/images/ac/ac-ins.png"],
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
      id: 201,
      title: "Window AC Installation",
      price: 599,
      oldPrice: 799,
      img: "/images/ac/ins-w.png",
      description: "Deep jet cleaning service for cassette AC units",
      },
      {
      id: 202,
      title: "Split AC Installation",
      price: 1509,
      oldPrice: 1599,
      img: "/images/ac/ins-s.png",
      description: "Deep jet cleaning service for cassette AC units",
      },
      
    ],
  },
  {
    id: "ac-uninstallation",
    title: "AC Uninstallation",
    category: "acrepairinstallation",
    subCategory: "ac-installation-uninstallation",
    rateCardKey: "ac",
    reviews: 12,

    imgs: {
      thumbnails: ["/images/ac/ac-unins.png"],
      previews: ["/images/ac/ac-unins.png"],
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
      id: 201,
      title: "Window AC Uninstallation",
      price: 599,
      oldPrice: 799,
      img: "/images/ac/unins-w.png",
      description: "Deep jet cleaning service for cassette AC units",
      },
      {
      id: 202,
      title: "Split AC Uninstallation",
      price: 1509,
      oldPrice: 1599,
      img: "/images/ac/unins-s.png",
      description: "Deep jet cleaning service for cassette AC units",
      },
      
    ],
  },



// ================= Addon =================


  {
  id: "compressor-replacement",
  title: "Compressor Replacement",
  category: "acrepairinstallation",
  subCategory: "ac-addon-services",
  rateCardKey: "ac",
  reviews: 27,

  imgs: {
    thumbnails: ["/images/ac/comp-rep.png"],
    previews: ["/images/ac/comp-rep.png"],
  },

  variants: [
    {
      id: 310,
      title: "Compressor Replacement (0.8 Ton to 1 Ton)",
      price: 6200,
      oldPrice: 7499,
      img: "/images/ac/compressor1.png",
      description: "AC compressor replacement service",
    },
    {
      id: 3310,
      title: "Compressor Replacement (1.5 Ton)",
      price: 7200,
      oldPrice: 8499,
      img: "/images/ac/compressor2.png",
      description: "AC compressor replacement service",
    },
    {
      id: 3210,
      title: "Compressor Replacement (2 Ton)",
      price: 9200,
      oldPrice: 10499,
      img: "/images/ac/compressor3.png",
      description: "AC compressor replacement service",
    },
  ],
},

{
  id: "compressor-labour",
  title: "Replacement Compressor Labour Charge",
  category: "acrepairinstallation",
  subCategory: "ac-addon-services",
  rateCardKey: "ac",
  reviews: 25,

  imgs: {
    thumbnails: ["/images/ac/rep-comp.png"],
    previews: ["/images/ac/rep-comp.png"],
  },

  variants: [
    {
      id: 311,
      title: "Replacement Compressor Labour Charge (1 Ton)",
      price: 2500,
      oldPrice: 4499,
      img: "/images/ac/compressor-labour1.png",
      description: "Labour charge for AC compressor replacement",
    },
    {
      id: 3311,
      title: "Replacement Compressor Labour Charge (1.5 Ton)",
      price: 3500,
      oldPrice: 4999,
      img: "/images/ac/compressor-labour2.png",
      description: "Labour charge for AC compressor replacement",
    },
    {
      id: 3211,
      title: "Replacement Compressor Labour Charge (2 Ton)",
      price: 4000,
      oldPrice: 5499,
      img: "/images/ac/compressor-labour3.png",
      description: "Labour charge for AC compressor replacement",
    },
  ],
},

{
  id: "ac-service-valve",
  title: "Service Valve",
  category: "acrepairinstallation",
  subCategory: "ac-addon-services",
  rateCardKey: "ac",
  reviews: 30,

  imgs: {
    thumbnails: ["/images/ac/valve.png"],
    previews: ["/images/ac/valve.png"],
  },

  variants: [
    {
      id: 306,
      title: "Service Valve (0.625 inch)",
      price: 799,
      oldPrice: 999,
      img: "/images/ac/valve1.png",
      description: "AC service valve replacement",
    },
    {
      id: 3206,
      title: "Service Valve (0.375 inch)",
      price: 549,
      oldPrice: 899,
      img: "/images/ac/valve2.png",
      description: "AC service valve replacement",
    },
    {
      id: 3306,
      title: "Service Valve (0.50 inch)",
      price: 649,
      oldPrice: 799,
      img: "/images/ac/valve3.png",
      description: "AC service valve replacement",
    },
    {
      id: 3406,
      title: "Service Valve (0.25 inch)",
      price: 449,
      oldPrice: 599,
      img: "/images/ac/valve4.png",
      description: "AC service valve replacement",
    },
  ],
},

{
  id: "ac-fan-motor",
  title: "Fan Motor",
  category: "acrepairinstallation",
  subCategory: "ac-addon-services",
  rateCardKey: "ac",
  reviews: 21,

  imgs: {
    thumbnails: ["/images/ac/fan.png"],
    previews: ["/images/ac/fan.png"],
  },

  variants: [
    {
      id: 307,
      title: "Fan Motor Split AC Outdoor",
      price: 2249,
      oldPrice: 4499,
      img: "/images/ac/fan-motor1.png",
      description: "AC outdoor fan motor replacement",
    },
    {
      id: 3207,
      title: "Fan Motor Window AC",
      price: 2999,
      oldPrice: 4999,
      img: "/images/ac/fan-motor2.png",
      description: "AC outdoor fan motor replacement",
    },
  ],
},

{
  id: "ac-blower-motor",
  title: "Blower Motor",
  category: "acrepairinstallation",
  subCategory: "ac-addon-services",
  rateCardKey: "ac",
  reviews: 22,

  imgs: {
    thumbnails: ["/images/ac/blower.png"],
    previews: ["/images/ac/blower.png"],
  },

  variants: [
    {
      id: 308,
      title: "Blower Motor Split AC",
      price: 2499,
      oldPrice: 2599,
      img: "/images/ac/blower1.png",
      description: "AC indoor blower motor replacement",
    },
    {
      id: 3308,
      title: "Blower Replacement",
      price: 1449,
      oldPrice: 2199,
      img: "/images/ac/blower2.png",
      description: "AC indoor blower motor replacement",
    },
  ],
},

{
  id: "ac-contactor",
  title: "Contactor",
  category: "acrepairinstallation",
  subCategory: "ac-addon-services",
  rateCardKey: "ac",
  reviews: 1,

  imgs: {
    thumbnails: ["/images/ac/cont.png"],
    previews: ["/images/ac/cont.png"],
  },

  variants: [
    {
      id: 309,
      title: "Contactor Replaced",
      price: 499,
      oldPrice: 599,
      img: "/images/ac/contactor1.png",
      description: "AC contactor replacement",
    },
    {
      id: 3309,
      title: "Contactor Daikin or O-General",
      price: 1299,
      oldPrice: 1499,
      img: "/images/ac/contactor2.png",
      description: "AC contactor replacement",
    },
  ],
},

  {
  id: "ac-stabilizer",
  title: "Stabilizer",
  category: "acrepairinstallation",
  subCategory: "ac-addon-services",
  rateCardKey: "ac",
  reviews: 28,

  imgs: {
    thumbnails: ["/images/ac/stab.png"],
    previews: ["/images/ac/stab.png"],
  },

  description: {
    about: [
      "AC stabilizer installation",
      "Voltage fluctuation protection",
      "Electrical safety check",
      "Stabilizer wiring setup",
    ],

    benefits: [
      "Protects AC from voltage fluctuations",
      "Prevents compressor damage",
      "Improves AC lifespan",
    ],
  },

  variants: [
    {
      id: 301,
      title: "Stabilizer Repair",
      price: 1499,
      oldPrice: 2499,
      img: "/images/ac/stabilizer1.png",
      description: "Professional stabilizer installation for AC",
    },
    {
      id: 3301,
      title: "Stabilizer Connection",
      price: 399,
      oldPrice: 449,
      img: "/images/ac/stabilizer2.png",
      description: "Professional stabilizer installation for AC",
    },
  ],
},

{
  id: "pcb-repair-replace",
  title: "PCB Replace & Repair",
  category: "acrepairinstallation",
  subCategory: "ac-addon-services",
  rateCardKey: "ac",
  reviews: 22,

  imgs: {
    thumbnails: ["/images/ac/pcb.png"],
    previews: ["/images/ac/pcb.png"],
  },

  description: {
    about: [
      "AC stabilizer installation",
      "Voltage fluctuation protection",
      "Electrical safety check",
      "Stabilizer wiring setup",
    ],

    benefits: [
      "Protects AC from voltage fluctuations",
      "Prevents compressor damage",
      "Improves AC lifespan",
    ],
  },

  variants: [
    {
      id: 302,
      title: "Non Inverter PCB Repair",
      price: 1500,
      oldPrice: 1599,
      img: "/images/ac/pcb1.png",
      description: "AC PCB board repair service",
    },
    {
      id: 3303,
      title: "Inverter PCB Repair",
      price: 4500,
      oldPrice: 4599,
      img: "/images/ac/pcb2.png",
      description: "AC PCB board replacement",
    },
    {
      id: 3202,
      title: "Fuse Change in PCB",
      price: 149,
      oldPrice: 599,
      img: "/images/ac/pcb3.png",
      description: "AC PCB board repair service",
    },
    {
      id: 3103,
      title: "Convert PCB With Remote",
      price: 1500,
      oldPrice: 1599,
      img: "/images/ac/pcb4.png",
      description: "AC PCB board replacement",
    },
    // {
    //   id: 3003,
    //   title: "Testing PCB",
    //   price: 400,
    //   oldPrice: 599,
    //   img: "/images/ac/pcb.png",
    //   description: "AC PCB board replacement",
    // },
  ],
},

{
  id: "copper-pipe-service",
  title: "Copper Pipe Service",
  category: "acrepairinstallation",
  subCategory: "ac-addon-services",
  rateCardKey: "ac",
  reviews: 27,

  imgs: {
    thumbnails: ["/images/ac/cop-pipe.png"],
    previews: ["/images/ac/cop-pipe.png"],
  },

  description: {
    about: [
      "AC stabilizer installation",
      "Voltage fluctuation protection",
      "Electrical safety check",
      "Stabilizer wiring setup",
    ],

    benefits: [
      "Protects AC from voltage fluctuations",
      "Prevents compressor damage",
      "Improves AC lifespan",
    ],
  },

  variants: [
    {
      id: 304,
      title: "Copper Pipe 0.5 inch",
      price: 2000,
      oldPrice: 2500,
      img: "/images/ac/copper1.png",
      description: "Copper pipe installation for AC",
    },
    {
      id: 4304,
      title: "Copper Pipe 0.25 inch",
      price: 1300,
      oldPrice: 2000,
      img: "/images/ac/copper2.png",
      description: "Copper pipe installation for AC",
    },
    {
      id: 5304,
      title: "Copper Pipe 0.375 inch",
      price: 1500,
      oldPrice: 1800,
      img: "/images/ac/copper3.png",
      description: "Copper pipe installation for AC",
    },
    {
      id: 6304,
      title: "Copper Pipe 0.625 inch",
      price: 1600,
      oldPrice: 2000,
      img: "/images/ac/copper4.png",
      description: "Copper pipe installation for AC",
    },
  ],
},

{
  id: "ac-reinstallation",
  title: "AC Re - Installation",
  category: "acrepairinstallation",
  subCategory: "ac-addon-services",
  rateCardKey: "ac",
  reviews: 28,

  imgs: {
    thumbnails: ["/images/ac/re-ins.png"],
    previews: ["/images/ac/re-ins.png"],
  },

  variants: [
    {
      id: 305,
      title: "Split AC Reinstallation",
      price: 699,
      oldPrice: 789,
      img: "/images/ac/reinstall1.png",
      description: "AC reinstall after shifting",
    },
     {
      id: 3805,
      title: "Split AC Reinstallation",
      price: 699,
      oldPrice: 799,
      img: "/images/ac/reinstall2.png",
      description: "AC reinstall after shifting",
    },
  ],
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