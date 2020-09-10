import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import FirebaseContext from "../firebase-config/FirebaseContext";
import { UserContext } from "../context/UserContext";
import "firebase/firestore";
import GameCardJacquette from "../style/GameCardJacquette";
import GameCardName from "../style/GameCardName";
import GameCardStyle from "../style/GameCardStyle";
import AddGameButton from "../style/AddGameButton";
import ImageContent from "../style/ImageContent";
import gameCoverPlaceholder from "../img/white/gameCoverPlaceholder.png";
import { RiDeleteBin5Fill, RiAddFill } from "react-icons/ri";
import Loading from "../style/Loading";
import LoadingImg from "../style/LoadingImg";

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
    }
  };

  if (user) {
    return (
      <GameCardStyle little={props.little}>
        <ImageContent>
          <Link to={{ pathname: link, state: { detail: gameData } }}>
            <GameCardJacquette
              src={
                props.cover
                  ? "https:" + props.cover.url.replace("thumb", "cover_big_2x")
                  : gameCoverPlaceholder
              }
            />
          </Link>
        </ImageContent>
        <GameCardName>{props.name}</GameCardName>

        {user.favoriteGameId.includes(gameId) ? (
          <AddGameButton onClick={() => deleteGame(user, gameId)}>
            <RiDeleteBin5Fill fontSize="2.5em" />
            Remove from collection
          </AddGameButton>
        ) : (
          <AddGameButton onClick={() => addGame(user, gameId)}>
            <RiAddFill fontSize="3em" />
            Add to collection
          </AddGameButton>
        )}
      </GameCardStyle>
    );
  } else {
    return (
      <Loading>
        <h3>Be patient young Gamovore, the duck is fishing games for you ...</h3>
        <LoadingImg
          src="https://cdn.dribbble.com/users/591610/screenshots/3861704/pato.gif"
          alt="loading"
        />
      </Loading>
    );
  }
};

export default GameCard;
