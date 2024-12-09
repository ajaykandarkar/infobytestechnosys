import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
  cartCount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState, 

  reducers: {
    addToCart: (state, action) => {
      state.cartItem.push(action.payload); 
      state.cartCount += 1; 
    },
    removeFromCart: (state, action) => {
      state.cartItem = state.cartItem.filter((item) => item.id !== action.payload); 
      state.cartCount -= 1; 
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
