import React, { useState, useContext, useEffect } from "react";
import FirebaseContext from "../firebase-config/FirebaseContext";
import StyleForPseudo from "../style/Pseudo";
import AvatarImg from "../style/AvatarImg";
import GamovoreDiv from "../style/GamovoreDiv";

const Gamovores = (props) => {
  const [gamovoresList, setGamovoresList] = useState([]);
  const firebase = useContext(FirebaseContext);
  const user = props.user;
  const userId = props.user.favoriteGamovoreID;
  const setGamovoreState = props.setGamovoreState;

  useEffect(() => {
    if (user && userId.length) {
      firebase
        .firestore()
        .collection("users")
        .where("id", "in", userId)
        .get()
        .then((snapshot) => {
          let gamovores = [];
          snapshot.forEach((doc) => {
            if (doc && doc.exists) {
              gamovores.push(doc.data());
            } else console.log("no user");
          });
          setGamovoresList(gamovores);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [userId, firebase, user]);

  if (gamovoresList) {
    return (
      <div>
        {gamovoresList.length !== 0 ? (
          gamovoresList.map((item) => (
            <GamovoreDiv
              key={item.id}
              display="inline-block"
              onClick={() => {
                setGamovoreState(item);
              }}
            >
              <AvatarImg src={item.avatarUrl} />
              <StyleForPseudo inChat>{item.pseudo}</StyleForPseudo>
            </GamovoreDiv>
          ))
        ) : (
          <p>No gamovores</p>
        )}
      </div>
    );
  } else {
    return (
      <div>
        <p>Loading, please wait...</p>
      </div>
    );
  }
};

export default Gamovores;
