// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
export default app;