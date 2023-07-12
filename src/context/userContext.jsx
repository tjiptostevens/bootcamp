import { createContext, useEffect, useState } from "react";
import { getFsData, updateFsData } from "../config/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/auth";

const UserContext = createContext(null);

const UserContextProvider = (props) => {
  const [userData, setUserData] = useState({});
  const [user] = useAuthState(auth);
  useEffect(() => {
    const getDefaultData = () => {
      const conditions = [{ field: "uid", operator: "==", value: user.uid }];
      const { data } = getFsData("users", conditions);
      setUserData(data);
    };

    setTimeout(() => {
      getDefaultData();
    }, 1000);
  }, []);
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
