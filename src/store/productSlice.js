import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import StatusCodes from "./StatusCodes";

const initialState = {
  data: [],
  status: StatusCodes.IDLE,
  pages: 0,
  currentPage: 1,
};

export const getProducts = createAsyncThunk(
  "products/get",
  async (page = 1) => {
    // Use a default value or validate 'page' before making the request
    const response = await fetch(`http://127.0.0.1:5000/products?page=${page}`);
    const result = await response.json();
    return result;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload.products || [];
      state.pages = action.payload.total_pages || 0;
      state.status = StatusCodes.IDLE;
    });
    builder
      .addCase(getProducts.rejected, (state, action) => {
        console.error("Error fetching products:", action.error.message);
        state.status = StatusCodes.ERROR;
      })
      .addCase(getProducts.pending, (state, action) => {
        state.status = StatusCodes.LOADING;
      });
  },
});

export const { setCurrentPage } = productSlice.actions;
export default productSlice.reducer;
