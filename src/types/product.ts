export interface Product {
  id: number;
  title: string;
  reviews: number;
  price: number;
  discountedPrice: number;

  categoryId: string;   // 🔥 backend purpose (1,2,3...)
  rateCardKey?: string; // 🔥 rate card ke liye (ac, refrigerator...)

  imgs: {
    thumbnails: string[];
    previews: string[];
  };
}