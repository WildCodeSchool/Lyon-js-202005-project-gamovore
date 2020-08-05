import React, { useContext } from "react";
import { AuthContext } from "../App";
import { UserBase } from "../UserBase";
import ProfilLayout from "./ProfilLayout";
import ProfilButton from "./ProfilButton";

const Profil = () => {
  const { currentUser } = useContext(AuthContext);
  const detailsUser = UserBase.find((el) => el.pseudo === currentUser);
  return (
    <ProfilLayout>
      <ProfilButton />
      <div>
        <h2>Description:</h2>
        <p>{detailsUser.description}</p>
      </div>
      <div>
        <h2>Disponibilities:</h2>
        <p>{detailsUser.avaibality}</p>
      </div>
      <div>
        <h2>Playing Modes:</h2>
        <p>{detailsUser.gameMode.join(" - ")}</p>
      </div>
    </ProfilLayout>
  );
};

export default Profil;
