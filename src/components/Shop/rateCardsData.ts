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
      { name: "Non-Inverter PCB repaired", price: "₹1500" },
      { name: "Inverter PCB repaired", price: "₹4500" },
      { name: "LVT (Transformer)", price: "₹900 + ₹349 (Labour)" },
      { name: "Replace sensor", price: "₹350 + ₹499 (Labour)" },
    ],
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