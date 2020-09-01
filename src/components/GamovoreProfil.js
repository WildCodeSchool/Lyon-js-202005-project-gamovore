import React, { useContext, useEffect, useState } from "react";
import FirebaseContext from "../firebase-config/FirebaseContext";
import axios from "axios";

import SecondaryTitle from "../style/SecondaryTitle";
import GameInfoList from "../style/GameInfoList";
import GameInfoListList from "../style/GameInfoListList";
import ProfilLayout from "../style/ProfilLayout";
import ProfilPageLayout from "../style/ProfilPageLayout";
import ProfilAsideLayout from "../style/ProfilAsideLayout";

import { RiMoonClearLine, RiSunLine } from "react-icons/ri";
import { GiSunrise, GiSunset } from "react-icons/gi";

const API_KEY = process.env.REACT_APP_API_KEY;

const GamovoreProfil = (props) => {
  const firebase = useContext(FirebaseContext);

  const [gamovoreData, setGamovoreData] = useState([]);
  const [gameToLoad, setGameToLoad] = useState([]);

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
      axios({
        url:
          "https://thingproxy.freeboard.io/fetch/https://api-v3.igdb.com/games",
        method: "POST",
        headers: {
          Accept: "application/json",
          "user-key": API_KEY,
        },
        data: `fields name, summary, cover.url, genres.name, platforms.platform_logo.url ,platforms.name, themes.name, game_modes.name; limit 3; where id=(${gameToLoad});`,
      }).then((response) => console.log(response));
    } else {
      console.log("nothing to load");
    }
  }, [gamovoreData, gameToLoad]);

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
      </ProfilLayout>
      <ProfilAsideLayout>
        <section>
          <SecondaryTitle>{`${gamovoreData.pseudo} Games`}</SecondaryTitle>
        </section>
      </ProfilAsideLayout>
    </ProfilPageLayout>
  ) : (
    <p>loading ...</p>
  );
};

export default GamovoreProfil;
