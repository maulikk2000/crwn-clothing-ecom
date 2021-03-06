import React, { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import HeaderComponent from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {
  firebaseauth,
  createUserProfileDocument
} from "./firebase/firebase.utils";

function App() {
  let initialState: any;
  const [currentUser, setcurrentUser] = useState(initialState);
  //let unsubscribeFromAuth = null;
  useEffect(() => {
    //unsubscribeFromAuth = firebaseauth.onAuthStateChanged(user => {
    const unsubscribeFromAuth = firebaseauth.onAuthStateChanged(
      async userAuth => {
        //setcurrentUser(user);
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth, null);
          userRef?.onSnapshot(snapshot => {
            console.log(snapshot.data());
            setcurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            });
          });
        }
        //set current user to null
        setcurrentUser(userAuth);
      }
    );

    //unsubscribeFromAuth();
    return () => {
      unsubscribeFromAuth();
    };
  }, [currentUser]);
  //}, []);

  return (
    <div>
      {/* <HomePage></HomePage> */}
      {/* <div>{currentUser?.["displayName"]}</div> */}
      {/* <div>
        {currentUser
          ? currentUser.providerData.forEach(
              (profile: {
                providerId: string;
                uid: string;
                displayName: string;
                email: string;
                photoURL: string;
              }) => {
                console.log("Sign-in provider: " + profile.providerId);
                console.log("  Provider-specific UID: " + profile.uid);
                console.log("  Name: " + profile.displayName);
                console.log("  Email: " + profile.email);
                console.log("  Photo URL: " + profile.photoURL);
              }
            )
          : null}
      </div> */}
      <HeaderComponent />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
        <Route exact path="/signin" component={SignInAndSignUpPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
