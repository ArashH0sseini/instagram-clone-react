// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhtPRY-LOtIlmI8ig-hcvIy9kmJqyQ62s",
  authDomain: "instagram-clone-react-320c8.firebaseapp.com",
  projectId: "instagram-clone-react-320c8",
  storageBucket: "instagram-clone-react-320c8.appspot.com",
  messagingSenderId: "280287887541",
  appId: "1:280287887541:web:0d95b362417878efd0befc"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
