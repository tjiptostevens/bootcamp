import { createContext, useEffect, useState } from "react";
import { db } from "../config/firestore";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore/lite";

const BekalContext = createContext(null);

const BekalContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [bekalItems, setBekalItems] = useState([]);
  const collectionRef = collection(db, "courses");

  useEffect(() => {
    const getDefaultData = () => {
      const { data } = getDocs(collectionRef);
      console.log("bekal", data);
      if (data) {
        setCartItems(
          data.docs.map((doc) => ({ ...cartItems, [doc.id]: false }))
        );
        setBekalItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }
    };

    getDefaultData();
  }, []);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: !prev[itemId] }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: !prev[itemId] }));
  };

  const createBekal = async (data) => {
    await addDoc(collectionRef, data);
  };
  const updateBekal = async (id, data) => {
    const bekalDoc = doc(db, "courses", id);
    await updateDoc(bekalDoc, data);
  };
  const deleteBekal = async (id) => {
    const bekalDoc = doc(db, "courses", id);
    await deleteDoc(bekalDoc);
  };
  const contextValue = {
    cartItems,
    bekalItems,
    addToCart,
    removeFromCart,
    createBekal,
    updateBekal,
    deleteBekal,
  };

  return (
    <BekalContext.Provider value={contextValue}>
      {props.children}
    </BekalContext.Provider>
  );
};

export { BekalContextProvider, BekalContext };
