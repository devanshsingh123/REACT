// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // for authentication
import { getFirestore } from "firebase/firestore"; // for Firestore DB
import { getStorage } from "firebase/storage"; // for storage
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzcZXGK_GeaT3YFzWNyvgaPkYoVkJuZG4",
  authDomain: "react-application-98db2.firebaseapp.com",
  projectId: "react-application-98db2",
  storageBucket: "react-application-98db2.firebasestorage.app",
  messagingSenderId: "846457275430",
  appId: "1:846457275430:web:28f545ffbe35aa0ab392e7",
  measurementId: "G-CCEKE64PPB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Export services for use in components
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app ;