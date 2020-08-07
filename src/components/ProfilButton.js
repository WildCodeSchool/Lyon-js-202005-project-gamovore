import React, { useContext } from "react";
import { AuthContext } from "../App";

import StyleForPseudo from "./Pseudo";
import StyleForAvatar from "./Avatar";
import StyleForProfilButton from "./StyledProfilButton";
import Linked from "./Linked";

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
