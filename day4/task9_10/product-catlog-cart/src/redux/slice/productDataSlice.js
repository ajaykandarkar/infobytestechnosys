import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProductData = createAsyncThunk(
  'productData/fetchProducts',
  async () => {
   
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      return response.data; 
    } catch (err) {
      console.log(err)
    }
  }
);

const initialState = {
  products: [],
  loading: false,
  error: null,
};

export const ProductSlice = createSlice({
  name: 'productData',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchProductData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductData.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.hasFetched = true;
      })
      .addCase(fetchProductData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default ProductSlice.reducer;
