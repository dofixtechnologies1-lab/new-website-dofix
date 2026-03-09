export interface Variant {
  id: string | number;
  title: string;
  price: number;
  oldPrice?: number;
  description: string;
}

export interface Product {
  id: string | number;
  title: string;
  category: string;
  subCategory: string;
  rateCardKey: string;
  reviews: number;

  imgs: {
    thumbnails: string[];
    previews: string[];
  };

  description?: {
    about: string[];
    benefits: string[];
  };

  variants: Variant[];
}