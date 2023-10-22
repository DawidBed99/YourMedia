import "./Welcome.css";
import {useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const TrandingItems = () => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.products);

  const filteredItems = products.items.filter(
    (item) => item.trending === "trending",
  );

  return (
    <>
      {filteredItems.map((product) => (
        <div
          className="trendingElementContainer"
          key={product.id}
          onClick={() => {
            navigate(`/product/${product.id}`);
          }}
        >
          <h3 className="productName">{product.name}</h3>

          <h4 className="price">${product.price}</h4>
          <img className="productImgTrending" src={product.image} />
        </div>
      ))}
    </>
  );
};

export default TrandingItems;
