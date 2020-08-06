import React, { useState } from "react";
import axios from "axios";
import GameCard from "./GameCard";
import Title from "./Title";
import Loading from "./Loading";
import LoadingImg from "./LoadingImg";
import GameListLayout from "./GameListLayout";

const API_KEY = process.env.REACT_APP_API_KEY;

const GameListBox = () => {
  const [gameList, setGameList] = useState([]);
  const [loading, setLoading] = useState(true);

  if (loading && !gameList.length) {
    axios({
      url: "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games",
      method: "POST",
      headers: {
        Accept: "application/json",
        "user-key": API_KEY,
      },
      data: "fields name, cover.url; limit 20; where total_rating_count>=80;",
    })
      .then((response) => response.data)
      .then((data) => {
        setGameList(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  if (loading) {
    return (
      <Loading>
        <Title>
          Be patient young Gamovore, the duck is fishing a games for you ...
        </Title>
        <LoadingImg
          src="https://cdn.dribbble.com/users/591610/screenshots/3861704/pato.gif"
          alt="loading"
        />
      </Loading>
    );
  }

  return (
    <GameListLayout>
      {gameList.map((item) => (
        <GameCard {...item} key={item.id} />
      ))}
    </GameListLayout>
  );
};

export default GameListBox;
