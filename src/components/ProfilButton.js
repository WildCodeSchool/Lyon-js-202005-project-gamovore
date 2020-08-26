import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import StyleForPseudo from "../style/Pseudo";
import StyleForAvatar from "../style/Avatar";
import StyleForProfilButton from "../style/StyledProfilButton";
import Linked from "../style/Linked";

const ProfilButton = () => {
  const { user } = useContext(UserContext);
  return (
    <Linked to="/profil">
      <StyleForProfilButton>
        <StyleForAvatar src={user.avatarUrl} />
        <StyleForPseudo>{user.pseudo}</StyleForPseudo>
      </StyleForProfilButton>
    </Linked>
  );
};

export default ProfilButton;
