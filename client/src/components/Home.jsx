import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addToCart, getTotals } from "../app/features/cartSlice";
import { useNavigate } from "react-router-dom";

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

  const [disp, setDisp] = useState("All");
  const FILTER_MAP = {
    All: () => true,
    iPhone: (phone) => phone.brand === "iPhone",
    Samsung: (phone) => phone.brand === "Samsung",
    Nokia: (phone) => phone.brand === "Nokia",
  };

  const list = products.items.filter(FILTER_MAP[disp]).map((product) => {
    return (
      <div className="productContainer">
        <div className="phoneContainer" key={product.id}>
          <h3
            className="productName"
            onClick={() => {
              console.log(product.id);
              navigate(`/product/${product.id}`);
            }}
          >
            {product.name}
          </h3>
          <h4>{product.desc}</h4>
          <h4 className="price">${product.price}</h4>
          <img className="productImg" src={product.image} />
          <button
            onClick={() => handleAddToCart(product)}
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
            <ul className="buttonsList">
              <li onClick={() => setDisp("All")}>
                <button
                  onClick={() => {
                    setcolor1("active");
                    setcolor2("");
                    setcolor3("");
                    setcolor4("");
                  }}
                  className={color1}
                >
                  All
                </button>
              </li>
              <hr className="solid3" />
              <li onClick={() => setDisp("iPhone")}>
                <button
                  onClick={() => {
                    setcolor2("active");
                    setcolor1("");
                    setcolor3("");
                    setcolor4("");
                  }}
                  className={color2}
                >
                  iPhone
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
                  }}
                  className={color4}
                >
                  Nokia
                </button>
              </li>
              <hr className="solid3" />
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
