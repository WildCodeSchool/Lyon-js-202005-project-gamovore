import React, { useState, useContext, useEffect } from "react";
import FirebaseContext from "../firebase-config/FirebaseContext";
import { UserContext } from "../context/UserContext";
import StyleForPseudo from "../style/Pseudo";
import AvatarImg from "../style/AvatarImg";
import GamovoreDiv from "../style/GamovoreDiv";
import Linked from "../style/Linked";
import Title from "../style/Title";

const Gamovores = (props) => {
  const [gamovoresList, setGamovoresList] = useState(null);
  const firebase = useContext(FirebaseContext);
  const gameId = props.gameId;
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (gameId) {
      firebase
        .firestore()
        .collection("users")
        .where("favoriteGameId", "array-contains", gameId)
        .get()
        .then((snapshot) => {
          let gamovores = [];
          snapshot.forEach((doc) => {
            if (doc && doc.exists) {
              gamovores.push(doc.data());
            }
          });
          setGamovoresList(gamovores);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [gameId, firebase, user]);

  if (gamovoresList) {
    return (
      <div>
        <h1>{gamovoresList.length ? gamovoresList.length : ""} Gamovores</h1>
        {gamovoresList.length !== 0 ? (
          gamovoresList.map((item) => (
            <Linked
              to={{
                pathname: `/gamovore/${item.id}`,
                state: { detail: item.pseudo, gvid: item.id },
              }}
              key={item.id}
            >
              <GamovoreDiv key={item.id} display="inline-block">
                <AvatarImg src={item.avatarUrl} />
                <StyleForPseudo>{item.pseudo}</StyleForPseudo>
              </GamovoreDiv>
            </Linked>
          ))
        ) : (
          <p>No gamovore</p>
        )}
      </div>
    );
  } else {
    return (
      <div>
        <Title> Gamovores</Title>
        <p>Loading...</p>
      </div>
    );
  }
};

export default Gamovores;
