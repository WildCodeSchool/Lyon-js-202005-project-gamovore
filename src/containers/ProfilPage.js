import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import FirebaseContext from "../firebase-config/FirebaseContext";
import { UserBase } from "../UserBase";
import GameCard from "../components/GameCard";
import Profil from "../components/Profil";
import ProfilPageLayout from "../style/ProfilPageLayout";
import ProfilGameLayout from "../style/ProfilGameLayout";
import ProfilAsideLayout from "../style/ProfilAsideLayout";
import MyGamovoreLayout from "../style/MyGamovoreLayout";
import MyGamovoreProfilLayout from "../style/MyGamovoreProfilLayout";
import SecondaryTitle from "../style/SecondaryTitle";
import StyleForPseudo from "../style/Pseudo";
import StyleForAvatar from "../style/Avatar";
import CallIgdb from "./CallIgdb";
import Loading from "../style/Loading";
import Title from "../style/Title";
import LoadingImg from "../style/LoadingImg";

const ProfilPage = () => {
  const { user, setUser } = useContext(UserContext);
  const firebase = useContext(FirebaseContext);

  const nbGames = user.favoriteGameId.length;
  const gamesToLoad = user.favoriteGameId.toString();

  const dataCallIgdb = `fields name, summary, cover.url, genres.name, platforms.platform_logo.url ,platforms.name, themes.name, game_modes.name; limit 3; where id=(${gamesToLoad});`;

  const { gameList, loading } = CallIgdb(dataCallIgdb);

  const ViewGames = () => {
    if (nbGames !== 0) {
      return gameList.map((item) => (
        <GameCard little {...item} key={item.id} />
      ));
    } else {
      return <div>No games to your collection ... </div>;
    }
  };

  return (
    <ProfilPageLayout>
      <Profil />
      <ProfilAsideLayout>
        <section>
          <SecondaryTitle>My Games</SecondaryTitle>
          <ProfilGameLayout>
            {loading ? (
              <Loading>
                <Title>
                  Be patient young Gamovore, the duck is fishing a games for you
                  ...
                </Title>
                <LoadingImg
                  src="https://cdn.dribbble.com/users/591610/screenshots/3861704/pato.gif"
                  alt="loading"
                />
              </Loading>
            ) : (
              <ViewGames />
            )}
          </ProfilGameLayout>
        </section>
        <MyGamovoreLayout>
          <SecondaryTitle>My Gamovores</SecondaryTitle>
          <MyGamovoreProfilLayout>
            {UserBase.map((item) => (
              <div key={item.id}>
                <StyleForAvatar src={item.avatar} />
                <StyleForPseudo>{item.pseudo}</StyleForPseudo>
              </div>
            ))}
          </MyGamovoreProfilLayout>
        </MyGamovoreLayout>
      </ProfilAsideLayout>
    </ProfilPageLayout>
  );
};

export default ProfilPage;
