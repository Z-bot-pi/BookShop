// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNPm7n45A6zGsQVARjp04N6VQ91-rLqeM",
  authDomain: "bookshop-5cc00.firebaseapp.com",
  projectId: "bookshop-5cc00",
  storageBucket: "bookshop-5cc00.firebasestorage.app",
  messagingSenderId: "381547777817",
  appId: "1:381547777817:web:1992447331dcc7f9013f88",
  measurementId: "G-V64NN9LGEN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);