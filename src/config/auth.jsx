import { app } from "./firebase";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { writeData } from "./firereal";
const auth = getAuth(app);

const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const user = await signInWithPopup(auth, provider);
    console.log("user : ", user);
    let data = {
      uid: user.user.uid,
      displayName: user.user.displayName,
      photoURL: user.user.photoURL,
      isOnline: true,
    };
    await writeData("users", user.user.uid, data);
  } catch (error) {
    console.log("error code : " + error.code);
    console.log("error message : " + error.message);
    return error;
  }
};
const registerWithEmailPassword = async (email, password) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log("user : ", user);
    let data = {
      uid: user.user.uid,
      displayName: user.user.displayName,
      photoURL: user.user.photoURL,
      isOnline: false,
    };
    await writeData("users", user.user.uid, data);
    return user;
  } catch (error) {
    console.log("error code : " + error.code);
    console.log("error message : " + error.message);
    return error;
  }
};

const loginWithEmailPassword = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log("user : ", user);
    let data = {
      isOnline: true,
    };
    // await updateFsData("users", user.uid, data);
    // await updateDoc(doc(db, "users", user.user.uid), {
    //   isOnline: true,
    // });
    return user;
  } catch (error) {
    console.log("error code : " + error.code);
    console.log("error message : " + error.message);
    return error;
  }
};

const forgotPassword = async (email) => {
  try {
    const user = await sendPasswordResetEmail(auth, email);
    console.log("user : ", user);
  } catch (error) {
    console.log("error code : " + error.code);
    console.log("error message : " + error.message);
    return error;
  }
};
const logout = async () => {
  try {
    const user = await signOut(auth);
    console.log(user);
    let data = {
      isOnline: false,
    };
    // await updateFsData("users", user.uid, data);
    // await updateDoc(doc(db, "users", user.user.uid), {
    //   isOnline: false,
    // });
    console.log("user : " + user);
  } catch (error) {
    console.log("error code : " + error.code);
    console.log("error message : " + error.message);
    return error;
  }
};

export {
  auth,
  signInWithGoogle,
  signInWithEmailAndPassword,
  registerWithEmailPassword,
  loginWithEmailPassword,
  forgotPassword,
  logout,
};
