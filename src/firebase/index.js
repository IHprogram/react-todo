import firebase from "firebase/app"
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";
import { firebaseConfig } from "./config";

firebase.initializeApp(firebaseConfig);

export const providerGoogle = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth();
export const db = firebase.firestore();
export const functions = firebase.functions();
export const storage = firebase.storage();
export const FirebaseTimestamp = firebase.firestore.Timestamp;

export default firebase;