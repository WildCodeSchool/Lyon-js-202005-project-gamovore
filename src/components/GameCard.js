import React from "react";
import GameCardJacquette from "./GameCardJacquette";
import GameCardName from "./GameCardName";
import GameCardStyle from "./GameCardStyle";
import AddGameButton from "./AddGameButton";
import Plus from "./Plus";
import PlusImg from "../img/white/plus.png";
import gameCoverPlaceholder from "../img/white/gameCoverPlaceholder.png";

const GameCard = (props) => {
  return (
    <GameCardStyle>
      <GameCardJacquette
        src={
          props.cover
            ? "https:" + props.cover.url.replace("thumb", "cover_big_2x")
            : gameCoverPlaceholder
        }
      />
      <GameCardName>{props.name}</GameCardName>
      <AddGameButton>
        <Plus src={PlusImg} />
        Add to Collection
      </AddGameButton>
    </GameCardStyle>
  );
};

export default GameCard;
