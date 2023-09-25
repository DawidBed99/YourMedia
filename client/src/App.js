import Cart from "./components/Cart";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Searched from "./components/Searched";
import SingleProduct from "./components/SingleProduct";
import { ToastContainer } from "react-toastify";
import "./styles.css";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/search/:name" element={<Searched />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/notFound" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/notFound" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
