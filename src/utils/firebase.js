// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-Zy4ZLlnDp-57-r3TRI8ljnxn2npyoUs",
  authDomain: "reactflixgpt-49721.firebaseapp.com",
  projectId: "reactflixgpt-49721",
  storageBucket: "reactflixgpt-49721.firebasestorage.app",
  messagingSenderId: "430689043243",
  appId: "1:430689043243:web:c614066f1b233242ba7b6e",
  measurementId: "G-Q4YXHL6EVJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
