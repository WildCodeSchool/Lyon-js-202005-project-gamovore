import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import ProfilLayout from "../style/ProfilLayout";
import ProfilButton from "./ProfilButton";
import GameInfoList from "../style/GameInfoList";
import GameInfoListList from "../style/GameInfoListList";

import { RiMoonClearLine, RiSunLine } from "react-icons/ri";
import { GiSunrise, GiSunset } from "react-icons/gi";

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
        <GameInfoList>
          {user.avaibalities.map((item) => (
            <GameInfoListList key={item}>
              {item === "morning" ? <GiSunrise fontSize="2em" /> : ""}
              {item === "afternoon" ? <RiSunLine fontSize="2em" /> : ""}
              {item === "evening" ? <GiSunset fontSize="2em" /> : ""}
              {item === "night" ? <RiMoonClearLine fontSize="2em" /> : ""}
            </GameInfoListList>
          ))}
        </GameInfoList>
      </div>
    </ProfilLayout>
  );
};

export default Profil;
