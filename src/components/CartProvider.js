import React from "react";

import { createContext, useState } from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [cartData,setCartData] = useState([]);

    return (
        <CartContext.Provider value={{cartData,setCartData}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;