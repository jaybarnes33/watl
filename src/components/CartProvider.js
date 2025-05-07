import React from "react";

import { createContext, useState } from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const cartFromStorage = JSON.parse(localStorage.getItem("cartData")) || [];
  const [cartData, setCartData] = useState(cartFromStorage);

  const addToCart = (excursion) => {
    const updatedCart = [...cartData, excursion];
    setCartData(updatedCart);
    localStorage.setItem("cartData", JSON.stringify(updatedCart));
  };

  const removeFromCart = (excursion) => {
    const updatedCart = cartData.filter((item) => item.id !== excursion.id);
    setCartData(updatedCart);
    localStorage.setItem("cartData", JSON.stringify(updatedCart));
  };

  const existsInCart = (excursion) => {
    return cartData.some((item) => item.id === excursion.id);
  };

  const itemCount = cartData.length;
  return (
    <CartContext.Provider
      value={{ cartData, addToCart, removeFromCart, existsInCart, itemCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
