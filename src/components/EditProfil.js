import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import FirebaseContext from "../firebase-config/FirebaseContext";
import ProfilLayout from "../style/ProfilLayout";
import AvatarContainer from "../style/AvatarContainer";
import AvatarImg from "../style/AvatarImg";
import Textarea from "../style/Textarea";
import InputPseudo from "../style/InputPseudo";
import InputAvatarUrl from "../style/InputAvatarUrl";
import Button from "../style/Button";

import { RiMoonClearLine, RiSunLine } from "react-icons/ri";
import { GiSunrise, GiSunset } from "react-icons/gi";

const Profil = ({ setEditProfil }) => {
  const { user, setUser } = useContext(UserContext);
  const firebase = useContext(FirebaseContext);
  const [pseudo, setPseudo] = useState(user.pseudo);
  const [avatarUrl, setAvatarUrl] = useState(user.avatarUrl);
  const [description, setDescription] = useState(user.description);
  const [avaibalities, setAvaibalities] = useState(user.avaibalities);
  const id = user.id;
  const email = user.email;
  const favoriteGameId = user.favoriteGameId;
  const favoriteGamovoreID = user.favoriteGamovoreID;
  const saveProfil = (
    user,
    pseudo,
    avatarUrl,
    description,
    avaibalities,
    id,
    email,
    favoriteGameId,
    favoriteGamovoreID
  ) => {
    if (user && firebase) {
      const userId = user.id;
      firebase.userActu(userId).update({
        avaibalities: avaibalities,
        avatarUrl: avatarUrl,
        description: description,
        email: email,
        favoriteGameId: favoriteGameId,
        favoriteGamovoreID: favoriteGamovoreID,
        id: id,
        pseudo: pseudo,
      });

      firebase.userActu(userId).onSnapshot(function (doc) {
        setUser(doc.data());
        setEditProfil(false);
      });
    }
  };

  const cancelProfil = () => {
    setEditProfil(false);
  };

  const handleAvatarUrlChange = (e) => {
    e.preventDefault();
    setAvatarUrl(e.target.value);
  };

  const handlePseudoChange = (e) => {
    e.preventDefault();
    setPseudo(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };

  const handleCheckChange = (e) => {
    e.persist();
    if (e.target.checked) {
      setAvaibalities((avaibalities) => [...avaibalities, e.target.name]);
    } else {
      if (avaibalities.length === 1) {
        setAvaibalities([]);
      } else {
        const removedAvaibalities = avaibalities.filter(
          (item) => item !== e.target.name
        );
        setAvaibalities(removedAvaibalities);
      }
    }
  };

  return (
    <ProfilLayout>
      <AvatarContainer>
        <AvatarImg src={avatarUrl} />
      </AvatarContainer>
      <h2>Avatar URL :</h2>
      <InputAvatarUrl
        value={avatarUrl}
        name="avatarUrl"
        onChange={handleAvatarUrlChange}
      />
      <br />
      <h2>Pseudo :</h2>
      <InputPseudo value={pseudo} name="pseudo" onChange={handlePseudoChange} />

      <div>
        <h2>Description :</h2>
        <p>avaibalities</p>
        <Textarea
          rows="5"
          cols="45"
          value={description}
          name="description"
          onChange={handleDescriptionChange}
        />
      </div>
      <div>
        <h2>Avaibalities :</h2>
        <input
          type="checkbox"
          name="morning"
          onChange={handleCheckChange}
          checked={avaibalities.includes("morning") ? true : false}
        />{" "}
        Morning <GiSunrise fontSize="2em" />
        <br />
        <input
          type="checkbox"
          name="afternoon"
          onChange={handleCheckChange}
          checked={avaibalities.includes("afternoon") ? true : false}
        />{" "}
        Afternoon <RiSunLine fontSize="2em" /> <br />
        <input
          type="checkbox"
          name="evening"
          onChange={handleCheckChange}
          checked={avaibalities.includes("evening") ? true : false}
        />{" "}
        Evening <GiSunset fontSize="2em" /> <br />
        <input
          type="checkbox"
          name="night"
          onChange={handleCheckChange}
          checked={avaibalities.includes("night") ? true : false}
        />{" "}
        Nigth <RiMoonClearLine fontSize="2em" /> <br />
      </div>
      <br />
      <Button
        onClick={() =>
          saveProfil(
            user,
            pseudo,
            avatarUrl,
            description,
            avaibalities,
            id,
            email,
            favoriteGameId,
            favoriteGamovoreID
          )
        }
      >
        Edit
      </Button>
      <Button onClick={cancelProfil}>Cancel</Button>
    </ProfilLayout>
  );
};

export default Profil;
