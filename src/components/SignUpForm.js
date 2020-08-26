import React, { useState, useContext } from "react";
import FirebaseContext from "../firebase-config/FirebaseContext";

import Form from "../style/Form";
import Input from "../style/Input";
import Button from "../style/Button";
import SeparForm from "../style/SeparForm";
import Linked from "../style/Linked";

const SignUpForm = (props) => {
  console.log(props);
  const firebase = useContext(FirebaseContext);

  const data = {
    pseudo: "",
    email: "",
    password: "",
  };

  const [disable, setDisable] = useState(true);
  const [loginData, setLoginData] = useState(data);

  const checked = () => {
    setDisable(false);
  };

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .signupUser(loginData.email, loginData.password)
      .then((authUser) => {
        return firebase.userAdd(authUser.user.uid).set({
          pseudo: loginData.pseudo,
          email: loginData.email,
          avatarUrl:
            "https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif",
          description: "I am a new gamovore",
          avaibalities: ["afternoon", "morning", "evening", "night"],
          favoriteGameId: [],
          favoriteGamovoreID: [],
        });
      })
      .then(() => {
        setLoginData({ ...data });
        props.history.push("/game-list");
      })
      .catch((error) => {
        alert(error);
        setLoginData({ ...data });
      });
  };

  return (
    <Form>
      <h1>Join Gamovore</h1>
      <p>Sign up to find other gamovores</p>
      <label htmlFor="pseudo"></label>
      <Input
        type="text"
        id="pseudo"
        name="pseudo"
        placeholder="Your pseudo here"
        required
        value={loginData.pseudo}
        onChange={handleChange}
      />
      <label htmlFor="email"></label>
      <Input
        type="email"
        id="email"
        name="email"
        placeholder="Your e-mail here"
        required
        value={loginData.email}
        onChange={handleChange}
      />
      <label htmlFor="password"></label>
      <Input
        type="password"
        id="password"
        name="password"
        minLength="8"
        placeholder="Your password here"
        required
        value={loginData.password}
        onChange={handleChange}
      />
      <input type="checkbox" onChange={checked} /> I agree to your Terms and
      Conditions
      <Button type="submit" disabled={disable} onClick={handleSubmit}>
        Create your free account
      </Button>
      <SeparForm />
      <p>
        Already registered? <Linked to="/sign-in">Sign in</Linked>
      </p>
    </Form>
  );
};

export default SignUpForm;
