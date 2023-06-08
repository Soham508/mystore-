'use client';

import { createContext,useState, useContext } from 'react';

export const ProductContext = createContext({});

export function ProductProvider({ children }) {
    const [productData, setProductData] = useState([])

    return <ProductContext.Provider value={{productData, setProductData}}>
        {children}
    </ProductContext.Provider>;
};

export const useProductContext = () => useContext(ProductContext);