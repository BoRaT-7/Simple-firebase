// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaW8URwfnu9EIgZ6zlFRQ0dlClR2yEZSI",
  authDomain: "first-firebase-e5094.firebaseapp.com",
  projectId: "first-firebase-e5094",
  storageBucket: "first-firebase-e5094.firebasestorage.app",
  messagingSenderId: "1001346361475",
  appId: "1:1001346361475:web:2ff4a7677de7331e0953b6",
  measurementId: "G-JMKVT58MTF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;