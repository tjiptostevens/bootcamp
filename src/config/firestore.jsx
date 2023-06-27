import { useEffect, useState } from "react";
import { app } from "./firebase";
import {
  addDoc,
  doc,
  collection,
  query,
  where,
  getDocs,
  getFirestore,
  serverTimestamp,
  setDoc,
  updateDoc,
  getDoc,
} from "firebase/firestore/lite";

const db = getFirestore(app);
const setFsData = async (collectionName, title, data) => {
  try {
    let x = { ...data, created: serverTimestamp() };
    let res = await setDoc(doc(db, collectionName, title), x);
    return res;
  } catch (error) {
    console.error(error);
  }
};
const addFsData = async (collectionName, data) => {
  try {
    let x = { ...data, created: serverTimestamp() };
    let res = await addDoc(collection(db, collectionName), x);
    return res;
  } catch (error) {
    console.error(error);
  }
};
const updateFsData = async (collectionName, title, data) => {
  try {
    let x = { ...data, modified: serverTimestamp() };
    let res = await updateDoc(doc(db, collectionName, title), x);
    return res;
  } catch (error) {
    console.error(error);
  }
};

const getFsData = (collectionName, id) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getFsData = async () => {
      try {
        const q = query(
          collection(db, collectionName),
          where("isActive", "==", true)
        );
        const querySnapshot = await getDocs(q);
        let results = [];
        querySnapshot.forEach((doc) => {
          let res = doc.data();
          let result = {
            id: doc.id,
            ...res,
          };
          results.push(result);
        });
        setData(results);
      } catch (error) {
        console.error(error);
        throw error;
      }
    };

    getFsData();
  }, [collectionName, id]);

  return { data };
};

export { setFsData, addFsData, updateFsData, getFsData };
