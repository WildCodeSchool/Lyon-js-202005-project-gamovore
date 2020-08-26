import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import ProfilLayout from "../style/ProfilLayout";
import ProfilButton from "./ProfilButton";

const Profil = () => {
  const { user } = useContext(UserContext);
  return (
    <ProfilLayout>
      <ProfilButton />
      <div>
        <h2>Description:</h2>
        <p>{user.description}</p>
      </div>
      <div>
        <h2>Disponibilities:</h2>
        <p>{user.avaibalities}</p>
      </div>
    </ProfilLayout>
  );
};

export default Profil;
