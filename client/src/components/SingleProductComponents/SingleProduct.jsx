import "./SingleProduct.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getTotals } from "../../app/features/cartSlice";
import { useParams } from "react-router-dom";
import { useState } from "react";
const SingleProduct = () => {
  const params = useParams();
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const index = params.id;
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    dispatch(getTotals());
  };

  const gallery = products.items[index]?.gallery.map((item) => {
    return (
      <li>
        <button
          onClick={() => {
            setActiveImg(item.img);
            console.log(activeImg);
          }}
        >
          <img className="galleryMiniImg" src={item.img} />
        </button>
      </li>
    );
  });

  const about = products.items[index]?.about.map((item) => {
    return <li>{item.about}</li>;
  });
  const spec = products.items[index]?.specification.map((item) => {
    return (
      <tr>
        <td className="firstCell">{item.title}</td>
        <td className="secondCell">{item.spec}</td>
      </tr>
    );
  });
  const [activeImg, setActiveImg] = useState("");

  return (
    <div className="singleProductContainer">
      {products.loading ? (
        <div className="loading">Loading....</div>
      ) : (
        <div className="singleProductElements">
          <div className="upperContainer">
            <div className="gallery">
              <ul>{gallery}</ul>
              <div className="singleProductImgContainer">
                <img
                  className="singleProductImage"
                  src={
                    activeImg.length > 0
                      ? activeImg
                      : products.items[index].image
                  }
                />
              </div>
            </div>

            <div className="details">
              <h2 className="singleProductName">
                {products.items[index].nameLong}
              </h2>
              <hr className="solid" />
              <div className="descriptionContaniner">
                <h3>Display: {products.items[index].fulldesc.display}</h3>
                <h3>Processor: {products.items[index].fulldesc.processor}</h3>
              </div>
              <hr className="solid" />
              <h3 className="singlePrice">
                Price: ${products.items[index].price}
              </h3>
              <hr className="solid" />
              <button
                onClick={() => handleAddToCart(products.items[index])}
                className="addToCartSingle"
              >
                Add to cart
              </button>
            </div>
          </div>
          <div className="aboutContainer">
            <h2>About product</h2>
            <ul className="aboutList">{about}</ul>
          </div>
          <div className="specificationContainer">
            <table>
              <thead>
                <tr>
                  <th colspan="2"> Technical Specification</th>
                </tr>
              </thead>
              <tbody>{spec}</tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
