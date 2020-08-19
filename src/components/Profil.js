import React, { useContext } from "react";
import { AuthContext } from "../App";
import ProfilLayout from "../style/ProfilLayout";
import ProfilButton from "./ProfilButton";

const Profil = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <ProfilLayout>
      <ProfilButton />
      <div>
        <h2>Description:</h2>
        <p>{currentUser.description}</p>
      </div>
      <div>
        <h2>Disponibilities:</h2>
        <p>{currentUser.avaibality}</p>
      </div>
      <div>
        <h2>Playing Modes:</h2>
        <p>{currentUser.gameMode.join(" - ")}</p>
      </div>
    </ProfilLayout>
  );
};

export default Profil;
