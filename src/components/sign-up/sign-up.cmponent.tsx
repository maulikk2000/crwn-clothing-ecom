import React, { FC, useState, FormEvent } from "react";
import "./sign-up.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  firebaseauth,
  createUserProfileDocument
} from "../../firebase/firebase.utils";

interface ISignUpUser {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp: FC = () => {
  const initialState = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };
  const [SignUpUser, setSignUpUser] = useState(initialState);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (SignUpUser.password !== SignUpUser.confirmPassword) {
      alert("passwords dont match");
      return;
    }
    try {
      const { user } = await firebaseauth.createUserWithEmailAndPassword(
        SignUpUser.email,
        SignUpUser.password
      );
      createUserProfileDocument(user, { SignUpUser });
      setSignUpUser(initialState);
    } catch (error) {
      console.log("error is ", error);
    }
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setSignUpUser({ ...SignUpUser, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I dont have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={SignUpUser.displayName}
          //onChange={handleChange}
          label="Display Name"
          required
          handleChange={handleChange}
        ></FormInput>

        <FormInput
          type="email"
          name="email"
          value={SignUpUser.email}
          //onChange={handleChange}
          label="Email"
          required
          handleChange={handleChange}
        ></FormInput>

        <FormInput
          type="password"
          name="password"
          value={SignUpUser.password}
          //onChange={handleChange}
          label="Password"
          required
          handleChange={handleChange}
        ></FormInput>

        <FormInput
          type="password"
          name="confirmPassword"
          value={SignUpUser.confirmPassword}
          //onChange={handleChange}
          label="Confirm Password"
          required
          handleChange={handleChange}
        ></FormInput>
        <CustomButton type="submit" title="SIGN UP"></CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
