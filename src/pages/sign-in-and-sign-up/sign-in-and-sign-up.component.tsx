import React, { FC } from "react";
import "./sign-in-and-sign-up.styles.scss";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.cmponent";
import { userStore } from "../../store/user/userStore";

const SignInAndSignUpPage: FC = () => {
  const [userState, useActions] = userStore();

  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
