import { createContext, useState } from "react";
import { getFsData } from "../config/firestore";

const BekalContext = createContext(null);
const getDefaultCart = () => {
  const { data } = getFsData("courses", true);
  let cart = {};
  for (let i = 0; i < data.length; i++) {
    const { id } = data[i];
    cart[id] = false;
  }
  return cart;
};
const BekalContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: !prev[itemId] }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: !prev[itemId] }));
  };
  const contextValue = { cartItems, addToCart, removeFromCart };
  console.log(cartItems);
  return (
    <BekalContext.Provider value={contextValue}>
      {props.children}
    </BekalContext.Provider>
  );
};

export { BekalContextProvider, BekalContext };