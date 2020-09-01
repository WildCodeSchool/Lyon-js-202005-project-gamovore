import React, { useContext } from "react";
import FirebaseContext from "../firebase-config/FirebaseContext";
import Button from "../style/Button";
import { GiBowlingPropulsion } from "react-icons/gi";

const Logout = () => {
  const firebase = useContext(FirebaseContext);

  const handleClick = () => {
    firebase.logoutUser();
  };

  return (
    <div>
      <Button onClick={handleClick}>LOGOUT</Button>
    </div>
  );
};

export default Logout;
