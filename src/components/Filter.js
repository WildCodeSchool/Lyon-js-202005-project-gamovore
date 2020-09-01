import React, { useState, useEffect, useContext } from "react";
import { GameListContext } from "../context/GameListContext";
import { FilterContext } from "../context/FilterContext";

const Filter = () => {
  const { data, setData } = useContext(GameListContext);
  const { selectedFilters, setFilters } = useContext(FilterContext);

  const filteredSearch = `fields name, summary, cover.url, genres.name, platforms.platform_logo.url ,platforms.name, themes.name, game_modes.name  ; limit 500; where release_dates.platform=${selectedFilters};`;
  setData(filteredSearch);
};

export default Filter;
