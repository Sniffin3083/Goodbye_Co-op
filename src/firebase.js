// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, query, getDocs, collection, where, addDoc,  } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBA43aLDCrNe7F-jiRC7tvQ76r9pVjaaAM",
  authDomain: "goodbyeco-op.firebaseapp.com",
  projectId: "goodbyeco-op",
  storageBucket: "goodbyeco-op.appspot.com",
  messagingSenderId: "156942803704",
  appId: "1:156942803704:web:0a9f8e092a95ab7a1dd10d",
  measurementId: "G-XLMNET3BJ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password) => {
  try { 
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};

const logout = () => {
  auth.signOut();
}

const storage = getStorage(app);

export { auth, db, logInWithEmailAndPassword, logout, storage };