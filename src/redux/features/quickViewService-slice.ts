import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { Product } from "@/types/product";
import { Service } from "@/types/service";

type InitialState = {
  value: Service;
};

const initialState = {
  value: {
    title: "",
    img: "",
    id: 0,
  } as Service,
} as InitialState;

export const quickView = createSlice({
  name: "quickViewServices",
  initialState,
  reducers: {
    updateQuickViewServices: (_, action) => {
      return {
        value: {
          ...action.payload,
        },
      };
    },

    resetQuickView: () => {
      return {
        value: initialState.value,
      };
    },
  },
});

export const { updateQuickViewServices, resetQuickView } = quickView.actions;
export default quickView.reducer;
