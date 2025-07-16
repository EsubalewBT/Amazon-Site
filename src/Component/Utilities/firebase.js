import firebase from "firebase/compat/app";
import { getauth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCqX4PLtkwXCub6wKpR9Hd_i1YevpAMT8I",
  authDomain: "ecommerce-app-3d8e1.firebaseapp.com",
  projectId: "ecommerce-app-3d8e1",
  storageBucket: "ecommerce-app-3d8e1.firebasestorage.app",
  messagingSenderId: "6830615269",
  appId: "1:6830615269:web:964fc1ca0838c817d9820c",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getauth(app);
export const db = app.firestore();
