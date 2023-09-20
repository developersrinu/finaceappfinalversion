/// firabse

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// New Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvsgeEJ7gly8Jz0l2blcSacCbzYckfND8",
  authDomain: "noincome-5dab5.firebaseapp.com",
  projectId: "noincome-5dab5",
  storageBucket: "noincome-5dab5.appspot.com",
  messagingSenderId: "1022566386687",
  appId: "1:1022566386687:web:08ffb879140e3437ec35ca",
  measurementId: "G-NHRTSZ1C0Y"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };


