import React from 'react';

import styled from "styled-components";
import StyleForPseudo from "./Pseudo";
import StyleForAvatar from "./Avatar";
import StyleForProfilButton from "./StyledProfilButton";

const user = {name: "KikiDu69", avatar:"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"};

const ProfilButton = () => {
    return (
        <StyleForProfilButton>
            <StyleForAvatar src={user.avatar}/>
            <StyleForPseudo>{user.name}</StyleForPseudo>
        </StyleForProfilButton>
    )
}

export default ProfilButton;