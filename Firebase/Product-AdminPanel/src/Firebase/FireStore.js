import { initializeApp  ,getApps, getApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQSLZdGLo8PTyVHx8JkV_aFQDowIKAg0U",
  authDomain: "productdashboard-4f394.firebaseapp.com",
  projectId: "productdashboard-4f394",
  storageBucket: "productdashboard-4f394.firebasestorage.app",
  messagingSenderId: "23708037483",
  appId: "1:23708037483:web:f55a151eea8b5e5e869c2e"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);