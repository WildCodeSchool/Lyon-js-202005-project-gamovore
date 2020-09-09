import React, { useContext, useEffect, useState } from "react";
import FirebaseContext from "../firebase-config/FirebaseContext";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import GameCard from "../components/GameCard";

import SecondaryTitle from "../style/SecondaryTitle";
import GameInfoList from "../style/GameInfoList";
import GameInfoListList from "../style/GameInfoListList";
import ProfilLayout from "../style/ProfilLayout";
import ProfilPageLayout from "../style/ProfilPageLayout";
import ProfilAsideLayout from "../style/ProfilAsideLayout";
import ProfilGameLayout from "../style/ProfilGameLayout";
import Button from "../style/Button";
import ButtonLayout from "../style/ButtonLayout";
import MyGameDiv from "../style/MyGameDiv";

import { RiMoonClearLine, RiSunLine } from "react-icons/ri";
import { GiSunrise, GiSunset } from "react-icons/gi";

const API_KEY = process.env.REACT_APP_API_KEY;

const GamovoreProfil = (props) => {
  const firebase = useContext(FirebaseContext);
  const { user, setUser } = useContext(UserContext);
  const [isViewAll, setIsViewAll] = useState(false);

  const [gamovoreData, setGamovoreData] = useState([]);
  const [gameToLoad, setGameToLoad] = useState([]);
  const [gamovoreGames, setGamovoreGames] = useState([]);

  useEffect(() => {
    firebase.db
      .collection("users")
      .doc(props.location.state.gvid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setGamovoreData(doc.data());
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [firebase.db, props.location.state.gvid]);

  useEffect(() => {
    if (gamovoreData.favoriteGameId !== undefined) {
      setGameToLoad(gamovoreData.favoriteGameId.toString());
      if (gameToLoad.length !== 0) {
        axios({
          url:
            "https://thingproxy.freeboard.io/fetch/https://api-v3.igdb.com/games",
          method: "POST",
          headers: {
            Accept: "application/json",
            "user-key": API_KEY,
          },
          data: `fields name, summary, cover.url, genres.name, platforms.platform_logo.url ,platforms.name, themes.name, game_modes.name; where id=(${gameToLoad});`,
        })
          .then((response) => {
            setGamovoreGames(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  }, [gamovoreData, gameToLoad]);

  const DisplayGames = () => {
    if (gamovoreGames.length !== 0 && isViewAll === true) {
      return (
        <MyGameDiv>
          {gamovoreGames.map((item) => (
            <GameCard little {...item} key={item.id} />
          ))}
        </MyGameDiv>
      );
    } else if (gamovoreGames.length !== 0 && isViewAll === false) {
      return (
        <MyGameDiv>
          {gamovoreGames.slice(0, 3).map((item) => (
            <GameCard little {...item} key={item.id} />
          ))}
        </MyGameDiv>
      );
    } else {
      return <p>No games to your collection ... </p>;
    }
  };

  const gamovoreID = props.location.state.gvid;

  const addGamovore = (user, gamovoreID) => {
    const userID = user.id;
    firebase
      .userActu(userID)
      .update({ favoriteGamovoreID: firebase.dataAdd(gamovoreID) });
    firebase.userActu(userID).onSnapshot(function (doc) {
      setUser(doc.data());
    });
  };

  const deleteGamovore = (user, gamovoreID) => {
    const userID = user.id;
    firebase
      .userActu(userID)
      .update({ favoriteGamovoreID: firebase.dataRemove(gamovoreID) });
    firebase.userActu(userID).onSnapshot(function (doc) {
      setUser(doc.data());
    });
  };

  return gamovoreData.length !== 0 ? (
    <ProfilPageLayout>
      <ProfilLayout>
        <SecondaryTitle>{props.location.state.detail}</SecondaryTitle>
        <div>
          <h2>Description :</h2>
          <p>{gamovoreData.description}</p>
        </div>
        <div>
          <h2>Disponibilities:</h2>
          <GameInfoList>
            {gamovoreData.avaibalities.map((item) => (
              <GameInfoListList key={item}>
                {item === "morning" ? <GiSunrise fontSize="2em" /> : ""}
                {item === "afternoon" ? <RiSunLine fontSize="2em" /> : ""}
                {item === "evening" ? <GiSunset fontSize="2em" /> : ""}
                {item === "night" ? <RiMoonClearLine fontSize="2em" /> : ""}
              </GameInfoListList>
            ))}
          </GameInfoList>
        </div>
        <ButtonLayout>
          {user.favoriteGamovoreID.includes(gamovoreID) ? (
            <Button onClick={() => deleteGamovore(user, gamovoreID)}>
              {`Delete ${props.location.state.detail}`}
            </Button>
          ) : (
            <Button onClick={() => addGamovore(user, gamovoreID)}>
              {`Add ${props.location.state.detail}`}
            </Button>
          )}
        </ButtonLayout>
      </ProfilLayout>
      <ProfilAsideLayout>
        <section>
          <SecondaryTitle>{`${gamovoreData.pseudo} Games`}</SecondaryTitle>
          <ProfilGameLayout>
            <DisplayGames />
          </ProfilGameLayout>
          <Button
            onClick={() => {
              if (isViewAll === true) {
                setIsViewAll(false);
              } else {
                setIsViewAll(true);
              }
            }}
          >
            {isViewAll ? "Reduce games list" : "View all games"}
          </Button>
        </section>
      </ProfilAsideLayout>
    </ProfilPageLayout>
  ) : (
    <p>loading ...</p>
  );
};

export default GamovoreProfil;
