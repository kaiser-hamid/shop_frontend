import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isOpen: false,
    items: [],
    test: "kaiser",
  },
  reducers: {
    toggleCart(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleCart: toggleCartAction } = cartSlice.actions;

export default cartSlice.reducer;
