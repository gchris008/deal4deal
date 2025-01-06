
// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "1ECcXtCpYgxA7Br1_ucvDc5aEirvlFvwIAhU0a83IKg",
  authDomain: "deal-509.firebaseapp.com",
  projectId: "deal-509",
  storageBucket: "deal-509.appspot.com",
  messagingSenderId: "578140524974",
  appId: "1:578140524974:web:5e19d3818d743ac230783f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
