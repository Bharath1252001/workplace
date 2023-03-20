// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5lTt4GIyt6OMD-nJE99He_hZB_JSACDA",
  authDomain: "workplace-cace2.firebaseapp.com",
  projectId: "workplace-cace2",
  storageBucket: "workplace-cace2.appspot.com",
  messagingSenderId: "596998356049",
  appId: "1:596998356049:web:d38b172952adf58c77cc70"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)