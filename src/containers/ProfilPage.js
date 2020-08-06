import React, { useState, useEffect } from "react";
import { UserBase } from "../UserBase";
import axios from "axios";
import GameCard from "../components/GameCard";
import Profil from "../components/Profil";
import ProfilPageLayout from "../components/ProfilPageLayout";
import ProfilGameLayout from "../components/ProfilGameLayout";
import ProfilAsideLayout from "../components/ProfilAsideLayout";
import MyGamovoreLayout from "../components/MyGamovoreLayout";
import MyGamovoreProfilLayout from "../components/MyGamovoreProfilLayout";
import SecondaryTitle from "../components/SecondaryTitle";
import StyleForPseudo from "../components/Pseudo";
import StyleForAvatar from "../components/Avatar";

const API_KEY = process.env.REACT_APP_API_KEY;

const ProfilPage = () => {
  const [profilGame, setProfilGame] = useState([]);
  const GameProfilListCall = () => {
    axios({
      url: "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games",
      method: "POST",
      headers: {
        Accept: "application/json",
        "user-key": API_KEY,
      },
      data: "fields name, cover.url; limit 2; where total_rating_count>=80;",
    })
      .then((response) => response.data)
      .then((data) => {
        setProfilGame(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    GameProfilListCall();
  }, []);

  return (
    <ProfilPageLayout>
      <Profil />
      <ProfilAsideLayout>
        <section>
          <SecondaryTitle>My Games</SecondaryTitle>
          <ProfilGameLayout>
            {profilGame.map((item) => (
              <GameCard little {...item} key={item.id} />
            ))}
          </ProfilGameLayout>
        </section>
        <MyGamovoreLayout>
          <SecondaryTitle>My Gamovores</SecondaryTitle>
          <MyGamovoreProfilLayout>
            <div>
              <StyleForAvatar src={UserBase[1].avatar} />
              <StyleForPseudo>{UserBase[1].pseudo}</StyleForPseudo>
            </div>
            <div>
              <StyleForAvatar src={UserBase[2].avatar} />
              <StyleForPseudo>{UserBase[2].pseudo}</StyleForPseudo>
            </div>
          </MyGamovoreProfilLayout>
        </MyGamovoreLayout>
      </ProfilAsideLayout>
    </ProfilPageLayout>
  );
};

export default ProfilPage;
