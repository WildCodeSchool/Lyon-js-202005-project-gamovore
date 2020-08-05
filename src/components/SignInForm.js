import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../App";
import { UserBase } from "../UserBase";
import Linked from "./Linked";

import Form from "./Form";
import Input from "./Input";
import Button from "./Button";
import SeparForm from "./SeparForm";

const SignInForm = () => {
  const { setCurrentUser, currentUser } = useContext(AuthContext);
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function submitForm() {
    console.log(username);
    if (!username) {
      return alert("Your need to enter a Username");
    } else if (!password) {
      return alert("Your need to enter a Password");
    } else if (UserBase.some((el) => el.pseudo === username)) {
      for (let i = 0; i < UserBase.length; i++) {
        if (UserBase[i].pseudo.indexOf(username) !== -1) {
          if (UserBase[i].password.indexOf(password) !== -1) {
            setCurrentUser(username);
            //history.push("/game-list");
          } else {
            return alert("password is not correct");
          }
        }
      } //Ferme for
    } else {
      alert("user is not defined");
    } // Ferme else if some
  }

  if (currentUser) {
    const detailsUser = UserBase.find(el => el.pseudo === currentUser);
    return (
      <Form>
        <p>Welcome to the Home</p>
        <strong>You are :</strong>
        <p>
          <img src={detailsUser.avatar} alt={detailsUser.pseudo} />{" "}
          {detailsUser.pseudo.toUpperCase()}
        </p>
        Go to the <Linked to="/game-list">GameList</Linked>
        <br />
        <button
          onClick={() => {
            setCurrentUser(null);
          }}
        >
          DECONNEXION
        </button>
      </Form>
    );
  } else {
    return (
      <Form>
        <h1>Hello</h1>
        <p>Sign into your account here</p>
        <label htmlFor="username" />
        <Input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          onChange={handleUsernameChange}
          value={username}
          required
        />
        <label htmlFor="password" />
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          onChange={handlePasswordChange}
          value={password}
          required
        />
        <Button type="submit" onClick={submitForm}>
          Sign In
        </Button>
        <SeparForm />
        <p>Forgot password? Reset</p>
        <p>
          Don't have an account ? <Linked to="/sign-up">Sign up</Linked>
        </p>
      </Form>
    );
  }
};

export default SignInForm;
