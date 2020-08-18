import React, { useContext } from "react";
import { AuthContext } from "../App";

import logoGamovore from "../logogamovorebrown.png";
import Header from "../style/Header";
import ProfilButton from "./ProfilButton";
import Button from "../style/Button";
import Identity from "../style/Identity";
import IsLogged from "../style/IsLogged";
import Linked from "../style/Linked";
import Title from "../style/Title";

function HeaderBox() {
  const { currentUser } = useContext(AuthContext);
  return (
    <Header>
      <Identity>
        <img src={logoGamovore} alt="logo_gamovore" width="8%" />
        <Title>Gamovore</Title>
      </Identity>
      <IsLogged>
        {currentUser ? (
          <ProfilButton />
        ) : (
          <Linked to="/sign-in">
            <Button>Connexion</Button>
          </Linked>
        )}
      </IsLogged>
    </Header>
  );
}

export default HeaderBox;
