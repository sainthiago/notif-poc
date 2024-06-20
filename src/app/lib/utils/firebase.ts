import { initializeApp } from "firebase/app";
import "firebase/messaging";
import { firebaseConfig } from "../constants/firebase-config";

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
