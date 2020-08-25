import React from "react";
import GameCard from "../components/GameCard";
import Title from "../style/Title";
import Loading from "../style/Loading";
import LoadingImg from "../style/LoadingImg";
import GameListLayout from "../style/GameListLayout";
import CallIgdb from "./CallIgdb";

const GameListBox = () => {
  const dataCallIgdb =
    "fields name, summary, cover.url, genres.name, platforms.platform_logo.url ,platforms.name, themes.name, game_modes.name  ; limit 20; where total_rating_count>=80;";
  const { gameList, loading } = CallIgdb(dataCallIgdb);

  return (
    <GameListLayout>
      {loading ? (
        <Loading>
          <Title>
            Be patient young Gamovore, the duck is fishing a games for you ...
          </Title>
          <LoadingImg
            src="https://cdn.dribbble.com/users/591610/screenshots/3861704/pato.gif"
            alt="loading"
          />
        </Loading>
      ) : (
        gameList.map((item) => <GameCard {...item} key={item.id} />)
      )}
    </GameListLayout>
  );
};

export default GameListBox;
