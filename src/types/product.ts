export interface Product {
  id: number;
  title: string;
  category: string;        // ✅ ADD
  subCategory: string;     // ✅ ADD
  rateCardKey?: string;
  reviews: number;
  imgs: {
    thumbnails: string[];
    previews: string[];
  };
  variants: {
    id: number;
    name: string;
    price: number;
    discountedPrice: number;
    image: string;
  }[];
}