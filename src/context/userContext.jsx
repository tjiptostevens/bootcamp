import { createContext, useEffect, useState } from "react";
import { db, getFsData, updateFsData } from "../config/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore/lite";

const UserContext = createContext(null);

const UserContextProvider = (props) => {
  const [user] = useAuthState(auth);

  const [userData, setUserData] = useState({});
  const userCollectionRef = collection(db, "users");

  useEffect(() => {
    const getDefaultData = async () => {
      const { data } = await getDocs(userCollectionRef);
      console.log(data);
      setUserData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getDefaultData();
  }, []);

  const createUserData = async (data) => {
    await addDoc(userCollectionRef, data);
  };

  const updateUserData = async (id, data) => {
    // let update = await updateFsData("users", uid, data);
    const userDoc = doc(db, "users", id);
    await updateDoc(userDoc, data);
    setUserData((prev) => ({ ...prev, [itemId]: !prev[itemId] }));
  };

  const deleteUserData = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  const contextValue = {
    userData,
    updateUserData,
    createUserData,
    deleteUserData,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContextProvider, UserContext };
