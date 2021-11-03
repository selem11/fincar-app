import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSyknegOQbjK7Ktgu_5Hr-Ew4bG_60hcY",
  authDomain: "fincar-app-f2601.firebaseapp.com",
  projectId: "fincar-app-f2601",
  storageBucket: "fincar-app-f2601.appspot.com",
  messagingSenderId: "18666969412",
  appId: "1:18666969412:web:8df1970ad35b363a091f11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);