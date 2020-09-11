import React, { useContext, useEffect, useState, useCallback } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import FirebaseContext from "../firebase-config/FirebaseContext";
import Linked from "../style/Linked";
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
import LoadingImg from "../style/LoadingImg";
import MyGamovores from "../components/MyGamovores";
import Button from "../style/Button";
import MyGameDiv from "../style/MyGameDiv";
import Section from "../style/Section";

const API_KEY = process.env.REACT_APP_API_KEY;

const ProfilPage = () => {
  const { user, setUser } = useContext(UserContext);
  const firebase = useContext(FirebaseContext);

  const nbGames = user.favoriteGameId.length;
  const gamesToLoad = user.favoriteGameId.toString();

  const dataCallIgdb = `fields name, summary, cover.url, genres.name, platforms.platform_logo.url ,platforms.name, themes.name, game_modes.name; limit 500; where id=(${gamesToLoad});`;

  const [myGameList, setMyGameList] = useState(CallIgdb(dataCallIgdb));
  const [loading, setLoading] = useState(true);

  const [isViewAll, setIsViewAll] = useState(false);

  const apiRender = useCallback(() => {
    if (nbGames !== 0 && nbGames !== null) {
      axios({
        url:
          "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games",
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
  }, [dataCallIgdb, nbGames]);

  useEffect(() => {
    let listener = firebase.auth.onAuthStateChanged((user) => {
      user ? apiRender() : setUser(null);
    });
    return () => {
      listener();
    };
  }, [user, apiRender, firebase.auth, setUser]);

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
      return <Linked to="/">No game in that library. Go and add one! </Linked>;
    }
  };

  return (
    <ProfilPageLayout>
      <Profil />
      <ProfilAsideLayout>
        <Section>
          <SecondaryTitle>My Games</SecondaryTitle>
          <ProfilGameLayout>
            {loading ? (
              <Loading>
                <h3>
                  Be patient young Gamovore, the duck is fishing games for you
                  ...
                </h3>
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

          {nbGames < 3 ? (
            <></>
          ) : (
            <Button
              onClick={() => {
                if (isViewAll === true) {
                  setIsViewAll(false);
                } else {
                  setIsViewAll(true);
                }
              }}
            >
              {isViewAll ? "Reduce" : "View all"}
            </Button>
          )}
        </Section>
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
