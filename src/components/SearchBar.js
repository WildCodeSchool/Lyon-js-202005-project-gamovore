import React, { useState, useContext } from "react";
import { GameListContext } from "../context/GameListContext";
import StyledSearchBar from "../style/StyledSearchBar";

const SearchBar = () => {
  const { data, setData } = useContext(GameListContext);
  const [search, setSearch] = useState(data);

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setData(inputToRequest(search));
  };

  const inputToRequest = (string) =>
    "search " +
    `"${string}"; ` +
    "fields name, summary, cover.url, genres.name, platforms.platform_logo.url ,platforms.name, themes.name, game_modes.name  ; limit 50;";

  return (
    <StyledSearchBar onSubmit={onSubmit}>
      <input type="search" onChange={onChange} placeholder="Search..." />
      <button type="submit">Go</button>
    </StyledSearchBar>
  );
};

export default SearchBar;
