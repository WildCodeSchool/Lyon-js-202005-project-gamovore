import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const CallIgdb = () => {
  const [gameList, setGameList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading && !gameList.length) {
      console.log(API_KEY);
      axios({
        url:
          "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games",
        method: "POST",
        headers: {
          Accept: "application/json",
          "user-key": API_KEY,
        },
        data: "fields name, cover.url; limit 2; where total_rating_count>=80;",
      })
        .then((response) => response.data)
        .then((data) => {
          setGameList(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [loading, gameList]);

  return { gameList, loading };
};

export default CallIgdb;
