// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqQH4JdJ0TSKrNIp_GuESscZe80rG4RPo",
  authDomain: "fir-8d991.firebaseapp.com",
  databaseURL: "https://fir-8d991-default-rtdb.firebaseio.com",
  projectId: "fir-8d991",
  storageBucket: "fir-8d991.firebasestorage.app",
  messagingSenderId: "888012138370",
  appId: "1:888012138370:web:de2981f2fa60c19760919b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
