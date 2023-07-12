import { createContext, useEffect, useState } from "react";
import { getFsData } from "../config/firestore";

const BekalContext = createContext(null);
// const getDefaultCart = () => {
//   const conditions = [{ field: "isActive", operator: "==", value: true }];
//   let cart = {};
//   const { data } = getFsData("courses", conditions);
//   for (let i = 0; i < data.length; i++) {
//     const { id } = data[i];
//     cart[id] = false;
//   }
//   return cart;
// };
const BekalContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    const getDefaultCart = () => {
      const conditions = [{ field: "isActive", operator: "==", value: true }];
      const { data } = getFsData("courses", conditions);
      const cart = {};
      data.forEach(({ id }) => {
        cart[id] = false;
      });
      setCartItems(cart);
    };

    setTimeout(() => {
      getDefaultCart();
    }, 1000);
  }, []);

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
