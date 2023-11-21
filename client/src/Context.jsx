import React, { createContext, useState } from "react";
const GlobalContext = createContext();
const Context = ({ children }) => {
  const [addToCart, setAddToCart] = useState([]);
  const handleAddToCart = (value) => {
    if (Array.isArray(value)) {
      setAddToCart([]);
      return;
    }
    const result = [...addToCart, value];
    setAddToCart(result);
  };
  return (
    <GlobalContext.Provider value={{ addToCart, handleAddToCart }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { Context, GlobalContext };
