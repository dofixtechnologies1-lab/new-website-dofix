import { Product } from "@/types/product";

const shopData: Product[] = [
  {
    title: "Ac Service",
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
    title: "Ac Installation",
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
    title: "Gas Refilling",
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
    title: "Home Cleaning",
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

export default shopData;
