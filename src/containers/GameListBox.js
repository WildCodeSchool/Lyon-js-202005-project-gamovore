import React, { useState, useContext, useEffect } from "react";
import FirebaseContext from "../firebase-config/FirebaseContext";
import { UserContext } from "../context/UserContext";
import GameCard from "../components/GameCard";
import Title from "../style/Title";
import Loading from "../style/Loading";
import LoadingImg from "../style/LoadingImg";
import GameListLayout from "../style/GameListLayout";
import CallIgdb from "./CallIgdb";
import { FilterContext } from "../context/FilterContext";

const GameListBox = (props) => {
  const { selectedFilters, setFilters } = useContext(FilterContext);
  const [platformFilters, setPlatformFilters] = useState([]);
  useEffect(() => {
    setPlatformFilters((platformFilters) => [
      ...platformFilters,
      selectedFilters,
    ]);
  }, [selectedFilters]);

  const firebase = useContext(FirebaseContext);
  const { setUser } = useContext(UserContext);

  const [authUser, setAuthUser] = useState(null);

  const dataCallIgdb =
    "fields name, summary, cover.url, genres.name, platforms.platform_logo.url ,platforms.name, themes.name, game_modes.name  ; limit 500; where total_rating_count>=80;";
  const { gameList, loading } = CallIgdb(dataCallIgdb);

  useEffect(() => {
    let listener = firebase.auth.onAuthStateChanged((user) => {
      user ? setAuthUser(user) : props.history.push("/sign-in");
    });

    if (authUser !== null) {
      firebase
        .userAdd(authUser.uid)
        .get()
        .then((doc) => {
          if (doc && doc.exists) {
            const myData = doc.data();
            setUser(myData);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return () => {
      listener();
    };
  }, [authUser, firebase, props.history, setUser]);

  return authUser === null ? (
    <Loading>
      <LoadingImg
        src="https://cdn.dribbble.com/users/591610/screenshots/3861704/pato.gif"
        alt="loading"
      />
    </Loading>
  ) : (
    <GameListLayout>
      {loading ? (
        <Loading>
          <Title>
            Be patient young Gamovore, the duck is fishing a games for you ...
          </Title>
          <LoadingImg
            src="https://cdn.dribbble.com/users/591610/screenshots/3861704/pato.gif"
            alt="loading"
          />
        </Loading>
      ) : (
        gameList.map((item) => (
          <>
            <GameCard {...item} key={item.id} />
          </>
        ))
        // .filter((item) => {
        //   console.log(item);
        //   for (let i = 0; i < item.platforms.length; i++) {
        //     for (let j = 0; j < platformFilters.length; j++) {
        //       if (item.platforms[i] === platformFilters[j]) {
        //         return <GameCard {...item} key={item.id} />;
        //       }
        //     }
        //   }
        // })
      )}
    </GameListLayout>
  );
};

export default GameListBox;
