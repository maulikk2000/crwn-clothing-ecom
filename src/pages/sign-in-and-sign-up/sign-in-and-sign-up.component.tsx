import React, { FC } from "react";
import "./sign-in-and-sign-up.styles.scss";
import SignIn from "../../components/sign-in/sign-in.component";

const SignInAndSignUpPage: FC = () => {

    return (
        <div className="sign-in-and-sign-up"><SignIn /></div>
    )
}

export default SignInAndSignUpPage;