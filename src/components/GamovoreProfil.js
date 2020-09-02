import React, { useContext, useEffect, useState } from "react";
import FirebaseContext from "../firebase-config/FirebaseContext";
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

import { RiMoonClearLine, RiSunLine } from "react-icons/ri";
import { GiSunrise, GiSunset } from "react-icons/gi";

const API_KEY = process.env.REACT_APP_API_KEY;

const GamovoreProfil = (props) => {
  const firebase = useContext(FirebaseContext);

  const [gamovoreData, setGamovoreData] = useState([]);
  const [gameToLoad, setGameToLoad] = useState([]);
  const [gamovoreGames, setGamovoreGames] = useState([]);

  useEffect(() => {
    console.log(props.location.state.gvid);
    firebase.db
      .collection("users")
      .doc(props.location.state.gvid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setGamovoreData(doc.data());
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

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
          data: `fields name, summary, cover.url, genres.name, platforms.platform_logo.url ,platforms.name, themes.name, game_modes.name; limit 3; where id=(${gameToLoad});`,
        })
          .then((response) => {
            setGamovoreGames(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } else {
      console.log("nothing to load");
    }
  }, [gamovoreData, gameToLoad]);

  const DisplayGames = () => {
    if (gamovoreGames.length !== 0) {
      return gamovoreGames.map((item) => (
        <GameCard little {...item} key={item.id} />
      ));
    } else {
      return <p>No games to your collection ... </p>;
    }
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
          <Button>{`Add ${props.location.state.detail}`}</Button>
        </ButtonLayout>
      </ProfilLayout>
      <ProfilAsideLayout>
        <section>
          <SecondaryTitle>{`${gamovoreData.pseudo} Games`}</SecondaryTitle>
          <ProfilGameLayout>
            <DisplayGames />
          </ProfilGameLayout>
        </section>
      </ProfilAsideLayout>
    </ProfilPageLayout>
  ) : (
    <p>loading ...</p>
  );
};

export default GamovoreProfil;
