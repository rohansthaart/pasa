import React, { useState, createContext } from 'react'

export const cartContext = createContext();


export function CartProvider(props) {
const [cartItem, setCartItem]= useState([]);

    return <cartContext.Provider value={[cartItem,setCartItem]}>{props.children}</cartContext.Provider>
        
}

 

