import React, { useContext } from "react";
import FirebaseContext from "../firebase-config/FirebaseContext";
import Button from "../style/Button";
import { UserContext } from "../context/UserContext";

const Logout = () => {
  const firebase = useContext(FirebaseContext);
  const { setUser } = useContext(UserContext);

  const handleClick = () => {
    firebase.logoutUser().then(() => {
      setUser(null);
    });
  };

  return (
    <div>
      <Button onClick={handleClick}>LOGOUT</Button>
    </div>
  );
};

export default Logout;
