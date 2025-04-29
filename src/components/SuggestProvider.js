import React from "react";

import { createContext, useState } from "react";

const SuggestContext = createContext({});

export const SuggestProvider = ({ children }) => {
    const [suggest,setSuggest] = useState([]);

    return (
        <SuggestContext.Provider value={{ suggest, setSuggest }}>
            {children}
        </SuggestContext.Provider>
    )
}

export default SuggestContext;