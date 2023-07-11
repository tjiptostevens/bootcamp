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

// const getFsData = (collectionName, conditions = []) => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const q = query(
//           collection(db, collectionName),
//           where("isActive", "==", true)
//           // where("uid", "==", id)
//         );
//         const querySnapshot = await getDocs(q);
//         let results = [];
//         querySnapshot.forEach((doc) => {
//           let res = doc.data();
//           let result = {
//             id: doc.id,
//             ...res,
//           };
//           results.push(result);
//         });
//         setData(results);
//       } catch (error) {
//         console.error(error);
//         throw error;
//       }
//     };

//     getData();
//   }, [collectionName]);

//   return { data };
// };

const getFsData = (collectionName, conditions = []) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        let q = collection(db, collectionName);

        // Add dynamic where clauses based on conditions
        if (conditions.length > 0) {
          conditions.forEach((condition) => {
            const { field, operator, value } = condition;
            q = query(q, where(field, operator, value));
          });
        }

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

    getData();
  }, [collectionName, conditions]);

  return { data };
};

export { setFsData, addFsData, updateFsData, getFsData };
