import React, { useState, useEffect } from "react";
import axios from "axios";
import GameCard from "./GameCard";

// const API_KEY = process.env.REACT_APP_API_KEY;

const GameListBox = () => {
  const [game, setGame] = useState([]);

  const GameListCall = () => {
    axios({
      url: "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games",
      method: "POST",
      headers: {
        Accept: "application/json",
        "user-key": "ae87c04d02484d1d509c203b31f9e9e1",
      },
      data: "fields name, cover.url; limit 20; where total_rating_count>=80;",
    })
      .then((response) => response.data)
      .then((data) => {
        setGame(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    GameListCall();
  }, [GameListCall()]);

  return (
    <div>
      Test
      <ul>
        {game.map((item) => (
          <GameCard {...item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default GameListBox;
