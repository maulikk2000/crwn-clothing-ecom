import React, { FC, useState, MouseEvent, FormEvent, ChangeEvent } from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";

interface IUser {
  email: string;
  password: string;
}

const SignIn: FC = () => {
  const initialState = { email: "", password: "" };

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    alert(event);
    setuser(initialState);
  }

  const handleChange = (event: any) => {
    const { value, name } = event.target;
    setuser({ ...user, [name]: value });
  };

  // const onChange=  (event: ChangeEvent<HTMLInputElement>)=> {

  //     const {value, name} = event.target;
  //     setuser({ [name] : value})
  // }

  //const [user, setuser] = useState<IUser | null>(initialState);
  const [user, setuser] = useState<IUser>(initialState);

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span className="title">Sign in with your email and password</span>

      <form
        onSubmit={event => {
          handleSubmit(event);
        }}
      >
        <FormInput
          handleChange={handleChange}
          label="Email"
          type="email"
          required
          name="email"
          value={user.email}
          //onChange={e => setuser({ ...user, email: e.target.value })}
        ></FormInput>
        {/* <label>Email</label> */}
        <FormInput
          type="password"
          label="Password"
          required
          name="password"
          value={user.password}
          //onChange={e => setuser({ ...user, password: e.target.value })}
          handleChange={handleChange}
        ></FormInput>
        {/* <label>Password</label> */}

        <input className="button" type="submit" value="Submit Form"></input>
      </form>
    </div>
  );
};

export default SignIn;
