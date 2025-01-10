// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF323mSNSifXtEa3ifAbgz_OapwWkb8PI",
  authDomain: "portfolio-2ccfe.firebaseapp.com",
  projectId: "portfolio-2ccfe",
  storageBucket: "portfolio-2ccfe.firebasestorage.app",
  messagingSenderId: "141248508889",
  appId: "1:141248508889:web:0e403ac316df981d425fc8",
  measurementId: "G-FPP42BK4JM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

export { db };