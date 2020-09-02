import React, { useState, useContext, useEffect } from "react";
import FirebaseContext from "../firebase-config/FirebaseContext";
import { UserContext } from "../context/UserContext";
import StyleForPseudo from "../style/Pseudo";
import StyleForAvatar from "../style/Avatar";
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
        <Title> Gamovores</Title>
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
                <StyleForAvatar src={item.avatarUrl} />
                <StyleForPseudo>{item.pseudo}</StyleForPseudo>
              </GamovoreDiv>
            </Linked>
          ))
        ) : (
          <p>No gamovores</p>
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
