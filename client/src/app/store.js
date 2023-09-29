import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/productsSlice";
import cartReducer from "./features/cartSlice";
import searchSlice from "./features/searchSlice";
import singleProductSlice from "./features/singleProductSlice";
const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    search: searchSlice
  },
});

export default store;
