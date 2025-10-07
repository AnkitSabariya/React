// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABZCrXgW-8QS2qCcxF1NfxRyFCS1j29GM",
  authDomain: "studentdata-717b9.firebaseapp.com",
  projectId: "studentdata-717b9",
  storageBucket: "studentdata-717b9.firebasestorage.app",
  messagingSenderId: "71508449113",
  appId: "1:71508449113:web:aa6384a99b6771f1f79e48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);