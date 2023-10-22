import Cart from "./components/CartComponents/Cart";
import Home from "./components/ProductsComponents/Home";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Searched from "./components/Searched";
import SingleProduct from "./components/SingleProductComponents/SingleProduct";
import Welcome from "./components/WelcomeComponents/WelcomePage";
import Footer from "./components/Footer";
import Phones from "./components/categories-pages/Phones";
import Tablets from "./components/categories-pages/Tablets";
import Laptops from "./components/categories-pages/Laptops";
import { ToastContainer } from "react-toastify";
import Logo from "./components/images/Logo.png";
import "./styles.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import ScrollToTop from "./components/ScrollTop";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar logo={Logo} />
        <ScrollToTop />
        <ToastContainer />
        <Routes>
          <Route path="/products" element={<Home />}></Route>
          <Route path="/phones" element={<Phones />}></Route>
          <Route path="/tablets" element={<Tablets />}></Route>
          <Route path="/laptops" element={<Laptops />}></Route>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/search/:name" element={<Searched />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/notFound" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/notFound" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
