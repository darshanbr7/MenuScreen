import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Order.css";

const Order = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div>
      <p className="order-header">Your Order Placed Succesfully</p>
      <div className="order-counter">
        Please use this Token No in Counter: #<p className="order-No">{location.state.orderId}</p>
      </div>
      <p
      className="order-home"
        onClick={() => {
          navigate("/");
        }}
      >
        Go to Home
      </p>
    </div>
  );
};

export default Order;
