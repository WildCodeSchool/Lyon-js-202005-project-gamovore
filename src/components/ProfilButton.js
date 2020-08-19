import React, { useContext } from "react";
import { AuthContext } from "../App";

import StyleForPseudo from "../style/Pseudo";
import StyleForAvatar from "../style/Avatar";
import StyleForProfilButton from "../style/StyledProfilButton";
import Linked from "../style/Linked";

const ProfilButton = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Linked to="/profil">
      <StyleForProfilButton>
        <StyleForAvatar src={currentUser.avatar} />
        <StyleForPseudo>{currentUser.pseudo}</StyleForPseudo>
      </StyleForProfilButton>
    </Linked>
  );
};

export default ProfilButton;
