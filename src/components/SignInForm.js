import React, { useContext, useState } from "react";
import FirebaseContext from "../firebase-config/FirebaseContext";

import Linked from "../style/Linked";
import Form from "../style/Form";
import Input from "../style/Input";
import Button from "../style/Button";
import SeparForm from "../style/SeparForm";

const SignInForm = (props) => {
  const firebase = useContext(FirebaseContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .loginUser(email, password)
      .then((user) => {
        setEmail("");
        setPassword("");
        props.history.push("/game-list");
      })
      .catch((error) => {
        setEmail("");
        setPassword("");
        alert(error);
      });
  };

  return (
    <Form>
      <h1>Hello</h1>
      <p>Sign into your account here</p>
      <label htmlFor="email" />
      <Input
        type="email"
        id="email"
        name="email"
        placeholder="Your e-mail here"
        onChange={handleEmail}
        value={email}
        required
      />
      <label htmlFor="password" />
      <Input
        type="password"
        id="password"
        name="password"
        placeholder="password"
        onChange={handlePassword}
        value={password}
        required
      />
      <Button type="submit" onClick={handleSubmit}>
        Sign In
      </Button>
      <SeparForm />
      <p>Forgot password? Reset</p>
      <p>
        Don't have an account ? <Linked to="/sign-up">Sign up</Linked>
      </p>
    </Form>
  );
};

export default SignInForm;
