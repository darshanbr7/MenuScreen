import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import VegItems from "./components/vegItems/VegItems";
import NonVegItems from "./components/nonVegItems/NonVegItems";
import Beverages from "./components/beverages/Beverages";
import HomePage from "./components/homePage/HomePage";
import CartItems from "./components/cartItems/CartItems";
import Order from "./components/order/Order";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/veg" element={<VegItems />} />
        <Route path="/nonVeg" element={<NonVegItems />} />
        <Route path="/beverages" element={<Beverages />} />
        <Route path="/cart" element={<CartItems />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </div>
  );
};

export default App;
