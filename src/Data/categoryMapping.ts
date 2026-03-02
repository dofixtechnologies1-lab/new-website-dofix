import acData from "@/components/Shop/shopData";
import homeApplianceData from "@/components/Shop/homeApplianceData";
import homeCleaningData from "@/components/Shop/homeCleaningData";
import electricianData from "@/components/Shop/electricianData";
import paintingData from "@/components/Shop/paintingData";
import interiorData from "@/components/Shop/interiorData";
import shopData from "@/components/Shop/shopData";

export const categoryMapping: any = {
  "acrepairinstallation": {
    title: "AC Repair & Installation",
    data: shopData,
    baseRoute: "/acrepairinstallation",
  },

  "home-appliances": {
    title: "Home Appliances",
    data: homeApplianceData,
    baseRoute: "/home-appliances",
  },

  "home-cleaning": {
    title: "Home Cleaning",
    data: homeCleaningData,
    baseRoute: "/home-cleaning",
  },

  electrician: {
    title: "Electrician",
    data: electricianData,
    baseRoute: "/electrician",
  },

  painting: {
    title: "Painting",
    data: paintingData,
    baseRoute: "/painting",
  },

  interior: {
    title: "Interior",
    data: interiorData,
    baseRoute: "/interior",
  },
};