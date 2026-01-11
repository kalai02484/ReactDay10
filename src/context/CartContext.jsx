import React, { createContext, useContext, useReducer } from "react";

export const CheckoutContext = createContext();

const initialState = [];

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const itemExists = state.find((item) => item.id === action.payload.id);
      if (itemExists) return state;
      return [...state, { ...action.payload, quantity: 1 }];

    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload.id);

    case "INCREASE_QUANTITY":
      return state.map((item) => 
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    case "DECREASE_QUANTITY":
      return state.map((item) => 
        item.id === action.payload.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );  
    default:
      return state;
  }
};

export const CartProvider = ({children}) => {

  const [cart, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CheckoutContext.Provider value={{ cart, dispatch }}>
      {children}
    </CheckoutContext.Provider>
  ); 
}

export const useCart = () => useContext(CheckoutContext);
