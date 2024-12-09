import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [], 
  cartCount: 0, 
  totalPrice: 0, 
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
    calculateTotalPrice: (state) => {
      state.totalPrice = state.cartItem.reduce(
        (total, item) => total + item.price * (item.quantity || 1), 
        0
      );
    },
  },
});

export const { addToCart, removeFromCart, calculateTotalPrice,totalPrice } = cartSlice.actions;
export default cartSlice.reducer;
