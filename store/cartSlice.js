import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isOpen: true,
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
