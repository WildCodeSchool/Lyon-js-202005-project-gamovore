import React, {useContext} from 'react';
import { AuthContext } from "../App";
import { UserBase } from "../UserBase";

import StyleForPseudo from "./Pseudo";
import StyleForAvatar from "./Avatar";
import StyleForProfilButton from "./StyledProfilButton";
import Linked from "./Linked";



const ProfilButton = () => {
    const { currentUser } = useContext(AuthContext);
    const detailsUser = UserBase.find(el => el.pseudo === currentUser);
    return (
        <Linked to=""><StyleForProfilButton>
            <StyleForAvatar src={detailsUser.avatar}/>
            <StyleForPseudo>{detailsUser.pseudo}</StyleForPseudo>
        </StyleForProfilButton>
        </Linked>
    )
}

export default ProfilButton;