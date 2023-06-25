// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTBJqj3Fq6VAr1puKwZNy-uSvJ-5Ej5VU",
  authDomain: "bekalkerja-268e8.firebaseapp.com",
  projectId: "bekalkerja-268e8",
  storageBucket: "bekalkerja-268e8.appspot.com",
  messagingSenderId: "418715364528",
  appId: "1:418715364528:web:bd47c2832044d361109f75",
  measurementId: "G-ETMJCT1MJY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
