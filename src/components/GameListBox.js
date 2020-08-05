import React, {component, useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";

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
    data: "fields name, cover.url; limit 20; where rating>=85;",
  })
    .then((response) => response.data)
    .then((data) => {
      setGame(data);
      console.log(data)
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
        <li key={item.id}>{item.name}
        <img key={item.cover? item.cover.id : item.id} src={item.cover? "https:"+item.cover.url.replace("thumb","cover_big_2x"):""} alt={item.name}/>
        </li>
        ))
      }</ul>
  );
};

export default GameListBox;
