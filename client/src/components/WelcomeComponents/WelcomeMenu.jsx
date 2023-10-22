import "./Welcome.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const WelcomeMenu = ({ imgTablet, imgPhones, imgLaptops }) => {
  const navigate = useNavigate();

  const [scaling, setScaling] = useState("1");
  const [scalingP, setScalingP] = useState("1");
  const [scalingL, setScalingL] = useState("1");

  return (
    <div className="imagesContainer">
      <h2>Categories</h2>
      <div className="horizonContainer">
        <div
          className="tabletContainer"
          onMouseOver={() => {
            setScaling("0.95");
          }}
          onMouseOut={() => {
            setScaling("1");
          }}
          onClick={() => navigate(`/tablets`)}
        >
          <img
            className="tabletImg"
            src={imgTablet}
            style={{ scale: `${scaling}` }}
          />
          <div className="backgroundTablet">
            <h3>Tablets</h3>
          </div>
        </div>
        <div
          className="phoneContainerWelcome"
          onMouseOver={() => {
            setScalingP("0.95");
          }}
          onMouseOut={() => {
            setScalingP("1");
          }}
          onClick={() => navigate(`/phones`)}
        >
          <img
            className="phonesImg"
            src={imgPhones}
            style={{ scale: `${scalingP}` }}
          />
          <div className="backgroundPhone">
            <h3>Phones</h3>
          </div>
        </div>
      </div>
      <div
        className="laptopContainer"
        onMouseOver={() => {
          setScalingL("0.95");
        }}
        onMouseOut={() => {
          setScalingL("1");
        }}
        onClick={() => navigate(`/laptops`)}
      >
        <img
          className="laptopsImg"
          src={imgLaptops}
          style={{ scale: `${scalingL}` }}
        />
        <div className="backgroundLaptop">
          <h3>Laptops</h3>
        </div>
      </div>
    </div>
  );
};

export default WelcomeMenu;
