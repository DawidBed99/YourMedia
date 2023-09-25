import "./SingleProduct.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getTotals } from "../app/features/cartSlice";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const SingleProduct = () => {
  const params = useParams();
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    dispatch(getTotals());
  };
  const index = params.id;
  return (
    <div className="singleProductContainer">
      {products.loading ? (
        <div className="loading">Loading....</div>
      ) : (
        <div className="singleProductElements">
          <div className="singleProductImgContainer">
            <img src={products.items[index].image} />
          </div>
          <div className="details">
            <h2 className="singleProductName">{products.items[index].name}</h2>
            <hr className="solid" />
            <h3>{products.items[index].desc} </h3>
            <hr className="solid" />
            <h3 className="singlePrice">${products.items[index].price} </h3>
            <hr className="solid" />
            <button
              onClick={() => handleAddToCart(products.items[index])}
              className="addToCartSingle"
            >
              Add to cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
