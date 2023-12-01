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
      .post(
        `https://menu-screen-server.vercel.app/addCart?totalPrice=${sum}`,
        resultData
      )
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
      <div className="main-cart">
        {addToCart.map((item, index) => {
          return (
            <div key={index} className="item-main">
              <p className="cart-itemname">{item.foodName}</p>
              <img src={item.imageUrl} alt="Not Found" className="cart-image" />
              <p className="cart-type">{item.foodType}</p>
              <p className="cart-quantity"> Quantity : {item.quantity}</p>
              <p className="cart-price">Price :{item.foodPrice}</p>
            </div>
          );
        })}
      </div>
      <p className="cart-totalprice">Total Price : {sum}</p>
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
