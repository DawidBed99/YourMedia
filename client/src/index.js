import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./app/store";
import { productsFetch } from "./app/features/productsSlice";
import { getTotals } from "./app/features/cartSlice";
import { searchProductsFetch } from "./app/features/searchSlice";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

store.dispatch(productsFetch());
store.dispatch(getTotals());
store.dispatch(searchProductsFetch());

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
