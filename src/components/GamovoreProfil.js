import React, { useContext, useEffect, useState } from "react";
import FirebaseContext from "../firebase-config/FirebaseContext";

import SecondaryTitle from "../style/SecondaryTitle";
import GameInfoList from "../style/GameInfoList";

import { RiMoonClearLine, RiSunLine } from "react-icons/ri";
import { GiSunrise, GiSunset } from "react-icons/gi";

const GamovoreProfil = (props) => {
  const firebase = useContext(FirebaseContext);

  const [gamovoreData, setGamovoreData] = useState([]);

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

  console.log(gamovoreData);

  return gamovoreData.length !== 0 ? (
    <div>
      <SecondaryTitle>{props.location.state.detail}</SecondaryTitle>
      <h2>Description :</h2>
      <p>{gamovoreData.description}</p>
      <h2>Disponibilities:</h2>
      <GameInfoList>
        {gamovoreData.avaibalities.map((item) => (
          <GameInfoList key={item}>
            {item === "morning" ? <GiSunrise fontSize="2em" /> : ""}
            {item === "afternoon" ? <RiSunLine fontSize="2em" /> : ""}
            {item === "evening" ? <GiSunset fontSize="2em" /> : ""}
            {item === "night" ? <RiMoonClearLine fontSize="2em" /> : ""}
          </GameInfoList>
        ))}
      </GameInfoList>
    </div>
  ) : (
    <p>loading ...</p>
  );
};

export default GamovoreProfil;
