import React from "react";
import NoGamesDiv from "../style/NoGamesDiv";
import NoGamesImg from "../style/NoGamesImg";

const NoGames = () => {
  return (
    <NoGamesDiv>
      <NoGamesImg
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/ec7b9b48968549.58a6e6d241353.gif"
        alt="no games"
        title="no games"
      />
      <h2> Hey, there is no game with this name.</h2>
      <h2>Try again !</h2>
    </NoGamesDiv>
  );
};

export default NoGames;
