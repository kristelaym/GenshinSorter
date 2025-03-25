// Import the functions you need from the SDKs you need
import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "//",
  authDomain: "genshin-sorter.firebaseapp.com",
  projectId: "genshin-sorter",
  storageBucket: "genshin-sorter.appspot.com",
  messagingSenderId: "876443828888",
  appId: "1:876443828888:web:934e86540fb03ae7c746ed",
  measurementId: "G-DEEZSXZSB2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
