import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
padding: 1em;
background: #555;
width: 200px;
display: flex;
align-items: center;
`;

const StyledAvatar = styled.img`
border-radius: 50%;
margin-right: 1em;
width: 3vw;
height: 3vw;
`;

const StyledPseudo = styled.p`
margin: 0 0 0.25rem;
color: #eee;
font-weight: 500;
font-size: 2vw

`;


const user = {name: "KikiDu69", avatar:"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"};

const ProfilButton = () => {
    return (
        <StyledButton className="profilButton">
            <StyledAvatar src={user.avatar} alt="photo of the kiki"/>
            <StyledPseudo>{user.name}</StyledPseudo>
        </StyledButton>
    )
}

export default ProfilButton;