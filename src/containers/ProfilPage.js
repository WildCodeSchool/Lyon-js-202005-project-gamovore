import React, { useState } from "react";
import { UserBase } from "../UserBase";
import GameCard from "../components/GameCard";
import Profil from "../components/Profil";
import ProfilPageLayout from "../style/ProfilPageLayout";
import ProfilGameLayout from "../style/ProfilGameLayout";
import ProfilAsideLayout from "../style/ProfilAsideLayout";
import MyGamovoreLayout from "../style/MyGamovoreLayout";
import MyGamovoreProfilLayout from "../style/MyGamovoreProfilLayout";
import SecondaryTitle from "../style/SecondaryTitle";
import StyleForPseudo from "../style/Pseudo";
import StyleForAvatar from "../style/Avatar";
import CallIgdb from "./CallIgdb";

// const API_KEY = process.env.REACT_APP_API_KEY;

const ProfilPage = () => {
  const [gameList, setGameList] = useState([]);
  const [loading, setLoading] = useState(true);
  //   if (loading && !gameList.length) {
  //     axios({
  //       url: "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games",
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "user-key": API_KEY,
  //       },
  //       data: "fields name, cover.url; limit 2; where total_rating_count>=80;",
  //     })
  //       .then((response) => response.data)
  //       .then((data) => {
  //         setGameList(data);
  //         setLoading(false);
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //       });
  //   }

  //   if (loading) {
  //     return (
  //       <Loading>
  //         <Title>
  //           Be patient young Gamovore, the duck is fishing a games for you ...
  //         </Title>
  //         <LoadingImg
  //           src="https://cdn.dribbble.com/users/591610/screenshots/3861704/pato.gif"
  //           alt="loading"
  //         />
  //       </Loading>
  //     );
  //   }

  return (
    <ProfilPageLayout>
      <Profil />
      <ProfilAsideLayout>
        <section>
          <SecondaryTitle>My Games</SecondaryTitle>
          <ProfilGameLayout>
            <CallIgdb
              loading={loading}
              gameList={gameList}
              setGameList={setGameList}
              setLoading={setLoading}
            />
            {gameList.map((item) => (
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
