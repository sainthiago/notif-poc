import firebase from "firebase/app";
import "firebase/messaging";
import { firebaseConfig } from "../constants/firebase-config";

if (!firebase?.apps?.length) {
  firebase?.initializeApp(firebaseConfig);
}

export default firebase;
