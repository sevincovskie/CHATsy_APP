// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGMUFw7jDde1SxTDC7UyfByMrWoLQOIF0",
  authDomain: "chatsy-8c158.firebaseapp.com",
  projectId: "chatsy-8c158",
  storageBucket: "chatsy-8c158.appspot.com",
  messagingSenderId: "589584352080",
  appId: "1:589584352080:web:0c95bac5554a1867e0a255"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);