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

export const createUserProfileDocument = async (
  userAuth: any,
  additionalData: any
) => {
  if (!userAuth) return;

  //this method to check whether the provided user exist or not?
  console.log("uid", userAuth?.["uid"]);
  const userRef = firestore.doc(`users/${userAuth?.["uid"]}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
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
