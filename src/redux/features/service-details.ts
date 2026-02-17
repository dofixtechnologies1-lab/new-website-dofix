import { createSlice } from "@reduxjs/toolkit";
import { Service } from "@/types/service";

type InitialState = {
  value: Service;
};

const initialState = {
  value: {
    title: "",
    img: "",
    id: 0,
  },
} as InitialState;

export const serviceDetails = createSlice({
  name: "serviceDetails",
  initialState,
  reducers: {
    updateserviceDetails: (_, action) => {
      return {
        value: {
          ...action.payload,
        },
      };
    },
  },
});

export const { updateserviceDetails } = serviceDetails.actions;
export default serviceDetails.reducer;
