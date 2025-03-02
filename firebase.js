import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyARJ7vGR6AUCAZLNqiauQYO3wzpOXcckxQ",
    authDomain: "servicestore-cc04d.firebaseapp.com",
    projectId: "servicestore-cc04d",
    storageBucket: "servicestore-cc04d.appspot.com",
    messagingSenderId: "750319629865",
    appId: "1:750319629865:web:4063576c5fffac79e60e38"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db=getFirestore(app);
export const auth = getAuth(app);
