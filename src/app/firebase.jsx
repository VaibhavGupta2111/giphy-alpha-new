import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA210qY4D9r8uxNq5xX30V3cWWSLBUuMMo",
  authDomain: "alphabi-task.firebaseapp.com",
  projectId: "alphabi-task",
  storageBucket: "alphabi-task.appspot.com",
  messagingSenderId: "297452207249",
  appId: "1:297452207249:web:55fc41f90c5ac301e71330",
  measurementId: "G-278QBL73J7"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { app, db, auth };