import React, { useState, useContext } from "react";
import { GameListContext } from "../context/GameListContext";
import StyledSearchBar from "../style/StyledSearchBar";
import { useHistory } from "react-router-dom";

const SearchBar = (props) => {
  const { data, setData } = useContext(GameListContext);
  const [search, setSearch] = useState(data);
  const history = useHistory();

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (window.location.pathname !== "/") {
      history.push("/");
    }
    setData(inputToRequest(search));
  };

  const inputToRequest = (string) =>
    "search " +
    `"${string}"; ` +
    "fields name, summary, cover.url, genres.name, platforms.platform_logo.url ,platforms.name, themes.name, game_modes.name  ; limit 50;";

  return (
    <StyledSearchBar onSubmit={onSubmit}>
      <input
        type="search"
        onChange={onChange}
        placeholder="Search..."
        required
      />
      <button type="submit">Go</button>
    </StyledSearchBar>
  );
};

export default SearchBar;
