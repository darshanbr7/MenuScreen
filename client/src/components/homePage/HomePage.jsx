import React from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";
import veg from "../images/veg.jpeg";
import nonVeg from "../images/nonVeg.jpeg";
import beverages from "../images/beverages.png";

const HomePage = () => {
  const navigate = useNavigate();
  return (
      <div className="homepage">
        <div className="items">
          <p className="text">Veg Items</p>
          <div className="images">
            <img src={veg} alt="Not found" className="image-single" />
          </div>
          <div className="explore-items">
            <button
              onClick={() => {
                navigate("/veg", { state: { type: "veg" } });
              }}
            >
              Explore Veg
            </button>
          </div>
        </div>
        <div className="items">
          <p className="text"> Non Veg Items</p>
          <div className="images">
            <img src={nonVeg} alt="Not found" className="image-single" />
          </div>
          <div className="explore-items">
            <button
              onClick={() => {
                navigate("/nonVeg", { state: { type: "nonVeg" } });
              }}
            >
              Explore Non-Veg
            </button>
          </div>
        </div>
        <div className="items">
          <p className="text"> Beverages</p>
          <div className="images">
            <img src={beverages} alt="Not found" className="image-single" />
          </div>
          <div className="explore-items">
            <button
              onClick={() => {
                navigate("/beverages", { state: { type: "Beverages" } });
              }}
            >
              {" "}
              Explore Drinks
            </button>
          </div>
        </div>
      </div>
  );
};

export default HomePage;
