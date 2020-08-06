import React, { useContext } from 'react';
import { AuthContext } from "../App";


import logoGamovore from '../logogamovorebrown.png';
import Header from './Header';
import ProfilButton from "./ProfilButton";
import Button from "./Button";
import Identity from "./Identity";
import IsLogged from "./IsLogged";
import Linked from "./Linked";
import Title from "./Title";

function HeaderBox () {
    const { currentUser } = useContext(AuthContext);
    return (
        <Header>
            <Identity>
            <img src={logoGamovore} alt="logo_gamovore" width="8%"/>
            <Title>Gamovore</Title>
            </Identity>
            <IsLogged>
            {currentUser? <ProfilButton/> : <Linked to="/sign-in"><Button>Connexion</Button></Linked>
            } 
            </IsLogged>
        </Header>
    );
}

export default HeaderBox;
