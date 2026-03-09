import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type WishListItem = {
  id: number;
  title: string;
  price: number;
  discountedPrice: number;
  quantity: number;
  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
};

type InitialState = {
  items: WishListItem[];
};

const initialState: InitialState = {
  items: [],
};

export const wishlist = createSlice({
  name: "wishlist",
  initialState,
  reducers: {

    addItemToWishlist: (state, action: PayloadAction<WishListItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (!existingItem) {
        state.items.push(action.payload);
      }
    },

    removeItemFromWishlist: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },

    removeAllItemsFromWishlist: (state) => {
      state.items = [];
    },

  },
});

export const {
  addItemToWishlist,
  removeItemFromWishlist,
  removeAllItemsFromWishlist,
} = wishlist.actions;

export default wishlist.reducer;