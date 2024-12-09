import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../slice/productDataSlice'
import cartReducer from '../slice/cartSlice'
export const store = configureStore({
  reducer: {
    productData : productReducer,
    cart : cartReducer
  },
})