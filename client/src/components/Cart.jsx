import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ArrowBack from "@mui/icons-material/ArrowBack";
import "./Cart.css";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  addToCart,
  removeFromCart,
  decreaseQuantity,
  clearCart,
  getTotals,
} from "../app/features/cartSlice";
const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleRemoveItemFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };
  const handleDecreaseQuantity = (cartItem) => {
    dispatch(decreaseQuantity(cartItem));
  };
  const handleIncreaseQuantity = (cartItem) => {
    dispatch(addToCart(cartItem));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const cartList = cart.cartItems?.map((items) => {
    return (
      <div key={items.id}>
        <hr className="solid" />
        <div className="cartItemContainer">
          <div className="cartProduct">
            <img className="productImg" src={items.image} />
            <div className="cartItemDetails">
              <h3>{items.name}</h3>
              <h4>{items.desc}</h4>
              <button
                onClick={() => handleRemoveItemFromCart(items)}
                className="removeFromCartBTN"
              >
                <DeleteIcon /> Remove
              </button>
            </div>
          </div>
          {/* <div className="cartItemFooter"> */}
          <div className="priceContainer">
            <h2 className="priceText">Price:</h2>
            <h2 className="cartSinglePrice">${items.price}</h2>
          </div>
          <h2 className="quantityText">Quantity:</h2>
          <div className="quantityContainer">
            <h4 className="itemQuantity">{items.cartQuantity}</h4>
            <div className="changeQuantityButtonContainer">
              <button onClick={() => handleIncreaseQuantity(items)}>+</button>
              <button onClick={() => handleDecreaseQuantity(items)}>-</button>
            </div>
          </div>
          <div className="totalContainer">
            <h2 className="totalText">Total:</h2>
            <h2>${items.cartQuantity * items.price}</h2>
            {/* </div> */}
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="cartContainer">
      <h2 className="cartHeader">Shoppping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="emptyCart">
          <h3>Your Cart is empty!</h3>
          <div className="startShoppingButtonContainer">
            <button onClick={() => navigate("/")} className="backToShoppingBTN">
              <ArrowBack /> Go back to shop
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="cartListDesc">
            <h3>PHONE</h3>
            <h3>PRICE</h3>
            <h3>QUANTITY</h3>
            <h3>TOTAL</h3>
          </div>
          <div className="notEmptyCartContainer">{cartList}</div>
          <hr className="solid" />
          <div className="cartFooter">
            <button onClick={() => handleClearCart()} className="clearCartBTN">
              <DeleteIcon /> Clear Cart
            </button>
            <button onClick={() => navigate("/")} className="backToShoppingBTN">
              <ArrowBack /> Continue Shopping
            </button>
            <h2>Subtotal: ${cart.cartTotalAmount} </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
