// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API__KEY,
  authDomain: "real-estate-mern-96d29.firebaseapp.com",
  projectId: "real-estate-mern-96d29",
  storageBucket: "real-estate-mern-96d29.appspot.com",
  messagingSenderId: "1786729232",
  appId: "1:1786729232:web:55ae3f8d167116d7008b95"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);