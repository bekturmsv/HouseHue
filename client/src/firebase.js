// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ade6f.firebaseapp.com",
  projectId: "mern-estate-ade6f",
  storageBucket: "mern-estate-ade6f.appspot.com",
  messagingSenderId: "68126397966",
  appId: "1:68126397966:web:3d5d27bf52c4f358d98e5f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
