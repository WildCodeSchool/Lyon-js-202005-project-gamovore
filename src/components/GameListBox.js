import React from "react";

const GameListBox = () => {
  const [game, setGame]=useState([]);
  axios({
      url: "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games",
      method: "POST",
      headers: {
        Accept: "application/json",
        "user-key":process.env.REACT_APP_API_KEY,
      },
      data: `fields name, cover.url; limit 20;`,
    })
      .then((response) => response.data)
      .then((data) => {
        setGame(data);
      })
      .catch((err) => {
        console.error(err);
      });
      
  };


  return (
    <div>
       
    </div>
  );
};

export default GameListBox;
