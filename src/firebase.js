/// firabse



// Import necessary Firebase modules and functions
import { initializeApp } from "firebase/app"; // Firebase core module
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Authentication module
import { getFirestore, doc, setDoc } from "firebase/firestore"; // Firestore module

// New Firebase configuration
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

// Initialize Firebase with the configuration
const app = initializeApp(firebaseConfig);

// Get Firestore instance from the initialized Firebase app
const db = getFirestore(app);

// Get Authentication instance from the initialized Firebase app
const auth = getAuth(app);

// Create a new GoogleAuthProvider instance for authentication
const provider = new GoogleAuthProvider();

// Export the initialized Firestore, Authentication, and other functions
export { db, auth, provider, doc, setDoc };
