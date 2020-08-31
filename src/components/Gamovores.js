import React, { useState, useContext, useEffect } from "react";
import FirebaseContext from "../firebase-config/FirebaseContext";

const Gamovores = (props) => {
  const [gamovoresList, setGamovoresList] = useState(null);
  const firebase = useContext(FirebaseContext);
  const gameId = props.gameId;

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
  }, [gameId, firebase]);

  if (gamovoresList) {
    return (
      <div>
        <h1> Gamovores</h1>
        {gamovoresList.map((item) => (
          <div key={item.id}>
            <img src={item.avatarUrl} alt={item.pseudo} width="20%" />
            <p key={item.id}>{item.pseudo}</p>
          </div>
        ))}
      </div>
    );
  } else {
    return <p>No gamovores for this game</p>;
  }
};

export default Gamovores;
