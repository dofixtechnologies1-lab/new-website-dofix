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


export const quickViewService = createSlice({
  name: "quickViewService",
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

export const { updateQuickViewServices, resetQuickView } = quickViewService.actions;
export default quickViewService.reducer;
