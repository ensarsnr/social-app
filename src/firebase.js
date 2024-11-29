// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Firestore'u ekledik

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXLtFeTvjQX03Js21hwB2c9Wwu5LrTRes",
  authDomain: "social-app-2b368.firebaseapp.com",
  projectId: "social-app-2b368",
  storageBucket: "social-app-2b368.firebasestorage.app",
  messagingSenderId: "1087246904164",
  appId: "1:1087246904164:web:6c877c405f531002732871",
  measurementId: "G-5EQR0ZPX1N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // Firestore başlatıldı

export default app;
