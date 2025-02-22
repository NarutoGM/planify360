// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeX7CFRpBof0i4JzCL0nIbIAsMktCR6Uk",
  authDomain: "planify360-fed27.firebaseapp.com",
  projectId: "planify360-fed27",
  storageBucket: "planify360-fed27.firebasestorage.app",
  messagingSenderId: "572572020006",
  appId: "1:572572020006:web:670e50a2ee06e9527265e7",
  measurementId: "G-XXTZNNG5WV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
