'use client';
import { createContext, useMemo, useReducer } from 'react';
export const Store = createContext();
const StateInit = {
  cart: {
    cartItems: [],
  },
};

const ADD_TO_CART = 'ADD_TO_CART'; //type for action
const addToCart = (newItem) => ({
  //action creator
  type: ADD_TO_CART,
  payload: newItem,
});
const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      console.log('here');
      const newItem = action.payload;
      //   updatedCartItems = state.cart.cartItems.map((item) => {
      //     item.slug === newItem.slug ? newItem : item;
      //   });
      //   if (!updatedCartItems.includes(newItem)) {
      //     updatedCartItems.push(newItem);
      //   }
      //   return { ...state, cart: { ...state.cart, cartItems: updatedCartItems } };
    }

    default:
      return state;
  }
};

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, StateInit);
  const contextValue = useMemo(() => {
    return {
      state,
      dispatch,
    };
  });

  return <Store.Provider value={contextValue}>{children}</Store.Provider>;
};

export default StoreProvider;
