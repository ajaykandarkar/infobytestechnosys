import { createSlice } from '@reduxjs/toolkit';

// Load cart from local storage, or initialize with an empty array if not found
const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

const initialState = {
  cartItem: storedCart,
  cartCount: storedCart.length,
  totalPrice: storedCart.reduce((total, item) => total + item.price * (item.quantity || 1), 0),
  cartToggleStatus: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItem.push(action.payload);
      state.cartToggleStatus[action.payload.id] = false;
      state.cartCount += 1;
      // Save updated cart to localStorage
      localStorage.setItem('cart', JSON.stringify(state.cartItem));
    },
    removeFromCart: (state, action) => {
      state.cartItem = state.cartItem.filter((item) => item.id !== action.payload);
      state.cartToggleStatus[action.payload] = true;
      state.cartCount -= 1;
      // Save updated cart to localStorage
      localStorage.setItem('cart', JSON.stringify(state.cartItem));
    },
    calculateTotalPrice: (state) => {
      state.totalPrice = state.cartItem.reduce(
        (total, item) => total + item.price * (item.quantity || 1),
        0
      );
    },
  },
});

export const { addToCart, removeFromCart, calculateTotalPrice } = cartSlice.actions;
export default cartSlice.reducer;
