import Icon from "@mui/icons-material/ShoppingBasketOutlined";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    search: "",
  });
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  const handleSearch = (e) => {
    e.preventDefault();
    localStorage.setItem("search", form.search);

    navigate(`/search/${form.search}`);
    setForm({
      search: "",
    });
  };
  return (
    <nav className="navbar">
      <Link className="link" to="/">
        <h2 className="navbarTitle">YourPhone</h2>
      </Link>
      <form className="search" onSubmit={handleSearch}>
        <input
          type="text"
          value={form.search}
          id="search"
          name="search"
          placeholder="Search by brand eg: Nokia, iPhone..."
          onChange={(e) => updateForm({ search: e.target.value })}
        />
        <button type="submit" className="searchIconBTN">
          <SearchIcon
            sx={{
              width: { xs: "30px", sm: "40px" },
              height: { xs: "30px", sm: "40px" },
            }}
            className="searchIcon"
          />
        </button>
      </form>
      <div className="cartIcon">
        <div className="navIcon">
          <Link className="link" to="/cart">
            <Icon className="cart" sx={{ width: "40px", height: "40px" }} />{" "}
            <span className="quantity">{cartTotalQuantity}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
