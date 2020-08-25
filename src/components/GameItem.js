import React from "react";
import gameCoverPlaceholder from "../img/white/gameCoverPlaceholder.png";
import GameInfo from "../style/GameInfo";
import GameImage from "../style/GameImage";
import GamePage from "../style/GamePage";
import GameResume from "../style/GameResume";
import GameInfoList from "../style/GameInfoList";
import GameInfoListTitle from "../style/GameInfoListTitle";
import GameInfoListList from "../style/GameInfoListList";
import Button from "../style/Button";

const GameItem = (props) => {
  const game = props.location.state.detail;
  return (
    <GamePage>
      <GameImage
        src={
          game.cover
            ? "https:" + game.cover.url.replace("thumb", "cover_big_2x")
            : gameCoverPlaceholder
        }
        alt={game.title}
      />
      <GameInfo>
        <h1>{game.name}</h1>
        <GameResume>{game.summary}</GameResume>
        <GameInfoList>
          <GameInfoListTitle>Catégorie(s) : </GameInfoListTitle>
          {game.game_modes.map((item) => (
            <GameInfoListList key={item.id}>{item.name} - </GameInfoListList>
          ))}
        </GameInfoList>
        <GameInfoList>
          <GameInfoListTitle>Genre(s) : </GameInfoListTitle>
          {game.genres.map((item) => (
            <GameInfoListList key={item.id}>{item.name}</GameInfoListList>
          ))}
        </GameInfoList>
        <GameInfoList>
          <GameInfoListTitle>Plateforme(s) : </GameInfoListTitle>

          {game.platforms.map((item) => (
            <GameInfoListList key={item.id}>{item.name} </GameInfoListList>
          ))}
        </GameInfoList>
        <Button>Add to My games</Button>
      </GameInfo>
    </GamePage>
  );
};

export default GameItem;
