import React, { useState } from "react";

const dataCallIgdb =
  "fields name, summary, cover.url, genres.name, platforms.platform_logo.url ,platforms.name, themes.name, game_modes.name  ; limit 20; where total_rating_count>=80;";

export const GameListContext = React.createContext(dataCallIgdb);

export const GameListProvider = (props) => {
  const [data, setData] = useState(dataCallIgdb);

  return (
    <GameListContext.Provider value={{ data, setData }}>
      {props.children}
    </GameListContext.Provider>
  );
};
