import "./ProductsComponents/Home.css";
import { useNavigate } from "react-router-dom";
const MenuNav = () => {
  const navigate = useNavigate();
  return (
    <div className="menuNavContainer">
      <h3>Categories</h3>
      <button onClick={() => navigate("/products")}>All</button>
      <hr className="solid3" />
      <button onClick={() => navigate("/tablets")}>Tablets</button>
      <hr className="solid3" />
      <button onClick={() => navigate("/phones")}>Phones</button>
      <hr className="solid3" />
      <button onClick={() => navigate("/laptops")}>Laptops</button>
      <hr className="solid3" />
    </div>
  );
};

export default MenuNav;
