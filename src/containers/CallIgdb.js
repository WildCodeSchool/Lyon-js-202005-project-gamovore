import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const CallIgdb = (dataCallIgdb) => {
  const [gameList, setGameList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading && !gameList.length) {
      axios({
        url:
          "https://thingproxy.freeboard.io/fetch/https://api-v3.igdb.com/games",
        method: "POST",
        headers: {
          Accept: "application/json",
          "user-key": API_KEY,
        },
        data: dataCallIgdb,
      })
        .then((response) => response.data)
        .then((data) => {
          setGameList(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [loading, gameList, dataCallIgdb]);

  return { gameList, setGameList, loading, setLoading };
};

export default CallIgdb;
