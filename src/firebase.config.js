// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAg1FLDFWe3Y9RJQv1YPysag_WXoXonSfY",
  authDomain: "house-marketplace-app-9c139.firebaseapp.com",
  projectId: "house-marketplace-app-9c139",
  storageBucket: "house-marketplace-app-9c139.appspot.com",
  messagingSenderId: "964105745069",
  appId: "1:964105745069:web:1dc513e7d4659005bd8c24"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()