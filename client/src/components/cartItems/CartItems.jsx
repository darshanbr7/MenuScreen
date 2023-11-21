import React, { useContext } from "react";
import { GlobalContext } from "../../Context";
import { useNavigate } from "react-router-dom";
import "./CartItem.css";
import axios from "axios";

const CartItems = () => {
  const { addToCart, handleAddToCart } = useContext(GlobalContext);
  const navigate = useNavigate();
  let sum = 0;
  addToCart.forEach((cart) => {
    return (sum = sum + Number(cart.quantity) * Number(cart.foodPrice));
  });
  const handleSubmit = () => {
    const resultData = addToCart.map((cart) => {
      const { id, foodName, imageUrl, foodType, foodPrice, quantity } = cart;
      return { foodName, imageUrl, foodType, foodPrice, quantity, foodId: id };
    });
    axios
      .post(`http://localhost:8008/addCart?totalPrice=${sum}`, resultData)
      .then((res) => {
        handleAddToCart([]);
        navigate("/order", {
          state: res.data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div>
      <div className="cart-header">
        <h1>Total Orders</h1>
      </div>
      {addToCart.map((item, index) => {
        return (
          <div key={index} className="item-main">
            <h3 className="cart-itemname">{item.foodName}</h3>
            <img src={item.imageUrl} alt="Not Found" className="cart-image" />
               <h3 className="cart-type">{item.foodType}</h3>
            <h3 className="cart-quantity"> Quantity : {item.quantity}</h3>
            <h3 className="cart-price">Price :{item.foodPrice}</h3>
          </div>
        );
      })}
      <h3 className="cart-totalprice">Total Price : {sum}</h3>
      <button
        className="cart-cancel"
        onClick={() => {
          handleAddToCart([]);
          navigate("/");
        }}
      >
        Cancel
      </button>
      <button onClick={handleSubmit} className="cart-order">
        Place Order
      </button>
    </div>
  );
};

export default CartItems;
