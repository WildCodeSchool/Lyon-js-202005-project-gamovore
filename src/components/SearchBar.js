import React, { useState, useContext } from "react";
import { GameListContext } from "../context/GameListContext";

const SearchBar = () => {
  const { data, setData } = useContext(GameListContext);
  const [search, setSearch] = useState(data);

  const onChange = (e) => {
    setSearch(inputToRequest(e.target.value));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setData(search);
  };
  // transform into api request
  const inputToRequest = (string) =>
    "search " +
    `"${string}"; ` +
    "fields name, summary, cover.url, genres.name, platforms.platform_logo.url ,platforms.name, themes.name, game_modes.name  ; limit 20;";

  return (
    <form onSubmit={onSubmit}>
      <input type="input" onChange={onChange} />
      <input type="submit" />
    </form>
  );
};

export default SearchBar;
