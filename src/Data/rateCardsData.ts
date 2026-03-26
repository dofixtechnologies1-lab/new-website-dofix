export interface RateItem {
  name: string;
  price: string;
}

export interface CategoryRateCard {
  heading: string;
  note?: string;
  items: RateItem[];
}

export const rateCardsData: Record<string, CategoryRateCard> = {
  ac: {
    heading: "AC Repair Rate Card",
    note:
      "Labour charges are capped at ₹499 per appliance. All prices include spare parts sourcing & partner conveyance.",
   items: [
  // Electrical Parts
  { name: "Non-Inverter PCB Repaired", price: "₹1500" },
  { name: "Inverter PCB Repaired", price: "₹4500" },
  { name: "Replace LVT", price: "₹899 + ₹349 (Labour)" },
  { name: "Replace Sensor", price: "₹299 + ₹499 (Labour)" },
  { name: "Contactor Replaced", price: "₹499 + ₹499 (Labour)" },
  { name: "Contactor - Daikin / O-General", price: "₹1299 + ₹499 (Labour)" },
  { name: "Convert PCB with Remote", price: "₹1500" },
  { name: "Fan Capacitor (2.5-10 MFD)", price: "₹249 + ₹399 (Labour)" },
  { name: "Compressor Capacitor (25-60 MFD)", price: "₹400 + ₹499 (Labour)" },
  { name: "Combo Capacitor (Comp + Fan)", price: "₹500 + ₹499 (Labour)" },
  { name: "Fuse Change in PCB", price: "₹150 + ₹350 (Labour)" },
  { name: "Cooling Coil Repair + Anti-Rust Coating", price: "₹1200" },

  // Gas Charging & Cooling Coil Work
  { name: "Gas Charging", price: "₹2500" },
  { name: "Flare Nut Replacement", price: "₹150" },
  { name: "Capillary & Filter Replacement", price: "₹299" },
  { name: "Split AC Copper Condenser Coil - 1 Ton", price: "₹4000" },
  { name: "Split AC Copper Condenser Coil - 1.5 Ton", price: "₹4500" },
  { name: "Split AC Copper Condenser Coil - 2 Ton", price: "₹5000" },
  { name: "Split AC Copper Cooling Coil - 1 Ton", price: "₹5500" },
  { name: "Split AC Copper Cooling Coil - 1.5 Ton", price: "₹6500" },
  { name: "Split AC Copper Cooling Coil - 2 Ton", price: "₹7500" },
  { name: "O-General / Mitsubishi - 1.5 Ton", price: "₹7500" },
  { name: "Window AC Copper Coil - 1 Ton", price: "₹4200" },
  { name: "Window AC Copper Coil - 1.5 Ton", price: "₹4800" },
  { name: "Window AC Copper Coil - 2 Ton", price: "₹5300" },
  { name: "Window AC Condenser Coil - 1 Ton", price: "₹4000" },

  // Compressor & Valve Replacement
  { name: "Compressor Replacement 0.8-1 Ton", price: "₹6200" },
  { name: "Compressor Replacement 1.5 Ton", price: "₹7200" },
  { name: "Compressor Replacement 2 Ton", price: "₹9200" },
  { name: "Replacement Compressor (Labour Extra) - 1 Ton", price: "₹3500" },
  { name: "Replacement Compressor (Labour Extra) - 1.5 Ton", price: "₹4000" },
  { name: "Replacement Compressor (Labour Extra) - 2 Ton", price: "₹4500" },
  { name: "Service Valve 1/4", price: "₹400" },
  { name: "Service Valve 1/2", price: "₹449" },
  { name: "Service Valve 5/8", price: "₹599" },

  // Fan Motors & Mechanical Parts
  { name: "Fan Motor - Split AC Outdoor", price: "₹1750 + ₹499 (Labour)" },
  { name: "Blower Motor - Split AC", price: "₹2000 + ₹499 (Labour)" },
  { name: "Blower Replacement", price: "₹950 + ₹499 (Labour)" },
  { name: "Flap / Swing Motor Replacement", price: "₹500 + ₹499 (Labour)" },
  { name: "Motor Bearing Change", price: "₹1000" },
  { name: "Fan Motor - Window AC", price: "₹2500 + ₹499 (Labour)" },
  { name: "Noise Issue Repair", price: "₹499 (Labour)" },

  // Service & Installation
  { name: "1m Copper Pipe Set (Insulation + Wire)", price: "₹949" },
  { name: "Split AC Wall Stand", price: "₹700" },
  { name: "Outdoor Unit Re-installation", price: "₹699" },
  { name: "Indoor Unit Re-installation", price: "₹699" },
  { name: "Floor Stand", price: "₹600" },
  { name: "Universal Back Plate", price: "₹250" },
  { name: "Fastener Set", price: "₹250" },
  { name: "Lite AC Service", price: "₹499" },
  { name: "Foam-jet AC Service", price: "₹599" },
  { name: "AC Installation", price: "₹1500" },
  { name: "AC Uninstallation", price: "₹699" },
  { name: "Anti-Rust Spray", price: "₹299" },
  { name: "Drain Pipe Replacement (1m)", price: "₹99" },

  // Minor Repairs
  { name: "Water Leakage Repair - Split AC", price: "₹499" },
  { name: "Adjust Grill Locks", price: "₹399 (Labour)" },
  { name: "Adjust Pipe / Compressor Screw", price: "₹399 (Labour)" },
  { name: "Connector Wire (1m)", price: "₹100 + ₹399 (Labour)" },
  { name: "Thimble Tighten / Replace", price: "₹49 + ₹399 (Labour)" },
  { name: "External Dust / Stick Removal", price: "₹399" },
  { name: "Insulation Re-fix", price: "₹399" },
  { name: "Drain Pipe Adjust", price: "₹399" },
  { name: "Noise Adjustment (All Types)", price: "₹499" },
  { name: "Water Leakage - Window AC", price: "₹499" },

  // Other Parts
  { name: "AC Fan Blade", price: "₹700 + ₹499 (Labour)" },
  { name: "Grill Cover", price: "₹1499 + ₹399 (Labour)" },
  { name: "Swing Blade Replacement", price: "₹400 + ₹399 (Labour)" },
  { name: "Universal Remote", price: "₹699" },
  { name: "Water Tray", price: "₹450 + ₹349 (Labour)" },
  { name: "Stabilizer Repair", price: "₹1500" },
  { name: "Stabilizer Connection", price: "₹399 (Labour)" },
  { name: "Sleeves (Per Piece)", price: "₹50" },
  { name: "Drain Pipe Adjust (Direct)", price: "₹100" },
  { name: "Insulation Re-fix (Direct)", price: "₹100" },
  { name: "Noise Issue Repair (Direct)", price: "₹499 (Labour)" },
]
  },

  refrigerator: {
    heading: "Refrigerator Repair Rate Card",
    items: [
      { name: "Gas Refilling", price: "₹2500" },
      { name: "Thermostat Replace", price: "₹700 + ₹499 (Labour)" },
    ],
  },

  "washing-machine": {
    heading: "Washing Machine Repair Rate Card",
    items: [
      { name: "Motor Repair", price: "₹1200" },
      { name: "Drain Pump Replace", price: "₹800 + ₹499 (Labour)" },
    ],
  },
};