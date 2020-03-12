import firebase, { auth } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQD5PSYOHvX_jwU0FR_3rZQvm5MaJfAXI",
  authDomain: "crwn-clothing-db-12637.firebaseapp.com",
  databaseURL: "https://crwn-clothing-db-12637.firebaseio.com",
  projectId: "crwn-clothing-db-12637",
  storageBucket: "crwn-clothing-db-12637.appspot.com",
  messagingSenderId: "718444079641",
  appId: "1:718444079641:web:5728e51bef064d6d659888",
  measurementId: "G-RYW9Y2TZGH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firebaseauth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () =>
  firebaseauth.signInWithPopup(googleProvider);

export default firebase;
