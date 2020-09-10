import React, { useState, useContext, useEffect } from "react";
import FirebaseContext from "../firebase-config/FirebaseContext";
import { UserContext } from "../context/UserContext";
import { GameListContext } from "../context/GameListContext";
import GameCard from "../components/GameCard";
import Loading from "../style/Loading";
import LoadingImg from "../style/LoadingImg";
import GameListLayout from "../style/GameListLayout";
import CallIgdb from "./CallIgdb";

const GameListBox = (props) => {
  const firebase = useContext(FirebaseContext);
  const { setUser } = useContext(UserContext);

  const [authUser, setAuthUser] = useState(null);

  const { data } = useContext(GameListContext);
  let { gameList, loading } = CallIgdb(data);

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
          <h3>
            Be patient young Gamovore, the duck is fishing games for you...
          </h3>
          <LoadingImg
            src="https://cdn.dribbble.com/users/591610/screenshots/3861704/pato.gif"
            alt="loading"
          />
        </Loading>
      ) : (
        gameList.map((item) => <GameCard {...item} key={item.id} />)
      )}
    </GameListLayout>
  );
};

export default GameListBox;
