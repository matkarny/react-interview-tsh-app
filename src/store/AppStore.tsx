import { IProductContext } from "interfaces/store";
import React, { createContext, useReducer } from "react";
import { productReducer } from "reducer/productReducer";

export const productInitialState = {
    loading: true,
    products: null,
    paginationInfo: null,
    promo: false,
    active: false,
    search: '',
    page: 1,

}
export const Context = createContext<IProductContext
>({
    state: productInitialState,
    dispatch: () => null
});

export const store = createContext(productInitialState);

const AppStore:React.FC<any> = ({children}) => {
    const [state, dispatch] = useReducer(productReducer, productInitialState);
    
    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
};

export default AppStore;