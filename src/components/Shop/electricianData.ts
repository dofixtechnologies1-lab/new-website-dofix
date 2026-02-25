import { Electrician } from "@/types/electrician";
// import { Product } from "@/types/product";


const ElectricianData: Electrician[] = [
  {
    title: "Home Electrician",
    reviews: 15,
    price: 7.0,
    discountedPrice: 2.0,
    id: 1,
    categoryId: "1", // 🔥 Added
    imgs: {
      thumbnails: [
        "/images/products/service-1-bg-1.png",
        "/images/products/service-1-bg-2.png",
      ],
      previews: [
        "/images/products/service-1-bg-1.png",
        "/images/products/service-1-bg-2.png",
      ],
    },
  },
  {
    title: "Kitchen Electrician",
    reviews: 5,
    price: 899.0,
    discountedPrice: 99.0,
    id: 2,
    categoryId: "3", // 🔥 Added
    imgs: {
      thumbnails: [
        "/images/products/service-2-bg-1.png",
        "/images/products/service-2-bg-2.png",
      ],
      previews: [
        "/images/products/service-2-bg-1.png",
        "/images/products/service-2-bg-2.png",
      ],
    },
  },
  {
    title: "Pest Control",
    reviews: 5,
    price: 59.0,
    discountedPrice: 29.0,
    id: 3,
    categoryId: "5", // 🔥 Added
    imgs: {
      thumbnails: [
        "/images/products/service-3-bg-1.png",
        "/images/products/service-3-bg-2.png",
      ],
      previews: [
        "/images/products/service-3-bg-1.png",
        "/images/products/service-3-bg-2.png",
      ],
    },
  },
  {
    title: "Sofa Electrician",
    reviews: 6,
    price: 59.0,
    discountedPrice: 29.0,
    id: 4,
    categoryId: "0", // 🔥 You can change if needed
    imgs: {
      thumbnails: [
        "/images/products/service-4-bg-1.png",
        "/images/products/service-4-bg-2.png",
      ],
      previews: [
        "/images/products/service-4-bg-1.png",
        "/images/products/service-4-bg-2.png",
      ],
    },
  },
];

export default ElectricianData;
