import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import StyleForPseudo from "../style/Pseudo";
import StyleForAvatar from "../style/Avatar";
import StyleForProfilButton from "../style/StyledProfilButton";
import Linked from "../style/Linked";
import Logout from "../components/Logout";
import AvatarContainer from "../style/AvatarContainer";
import DropDownContainer from "../style/DropDownContainer";
import MenuItem from "../style/MenuItem";

const ProfilButton = (props) => {
  const { user } = useContext(UserContext);
  const [hover, setHover] = useState(false);
  console.log(props);

  return props.drop && hover ? (
    <StyleForProfilButton
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Linked to="/profil">
        <AvatarContainer>
          <StyleForAvatar src={user.avatarUrl} />
          <StyleForPseudo>{user.pseudo}</StyleForPseudo>
        </AvatarContainer>
      </Linked>
      <DropDownContainer>
        <Linked to="/profil">
          <MenuItem>My profil</MenuItem>
        </Linked>
        <MenuItem>My games</MenuItem>
        <MenuItem>My co-gamovores</MenuItem>
        <Logout />
      </DropDownContainer>
    </StyleForProfilButton>
  ) : (
    <Linked to="/profil">
      <StyleForProfilButton
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <StyleForAvatar src={user.avatarUrl} />
          <StyleForPseudo>{user.pseudo}</StyleForPseudo>
        </div>
      </StyleForProfilButton>
    </Linked>
  );
};

export default ProfilButton;
