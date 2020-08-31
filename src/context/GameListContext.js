import React, { useState, useEffect } from "react";

const dataCallIgdb =
  "fields name, summary, cover.url, genres.name, platforms.platform_logo.url ,platforms.name, themes.name, game_modes.name  ; limit 20; where total_rating_count>=80;";

export const GameListContext = React.createContext(null);

export const GameListProvider = (props) => {
  const [data, setData] = useState(dataCallIgdb);

  useEffect(() => {
    data ? setData(data) : setData(dataCallIgdb);
  }, [data]);

  return (
    <GameListContext.Provider value={{ data, setData }}>
      {props.children}
    </GameListContext.Provider>
  );
};
