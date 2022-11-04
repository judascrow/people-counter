import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.REACT_APP_FIREBASE_KEY,
  authDomain: "opencv-1b5bd.firebaseapp.com",
  databaseURL: "https://opencv-1b5bd-default-rtdb.firebaseio.com",
  projectId: "opencv-1b5bd",
  storageBucket: "opencv-1b5bd.appspot.com",
  messagingSenderId: "236478899890",
  appId: "1:236478899890:web:83efa4774ff19cbfda0bab",
  measurementId: "G-VC7BL8JGGG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
