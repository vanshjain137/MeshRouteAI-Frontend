// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "meshrouteai.firebaseapp.com",
  projectId: "meshrouteai",
  storageBucket: "meshrouteai.firebasestorage.app",
  messagingSenderId: "1055740091402",
  appId: "1:1055740091402:web:b96f5a496172c7dfa093f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()