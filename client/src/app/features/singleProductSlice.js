import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  items3: [],
  status3: null,
  loading3: true,
};

export const singleProductFetch = createAsyncThunk(
  "singleProduct/singleProductFetch",
  async () => {
    const response = await axios.get(`http://localhost:5000/products`);
    return response.data;
  }
);

const singleProductSlice = createSlice({
  name: " singleProduct",
  initialState,
  reducers: {},
  extraReducers: {
    [singleProductFetch.pending]: (state, action) => {
      state.status3 = "pending";
    },
    [singleProductFetch.fulfilled]: (state, action) => {
      state.status3 = "success";
      state.items3 = action.payload;
      state.loading3 = false;
    },
    [singleProductFetch.rejected]: (state, action) => {
      state.status3 = "rejected";
    },
  },
});

export default singleProductSlice.reducer;
