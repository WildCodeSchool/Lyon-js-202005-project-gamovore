import React, { useState } from "react";
import axios from "axios";
import Loading from "../style/Loading";
import Title from "../style/Title";
import LoadingImg from "../style/LoadingImg";

const API_KEY = process.env.REACT_APP_API_KEY;

const CallIgdb = (props) => {
  if (props.loading && !props.gameList.length) {
    axios({
      url: "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games",
      method: "POST",
      headers: {
        Accept: "application/json",
        "user-key": API_KEY,
      },
      data: "fields name, cover.url; limit 2; where total_rating_count>=80;",
    })
      .then((response) => response.data)
      .then((data) => {
        props.setGameList(data);
        props.setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  if (props.loading) {
    return (
      <Loading>
        <Title>
          Be patient young Gamovore, the duck is fishing a games for you ...
        </Title>
        <LoadingImg
          src="https://cdn.dribbble.com/users/591610/screenshots/3861704/pato.gif"
          alt="loading"
        />
      </Loading>
    );
  }
};

export default CallIgdb;
