// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0c5oj9Arux5XehgkWtyAsF1sH4AhJTC4",
  authDomain: "consuma-15e19.firebaseapp.com",
  projectId: "consuma-15e19",
  storageBucket: "consuma-15e19.appspot.com",
  messagingSenderId: "321192804808",
  appId: "1:321192804808:web:578b8542dda7fa71aac0fd",
  measurementId: "G-V49SEPPQXQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, sendPasswordResetEmail };
