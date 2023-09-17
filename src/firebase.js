// import { initializeApp } from "firebase/app";

// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore, doc, setDoc } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyATGfDWEySyw6yw5jLnajlGoHv2m2nckNA",
//   authDomain: "podcast-react-app-4da1e.firebaseapp.com",
//   projectId: "podcast-react-app-4da1e",
//   storageBucket: "podcast-react-app-4da1e.appspot.com",
//   messagingSenderId: "236964049974",
//   appId: "1:236964049974:web:ac0ddd840294796c1ed497",
//   measurementId: "G-JJFNBP7BH0"
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();
// export { db, auth, provider, doc, setDoc };

//ppppppppppppppppppppppppp

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


