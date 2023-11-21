import React, { useEffect, useState, useContext } from "react";
import apiCall from "../helper/apiCall";
import "../mainCss/Main.css";
import { useLocation } from "react-router-dom";
import { GlobalContext } from "../../Context";
import Navbar from "../Navbar/Navbar";

const Veg = (props) => {
  const { handleAddToCart } = useContext(GlobalContext);
  const { items } = props;
  const [counter, setCounter] = useState(1);
  const handleCart = (items) => {
    const { foodName, imageUrl, foodType, foodPrice, _id } = items;
    const data = {
      id: _id,
      foodName,
      imageUrl,
      foodType,
      foodPrice,
      quantity: counter,
    };
    handleAddToCart(data);
  };

  return (
    <div className="items-main">
      <div className="fooditems">
        <div className="fooditems-name">{items.foodName}</div>
        <div className="foodItem-image">
          <img src={items.imageUrl} alt="not Found" />
        </div>
        <div className="fooditem-amount"> Amount : {items.foodPrice} Rs</div>
        <div className="foodQuantity">
          <button
            className="foodQuantity-decrement"
            onClick={() => {
              if (counter > 1) setCounter(counter - 1);
            }}
          >
            -
          </button>
          <div>{counter}</div>
          <button
            className="foodQuantity-increment"
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            +
          </button>
        </div>
        <div className="addtocart">
          <button
            onClick={() => {
              handleCart(items);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
const VegItems = () => {
  const [veg, setVeg] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await apiCall();
        const vegData = result.filter(
          (food) => food.foodType === location.state.type
        );
        setVeg(vegData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [location.state.type, setVeg]);
  return (
    <div>
      <Navbar />
      {veg.map((items, index) => {
        return (
          <div key={index} className="itemContainer">
            <Veg items={items} />
          </div>
        );
      })}
    </div>
  );
};

export default VegItems;
