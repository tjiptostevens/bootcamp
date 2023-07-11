import { createContext, useState } from "react";
import { getFsData } from "../config/firestore";

const BekalContext = createContext(null);
const getDefaultCart = () => {
  const conditions = [{ field: "isActive", operator: "==", value: true }];
  let cart = {};
  const { data } = getFsData("courses", conditions);
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
  return (
    <BekalContext.Provider value={contextValue}>
      {props.children}
    </BekalContext.Provider>
  );
};

export { BekalContextProvider, BekalContext };
