export interface Interior {
  id: number;
  title: string;
  reviews: number;
  price: number;
  discountedPrice: number;
  categoryId: string; // 🔥 ADD THIS
  imgs: {
    thumbnails: string[];
    previews: string[];
  };
}
