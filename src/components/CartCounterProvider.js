import React from "react";

import { createContext, useState } from "react";

const CartCounterContext = createContext({});

export const CartCounterProvider = ({ children }) => {
    const [cartCount,setCartCount] = useState(0);

    return (
        <CartCounterContext.Provider value={{cartCount,setCartCount}}>
            {children}
        </CartCounterContext.Provider>
    )
}

export default CartCounterContext;