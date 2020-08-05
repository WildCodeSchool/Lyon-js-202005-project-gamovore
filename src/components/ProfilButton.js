import React, {useContext} from 'react';
import { AuthContext } from "../App";
import { UserBase } from "../UserBase";

import StyleForPseudo from "./Pseudo";
import StyleForAvatar from "./Avatar";
import StyleForProfilButton from "./StyledProfilButton";


const ProfilButton = () => {
    const { currentUser } = useContext(AuthContext);
    const detailsUser = UserBase.find(el => el.pseudo === currentUser);
    return (
        <StyleForProfilButton>
            <StyleForAvatar src={detailsUser.avatar}/>
            <StyleForPseudo>{detailsUser.pseudo}</StyleForPseudo>
        </StyleForProfilButton>
    )
}

export default ProfilButton;