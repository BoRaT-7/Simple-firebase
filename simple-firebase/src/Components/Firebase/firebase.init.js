// firebase.init.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBaW8URwfnu9EIgZ6zlFRQ0dlClR2yEZSI",
  authDomain: "first-firebase-e5094.firebaseapp.com",
  projectId: "first-firebase-e5094",
  storageBucket: "first-firebase-e5094.appspot.com", // ✅ ঠিক করা হলো
  messagingSenderId: "1001346361475",
  appId: "1:1001346361475:web:2ff4a7677de7331e0953b6",
  measurementId: "G-JMKVT58MTF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
