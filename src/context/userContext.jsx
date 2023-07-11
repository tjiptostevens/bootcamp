import { createContext, useState } from "react";
import { getFsData, updateFsData } from "../config/firestore";

const UserContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  const conditions = [{ field: "isActive", operator: "==", value: true }];
  const { data } = getFsData("users", conditions);
  console.log(data);

  return data;
};
const UserContextProvider = (props) => {
  const [userData, setUserData] = useState(getDefaultCart());
  const updateUserData = async (itemId) => {
    let update = await updateFsData("users", uid, data);
    setUserData((prev) => ({ ...prev, [itemId]: !prev[itemId] }));
  };
  const contextValue = { userData, updateUserData };
  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContextProvider, UserContext };
