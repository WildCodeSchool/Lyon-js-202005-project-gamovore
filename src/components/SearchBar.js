import React, { useState, useContext } from "react";
import CallIgdb from "../containers/CallIgdb";
import { GameListContext } from "../context/GameListContext";
// j'aimerais bien lui donner ce style https://codepen.io/himalayasingh/pen/dqjLgO

const SearchBar = () => {
  const { data, setData } = useContext(GameListContext);
  const [search, setSearch] = useState(data);

  const onChange = (e) => {
    setSearch(inputToRequest(e.target.value));
  };

  const onSubmit = () => {
    setData(search);
  };
  // transform into api request
  const inputToRequest = (string) =>
    "search " +
    `"${string}"; ` +
    "fields name, summary, cover.url, genres.name, platforms.platform_logo.url ,platforms.name, themes.name, game_modes.name  ; limit 20; where total_rating_count>=80;";

  return (
    <form onSubmit={onSubmit}>
      <input type="input" onChange={onChange} />
      <input type="submit" />
    </form>
  );
};

export default SearchBar;
