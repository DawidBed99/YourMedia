import "./Welcome.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";
import TrendingItem from "./TrenidngItems";
import DescriptionFirst from "./DescriptionFirst";
import DescriptionSecond from "./DescriptionSecond";
import WelcomeMenu from "./WelcomeMenu";
import ImageTablets from "../images/Tablets.png";
import ImageLaptops from "../images/Laptops.png";
import ImagePhones from "../images/Phones.png";
const Welcome = () => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.products);

  const list = products.items.map((product) => {
    if (product.rating === "top") {
      return (
        <div
          className="phoneElementContainerWelcome"
          key={product.id}
          onClick={() => {
            navigate(`/product/${product.id}`);
          }}
        >
          <h3 className="productName">{product.name}</h3>

          <h4 className="price">${product.price}</h4>
          <img className="productImgWelcome" src={product.image} />
        </div>
      );
    }
  });

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 260;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 260;
  };

  return (
    <div className="welcomeContainer">
      <WelcomeMenu
        imgTablet={ImageTablets}
        imgLaptops={ImageLaptops}
        imgPhones={ImagePhones}
      />
      <div className="topProducts">
        <h2>Our top products</h2>
        <div className="topProductsContainer">{list}</div>
      </div>
      <DescriptionFirst />
      <div className="trendingContainer">
        <div className="trendingHeader">
          <h3>
            <strong>Trending products</strong>
          </h3>
          <div className="trendingButtons">
            <button onClick={slideLeft}>
              <ArrowBack />
            </button>
            <button onClick={slideRight}>
              <ArrowForward />
            </button>
          </div>
        </div>
        <div className="trendingItems" id="slider">
          <TrendingItem />
        </div>
      </div>
      <DescriptionSecond />
    </div>
  );
};

export default Welcome;
