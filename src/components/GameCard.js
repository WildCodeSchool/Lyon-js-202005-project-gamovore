import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import FirebaseContext from "../firebase-config/FirebaseContext";
import { UserContext } from "../context/UserContext";
import "firebase/firestore";

import GameCardJacquette from "../style/GameCardJacquette";
import GameCardName from "../style/GameCardName";
import GameCardStyle from "../style/GameCardStyle";
import AddGameButton from "../style/AddGameButton";
import Plus from "../style/Plus";
import PlusImg from "../img/black/plus.png";
import gameCoverPlaceholder from "../img/white/gameCoverPlaceholder.png";

const GameCard = (props) => {
  const firebase = useContext(FirebaseContext);
  const { user, setUser } = useContext(UserContext);

  const gameId = props.id;
  const [gameData] = useState(props);
  const link = "/game/" + props.id;

  const addGame = (user, gameId) => {
    if (user && firebase) {
      const userId = user.id;
      firebase.userActu(userId).update({
        favoriteGameId: firebase.dataAdd(gameId),
      });

      firebase.userActu(userId).onSnapshot(function (doc) {
        setUser(doc.data());
      });
    } else {
      console.log("non chargé");
    }
  };

  const deleteGame = (user, gameId) => {
    if (user && firebase) {
      const userId = user.id;

      firebase.userActu(userId).update({
        favoriteGameId: firebase.dataRemove(gameId),
      });

      firebase.userActu(userId).onSnapshot(function (doc) {
        setUser(doc.data());
      });
    } else {
      console.log("non chargé");
    }
  };

  return (
    <GameCardStyle>
      <Link to={{ pathname: link, state: { detail: gameData } }}>
        <GameCardJacquette
          src={
            props.cover
              ? "https:" + props.cover.url.replace("thumb", "cover_big_2x")
              : gameCoverPlaceholder
          }
        />
      </Link>
      <GameCardName>{props.name}</GameCardName>
      {/*onClick={addGame}*/}
      <AddGameButton onClick={() => addGame(user, gameId)}>
        <Plus src={PlusImg} />
        Add to Collection
      </AddGameButton>
      <AddGameButton onClick={() => deleteGame(user, gameId)}>
        <Plus src={PlusImg} />
        Delete to Collection
      </AddGameButton>
    </GameCardStyle>
  );
};

export default GameCard;
