// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "plotnest.firebaseapp.com",
  projectId: "plotnest",
  storageBucket: "plotnest.firebasestorage.app",
  messagingSenderId: "233328869441",
  appId: "1:233328869441:web:e70eb39f90c5ea273dc6c0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
