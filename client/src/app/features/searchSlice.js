import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  items2: [],
  searchPhrase: localStorage.getItem("search"),
  status2: null,
  // loading2: true,
};

export const searchProductsFetch = createAsyncThunk(
  "searchPhrase/searchProductsFetch",
  async () => {
    const response = await axios.get(`http://localhost:5000/products`);
    return response.data;
  }
);

const searchSlice = createSlice({
  name: " searchPhrases",
  initialState,
  reducers: {
    saveSearchPhrase(state, action) {
      state.searchPhrase = action.payload;
    },
  },
  extraReducers: {
    [searchProductsFetch.pending]: (state, action) => {
      state.status2 = "pending";
    },
    [searchProductsFetch.fulfilled]: (state, action) => {
      state.status2 = "success";
      state.items2 = action.payload;
      // state.loading2 = false;
    },
    [searchProductsFetch.rejected]: (state, action) => {
      state.status2 = "rejected";
    },
  },
});

export default searchSlice.reducer;
export const { saveSearchPhrase } = searchSlice.actions;
