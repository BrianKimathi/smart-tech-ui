import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const fetchCategories = createAsyncThunk(
  "categories/fetch",
  async () => {
    const response = await fetch("http://127.0.0.1:5000/category");
    const result = await response.json();
    return result.categories;
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default categorySlice.reducer;
