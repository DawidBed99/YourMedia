import "./ProductsComponents/Home.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getTotals } from "../app/features/cartSlice";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ArrowBack from "@mui/icons-material/ArrowBack";
const Home = () => {
  const navigate = useNavigate();
  const params = useParams();
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const handleAddToCart = (search) => {
    dispatch(addToCart(search));
    dispatch(getTotals());
  };

  const list = search.items2.map((product) => {
    if (
      product.brand.toLowerCase() === params.name.toLowerCase() ||
      product.type.toLowerCase() === params.name.toLowerCase() ||
      product.name.toLowerCase().includes(params.name.toLowerCase())
    ) {
      return (
        <div className="productContainer">
          <div className="phoneContainer" key={product.id}>
            <h3
              className="productName"
              onClick={() => {
                navigate(`/product/${product.id}`);
              }}
            >
              {product.name}
            </h3>
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
              Add to cart{" "}
            </button>
          </div>
        </div>
      );
    }
  });

  return (
    <div className="homeContainer">
      {search.loading2 ? (
        <div className="loading">Loading....</div>
      ) : (
        <div className="sidebarListContainer">
          <div className="listContainer">
            <h2 className="productsHeader"> Products in our shop </h2>
            <h3>
              Search results of {search.brand}"
              {params.name.charAt(0).toLocaleUpperCase()}
              {params.name.substring(1).toLocaleLowerCase()}"
            </h3>
            <div className="elementsContainer">{list}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
