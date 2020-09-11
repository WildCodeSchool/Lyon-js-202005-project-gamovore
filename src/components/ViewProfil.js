import React from "react";
import ProfilLayout from "../style/ProfilLayout";
import GameInfoList from "../style/GameInfoList";
import GameInfoListList from "../style/GameInfoListList";
import AvatarContainer from "../style/AvatarContainer";
import AvatarImg from "../style/AvatarImg";
import Button from "../style/Button";

import { RiMoonClearLine, RiSunLine } from "react-icons/ri";
import { GiSunrise, GiSunset } from "react-icons/gi";

const ViewProfil = ({ user, setEditProfil }) => {
  const editProfil = () => {
    setEditProfil(true);
  };

  return (
    <ProfilLayout>
      <AvatarContainer>
        <AvatarImg src={user.avatarUrl} />
        <h1>{user.pseudo}</h1>
      </AvatarContainer>
      <div>
        <h2>Description:</h2>
        <p>{user.description}</p>
      </div>
      <div>
        <h2>Availabilities :</h2>
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
      <br />
      <Button onClick={editProfil}>Edit</Button>
    </ProfilLayout>
  );
};

export default ViewProfil;
