import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "../App";
// import React, { useContext } from "react";

import GameCardJacquette from "../style/GameCardJacquette";
import GameCardName from "../style/GameCardName";
import GameCardStyle from "../style/GameCardStyle";
import AddGameButton from "../style/AddGameButton";
import Plus from "../style/Plus";
import PlusImg from "../img/black/plus.png";
import gameCoverPlaceholder from "../img/white/gameCoverPlaceholder.png";

const GameCard = (props) => {
  // const { currentUser, setCurrentUser } = useContext(AuthContext);
  // const gameId = props.id;

  // const addGame = () => {
  //   if (currentUser.favoriteGameId.indexOf(gameId) === -1) {
  //     setCurrentUser({
  //       ...currentUser,
  //       favoriteGameId: [...currentUser.favoriteGameId, gameId],
  //     });
  //   } else {
  //     alert("Game is already in your favorites" + gameId);
  //   }
  // };
  const [gameData, setGameData] = useState(props);

  const link = "/game/" + props.id;

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
      <AddGameButton>
        <Plus src={PlusImg} />
        Add to Collection
      </AddGameButton>
    </GameCardStyle>
  );
};

export default GameCard;
