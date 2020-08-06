import React, { useState } from "react";
import { UserBase } from "../UserBase";
import axios from "axios";
import GameCard from "../components/GameCard";
import Profil from "../components/Profil";
import ProfilPageLayout from "../components/ProfilPageLayout";
import ProfilGameLayout from "../components/ProfilGameLayout";
import ProfilAsideLayout from "../components/ProfilAsideLayout";
import MyGamovoreLayout from "../components/MyGamovoreLayout";
import MyGamovoreProfilLayout from "../components/MyGamovoreProfilLayout";
import SecondaryTitle from "../components/SecondaryTitle";
import StyleForPseudo from "../components/Pseudo";
import StyleForAvatar from "../components/Avatar";
import Loading from "../components/Loading";
import Title from "../components/Title";
import LoadingImg from "../components/LoadingImg";

const API_KEY = process.env.REACT_APP_API_KEY;

const ProfilPage = () => {
  const [profilGameList, setProfilGameList] = useState([]);
  const [loading, setLoading] = useState(true);

  if (loading && !profilGameList.length) {
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
        setProfilGameList(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  if (loading) {
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

  return (
    <ProfilPageLayout>
      <Profil />
      <ProfilAsideLayout>
        <section>
          <SecondaryTitle>My Games</SecondaryTitle>
          <ProfilGameLayout>
            {profilGameList.map((item) => (
              <GameCard little {...item} key={item.id} />
            ))}
          </ProfilGameLayout>
        </section>
        <MyGamovoreLayout>
          <SecondaryTitle>My Gamovores</SecondaryTitle>
          <MyGamovoreProfilLayout>
            {UserBase.map((item) => (
              <div key={item.id}>
                <StyleForAvatar src={item.avatar} />
                <StyleForPseudo>{item.pseudo}</StyleForPseudo>
              </div>
            ))}
          </MyGamovoreProfilLayout>
        </MyGamovoreLayout>
      </ProfilAsideLayout>
    </ProfilPageLayout>
  );
};

export default ProfilPage;
