import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { GameListContext } from "../context/GameListContext";

import logoGamovore from "../logogamovorebrown.png";
import Header from "../style/Header";
import ProfilButton from "./ProfilButton";
import Button from "../style/Button";
import Identity from "../style/Identity";
import IsLogged from "../style/IsLogged";
import Linked from "../style/Linked";
import Title from "../style/Title";

function HeaderBox() {
  const { user } = useContext(UserContext);
  const { setData } = useContext(GameListContext);
  const onClick = () => {
    setData(
      "fields name, summary, cover.url, genres.name, platforms.platform_logo.url ,platforms.name, themes.name, game_modes.name  ; limit 20; where total_rating_count>=80;"
    );
  };

  return (
    <Header>
      <Linked to="/" onClick={onClick}>
        <Identity>
          <img src={logoGamovore} alt="logo_gamovore" width="10%" />
          <Title>Gamovore</Title>
        </Identity>
      </Linked>

      <IsLogged>
        {user ? (
          <ProfilButton drop />
        ) : (
          <>
            <Linked to="/sign-in">
              <Button>Sign in</Button>
            </Linked>
            <Linked to="/sign-up">
              <Button>Sign up</Button>
            </Linked>
          </>
        )}
      </IsLogged>
    </Header>
  );
}

export default HeaderBox;
