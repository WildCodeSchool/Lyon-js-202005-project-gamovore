import React from "react";
import NoGamesDiv from "../style/NoGamesDiv";
import NoGamesImg from "../style/NoGamesImg";

const NoGames = () => {
  return (
    <NoGamesDiv>
      <NoGamesImg
        src="https://media1.tenor.com/images/75a9e4cd4f617f5add61b972cd441ca2/tenor.gif?itemid=11936006"
        alt="no games"
        title="no games"
      />
      <h2> Hey, there is no game with this name.</h2>
      <h2>Try again !</h2>
    </NoGamesDiv>
  );
};

export default NoGames;
