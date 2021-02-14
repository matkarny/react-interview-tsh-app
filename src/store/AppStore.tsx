import React, { createContext, useReducer } from "react";
import { productReducer } from "reducer/productReducer";
import { productInitialState } from "state/product";
import { IProductContext } from "interfaces/store";

export const AppContext = createContext<IProductContext
>({
    state: productInitialState,
    dispatch: () => null
});

export const store = createContext(productInitialState);

const AppStore: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, productInitialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
};

export default AppStore;