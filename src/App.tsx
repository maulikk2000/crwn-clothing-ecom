import React, { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import HeaderComponent from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { firebaseauth } from "./firebase/firebase.utils";

function App() {
  let initialState: any;
  const [currentUser, setcurrentUser] = useState(initialState);

  useEffect(() => {
    firebaseauth.onAuthStateChanged(user => {
      setcurrentUser(user);
      console.log("current user is ", currentUser?.["email"]);
    });

    // return () => {
    //   cleanup
    // };
  });

  return (
    <div>
      {/* <HomePage></HomePage> */}
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
