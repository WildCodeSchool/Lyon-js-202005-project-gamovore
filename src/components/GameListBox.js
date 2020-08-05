import React, {component, useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";
import GameCard from "./GameCard"

const API_KEY = process.env.REACT_APP_API_KEY;

const GameListBox = () => {
  const [game, setGame] = useState([]);
  const GameListCall = () => {
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
      setGame(data);
    })
    .catch((err) => {
      console.error(err);
    });
  };

  useEffect(()=>{
    GameListCall();
  }, []);

  return (
      <ul>{
        game.map((item)=>(
        <GameCard {...item} />
        ))
      }</ul>
  );
};

export default GameListBox;
