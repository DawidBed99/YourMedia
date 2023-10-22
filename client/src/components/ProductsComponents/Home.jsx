import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addToCart, getTotals } from "../../app/features/cartSlice";
import { useNavigate } from "react-router-dom";
import MenuNav from "../MenuNav";
const Home = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    dispatch(getTotals());
  };
  const [color1, setcolor1] = useState("active");
  const [color2, setcolor2] = useState("");
  const [color3, setcolor3] = useState("");
  const [color4, setcolor4] = useState("");
  const [color5, setcolor5] = useState("");
  const [color6, setcolor6] = useState("");
  const [disp, setDisp] = useState("All");
  const FILTER_MAP = {
    All: () => true,
    Apple: (item) => item.brand === "Apple",
    Samsung: (item) => item.brand === "Samsung",
    Nokia: (item) => item.brand === "Nokia",
    Lenovo: (item) => item.brand === "Lenovo",
    Acer: (item) => item.brand === "Acer",
  };

  const list = products.items.filter(FILTER_MAP[disp]).map((product) => {
    return (
      <div className="productContainer">
        <div
          className="phoneContainer"
          key={product.id}
          onClick={() => navigate(`/product/${product.id}`)}
        >
          <h3 className="productName">{product.name}</h3>
          <h4>{product.desc}</h4>
          <h4 className="price">${product.price}</h4>
          <img className="productImg" src={product.image} />
          <button
            onClick={(e) => {
              handleAddToCart(product);
              e.stopPropagation();
            }}
            className="addToCart"
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className="homeContainer">
      {products.loading ? (
        <div className="loading">Loading....</div>
      ) : (
        <div className="sidebarListContainer">
          <div className="sidebar">
            <h3>Brands</h3>
            <ul className="buttonsList">
              <li onClick={() => setDisp("All")}>
                <button
                  onClick={() => {
                    setcolor1("active");
                    setcolor2("");
                    setcolor3("");
                    setcolor4("");
                    setcolor5("");
                    setcolor6("");
                  }}
                  className={color1}
                >
                  All
                </button>
              </li>
              <hr className="solid3" />
              <li onClick={() => setDisp("Apple")}>
                <button
                  onClick={() => {
                    setcolor2("active");
                    setcolor1("");
                    setcolor3("");
                    setcolor4("");
                    setcolor5("");
                    setcolor6("");
                  }}
                  className={color2}
                >
                  Apple
                </button>
              </li>
              <hr className="solid3" />
              <li onClick={() => setDisp("Samsung")}>
                <button
                  onClick={() => {
                    setcolor3("active");
                    setcolor1("");
                    setcolor2("");
                    setcolor4("");
                    setcolor5("");
                    setcolor6("");
                  }}
                  className={color3}
                >
                  Samsung
                </button>
              </li>
              <hr className="solid3" />
              <li onClick={() => setDisp("Nokia")}>
                <button
                  onClick={() => {
                    setcolor4("active");
                    setcolor1("");
                    setcolor3("");
                    setcolor2("");
                    setcolor5("");
                    setcolor6("");
                  }}
                  className={color4}
                >
                  Nokia
                </button>
              </li>
              <hr className="solid3" />
              <li onClick={() => setDisp("Lenovo")}>
                <button
                  onClick={() => {
                    setcolor5("active");
                    setcolor1("");
                    setcolor3("");
                    setcolor2("");
                    setcolor4("");
                    setcolor6("");
                  }}
                  className={color5}
                >
                  Lenovo
                </button>
              </li>
              <hr className="solid3" />
              <li onClick={() => setDisp("Acer")}>
                <button
                  onClick={() => {
                    setcolor6("active");
                    setcolor1("");
                    setcolor3("");
                    setcolor2("");
                    setcolor5("");
                    setcolor4("");
                  }}
                  className={color6}
                >
                  Acer
                </button>
              </li>
              <hr className="solid3" />
              <MenuNav />
            </ul>
          </div>
          <hr className="solid2" />
          <div className="listContainer">
            <h2 className="productsHeader"> Products in our shop </h2>
            <div className="elementsContainer">{list}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
