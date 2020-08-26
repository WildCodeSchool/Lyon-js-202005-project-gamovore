import React, { useContext } from "react";
import FirebaseContext from "../firebase-config/FirebaseContext";

const Logout = () => {
  const firebase = useContext(FirebaseContext);

  const handleClick = () => {
    firebase.logoutUser();
  };

  return (
    <div>
      <button onClick={handleClick}>Deconnexion</button>
    </div>
  );
};

export default Logout;
