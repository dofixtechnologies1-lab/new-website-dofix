export interface Variant {
  id: number;
  name: string;
  price: number;
  discountedPrice: number;
  image: string; // Variant image
}

export interface Service {
  id: number;
  title: string;
  categoryId: string;
  reviews: number;
  imgs: {
    thumbnails: string[];
    previews: string[];
  };
  variants: Variant[];
}

const homeCleaningData: Service[] = [
  {
    id: 1,
    title: "Bathroom Cleaning",
    categoryId: "1",
    reviews: 18,
    imgs: {
      thumbnails: ["/images/home/bathroom.jpg"],
      previews: ["/images/home/bathroom.jpg"],
    },
    variants: [
      {
        id: 101,
        name: "Basic Bathroom Cleaning",
        price: 999,
        discountedPrice: 799,
        image: "/images/home/basic-bathroom.jpg",
      },
      {
        id: 102,
        name: "Deep Bathroom Cleaning",
        price: 1499,
        discountedPrice: 1199,
        image: "/images/home/deep-bathroom.jpg",
      },
    ],
  },
];

export default homeCleaningData;