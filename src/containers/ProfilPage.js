import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import FirebaseContext from "../firebase-config/FirebaseContext";
import GameCard from "../components/GameCard";
import Profil from "../components/Profil";
import ProfilPageLayout from "../style/ProfilPageLayout";
import ProfilGameLayout from "../style/ProfilGameLayout";
import ProfilAsideLayout from "../style/ProfilAsideLayout";
import MyGamovoreLayout from "../style/MyGamovoreLayout";
import MyGamovoreProfilLayout from "../style/MyGamovoreProfilLayout";
import SecondaryTitle from "../style/SecondaryTitle";
import CallIgdb from "./CallIgdb";
import Loading from "../style/Loading";
import Title from "../style/Title";
import LoadingImg from "../style/LoadingImg";
import MyGamovores from "../components/MyGamovores";
import Button from "../style/Button";
import MyGameDiv from "../style/MyGameDiv";

const API_KEY = process.env.REACT_APP_API_KEY;

const ProfilPage = () => {
  const { user, setUser } = useContext(UserContext);
  const firebase = useContext(FirebaseContext);

  const nbGames = user.favoriteGameId.length;
  const gamesToLoad = user.favoriteGameId.toString();

  const dataCallIgdb = `fields name, summary, cover.url, genres.name, platforms.platform_logo.url ,platforms.name, themes.name, game_modes.name; where id=(${gamesToLoad});`;

  const [myGameList, setMyGameList] = useState(CallIgdb(dataCallIgdb));
  const [loading, setLoading] = useState(true);

  const [isViewAll, setIsViewAll] = useState(false);

  useEffect(() => {
    let listener = firebase.auth.onAuthStateChanged((user) => {
      user ? apiRender() : setUser(null);
    });
    return () => {
      listener();
    };
  }, [user]);

  const apiRender = () => {
    if (nbGames !== 0 && nbGames !== null) {
      axios({
        url:
          "https://thingproxy.freeboard.io/fetch/https://api-v3.igdb.com/games",
        method: "POST",
        headers: {
          Accept: "application/json",
          "user-key": API_KEY,
        },
        data: dataCallIgdb,
      })
        .then((response) => response.data)
        .then((data) => {
          setMyGameList(data);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  const ViewGames = () => {
    if (nbGames !== 0 && isViewAll === true) {
      return (
        <MyGameDiv>
          {myGameList.map((item) => (
            <GameCard little {...item} key={item.id} />
          ))}
        </MyGameDiv>
      );
    } else if (nbGames !== 0 && isViewAll === false) {
      return (
        <MyGameDiv>
          {myGameList.slice(0, 3).map((item) => (
            <GameCard little {...item} key={item.id} />
          ))}
        </MyGameDiv>
      );
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
          <br />

          <Button
            onClick={() => {
              if (isViewAll === true) {
                setIsViewAll(false);
              } else {
                setIsViewAll(true);
              }
            }}
          >
            {isViewAll ? "Reduce my games list" : "View all my games"}
          </Button>
        </section>
        <MyGamovoreLayout>
          <SecondaryTitle>My Gamovores</SecondaryTitle>
          <MyGamovoreProfilLayout>
            <MyGamovores user={user} />
          </MyGamovoreProfilLayout>
        </MyGamovoreLayout>
      </ProfilAsideLayout>
    </ProfilPageLayout>
  );
};

export default ProfilPage;
