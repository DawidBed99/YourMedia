import "./Welcome.css";
import { useNavigate } from "react-router-dom";
const DescriptionFirst = () => {
  const navigate = useNavigate();

  return (
    <div className="welcomeProductsDescription">
      <div className="descText">
        <h3>
          <strong>Top quality Products</strong>
        </h3>
        <h4>
          Our store provides products with highest qualtiy for good price.
          <br /> You can find here everything you need for good price.
        </h4>
        <button onClick={() => navigate("/products")}>GO SHOPPING</button>
      </div>
      <div className="descriptionImage">
        <img src="https://media.nomadicmatt.com/2020/traveltech1a.jpg" />
      </div>
    </div>
  );
};

export default DescriptionFirst;
