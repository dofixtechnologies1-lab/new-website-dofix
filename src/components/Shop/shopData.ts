import { Product } from "@/types/product";

const shopData: Product[] = [
  // ================= AC REPAIR INSTALLATION =================

  // {
  //   id: 1,
  //   title: "AC Installation",
  //   category: "acrepairinstallation",
  //   subCategory: "ac-installation",
  //   rateCardKey: "ac",
  //   reviews: 15,
  //   imgs: {
  //     thumbnails: ["/images/ac/ac-main.jpg"],
  //     previews: ["/images/ac/ac-main.jpg"],
  //   },
  //   variants: [],
  // },

  {
    id: 2,
    title: "AC Service",
    category: "acrepairinstallation",
    subCategory: "ac-service",
    rateCardKey: "ac",
    reviews: 20,
    imgs: {
      thumbnails: ["/images/ac/ac-service.jpg"],
      previews: ["/images/ac/ac-service.jpg"],
    },
    variants: [],
  },

  {
    id: 5,
    title: "AC Repair",
    category: "acrepairinstallation",
    subCategory: "ac-repair",   // ✅ added
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
    subCategory: "ac-installation-uninstallation",  // ✅ added
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
    subCategory: "bathroom-cleaning",   // ✅ added
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
    subCategory: "kitchen-cleaning",   // ✅ added
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
    subCategory: "full-home",   // ✅ added
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